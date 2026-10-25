import { existsSync } from 'node:fs';
import path from 'node:path';
import { withBase } from './path';

/**
 * The portrait is optional: drop it at `public/avatar.png` and every avatar slot
 * picks it up at build time. Without it, the header keeps the monogram.
 */
const file = path.join(process.cwd(), 'public/avatar.png');

export const hasAvatar = existsSync(file);

export const avatarSrc = withBase('/avatar.png');
