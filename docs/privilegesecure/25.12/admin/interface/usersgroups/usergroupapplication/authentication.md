---
title: "Authentication Tab"
description: "Authentication Tab"
sidebar_position: 100
---

# Authentication Tab

The Authentication tab for applications shows authentication information about the application.

![Authentication Tab for Application User](/images/privilegesecure/25.12/accessmanagement/admin/policy/tab/usersgroups/applicationauthenticationtab.webp)

The tab displays the following information:

- Certificate Serial Number — The serial number of the client certificate used to authenticate the
  application. The certificate should be signed by a Certificate Authority (CA). Ensure the
  certificate is trusted by IIS by adding the CA trusted root certificate to the Trusted Root
  Certification Authorities on the Privilege Secure server.
- API Key — The unique key used as part of Application authentication. The API key has the following
  icons:

    - Copy — Copies the value to the clipboard. Only available when the API Key is visible.
    - Reveal / Hide — Shows or hides value
    - Regenerate — Generates a new API key. Only the current API key is valid.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.
