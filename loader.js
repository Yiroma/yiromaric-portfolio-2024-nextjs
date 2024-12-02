"use client";

export default function myImageLoader({ src, width, quality }) {
  return `https://yiromaric.fr/pictures/${src}?w=${width}&q=${quality || 75}`;
}
