/**
 * Collects broken links and images found during Docusaurus build.
 * Uses file-based persistence to guarantee cross-module communication.
 * The actual Teams notification is sent by the broken-link-summary-plugin
 * after the build completes via the postBuild lifecycle hook.
 * @module brokenLinkNotifier
 */

import fs from 'fs';
import path from 'path';
import os from 'os';
import tmp from 'tmp';

// Temp file location for cross-module communication
// File system is shared across all Node.js contexts, solving module scope isolation issues
// Use a securely created temporary file to avoid predictable names and permission issues
const TEMP_FILE = tmp.fileSync({
  prefix: 'docusaurus-broken-links-',
  postfix: '.json',
}).name;

/**
 * @typedef {Object} BrokenItem
 * @property {'Link'|'Image'} type - Type of broken reference
 * @property {string} sourceFilePath - Path to the markdown file containing the broken reference
 * @property {string} url - The broken URL or image path
 */

/**
 * Read broken items from temporary file.
 * @returns {BrokenItem[]} Array of broken items from file, empty array if file doesn't exist
 * @private
 */
function readItemsFromFile() {
  try {
    if (fs.existsSync(TEMP_FILE)) {
      const data = fs.readFileSync(TEMP_FILE, 'utf8');
      if (!data.trim()) {
        return [];
      }
      return JSON.parse(data);
    }
  } catch (error) {
    console.warn('⚠️ Error reading broken items file:', error.message);
  }
  return [];
}

/**
 * Write broken items to temporary file.
 * @param {BrokenItem[]} items - Items to write
 * @private
 */
function writeItemsToFile(items) {
  try {
    fs.writeFileSync(TEMP_FILE, JSON.stringify(items, null, 2), 'utf8');
  } catch (error) {
    console.warn('⚠️ Error writing broken items file:', error.message);
  }
}

/**
 * Append a broken item to the file.
 * @param {BrokenItem} item - Item to append
 * @private
 */
function appendItem(item) {
  const items = readItemsFromFile();
  items.push(item);
  writeItemsToFile(items);
}

/**
 * Handle broken markdown link found during build.
 * Appends the item to the temp file for batch notification.
 * @param {Object} params - Parameters from Docusaurus markdown hook
 * @param {string} params.sourceFilePath - Source file containing the broken link
 * @param {string} params.url - The broken link URL
 * @param {Object} [params.node] - The mdast node (not currently used)
 * @returns {void} - Returns nothing to let Docusaurus use default warning behavior
 * @see https://docusaurus.io/docs/api/docusaurus-config#markdown
 */
export function handleBrokenMarkdownLink({ sourceFilePath, url }) {
  console.warn(`Broken link in ${sourceFilePath}: ${url}`);
  appendItem({ type: 'Link', sourceFilePath, url });
}

/**
 * Handle broken markdown image found during build.
 * Appends the item to the temp file for batch notification.
 * @param {Object} params - Parameters from Docusaurus markdown hook
 * @param {string} params.sourceFilePath - Source file containing the broken image
 * @param {string} params.url - The broken image URL
 * @param {Object} [params.node] - The mdast node (not currently used)
 * @returns {void} - Returns nothing to keep the broken image reference visible
 * @see https://docusaurus.io/docs/api/docusaurus-config#markdown
 */
export function handleBrokenMarkdownImage({ sourceFilePath, url }) {
  console.warn(`Broken image in ${sourceFilePath}: ${url}`);
  appendItem({ type: 'Image', sourceFilePath, url });
}

/**
 * Get all collected broken items for batch notification.
 * Reads from temp file to guarantee cross-module access.
 * Called by the broken-link-summary-plugin during postBuild.
 * @returns {BrokenItem[]} - Array of all broken links and images found during build
 */
export function getBrokenItems() {
  return readItemsFromFile();
}

/**
 * Clear collected items and delete temp file.
 * Called by the broken-link-summary-plugin after sending summary and at build start.
 * @returns {void}
 */
export function clearBrokenItems() {
  try {
    if (fs.existsSync(TEMP_FILE)) {
      fs.unlinkSync(TEMP_FILE);
    }
  } catch (error) {
    console.warn('⚠️ Error deleting broken items file:', error.message);
  }
}
