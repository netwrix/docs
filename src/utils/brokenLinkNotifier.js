/**
 * Collects broken links and images found during Docusaurus build.
 * Uses in-memory array to store items during build.
 * The actual Teams notification is sent by the broken-link-summary-plugin
 * after the build completes via the postBuild lifecycle hook.
 * @module brokenLinkNotifier
 */

/**
 * @typedef {Object} BrokenItem
 * @property {'Link'|'Image'} type - Type of broken reference
 * @property {string} sourceFilePath - Path to the markdown file containing the broken reference
 * @property {string} url - The broken URL or image path
 */

// In-memory storage for broken items during build
let brokenItems = [];

/**
 * Handle broken markdown link found during build.
 * Appends the item to the in-memory array for batch notification.
 * @param {Object} params - Parameters from Docusaurus markdown hook
 * @param {string} params.sourceFilePath - Source file containing the broken link
 * @param {string} params.url - The broken link URL
 * @param {Object} [params.node] - The mdast node (not currently used)
 * @returns {void} - Returns nothing to let Docusaurus use default warning behavior
 * @see https://docusaurus.io/docs/api/docusaurus-config#markdown
 */
export function handleBrokenMarkdownLink({ sourceFilePath, url }) {
  console.warn(`Broken link in ${sourceFilePath}: ${url}`);
  brokenItems.push({ type: 'Link', sourceFilePath, url });
}

/**
 * Handle broken markdown image found during build.
 * Appends the item to the in-memory array for batch notification.
 * @param {Object} params - Parameters from Docusaurus markdown hook
 * @param {string} params.sourceFilePath - Source file containing the broken image
 * @param {string} params.url - The broken image URL
 * @param {Object} [params.node] - The mdast node (not currently used)
 * @returns {void} - Returns nothing to keep the broken image reference visible
 * @see https://docusaurus.io/docs/api/docusaurus-config#markdown
 */
export function handleBrokenMarkdownImage({ sourceFilePath, url }) {
  console.warn(`Broken image in ${sourceFilePath}: ${url}`);
  brokenItems.push({ type: 'Image', sourceFilePath, url });
}

/**
 * Get all collected broken items for batch notification.
 * Called by the broken-link-summary-plugin during postBuild.
 * @returns {BrokenItem[]} - Array of all broken links and images found during build
 */
export function getBrokenItems() {
  return brokenItems;
}

/**
 * Clear collected items.
 * Called by the broken-link-summary-plugin after sending summary and at build start.
 * @returns {void}
 */
export function clearBrokenItems() {
  brokenItems = [];
}
