import * as dotenv from 'dotenv';

dotenv.config();

const { PORT, VITE_APP_URL } = process.env;

export const port = parseInt(PORT || '3001', 10);
export const appUrl = VITE_APP_URL || 'http://localhost:3001';

// Prefer importing individual variables instead of this config object
export const config = { port, appUrl };
