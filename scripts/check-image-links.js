const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
const targetFolder = args[0]; // First argument is the folder to check

// Configuration
const DOCS_DIR = path.join(__dirname, '..', 'docs');
const STATIC_DIR = path.join(__dirname, '..', 'static');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff'];

// Determine the directory to scan
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

// Function to extract image links from markdown content
function extractImageLinks(content) {
    // Improved regex to avoid capturing malformed links
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    const links = [];
    let match;
    
    while ((match = imageRegex.exec(content)) !== null) {
        const altText = match[1];
        const imagePath = match[2].trim();
        
        // Skip if the path contains obvious malformed characters or is too short
        if (imagePath.length < 3 || imagePath.includes('<') || imagePath.includes('>')) {
            continue;
        }
        
        // Skip external URLs (http/https)
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            continue;
        }
        
        // Skip data URLs
        if (imagePath.startsWith('data:')) {
            continue;
        }
        
        links.push({
            altText,
            imagePath,
            lineNumber: content.substring(0, match.index).split('\n').length
        });
    }
    
    return links;
}

// Function to check if image exists
function checkImageExists(imagePath) {
    // Remove leading slash if present
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    
    // Construct full path in static directory
    const fullPath = path.join(STATIC_DIR, cleanPath);
    
    return fs.existsSync(fullPath);
}

// Function to get relative path from docs directory
function getRelativePath(fullPath) {
    return path.relative(DOCS_DIR, fullPath);
}

// Main function
function checkImageLinks() {
    // Validate target folder if specified
    if (targetFolder && !fs.existsSync(SCAN_DIR)) {
        console.error(`❌ Error: Folder '${targetFolder}' not found in docs directory`);
        console.error(`   Expected: ${SCAN_DIR}`);
        process.exit(1);
    }
    
    const folderDescription = targetFolder ? `folder '${targetFolder}'` : 'entire docs folder';
    console.log(`🔍 Scanning ${folderDescription} for markdown files...`);
    
    const markdownFiles = findMarkdownFiles(SCAN_DIR);
    console.log(`📁 Found ${markdownFiles.length} markdown files\n`);
    
    let totalBrokenLinks = 0;
    let filesWithBrokenLinks = 0;
    
    for (const filePath of markdownFiles) {
        const content = fs.readFileSync(filePath, 'utf8');
        const imageLinks = extractImageLinks(content);
        
        if (imageLinks.length === 0) continue;
        
        const brokenLinks = [];
        
        for (const link of imageLinks) {
            if (!checkImageExists(link.imagePath)) {
                brokenLinks.push({
                    ...link,
                    expectedPath: path.join(STATIC_DIR, link.imagePath.startsWith('/') ? link.imagePath.substring(1) : link.imagePath)
                });
            }
        }
        
        if (brokenLinks.length > 0) {
            filesWithBrokenLinks++;
            totalBrokenLinks += brokenLinks.length;
            
            console.log(`❌ ${getRelativePath(filePath)} (${brokenLinks.length} broken links):`);
            
            for (const brokenLink of brokenLinks) {
                console.log(`   Line ${brokenLink.lineNumber}: ${brokenLink.imagePath}`);
                console.log(`   Expected: ${brokenLink.expectedPath}`);
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
        console.log('✅ All image links are valid!');
    } else {
        console.log('⚠️  Please fix the broken links above.');
    }
}

// Show usage if help is requested
function showUsage() {
    console.log('Usage: node check-image-links.js [folder]');
    console.log('');
    console.log('Arguments:');
    console.log('  folder    Optional: Specific subfolder within docs to check');
    console.log('            (e.g., "accessanalyzer" to check docs/accessanalyzer/)');
    console.log('');
    console.log('Examples:');
    console.log('  node check-image-links.js                    # Check entire docs folder');
    console.log('  node check-image-links.js accessanalyzer     # Check only accessanalyzer folder');
    console.log('  node check-image-links.js 1secure           # Check only 1secure folder');
}

// Run the script
if (require.main === module) {
    try {
        // Show help if requested
        if (args.includes('--help') || args.includes('-h')) {
            showUsage();
            process.exit(0);
        }
        
        checkImageLinks();
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

module.exports = { checkImageLinks, findMarkdownFiles, extractImageLinks, checkImageExists }; 