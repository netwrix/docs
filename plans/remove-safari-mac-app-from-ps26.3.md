# Plan: Remove Safari / Mac App References from Password Secure 9.3

## Background

The Safari browser add-on / Mac Safari extension for Netwrix Password Secure is being discontinued. All references to the Safari add-on need to be removed from the `docs/passwordsecure/26.3` documentation.

## Affected Files

### 1. DELETE — `docs/passwordsecure/26.3/installation/installationbrowseraddon/safari.md`

- **Action:** Delete the entire file
- **Reason:** This is the dedicated Safari add-on installation page (15 lines). Contains the `.dmg` download link and drag-and-drop install instructions. No longer needed.

### 2. EDIT — `docs/passwordsecure/26.3/installation/installationbrowseraddon/installation_browser_add-on.md`

- **Action:** Remove line 14: `- [Safari](/docs/passwordsecure/26.3/installation/installationbrowseraddon/safari.md)`
- **Reason:** This is the index page listing all browser extension installation pages. The Safari entry links to the file being deleted.

### 3. EDIT — `docs/passwordsecure/26.3/configuration/browseraddons/browser_add-ons.md`

- **Action:** Remove line 21: `- Safari`
- **Reason:** This is the Browser Add-ons configuration page. Safari is listed as one of four supported browsers in a bullet list.

### 4. EDIT — `docs/passwordsecure/26.3/installation/requirements/webserver/browser.md`

- **Action:** Remove line 20: `| Safari            | Latest                     | Latest      |`
- **Reason:** This is the browser requirements table. The Safari row should be removed since the extension is no longer supported.

## Files Intentionally NOT Changed

### `docs/passwordsecure/26.3/introduction/versionhistory/version_9.2.3.32988.md` (line 17)

- **Contains:** "...the Safari extension for Mac, and the API."
- **Reason:** This is a historical release note. Version history / release notes should not be modified retroactively.

### `docs/passwordsecure/26.3/configuration/mobiledevices/securitymd.md` (line 37)

- **Contains:** "Passwords are automatically entered in other apps and Safari."
- **Reason:** This Safari reference is about iOS Password AutoFill on iPhone/iPad — it is part of the mobile device documentation and is unrelated to the Mac Safari browser extension.

## Orphaned Assets

- No Safari-specific images were found in `static/images/passwordsecure/`. The browser add-on pages share generic screenshots, so no image cleanup is needed.
