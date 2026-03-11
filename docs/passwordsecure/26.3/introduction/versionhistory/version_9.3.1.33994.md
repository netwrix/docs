---
title: "Version 9.3.1.33994"
description: "Version 9.3.1.33994"
sidebar_position: 3
---

# New
#### API (.NET and JavaScript)
- The JavaScript and .NET SDK now allow retrieving API key information so developers can limit displayed functionality based on permissions.

# Changes
#### Extended view (on Windows & web) and basic view
- The "Display kind: Logo" option has been completely removed.
- The access to historical data has been reworked to improve performance and ECC migration.

# Improvements
#### Web app (basic and extended view)
- The "wrong password" hint in the login screen changes once the lock time has expired.
- Text updates to improve clarity and consistency. This also affects the Windows app and the browser extensions.
- The second factor configuration now uses a more modern design.

#### Server
- Improved performance of server side ECC migration.

#### Extended view (on Windows)
- The "Last change" column now includes the time in table view.

#### Extended view (on web)
- More lists, such as applications and tags, now support multi selection.

#### Server
- ECC migration now writes logbook entries, so key rotations and errors are traceable.
- The performance when loading passwords via the browser extension has been significantly improved.


# Fixes
#### Server
- Fixed an issue preventing ECC migration when a user belonged to too many roles.
- Database activation works again when duplicated global options or user rights exist.
- Fixed an rare issue where a password could be revealed without a logbook entry being created.
- Active Directory profile synchronization now updates the “Last completed” value correctly.

#### Web app (basic and extended view)
- Fixed various visual issues.
- Settings page tiles are no longer cut off in slim browser windows.

#### Extended view (on web)
- Multiple legitimate permissions can be removed from an object again.
- Default values for Date form fields can now be saved.
- Moving a password no longer applies permission changes before confirmation.
- Users without permission to modify rights can no longer edit permissions via templates.
- The email notification search field no longer loses focus while typing.
- Object expiration dates can now be set correctly for non English or German browser languages.
- CSV export no longer fails when RegEx control characters are used as delimiters.
- Opening the quick view with the space bar no longer scrolls the page.
- The Active Directory import search now resets correctly.
- The list of organisational units is now displayed correctly in large environments.

#### Extended view (on Windows)
- Remote Desktop resolution is now configured correctly when scaling is enabled.
- Table columns are no longer removed after filtering in table view.

#### Basic view
- The "Empty entire bin" option is now available for basic users.

#### Browser extension
- The most recent search result is now displayed correctly.
- The browser extension no longer interferes with XML display in Firefox when CTRL is pressed.
- Copying passwords and TOTP tokens from the browser extension works again.