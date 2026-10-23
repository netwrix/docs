---
title: "Version 26.10.10.34211"
description: "List of all changes introduced in Netwrix Password Secure version 26.10.10"
sidebar_position: 3
---

## New
### All components
- Netwrix Password Secure now supports Italian (AI translation).

### Windows App and Autofill add-on
- Users provisioned from Microsoft Entra ID can now sign in to the Windows components using single sign-on (SSO) if they authenticate on a Microsoft Entra ID joined device. For more information, see [Single sign-on (SSO)](/docs/passwordsecure/current/configuration/advancedview/clientmodule/organisationalstructure/directoryservices/entraidconnection/entra_id_sso.md).

## Fixed
### All components
- Missing or wrong translations in the Autofill add-on, Offline add-on, Server Manager, Web App (Advanced view), Web App (Basic view), and Windows App no longer appear.

### Server
- Applying a filter no longer causes SQL timeouts when passwords load.

### Server and Server Manager
- An issue with stored permissions to historical data, which also affected the migration to elliptic curve cryptography (ECC), no longer occurs.

### Server Manager
- You can use passwords that contain special characters, such as a semicolon, for the SQL or Postgres user in the base configuration again.
- The license settings show the correct numbers of available users, basic users, and servers again.

### Browser extension
- The browser extension can authenticate against the server using the Autofill add-on or the Windows App again.

### Offline add-on and Windows App
- Offline synchronization no longer fails when a user doesn't have permissions to all fields of a form.

### Web App (Advanced view)
- Editing a user no longer shows two **Other** sections.

### Windows App
- The Windows App no longer crashes when you open the documentation from a Microsoft Entra ID profile.
