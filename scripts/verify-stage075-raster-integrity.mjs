import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import process from 'node:process';

const ROOT = join(process.cwd(), 'public', 'assets', 'stage075', 'anchors');
const IMAGE_CHUNKS = new Set(['VP8 ', 'VP8L']);

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

function readUInt24LE(buffer, offset) {
  return buffer[offset] | (buffer[offset + 1] << 8) | (buffer[offset + 2] << 16);
}

function inspectVp8(buffer, dataStart, chunkSize) {
  if (chunkSize < 10) {
    return 'vp8-header-too-small';
  }

  if (
    buffer[dataStart + 3] !== 0x9d ||
    buffer[dataStart + 4] !== 0x01 ||
    buffer[dataStart + 5] !== 0x2a
  ) {
    return 'vp8-frame-start-code-invalid';
  }

  const width = buffer.readUInt16LE(dataStart + 6) & 0x3fff;
  const height = buffer.readUInt16LE(dataStart + 8) & 0x3fff;
  if (width === 0 || height === 0) {
    return `vp8-dimensions-invalid:${width}x${height}`;
  }

  return null;
}

function inspectVp8l(buffer, dataStart, chunkSize) {
  if (chunkSize < 5) {
    return 'vp8l-header-too-small';
  }

  if (buffer[dataStart] !== 0x2f) {
    return 'vp8l-signature-invalid';
  }

  const bits = buffer.readUInt32LE(dataStart + 1);
  const width = (bits & 0x3fff) + 1;
  const height = ((bits >>> 14) & 0x3fff) + 1;
  const version = (bits >>> 29) & 0x7;

  if (version !== 0) {
    return `vp8l-version-invalid:${version}`;
  }

  if (width < 1 || height < 1 || width > 16384 || height > 16384) {
    return `vp8l-dimensions-invalid:${width}x${height}`;
  }

  return null;
}

function inspectVp8x(buffer, dataStart, chunkSize) {
  if (chunkSize !== 10) {
    return `vp8x-size-invalid:${chunkSize}`;
  }

  const width = readUInt24LE(buffer, dataStart + 4) + 1;
  const height = readUInt24LE(buffer, dataStart + 7) + 1;
  if (width < 1 || height < 1 || width > 16777216 || height > 16777216) {
    return `vp8x-dimensions-invalid:${width}x${height}`;
  }

  return null;
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

  let offset = 12;
  let sawStaticImageChunk = false;
  let chunkIndex = 0;

  while (offset < buffer.length) {
    if (offset + 8 > buffer.length) {
      return `truncated-chunk-header:${offset}`;
    }

    const fourcc = buffer.subarray(offset, offset + 4).toString('ascii');
    const chunkSize = buffer.readUInt32LE(offset + 4);
    const dataStart = offset + 8;
    const dataEnd = dataStart + chunkSize;
    const paddedEnd = dataEnd + (chunkSize % 2);

    if (dataEnd > buffer.length || paddedEnd > buffer.length) {
      return `truncated-chunk:${fourcc}:${chunkSize}:${buffer.length - dataStart}`;
    }

    if (chunkIndex === 0 && fourcc === 'VP8X') {
      const issue = inspectVp8x(buffer, dataStart, chunkSize);
      if (issue) {
        return issue;
      }
    } else if (fourcc === 'VP8 ') {
      const issue = inspectVp8(buffer, dataStart, chunkSize);
      if (issue) {
        return issue;
      }
      sawStaticImageChunk = true;
    } else if (fourcc === 'VP8L') {
      const issue = inspectVp8l(buffer, dataStart, chunkSize);
      if (issue) {
        return issue;
      }
      sawStaticImageChunk = true;
    }

    offset = paddedEnd;
    chunkIndex += 1;
  }

  if (offset !== buffer.length) {
    return `chunk-chain-size-mismatch:${offset}:${buffer.length}`;
  }

  if (IMAGE_CHUNKS.has(firstChunk)) {
    sawStaticImageChunk = true;
  }

  if (!sawStaticImageChunk) {
    return 'missing-static-vp8-image-chunk';
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
    console.log(`WEBP CONTAINER OK: ${repoPath}`);
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
