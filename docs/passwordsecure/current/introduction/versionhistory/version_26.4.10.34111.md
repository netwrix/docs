---
title: "Version 26.4.10.34111"
description: "List of all changes that were done with Netwrix Password Secure in version 26.4.10"
sidebar_position: 9
---

## New

### Web application: Advanced view
- Users with the "Can manage reports" user right can now manage and execute reports in the web app.

## Improved
### Windows application
- When filtering trees and tables in the Windows app, you can again search with "OR" expressions by separating search values with a space.

### Web application: Advanced view
- When adding a field to a password and the default name already exists in the password, the application automatically appends a counter to the suggested field name.
- When creating or moving data using a permissions template, you can now search for the template name.
- The comparison colors in the history now match the design system.

### Web application: Basic view
- When creating or moving data using a permissions template, you can now search for the template name.

### Browser extension
- Previously, the browser extension changed the background color of an input field after inserting a value, making the text unreadable on some pages. The browser extension no longer changes the background color and instead shows a small animation when it fills the field.

## Fixed
### Windows application
- The Windows application no longer becomes unresponsive in some cases.
- When you use "Exchange form" in the Windows application and select "Create as new" as the action for the field, the application now transmits the password value correctly.

### Web application: Advanced view
- When editing forms, the application now displays all fields again, not only the first 20.
- The application can now save Active Directory profiles.
- Fixed an issue where the application always set the public/private shield in the header to "Private" after creating a shared password.
- Fixed an issue where it was possible to render HTML in the list of options. Applying the suggested `Content-Security-Policy` header for the web server prevents any damage.
- You can no longer save a seal with negative validity times.
- You can now change the content of the "Special characters" field in the password generator again.
- Tags newly created in the current session now appear in the filter and when changing other objects.
- Minor design improvements now align the interface with the corporate design system.

### Web application: Basic view
- You can now change the content of the "Special characters" field in the password generator again.
- Minor design improvements now align the interface with the corporate design system.

### Server Manager
- Fixed an issue causing the setup wizard to start again when running the Server Manager the first time after an installation.

### Server
- You can now permanently delete users that created an API key.
- You can no longer save a seal with negative validity times.

### .NET SDK
- The published ZIP archive no longer includes a redundant file.
- You can now create forms using the .NET SDK.
