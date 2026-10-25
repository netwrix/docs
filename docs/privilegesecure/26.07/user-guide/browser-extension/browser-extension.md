---
title: "Browser extension"
description: "Learn what the Privilege Secure browser extension does, which browsers support it, and how to install it from the Chrome Web Store or Microsoft Edge Add-ons."
sidebar_position: 10
---

# Browser extension

The Netwrix Privilege Secure browser extension lets you start and manage web sessions from your browser toolbar. You sign in to the extension with your Privilege Secure account, pick a website activity that an access policy gives you, and open the site in a recorded, time-limited session.

This page describes the extension version in the Chrome Web Store and Microsoft Edge Add-ons, build 25.8.26.

## What the extension does

With the extension, you can:

- Sign in to Privilege Secure from the extension popup with your credentials, multi-factor authentication (MFA), or an OpenID Connect provider that your administrator configured.
- See the website activities that your access policies give you, and start a session for one of them.
- Fill the managed account's credentials into the site's sign-in form, or copy the username and password to the clipboard.
- Watch the time remaining in the session. A **REC** icon shows on the extension when the page is being recorded.
- Extend or end a session from the extension.

To open an RDP or SSH resource from outside your network, use the Remote Access Gateway instead. See [Remote Access Gateway browser sessions](/docs/privilegesecure/26.07/remote-access-gateway/user-guide/browser-sessions.md).

## Browser requirements

The extension works in these browsers:

- Google Chrome 116 or later
- Microsoft Edge 116 or later

Firefox isn't supported. For all client requirements, see [Client requirements](/docs/privilegesecure/26.07/requirements/client.md).

## Install the extension

1. In Chrome, open the [Netwrix Privilege Secure page in the Chrome Web Store](https://chrome.google.com/webstore/detail/stealthbits-privileged-ac/ihnkofmplfbejdomofnhlhhaaaoamadj). In Edge, open the [Netwrix Privilege Secure page in Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/stealthbits-privileged-ac/flpcdjheolnofamggbinbnhcmomenhac).
2. Select the install button and accept the permission prompt.
3. Pin the extension to the toolbar so you can open it at any time.

After you install the extension, its icon appears in the browser toolbar. In Edge Add-ons, the publisher is listed as Stealthbits Technologies, Inc.

The extension asks to read and change data on the sites you visit. It needs this permission to fill credentials into sign-in forms and to lock and record the session page.

After you install the extension, sign in and start a session. See [Use the browser extension](/docs/privilegesecure/26.07/user-guide/browser-extension/use-browser-extension.md).
