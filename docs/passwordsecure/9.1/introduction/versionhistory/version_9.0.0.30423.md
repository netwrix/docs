---
title: "Version 9.0.0.30423"
description: "Version 9.0.0.30423"
sidebar_position: 80
---

# Version 9.0.0.30423

## New

#### Cross-client change\*

- The encryption system has undergone significant enhancements to bolster its resistance against
  brute force attacks. Moreover, it now aligns with the latest OWASP recommendations.

#### Extended view (formerly FullClient)

- Windows clients have transitioned to exclusive compatibility with 64-bit systems, optimizing
  available RAM resources and enabling concurrent operation of more RDP sessions (also affects the
  SSO and OfflineClient). RDP libraries have also been upgraded to 64-bit.
- In the recycle bin of organizational units, it is now possible to permanently delete objects via
  multiple selections.
- The clarity of the user interface has been enhanced by defaulting to icons instead of logos,
  offering a more streamlined experience. This adjustment also applies to the Web Application.

\* This improvement affects all views (normal and advanced view) and Clients (Admin-, Web-, SSO- and
OfflineClient), the browser extension, API, and the server as well as MSP.

#### MSP

- Price details can now be customized on a per-customer basis, allowing for greater flexibility and
  tailored pricing options.

## Fixed

#### Extended view (formerly FullClient)

- The export now also works when using special separators.
- The export now also works, when text qualifier is empty.
- The "Add" permission for imported organizational units has been corrected.
- The report on "Inactive user accounts" now shows correct data.

#### Web Application

- The OTP field can now be reset.

#### Server

- The "User deleted" event is now correctly recorded in the logbook.

#### Browser extensions

- Even if no URL is stored, the username and password can now be copied from the browser extension
  again.
