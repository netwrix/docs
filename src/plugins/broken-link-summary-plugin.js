/**
 * Docusaurus plugin to send Teams summary of broken links after build completes
 * Uses the postBuild lifecycle hook which runs AFTER all markdown files are processed
 * @module broken-link-summary-plugin
 */

import { getBrokenItems, clearBrokenItems } from '../utils/brokenLinkNotifier.js';

/**
 * Send batched summary notification to Microsoft Teams
 * @param {Object[]} items - Array of broken links and images collected during build
 * @param {string} items[].type - Type: 'Link' or 'Image'
 * @param {string} items[].sourceFilePath - File path containing the broken reference
 * @param {string} items[].url - The broken URL or image path
 * @returns {Promise<void>}
 */
async function sendSummaryNotification(items) {
  const webhookUrl = process.env.TEAMS_WEBHOOK_URL;

  // Validation: Check webhook URL exists
  if (!webhookUrl) {
    console.log('ℹ️ TEAMS_WEBHOOK_URL not set, skipping broken link notification');
    return;
  }

  // Validation: Check HTTPS
  if (!webhookUrl.startsWith('https://')) {
    console.warn('⚠️ TEAMS_WEBHOOK_URL must use HTTPS, skipping notification');
    return;
  }

  // Group items by type
  const links = items.filter(item => item.type === 'Link');
  const images = items.filter(item => item.type === 'Image');

  // Build summary sections
  const sections = [
    {
      activityTitle: 'Build Statistics',
      facts: [
        { name: 'Total Broken Links:', value: String(links.length) },
        { name: 'Total Broken Images:', value: String(images.length) },
        { name: 'Build Status:', value: '✅ Succeeded with warnings' }
      ]
    }
  ];

  // Add broken links section (limit to 20 for readability)
  if (links.length > 0) {
    const linksList = links
      .slice(0, 20)
      .map(item => `• ${item.sourceFilePath} → ${item.url}`)
      .join('\n');

    const moreText = links.length > 20 ? `\n\n... and ${links.length - 20} more` : '';

    sections.push({
      activityTitle: `Broken Links (${links.length})`,
      text: linksList + moreText
    });
  }

  // Add broken images section (limit to 20 for readability)
  if (images.length > 0) {
    const imagesList = images
      .slice(0, 20)
      .map(item => `• ${item.url} in ${item.sourceFilePath}`)
      .join('\n');

    const moreText = images.length > 20 ? `\n\n... and ${images.length - 20} more` : '';

    sections.push({
      activityTitle: `Broken Images (${images.length})`,
      text: imagesList + moreText
    });
  }

  const message = {
    '@type': 'MessageCard',
    '@context': 'https://schema.org/extensions',
    summary: `Build completed with ${links.length} broken links and ${images.length} broken images`,
    themeColor: 'FF6B00', // Orange
    title: '⚠️ Documentation Build - Broken Links Summary',
    sections
  };

  // Send with timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      console.log(`✅ Sent broken link summary to Teams (${items.length} items)`);
    } else {
      console.warn(`⚠️ Failed to send Teams notification: HTTP ${response.status}`);
    }
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      console.warn('⚠️ Teams notification timed out after 5s');
    } else {
      console.warn('⚠️ Error sending Teams notification:', error.message);
    }
  }
}

/**
 * Docusaurus plugin factory
 * @returns {Object} Plugin configuration with postBuild hook
 */
export default function brokenLinkSummaryPlugin(context, options) {
  return {
    name: 'broken-link-summary-plugin',

    /**
     * loadContent runs at the START of the build.
     * Clean up any stale data from previous builds to ensure a clean slate.
     * @returns {Promise<void>}
     */
    async loadContent() {
      // Clear any stale data from previous builds
      clearBrokenItems();
      return null; // This plugin doesn't load content
    },

    /**
     * postBuild runs AFTER all markdown files are processed and the build is complete.
     * This is the perfect lifecycle hook to send our aggregated summary notification.
     * @param {Object} props - Build properties
     * @param {string} props.outDir - Output directory of the build
     * @returns {Promise<void>}
     */
    async postBuild({ outDir }) {
      const brokenItems = getBrokenItems();

      if (brokenItems.length === 0) {
        console.log('✅ No broken links or images found');
        return;
      }

      console.log(`\n⚠️ Found ${brokenItems.length} broken links/images`);

      // Send summary notification
      await sendSummaryNotification(brokenItems);

      // Cleanup for next build
      clearBrokenItems();
    }
  };
}
