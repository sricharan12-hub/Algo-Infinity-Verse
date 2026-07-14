/* ============================================
   VISUALIZERS — Data, Search & Filter
   ============================================ */

const visualizers = [
  // ── Sorting & Searching ──
  {
    name: 'Sorting Visualizer',
    path: '/pages/visualizers/sorting-visualizer/sorting-visualizer.html',
    category: 'Sorting & Searching',
    icon: 'fa-chart-bar',
    desc: 'Watch bubble, selection, insertion, merge, and quick sort algorithms animate step by step.',
  },
  {
    name: 'Sorting Visualizer (Pro)',
    path: '/pages/sort/sorting-visualizer.html',
    category: 'Sorting & Searching',
    icon: 'fa-chart-line',
    desc: 'Advanced sorting visualizer with custom data sets and performance metrics.',
  },
  {
    name: 'Rabin-Karp Visualizer',
    path: '/pages/visualizers/rabin-karp-visualizer/rabin-karp-visualizer.html',
    category: 'Sorting & Searching',
    icon: 'fa-search',
    desc: 'Visualize the Rabin-Karp string matching algorithm using rolling hash.',
  },
  {
    name: 'String Matching Visualizer',
    path: '/pages/visualizers/string-matching-visualizer/string-matching-visualizer.html',
    category: 'Sorting & Searching',
    icon: 'fa-font',
    desc: 'Compare different string matching algorithms side by side.',
  },
  {
    name: 'KMP Prefix Function Visualizer',
    path: '/pages/visualizers/prefix-function-kmp-visualizer/kmp-visualizer.html',
    category: 'Sorting & Searching',
    icon: 'fa-link',
    desc: 'Step through the Knuth-Morris-Pratt algorithm and its prefix function.',
  },
  {
    name: 'Suffix Array Visualizer',
    path: '/pages/visualizers/suffix-array-visualizer/suffix-array-visualizer.html',
    category: 'Sorting & Searching',
    icon: 'fa-list',
    desc: 'Build and explore suffix arrays for string processing.',
  },
  {
    name: 'Big-O Analyzer',
    path: '/pages/visualizers/big-o-analyzer/big-o-analyzer.html',
    category: 'Sorting & Searching',
    icon: 'fa-stopwatch',
    desc: 'Visualize time complexity growth rates across different algorithms.',
  },
  {
    name: 'Binary Search Visualizer',
    path: '/pages/learning/binary-search/binary-search.html',
    category: 'Sorting & Searching',
    icon: 'fa-crosshairs',
    desc: 'Interactive binary search with divide-and-conquer visualization.',
  },
  {
    name: 'Fast/Slow Pointer Simulator',
    path: '/pages/visualizers/fast-slow-pointer-simulator/fast-slow-pointer-simulator.html',
    category: 'Sorting & Searching',
    icon: 'fa-arrows-left-right',
    desc: "Visualize Floyd's cycle detection algorithm with fast and slow pointers.",
  },

  // ── Trees & BSTs ──
  {
    name: 'Tree Visualizer',
    path: '/pages/visualizers/tree-visualizer/tree-visualizer.html',
    category: 'Trees & BSTs',
    icon: 'fa-tree',
    desc: 'Build, modify, and traverse binary search trees with animated DFS/BFS.',
  },
  {
    name: 'Tree Traversals',
    path: '/pages/visualizers/tree-traversal/tree-traversal.html',
    category: 'Trees & BSTs',
    icon: 'fa-arrows-rotate',
    desc: 'Master inorder, preorder, postorder, and level-order tree traversals.',
  },
  {
    name: 'Self-Balancing Trees',
    path: '/pages/visualizers/self-balancing-trees/self-balancing-trees.html',
    category: 'Trees & BSTs',
    icon: 'fa-scale-balanced',
    desc: 'Visualize AVL and Red-Black tree rotations and rebalancing.',
  },
  {
    name: 'Red-Black Tree Visualizer',
    path: '/pages/visualizers/virbt-visualizer/rbt-visualizer.html',
    category: 'Trees & BSTs',
    icon: 'fa-circle',
    desc: 'Step through Red-Black tree insertions, deletions, and color flips.',
  },
  {
    name: 'B+ Tree Visualizer',
    path: '/pages/visualizers/bplus-tree-visualizer/bplus-tree-visualizer.html',
    category: 'Trees & BSTs',
    icon: 'fa-code-branch',
    desc: 'Explore B+ tree structure with split and merge operations.',
  },
  {
    name: 'B-Tree Visualizer',
    path: '/pages/visualizers/b-tree-visualizer/b-tree-visualizer.html',
    category: 'Trees & BSTs',
    icon: 'fa-seedling',
    desc: 'Interactive B-tree with degree-based split and merge animations.',
  },
  {
    name: 'KD-Tree Visualizer',
    path: '/pages/visualizers/kd-tree-visualizer/kd-tree-visualizer.html',
    category: 'Trees & BSTs',
    icon: 'fa-ruler-combined',
    desc: 'Build and query k-dimensional trees for spatial partitioning.',
  },
  {
    name: 'Trie Visualizer',
    path: '/pages/visualizers/trie-visualizer/trie-visualizer.html',
    category: 'Trees & BSTs',
    icon: 'fa-language',
    desc: 'Visualize prefix tree operations: insert, search, and delete words.',
  },
  {
    name: 'Segment Tree Simulator',
    path: '/pages/visualizers/segment-tree-simulator/segment-tree-simulator.html',
    category: 'Trees & BSTs',
    icon: 'fa-chart-simple',
    desc: 'Build and query segment trees for range sum, min, and max.',
  },
  {
    name: 'Persistent Segment Tree',
    path: '/pages/visualizers/persistent-segtree/persistent-segtree.html',
    category: 'Trees & BSTs',
    icon: 'fa-floppy-disk',
    desc: 'Explore persistent data structures with versioned segment trees.',
  },
  {
    name: 'Heap Percolation Visualizer',
    path: '/pages/visualizers/heap-percolation-visualizer/heap-percolation-visualizer.html',
    category: 'Trees & BSTs',
    icon: 'fa-chart-line',
    desc: 'Watch heapify, percolate up, and percolate down in action.',
  },
  {
    name: '3D Heap Visualizer',
    path: '/pages/visualizers/heap-3d-visualizer/heap-3d-visualizer.html',
    category: 'Trees & BSTs',
    icon: 'fa-cube',
    desc: 'A 3D visualization of binary heap structure and operations.',
  },
  {
    name: 'LSM Tree Visualizer',
    path: '/pages/visualizers/lsm-tree/lsm-tree.html',
    category: 'Trees & BSTs',
    icon: 'fa-database',
    desc: 'Understand Log-Structured Merge Tree architecture and compaction.',
  },
  {
    name: 'Binomial Heap Visualizer',
    path: '/pages/visualizers/binomial-heap/binomial-heap.html',
    category: 'Trees & BSTs',
    icon: 'fa-book',
    desc: 'Visualize binomial heap merge and extract-min operations.',
  },

  // ── Graph Algorithms ──
  {
    name: 'Graph Visualizer',
    path: '/pages/visualizers/graph-visualizer/graph-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-project-diagram',
    desc: 'Build graphs interactively and run BFS, DFS, and shortest path algorithms.',
  },
  {
    name: 'Graph Visualizer (Pro)',
    path: '/pages/graph/graph-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-globe',
    desc: 'Advanced graph editor with weighted edges and multiple algorithm support.',
  },
  {
    name: 'Topological Sort Visualizer',
    path: '/pages/visualizers/topological-sort-visualizer/topological-sort-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-list',
    desc: "Visualize Kahn's algorithm and DFS-based topological ordering.",
  },
  {
    name: 'Min-Cost Max-Flow Visualizer',
    path: '/pages/visualizers/min-cost-max-flow-visualizer/min-cost-max-flow-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-coins',
    desc: 'Optimize flow networks with minimum cost maximum flow algorithms.',
  },
  {
    name: 'Ford-Fulkerson Visualizer',
    path: '/pages/visualizers/ford-fulkerson-visualizer/ford-fulkerson-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-water',
    desc: 'Visualize the Ford-Fulkerson method for computing maximum flow.',
  },
  {
    name: 'Hopcroft-Karp Visualizer',
    path: '/pages/visualizers/hopcroft-karp-visualizer/hopcroft-karp-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-person-running',
    desc: 'Maximum bipartite matching visualized with augmenting paths.',
  },
  {
    name: 'Bellman-Ford & SPFA',
    path: '/pages/visualizers/bellman-ford-visualizer/bellman-ford-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-bell',
    desc: 'Shortest path with negative weights — Bellman-Ford and SPFA algorithms.',
  },
  {
    name: 'Network Routing Simulator',
    path: '/pages/visualizers/network-routing-simulator/network-routing-simulator.html',
    category: 'Graph Algorithms',
    icon: 'fa-wifi',
    desc: 'Simulate routing protocols and visualize network topology.',
  },
  {
    name: 'Graph Algorithm Race',
    path: '/pages/visualizers/graph-algorithm-race/graph-algorithm-race.html',
    category: 'Graph Algorithms',
    icon: 'fa-flag-checkered',
    desc: 'Compare graph algorithm performance side by side in real time.',
  },
  {
    name: 'Pathfinding Visualizer',
    path: '/pages/visualizers/pathfinding-visualizer/pathfinding-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-map',
    desc: 'Visualize A*, Dijkstra, BFS, and DFS pathfinding on a grid.',
  },
  {
    name: 'Pathfinding Arena',
    path: '/pages/visualizers/pathfinding-arena/pathfinding-arena.html',
    category: 'Graph Algorithms',
    icon: 'fa-crosshairs',
    desc: 'Pit pathfinding algorithms against each other in an arena.',
  },
  {
    name: '3D Pathfinding',
    path: '/pages/visualizers/3d-pathfinding/3d-pathfinding.html',
    category: 'Graph Algorithms',
    icon: 'fa-cube',
    desc: 'Pathfinding in 3D space with volumetric obstacles.',
  },
  {
    name: 'Pathfinding Under Fire',
    path: '/pages/visualizers/pathfinding-under-fire/pathfinding-under-fire.html',
    category: 'Graph Algorithms',
    icon: 'fa-bolt',
    desc: 'Dynamic pathfinding with obstacles moving in real time.',
  },
  {
    name: 'Union-Find Visualizer',
    path: '/pages/visualizers/union-find-visualizer/union-find-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-link',
    desc: 'Visualize Disjoint Set Union with path compression and union by rank.',
  },

  // ── Dynamic Programming ──
  {
    name: 'DP Visualizer',
    path: '/pages/visualizers/dp-visualizer/dp-visualizer.html',
    category: 'Dynamic Programming',
    icon: 'fa-bullseye',
    desc: 'Visualize DP table filling for classic problems like knapsack and LCS.',
  },
  {
    name: '3D DP Visualizer',
    path: '/pages/visualizers/3d-dp-visualizer/3d-dp-visualizer.html',
    category: 'Dynamic Programming',
    icon: 'fa-cube',
    desc: 'Three-dimensional DP with interactive table visualization.',
  },
  {
    name: 'Edit Distance Visualizer',
    path: '/pages/visualizers/edit-distance/edit-distance.html',
    category: 'Dynamic Programming',
    icon: 'fa-scissors',
    desc: 'Step through the Levenshtein distance DP table cell by cell.',
  },
  {
    name: 'Monotonic Deque Visualizer',
    path: '/pages/visualizers/monotonic-deque/monotonic-deque.html',
    category: 'Dynamic Programming',
    icon: 'fa-layer-group',
    desc: 'Visualize sliding window maximum using monotonic deque.',
  },
  {
    name: 'Recursion Tree Visualizer',
    path: '/pages/visualizers/recursion-tree-visualizer/recursion-tree-visualizer.html',
    category: 'Dynamic Programming',
    icon: 'fa-seedling',
    desc: 'See recursion trees grow as Fibonacci and other DP problems compute.',
  },

  // ── Systems & OS ──
  {
    name: 'Memory Palace — RAM Simulator',
    path: '/pages/visualizers/memory-palace/memory-palace.html',
    category: 'Systems & OS',
    icon: 'fa-landmark',
    desc: 'Visualize RAM allocation, paging, and memory addressing.',
  },
  {
    name: 'MESI Simulator',
    path: '/pages/visualizers/mesi-simulator/mesi-simulator.html',
    category: 'Systems & OS',
    icon: 'fa-arrows-rotate',
    desc: 'Cache coherence protocol simulation with MESI states.',
  },
  {
    name: 'OS Paging Simulator',
    path: '/pages/visualizers/os-paging/os-paging.html',
    category: 'Systems & OS',
    icon: 'fa-file',
    desc: 'Visualize page tables, TLB, and virtual-to-physical address translation.',
  },
  {
    name: 'Cache Replacement Arena',
    path: '/pages/visualizers/cache-replacement-arena/cache-replacement-arena.html',
    category: 'Systems & OS',
    icon: 'fa-bolt',
    desc: 'Compare LRU, LFU, FIFO, and other cache replacement policies.',
  },
  {
    name: 'GC Visualizer',
    path: '/pages/visualizers/gc-visualizer/gc-visualizer.html',
    category: 'Systems & OS',
    icon: 'fa-trash-can',
    desc: 'Visualize garbage collection algorithms: mark-sweep, copy, and compact.',
  },
  {
    name: 'Garbage Collector Simulator',
    path: '/pages/visualizers/gc-simulator/gc-simulator.html',
    category: 'Systems & OS',
    icon: 'fa-broom',
    desc: 'Interactive GC simulator with generational collection strategies.',
  },
  {
    name: 'QUIC & HTTP/3 Simulator',
    path: '/pages/visualizers/quic-simulator/quic-simulator.html',
    category: 'Systems & OS',
    icon: 'fa-network-wired',
    desc: "Interactive simulator comparing TCP/TLS handshakes against QUIC's 0-RTT.",
  },
  {
    name: 'Kubernetes Pod Scheduler',
    path: '/pages/visualizers/kube-scheduler/kube-scheduler.html',
    category: 'Systems & OS',
    icon: 'fa-dharmachakra',
    desc: 'Visualize Kube-Scheduler filtering, scoring, and bin-packing algorithms.',
  },
  {
    name: 'V8 GC Visualizer',
    path: '/pages/visualizers/v8-gc/v8-gc.html',
    category: 'Systems & OS',
    icon: 'fa-gear',
    desc: "Visualize V8 JavaScript engine's garbage collection phases.",
  },
  {
    name: 'Malloc Visualizer',
    path: '/pages/visualizer/malloc-visualizer/malloc-visualizer.html',
    category: 'Systems & OS',
    icon: 'fa-puzzle-piece',
    desc: 'Visualize dynamic memory allocation with malloc and free.',
  },
  {
    name: 'SSD Simulator',
    path: '/pages/visualizers/ssd-simulator/ssd-simulator.html',
    category: 'Systems & OS',
    icon: 'fa-hard-drive',
    desc: 'Simulate SSD wear leveling, garbage collection, and FTL mapping.',
  },
  {
    name: 'Branch Predictor Simulator',
    path: '/pages/visualizers/branch-predictor-simulator/branch-predictor-simulator.html',
    category: 'Systems & OS',
    icon: 'fa-shuffle',
    desc: 'Visualize branch prediction with 2-bit saturating counters.',
  },
  {
    name: 'Concurrency Simulator',
    path: '/pages/visualizers/concurrency-simulator/concurrency-simulator.html',
    category: 'Systems & OS',
    icon: 'fa-layer-group',
    desc: 'Simulate threads, locks, semaphores, and race conditions.',
  },
  {
    name: 'Lock-Free Playground',
    path: '/pages/visualizers/lock-free-playground/lock-free-playground.html',
    category: 'Systems & OS',
    icon: 'fa-atom',
    desc: 'Explore lock-free data structures with CAS operations visualized.',
  },
  {
    name: 'TCP Visualizer',
    path: '/pages/visualizers/tcp-visualizer/tcp-visualizer.html',
    category: 'Systems & OS',
    icon: 'fa-envelope',
    desc: 'Visualize TCP handshake, congestion control, and flow control.',
  },
  {
    name: 'QUIC & HTTP/3 Simulator',
    path: '/pages/visualizers/quic-simulator/quic-simulator.html',
    category: 'Systems & OS',
    icon: 'fa-network-wired',
    desc: "Interactive simulator comparing TCP/TLS handshakes against QUIC's 0-RTT.",
  },
  {
    name: 'Git Visualizer',
    path: '/pages/ai-features/git-visualizer/git-visualizer.html',
    category: 'Systems & OS',
    icon: 'fa-code-branch',
    desc: 'Visualize Git internals: commits, branches, merges, and the DAG commit graph.',
  },
  {
    name: 'ARIES Recovery Simulator',
    path: '/pages/visualizers/aries-simulator/aries-simulator.html',
    category: 'Systems & OS',
    icon: 'fa-database',
    desc: 'Visualize ARIES database recovery: Analysis, Redo, and Undo phases.',
  },
  {
    name: 'Spanning Tree Protocol (STP)',
    path: '/pages/visualizers/stp-simulator/stp-simulator.html',
    category: 'Systems & OS',
    icon: 'fa-network-wired',
    desc: 'Simulate STP to prevent network loops and elect root bridges.',
  },

  // ── CPU Scheduling ──
  {
    name: 'FCFS Visualizer',
    path: '/pages/visualizers/fcfs-visualizer/fcfs-visualizer.html',
    category: 'CPU Scheduling',
    icon: 'fa-list',
    desc: 'First Come First Serve CPU scheduling with Gantt chart visualization.',
  },
  {
    name: 'SJF Visualizer',
    path: '/pages/visualizers/sjf-visualizer/sjf-visualizer.html',
    category: 'CPU Scheduling',
    icon: 'fa-ruler',
    desc: 'Shortest Job First scheduling with average wait time calculation.',
  },
  {
    name: 'SRTF Visualizer',
    path: '/pages/visualizers/srtf-visualizer/srtf-visualizer.html',
    category: 'CPU Scheduling',
    icon: 'fa-stopwatch',
    desc: 'Shortest Remaining Time First preemptive scheduling visualized.',
  },
  {
    name: 'Round Robin Visualizer',
    path: '/pages/visualizers/rr-visualizer/rr-visualizer.html',
    category: 'CPU Scheduling',
    icon: 'fa-arrows-rotate',
    desc: 'Round Robin scheduling with adjustable time quantum.',
  },
  {
    name: 'Priority Scheduling Visualizer',
    path: '/pages/visualizers/priority-scheduling-visualizer/priority-scheduling-visualizer.html',
    category: 'CPU Scheduling',
    icon: 'fa-star',
    desc: 'Non-preemptive priority-based CPU scheduling visualization.',
  },
  {
    name: 'Priority Preemptive Visualizer',
    path: '/pages/visualizers/priority-preemptive-visualizer/priority-preemptive-visualizer.html',
    category: 'CPU Scheduling',
    icon: 'fa-arrow-up',
    desc: 'Preemptive priority scheduling with context switch tracking.',
  },
  {
    name: 'MLFQ Scheduling Visualizer',
    path: '/pages/visualizers/mlfq-scheduling-visualizer/mlfq-scheduling-visualizer.html',
    category: 'CPU Scheduling',
    icon: 'fa-chart-bar',
    desc: 'Multi-Level Feedback Queue — the classic OS scheduling algorithm.',
  },

  // ── Distributed Systems ──
  {
    name: 'Raft Simulator',
    path: '/pages/ai-features/raft-simulator/raft-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-anchor',
    desc: 'Interactive Raft consensus algorithm: leader election and log replication.',
  },
  {
    name: 'PBFT Simulator',
    path: '/pages/visualizers/pbft-simulator/pbft-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-shield-halved',
    desc: 'Practical Byzantine Fault Tolerance consensus visualized.',
  },
  {
    name: 'Consistent Hashing Visualizer',
    path: '/pages/visualizers/consistent-hashing-visualizer/consistent-hashing-visualizer.html',
    category: 'Distributed Systems',
    icon: 'fa-bullseye',
    desc: 'Distribute keys across nodes with consistent hashing ring.',
  },
  {
    name: 'Chord DHT Ring Simulator',
    path: '/pages/visualizers/chord-simulator/chord-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-circle-notch',
    desc: 'Interactive Chord DHT simulator demonstrating finger table dynamic calculation and routing paths.',
  },
  {
    name: 'Kafka Simulator',
    path: '/pages/visualizers/kafka-simulator/kafka-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-envelope',
    desc: 'Simulate Apache Kafka topics, partitions, and consumer groups.',
  },
  {
    name: 'BitTorrent Swarm Simulator',
    path: '/pages/visualizers/bittorrent-simulator/bittorrent-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-project-diagram',
    desc: 'Simulate a P2P swarm with Rarest-First piece selection and Tit-for-Tat choking.',
  },
  {
    name: 'Operational Transformation (OT) Simulator',
    path: '/pages/visualizers/ot-simulator/ot-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-random',
    desc: 'Interactive OT network simulator showing transformation math and conflict resolution.',
  },
  {
    name: 'Paxos Consensus Protocol Simulator',
    path: '/pages/visualizers/paxos-simulator/paxos-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-network-wired',
    desc: 'Interactive Paxos message exchange simulator demonstrating proposal consensus and network partitions.',
  },
  {
    name: 'Redlock Simulator',
    path: '/pages/visualizers/redlock-simulator/redlock-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-lock',
    desc: 'Redis-based distributed lock algorithm simulation.',
  },
  {
    name: 'Epidemic Protocol Simulator',
    path: '/pages/visualizers/epidemic-protocol-simulator/epidemic-protocol-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-share-nodes',
    desc: 'Gossip-based epidemic broadcasting and failure detection.',
  },
  {
    name: 'MapReduce Simulator',
    path: '/pages/visualizers/map-reduce-simulator/map-reduce-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-map',
    desc: 'Visualize Map and Reduce phases in distributed data processing.',
  },
  {
    name: 'MapReduce Orchestrator',
    path: '/pages/visualizers/mapreduce-orchestrator/mapreduce-orchestrator.html',
    category: 'Distributed Systems',
    icon: 'fa-diagram-project',
    desc: 'Orchestrate multi-stage MapReduce jobs with DAG visualization.',
  },
  {
    name: 'CRDT Visualizer',
    path: '/pages/visualizer/crdt-visualizer/crdt-visualizer.html',
    category: 'Distributed Systems',
    icon: 'fa-arrows-rotate',
    desc: 'Conflict-free Replicated Data Types for eventual consistency.',
  },
  {
    name: 'MVCC Simulator',
    path: '/pages/visualizer/mvcc-simulator/mvcc-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-pen',
    desc: 'Multi-Version Concurrency Control in database transactions.',
  },
  {
    name: 'DHT XOR Visualizer',
    path: '/pages/visualizers/dht-xor-visualizer/dht-xor-visualizer.html',
    category: 'Distributed Systems',
    icon: 'fa-calculator',
    desc: 'Kademlia Distributed Hash Table with XOR distance metric.',
  },
  {
    name: 'MPT Visualizer',
    path: '/pages/visualizers/mpt-visualizer/mpt-visualizer.html',
    category: 'Distributed Systems',
    icon: 'fa-tree',
    desc: 'Merkle Patricia Trie — the data structure behind Ethereum state.',
  },
  {
    name: 'Skip Graph Visualizer',
    path: '/pages/visualizers/skip-graph-visualizer/skip-graph-visualizer.html',
    category: 'Distributed Systems',
    icon: 'fa-chart-line',
    desc: 'Peer-to-peer skip graph for efficient distributed search.',
  },
  {
    name: 'Rsync Simulator',
    path: '/pages/visualizers/rsync-simulator/rsync-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-clone',
    desc: 'Simulate the Rsync algorithm showing rolling hashes and delta transfers.',
  },

  // ── Security & Cryptography ──
  {
    name: 'RSA Cryptography Visualizer',
    path: '/pages/visualizers/rsa-visualizer/rsa-visualizer.html',
    category: 'Security & Crypto',
    icon: 'fa-lock',
    desc: 'Walk through RSA key generation, encryption, and decryption.',
  },
  {
    name: 'ZKP Visualizer',
    path: '/pages/visualizers/zkp-visualizer/zkp-visualizer.html',
    category: 'Security & Crypto',
    icon: 'fa-user-secret',
    desc: 'Zero-Knowledge Proof concepts visualized step by step.',
  },
  {
    name: 'Shamir Secret Sharing',
    path: '/pages/visualizers/shamir-visualizer/shamir-visualizer.html',
    category: 'Security & Crypto',
    icon: 'fa-key',
    desc: "Visualize Shamir's secret sharing with polynomial interpolation.",
  },
  {
    name: 'Differential Privacy Sandbox',
    path: '/pages/visualizers/differential-privacy-sandbox/differential-privacy-sandbox.html',
    category: 'Security & Crypto',
    icon: 'fa-shield-halved',
    desc: 'Explore differential privacy with epsilon budgets and noise addition.',
  },
  {
    name: 'FHE Visualizer',
    path: '/pages/visualizers/fhe-evaluator/fhe-evaluator.html',
    category: 'Security & Crypto',
    icon: 'fa-eye',
    desc: 'Fully Homomorphic Encryption — compute on encrypted data.',
  },
  {
    name: 'ORAM Simulator',
    path: '/pages/visualizers/oram-simulator/oram-simulator.html',
    category: 'Security & Crypto',
    icon: 'fa-box',
    desc: 'Oblivious RAM — hide memory access patterns from adversaries.',
  },

  // ── Math, Geometry & Signals ──
  {
    name: 'FFT Visualizer',
    path: '/pages/visualizer/fft-visualizer/fft-visualizer.html',
    category: 'Math & Geometry',
    icon: 'fa-chart-line',
    desc: 'Fast Fourier Transform — convert between time and frequency domains.',
  },
  {
    name: 'Convex Hull Visualizer',
    path: '/pages/visualizers/convex-hull/convex-hull.html',
    category: 'Math & Geometry',
    icon: 'fa-draw-polygon',
    desc: 'Graham Scan and Jarvis March for convex hull computation.',
  },
  {
    name: 'L-System Fractal Generator',
    path: '/pages/visualizers/l-system-fractal/l-system-fractal.html',
    category: 'Math & Geometry',
    icon: 'fa-seedling',
    desc: 'Generate fractal patterns using Lindenmayer systems.',
  },
  {
    name: 'Markov Chain Visualizer',
    path: '/pages/visualizers/markov-chain-visualizer/markov-chain-visualizer.html',
    category: 'Math & Geometry',
    icon: 'fa-link',
    desc: 'Visualize Markov chains with state transition probabilities.',
  },
  {
    name: 'Spatial Visualizer',
    path: '/pages/visualizers/spatial-visualizer/spatial-visualizer.html',
    category: 'Math & Geometry',
    icon: 'fa-map',
    desc: 'Spatial data structures: quadtrees, R-trees, and spatial hashing.',
  },
  {
    name: 'TSP Heuristics Visualizer',
    path: '/pages/visualizers/tsp-heuristics/tsp-heuristics.html',
    category: 'Math & Geometry',
    icon: 'fa-earth-americas',
    desc: 'Traveling Salesman Problem solvers: nearest neighbor, 2-opt, and more.',
  },

  // ── AI & Machine Learning ──
  {
    name: 'Neural Network Backpropagation',
    path: '/pages/visualizers/nn-backprop-visualizer/nn-backprop-visualizer.html',
    category: 'AI & ML',
    icon: 'fa-brain',
    desc: 'Watch gradient descent and backpropagation update neural weights.',
  },
  {
    name: 'Transformer Self-Attention',
    path: '/pages/visualizer/attention-visualizer/attention-visualizer.html',
    category: 'AI & ML',
    icon: 'fa-eye',
    desc: 'Visualize attention heads in Transformer architectures.',
  },
  {
    name: 'LLM Inference Visualizer',
    path: '/pages/visualizers/llm-inference/llm-inference.html',
    category: 'AI & ML',
    icon: 'fa-robot',
    desc: 'See how large language models generate tokens step by step.',
  },
  {
    name: 'Go Scheduler Visualizer',
    path: '/pages/visualizers/go-scheduler/go-scheduler.html',
    category: 'AI & ML',
    icon: 'fa-shuffle',
    desc: "Visualize Go's M:N scheduler with goroutines and OS threads.",
  },
  {
    name: 'WASM SQL Visualizer',
    path: '/pages/ai-features/wasm-sql-visualizer/wasm-sql-visualizer.html',
    category: 'AI & ML',
    icon: 'fa-database',
    desc: 'SQL query execution visualized via WebAssembly SQLite.',
  },
  {
    name: 'BVH Raytracer',
    path: '/pages/ai-features/bvh-raytracer/bvh-raytracer.html',
    category: 'AI & ML',
    icon: 'fa-palette',
    desc: 'Bounding Volume Hierarchy for accelerated ray tracing.',
  },

  // ── Data Structures ──
  {
    name: 'Linked List Visualizer',
    path: '/pages/visualizers/linked-list-visualizer/linked-list-visualizer.html',
    category: 'Data Structures',
    icon: 'fa-link',
    desc: 'Interactive singly linked list with insert, delete, and search.',
  },
  {
    name: 'Doubly Linked List Visualizer',
    path: '/pages/visualizers/doubly-linked-list-visualizer/doubly-linked-list-visualizer.html',
    category: 'Data Structures',
    icon: 'fa-link',
    desc: 'Doubly linked list with forward and backward traversal.',
  },
  {
    name: 'Circular Linked List',
    path: '/pages/visualizers/circular-linked-list/circular-linked-list.html',
    category: 'Data Structures',
    icon: 'fa-circle',
    desc: 'Circular linked list with insertion and deletion operations.',
  },
  {
    name: 'Stack & Queue Visualizer',
    path: '/pages/visualizers/stack-queue-visualizer/stack-queue-visualizer.html',
    category: 'Data Structures',
    icon: 'fa-book',
    desc: 'Visualize stack (LIFO) and queue (FIFO) operations.',
  },
  {
    name: 'Bloom Filter Visualizer',
    path: '/pages/visualizers/bloom-filter-visualizer/bloom-filter-visualizer.html',
    category: 'Data Structures',
    icon: 'fa-filter',
    desc: 'Probabilistic membership testing with Bloom filters.',
  },
  {
    name: 'Skip List Visualizer',
    path: '/pages/visualizers/skip-list-visualizer/skip-list-visualizer.html',
    category: 'Data Structures',
    icon: 'fa-forward-step',
    desc: 'Probabilistic balanced data structure visualized with levels.',
  },
  {
    name: 'Probabilistic Structures',
    path: '/pages/visualizers/probabilistic-structures/probabilistic-structures.html',
    category: 'Data Structures',
    icon: 'fa-dice',
    desc: 'Compare Count-Min Sketch, HyperLogLog, and Bloom filters.',
  },
  {
    name: "MO's Algorithm Visualizer",
    path: '/pages/visualizers/mos-algorithm/mos-algorithm.html',
    category: 'Data Structures',
    icon: 'fa-ruler',
    desc: 'Square-root decomposition for range query optimization.',
  },
  {
    name: 'Quadtree Collision Visualizer',
    path: '/pages/visualizers/quadtree-collision/quadtree-collision.html',
    category: 'Data Structures',
    icon: 'fa-border-all',
    desc: 'Spatial partitioning with quadtrees for collision detection.',
  },
  {
    name: '2PC Visualizer',
    path: '/pages/visualizers/2pc-visualizer/2pc-visualizer.html',
    category: 'Data Structures',
    icon: 'fa-handshake',
    desc: 'Two-Phase Commit protocol for distributed transactions.',
  },
  {
    name: 'Docker Visualizer',
    path: '/pages/visualizers/docker-visualizer/docker-visualizer.html',
    category: 'Data Structures',
    icon: 'fa-cube',
    desc: 'Container architecture: images, layers, volumes, and networking.',
  },
  {
    name: 'RDBMS Visualizer',
    path: '/pages/visualizers/rdbms-visualizer/rdbms-visualizer.html',
    category: 'Data Structures',
    icon: 'fa-database',
    desc: 'Relational database internals: B-trees, pages, and query planning.',
  },
  {
    name: 'Memory Layout Explorer',
    path: '/pages/visualizers/data-structure-memory-layout-explorer/data-structure-memory-layout-explorer.html',
    category: 'Data Structures',
    icon: 'fa-memory',
    desc: 'See how arrays, linked lists, trees, hash tables, queues, and stacks are laid out in memory.',
  },
  {
    name: 'SDLC Visualizer',
    path: '/pages/visualizers/sdlc-visualizer/sdlc-visualizer.html',
    category: 'Data Structures',
    icon: 'fa-list',
    desc: 'Software Development Life Cycle with agile and waterfall models.',
  },
  {
    name: 'HNSW Visualizer',
    path: '/pages/ai-features/hnsw-visualizer/hnsw-visualizer.html',
    category: 'Data Structures',
    icon: 'fa-sitemap',
    desc: 'Explore Hierarchical Navigable Small World graphs for approximate nearest neighbor search.',
  },
  {
    name: 'Cuckoo Hashing Visualizer',
    path: '/pages/visualizers/cuckoo-hashing-visualizer/cuckoo-hashing-visualizer.html',
    category: 'Data Structures',
    icon: 'fa-table-cells',
    desc: 'Guaranteed O(1) worst-case lookup via two tables and eviction chains.',
  },

  // ── Special & Creative ──
  {
    name: 'Flowchart Builder',
    path: '/pages/visualizers/flowchart-builder/flowchart-builder.html',
    category: 'Special',
    icon: 'fa-project-diagram',
    desc: 'Drag-and-drop flowchart builder for algorithm design.',
  },
  {
    name: 'Turing Machine Simulator',
    path: '/pages/visualizers/turing-machine-simulator/turing-machine-simulator.html',
    category: 'Special',
    icon: 'fa-floppy-disk',
    desc: 'Program and run your own Turing machine with tape and states.',
  },
  {
    name: 'Minimax & Alpha-Beta',
    path: '/pages/visualizers/minimax-visualizer/minimax-visualizer.html',
    category: 'Special',
    icon: 'fa-chess',
    desc: 'Game AI tree search with minimax and alpha-beta pruning.',
  },
  {
    name: 'Suffix Automaton Explorer',
    path: '/pages/visualizers/suffix-automaton-explorer/suffix-automaton-explorer.html',
    category: 'Special',
    icon: 'fa-dna',
    desc: 'Build and query suffix automata for advanced string processing.',
  },
  {
    name: 'Regex Automata Visualizer',
    path: '/pages/ai-features/regex-automata-visualizer/regex-automata-visualizer.html',
    category: 'Special',
    icon: 'fa-diagram-project',
    desc: 'Build and simulate regular expressions as NFA/DFA automata step by step.',
  },
  {
    name: 'Anytime Algorithms Lab',
    path: '/pages/visualizers/anytime-algorithms-lab/anytime-algorithms-lab.html',
    category: 'Special',
    icon: 'fa-stopwatch',
    desc: 'Algorithms that return better results given more time.',
  },
  {
    name: 'Persistent Data Structure Lab',
    path: '/pages/visualizers/persistent-ds-lab/persistent-ds-lab.html',
    category: 'Special',
    icon: 'fa-clock',
    desc: 'Explore persistent versions of arrays, trees, and linked lists.',
  },
  {
    name: 'Algorithm Genome',
    path: '/pages/visualizers/algorithm-genome/algorithm-genome.html',
    category: 'Special',
    icon: 'fa-dna',
    desc: 'Genetic algorithm evolution visualized with selection and mutation.',
  },
  {
    name: 'DSA Story Mode',
    path: '/pages/visualizers/dsa-story/dsa-story-mode.html',
    category: 'Special',
    icon: 'fa-book',
    desc: 'Learn DSA concepts through an interactive story-driven journey.',
  },
  {
    name: 'Algorithm Timeline',
    path: '/pages/visualizers/algorithm-timeline/algorithm-timeline.html',
    category: 'Special',
    icon: 'fa-calendar',
    desc: 'Explore the history and evolution of computer science algorithms.',
  },
  {
    name: 'Algorithm Fossil Record',
    path: '/pages/visualizers/algorithm-fossil-record/algorithm-fossil-record.html',
    category: 'Special',
    icon: 'fa-history',
    desc: 'Discover ancient and obsolete algorithms from computing history.',
  },
  {
    name: 'Algorithm Family Tree',
    path: '/pages/visualizers/algorithm-family-tree/algorithm-family-tree.html',
    category: 'Special',
    icon: 'fa-tree',
    desc: 'Visualize relationships and influences between algorithms.',
  },
  {
    name: 'Algorithm Music Composer',
    path: '/pages/visualizers/algorithm-music-composer/algorithm-music-composer.html',
    category: 'Special',
    icon: 'fa-music',
    desc: 'Hear algorithms — sorting, graphs, and trees composed into music.',
  },
  {
    name: 'Algorithm Art Gallery',
    path: '/pages/visualizers/algorithim-art-gallery/algorithm-art-gallery.html',
    category: 'Special',
    icon: 'fa-palette',
    desc: 'Generative algorithm art created from data structure visualizations.',
  },
  {
    name: 'Global Learning Globe',
    path: '/pages/visualizers/global-learning-globe/global-learning-globe.html',
    category: 'Special',
    icon: 'fa-globe',
    desc: 'Explore DSA concepts visualized on a 3D interactive globe.',
  },
  {
    name: 'Code Execution Visualizer',
    path: '/code-visualizer/index.html',
    category: 'Special',
    icon: 'fa-play',
    desc: 'Step through code execution with line-by-line variable tracking.',
  },
  {
    name: 'Backprop Engine',
    path: '/pages/visualizers/backprop-engine/backprop-engine.html',
    category: 'Special',
    icon: 'fa-bolt',
    desc: 'Automatic differentiation engine for neural network training.',
  },
  {
    name: 'V8 Visualizer',
    path: '/pages/visualizers/v8-visualizer/v8-visualizer.html',
    category: 'Special',
    icon: 'fa-gear',
    desc: 'Visualize V8 JavaScript engine compilation and optimization.',
  },
  {
    name: 'Spectre Visualizer',
    path: '/pages/visualizers/spectre-visualizer/spectre-visualizer.html',
    category: 'Special',
    icon: 'fa-eye',
    desc: 'Spectre side-channel attack — speculative execution visualized.',
  },

  // ── Newly Linked (Previously Orphaned) Pages ──
  {
    name: 'LZ77 Data Compression Visualizer',
    path: '/pages/visualizers/3-lz77-compression-visualizer/3-lz77-compression-visualizer.html',
    category: 'Sorting & Searching',
    icon: 'fa-file',
    desc: 'Slide a window over text to find repeated substrings and encode them as length-distance back-references.',
  },
  {
    name: 'Ant Colony Optimization Visualizer',
    path: '/pages/visualizers/aco-swarm-intelligence-visualizer/aco-swarm-intelligence-visualizer.html',
    category: 'AI & ML',
    icon: 'fa-route',
    desc: 'Watch independent ant agents lay and evaporate pheromone trails to emergently discover short routes through a TSP graph.',
  },
  {
    name: 'Aho-Corasick Automaton Builder',
    path: '/pages/visualizers/aho-corasick-visualizer/aho-corasick-visualizer.html',
    category: 'Sorting & Searching',
    icon: 'fa-language',
    desc: 'Build a multi-pattern matching automaton with failure links and match every pattern simultaneously in one linear pass.',
  },
  {
    name: 'API Gateway Visualizer',
    path: '/pages/visualizers/api-gateway-visualizer/api-gateway-visualizer.html',
    category: 'Systems & OS',
    icon: 'fa-network-wired',
    desc: 'See how an API gateway authenticates, throttles, and caches requests before routing them to backend services.',
  },
  {
    name: 'API Rate Limiting Visualizer',
    path: '/pages/visualizers/api-rate-limiter-visualizer/api-rate-limiter-visualizer.html',
    category: 'Systems & OS',
    icon: 'fa-stopwatch',
    desc: 'Compare token bucket, leaky bucket, and fixed and sliding window rate limiting strategies as requests stream in.',
  },
  {
    name: 'A* Pathfinding Visualizer',
    path: '/pages/visualizers/astar-pathfinding/astar-pathfinding.html',
    category: 'Graph Algorithms',
    icon: 'fa-crosshairs',
    desc: 'Paint walls on a grid and watch A* use a heuristic to prune search space compared to raw breadth-first search.',
  },
  {
    name: 'AVL Tree Rotations Engine',
    path: '/pages/visualizers/avl-tree/avl-tree.html',
    category: 'Trees & BSTs',
    icon: 'fa-scale-balanced',
    desc: 'Insert and delete nodes while the AVL tree automatically rebalances itself with left, right, and double rotations.',
  },
  {
    name: "Banker's Algorithm & Deadlock Detection",
    path: '/pages/visualizers/bankers/bankers.html',
    category: 'Systems & OS',
    icon: 'fa-shield-halved',
    desc: "Run Banker's Algorithm safety checks against a resource allocation graph with cycle detection and a what-if request simulator.",
  },
  {
    name: 'BFS vs DFS Visualizer',
    path: '/pages/visualizers/bfs-dfs-visualizer/bfs-dfs-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-project-diagram',
    desc: 'Run breadth-first and depth-first traversal side by side to compare how each one explores a graph.',
  },
  {
    name: 'BGP Route Propagation & Hijacking Simulator',
    path: '/pages/visualizers/bgp-route-hijack-simulator/bgp-route-hijack-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-network-wired',
    desc: 'Simulate BGP path-vector route propagation and watch a malicious AS hijack traffic via longest prefix matching.',
  },
  {
    name: 'State Space Bitmasking DP',
    path: '/pages/visualizers/bitmask-dp/bitmask-dp.html',
    category: 'Dynamic Programming',
    icon: 'fa-table-cells',
    desc: 'Encode visited-node subsets as bitmasks to solve shortest-path-covering-all-nodes problems without infinite loops.',
  },
  {
    name: 'CDN Request Flow Visualizer',
    path: '/pages/visualizers/cdn-flow-visualizer/index.html',
    category: 'Systems & OS',
    icon: 'fa-globe',
    desc: 'See how content requests are routed from origin servers to the edge location closest to the user.',
  },
  {
    name: 'Computational Geometry Playground',
    path: '/pages/visualizers/comp-geometry/comp-geometry.html',
    category: 'Math & Geometry',
    icon: 'fa-draw-polygon',
    desc: 'Experiment with core computational geometry primitives like convex hulls, intersections, and point location.',
  },
  {
    name: 'Count-Min Sketch',
    path: '/pages/visualizers/count-min-sketch/count-min-sketch.html',
    category: 'Data Structures',
    icon: 'fa-filter',
    desc: 'Update a grid of hash counters and take the minimum across rows to estimate item frequency with one-directional error.',
  },
  {
    name: 'Dancing Links (DLX) Visualizer',
    path: '/pages/visualizers/dancing-links/dancing-links.html',
    category: 'Data Structures',
    icon: 'fa-link',
    desc: 'Watch toroidal doubly linked lists rewire pointers in O(1) to cover and uncover columns while solving exact cover problems.',
  },
  {
    name: "Dijkstra's Algorithm Visualizer",
    path: '/pages/visualizers/dijkstra-visualizer/dijkstra-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-route',
    desc: "Step through Dijkstra's greedy relaxation process as it finds shortest paths from a source across a weighted graph.",
  },
  {
    name: "Dinic's Algorithm Visualizer",
    path: '/pages/visualizers/dinics-algorithm/dinics-algorithm.html',
    category: 'Graph Algorithms',
    icon: 'fa-water',
    desc: 'Stratify a graph into level graphs by BFS distance, then find blocking flows to compute maximum flow faster.',
  },
  {
    name: 'Dining Philosophers Simulator',
    path: '/pages/visualizers/dining-philosophers/dining-philosophers.html',
    category: 'Systems & OS',
    icon: 'fa-circle-notch',
    desc: 'Watch philosophers compete for shared forks and see how lock ordering avoids deadlock and starvation.',
  },
  {
    name: 'DPLL 3-SAT Solver Visualizer',
    path: '/pages/visualizers/dpll-3sat-solver-visualizer/dpll-3sat-solver-visualizer.html',
    category: 'Special',
    icon: 'fa-puzzle-piece',
    desc: 'Watch unit propagation, pure literal elimination, and conflict-driven backtracking solve 3-SAT clause satisfaction.',
  },
  {
    name: 'ECC Finite Field Visualizer',
    path: '/pages/visualizers/ecc-finite-field-visualizer/ecc-finite-field-visualizer.html',
    category: 'Security & Crypto',
    icon: 'fa-key',
    desc: 'Visualize elliptic curve point addition and doubling over a finite field, the math underpinning ECC cryptography.',
  },
  {
    name: 'Fenwick Tree Visualizer',
    path: '/pages/visualizers/fenwick-tree/fenwick-tree.html',
    category: 'Trees & BSTs',
    icon: 'fa-chart-simple',
    desc: 'Explore how a Binary Indexed Tree updates and queries prefix sums in logarithmic time using bit manipulation.',
  },
  {
    name: 'Floyd-Warshall Visualizer',
    path: '/pages/visualizers/floyd-warshall-visualizer/floyd-warshall-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-table-cells',
    desc: 'Watch the all-pairs shortest path matrix update as each intermediate vertex is considered in turn.',
  },
  {
    name: "Fortune's Sweepline Engine",
    path: '/pages/visualizers/fortunes-sweepline/fortunes-sweepline.html',
    category: 'Math & Geometry',
    icon: 'fa-ruler-combined',
    desc: "Sweep a beach line down the plane to build a Voronoi diagram from placed sites using Fortune's algorithm.",
  },
  {
    name: "Grover's Algorithm Visualizer",
    path: '/pages/visualizers/grovers-algorithm-visualizer/grovers-algorithm-visualizer.html',
    category: 'Special',
    icon: 'fa-atom',
    desc: "Search an unsorted quantum database with Grover's amplitude amplification, oracle phase flips, and diffusion.",
  },
  {
    name: 'HLD (Heavy-Light Decomposition) Learning',
    path: '/pages/visualizers/hld-learning/hld-learning.html',
    category: 'Trees & BSTs',
    icon: 'fa-code-branch',
    desc: 'Decompose a tree into heavy and light chains so range queries that were O(N) become O(log^2 N).',
  },
  {
    name: 'HyperLogLog Estimator',
    path: '/pages/visualizers/hyperloglog-estimator/hyperloglog-estimator.html',
    category: 'Data Structures',
    icon: 'fa-calculator',
    desc: 'Estimate billions of unique items using kilobytes of memory as register updates converge to a harmonic mean estimate.',
  },
  {
    name: 'JWT Structure and Lifecycle Visualizer',
    path: '/pages/visualizers/jwt-visualizer/jwt-visualizer.html',
    category: 'Security & Crypto',
    icon: 'fa-lock',
    desc: 'Break down a JSON Web Token into header, payload, and signature and follow its lifecycle from issuance to expiry.',
  },
  {
    name: 'Kinetic Heap Playground',
    path: '/pages/visualizers/kinetic-heap-playground/kinetic-heap-playground.html',
    category: 'Trees & BSTs',
    icon: 'fa-chart-line',
    desc: 'Track the maximum-priority moving object over continuous time using certificates instead of re-sorting every frame.',
  },
  {
    name: 'K-Means Clustering Visualizer',
    path: '/pages/visualizers/kmeans-visualizer/kmeans-visualizer.html',
    category: 'AI & ML',
    icon: 'fa-brain',
    desc: 'Watch unsupervised learning iteratively assign points to centroids and re-center clusters until convergence.',
  },
  {
    name: 'Longest Common Subsequence (2D DP) Visualizer',
    path: '/pages/visualizers/lcs-visualizer/lcs-visualizer.html',
    category: 'Dynamic Programming',
    icon: 'fa-table-cells',
    desc: 'Fill a 2D dynamic programming table cell by cell to find the longest common subsequence of two strings.',
  },
  {
    name: 'LFU Cache Engine',
    path: '/pages/visualizers/lfu-cache/lfu-cache.html',
    category: 'Systems & OS',
    icon: 'fa-database',
    desc: 'Watch a Least Frequently Used cache track access counts and evict the coldest item when capacity is exceeded.',
  },
  {
    name: 'LRU Cache Engine',
    path: '/pages/visualizers/lru-cache/lru-cache.html',
    category: 'Systems & OS',
    icon: 'fa-history',
    desc: 'Watch a Least Recently Used cache reorder entries on every access and evict the oldest item when full.',
  },
  {
    name: "Manacher's Algorithm",
    path: '/pages/visualizers/manacher/manacher.html',
    category: 'Sorting & Searching',
    icon: 'fa-font',
    desc: 'Watch palindrome radii get borrowed via mirror symmetry to find the longest palindromic substring in linear time.',
  },
  {
    name: 'Marching Cubes',
    path: '/pages/visualizers/marching-cubes/marching-cubes.html',
    category: 'Math & Geometry',
    icon: 'fa-cube',
    desc: 'Sweep a cube through a 3D scalar noise field and watch it build an isosurface mesh triangle by triangle.',
  },
  {
    name: 'DFS Maze Generation Visualizer',
    path: '/pages/visualizers/maze-generation-visualizer/index.html',
    category: 'Graph Algorithms',
    icon: 'fa-border-all',
    desc: 'Carve a random maze from a grid using recursive-backtracking depth-first search and watch the stack unwind.',
  },
  {
    name: 'MCTS Game Theory Visualizer',
    path: '/pages/visualizers/mcts-game-theory-visualizer/mcts-game-theory-visualizer.html',
    category: 'Special',
    icon: 'fa-chess',
    desc: 'Watch Monte Carlo Tree Search balance exploration and exploitation with UCB1 rollouts and backpropagation.',
  },
  {
    name: 'Median of Two Sorted Arrays',
    path: '/pages/visualizers/median-sorted-arrays/median-sorted-arrays.html',
    category: 'Sorting & Searching',
    icon: 'fa-search',
    desc: 'Binary search a partition point across two sorted arrays to find their median without merging them.',
  },
  {
    name: 'Memcached Visualizer',
    path: '/pages/visualizers/memcached-visualizer/memcached-visualizer.html',
    category: 'Systems & OS',
    icon: 'fa-database',
    desc: 'Explore how Memcached shards keys across servers and evicts entries under a distributed in-memory cache design.',
  },
  {
    name: 'Merkle Tree Visualizer',
    path: '/pages/visualizers/merkle-tree-visualizer/merkle-tree-visualizer.html',
    category: 'Security & Crypto',
    icon: 'fa-tree',
    desc: 'Watch a single-bit change propagate to the root and verify any leaf with only O(log n) sibling hashes.',
  },
  {
    name: 'Morris Traversal O(1) Space Visualizer',
    path: '/pages/visualizers/morrisvisualizer/morrisvisualizer.html',
    category: 'Trees & BSTs',
    icon: 'fa-arrows-rotate',
    desc: 'Traverse a binary tree inorder with zero extra memory by temporarily threading pointers to predecessors.',
  },
  {
    name: 'MST Visualizer (Kruskal vs Prim)',
    path: '/pages/visualizers/mst-visualizer/mst-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-project-diagram',
    desc: "Compare Kruskal's edge-sorting approach against Prim's frontier-growing approach to building a minimum spanning tree.",
  },
  {
    name: 'Max Flow Playground',
    path: '/pages/visualizers/network-flow/network-flow.html',
    category: 'Graph Algorithms',
    icon: 'fa-water',
    desc: 'Build a flow network and push flow along augmenting paths to explore maximum flow algorithms interactively.',
  },
  {
    name: 'N-Queens Visualizer',
    path: '/pages/visualizers/n-queens-visualizer/n-queens-visualizer.html',
    category: 'Special',
    icon: 'fa-chess',
    desc: 'Watch backtracking place queens on a chessboard, pruning conflicting rows, columns, and diagonals as it searches.',
  },
  {
    name: 'Online Algorithms Arena',
    path: '/pages/visualizers/online-algorithms-arena/online-algorithms-arena.html',
    category: 'Special',
    icon: 'fa-stopwatch',
    desc: 'Decide with no knowledge of the future in Ski Rental and Online Interval Scheduling, then compare against the offline optimum.',
  },
  {
    name: 'PageRank',
    path: '/pages/visualizers/pagerank/pagerank.html',
    category: 'Graph Algorithms',
    icon: 'fa-earth-americas',
    desc: 'Watch a directed web graph converge to its principal eigenvector via the power method, with random-surfer particles.',
  },
  {
    name: 'Push-Relabel Maximum Flow',
    path: '/pages/visualizers/push-relabel/push-relabel.html',
    category: 'Graph Algorithms',
    icon: 'fa-water',
    desc: 'See push and relabel operations compute maximum flow faster than Edmonds-Karp on dense graphs via local moves.',
  },
  {
    name: 'Quantum Circuit Playground',
    path: '/pages/visualizers/quantum-circuit-playground/quantum-circuit-playground.html',
    category: 'Special',
    icon: 'fa-atom',
    desc: "Build quantum circuits gate by gate and watch superposition, entanglement, and Grover's algorithm play out live.",
  },
  {
    name: 'Redis Cache Visualizer',
    path: '/pages/visualizers/redis-cache-visualizer/index.html',
    category: 'Systems & OS',
    icon: 'fa-database',
    desc: 'See how an in-memory Redis-style cache improves performance versus hitting a slower backing store directly.',
  },
  {
    name: 'Service Mesh Visualizer',
    path: '/pages/visualizers/service-mesh-visualizer/service-mesh-visualizer.html',
    category: 'Distributed Systems',
    icon: 'fa-network-wired',
    desc: 'See how sidecar proxies encrypt traffic, retry transient failures, and trip circuit breakers across a service mesh.',
  },
  {
    name: 'SHA-256 Hashing Visualizer',
    path: '/pages/visualizers/sha256-visualizer/sha256-visualizer.html',
    category: 'Security & Crypto',
    icon: 'fa-lock',
    desc: 'Step through the SHA-256 compression function to see how message blocks transform into a fixed-size digest.',
  },
  {
    name: 'Sliding Window Visualizer',
    path: '/pages/visualizers/sliding-window/sliding-window.html',
    category: 'Sorting & Searching',
    icon: 'fa-arrows-left-right',
    desc: 'Expand, validate, and contract a dual-pointer window over a string to solve Minimum Window Substring with a live frequency map.',
  },
  {
    name: 'Splay Tree Visualizer',
    path: '/pages/visualizers/splay-tree-visualizer/splay-tree-visualizer.html',
    category: 'Trees & BSTs',
    icon: 'fa-arrows-rotate',
    desc: 'Watch a self-adjusting splay tree move accessed nodes to the root via zig, zig-zig, and zig-zag rotations.',
  },
  {
    name: "Strongly Connected Components (Tarjan's & Kosaraju's)",
    path: '/pages/visualizers/strongly-connected-components/strongly-connected-components.html',
    category: 'Graph Algorithms',
    icon: 'fa-circle-notch',
    desc: "Compare Tarjan's low-link bookkeeping and Kosaraju's transpose approach as both partition a graph into SCCs.",
  },
  {
    name: 'Succinct Bit Vector Explorer',
    path: '/pages/visualizers/succinct-bitvector-explorer/succinct-bitvector-explorer.html',
    category: 'Data Structures',
    icon: 'fa-table-cells',
    desc: 'See how rank and select queries run in O(1) using superblock decomposition with only o(n) auxiliary bits.',
  },
  {
    name: 'Sudoku Solver Visualizer',
    path: '/pages/visualizers/sudoku-solver-visualizer/sudoku-solver-visualizer.html',
    category: 'Special',
    icon: 'fa-border-all',
    desc: 'Watch constraint-propagating backtracking fill in a Sudoku grid cell by cell until every row, column, and box is valid.',
  },
  {
    name: 'Suffix Array & LCP Visualizer',
    path: '/pages/visualizers/suffix-array-lcp/suffix-array-lcp.html',
    category: 'Sorting & Searching',
    icon: 'fa-list',
    desc: "Build a suffix array via cyclic sorts, then compute the LCP matrix with Kasai's algorithm for substring indexing.",
  },
  {
    name: 'SWIM Protocol Simulator',
    path: '/pages/visualizers/swim-simulator/swim-simulator.html',
    category: 'Distributed Systems',
    icon: 'fa-share-nodes',
    desc: 'Simulate SWIM cluster membership with gossip dissemination, ping and ping-req probes, and failure detection.',
  },
  {
    name: "Tarjan's Algorithm (Bridges)",
    path: '/pages/visualizers/tarjans-bridges/tarjans-bridges.html',
    category: 'Graph Algorithms',
    icon: 'fa-link',
    desc: 'Find critical edges whose removal disconnects a graph using discovery and low-link values in a single DFS pass.',
  },
  {
    name: 'Towers of Hanoi Visualizer',
    path: '/pages/visualizers/towers-of-hanoi-visualizer/towers-of-hanoi-visualizer.html',
    category: 'Dynamic Programming',
    icon: 'fa-seedling',
    desc: 'Watch recursive disk moves solve the classic Towers of Hanoi puzzle while the call stack unwinds step by step.',
  },
  {
    name: 'Van Emde Boas Tree Explorer',
    path: '/pages/visualizers/veb-tree-explorer/veb-tree-explorer.html',
    category: 'Trees & BSTs',
    icon: 'fa-layer-group',
    desc: 'Insert, delete, and find successors in a 16-element universe in O(log log U), beating comparison-based trees for integer keys.',
  },
  {
    name: 'Vector Clocks Visualizer',
    path: '/pages/visualizers/vector-clocks-visualizer/vector-clocks-visualizer.html',
    category: 'Distributed Systems',
    icon: 'fa-clock',
    desc: 'Track causality between events across distributed nodes as vector clocks increment and merge on message exchange.',
  },
  {
    name: 'Wavelet Tree Visualizer',
    path: '/pages/visualizers/wavelet-tree/wavelet-tree.html',
    category: 'Data Structures',
    icon: 'fa-sitemap',
    desc: 'Recursively partition a sequence by alphabet symbol into a bit-vector tree that answers rank, select, and range queries.',
  },
  {
    name: 'Word Search II (Trie + DFS) Visualizer',
    path: '/pages/visualizers/word-search-ii-trie/word-search-ii-trie.html',
    category: 'Special',
    icon: 'fa-language',
    desc: 'Pre-load words into a prefix trie to prune a 2D DFS backtracking search across a letter grid in O(1) per step.',
  },
  {
    name: 'Work-Stealing Scheduler Visualizer',
    path: '/pages/visualizers/work-stealing-scheduler/work-stealing-scheduler.html',
    category: 'Systems & OS',
    icon: 'fa-shuffle',
    desc: "See how per-worker deques with LIFO pop and FIFO steal let Go's runtime and Java's ForkJoinPool scale parallel work.",
  },
  {
    name: 'Zobrist Hashing Playground',
    path: '/pages/visualizers/zobrist-hashing-playground/zobrist-hashing-playground.html',
    category: 'Data Structures',
    icon: 'fa-chess',
    desc: 'See how chess engines hash board positions in O(1) per move using self-inverse XOR updates and transposition detection.',
  },
  {
    name: "Tarjan's SCC Visualizer",
    path: '/pages/visualizers/tarjans-scc-visualizer/tarjans-scc-visualizer.html',
    category: 'Graph Algorithms',
    icon: 'fa-diagram-project',
    desc: "Watch Tarjan's low-link algorithm find strongly connected components in a directed graph in a single DFS pass.",
  },
  {
    name: 't-Digest Percentile Estimator',
    path: '/pages/visualizers/tdigest-percentile-estimator/tdigest-percentile-estimator.html',
    category: 'Math & Geometry',
    icon: 'fa-percent',
    desc: 'Estimate streaming percentiles with bounded memory using the t-digest data structure and centroid merging.',
  },
];

/* ─── Categories ─── */
const categories = [
  'All',
  'Sorting & Searching',
  'Trees & BSTs',
  'Graph Algorithms',
  'Dynamic Programming',
  'Systems & OS',
  'CPU Scheduling',
  'Distributed Systems',
  'Security & Crypto',
  'Math & Geometry',
  'AI & ML',
  'Data Structures',
  'Special',
];

/* ─── Category pastel colors ─── */
const categoryColors = {
  'sorting-searching': '#ffb3ba',
  'trees-bsts': '#baffc9',
  'graph-algorithms': '#bae1ff',
  'dynamic-programming': '#d4baff',
  'systems-os': '#ffd4ba',
  'cpu-scheduling': '#ffb3d9',
  'distributed-systems': '#baffdb',
  'security-crypto': '#ffbaba',
  'math-geometry': '#fdffb3',
  'ai-ml': '#c9baff',
  'data-structures': '#baf2ff',
  special: '#e6baff',
};

/* ─── DOM refs ─── */
const grid = document.getElementById('vizGrid');
const searchInput = document.getElementById('vizSearchInput');
const clearBtn = document.getElementById('vizClearBtn');
const filterContainer = document.getElementById('vizFilters');
const emptyState = document.getElementById('vizEmpty');
const countDisplay = document.getElementById('vizCountDisplay');

let activeCategory =
  new URLSearchParams(window.location.search).get('category') ||
  localStorage.getItem('vizFilterCategory') ||
  'all';
let searchQuery = '';
const pageReferrer = document.referrer;

/* ─── Build filter chips ─── */
function buildFilters() {
  categories.forEach((cat) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'viz-filter-chip' + (cat === 'All' ? ' active' : '');
    btn.dataset.category = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', cat === 'All' ? 'true' : 'false');
    btn.textContent =
      cat + (cat !== 'All' ? ` (${visualizers.filter((v) => v.category === cat).length})` : '');
    btn.addEventListener('click', () => {
      filterContainer.querySelectorAll('.viz-filter-chip').forEach((c) => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeCategory = btn.dataset.category;
      localStorage.setItem('vizFilterCategory', activeCategory);
      const url = new URL(window.location);
      if (activeCategory === 'all') {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', activeCategory);
      }
      history.pushState({}, '', url);
      render();
    });
    filterContainer.appendChild(btn);
  });
}

/* ─── Render cards ─── */
function render() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const filtered = visualizers.filter((v) => {
    const matchCategory =
      activeCategory === 'all' ||
      v.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      v.name.toLowerCase().includes(q) ||
      v.category.toLowerCase().includes(q) ||
      v.desc.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  countDisplay.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';
  grid.innerHTML = filtered
    .map(
      (v, i) => `
    <a href="${v.path}" class="viz-card" role="listitem" style="animation-delay:${reducedMotion ? '0s' : Math.min(i * 0.025, 0.8)}s">
      <span class="viz-card-icon" style="color:${categoryColors[v.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')] || 'var(--viz-cyan)'}"><i class="fas ${v.icon}"></i></span>
      <span class="viz-card-title">${escHtml(v.name)}</span>
      <span class="viz-card-desc">${escHtml(v.desc)}</span>
      <div class="viz-card-footer">
        <span class="viz-card-category">${escHtml(v.category)}</span>
        <span class="viz-card-arrow"><i class="fas fa-arrow-right"></i></span>
      </div>
    </a>
  `
    )
    .join('');
}

function escHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* ─── Search ─── */
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value;
  clearBtn.classList.toggle('visible', searchQuery.length > 0);
  render();
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearBtn.classList.remove('visible');
  render();
  searchInput.focus();
});

/* ─── Keyboard shortcut: ⌘K / Ctrl+K ─── */
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === 'Escape') {
    searchInput.blur();
  }
});

/* ─── Back button ─── */
document.getElementById('vizBackBtn')?.addEventListener('click', () => {
  localStorage.removeItem('vizFilterCategory');
  if (pageReferrer && new URL(pageReferrer).origin === window.location.origin) {
    window.location.href = pageReferrer;
  } else if (window.history.length > 1) {
    history.back();
  } else {
    location.href = '/';
  }
});

/* ─── Init ─── */
buildFilters();

/* Restore active chip from URL */
function syncChipFromURL() {
  filterContainer.querySelectorAll('.viz-filter-chip').forEach((c) => {
    const isActive = c.dataset.category === activeCategory;
    c.classList.toggle('active', isActive);
    c.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
}
syncChipFromURL();
render();

/* Handle browser back/forward */
window.addEventListener('popstate', () => {
  activeCategory =
    new URLSearchParams(window.location.search).get('category') ||
    localStorage.getItem('vizFilterCategory') ||
    'all';
  syncChipFromURL();
  render();
});
