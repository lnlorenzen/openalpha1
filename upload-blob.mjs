import { put } from '@vercel/blob';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function upload() {
  const file = await readFile(join(__dirname, 'launchpoint.png'));
  const { url } = await put('launchpoint.png', file, { access: 'public' });
  console.log('Blob URL:', url);
}

upload().catch(console.error);