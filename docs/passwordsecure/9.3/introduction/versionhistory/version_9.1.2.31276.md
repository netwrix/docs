---
title: "Version 9.1.2.31276"
description: "Version 9.1.2.31276"
sidebar_position: 40
---

# Version 9.1.2.31276

## New

#### Server & Server Manager

- You can now assign an alias for each database for login purposes, eliminating the need to disclose
  the real database name.
- Individual databases can now be set to read-only mode.

#### Web App

- External links created via the web app now contain the database alias if one has been defined.

#### Browser extension

- The browser extension is now able to fill out OTP fields.

## Improvements

#### Web App

- It is now possible to define the URL in applications of type Web as a regular expression.

#### Browser extension

- The performance of the browser extension has been improved.

## Fixed

#### Advanced view

- The import of CSV files now handles organizational units correctly.
- The quick view and history of passwords can be opened again.
- Spontaneous errors when changing selected passwords have been fixed.
- Web applications with URLs defined as regex are recognized correctly.
- Logging in to the Windows app is possible again if you were last logged in in the standard view.

#### Web App

- Entra ID tokens can be regenerated in the profile list.

#### Server Manager

- The version of the nginx web server is no longer returned in the header in the standard
  configuration.

#### Browser extension

- Web applications with URLs defined as regex are now recognized correctly.
