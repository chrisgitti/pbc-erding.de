import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'

const outDir = path.join(process.cwd(), 'out')

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        return walk(fullPath)
      }
      return [fullPath]
    }),
  )

  return files.flat()
}

function getPrefix(filePath) {
  const relativeDir = path.relative(outDir, path.dirname(filePath))
  if (!relativeDir) {
    return './'
  }

  const depth = relativeDir.split(path.sep).length
  return '../'.repeat(depth)
}

function relativizeHtml(html, prefix) {
  return html
    .replaceAll('href="/"', `href="${prefix}"`)
    .replaceAll("href='/'", `href='${prefix}'`)
    .replaceAll('src="/"', `src="${prefix}"`)
    .replace(/([("'=])\/(?=[A-Za-z0-9_])/g, `$1${prefix}`)
    .replace(/([("'=])\/(?=["'])/g, `$1${prefix}`)
}

function relativizeContent(content, prefix) {
  // Only relativize HTML attributes — skip <script> blocks to preserve
  // Next.js RSC payload JSON (hydration data) which must keep absolute paths.
  const result = []
  let lastIndex = 0
  // Only skip inline scripts (no src=) — those contain Next.js RSC payload JSON.
  // Scripts with src="..." are normal HTML attributes and must be relativized.
  const scriptRegex = /<script(?![^>]*\bsrc\s*=)[^>]*>[\s\S]*?<\/script>/gi
  let match

  while ((match = scriptRegex.exec(content)) !== null) {
    result.push(relativizeHtml(content.slice(lastIndex, match.index), prefix))
    // Inside inline scripts: only relativize /_next/ asset paths.
    // Route paths like "/kontakt" must stay absolute for the Next.js router.
    result.push(match[0].replace(/([("'])\/(_next\/)/g, `$1${prefix}$2`))
    lastIndex = match.index + match[0].length
  }
  result.push(relativizeHtml(content.slice(lastIndex), prefix))

  return result.join('')
}

const files = await walk(outDir)

for (const filePath of files) {
  const fileStat = await stat(filePath)
  if (!fileStat.isFile()) {
    continue
  }

  if (!filePath.endsWith('.html') && !filePath.endsWith('.txt')) {
    continue
  }

  const prefix = getPrefix(filePath)
  const original = await readFile(filePath, 'utf8')
  const updated = relativizeContent(original, prefix)

  if (updated !== original) {
    await writeFile(filePath, updated, 'utf8')
  }
}
