---
title: "Version 9.1.1.31138"
description: "Version 9.1.1.31138"
sidebar_position: 50
---

# Version 9.1.1.31138

## New

#### Advanced view (formerly FullClient)

- To facilitate the management of multiple directory service connections such as Active Directory or
  Entra ID, this is now done from a central location and requires only one user right (Can manage
  directory service connections).
- The tag filter can now contain more than 10 tags.
- The protection of sensitive data in the process memory has been improved.
- If a browser tab is already open with the web app, this is now used first when creating new access
  data via the browser extension (This also applies to the standard view.).

## Improvements

#### Server

- The logging of errors in the realtime connection is now deactivated by default.
- The migration from RSA to ECC has been improved by better performance and by eliminating the
  migration of organisational units.
- A new security setting has been added that fully logs access to encrypted passwords.

#### Server Manager

- To avoid typing errors when exporting certificates, the password must now be entered twice.
- A new security setting has been added that fully logs access to encrypted passwords.

## Fixed

#### Advanced view (formerly FullClient)

- Offline synchronization now also works for cross-platform login (This also applies to the offline
  add-on.).
- The setting “Restore last opened tabs” works again.
- Closing the Windows app works again without unexpected crashes.

#### Web app

- The setting “Permitted document extensions” can now be reset in the user settings.
- The “Clipboard gallery” option can now be changed in the user settings and global user settings.
- When uploading many documents, the list can now be scrolled.
- The list of documents to be uploaded can now be searched.

#### Server

- Documents with forbidden file extensions can no longer be uploaded.
- The speed of loading filters has been improved.
- An error when loading passwords after replacing the database certificate has been fixed.
- The “Add” right can now only be transferred to organisational units.

#### Browser extension

- The automatic entry in iframes now takes the correct address into account again.
- A bug has been fixed that prevented some websites from recognizing the data entered during
  automatic entry.
- The fields with the type integer, decimal number and checkbox can be used again for automatic
  entry.
- Profiles with long names are now displayed correctly again in the browser extension menu.
- New passwords are now recognized again if the user is logged in to more than one database.
- The cross-platform login in the browser extension now also works if the URL of the web app has
  changed.

#### API

- After logging out in the JavaScript API, the “isAuthenticated” information is now correct.
