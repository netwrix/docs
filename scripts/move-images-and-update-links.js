#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");

// --- Argument Parsing ---
const args = process.argv.slice(2);
function getArg(flag, def) {
  const idx = args.indexOf(flag);
  if (idx !== -1 && args[idx + 1]) return args[idx + 1];
  return def;
}
const SRC_BASE = getArg("--src");
const DEST_BASE = getArg("--dest");
const DOCS_BASE = "docs"; // Always use 'docs' as the docs root
if (!SRC_BASE || !DEST_BASE) {
  console.error("Usage: node move-images-and-update-links.js --src <source_dir> --dest <destination_dir>");
  process.exit(1);
}

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".bmp", ".tiff", ".ico"];

// --- 1. Move Images ---
function walkDir(dir, fileList = [], skipDir = null) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (skipDir && path.resolve(fullPath) === path.resolve(skipDir)) continue;
      walkDir(fullPath, fileList, skipDir);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}
function moveImages() {
  const allFiles = walkDir(SRC_BASE);
  let moved = 0;
  for (const srcFile of allFiles) {
    const ext = path.extname(srcFile).toLowerCase();
    if (!IMAGE_EXTENSIONS.includes(ext)) continue;
    const relPath = path.relative(SRC_BASE, srcFile);
    const destFile = path.join(DEST_BASE, relPath);
    fs.mkdirSync(path.dirname(destFile), { recursive: true });
    fs.renameSync(srcFile, destFile);
    moved++;
    console.log(`Moved: ${srcFile} -> ${destFile}`);
  }
  console.log(`\n${moved} image(s) moved.\n`);
}

// --- 2. Delete Empty Folders ---
function deleteEmptyDirs(dir, skipDir = null) {
  if (skipDir && path.resolve(dir) === path.resolve(skipDir)) return false;
  if (!fs.existsSync(dir)) return false;
  if (!fs.statSync(dir).isDirectory()) return false;
  const files = fs.readdirSync(dir);
  let allGone = true;
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      const childGone = deleteEmptyDirs(fullPath, skipDir);
      if (!childGone) allGone = false;
    } else {
      allGone = false;
    }
  }
  if (allGone) {
    fs.rmdirSync(dir);
    console.log(`Deleted empty folder: ${dir}`);
    return true;
  }
  return false;
}
function cleanEmptyFolders() {
  let deleted = 0;
  for (const file of fs.readdirSync(SRC_BASE)) {
    const fullPath = path.join(SRC_BASE, file);
    if (path.resolve(fullPath) === path.resolve(DEST_BASE)) continue;
    if (fs.statSync(fullPath).isDirectory()) {
      if (deleteEmptyDirs(fullPath, DEST_BASE)) deleted++;
    }
  }
  console.log(`\n${deleted} empty folder(s) deleted.\n`);
}

// --- 3. Update Markdown Links ---
function walkMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkMarkdownFiles(fullPath, fileList);
    } else if (file.endsWith(".md")) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}
function updateImageLinks() {
  // Always use paths relative to 'static' for markdown links
  function stripStaticPrefix(p) {
    return p.replace(/^static[\/]/, '').replace(/\\/g, '/');
  }
  const relSrc = stripStaticPrefix(SRC_BASE);
  const relDest = stripStaticPrefix(DEST_BASE);
  // Regex: match links like (/relSrc/...) or (relSrc/...) (with or without leading slash)
  const regex = new RegExp(`(\\()/?${relSrc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/`, "g");
  const mdFiles = walkMarkdownFiles(DOCS_BASE);
  let updatedFiles = 0;
  for (const filePath of mdFiles) {
    let content = fs.readFileSync(filePath, "utf8");
    let updated = false;
    content = content.replace(regex, (match, p1) => {
      updated = true;
      return `${p1}/${relDest}/`.replace(/\/\//g, '/');
    });
    if (updated) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Updated: ${filePath}`);
      updatedFiles++;
    }
  }
  console.log(`\n${updatedFiles} markdown file(s) updated.\n`);
}

// --- Main ---
console.log(`Moving images from ${SRC_BASE} to ${DEST_BASE} ...`);
moveImages();
console.log(`Cleaning up empty folders in ${SRC_BASE} ...`);
cleanEmptyFolders();
console.log(`Updating markdown links in ${DOCS_BASE} ...`);
updateImageLinks();
console.log("\nAll done!"); 