---
title: "Version 9.1.0.30996"
description: "Version 9.1.0.30996"
sidebar_position: 40
---

# Version 9.1.0.30996

## New

#### Browser Extension

- UserVoice Winner: Stored OTPs can now be retrieved directly via the browser extension.
- New improved autofill logic: The autofill function has been completely revised to enable a more
  convenient automatic login in the browser.
- Cross-platform authentication is now possible: The Windows app, browser extension and autofill
  add-on can now authenticate each other.
- UserVoice Winner: You can now also use htaccess forms for automatic login.
- The SSO agent connection for the browser extension has been deprecated. Here you can find
  instructions on how to switch to server mode as well as an FAQ to this topic (This also affects
  the autofill add-on.).
- Browser extension profiles can now be configured via policy.
- Opening Netwrix Password Secure from the browser extension now works correctly.

#### Basic view (formerly Light Client)\*

- SSO applications can now be connected with passwords.
- The button “Ignore application” has been renamed to “Hide application”.

\*As the basic view on Windows has been deprecated with version 9.1.0, the basic view from now on
always refers to the web app.

#### Server

- Missing data is now migrated to ECC.
- The web server configuration routine for IIS has been improved.
- If you change the deployment mode to "Members of groups only" during AD synchronization, the
  checkboxes for synchronization are now ignored.

## Improvements

#### Platform-client change\*

The following names have been changed:

| Obsolete                             | New (English)       | New (German)        |
| ------------------------------------ | ------------------- | ------------------- |
| WebClient                            | Web application     | Web Application     |
| LightUser / Basic view User          | (Basic) user\*      | (Standard) User\*   |
| Basic view (Ansicht)                 | Basic view          | Standardansicht     |
| FullUser / FullClient User           | Advanced user       | Advanced User       |
| FullClient (Ansicht)                 | Advanced view       | Erweiterte Ansicht  |
| Browser Add-on                       | Browser extension   | Browser-Erweiterung |
| App                                  | Mobile application  | Mobile Application  |
| Desktop Client                       | Windows application | Windows Application |
| Web Endpoint                         | Web server          | Web Server          |
| SSO Agent / SSO Add-on / SSO Service | Autofill add-on     | Autofill Add-on     |
| OfflineClient                        | Offline add-on      | Offline Add-on      |
| AdminClient                          | Server Manager      | Server Manager      |
| SAML Service                         | IdP service         | IdP Service         |

\* This improvement affects all views (basic and advanced view), apps and add-ons (Server Manager,
web and Windows app, autofill and offline add-on) the browser extension, API, and the server as well
as MSP.

#### Basic view (formerly LightClient)\*

- The basic view on Windows has been deprecated. Basic users can still login via web app.

#### Browser extension

- Login errors are now displayed correctly.

#### Server

- The quality of secrets stored in the database is now encrypted.

## Fixed

#### Advanced view (formerly FullClient)

- The footer is now displaying the latest four involved users again.
- Resetting to the default settings for actions in the clipboard is no longer saved when canceling.
- Drag & Drop while updating a document is now possible in the web app.

This only affects the Windows app:

- Rights from organizational units to passwords can now also be inherited recursively.
- Login security has improved: Credentials for one application can no longer be reused for a
  different one.
- Report details are now displayed correctly again.

#### Server

- Changing the form of passwords with multiline passwords now works.
- Sorting in the (emergency) web viewer now works correctly.

#### Server Manager

- The migration summary no longer shows an error message when all ECC migrations were started
  successfully.

#### API

- It is no longer possible to attach data to more than one organizational unit.
- Passwords that are changed via the JavaScript API/SDKbuD are encrypted correctly.
