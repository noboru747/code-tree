# code-tree

Generate a small `codeTree.md` summary in every directory of a project — **without AI**.

```bash
npx code-tree ./my-project
```

## Why

AI coding agents waste tokens and tool calls exploring a codebase blindly (`ls`, `grep`, reading whole files).
A tiny per-directory index lets them read short summaries first and jump straight to what matters.

Having the AI write that index itself is slow, costs tokens, and drifts. `code-tree` does the mechanical part deterministically:

- Lists each directory's files and subdirectories
- Infers short descriptions from `package.json`, README, and leading file comments
- Re-running keeps your hand-written descriptions and only syncs added / removed entries
- Stamps a `verified` date

## Output format

```markdown
# <directory path>

<one or two sentences: what this directory is for>

Files:
- a.ts — <short description>

Subdirectories:
- sub/ — <short description> → sub/codeTree.md

<!-- verified: YYYY-MM-DD -->
```

## Status

🚧 Early development — not functional yet.

## License

MIT
