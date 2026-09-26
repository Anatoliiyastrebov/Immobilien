"use client";

import type { ImageLoaderProps } from "next/image";

// Photos live in public/images as pre-sized copies (`name-640.webp`, …),
// so no visitor data goes to a third-party image CDN.
const WIDTHS = [640, 1080, 1920];

export default function imageLoader({ src, width }: ImageLoaderProps) {
  if (!src.startsWith("/images/")) return src;

  const size = WIDTHS.find((w) => w >= width) ?? WIDTHS[WIDTHS.length - 1];
  return src.replace(/\.webp$/, `-${size}.webp`);
}
