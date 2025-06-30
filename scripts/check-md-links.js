const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
const targetFolder = args[0]; // First argument is the folder to check

// Configuration
const DOCS_DIR = path.join(__dirname, '..', 'docs');
const SCAN_DIR = targetFolder ? path.join(DOCS_DIR, targetFolder) : DOCS_DIR;

// Function to recursively find all .md files
function findMarkdownFiles(dir) {
    const files = [];
    
    function scanDirectory(currentDir) {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
            const fullPath = path.join(currentDir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                scanDirectory(fullPath);
            } else if (path.extname(item).toLowerCase() === '.md') {
                files.push(fullPath);
            }
        }
    }
    
    scanDirectory(dir);
    return files;
}

// Function to extract markdown links from content
function extractMarkdownLinks(content) {
    // Regex to match markdown links: [text](url) - but exclude image links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;
    
    while ((match = linkRegex.exec(content)) !== null) {
        const linkText = match[1];
        const linkUrl = match[2].trim();
        
        // Skip if the URL is too short
        if (linkUrl.length < 2) {
            continue;
        }
        
        // Skip external URLs (http/https)
        if (linkUrl.startsWith('http://') || linkUrl.startsWith('https://')) {
            continue;
        }
        
        // Skip mailto links
        if (linkUrl.startsWith('mailto:')) {
            continue;
        }
        
        // Skip anchor-only links (starting with #)
        if (linkUrl.startsWith('#')) {
            continue;
        }
        
        // Skip data URLs
        if (linkUrl.startsWith('data:')) {
            continue;
        }
        
        // Skip image links (check if it's an image file)
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff'];
        const isImageLink = imageExtensions.some(ext => linkUrl.toLowerCase().includes(ext));
        if (isImageLink) {
            continue;
        }
        
        // Skip links with angle brackets (external URLs)
        if (linkUrl.includes('<') || linkUrl.includes('>')) {
            continue;
        }
        
        links.push({
            linkText,
            linkUrl,
            lineNumber: content.substring(0, match.index).split('\n').length
        });
    }
    
    return links;
}

// Function to convert a heading to a Docusaurus/GitHub-style anchor slug
function headingToAnchorSlug(heading) {
    return heading
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove all non-word, non-space, non-hyphen chars
        .replace(/\s+/g, '-')      // Replace spaces with hyphens
        .replace(/-+/g, '-')        // Collapse multiple hyphens
        .replace(/^-+|-+$/g, '');   // Trim leading/trailing hyphens
}

// Function to check if anchor exists in markdown content
function checkHeadingExists(content, anchor) {
    if (!anchor) return true; // No anchor to check
    const cleanAnchor = anchor.startsWith('#') ? anchor.substring(1) : anchor;
    
    // Find all markdown headings in the content
    const headingRegex = /^#{1,6}\s+(.+)$/gm;
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
        const actualHeading = match[1].trim();
        const slug = headingToAnchorSlug(actualHeading);
        if (slug === cleanAnchor.toLowerCase()) {
            return true;
        }
    }
    return false;
}

// Function to resolve markdown file path
function resolveMarkdownPath(sourceFile, linkUrl) {
    const sourceDir = path.dirname(sourceFile);
    let targetPath;

    // Remove anchor fragment if present
    const urlWithoutAnchor = linkUrl.split('#')[0];
    
    if (urlWithoutAnchor.startsWith('/docs/')) {
        // Remove the /docs/ prefix and resolve from DOCS_DIR
        targetPath = path.join(DOCS_DIR, urlWithoutAnchor.substring('/docs/'.length));
    } else if (urlWithoutAnchor.startsWith('/')) {
        // Absolute path from docs root - remove the leading slash
        targetPath = path.join(DOCS_DIR, urlWithoutAnchor.substring(1));
    } else {
        // Relative path
        targetPath = path.join(sourceDir, urlWithoutAnchor);
    }

    // Normalize the path
    targetPath = path.normalize(targetPath);

    // If the target doesn't have .md extension, try adding it
    if (!targetPath.endsWith('.md')) {
        const withExtension = targetPath + '.md';
        if (fs.existsSync(withExtension)) {
            return withExtension;
        }
    }

    return targetPath;
}

// Function to check if markdown file exists and heading is valid
function checkMarkdownExists(sourceFile, linkUrl) {
    const targetPath = resolveMarkdownPath(sourceFile, linkUrl);
    
    // Check if the file exists
    if (!fs.existsSync(targetPath)) {
        return false;
    }
    
    // If it's a directory, check for index.md
    if (fs.statSync(targetPath).isDirectory()) {
        const indexPath = path.join(targetPath, 'index.md');
        if (fs.existsSync(indexPath)) {
            // Check heading in index.md if there's an anchor
            const anchor = linkUrl.split('#')[1];
            if (anchor) {
                const content = fs.readFileSync(indexPath, 'utf8');
                return checkHeadingExists(content, anchor);
            }
            return true;
        }
        return false;
    }
    
    // Check heading in the file if there's an anchor
    const anchor = linkUrl.split('#')[1];
    if (anchor) {
        const content = fs.readFileSync(targetPath, 'utf8');
        return checkHeadingExists(content, anchor);
    }
    
    return true;
}

// Function to get relative path from docs directory
function getRelativePath(fullPath) {
    return path.relative(DOCS_DIR, fullPath);
}

// Main function
function checkMarkdownLinks() {
    // Validate target folder if specified
    if (targetFolder && !fs.existsSync(SCAN_DIR)) {
        console.error(`❌ Error: Folder '${targetFolder}' not found in docs directory`);
        console.error(`   Expected: ${SCAN_DIR}`);
        process.exit(1);
    }
    
    const folderDescription = targetFolder ? `folder '${targetFolder}'` : 'entire docs folder';
    console.log(`🔍 Scanning ${folderDescription} for markdown file links...`);
    
    const markdownFiles = findMarkdownFiles(SCAN_DIR);
    console.log(`📁 Found ${markdownFiles.length} markdown files\n`);
    
    let totalBrokenLinks = 0;
    let filesWithBrokenLinks = 0;
    
    for (const filePath of markdownFiles) {
        const content = fs.readFileSync(filePath, 'utf8');
        const markdownLinks = extractMarkdownLinks(content);
        
        if (markdownLinks.length === 0) continue;
        
        const brokenLinks = [];
        
        for (const link of markdownLinks) {
            if (!checkMarkdownExists(filePath, link.linkUrl)) {
                const targetPath = resolveMarkdownPath(filePath, link.linkUrl);
                brokenLinks.push({
                    ...link,
                    targetPath
                });
            }
        }
        
        if (brokenLinks.length > 0) {
            filesWithBrokenLinks++;
            totalBrokenLinks += brokenLinks.length;
            
            console.log(`❌ ${getRelativePath(filePath)} (${brokenLinks.length} broken links):`);
            
            for (const brokenLink of brokenLinks) {
                console.log(`   Line ${brokenLink.lineNumber}: [${brokenLink.linkText}](${brokenLink.linkUrl})`);
                console.log(`   Expected: ${brokenLink.targetPath}`);
                console.log('');
            }
        }
    }
    
    // Summary
    console.log('='.repeat(60));
    console.log('📊 SUMMARY:');
    console.log(`📁 Total markdown files scanned: ${markdownFiles.length}`);
    console.log(`❌ Files with broken links: ${filesWithBrokenLinks}`);
    console.log(`🔗 Total broken links: ${totalBrokenLinks}`);
    
    if (totalBrokenLinks === 0) {
        console.log('✅ All markdown links are valid!');
    } else {
        console.log('⚠️  Please fix the broken links above.');
    }
}

// Show usage if help is requested
function showUsage() {
    console.log('Usage: node check-md-links.js [folder]');
    console.log('');
    console.log('Arguments:');
    console.log('  folder    Optional: Specific subfolder within docs to check');
    console.log('            (e.g., "accessanalyzer" to check docs/accessanalyzer/)');
    console.log('');
    console.log('Examples:');
    console.log('  node check-md-links.js                    # Check entire docs folder');
    console.log('  node check-md-links.js accessanalyzer     # Check only accessanalyzer folder');
    console.log('  node check-md-links.js 1secure           # Check only 1secure folder');
    console.log('');
    console.log('Note: This script checks internal markdown file links only.');
    console.log('      External URLs, images, and anchors are ignored.');
}

// Run the script
if (require.main === module) {
    try {
        // Show help if requested
        if (args.includes('--help') || args.includes('-h')) {
            showUsage();
            process.exit(0);
        }
        
        checkMarkdownLinks();
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

module.exports = { checkMarkdownLinks, findMarkdownFiles, extractMarkdownLinks, checkMarkdownExists }; 