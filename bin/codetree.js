#!/usr/bin/env node
// code-tree CLI entry point.
// Usage: npx code-tree <dir> [options]
import { run } from '../src/index.js';

run(process.argv.slice(2)).then(
  (code) => process.exit(code ?? 0),
  (err) => {
    console.error(`code-tree: ${err.message}`);
    process.exit(1);
  },
);
