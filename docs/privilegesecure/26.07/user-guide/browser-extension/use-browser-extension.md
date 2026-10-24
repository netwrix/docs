---
title: "Use the browser extension"
description: "Sign in to the browser extension, start, extend, and end web sessions, and change the extension settings in Chrome or Edge."
sidebar_position: 20
---

# Use the browser extension

Use the browser extension to start web sessions from the toolbar without opening the console. Install the extension first. See [Browser extension](/docs/privilegesecure/26.07/user-guide/browser-extension/browser-extension.md).

This page describes the Chrome Web Store build 25.8.26. {/* TODO verify: the tab names and layout below come from the 26.03 documentation. Confirm them against build 25.8.26. */}

## Before you begin

- An access policy that gives you at least one website activity. See [My activities](/docs/privilegesecure/26.07/user-guide/my-activities.md).
- The address of your Privilege Secure server, in the form `https://<nps-server>:6500`.

## Sign in to the extension

1. Click the Netwrix Privilege Secure icon on the browser toolbar.
2. Enter the server address, `https://<nps-server>:6500`, when the extension asks for it.
3. Sign in with your credentials, MFA, or an OpenID Connect provider, the same way you sign in to the console. See [Sign in to the console](/docs/privilegesecure/26.07/user-guide/sign-in.md).

The extension shows the activity list after you sign in.

{/* TODO screenshot: extension popup signed in, showing the Activities tab (store 25.8.26, not the beta channel) */}

## Extension tabs

The extension has three tabs.

| Tab | What it shows |
|---|---|
| **Activities** | All website activities that your access policies give you, grouped by resource |
| **Current** | The activities for the resource that matches the address of the page in the current tab |
| **Settings** | The extension settings |

### Activities tab

Click a resource to expand it and show its activities. Use the plus and minus buttons at the top right to expand or collapse all resources.

Click the favorite icon next to an activity to move it to the top of the list.

### Current tab

The **Current** tab shows the resource that matches the current page, with its activities expanded. Click an activity to start a session.

### Settings tab

| Setting | What it does |
|---|---|
| **End web sessions automatically** | Ends the activity session that you started in the extension when no web sessions remain in any tab. |
| **Delete RDP files after 1 day** | Removes the temporary `.rdp` files that Privilege Secure RDP sessions download to your download folder after 1 day. |
| **Logout** | Signs you out of the extension. |

Logout is blocked while a session is active. The extension shows the message "All `<n>` active proxy sessions must be ended before logging out." Here, `<n>` is the number of active sessions. End the sessions, then sign out.

## Start a web session

1. Open the extension and select the **Activities** or **Current** tab.
2. Click a resource to expand it.
3. Click an activity to start an activity session.
4. If the **Configure Session** dialog opens, complete it and confirm. See [Configure Session dialog](#configure-session-dialog).
5. Wait for the session icons to appear to the right of the activity. A green icon means the session is ready. A red icon ends the session.
6. Click the green icon to open the web session in the current browser tab.

The extension then shows a countdown timer with the time left in the session. A **REC** icon shows on the extension when the page is being recorded.

{/* TODO screenshot: extension showing the countdown timer and REC icon during a web session (store 25.8.26) */}

{/* TODO verify: how the extension shows a session that is waiting for approval. */}

### Configure Session dialog

The **Configure Session** dialog has a **Note** field and a **Ticket Number** field. Each field is required when the connection profile for the activity requires it. For the profile settings, see [Connection profiles](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md).

### Start a session in the current tab

To start the session in a tab that is already open, right-click the page and select **Activate session in this tab**. The extension also has a keyboard shortcut for this action, Alt+Shift+S. {/* TODO verify: the shortcut in store build 25.8.26 and in Edge. */}

### Use the privileged session banner

While you run a privileged session, the extension shows a banner that says the session is running. The banner has four actions:

| Action | What it does |
|---|---|
| **Autofill credentials** | Fills the managed account's credentials into the sign-in form on the page |
| **Copy credentials** | Copies the username and password to the clipboard |
| **End session** | Ends the session |
| **Extend session** | Adds time to the session |

{/* TODO verify: whether Autofill credentials and Copy credentials depend on the profile settings Enable credential auto-fill and Allow User to Access Password. */}

## Extend a session

Click **Extend session** in the banner, or use the extend action in the session notification, then pick a duration.

In build 25.8.26:

- Administrators can extend a session even when the connection profile doesn't allow session extension. They see every duration option.
- All other users can extend only up to the maximum that the connection profile sets.

For the extension limits that a profile sets, see [Connection profiles](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md).

{/* TODO verify: whether the server accepts an administrator's extension when the connection profile has session extension turned off. The server side checks the profile. */}

## End a web session

End the session before the timer runs out when you finish your work.

1. Click the extension icon to open the session page. It shows the countdown timer.
2. Click the red **END MY SESSION** link.
3. Click **Close Tab** on the page that confirms the session ended, or close the tab yourself.

A notification confirms that the session ended.

{/* TODO screenshot: the session-ended message with the Close Tab button (store 25.8.26) */}

What happens to the activity depends on the **End web sessions automatically** setting:

- When the setting is on, the activity ends after you close the last browser tab for it.
- When the setting is off, the activity stays open. Click the red icon next to the activity to end it.
