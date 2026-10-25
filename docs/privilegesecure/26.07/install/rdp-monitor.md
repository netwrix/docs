---
title: "Install the Remote Desktop Monitor on target hosts"
description: "Install the Remote Desktop Monitor service on a Windows target host so RDP recordings include searchable window and menu activity."
sidebar_position: 90
---

# Install the Remote Desktop Monitor on target hosts

The Netwrix Privilege Secure for Access Management (Privilege Secure) Remote Desktop Monitor service runs on a Windows target host. It captures the Windows event activity of a Remote Desktop Protocol (RDP) session, such as windows that open and menus that users select.

Without the service, Privilege Secure still records the session video and keystrokes. With the service, you can also search that Windows event activity in the [Live Session Viewer](/docs/privilegesecure/26.07/admin/sessions/live-session-viewer.md) and the [Replay Viewer](/docs/privilegesecure/26.07/admin/sessions/replay-viewer.md).

Install the service on each Windows host that users reach through an RDP session. You don't install it on the Privilege Secure application server unless that server is also a target.

## Before you begin

- The product download zip file, extracted. `NPS.TSMon.exe` is in the `Extras` folder.
- Local administrator rights on the target host.
- The **Record Proxy Session** option turned on in the connection profile of the access policy that grants the RDP session. See [Connection profiles](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md).

## Install the Remote Desktop Monitor

1. Copy `NPS.TSMon.exe` from the `Extras` folder to the target host.
2. Run `NPS.TSMon.exe` as an administrator. The setup window opens.
3. Accept the license terms and conditions.
4. Click **Install**.
5. When the installation finishes, click **Close**.

{/* TODO screenshot: the Remote Desktop Monitor setup window after a successful install. Blur or crop any host name. */}

## Verify the service

1. On the target host, open **Services** (`services.msc`).
2. Find the **SbPAM Remote Desktop Monitor** service. Its service name is `SbPAMRDMon`.
3. Confirm that **Status** is **Running**, **Startup Type** is **Automatic**, and **Log On As** is **Local System**.

The service is now ready for the next RDP session to the host.

:::note
Start a new RDP session after you install the service. A session that was already open doesn't report Windows event activity.
:::

{/* TODO verify: that an RDP session open before the install reports no Windows event activity, and whether the host needs a restart. The monitor executable's source has no release branch. The release installer registers a scheduled task that starts the monitor at logon and at remote connect, which suggests an already-open session isn't monitored, but a test on a host settles it. */}

## Check the result

Start an RDP session to the target host through an access policy that records the session. Open the session in the Live Session Viewer or Replay Viewer. The timeline lists the Windows events that occurred during the session.

If the timeline shows keystrokes but no Windows events, confirm that the service is running and that **Record Proxy Session** is turned on in the connection profile.

{/* TODO: add an example of the Windows event entries that appear in the timeline, after a lab capture on a 26.07 target. */}

## Related topics

- [Installation package contents](/docs/privilegesecure/26.07/install/components.md)
- [Connection profiles](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md)
