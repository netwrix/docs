---
title: "Client requirements"
description: "Find the browsers, browser extension, and remote desktop and SSH clients that users need to work with Privilege Secure."
sidebar_position: 50
---

# Client requirements

Users reach Netwrix Privilege Secure for Access Management through a web browser. They can also use the browser extension and their own remote desktop and SSH clients.

## Browsers

The Privilege Secure Console supports these browsers:

- Microsoft Edge (Chromium)
- Google Chrome
- Apple Safari

Firefox isn't supported.

:::note
Turn off browser compatibility mode. The console doesn't work in compatibility mode.
:::

The browser must be able to reach the console at `https://<nps-server>:6500`. See [Ports](/docs/privilegesecure/26.07/requirements/ports.md).

## Multi-factor authentication

Each user needs a multi-factor authentication (MFA) app or token, such as Microsoft Authenticator, Duo, or Symantec VIP.

## Browser extension

The Netwrix Privilege Secure browser extension runs on Google Chrome and Microsoft Edge, version 116 or later. Users install it from the Chrome Web Store or the Microsoft Edge Add-ons store. The extension doesn't support Firefox.

{/* TODO verify: the store build that pairs with 26.07.x. The browser extension repository has no 26.07 release branch, so the release code can't show which store build pairs with it. */}

## Remote desktop and SSH clients

Privilege Secure sessions work with these clients:

- PuTTY
- MobaXterm
- Microsoft Remote Desktop Connection Manager
- Microsoft Remote Desktop Connection (`mstsc`)

To start a desktop SSH client automatically from a browser session, see [Invoking Desktop SSH Client Automatically](/docs/kb/privilegesecure/client-tools-and-integrations/invoking-desktop-ssh-client-automatically).

RDP clients connect to the RDP proxy on port 4489, and SSH clients connect to the SSH proxy on port 4422.
