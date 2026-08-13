# Graph Report - Rio LarGo  (2026-08-08)

## Corpus Check
- 61 files · ~148,859 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 268 nodes · 393 edges · 31 communities (21 shown, 10 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- menuData.js
- useCart
- What You Must Do When Invoked
- What You Must Do When Invoked
- package.json
- App.jsx
- graphify reference: extra exports and benchmark
- graphify reference: extra exports and benchmark
- .oxlintrc.json
- graphify reference: query, path, explain
- graphify reference: query, path, explain
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- React + Vite
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- graphify.js
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- AGENTS.md
- rules/graphify.md
- .agents/skills/graphify/references/extraction-spec.md
- workflows/graphify.md
- .opencode/skills/graphify/references/extraction-spec.md
- devDependencies
- opencode.json

## God Nodes (most connected - your core abstractions)
1. `react` - 32 edges
2. `useCart()` - 19 edges
3. `useReveal()` - 13 edges
4. `What You Must Do When Invoked` - 12 edges
5. `What You Must Do When Invoked` - 12 edges
6. `RESTAURANT_INFO` - 11 edges
7. `/graphify` - 10 edges
8. `/graphify` - 10 edges
9. `graphify reference: extra exports and benchmark` - 8 edges
10. `graphify reference: extra exports and benchmark` - 8 edges

## Surprising Connections (you probably didn't know these)
- `MainAppContent()` --references--> `CATEGORIES`  [EXTRACTED]
  src/App.jsx → src/data/menuData.js
- `Navbar()` --calls--> `useCart()`  [EXTRACTED]
  src/components/Navbar.jsx → src/context/CartContext.jsx
- `ProductModal()` --calls--> `useCart()`  [EXTRACTED]
  src/components/ProductModal.jsx → src/context/CartContext.jsx
- `CartDrawer()` --calls--> `useCart()`  [EXTRACTED]
  src/components/CartDrawer.jsx → src/context/CartContext.jsx
- `CombosBanner()` --calls--> `useParallax()`  [EXTRACTED]
  src/components/CombosBanner.jsx → src/hooks/useParallax.js

## Import Cycles
- None detected.

## Communities (31 total, 10 thin omitted)

### Community 0 - "menuData.js"
Cohesion: 0.12
Nodes (11): FinalCTA(), FloatingWhatsApp(), Footer(), Hero(), LocationSection(), NAV_LINKS, Navbar(), ProductModal() (+3 more)

### Community 1 - "useCart"
Cohesion: 0.14
Nodes (19): CartDrawer(), FeaturedProducts(), FloatingCartButton(), FlyToCart(), MenuSection(), ProductCard(), Toast(), WhatsAppPreviewModal() (+11 more)

### Community 2 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 3 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 4 - "package.json"
Cohesion: 0.12
Nodes (16): lucide-react, dependencies, lucide-react, react, react-dom, name, private, scripts (+8 more)

### Community 5 - "App.jsx"
Cohesion: 0.12
Nodes (20): react, App(), MainAppContent(), CategoryNav(), ICON_MAP, CategorySidebar(), ICON_MAP, CombosBanner() (+12 more)

### Community 6 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 7 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 8 - ".oxlintrc.json"
Cohesion: 0.25
Nodes (7): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema, oxc, warn

### Community 9 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 10 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 11 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 12 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 13 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 14 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 15 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 16 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 17 - "React + Vite"
Cohesion: 0.50
Nodes (3): Expanding the Oxlint configuration, React Compiler, React + Vite

### Community 29 - "devDependencies"
Cohesion: 0.13
Nodes (15): oxlint, devDependencies, oxlint, tailwindcss, @tailwindcss/vite, @types/react, @types/react-dom, vite (+7 more)

### Community 30 - "opencode.json"
Cohesion: 0.50
Nodes (3): plugin, $schema, .opencode/plugins/graphify.js

## Knowledge Gaps
- **120 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `$schema`, `oxc`, `react/rules-of-hooks` (+115 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.jsx` to `.oxlintrc.json`, `useCart`, `menuData.js`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Why does `plugins` connect `.oxlintrc.json` to `App.jsx`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `$schema` to the rest of the system?**
  _120 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `menuData.js` be split into smaller, more focused modules?**
  _Cohesion score 0.11857707509881422 - nodes in this community are weakly interconnected._
- **Should `useCart` be split into smaller, more focused modules?**
  _Cohesion score 0.13793103448275862 - nodes in this community are weakly interconnected._
- **Should `What You Must Do When Invoked` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._