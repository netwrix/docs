#!/usr/bin/env node

/**
 * fix-images.js
 *
 * Interactive CLI tool to fix both product folder mismatches and path alignment mismatches in image links.
 *
 * Usage:
 *   node scripts/fix-images.js <product-folder> [--case=product|path]
 *   (default: both cases)
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { spawn } = require('child_process');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  gray: '\x1b[90m',
  red: '\x1b[31m',
};

function walkDir(dir, ext, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, ext, fileList);
    } else if (file.endsWith(ext)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function findImageLinks(mdContent) {
  // Matches ![alt](path) or ![](path)
  const regex = /!\[[^\]]*\]\(([^)]+)\)/g;
  let match;
  const results = [];
  while ((match = regex.exec(mdContent)) !== null) {
    results.push({
      link: match[0],
      path: match[1],
      index: match.index,
    });
  }
  return results;
}

function getContextLines(mdContent, index, numLines = 2) {
  const lines = mdContent.split('\n');
  let charCount = 0;
  let lineNum = 0;
  for (; lineNum < lines.length; lineNum++) {
    charCount += lines[lineNum].length + 1;
    if (charCount > index) break;
  }
  const start = Math.max(0, lineNum - numLines);
  const end = Math.min(lines.length, lineNum + numLines + 1);
  return lines.slice(start, end).join('\n');
}

function promptUser(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(question, ans => { rl.close(); resolve(ans); }));
}

function openImage(filePath) {
  const platform = process.platform;
  let cmd, args;
  if (platform === 'win32') {
    cmd = 'cmd';
    args = ['/c', 'start', '""', filePath];
  } else if (platform === 'darwin') {
    cmd = 'open';
    args = [filePath];
  } else {
    cmd = 'xdg-open';
    args = [filePath];
  }
  spawn(cmd, args, { stdio: 'ignore', detached: true }).unref();
}

function getProductFolderFromImgPath(imgPath) {
  // Extract product folder from /img/product_docs/<product-folder>/...
  const norm = imgPath.replace(/\\/g, '/');
  const m = norm.match(/(?:^|\/)img\/product_docs\/([^/]+\/[^/]+)\//);
  return m ? m[1] : null;
}

function pathHasProductFolder(imgPath, productFolder) {
  // Normalize and check if productFolder is in the path after /img/product_docs/
  const norm = imgPath.replace(/\\/g, '/');
  return norm.includes('/img/product_docs/' + productFolder + '/') || norm.includes('img/product_docs/' + productFolder + '/');
}

function getExpectedImagePath(productFolder, mdFile, origImgPath) {
  // Support /img/product_docs/<productFolder>/, img/product_docs/<productFolder>/, or static/img/product_docs/<productFolder>/
  const normImgPath = origImgPath.replace(/\\/g, '/');
  const prefixes = [
    '/img/product_docs/' + productFolder + '/',
    'img/product_docs/' + productFolder + '/',
    'static/img/product_docs/' + productFolder + '/',
  ];
  const prefix = prefixes.find(p => normImgPath.startsWith(p));
  if (!prefix) return null;
  // Get the relative path of the md file (excluding filename)
  const mdRelPath = path.relative(path.join('docs', productFolder), mdFile).replace(/\\/g, '/');
  const mdRelDir = path.dirname(mdRelPath);
  const imgFileName = path.basename(normImgPath);
  const expected = prefix + (mdRelDir === '.' ? '' : mdRelDir + '/') + imgFileName;
  return expected;
}

function isProductFolderMismatch(productFolder, imgPath) {
  // True if the product folder in the image path does not match the input
  const found = getProductFolderFromImgPath(imgPath);
  return found && found !== productFolder;
}

function isPathAlignmentMismatch(productFolder, mdFile, imgPath) {
  const normImgPath = imgPath.replace(/\\/g, '/');
  const prefixes = [
    '/img/product_docs/' + productFolder + '/',
    'img/product_docs/' + productFolder + '/',
    'static/img/product_docs/' + productFolder + '/',
  ];
  const prefix = prefixes.find(p => normImgPath.startsWith(p));
  if (!prefix) return false;
  // Get the subpath after product folder (excluding filename)
  const imgSubPath = path.dirname(normImgPath.slice(prefix.length));
  const mdRelPath = path.relative(path.join('docs', productFolder), mdFile).replace(/\\/g, '/');
  const mdRelDir = path.dirname(mdRelPath);
  // If subpath does not match mdRelDir, it's a mismatch
  return imgSubPath !== mdRelDir;
}

function getCandidateImagePaths(productFolder, mdFile, origImgPath) {
  // Suggest: <prefix>/<productFolder>/<md-file-relative-path>/<original image file name>
  const prefixes = [
    '/img/product_docs/',
    'img/product_docs/',
    'static/img/product_docs/',
  ];
  const prefix = prefixes.find(p => origImgPath.replace(/\\/g, '/').startsWith(p));
  if (!prefix) return [];
  const baseDir = prefix + productFolder;
  const mdRelPath = path.relative(path.join('docs', productFolder), mdFile).replace(/\\/g, '/');
  const imgFileName = path.basename(origImgPath);
  const candidates = [];
  let currDir = path.dirname(mdRelPath);
  while (true) {
    const candidate = baseDir + (currDir === '.' ? '' : '/' + currDir) + '/' + imgFileName;
    // Remove duplicate slashes
    const candidateNorm = candidate.replace(/\\/g, '/').replace(/\/\//g, '/');
    if (fs.existsSync(path.join('static', candidateNorm.replace(/^\/?img\//, 'img/').replace(/^\/?/, '')))) {
      candidates.push(candidateNorm);
    }
    // Check for _number suffixes
    const prefixName = imgFileName.replace(/(\.[^.]+)$/, '');
    const ext = path.extname(imgFileName);
    const parentDir = baseDir + (currDir === '.' ? '' : '/' + currDir);
    const parentDirFs = path.join('static', parentDir.replace(/^\/?img\//, 'img/').replace(/^\/?/, ''));
    if (fs.existsSync(parentDirFs)) {
      const files = fs.readdirSync(parentDirFs);
      for (const f of files) {
        if (f.startsWith(prefixName + '_') && f.endsWith(ext)) {
          candidates.push((parentDir + '/' + f).replace(/\\/g, '/').replace(/\/\//g, '/'));
        }
      }
    }
    if (currDir === '' || currDir === '.' || currDir === path.sep) break;
    currDir = path.dirname(currDir);
  }
  // Remove duplicates
  return [...new Set(candidates)];
}

async function main() {
  const inputFolder = process.argv[2];
  const caseArg = process.argv.find(arg => arg.startsWith('--case='));
  const whichCase = caseArg ? caseArg.split('=')[1] : 'both';
  if (!inputFolder) {
    console.error('Usage: node scripts/fix-images.js <product-folder> [--case=product|path]');
    process.exit(1);
  }
  const docsRoot = path.join('docs', inputFolder);
  if (!fs.existsSync(docsRoot)) {
    console.error('Folder not found:', docsRoot);
    process.exit(1);
  }
  const mdFiles = walkDir(docsRoot, '.md');
  for (const mdFile of mdFiles) {
    const mdContent = fs.readFileSync(mdFile, 'utf8');
    const links = findImageLinks(mdContent);
    let newContent = mdContent;
    for (const linkObj of links) {
      const { link, path: imgPath, index } = linkObj;
      let caseType = null;
      if ((whichCase === 'both' || whichCase === 'product') && isProductFolderMismatch(inputFolder, imgPath)) {
        caseType = 'product';
      } else if ((whichCase === 'both' || whichCase === 'path') && isPathAlignmentMismatch(inputFolder, mdFile, imgPath)) {
        caseType = 'path';
      } else {
        continue;
      }
      const context = getContextLines(mdContent, index, 2);
      const candidates = getCandidateImagePaths(inputFolder, mdFile, imgPath);
      console.log('\n---');
      console.log(`${colors.bold}${colors.cyan}File: ${mdFile}${colors.reset}`);
      console.log(`${colors.gray}Context:`);
      console.log(context + colors.reset);
      console.log(`${colors.yellow}Original image link: ${link}${colors.reset}`);
      if (caseType === 'product') {
        console.log(`${colors.red}Case: Product folder mismatch${colors.reset}`);
      } else if (caseType === 'path') {
        console.log(`${colors.red}Case: Path alignment mismatch${colors.reset}`);
      }
      if (candidates.length === 0) {
        console.log(colors.red, 'No suggested images found.', colors.reset);
      } else {
        console.log('Suggested image(s):');
        candidates.forEach((c, i) => {
          console.log(`  ${colors.green}[${i + 1}] ${c}${colors.reset}`);
        });
      }
      let action;
      while (true) {
        let prompt = `\n${colors.bold}Choose an option:${colors.reset}\n`;
        if (candidates.length) prompt += '  [1-' + candidates.length + '] Select a suggested image\n';
        prompt += '  [c] Enter custom path\n  [s] Skip\n> ';
        action = await promptUser(prompt);
        if (candidates.length && /^[1-9]\d*$/.test(action) && +action >= 1 && +action <= candidates.length) {
          action = candidates[+action - 1];
        } else if (action.toLowerCase() === 'c') {
          action = await promptUser('Enter custom image path: ');
        } else if (action.toLowerCase() === 's') {
          action = null;
          break;
        } else {
          console.log('Invalid input.');
          continue;
        }
        // Check if file exists (relative to static/ or root)
        let imgFsPath = action.replace(/^\//, '');
        if (!imgFsPath.startsWith('static/')) imgFsPath = 'static/' + imgFsPath;
        if (!fs.existsSync(imgFsPath)) {
          console.log('File does not exist:', imgFsPath);
          continue;
        }
        openImage(imgFsPath);
        const confirm = await promptUser('Use this image? [y/N]: ');
        if (confirm.toLowerCase() === 'y') {
          // Update the markdown content
          // Use root-relative path for markdown
          const relImgPath = action.startsWith('/') ? action : '/' + action;
          newContent = newContent.replace(link, link.replace(imgPath, relImgPath));
          console.log('Updated image link in file.');
          break;
        } else {
          console.log('Not updating.');
        }
      }
    }
    if (newContent !== mdContent) {
      fs.writeFileSync(mdFile, newContent, 'utf8');
      console.log('File updated:', mdFile);
    }
  }
  console.log('Done.');
}

main(); 