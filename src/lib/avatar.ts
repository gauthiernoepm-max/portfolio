import { existsSync } from 'node:fs';
import path from 'node:path';
import { withBase } from './path';

/**
 * Portrait used in the header and the About block. `public/avatar.webp` is
 * generated from `assets/avatar.png` by `npm run avatar`. Without it, the header
 * falls back to the "G" monogram.
 */
const file = path.join(process.cwd(), 'public/avatar.webp');

export const hasAvatar = existsSync(file);

/** Padded crop, for the About block (52–72px). */
export const avatarSrc = withBase('/avatar.webp');

/** Tight crop, for the 28px header chip where detail is lost anyway. */
export const avatarSmallSrc = withBase('/avatar-sm.webp');
