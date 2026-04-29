---
title: "Version 26.4.10.34111"
description: "List of all changes that were done with Netwrix Password Secure in version 26.4.10"
sidebar_position: 9
---

## New

### Web application: Advanced view
- It is now possible to manage and execute reports in the web app for all users having the user right "Can manage reports" set to active.

## Improved
### Windows application
- When filtering trees and tables in the Windows app, it is possible again to logically search with "OR" expressions by separating search values by space.

### Web application: Advanced view
- When adding a field to a password and the default name already exists in the password, the application automatically appends a counter to the suggested field name.
- When creating or moving data using a permissions template, it is now possible to search for the template name.
- The comparison colors in the history now match the design system.

### Web application: Basic view
- When creating or moving data using a permissions template, it is now possible to search for the template name.

### Browser extension
- Previously, the browser extension changed the background color of an input field after inserting a value, making the text unreadable on some pages. The browser extension no longer changes the background color and instead shows a small animation when it fills the field.

## Fixed
### Windows application
- In some cases, the Windows application became unresponsive. This issue is now resolved.
- When you use "Exchange form" in the Windows application and select "Create as new" as the action for the field, the application now transmits the password value correctly.

### Web application: Advanced view
- When editing forms, the application now displays all fields again, not only the first 20.
- It wasn't possible to save Active Directory profiles. This issue is now resolved.
- Fixed an issue where the application always set the public/private shield in the header to "Private" after creating a shared password.
- Fixed an issue where it was possible to render HTML in the list of options. Following the suggested `Content-Security-Policy` header for the web server, it wasn't possible to cause any damage.
- It is no longer possible to save a seal with negative validity times.
- The content of the "Special characters" field in the password generator can now be changed properly again.
- Tags newly created in the current session now appear in the filter and when changing other objects.
- Minor design improvements now align the interface with the corporate design system.

### Web application: Basic view
- The content of the "Special characters" field in the password generator can now be changed properly again.
- Minor design improvements now align the interface with the corporate design system.

### Server Manager
- Fixed an issue causing the setup wizard to start again when running the Server Manager the first time after an installation.

### Server
- It is possible now to permanently delete users that created an API key.
- It is no longer possible to save a seal with negative validity times.

### .NET SDK
- The published ZIP archive no longer includes a redundant file.
- It is now possible to create forms using the .NET SDK.
