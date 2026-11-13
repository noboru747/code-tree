// code-tree core — placeholder.
// 實作待設計確認後補上：掃描目錄 → 產生每層 codeTree.md（保留人工描述、同步增刪）。
import { readFile } from 'node:fs/promises';

const pkg = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url), 'utf8'),
);

const HELP = `code-tree ${pkg.version}
Generate per-directory codeTree.md index files without AI.

Usage:
  npx code-tree <dir> [options]

Options:
  -h, --help       Show this help
  -v, --version    Show version
`;

export async function run(argv) {
  if (argv.includes('-v') || argv.includes('--version')) {
    console.log(pkg.version);
    return 0;
  }
  if (argv.length === 0 || argv.includes('-h') || argv.includes('--help')) {
    console.log(HELP);
    return 0;
  }
  console.error('code-tree: not implemented yet');
  return 1;
}
