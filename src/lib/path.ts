export const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefix an internal path with the GitHub Pages base path. */
export const withBase = (path = '/') => `${base}${path.startsWith('/') ? path : `/${path}`}`;

/** Absolute URL of a path on the deployed site. */
export const canonical = (pathname: string) => new URL(pathname, 'https://x').pathname;
