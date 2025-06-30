#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

// Helper to recursively get all .md files in a directory
function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Helper to update markdown links in a file
function updateMarkdownLinks(filePath, oldPath, newPath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Convert paths to forward slashes for consistent matching
  const normalizedOldPath = oldPath.replace(/\\/g, '/');
  const normalizedNewPath = newPath.replace(/\\/g, '/');
  
  // Only update files that actually contain links to the old path
  // Look for markdown links that contain the old path and end with .md
  const escapedOldPath = normalizedOldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Match complete markdown links: [text](path/to/old/file.md)
  // This regex specifically looks for markdown link syntax with the old path
  const regex = new RegExp(`(\\[([^\\]]+)\\]\\()([^)]*${escapedOldPath}[^)]*\\.md)`, 'g');
  
  const newContent = content.replace(regex, (match, p1, p2, p3) => {
    // Double-check that this is actually a link to the old path
    if (p3.includes(normalizedOldPath)) {
      updated = true;
      // Replace the old path with the new path in the link
      const newLinkPath = p3.replace(new RegExp(escapedOldPath, 'g'), normalizedNewPath);
      return `${p1}${newLinkPath}`;
    }
    return match;
  });
  
  if (updated) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`  Updated links in: ${filePath}`);
  }
  
  return updated;
}

// Main function
function main() {
  // Parse command line arguments
  const args = process.argv.slice(2);
  let sourcePath = null;
  let destPath = null;
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--src' && i + 1 < args.length) {
      sourcePath = args[i + 1];
      i++;
    } else if (args[i] === '--dest' && i + 1 < args.length) {
      destPath = args[i + 1];
      i++;
    }
  }
  
  if (!sourcePath || !destPath) {
    console.error('Usage: node scripts/move-and-update-links.js --src <source_dir> --dest <destination_dir>');
    process.exit(1);
  }
  
  // Resolve paths relative to current directory
  const resolvedSourcePath = path.resolve(sourcePath);
  const resolvedDestPath = path.resolve(destPath);
  
  console.log(`Source: ${resolvedSourcePath}`);
  console.log(`Destination: ${resolvedDestPath}`);
  
  // Check if source directory exists
  if (!fs.existsSync(resolvedSourcePath)) {
    console.error(`Error: Source directory does not exist: ${resolvedSourcePath}`);
    process.exit(1);
  }
  
  // Check if source is a directory
  const sourceStat = fs.statSync(resolvedSourcePath);
  if (!sourceStat.isDirectory()) {
    console.error(`Error: Source is not a directory: ${resolvedSourcePath}`);
    process.exit(1);
  }
  
  // Safety check: prevent moving a directory into itself or its parent
  if (resolvedSourcePath === resolvedDestPath || resolvedDestPath.startsWith(resolvedSourcePath + path.sep)) {
    console.error('Error: Cannot move a directory into itself or its parent');
    process.exit(1);
  }
  
  try {
    // Move contents from source to destination
    const sourceItems = fs.readdirSync(resolvedSourcePath);
    console.log(`Found ${sourceItems.length} items to move in source directory`);
    
    sourceItems.forEach(item => {
      const sourceItemPath = path.join(resolvedSourcePath, item);
      const destItemPath = path.join(resolvedDestPath, item);
      
      if (fs.existsSync(destItemPath)) {
        console.log(`Warning: ${destItemPath} already exists, will overwrite`);
      }
      
      fse.moveSync(sourceItemPath, destItemPath, { overwrite: true });
      console.log(`Moved ${sourceItemPath} to ${destItemPath}`);
    });
    
    // Remove the now-empty source directory
    fs.rmdirSync(resolvedSourcePath);
    console.log(`Removed empty source directory: ${resolvedSourcePath}`);
    
    // Update markdown links
    console.log('Updating markdown links...');
    const docsDir = path.resolve('docs');
    const markdownFiles = getAllMarkdownFiles(docsDir);
    console.log(`Found ${markdownFiles.length} markdown files to check`);
    
    let updatedFilesCount = 0;
    markdownFiles.forEach(filePath => {
      if (updateMarkdownLinks(filePath, sourcePath, destPath)) {
        updatedFilesCount++;
      }
    });
    
    console.log(`Updated markdown links in ${updatedFilesCount} files under docs/.`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Run the script
main(); 