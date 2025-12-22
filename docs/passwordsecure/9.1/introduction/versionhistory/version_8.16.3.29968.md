---
title: "Version 8.16.3.29968"
description: "Version 8.16.3.29968"
sidebar_position: 120
---

# Version 8.16.3.29968

## New

#### FullClient

- Added token verification for MFA setup during login.
- Renamed Azure AD to Entra ID. Added "Entra ID client secret" to Entra ID, Conditional Access now
  works correctly.

#### Web Application

- Added token verification for MFA setup during login.
- Renamed Azure AD to Entra ID. Added "Entra ID client secret" to Entra ID, Conditional Access now
  works correctly.

#### SSO Client

- Added token verification for MFA setup during login.

#### Basic view

- Added token verification for MFA setup during login.

#### Basic view in the Web View

- Added token verification for MFA setup during login.

## Fixed

#### FullClient

- Performance improved when sealing passwords

#### Web Application

- Opening a link to the Web Application correctly redirects to the requested page (this also fixed
  problems with the browser extension when opening and editing existing passwords and the option to
  save new passwords).
- History changes are highlighted properly now.
- Web applications can now be created again.

#### Server

- Masterkey AD user login over kerberos timeout fixed.

#### Add-ons

- Entra ID user login fixed.
