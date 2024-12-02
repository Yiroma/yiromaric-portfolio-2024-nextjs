"use client";

export default function myImageLoader({ src, width, quality }) {
  return `https://yiromaric.fr${src}?w=${width}&q=${quality || 75}`;
}
