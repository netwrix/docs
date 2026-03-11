---
title: "Version 9.2.3.32988"
description: "Version 9.2.3.32988"
sidebar_position: 8
---

# New

#### Setup
- The Autofill add-on can now be installed independently from the Windows App. A new command line parameter 'INSTALL_WIN_APP' was added to the setup to control the installation of the Windows App in automatic deployments.

# Changes

#### Extended view (on Windows)
- The option "Allow documents without file extension" is now a separate option. The corresponding configuration option in the list of allowed file extensions has been removed.
- Obsolete executable files that are no longer required have been removed.
- All binaries are now published via the 'releases.netwrix.com' domain. This affects the setups of the Windows App and the server, the Safari extension for Mac, and the API. The check for new available versions is still executed via the old domain. Please adjust your firewall rules, if such are existing.

#### Extended view (on Windows & web)
- In preparation for the removal of the logo views from the product, it is no longer possible to upload new logos to the database. This does not affect the upload of icons or the display of existing logos.

# Improvements

#### Server
- The logging of events during the ECC migration has been improved in order to make the identification of potential sources of errors easier.

#### Web app (basic and extended view)
- The ordering and grouping of the elements from the 'Tools' page has been improved.
- Some small visual changes has been made in the web app.

# Fixes

#### Extended view (on Windows)
- When you log in via the Windows App to a database using its alias, errors are no longer written to the log.
- After changing a document links path, it's possible now to filter correctly for the new files extension.
- The sorting of columns in the password list is now correctly saved and loaded.
- The Windows App no longer crashes when the user tries to reveal a password while the reading pane is deactivated.
- When a RDP application without connected password is started, the window for entering credentials is opening again.

#### Extended view (on web)
- A visual issue in the password field was resolved when a user is legitimates via the 'Everyone' right to a sealed record.
- The pagination on some lists is now working correctly.
- The selection of the Active Directory objects to be imported is now working correctly in the web app.
- The wizard for creating new organisational units is behaving correct again when the current user has no permissions to create roles.

#### Web app (basic and extended view)
- When opening the web app via the browser extension, it is logging in automatically to the correct database.

#### Server
- An issue in the MSI setups was resolved, which lead to displaying wrong license conditions.
- Generated OTP codes displayed in the Emergency WebViewer are now correct.
- OTP fields are now displayed in WebViewer exports.
- In older versions, there could be inconsistencies within the organisational structure. These have now been fixed. After the update, please check wether your organisational structure is still set up as expected.

#### Server Manager
- When creating a database, the setting 'Activate realtime updates' is now saved correctly.
- When providing wrong SQL Server credentials in the database wizard of the Server Manager, it's no longer possible to proceed to the next page.