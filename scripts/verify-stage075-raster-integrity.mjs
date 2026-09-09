import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import process from 'node:process';

const ROOT = join(process.cwd(), 'public', 'assets', 'stage075', 'anchors');

async function collectWebpFiles(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error?.code === 'ENOENT') {
      return [];
    }
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectWebpFiles(path)));
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === '.webp') {
      files.push(path);
    }
  }
  return files;
}

function inspectWebp(buffer) {
  if (buffer.length < 20) {
    return 'file-too-small';
  }

  if (buffer.subarray(0, 4).toString('ascii') !== 'RIFF') {
    return 'missing-riff-signature';
  }

  if (buffer.subarray(8, 12).toString('ascii') !== 'WEBP') {
    return 'missing-webp-signature';
  }

  const declaredRiffSize = buffer.readUInt32LE(4);
  if (declaredRiffSize + 8 !== buffer.length) {
    return `riff-size-mismatch:${declaredRiffSize + 8}:${buffer.length}`;
  }

  const firstChunk = buffer.subarray(12, 16).toString('ascii');
  if (!['VP8 ', 'VP8L', 'VP8X'].includes(firstChunk)) {
    return `unsupported-first-chunk:${JSON.stringify(firstChunk)}`;
  }

  const firstChunkSize = buffer.readUInt32LE(16);
  const paddedChunkSize = firstChunkSize + (firstChunkSize % 2);
  if (20 + paddedChunkSize > buffer.length) {
    return `truncated-first-chunk:${firstChunkSize}:${buffer.length}`;
  }

  return null;
}

const files = await collectWebpFiles(ROOT);
const failures = [];

for (const file of files) {
  const buffer = await readFile(file);
  const issue = inspectWebp(buffer);
  const repoPath = relative(process.cwd(), file).replaceAll('\\', '/');
  if (issue) {
    failures.push(`${repoPath}: ${issue}`);
  } else {
    console.log(`WEBP OK: ${repoPath}`);
  }
}

if (failures.length > 0) {
  console.error('Stage 07.5 raster integrity check failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Stage 07.5 raster integrity check passed (${files.length} WebP file(s)).`);
}
