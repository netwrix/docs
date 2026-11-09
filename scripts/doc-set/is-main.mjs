/**
 * is-main.mjs: true when a module is the script node was started with.
 *
 * The usual check compares import.meta.url with "file://" plus process.argv[1]. It is false on Windows
 * (file:///C:/... against C:\...) and when the path has a space or another character that a URL encodes. The script
 * then exits 0 and does nothing, and a caller reads that as success. Compare real file paths instead.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function isMain(moduleUrl, argv1 = process.argv[1]) {
  if (!argv1) return false;
  const here = fileURLToPath(moduleUrl);
  try {
    return fs.realpathSync(path.resolve(argv1)) === fs.realpathSync(here);
  } catch {
    return path.resolve(argv1) === here;
  }
}
