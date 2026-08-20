#!/usr/bin/env node
// Builds a single .xlsx workbook from the generated docs-audit/**/review-list.csv
// files: one tab per product plus a live Dashboard tab of COUNTIF formulas.
// Run after `npm run audit:generate`. Re-run any time to rebuild from scratch —
// this script only reads docs-audit/, it never writes back to it.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ExcelJS from 'exceljs';
import { PRODUCTS } from '../src/config/products.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const args = { dir: 'docs-audit', out: null };
  for (const arg of argv) {
    if (arg.startsWith('--dir=')) args.dir = arg.slice('--dir='.length);
    else if (arg.startsWith('--out=')) args.out = arg.slice('--out='.length);
  }
  if (!args.out) args.out = path.join(args.dir, 'audit-workbook.xlsx');
  return args;
}

// Minimal RFC4180 CSV parser: handles quoted fields, doubled-quote escapes,
// and embedded commas/newlines inside quoted fields.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  let i = 0;
  const n = text.length;
  while (i < n) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      field += c;
      i += 1;
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }
    if (c === ',') {
      row.push(field);
      field = '';
      i += 1;
      continue;
    }
    if (c === '\r') {
      i += 1;
      continue;
    }
    if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      i += 1;
      continue;
    }
    field += c;
    i += 1;
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => !(r.length === 1 && r[0] === ''));
}

function sanitizeSheetName(name, fallback) {
  let clean = (name || fallback).replace(/[:\\/?*[\]]/g, '');
  clean = clean.trim();
  if (clean.length > 31) clean = clean.slice(0, 31).trim();
  return clean || fallback;
}

function colLetter(index) {
  // 0-based index -> Excel column letter
  let n = index + 1;
  let letters = '';
  while (n > 0) {
    const rem = (n - 1) % 26;
    letters = String.fromCharCode(65 + rem) + letters;
    n = Math.floor((n - 1) / 26);
  }
  return letters;
}

const COLUMN_WIDTHS = {
  document_title: 42,
  version: 10,
  live_page_url: 55,
  source_path: 55,
  duplicates: 32,
  reviewer: 14,
  audited: 13,
  accurate: 16,
  complete: 14,
  notes: 32,
};

const HEADER_LABELS = {
  document_title: 'Document Title',
  version: 'Version',
  live_page_url: 'Document URL',
  source_path: 'Source Path',
  duplicates: 'Duplicated in',
  reviewer: 'Reviewer',
  audited: 'Audited',
  accurate: 'Accurate',
  complete: 'Complete',
  notes: 'Notes',
};

const SECTION_HEADER_FILL = 'FFD9E2F3';
const SECTION_ROW_FILLS = ['FFFFFFFF', 'FFF2F5FA'];

const AUDITED_OPTIONS = ['In progress', 'Done'];
const ACCURATE_OPTIONS = ['Accurate', 'Some inaccuracies'];
const COMPLETE_OPTIONS = ['Complete', 'Incomplete'];

function addListValidation(sheet, colLetter, firstRow, lastRow, options) {
  if (lastRow < firstRow) return;
  sheet.dataValidations.add(`${colLetter}${firstRow}:${colLetter}${lastRow}`, {
    type: 'list',
    allowBlank: true,
    formulae: [`"${options.join(',')}"`],
    showErrorMessage: true,
    errorStyle: 'stop',
    errorTitle: 'Invalid value',
    error: `Choose one of: ${options.join(', ')} — or leave blank.`,
  });
}

// The section a page belongs to is its first subfolder under the product's
// (optional) version folder, e.g. docs/dataclassification/5.6.2/contentconfigurationoverview/...
// -> "contentconfigurationoverview". Pages with no subfolder (directly under
// the product/version root) fall into a shared "(General)" section.
function deriveSection(sourcePath, version) {
  const parts = sourcePath.split('/');
  let idx = 2; // skip 'docs' and the product folder
  if (parts[idx] === version) idx += 1; // skip the version folder, if present
  if (parts.length > idx + 1) return parts[idx];
  return '(General)';
}

function addProductSheet(workbook, sheetName, rows) {
  const sheet = workbook.addWorksheet(sheetName, {
    views: [{ state: 'frozen', ySplit: 1 }],
  });
  // Section header rows sit above their group, so the collapse control
  // should appear above the group too, not below it.
  sheet.properties.outlineProperties = { summaryBelow: false, summaryRight: false };
  // ExcelJS derives row.collapsed as (outlineLevel >= outlineLevelRow), so at
  // the default threshold of 0 every level-1 row gets written collapsed="1" —
  // not just group boundaries. Raise the threshold above our actual depth (1)
  // so rows keep their outline level (groupable) without that spurious flag.
  sheet.properties.outlineLevelRow = 2;
  if (rows.length === 0) return sheet;

  const header = rows[0];
  sheet.addRow(header.map((h) => HEADER_LABELS[h.trim().toLowerCase()] || h));
  const headerRow = sheet.getRow(1);
  headerRow.font = { bold: true };
  headerRow.alignment = { vertical: 'middle' };

  const urlCol = header.findIndex((h) => h.trim().toLowerCase() === 'live_page_url');
  const versionCol = header.findIndex((h) => h.trim().toLowerCase() === 'version');
  const sourcePathCol = header.findIndex((h) => h.trim().toLowerCase() === 'source_path');
  const auditedCol = header.findIndex((h) => h.trim().toLowerCase() === 'audited');
  const accurateCol = header.findIndex((h) => h.trim().toLowerCase() === 'accurate');
  const completeCol = header.findIndex((h) => h.trim().toLowerCase() === 'complete');

  let currentSection = null;
  let sectionIndex = -1;

  for (let r = 1; r < rows.length; r += 1) {
    const values = rows[r];
    const section =
      sourcePathCol >= 0 ? deriveSection(values[sourcePathCol] || '', values[versionCol] || '') : null;

    if (section !== null && section !== currentSection) {
      currentSection = section;
      sectionIndex += 1;
      const sectionRow = sheet.addRow([section === '(General)' ? 'General' : section]);
      sheet.mergeCells(sectionRow.number, 1, sectionRow.number, header.length);
      sectionRow.font = { bold: true };
      sectionRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: SECTION_HEADER_FILL } };
    }

    const excelRow = sheet.addRow(values);
    if (section !== null) {
      excelRow.outlineLevel = 1;
      excelRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: SECTION_ROW_FILLS[sectionIndex % 2] },
      };
    }
    if (urlCol >= 0 && values[urlCol]) {
      const cell = excelRow.getCell(urlCol + 1);
      cell.value = { text: values[urlCol], hyperlink: values[urlCol] };
      cell.font = { color: { argb: 'FF0563C1' }, underline: true };
    }
  }

  header.forEach((h, idx) => {
    const key = h.trim().toLowerCase();
    sheet.getColumn(idx + 1).width = COLUMN_WIDTHS[key] || 20;
  });

  sheet.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: header.length },
  };

  const lastRow = sheet.rowCount; // section header rows push the real last row past rows.length
  if (auditedCol >= 0) addListValidation(sheet, colLetter(auditedCol), 2, lastRow, AUDITED_OPTIONS);
  if (accurateCol >= 0) addListValidation(sheet, colLetter(accurateCol), 2, lastRow, ACCURATE_OPTIONS);
  if (completeCol >= 0) addListValidation(sheet, colLetter(completeCol), 2, lastRow, COMPLETE_OPTIONS);

  return sheet;
}

function fillDashboard(dash, productSheets) {
  const headers = [
    'Product',
    'Total pages',
    'Audited (Done)',
    'Accurate',
    'Some Inaccuracies',
    'Complete',
    'Incomplete',
    '% Audited',
  ];
  dash.addRow(headers);
  dash.getRow(1).font = { bold: true };

  productSheets.forEach(({ sheetName, sourcePathCol, auditedCol, accurateCol, completeCol }) => {
    const ref = `'${sheetName}'!`;
    const rowNum = dash.rowCount + 1;
    dash.addRow([
      sheetName,
      { formula: `COUNTA(${ref}${sourcePathCol}:${sourcePathCol})-1` },
      { formula: `COUNTIF(${ref}${auditedCol}:${auditedCol},"Done")` },
      { formula: `COUNTIF(${ref}${accurateCol}:${accurateCol},"Accurate")` },
      { formula: `COUNTIF(${ref}${accurateCol}:${accurateCol},"Some inaccuracies")` },
      { formula: `COUNTIF(${ref}${completeCol}:${completeCol},"Complete")` },
      { formula: `COUNTIF(${ref}${completeCol}:${completeCol},"Incomplete")` },
      { formula: `IFERROR(C${rowNum}/B${rowNum},0)` },
    ]);
  });

  const firstDataRow = 2;
  const lastDataRow = dash.rowCount;
  if (lastDataRow >= firstDataRow) {
    const totalRowNum = lastDataRow + 1;
    const totalRow = dash.addRow([
      'Total',
      { formula: `SUM(B${firstDataRow}:B${lastDataRow})` },
      { formula: `SUM(C${firstDataRow}:C${lastDataRow})` },
      { formula: `SUM(D${firstDataRow}:D${lastDataRow})` },
      { formula: `SUM(E${firstDataRow}:E${lastDataRow})` },
      { formula: `SUM(F${firstDataRow}:F${lastDataRow})` },
      { formula: `SUM(G${firstDataRow}:G${lastDataRow})` },
      { formula: `IFERROR(C${totalRowNum}/B${totalRowNum},0)` },
    ]);
    totalRow.font = { bold: true };
  }

  dash.getColumn(1).width = 32;
  for (let c = 2; c <= 7; c += 1) dash.getColumn(c).width = 16;
  dash.getColumn(8).width = 12;
  dash.getColumn(8).numFmt = '0%';

  dash.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: headers.length } };
}

// Sheet names shorter than the product's registered display name, so the
// tab reads cleanly instead of getting truncated at Excel's 31-char limit.
const SHEET_NAME_OVERRIDES = {
  platgovnetsuite: 'PlatGov NetSuite',
  platgovnetsuiteflashlight: 'PlatGov NetSuite Flashlight',
  platgovsalesforce: 'PlatGov Salesforce',
  platgovsalesforceflashlight: 'PlatGov Salesforce Flashlight',
};

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const absDir = path.resolve(REPO_ROOT, args.dir);
  const absOut = path.resolve(REPO_ROOT, args.out);

  const productNameById = new Map(PRODUCTS.map((p) => [p.id, p.name]));
  const usedNames = new Set();

  const productDirs = fs
    .readdirSync(absDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'generate-audit-list.mjs / build-audit-workbook.mjs';
  workbook.created = new Date(0); // fixed timestamp keeps output reproducible

  // Added first (empty) so it renders as the leftmost tab; filled in after
  // the product loop below once we know every sheet name and column layout.
  const dashboard = workbook.addWorksheet('Dashboard', {
    views: [{ state: 'frozen', ySplit: 1 }],
  });

  const productSheets = [];

  for (const productId of productDirs) {
    const csvPath = path.join(absDir, productId, 'review-list.csv');
    if (!fs.existsSync(csvPath)) continue;
    const rows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
    if (rows.length <= 1) continue; // header only — no pages to review, skip the tab

    const baseName = SHEET_NAME_OVERRIDES[productId] || productNameById.get(productId) || productId;
    let sheetName = sanitizeSheetName(baseName, productId);
    let suffix = 2;
    while (usedNames.has(sheetName.toLowerCase())) {
      const suffixStr = ` ${suffix}`;
      const truncatedBase = sanitizeSheetName(baseName, productId).slice(0, 31 - suffixStr.length).trimEnd();
      sheetName = `${truncatedBase}${suffixStr}`;
      suffix += 1;
    }
    usedNames.add(sheetName.toLowerCase());

    addProductSheet(workbook, sheetName, rows);

    const header = rows[0].map((h) => h.trim().toLowerCase());
    const sourcePathIdx = header.indexOf('source_path');
    const auditedIdx = header.indexOf('audited');
    const accurateIdx = header.indexOf('accurate');
    const completeIdx = header.indexOf('complete');
    productSheets.push({
      sheetName,
      sourcePathCol: colLetter(sourcePathIdx >= 0 ? sourcePathIdx : 0),
      auditedCol: colLetter(auditedIdx >= 0 ? auditedIdx : 6),
      accurateCol: colLetter(accurateIdx >= 0 ? accurateIdx : 7),
      completeCol: colLetter(completeIdx >= 0 ? completeIdx : 8),
    });
  }

  fillDashboard(dashboard, productSheets);

  fs.mkdirSync(path.dirname(absOut), { recursive: true });
  await workbook.xlsx.writeFile(absOut);
  console.log(`✅ Wrote ${productSheets.length} product tabs + Dashboard to ${path.relative(REPO_ROOT, absOut)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
