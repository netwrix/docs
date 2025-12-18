const path = require('path');
const fs = require('fs');

// Extract title from markdown frontmatter, handling YAML folded blocks (>-)
function extractTitle(filePath, fallbackName) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.startsWith('---')) {
      const parts = content.split('---', 3);
      if (parts.length >= 3) {
        const frontmatter = parts[1];

        // Look for sidebar_label first (Docusaurus best practice)
        const label = extractYamlField(frontmatter, 'sidebar_label');
        if (label) return label;

        // Fall back to title
        const title = extractYamlField(frontmatter, 'title');
        if (title) return title;
      }
    }
  } catch (error) {
    console.warn(`Error reading frontmatter from ${filePath}:`, error.message);
  }
  // Fallback to cleaned filename
  return fallbackName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Extract a YAML field value, handling both simple and folded block formats
function extractYamlField(frontmatter, fieldName) {
  // First check for folded block format: field: >- followed by indented lines
  const foldedMatch = frontmatter.match(new RegExp(`^\\s*${fieldName}:\\s*>-\\s*$`, 'm'));
  if (foldedMatch) {
    const lines = frontmatter.split('\n');
    const startIndex = lines.findIndex(line => line.match(new RegExp(`^\\s*${fieldName}:\\s*>-\\s*$`)));
    if (startIndex !== -1) {
      const result = [];
      // Collect indented lines following the >- declaration
      for (let i = startIndex + 1; i < lines.length; i++) {
        const line = lines[i];
        // Stop if we hit another YAML key (non-indented line with colon)
        if (line.match(/^\s*\w+:\s*/)) break;
        // Skip empty lines, but collect indented content
        if (line.trim()) {
          result.push(line.replace(/^\s+/, '').trim());
        }
      }
      if (result.length > 0) {
        return result.join(' ').trim();
      }
    }
  }

  // Try simple single-line format: field: value (but exclude folded blocks)
  const simpleMatch = frontmatter.match(new RegExp(`^\\s*${fieldName}:\\s*['"]?([^'"\\n\\r>]+?)['"]?\\s*$`, 'm'));
  if (simpleMatch && !simpleMatch[1].trim().startsWith('>')) {
    return simpleMatch[1].trim();
  }

  return null;
}

// Helper function to capitalize folder names with proper handling of acronyms
function capitalizeFolderName(folderName) {
  // Common acronyms that should be all caps (based on actual KB folder names)
  const acronyms = ['sql', 'faq', 'faqs', 'sso', 'api', 'url', 'http', 'https', 'ssl', 'tls', 'ldap', 'ad', 'vm', 'kb', 'csv', 'json', 'xml', 'html', 'css', 'saml', 'oauth', 'id', 'mfa', 'rds', 'ux', 'dpi'];

  return folderName
    .split('-')
    .map(word => {
      const lowerWord = word.toLowerCase();
      // Check if this is a known acronym
      if (acronyms.includes(lowerWord)) {
        return word.toUpperCase();
      }
      // Otherwise, capitalize first letter only
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

// Recursively process a folder and its subfolders to build sidebar items
function processFolderRecursive(folderPath, productName, relativePath = '') {
  const items = [];
  const entries = fs.readdirSync(folderPath, { withFileTypes: true });

  // Get all markdown files in this folder
  const markdownFiles = entries
    .filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    .map(file => {
      const filePath = path.join(folderPath, file.name);
      const fallbackName = file.name.replace('.md', '');
      const fileRelativePath = relativePath ? `${relativePath}/${file.name.replace('.md', '')}` : file.name.replace('.md', '');

      // Build the href path - use /docs/kb since routeBasePath is 'docs/kb'
      const href = `/docs/kb/${productName}/${fileRelativePath}`;

      return {
        type: 'link',
        label: extractTitle(filePath, fallbackName),
        href: href
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));

  // Get all subdirectories
  const subfolders = entries
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('.') && !entry.name.startsWith('_'))
    .sort((a, b) => a.name.localeCompare(b.name));

  // Process each subfolder recursively
  subfolders.forEach(subfolder => {
    const subfolderPath = path.join(folderPath, subfolder.name);
    const subfolderRelativePath = relativePath ? `${relativePath}/${subfolder.name}` : subfolder.name;
    const subfolderItems = processFolderRecursive(subfolderPath, productName, subfolderRelativePath);

    if (subfolderItems.length > 0) {
      const categoryLabel = capitalizeFolderName(subfolder.name);

      items.push({
        type: 'category',
        label: categoryLabel,
        collapsed: true,
        items: subfolderItems
      });
    }
  });

  // Add markdown files after subfolders (subfolders first, then files)
  items.push(...markdownFiles);

  return items;
}

function generateKBSidebar(productName) {
  // Find the project root by looking for package.json
  let currentDir = __dirname;
  while (!fs.existsSync(path.join(currentDir, 'package.json')) && currentDir !== '/') {
    currentDir = path.dirname(currentDir);
  }
  const kbPath = path.join(currentDir, 'docs', 'kb', productName);

  if (!fs.existsSync(kbPath)) {
    return [];
  }

  // Process the KB directory recursively, starting from the top level
  // Skip root-level files (they should be organized into folders)
  const items = [];
  const entries = fs.readdirSync(kbPath, { withFileTypes: true });

  // Only process directories at the top level
  const topLevelFolders = entries
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('.') && !entry.name.startsWith('_'))
    .sort((a, b) => a.name.localeCompare(b.name));

  topLevelFolders.forEach(folder => {
    const folderPath = path.join(kbPath, folder.name);
    const folderItems = processFolderRecursive(folderPath, productName, folder.name);

    if (folderItems.length > 0) {
      const categoryLabel = capitalizeFolderName(folder.name);

      items.push({
        type: 'category',
        label: categoryLabel,
        collapsed: true,
        items: folderItems
      });
    }
  });

  return items;
}

module.exports = generateKBSidebar;
