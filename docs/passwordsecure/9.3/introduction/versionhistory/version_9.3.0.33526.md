---
title: "Version 9.3.0.33526"
description: "Version 9.3.0.33526"
sidebar_position: 4
---

# New

#### Server Manager
- It is now possible to create the web app with a [custom branding](/docs/passwordsecure/9_3/installation/installationwebapplication/installation_web_application#custom-branding).

#### Server
- Users imported with Entra ID can now login with the first part of their username.

# Changes
#### Server
- The IDP server was removed completely from the product. To allow the transfer to another system, SAML applications are still visible in the application management (read-only).

#### Extended view (on Windows & web)
- The 'Rights template' filter group is obsolete. It can no longer be added to filters. It continues to work for existing filters, but will be removed completely in a future update.

# Improvements
#### Server
- When redirecting the database logbook to a syslog server, the type of the data is now included too.

# Fixes
#### Extended view (on Windows)
- An error was resolved that prevented RDP connections from established with the correct resolution.
- A crash of the Windows app, caused by using CTRL+Z in the login screen, is fixed.

#### Extended view (on Windows & web)
- After breaking a seal, the password can be changed again.

#### Server
- An error was resolved, which caused non-migratable documents being unable to be deleted permanently.
- Users provisioned via Entra ID can now login to the browser extension again.
- WebViewer exports can no longer be created with invalid configuration.

#### Server Manager
- The setting 'Transfer logbook entries' is now correctly loaded when opening the syslog configuration of a database.