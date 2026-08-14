---
title: "Version 26.8.10.34187"
description: "List of all changes introduced in Netwrix Password Secure version 26.8.10"
sidebar_position: 5
---

## New
### Web application: Advanced view and Windows application
- You can now use the recycle bin to completely remove deleted documents, users, organizational units, roles, applications, and forms, too.

### Web application: Advanced view
- You can now manage password rules using the web application.

## Fixed
### All clients with server connection
- When a database uses a Hardware Security Module (HSM) to store its keys, users without the "Is database administrator" user right can log in again.

### Windows application
- You can now switch the Active Directory profile of roles from end-to-end (E2E) encrypted profiles to MasterKey profiles again.

### Web application
- The web app now respects the browser's language settings again if there is no explicit language set.

### Server Manager
- The web application no longer spams the error log with "VerifyObjectRight: Insufficient right" entries.
- Managed Service Providers can now create customers without using a database template again.

## Improved
### Windows application
- The Windows application now uses the most recent PuTTY version (0.84) for SSH connections.
- Using Public Key Infrastructure (PKI) as a second factor now also allows certificates from Cryptography API: Next Generation (CNG) Key Storage Providers. This also affects the Autofill add-on.
- Updated several third-party dependencies to their latest compatible versions. These updates bring in bug fixes, security-related fixes, performance improvements, and maintenance changes from upstream. This also affects all other Windows components, both client-side and server-side.

### Web application: Advanced view
- The "Multiselection" toggle now behaves and looks like a checkbox.

### Browser extension
- The extension sometimes entered credential data in forms that aren't login forms. New limitations minimize this behavior.
