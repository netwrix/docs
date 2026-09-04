# Document Review

* **Version:** 
* **Source Path:** 
* **Duplicated in:**

## Steps

1. Select the '…' in the upper right corner of Xchange to copy this template as Markdown/text into the text editor of your choice.
2. Read the document at the Document URL in the spreadsheet.
3. Follow along in the documentation with the application open if possible/necessary.
4. Go through this checklist and note any corrections that must be made:
   * Do UI elements match the product?
   * Do code samples and snippets work as written?
   * Are the requirements accurate and complete?
   * Are the steps in any procedures accurate, complete, and correctly ordered?
   * Are the screenshots accurate and necessary? If the screenshots aren't necessary, they should be removed and the document should be revised not to reference them.
5. When you are done making corrections, save your changes.

## Corrections

<!-- One block per error found. Duplicate for additional errors. Leave blank if none. -->

* **Error (quote the exact text if possible):** GOOD ex. Select the gear in the upper left to open settings.
* **Fix:** GOOD ex. The gear is actually in the upper right.

* **Error (quote the exact text if possible):** GOOD ex. Run `Get-AuditPolicy -ComputerName $server -Category "Logon"` to confirm the policy applied.
* **Fix:** GOOD ex. The parameter is `-SubCategory`, not `-Category` — running the command as written fails with "A parameter cannot be found that matches parameter name 'Category'."

* **Error (quote the exact text if possible):** GOOD ex. Screenshot below Step 2, showing the "New Policy" dialog.
* **Fix:** GOOD ex. Remove the screenshot — the dialog only has two fields (Name, Description), both already described in the text, and the screenshot shows the pre-9.2 layout anyway.

* **Error (quote the exact text if possible):** BAD ex. the settings section
* **Fix:** BAD ex. fix the wrong button name

* **Error (quote the exact text if possible):** 
* **Fix:**

## Applying corrections

Once the Corrections section is filled in, paste this whole document into a Claude Code chat opened at the root of the docs repo — the `audit-fix` skill picks it up from there, applies each fix, checks whether this page is duplicated in other versions, and offers to apply the same fix to any duplicates it finds. It reports back what it changed.

## Status

<!-- Fill in after audit-fix reports back. -->

* **Audited:** 
* **Accurate:** 
* **Complete:** 

## Fix Summary

<!-- Paste the report audit-fix gives you here. -->
