---
title: "Browser Extension Interface"
description: "Browser Extension Interface"
sidebar_position: 90
---

# Browser Extension Interface

The browser extension interface can be launched at any time using the Netwrix Privilege Secure icon
in the browser. See the [Log Into the Privilege Secure Console](/docs/privilegesecure/25.12/install/login.md) topic for
additional information.

![Browser Extension Interface](/images/privilegesecure/25.12/accessmanagement/enduser/browserextension/browserextensioninterface.webp)

The browser extension interface has three tabs:

- Activities tab
- Current tab
- Settings tab

## Activities Tab for the Browser Extension

The **Activities** tab displays all website activities mapped to the user via the Privilege Secure
access policies. See the [Access Policy Page](/docs/privilegesecure/25.12/admin/interface/accesspolicy/accesspolicy.md) topic for
additional information.

![Browser Extension Activities tab](/images/privilegesecure/25.12/accessmanagement/enduser/browserextension/browserextensionactivities.webp)

The Activities tab has the following features:

- **Plus and Minus buttons (top right)** – Expand or collapse all resource activities.
- **Resources list** – Shows all resources mapped to the user via an access policy. Click a resource to
  expand it and show associated activities.
  - **Activities** – Click an activity to start an activity session. See the
    [Start Web Session](/docs/privilegesecure/25.12/enduser/browserextension/interface/startwebsession.md) topic for additional information.
  - **Favorite icon** – Click the favorite icon to move the activity to the top of the list.
  - **Settings icon** – Click to open the browser extension settings.
  - **Session icon** – If a session is active, the following icons are shown (see the
    [Start Web Session](/docs/privilegesecure/25.12/enduser/browserextension/interface/startwebsession.md) topic for additional information):
    - **Green icon** – Click to launch the web session.
    - **Red icon** – Click to end the current web session.

## Current Tab for the Browser Extension

The **Current** tab displays any website activity matching the current URL in the browser.

![Browser Extension Current tab](/images/privilegesecure/25.12/accessmanagement/enduser/browserextension/browserextensioncurrenttab.webp)

The Current tab shows the resource that matches the current URL at the top, with all of the
activities available for that resource expanded. It has the following features:

- **Activities** – Click an activity to start an activity session. See the
  [Start Web Session](/docs/privilegesecure/25.12/enduser/browserextension/interface/startwebsession.md) topic for additional information.
- **Favorite icon** – Click the favorite icon to move the activity to the top of the list.
- **Settings icon** – Click to open the browser extension settings.

## Settings Tab for the Browser Extension

Configure basic settings for the browser extension. For additional settings, log in to the Privilege
Secure Console.

![Browser Extension Settings tab](/images/privilegesecure/25.12/accessmanagement/enduser/browserextension/browserextensionsettings.webp)

The Settings tab has the following features:

- **End web sessions automatically** – If selected, activities automatically close when there are no
  active web sessions in any tab.
- **Delete RDP files after 1 day** – If selected, temporary files downloaded into the download folder as part
  of Privilege Secure RDP sessions are removed after 1 day.
- **Logout button** – Log out of the browser extension.
