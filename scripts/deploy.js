import fs from 'fs'
import path from 'path'
import { spawnSync } from 'child_process'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const HOST = 'rice.stanford.edu'
const REMOTE_DIR = '/afs/ir/group/ieee/WWW'

// SUNetID from `npm run deploy -- <sunetid>` or the SUNET env var
const sunet = process.argv[2] || process.env.SUNET
if (!sunet) {
  console.error('Usage: npm run deploy -- <sunetid>   (or set the SUNET env var)')
  process.exit(1)
}

const distDir = path.resolve(__dirname, '../dist')
if (!fs.existsSync(path.join(distDir, 'index.html'))) {
  console.error('dist/ is missing or empty. Run `npm run build` first.')
  process.exit(1)
}

// Explicit file list so dotfiles like .htaccess are included. Names are relative
// (scp runs inside dist/): Windows scp mishandles absolute C:\ directory paths.
const entries = fs.readdirSync(distDir)

console.log(`Uploading dist/ to ${sunet}@${HOST}:${REMOTE_DIR}`)
console.log('(approve the Duo prompt when asked)\n')

// -O: legacy scp protocol. The default SFTP mode fails on AFS with
// `remote mkdir ".../WWW/": Failure`.
const result = spawnSync('scp', ['-O', '-r', ...entries, `${sunet}@${HOST}:${REMOTE_DIR}/`], {
  cwd: distDir,
  stdio: 'inherit',
})

if (result.error) {
  console.error(`Failed to run scp: ${result.error.message}`)
  process.exit(1)
}
if (result.status !== 0) process.exit(result.status)

console.log('\n✓ Deployed to https://web.stanford.edu/group/ieee/')
