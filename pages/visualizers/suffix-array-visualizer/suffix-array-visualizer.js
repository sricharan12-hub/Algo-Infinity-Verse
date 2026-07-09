(() => {
  // ===== State =====
  const state = {
    s: 'banana',
    steps: [], // round-by-round snapshots
    idx: 0,
    playing: false,
    timer: null,
    delay: 400,
    activeSuffixRow: -1,
    selectedRowIdx: -1,


    caseInsensitive: true,
    allowSpaces: true,
  };


  // ===== DOM =====
  const el = {
    textInput: document.getElementById('saTextInput'),
    methodSelect: document.getElementById('saMethodSelect'),
    speedRange: document.getElementById('saSpeedRange'),
    speedDisplay: document.getElementById('saSpeedDisplay'),
    roundSlider: document.getElementById('saRoundSlider'),

    kDisplay: document.getElementById('saKDisplay'),
    lenDisplay: document.getElementById('saLenDisplay'),

    playBtn: document.getElementById('saPlayBtn'),
    pauseBtn: document.getElementById('saPauseBtn'),
    stepBackBtn: document.getElementById('saStepBackBtn'),
    stepForwardBtn: document.getElementById('saStepForwardBtn'),
    resetBtn: document.getElementById('saResetBtn'),

    stepIndicator: document.getElementById('saStepIndicator'),
    phaseLabel: document.getElementById('saPhaseLabel'),
    explanation: document.getElementById('saExplanation'),
    status: document.getElementById('saStatus'),

    tableBody: document.getElementById('saRankTableBody'),
    finalOrder: document.getElementById('saFinalOrder'),

    timeComplexity: document.getElementById('saTimeComplexity'),
    spaceComplexity: document.getElementById('saSpaceComplexity'),

    caseInsensitiveToggle: document.getElementById('saCaseInsensitiveToggle'),
    allowSpacesToggle: document.getElementById('saAllowSpacesToggle'),
    modeHint: document.getElementById('saModeHint'),
    inputWarning: document.getElementById('saInputWarning'),

    // Drill-down panel elements
    selectedSuffixIndex: document.getElementById('saSelectedSuffixIndex'),
    firstHalfRank: document.getElementById('saFirstHalfRank'),
    secondHalfRank: document.getElementById('saSecondHalfRank'),
    combinedKey: document.getElementById('saCombinedKey'),
    adjacentComparison: document.getElementById('saAdjacentComparison'),
    drilldownReason: document.getElementById('saDrilldownReason'),

  };


  // ===== Helpers =====
  const safeStr = (x) => (typeof x === 'string' ? x : '');

  function normalizeInput(str) {
    const raw = safeStr(str);

    // Trim ends always (keeps behavior predictable across modes).
    let s = raw.trim();

    if (state.caseInsensitive) {
      s = s.toLowerCase();
    }

    if (!state.allowSpaces) {
      // Educational rule: if spaces aren't allowed, we remove ALL space characters.
      // That means "a b" becomes "ab".
      s = s.replace(/\s+/g, '');
    }

    return s;
  }

  function renderModeHint() {
    if (!el.modeHint) return;

    const caseText = state.caseInsensitive
      ? 'Using case-insensitive mode: “A” equals “a”.'
      : 'Using case-sensitive mode: “A” is different from “a”.';

    const spacesText = state.allowSpaces
      ? 'Spaces are allowed inside the string.'
      : 'Spaces are not allowed: they are removed before ranking.';

    el.modeHint.textContent = `${caseText} ${spacesText}`;
  }

  function validateAndWarn() {
    if (!el.inputWarning || !el.status) return;

    const raw = el.textInput ? el.textInput.value : '';
    const normalized = normalizeInput(raw);
    const n = normalized.length;

    const hardMax = 60;

    if (n === 0) {
      el.inputWarning.textContent = 'Warning: input is empty after applying the mode rules.';
      el.inputWarning.style.display = 'block';
      return;
    }

    // Use a gentle warning threshold for learning/performance.
    const warnings = [];
    if (n > hardMax) {
      warnings.push(`Input length ${n} exceeds ${hardMax} (animation may be slow).`);
    }

    if (n > 50) {
      warnings.push('Tip: shorter strings (n ≤ 50) make the learning loop smoother.');
    }

    el.inputWarning.textContent = warnings.length ? warnings.join(' ') : '';
    el.inputWarning.style.display = warnings.length ? 'block' : 'none';
  }




  function getCharCodeMap(s) {
    // Compress initial ranks by character.
    // Using UTF-16 code units ranking.
    const chars = s.split('');
    const unique = Array.from(new Set(chars)).sort();
    const map = new Map();
    unique.forEach((ch, i) => map.set(ch, i));
    return { map, chars };
  }

  function buildDoublingSteps(s) {
    const n = s.length;
    if (n === 0) {
      return {
        steps: [],
        finalOrder: [],
      };
    }
    if (n === 1) {
      return {
        steps: [
          {
            phase: 'Initialization',
            k: 0,
            len: 1,
            ordering: [0],
            ranks: [0],
            nextRanks: [0],
            keys: [[0, -1]],
            updated: [true],
            explanation: 'Single character string: suffix rank is already unique.',
          },
        ],
        finalOrder: [0],
      };
    }

    const { map, chars } = getCharCodeMap(s);
    let ranks = chars.map((ch) => map.get(ch));

    // initial ordering by single-character rank
    let ordering = Array.from({ length: n }, (_, i) => i).sort((a, b) => {
      if (ranks[a] !== ranks[b]) return ranks[a] - ranks[b];
      return a - b;
    });

    const steps = [];

    // Round 0 / Initialization
    {
      const keys = ordering.map((i) => [ranks[i], -1]);
      steps.push({
        phase: 'Initialization',
        k: 0,
        len: 1,
        ordering: ordering.slice(),
        ranks: ranks.slice(),
        nextRanks: ranks.slice(),
        keys,
        updated: ordering.map(() => false),
        explanation:
          'Assign initial ranks based on characters. Ordering is sorted by first-character rank.',
      });
    }

    let k = 0;
    let len = 1;
    while (true) {
      // key pair = (rank[i], rank[i+len])
      const keys = Array.from({ length: n }, (_, i) => {
        const r1 = ranks[i];
        const r2 = i + len < n ? ranks[i + len] : -1;
        return [r1, r2];
      });

      ordering = Array.from({ length: n }, (_, i) => i).sort((a, b) => {
        const ka = keys[a];
        const kb = keys[b];
        if (ka[0] !== kb[0]) return ka[0] - kb[0];
        if (ka[1] !== kb[1]) return ka[1] - kb[1];
        return a - b;
      });

      // compute new ranks after sorting by keys
      const nextRanks = new Array(n).fill(0);
      let curRank = 0;
      nextRanks[ordering[0]] = 0;

      for (let idx = 1; idx < n; idx++) {
        const prev = ordering[idx - 1];
        const curr = ordering[idx];
        const same = keys[prev][0] === keys[curr][0] && keys[prev][1] === keys[curr][1];
        if (!same) curRank++;
        nextRanks[curr] = curRank;
      }

      // determine updated rows (educational)
      const updated = ordering.map((i) => nextRanks[i] !== ranks[i]);

      steps.push({
        phase: 'Round (doubling)',
        k,
        len,
        ordering: ordering.slice(),
        ranks: ranks.slice(),
        nextRanks: nextRanks.slice(),
        keys: ordering.map((i) => keys[i]),
        updated,
        explanation:
          `Sorted suffixes by key (rank[i], rank[i+${len}]) and reassigned ranks (new rank ids are compressed from sorted unique keys).`,
      });

      ranks = nextRanks;

      // stop if all ranks are unique
      const maxRank = Math.max(...ranks);
      if (maxRank === n - 1) break;

      k++;
      len *= 2;
      if (len > n) break;
    }

    // final ordering: rank-based sort
    const finalOrdering = Array.from({ length: n }, (_, i) => i).sort((a, b) => {
      if (ranks[a] !== ranks[b]) return ranks[a] - ranks[b];
      return a - b;
    });

    return { steps, finalOrder: finalOrdering };
  }

  function substringForSuffix(s, i, maxLen = 18) {
    const sub = s.slice(i);
    if (sub.length <= maxLen) return sub;
    return sub.slice(0, maxLen) + '…';
  }

  function setButtons() {
    const total = state.steps.length;
    const atStart = state.idx <= 0;
    const atEnd = total === 0 || state.idx >= total - 1;

    el.stepBackBtn.disabled = total === 0 || atStart;
    el.stepForwardBtn.disabled = total === 0 || atEnd;

    el.pauseBtn.disabled = !state.playing;
  }

  function updateDrillDownPanel() {
    const step = state.steps[state.idx];
    if (!step || !el.selectedSuffixIndex) return;

    const totalRows = step.ordering ? step.ordering.length : 0;
    if (state.selectedRowIdx < 0 || state.selectedRowIdx >= totalRows) {
      el.selectedSuffixIndex.textContent = '—';
      el.firstHalfRank.textContent = '—';
      el.secondHalfRank.textContent = '—';
      el.combinedKey.textContent = '—';
      el.adjacentComparison.textContent = '—';
      el.drilldownReason.textContent = 'Select a row in the table to see reasoning.';
      return;
    }

    const suffixIndex = step.ordering[state.selectedRowIdx];
    const len = step.len;
    const n = state.s.length;

    const firstHalfRank = step.ranks ? step.ranks[suffixIndex] : undefined;
    const secondHalfIndex = suffixIndex + len;
    const secondHalfRank = secondHalfIndex < n && step.ranks ? step.ranks[secondHalfIndex] : -1;

    const combinedKey = `(${firstHalfRank ?? '-'}, ${secondHalfRank})`;

    // Adjacent suffix reasoning: compare against previous row in sorted order.


    const prevRowIdx = state.selectedRowIdx - 1;

    let adjacentText = '—';
    let reasonText = '';

    if (prevRowIdx >= 0) {
      const prevSuffixIndex = step.ordering[prevRowIdx];
      const prevFirstHalfRank = step.ranks ? step.ranks[prevSuffixIndex] : undefined;
      const prevSecondHalfIndex = prevSuffixIndex + len;
      const prevSecondHalfRank =
        prevSecondHalfIndex < n && step.ranks ? step.ranks[prevSecondHalfIndex] : -1;

      const thisKey = [firstHalfRank, secondHalfRank];
      const prevKey = [prevFirstHalfRank, prevSecondHalfRank];

      const same0 = thisKey[0] === prevKey[0];
      const same1 = thisKey[1] === prevKey[1];

      if (same0 && same1) {
        adjacentText = `Adjacent previous suffix key is equal (${combinedKey}).`;
        reasonText =
          'Keys are equal, so ranks tie. The ordering falls back to suffix index tie-breaker in sorting.';
      } else {
        // Lexicographic compare for the doubling key.
        // Higher key means it should appear after in ascending sort; we can describe relative.
        let cmp = 0;
        if ((thisKey[0] ?? -1) !== (prevKey[0] ?? -1)) {
          cmp = (thisKey[0] ?? -1) - (prevKey[0] ?? -1);
        } else {
          cmp = (thisKey[1] ?? -1) - (prevKey[1] ?? -1);
        }


        const rel = cmp > 0 ? 'greater than' : 'less than';
        const diffPart = !same0 ? 'first half rank' : 'second half rank';
        adjacentText = `Compared to previous suffix (row ${prevRowIdx}): key is ${rel} the adjacent key.`;
        reasonText = `Lexicographic compare of (rank[i], rank[i+len]) differs at ${diffPart}.`;
      }

      el.adjacentComparison.textContent = `${adjacentText}`;
      el.drilldownReason.textContent = reasonText;

      const prevSuffixPreview = substringForSuffix(state.s, step.ordering[prevRowIdx]);
      if (prevSuffixPreview) {
        // keep reasonText concise but informative
        // (No-op for now; panel already has main explanation.)
      }

    } else {
      el.adjacentComparison.textContent = 'No previous adjacent suffix in this sorted order.';
      el.drilldownReason.textContent = 'This suffix is the first row of the current sorted ordering.';
    }

    el.selectedSuffixIndex.textContent = String(suffixIndex);
    el.firstHalfRank.textContent = String(firstHalfRank ?? '-');
    el.secondHalfRank.textContent = String(secondHalfRank);
    el.combinedKey.textContent = combinedKey;
    // Keep len/k mention implicit in the combined key.
  }
+
+  function renderRound() {
    const total = state.steps.length;
    if (!total) {
      el.stepIndicator.textContent = `Round: 0 / 0`;
      el.phaseLabel.textContent = '—';
      el.explanation.textContent = 'Enter a string, then step through rounds.';
      el.tableBody.innerHTML = '';
      el.finalOrder.textContent = '—';
      if (el.roundSlider) {
        el.roundSlider.max = '0';
        el.roundSlider.value = '0';
      }
      if (el.kDisplay) el.kDisplay.textContent = '—';
      if (el.lenDisplay) el.lenDisplay.textContent = '—';
      setButtons();
      return;
    }

    const step = state.steps[state.idx];
    const n = state.s.length;

    // If nothing is selected yet, default to the first sorted row.
    if (state.selectedRowIdx < 0 && step && step.ordering && step.ordering.length > 0) {
      state.selectedRowIdx = 0;
    }


    el.stepIndicator.textContent = `Round: ${state.idx} / ${total - 1}`;
    el.phaseLabel.textContent = step.phase;
    el.explanation.textContent = step.explanation || '';

    // Update round slider + k/len
    if (el.roundSlider) {
      el.roundSlider.max = String(total - 1);
      el.roundSlider.value = String(state.idx);
    }
    if (el.kDisplay) el.kDisplay.textContent = step.k;
    if (el.lenDisplay) el.lenDisplay.textContent = step.len;

    // Table
    el.tableBody.innerHTML = '';

    // step.ordering is the sorted indices for this state
    step.ordering.forEach((suffixIndex, rowIdx) => {
      const tr = document.createElement('div');
      tr.className = 'sa-row';
      tr.setAttribute('role', 'row');

      const isActive = rowIdx === state.activeSuffixRow;
      const isUpdated = step.updated && step.updated[rowIdx];

      if (isActive) tr.classList.add('sa-active-row');
      if (isUpdated) tr.classList.add('sa-updated-row');

      const suffixText = substringForSuffix(state.s, suffixIndex);
      const rankVal = (step.nextRanks && step.nextRanks[suffixIndex] != null)
        ? step.nextRanks[suffixIndex]
        : (step.ranks ? step.ranks[suffixIndex] : 0);

      const keyPair = (step.keys && step.keys[rowIdx]) ? step.keys[rowIdx] : [null, null];

      // next rank reference: show the second component's rank reference
      const nextRankRef = keyPair && keyPair.length === 2 ? keyPair[1] : -1;

      const suffixCell = document.createElement('div');
      suffixCell.className = 'sa-cell suffix-cell';
      suffixCell.setAttribute('role', 'cell');
      suffixCell.title = `Suffix start at index ${suffixIndex}`;
      suffixCell.textContent = `${suffixIndex} → "${suffixText}"`;

      const rankCell = document.createElement('div');
      rankCell.className = 'sa-cell';
      rankCell.setAttribute('role', 'cell');
      rankCell.textContent = String(rankVal);

      const keyCell = document.createElement('div');
      keyCell.className = 'sa-cell';
      keyCell.setAttribute('role', 'cell');
      keyCell.textContent = `(${keyPair[0] ?? '-'}, ${nextRankRef ?? '-'})`;

      const nextRankCell = document.createElement('div');
      nextRankCell.className = 'sa-cell';
      nextRankCell.setAttribute('role', 'cell');
      nextRankCell.textContent = nextRankRef === -1 ? '∅ (-1)' : String(nextRankRef);

      tr.append(suffixCell, rankCell, keyCell, nextRankCell);

      tr.addEventListener('click', () => {
        state.selectedRowIdx = rowIdx;
        state.activeSuffixRow = rowIdx;
        updateDrillDownPanel();
        renderRound();
      });

      el.tableBody.appendChild(tr);
    });

    // Keep drill-down panel synced with current selected row for this round.
    if (state.selectedRowIdx < 0 && step.ordering && step.ordering.length > 0) {
      state.selectedRowIdx = 0;
    }
    updateDrillDownPanel();


    const isFinalRound = state.idx === total - 1;
    el.finalOrder.textContent = isFinalRound && state.finalOrder
      ? state.finalOrder.join(', ')
      : '—';

    setButtons();
  }

  function computeFinalOrderIfMissing() {
    if (!state.finalOrder) {
      const last = state.steps[state.steps.length - 1];
      if (last && last.ordering) state.finalOrder = last.ordering.slice();
      else state.finalOrder = [];
    }
  }

  function stopPlay() {
    state.playing = false;
    if (state.timer) {
      clearTimeout(state.timer);
      state.timer = null;
    }
    el.playBtn.disabled = false;
    el.pauseBtn.disabled = true;
    setButtons();
  }

  function play() {
    if (state.playing) return;
    const total = state.steps.length;
    if (!total) return;

    state.playing = true;
    el.pauseBtn.disabled = false;
    el.playBtn.disabled = true;

    const tick = () => {
      if (!state.playing) return;
      if (state.idx >= total - 1) {
        stopPlay();
        return;
      }
      state.idx += 1;
      state.activeSuffixRow = 0;
      renderRound();
      state.timer = setTimeout(tick, state.delay);
    };

    tick();
  }

  function stepForward() {
    const total = state.steps.length;
    if (!total) return;
    if (state.idx >= total - 1) return;
    stopPlay();
    state.idx += 1;
    state.activeSuffixRow = 0;
    computeFinalOrderIfMissing();
    renderRound();
  }

  function stepBack() {
    const total = state.steps.length;
    if (!total) return;
    if (state.idx <= 0) return;
    stopPlay();
    state.idx -= 1;
    state.activeSuffixRow = 0;
    renderRound();
  }

  function generateAndReset() {
    stopPlay();

    const s = normalizeInput(el.textInput ? el.textInput.value : '');
    state.s = s;

    const { steps, finalOrder } = buildDoublingSteps(s);
    state.steps = steps;
    state.idx = 0;
    state.activeSuffixRow = 0;
    state.finalOrder = finalOrder;

    // Update slider
    if (el.roundSlider) {
      el.roundSlider.max = String(Math.max(0, state.steps.length - 1));
      el.roundSlider.value = '0';
    }

    el.status.textContent = s.length
      ? 'Ready. Step through rounds to watch rank changes.'
      : 'Enter a non-empty string to generate suffix array rounds.';

    validateAndWarn();
    renderModeHint();
    renderRound();
  }


  // ===== Init =====
  function init() {
    // Set complexity text from spec/education
    if (el.timeComplexity) el.timeComplexity.textContent = 'O(n log² n)';
    if (el.spaceComplexity) el.spaceComplexity.textContent = 'O(n)';

    // Speed
    if (el.speedRange) {
      state.delay = Number(el.speedRange.value || 400);
      if (el.speedDisplay) el.speedDisplay.textContent = `${state.delay}ms`;
      el.speedRange.addEventListener('input', (e) => {
        state.delay = Number(e.target.value);
        if (el.speedDisplay) el.speedDisplay.textContent = `${state.delay}ms`;
        if (state.playing) {
          stopPlay();
          play();
        }
      });
    }

    // Round slider
    if (el.roundSlider) {
      el.roundSlider.addEventListener('input', (e) => {
        stopPlay();
        state.idx = Number(e.target.value);
        state.activeSuffixRow = 0;
        renderRound();
      });
    }

    // Buttons
    if (el.playBtn) el.playBtn.addEventListener('click', () => play());
    if (el.pauseBtn) el.pauseBtn.addEventListener('click', () => stopPlay());
    if (el.stepForwardBtn) el.stepForwardBtn.addEventListener('click', () => stepForward());
    if (el.stepBackBtn) el.stepBackBtn.addEventListener('click', () => stepBack());
    if (el.resetBtn) el.resetBtn.addEventListener('click', () => generateAndReset());

    // Toggles
    const applyTogglesFromUI = () => {
      if (el.caseInsensitiveToggle) state.caseInsensitive = !!el.caseInsensitiveToggle.checked;
      if (el.allowSpacesToggle) state.allowSpaces = !!el.allowSpacesToggle.checked;
      // Also re-render hints/warnings live, even before Generate/Reset.
      validateAndWarn();
      renderModeHint();
    };

    if (el.caseInsensitiveToggle) {
      el.caseInsensitiveToggle.addEventListener('change', () => {
        applyTogglesFromUI();
        generateAndReset();
      });
    }

    if (el.allowSpacesToggle) {
      el.allowSpacesToggle.addEventListener('change', () => {
        applyTogglesFromUI();
        generateAndReset();
      });
    }

    // Input validation (real-time)
    if (el.textInput) {
      el.textInput.addEventListener('input', () => {
        validateAndWarn();
        renderModeHint();
      });

      // Input: press Enter generates
      el.textInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') generateAndReset();
      });
    }

    // Sync initial toggle states
    applyTogglesFromUI();

    // Initial render
    generateAndReset();

  }

  document.addEventListener('DOMContentLoaded', init);
})();

