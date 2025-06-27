const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Get command line arguments
const args = process.argv.slice(2);
const targetFolder = args[0]; // First argument is the folder to check

// Configuration
const DOCS_DIR = path.join(__dirname, '..', 'docs');
const STATIC_DIR = path.join(__dirname, '..', 'static');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff'];

// Validate input
if (!targetFolder) {
    console.error('❌ Error: Please provide a folder name as an argument');
    console.log('');
    console.log('Usage: node update-image-links.js <folder>');
    console.log('');
    console.log('Examples:');
    console.log('  node update-image-links.js accessanalyzer/12.0');
    console.log('  node update-image-links.js 1secure');
    console.log('  node update-image-links.js activitymonitor/8.0');
    process.exit(1);
}

// Determine the directory to scan
const SCAN_DIR = path.join(DOCS_DIR, targetFolder);

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
            lineNumber: content.substring(0, match.index).split('\n').length,
            matchIndex: match.index,
            fullMatch: match[0]
        });
    }
    
    return links;
}

// Function to check if image link should be updated
function shouldUpdateImageLink(imagePath, targetFolder) {
    // Remove leading slash if present
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    
    // Check if it's a product_docs link
    if (!cleanPath.startsWith('img/product_docs/')) {
        return false;
    }
    
    // Extract the product name from the path
    const pathParts = cleanPath.split('/');
    if (pathParts.length < 3) {
        return false;
    }
    
    const productName = pathParts[2]; // img/product_docs/[productName]/...
    
    // Extract the expected product name from target folder
    const targetParts = targetFolder.split('/');
    const expectedProductName = targetParts[0]; // accessanalyzer/12.0 -> accessanalyzer
    
    // Check if the product name doesn't match
    return productName !== expectedProductName;
}

function getAllSubfolderCombinations(folders) {
    // Returns all possible order-preserving subfolder combinations (including skipping some)
    const results = [];
    const n = folders.length;
    for (let i = 1; i <= n; i++) {
        for (let start = 0; start <= n - i; start++) {
            results.push(folders.slice(start, start + i));
        }
    }
    return results;
}

function getPossibleImagePaths(imageFilename, product, version, mdSubfolders, imgSubfolders) {
    // Try all combinations of mdSubfolders, imgSubfolders, and their concatenations
    const combos = [];
    // 1. Just mdSubfolders
    combos.push(mdSubfolders);
    // 2. Just imgSubfolders
    combos.push(imgSubfolders);
    // 3. mdSubfolders + imgSubfolders
    combos.push([...mdSubfolders, ...imgSubfolders]);
    // 4. imgSubfolders + mdSubfolders
    combos.push([...imgSubfolders, ...mdSubfolders]);
    // 5. All sub-combinations of mdSubfolders
    combos.push(...getAllSubfolderCombinations(mdSubfolders));
    // 6. All sub-combinations of imgSubfolders
    combos.push(...getAllSubfolderCombinations(imgSubfolders));
    // 7. All sub-combinations of md+img
    combos.push(...getAllSubfolderCombinations([...mdSubfolders, ...imgSubfolders]));
    // 8. All sub-combinations of img+md
    combos.push(...getAllSubfolderCombinations([...imgSubfolders, ...mdSubfolders]));
    // Remove duplicates
    const seen = new Set();
    const uniqueCombos = combos.filter(arr => {
        const key = arr.join('/');
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
    // Build possible paths
    return uniqueCombos.map(subfolders => {
        const parts = ['img', 'product_docs', product];
        if (version) parts.push(version);
        parts.push(...subfolders);
        parts.push(imageFilename);
        return '/' + parts.join('/');
    });
}

function getAllInsertPositions(arr, toInsert) {
    // Returns all arrays formed by inserting toInsert at every possible position in arr
    const results = [];
    for (let i = 0; i <= arr.length; i++) {
        results.push([...arr.slice(0, i), ...toInsert, ...arr.slice(i)]);
    }
    return results;
}

function getAllValidImagePaths(imageFilename, product, version, mdSubfolders, imgSubfolders) {
    const candidates = [];
    // 1. Just imgSubfolders
    candidates.push(imgSubfolders);
    // 2. Insert mdSubfolders at every position in imgSubfolders
    candidates.push(...getAllInsertPositions(imgSubfolders, mdSubfolders));
    // Remove duplicates
    const seen = new Set();
    const uniqueCombos = candidates.filter(arr => {
        const key = arr.join('/');
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
    // Build possible paths
    return uniqueCombos.map(subfolders => {
        const parts = ['img', 'product_docs', product];
        if (version) parts.push(version);
        parts.push(...subfolders);
        parts.push(imageFilename);
        return '/' + parts.join('/');
    });
}

function generateCorrectedPath(imagePath, targetFolder, filePath) {
    // Remove leading slash if present
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    const pathParts = cleanPath.split('/');
    const targetParts = targetFolder.split('/');
    const correctProductName = targetParts[0];
    const correctVersion = targetParts.length > 1 ? targetParts[1] : null;
    // Get the relative path of the markdown file after product/version
    const fileRelToProduct = path.relative(path.join(DOCS_DIR, targetFolder), filePath);
    const mdSubfolders = fileRelToProduct.split(path.sep).slice(0, -1); // remove filename
    const imageFilename = pathParts[pathParts.length - 1];
    // Try all subfolder levels (from most specific to least)
    const validPaths = [];
    for (let i = mdSubfolders.length; i >= 0; i--) {
        const parts = ['img', 'product_docs', correctProductName];
        if (correctVersion) parts.push(correctVersion);
        parts.push(...mdSubfolders.slice(0, i));
        parts.push(imageFilename);
        const suggestedPath = '/' + parts.join('/');
        if (checkImageExistsInStatic(suggestedPath)) {
            validPaths.push(suggestedPath);
        }
    }
    if (validPaths.length > 0) {
        return validPaths;
    }
    // If not found, return null to indicate no valid suggestion
    return null;
}

// Function to check if an image exists at a given path in the static folder
function checkImageExistsInStatic(imagePath) {
    // Remove leading slash if present
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    const fullPath = path.join(STATIC_DIR, cleanPath);
    return fs.existsSync(fullPath);
}

// Function to update image links in content
function updateImageLinks(content, targetFolder) {
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let updatedContent = content;
    const updates = [];
    
    // Use replace with a function to handle the replacements properly
    updatedContent = updatedContent.replace(imageRegex, (match, altText, imagePath) => {
        // Skip if the path contains obvious malformed characters or is too short
        if (imagePath.length < 3 || imagePath.includes('<') || imagePath.includes('>')) {
            return match;
        }
        
        // Skip external URLs (http/https)
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return match;
        }
        
        // Skip data URLs
        if (imagePath.startsWith('data:')) {
            return match;
        }
        
        // Check if this link should be updated
        if (shouldUpdateImageLink(imagePath, targetFolder)) {
            const correctedPaths = generateCorrectedPath(imagePath, targetFolder, filePath);
            // Only update if the image exists at the new location
            if (correctedPaths && correctedPaths.length > 0) {
                const newMatch = `![${altText}](${correctedPaths[0]})`;
                updates.push({
                    oldPath: imagePath,
                    newPath: correctedPaths[0],
                    updated: true
                });
                return newMatch;
            } else {
                updates.push({
                    oldPath: imagePath,
                    newPath: correctedPaths,
                    updated: false
                });
                return match; // Do not update if image does not exist
            }
        }
        
        return match;
    });
    
    return { updatedContent, updates };
}

// Main function
function updateImageLinksInFolder() {
    // Validate target folder
    if (!fs.existsSync(SCAN_DIR)) {
        console.error(`❌ Error: Folder '${targetFolder}' not found in docs directory`);
        console.error(`   Expected: ${SCAN_DIR}`);
        process.exit(1);
    }
    
    console.log(`🔍 Scanning folder '${targetFolder}' for markdown files...`);
    
    const markdownFiles = findMarkdownFiles(SCAN_DIR);
    console.log(`📁 Found ${markdownFiles.length} markdown files\n`);
    
    let totalFilesUpdated = 0;
    let totalLinksUpdated = 0;
    
    for (const filePath of markdownFiles) {
        const content = fs.readFileSync(filePath, 'utf8');
        const { updatedContent, updates } = updateImageLinks(content, targetFolder);
        
        if (updates.length > 0) {
            // Write the updated content back to the file if any links were updated
            if (updates.some(u => u.updated)) {
                fs.writeFileSync(filePath, updatedContent, 'utf8');
            }
            
            const relPath = path.relative(DOCS_DIR, filePath);
            const updatedCount = updates.filter(u => u.updated).length;
            const skippedCount = updates.filter(u => !u.updated).length;
            if (updatedCount > 0) {
                console.log(`✅ ${relPath} (${updatedCount} links updated):`);
                for (const update of updates.filter(u => u.updated)) {
                    console.log(`   Old: ${update.oldPath}`);
                    console.log(`     New: ${update.newPath}`);
                    console.log('');
                }
            }
            if (skippedCount > 0) {
                console.log(`⚠️  ${relPath} (${skippedCount} links skipped - image not found):`);
                for (const update of updates.filter(u => !u.updated)) {
                    console.log(`   Old: ${update.oldPath}`);
                    console.log(`     Intended: ${update.newPath}`);
                    console.log('');
                }
            }
            
            totalFilesUpdated++;
            totalLinksUpdated += updates.length;
        }
    }
    
    // Summary
    console.log('='.repeat(60));
    console.log('📊 SUMMARY:');
    console.log(`📁 Total markdown files scanned: ${markdownFiles.length}`);
    console.log(`✅ Files updated: ${totalFilesUpdated}`);
    console.log(`🔗 Total links updated: ${totalLinksUpdated}`);
    
    if (totalLinksUpdated === 0) {
        console.log('✅ All image links are already correct!');
    } else {
        console.log('✅ Image links have been updated successfully.');
    }
}

// Show usage if help is requested
function showUsage() {
    console.log('Usage: node update-image-links.js <folder>');
    console.log('');
    console.log('Arguments:');
    console.log('  folder    Required: Specific subfolder within docs to update');
    console.log('            (e.g., "accessanalyzer/12.0" to update docs/accessanalyzer/12.0/)');
    console.log('');
    console.log('Examples:');
    console.log('  node update-image-links.js accessanalyzer/12.0');
    console.log('  node update-image-links.js 1secure');
    console.log('  node update-image-links.js activitymonitor/8.0');
    console.log('');
    console.log('This script will:');
    console.log('  1. Scan all markdown files in the specified folder and subfolders');
    console.log('  2. Find image links that don\'t match the expected product folder structure');
    console.log('  3. Update them to use the correct product name and version');
    console.log('  4. Save the changes back to the files');
}

// New: Function to scan and report mismatched image links
function reportMismatchedImageLinks(targetFolder) {
    const markdownFiles = findMarkdownFiles(path.join(DOCS_DIR, targetFolder));
    const reportLines = [];
    const targetParts = targetFolder.split('/');
    const correctProductName = targetParts[0];
    const correctVersion = targetParts.length > 1 ? targetParts[1] : null;

    // Add CSV header
    reportLines.push('File,Line,Image Link');

    for (const filePath of markdownFiles) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split(/\r?\n/);
        lines.forEach((line, idx) => {
            // Find all image links in the line
            const imageRegex = /!\[[^\]]*\]\(([^)]+)\)/g;
            let match;
            while ((match = imageRegex.exec(line)) !== null) {
                const imagePath = match[1];
                // Only check local (not http/https) links
                if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) continue;
                // Remove leading slash
                const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
                const pathParts = cleanPath.split('/');
                // Check if path matches expected product/version
                if (
                    pathParts[0] === 'img' &&
                    pathParts[1] === 'product_docs' &&
                    (
                        pathParts[2] !== correctProductName ||
                        (correctVersion && pathParts[3] !== correctVersion)
                    )
                ) {
                    // Escape double quotes and commas in fields for CSV
                    const fileCsv = path.relative(DOCS_DIR, filePath).replace(/"/g, '""');
                    const imageCsv = imagePath.replace(/"/g, '""');
                    reportLines.push(`"${fileCsv}",${idx + 1},"${imageCsv}"`);
                }
            }
        });
    }
    // Write report to CSV file in root of specified folder
    const reportPath = path.join(DOCS_DIR, targetFolder, 'image-link-report.csv');
    fs.writeFileSync(reportPath, reportLines.join('\n'), 'utf8');
    console.log(`\n📄 CSV report written to: ${reportPath}`);
    console.log(`Total mismatched links found: ${reportLines.length - 1}`);
}

// Replace main logic with report-only mode
if (require.main === module) {
    if (!targetFolder) {
        console.error('❌ Error: Please provide a folder name as an argument');
        process.exit(1);
    }
    reportMismatchedImageLinks(targetFolder);
}

module.exports = { 
    updateImageLinksInFolder, 
    findMarkdownFiles, 
    extractImageLinks, 
    shouldUpdateImageLink, 
    generateCorrectedPath,
    updateImageLinks 
}; 

async function interactiveFix(targetFolder) {
    const mismatches = getMismatchedLinks(targetFolder);
    if (mismatches.length === 0) {
        console.log('No mismatched image links found.');
        return;
    }
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let updated = 0, skipped = 0, custom = 0, quit = false;
    for (const mismatch of mismatches) {
        if (quit) break;
        // Show 2 lines before and after for context
        const content = fs.readFileSync(mismatch.filePath, 'utf8');
        const lines = content.split(/\r?\n/);
        const start = Math.max(0, mismatch.lineNumber - 3);
        const end = Math.min(lines.length, mismatch.lineNumber + 2);
        console.log('\nFile:', path.relative(DOCS_DIR, mismatch.filePath));
        console.log('Line:', mismatch.lineNumber);
        console.log('Context:');
        for (let i = start; i < end; i++) {
            const prefix = (i + 1 === mismatch.lineNumber) ? '> ' : '  ';
            console.log(`${prefix}${i + 1}: ${lines[i]}`);
        }
        console.log('Original image link:', mismatch.imagePath);
        let suggestion = mismatch.suggested;
        if (!suggestion) {
            console.log('No valid suggested image path found.');
        } else {
            console.log('Suggested:', suggestion);
        }
        let resolved = false;
        while (!resolved) {
            if (!suggestion) {
                rl.setPrompt('Enter custom image path, [s]kip, [q]uit: ');
            } else {
                rl.setPrompt('Action? [a]ccept/[c]ustom/[s]kip/[q]uit: ');
            }
            await new Promise((resolve) => {
                rl.prompt();
                rl.once('line', async (answer) => {
                    const ans = answer.trim().toLowerCase();
                    if (suggestion && (ans === 'a' || ans === 'accept' || ans === '')) {
                        const suggestionPath = suggestion;
                        if (suggestionPath && checkImageExistsInStatic(suggestionPath)) {
                            const content = fs.readFileSync(mismatch.filePath, 'utf8');
                            const newContent = content.replace(mismatch.fullMatch, mismatch.fullMatch.replace(mismatch.imagePath, suggestionPath));
                            fs.writeFileSync(mismatch.filePath, newContent, 'utf8');
                            console.log('✅ Updated to suggested path.');
                            updated++;
                            resolved = true;
                        } else {
                            console.log('❌ Suggested image does not exist in static folder. Try again.');
                        }
                        resolve();
                    } else if (ans === 'c' || (!suggestion && ans !== 's' && ans !== 'q')) {
                        rl.question('Enter custom image path: ', (customPath) => {
                            const finalPath = customPath.trim();
                            if (checkImageExistsInStatic(finalPath)) {
                                const content = fs.readFileSync(mismatch.filePath, 'utf8');
                                const newContent = content.replace(mismatch.fullMatch, mismatch.fullMatch.replace(mismatch.imagePath, finalPath));
                                fs.writeFileSync(mismatch.filePath, newContent, 'utf8');
                                console.log('✅ Updated to custom path.');
                                custom++;
                                resolved = true;
                            } else {
                                console.log('❌ Custom image does not exist in static folder. Try again.');
                            }
                            resolve();
                        });
                    } else if (ans === 's' || ans === 'skip') {
                        skipped++;
                        resolved = true;
                        resolve();
                    } else if (ans === 'q' || ans === 'quit') {
                        quit = true;
                        resolved = true;
                        resolve();
                    } else {
                        console.log('Invalid input. Try again.');
                        resolve();
                    }
                });
            });
        }
    }
    rl.close();
    console.log(`\nSummary: Updated: ${updated}, Custom: ${custom}, Skipped: ${skipped}`);
}

function getMismatchedLinks(targetFolder) {
    const markdownFiles = findMarkdownFiles(path.join(DOCS_DIR, targetFolder));
    const targetParts = targetFolder.split('/');
    const correctProductName = targetParts[0];
    const correctVersion = targetParts.length > 1 ? targetParts[1] : null;
    const mismatches = [];
    for (const filePath of markdownFiles) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split(/\r?\n/);
        lines.forEach((line, idx) => {
            const imageRegex = /!\[[^\]]*\]\(([^)]+)\)/g;
            let match;
            while ((match = imageRegex.exec(line)) !== null) {
                const imagePath = match[1];
                if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return;
                const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
                const pathParts = cleanPath.split('/');
                if (
                    pathParts[0] === 'img' &&
                    pathParts[1] === 'product_docs' &&
                    (
                        pathParts[2] !== correctProductName ||
                        (correctVersion && pathParts[3] !== correctVersion)
                    )
                ) {
                    mismatches.push({
                        filePath,
                        lineNumber: idx + 1,
                        line,
                        imagePath,
                        matchIndex: match.index,
                        fullMatch: match[0],
                        suggested: generateCorrectedPath(imagePath, targetFolder, filePath)
                    });
                }
            }
        });
    }
    return mismatches;
}

if (require.main === module) {
    interactiveFix(targetFolder);
} 