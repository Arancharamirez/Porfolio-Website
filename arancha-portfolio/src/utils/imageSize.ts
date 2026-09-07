import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('../../public/', import.meta.url));

/**
 * Reads a PNG/JPEG file's intrinsic pixel dimensions directly from its
 * header bytes — no image-processing dependency required. Returns null
 * if the file is missing or in an unsupported format.
 */
export function getImageSize(publicPath: string): { width: number; height: number } | null {
  try {
    const buf = readFileSync(publicDir + publicPath.replace(/^\//, ''));

    // PNG: 8-byte signature, then IHDR chunk holds width/height as big-endian uint32s.
    if (buf.length >= 24 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
      return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    }

    // JPEG: walk the marker segments looking for a Start-Of-Frame marker.
    if (buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
      let offset = 2;
      while (offset < buf.length - 9) {
        if (buf[offset] !== 0xff) { offset++; continue; }
        const marker = buf[offset + 1];
        // SOF0..SOF3, SOF5..SOF7, SOF9..SOF11, SOF13..SOF15 carry frame dimensions.
        const isSOF = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
        if (isSOF) {
          const height = buf.readUInt16BE(offset + 5);
          const width = buf.readUInt16BE(offset + 7);
          return { width, height };
        }
        const segmentLength = buf.readUInt16BE(offset + 2);
        offset += 2 + segmentLength;
      }
    }

    return null;
  } catch {
    return null;
  }
}

/** Median width/height ratio across a set of public-dir image paths, or null if none resolve. */
export function medianAspectRatio(paths: string[]): number | null {
  const ratios = paths
    .map((p) => getImageSize(p))
    .filter((d): d is { width: number; height: number } => d !== null)
    .map((d) => d.width / d.height)
    .sort((a, b) => a - b);

  if (ratios.length === 0) return null;
  const mid = Math.floor(ratios.length / 2);
  return ratios.length % 2 === 0 ? (ratios[mid - 1] + ratios[mid]) / 2 : ratios[mid];
}
