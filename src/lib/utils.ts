import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function readingTime(words: string) {
  const count = words.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(count / 210))} min read`;
}
