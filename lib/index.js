import { fileURLToPath } from 'url';

export const games = fileURLToPath(new URL('../dist/', import.meta.url));