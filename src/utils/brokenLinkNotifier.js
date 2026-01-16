/**
 * Utility to send broken link/image notifications to Microsoft Teams
 */

const brokenItems = new Set();

async function sendTeamsNotification(type, sourceFilePath, url) {
  const webhookUrl = process.env.TEAMS_WEBHOOK_URL;

  // Skip if no webhook configured or if we've already reported this exact item
  const itemKey = `${type}:${sourceFilePath}:${url}`;
  if (!webhookUrl || brokenItems.has(itemKey)) {
    return;
  }

  brokenItems.add(itemKey);

  const message = {
    "@type": "MessageCard",
    "@context": "https://schema.org/extensions",
    "summary": `Broken ${type} detected`,
    "themeColor": "FF6B00", // Orange for warnings
    "title": `⚠️ Broken ${type} Detected`,
    "sections": [{
      "activityTitle": "Documentation Build Warning",
      "facts": [
        {
          "name": "Type:",
          "value": type
        },
        {
          "name": "File:",
          "value": sourceFilePath
        },
        {
          "name": "URL:",
          "value": url
        }
      ]
    }]
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      console.warn(`Failed to send Teams notification: ${response.status}`);
    }
  } catch (error) {
    console.warn('Error sending Teams notification:', error.message);
  }
}

export function handleBrokenMarkdownLink({ sourceFilePath, url }) {
  console.warn(`Broken link in ${sourceFilePath}: ${url}`);
  sendTeamsNotification('Link', sourceFilePath, url);
  // Return nothing - let Docusaurus handle with default warning behavior
}

export function handleBrokenMarkdownImage({ sourceFilePath, url }) {
  console.warn(`Broken image in ${sourceFilePath}: ${url}`);
  sendTeamsNotification('Image', sourceFilePath, url);
  // Return nothing - keep the broken image path visible
}
