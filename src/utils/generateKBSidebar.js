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

function cleanSlug(filename, productName) {
  let slug = filename.replace('.md', '');
  
  // Remove product name variations from beginning only
  const productVariations = [
    'access-analyzer',
    'accessanalyzer', 
    productName
  ];
  
  for (const variation of productVariations) {
    const regex = new RegExp(`^${variation.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-`, 'i');
    slug = slug.replace(regex, '');
  }
  
  return slug;
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
  
  const items = [];
  const entries = fs.readdirSync(kbPath, { withFileTypes: true });
  
  // Process folders (future KB categories)
  const folders = entries.filter(entry => entry.isDirectory()).sort();
  folders.forEach(folder => {
    const folderPath = path.join(kbPath, folder.name);
    const folderFiles = fs.readdirSync(folderPath)
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(folderPath, file);
        const fallbackName = file.replace('.md', '');

        // Handle index.md files specially - they should link to parent directory
        // Use relative paths from site root (routeBasePath already includes /docs/kb)
        const href = file === 'index.md'
          ? `/kb/${productName}/${folder.name}`
          : `/kb/${productName}/${folder.name}/${file.replace('.md', '')}`;

        return {
          type: 'link',
          label: extractTitle(filePath, fallbackName),
          href: href
        };
      })
      .sort((a, b) => a.label.localeCompare(b.label));

    if (folderFiles.length > 0) {
      const categoryLabel = folder.name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      items.push({
        type: 'category',
        label: categoryLabel,
        collapsed: true,
        items: folderFiles
      });
    }
  });
  
  // Process root-level files
  const rootFiles = entries
    .filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    .map(file => {
      const filePath = path.join(kbPath, file.name);
      const fallbackName = file.name.replace('.md', '');

      // Handle index.md files specially - they should link to parent directory
      // Use relative paths from site root (routeBasePath already includes /docs/kb)
      const href = file.name === 'index.md'
        ? `/kb/${productName}`
        : `/kb/${productName}/${file.name.replace('.md', '')}`;

      return {
        type: 'link',
        label: extractTitle(filePath, fallbackName),
        href: href
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));

  if (rootFiles.length > 0) {
    items.push({
      type: 'category',
      label: 'General',
      collapsed: true,
      items: rootFiles
    });
  }
  
  return items;
}

module.exports = generateKBSidebar;