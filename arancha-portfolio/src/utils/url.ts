export function assetUrl(path: string | undefined | null): string {
  if (!path) return '';
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path.startsWith('/') ? `${base}${path}` : `${base}/${path}`;
}
