---
title: "Version 9.2.2.32703"
description: "Version 9.2.2.32703"
sidebar_position: 9
---

# New

#### Server & Server Manager

- Azure SQL is now officially supported.

#### Server Manager

- It is now mandatory to change the password for the Server Manager, if the default password was used.

- The base configuration now allows the usage of an Azure SQL database as config database.

- Non migratable data can now be cleaned up during ECC migration.

#### Extended view (on web)

- The web app now has a "Tools" page, providing quick access to various functionalities like API key management.

- Locked users can be unlocked via the web app now. For this, the user right 'Is database administrator' is required.

- Important stability and performance improvements for the new web app.

# Changes

#### All clients (on Windows & web)

- Passwords are no longer automatically revealed in the quick view. The associated option “Reveal password in quick view” has been removed.

# Improvements

#### Extended view (on Windows)

- The 'Hostname' field of SSH applications only accepts DNS names and IP addresses (IPv4 and IPv6).

- Possibly dangerous file extensions can no longer be stored as document link.

- Some documents can only be opened or executed after prior confirmation, as they may contain harmful content.

#### Extended view (on Windows & web)

- Documents can no longer be downloaded if the document extension is no longer allowed.

# Fixes

#### Server

- Messages that are sent to a syslog server no longer have a leading Byte Order Mark (BOM).

- The server is now validating the file extension of a document.

- The timeout when creating a new database and when running an SQL benchmark has been increased.

- The automatic check for corrupted passwords is operational again.

#### Server Manager

- The timeout when creating a new database and when running an SQL benchmark has been increased.

#### Extended view (on Windows)

- SSH applications that contain an invalid hostname configuration can no longer be executed for security reasons. This also applies to applications that obtain their hostname from passwords.

#### Extended view (on web)

- A list is no longer switching back to page 1 when a object was closed.

- The layout of the web app is no longer broken when switching from basic view to advanced view.

- It's no longer possible to create a seal template without name.

- Some missing components of the new design of the web app have now also been updated.

- Some errors in which texts were not loaded correctly have been fixed.

- The web app is loading the correct language again.

- Passwords can be moved to a different organisation unit using the 'Edit' view again.

#### Basic view

- Some errors in which texts were not loaded correctly have been fixed.

#### Browser extensions

- The autofill function of the browser extension has been improved. Websites that react to the 'webkitAnimationEnd' no longer hang.