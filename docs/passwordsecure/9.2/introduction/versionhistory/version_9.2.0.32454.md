---
title: "Version 9.2.0.32454"
description: "Version 9.2.0.32454"
sidebar_position: 20
---

# Version 9.2.0.32454

## New

#### Web App (Advanced & Basic view)

- The web app is now available with a new design and can be deployed via Server Manager. For a
  limited time, the old web app remains available as an alternative.

#### Advanced view (on Windows)

- Additional time periods are now available for the "When revealing password" trigger: 6 hours, 12
  hours, and 1 day.
- API login is now possible with an API key that can be generated directly in the Windows and web
  app (This applies to the API and web app in new design.). This simplifies the login process and
  increases flexibility for integration.
- For more targeted synchronization, it is now optionally possible to limit the attributes of Active
  Directory and Entra ID users to be synchronized (This also applies to the web app and server.).

## Improvements

#### Web & Windows App

- Multiline password fields can only be changed when they are revealed.

#### Web App

- To provide a better overview of all password changes, the "Show password" button in the password
  history now also displays the encrypted fields of the historical versions.

#### Server Manager

- The alias of a database is now displayed in the database list, enabling quicker identification and
  management of databases with different names.

## Fixed

#### Advanced view (on Windows)

- Cross-client login now works for database profiles distributed via the registry (This also applies
  to the autofill add-on.).
- The values of list fields in passwords are now displayed as expected.
- The Windows app now always starts within the visible area when multiple monitors are used.
- After updating, translations are now loaded correctly on the first start of the Windows app.
- Copying multiple fields to the clipboard while editing a password no longer removes the field
  values.
- A bug has been fixed that prevented users from switching the Detail tab in the footer.
- An error in the tag management was resolved, which caused the buttons in the ribbon to disappear.

#### Web App

- An unloaded translation in the notifications has been fixed.
- Reloading the web app now correctly shows the "Locked" view again.
- Browser language detection for the web app is now reliable once more.
- Deleted users and roles can now be removed from permissions (This also applies to the Windows
  app.).

#### Browser Extension

- Excessive console output in the browser extension has been removed.

#### Server Manager

- Database login via the Server Manager is now also supported when using IPv6.

#### API

- The JavaScript API now again supports the creation of valid users.
