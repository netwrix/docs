---
title: "Version 9.1.3.31365"
description: "Version 9.1.3.31365"
sidebar_position: 30
---

# Version 9.1.3.31365

## New

#### Browser extension

- Based on Manifest V3, a new browser extension for Chrome has been released.

#### Extended view (on Windows & web)

- A new filter group “Directory Service Type” has been added, which allows explicit filtering by
  users and roles from directory services.

#### Server

- The alias of a database is now displayed in the Authenticator app if one is configured, and a new
  token is generated.
- The session timeout for new databases is now set to 1 hour instead of the previous 6 hours.

## Fixed

#### Extended view

- An external package with a vulnerability classified as weak has been updated. The vulnerability
  could not be exploited via Netwrix Password Secure (This also affects the server & Server Manager
  as well as the autofill & offline add-on.).
- The obsolete property “Spaces” has been removed from the password policies (This also affects the
  offline add-on.).
- A possible XSS vulnerability in the WebViewer has been closed (This also affects the web app.).
- A problem has been fixed where the password was not saved on the server after a change when it was
  copied to the clipboard.
- The cross-client login for the browser extension is now also operational for synchronized Windows
  profiles.

#### Server Manager

- The configuration script for the web app under IIS now also works if there are spaces in the
  target path.
