// src/utils/imagePath.ts
export function getImagePath(path: string): string {
  const base = (import.meta as any).env.BASE_URL || "/";

  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
}
