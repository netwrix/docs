---
title: "Dashboard reference"
description: "Learn what each tile on the Netwrix Privilege Secure for Discovery dashboard counts, where the number comes from, and how to read scan performance."
sidebar_position: 10
---

The dashboard in Netwrix Privilege Secure for Discovery summarizes your inventory, scan results, access requests, and privileged access in one screen. Select **Dashboard** in the left-hand menu to open it. Use this reference to understand what each tile counts.

At the top right of the page title, three totals show the number of systems, groups, and users that the product has imported from your directories. The **Summary**, **LDAP Domains**, and **Scan Performance** panels follow, then the **Highest Privileged Accounts**, **High Risk Systems**, and **Operating Systems** tiles, then the **Overdue Requests** and **Failed Hosts** lists.

:::note
An administrator can restrict the dashboard to administrators only. The setting is **Restrict Dashboard page to Admins only** in the **Web Application Settings** section of **Configure** > **Server**.
:::

## Summary

The **Summary** panel counts systems by their state.

![The Summary panel showing the counts for systems scanned, active sessions, inactive systems, Scan Mode, and Protect Mode](/images/privilegesecurediscovery/admin/dashboard-summary.webp)

- **Total Systems Scanned**: The number before the slash is the count of systems that have a last-scanned time, which means the product scanned them at least once. The number after the slash is the count of all computer objects that the product imported from your directories. If the first number is lower than the second, the product hasn't scanned some systems yet.
- **Active Sessions**: The number of just-in-time administration (JITA) sessions that are active and counting down to expiration.
- **Inactive Systems**: The number of computer objects with a last logon time that is more than 90 days old.
- **Scan Mode Enabled**: The number of systems with Scan Mode turned on.
- **Protect Mode Enabled**: The number of systems with Protect Mode turned on.

## LDAP Domains

The **LDAP Domains** panel lists each domain that you configured, with the result of its last directory synchronization. A domain that synchronized successfully shows **Last sync** with the time elapsed since the sync started. A domain that failed shows the error message from the sync, or **Not Synced** when no sync has completed.

Only administrators see this panel. Other users see the message "Domains are not visible to your Account Type".

## Scan performance

The **Scan Performance** panel reports on the scan that runs now. Select **Prev** to switch to the **Previous Scan** view, and select **Live** to switch back.

![The Scan Performance panel showing scan completion, successful systems, offline systems, and systems that encountered an error](/images/privilegesecurediscovery/admin/dashboard-scan-performance.webp)

- **Scan Completion**: The number of systems that the scan has processed, out of the number of systems that the scan includes. The bar fills as the scan progresses.
- **Successful Systems**: The number of systems that the product reached and scanned.
- **Offline Systems**: The number of systems that were offline during the scan.
- **Encountered Error**: The number of systems that returned a connection error or another unhandled error.

The **Previous Scan** view summarizes the last completed scan.

![The Previous Scan view showing result counts, average time per system, start and end times, and total duration](/images/privilegesecurediscovery/admin/dashboard-previous-scan.webp)

In addition to the counts for successful, offline, and error results, this view shows **Wrong Host**, which counts systems where the product reached a host that didn't match the expected computer. It also shows **Avg sec per System**, **Start Time**, **End Time**, and **Total Duration**. Select the duration to copy a detailed breakdown to the clipboard.

## Privilege and risk

- **Highest Privileged Accounts**: The five accounts with administrator access to the most systems, in descending order. The number is the count of systems. By default, the product recalculates this list about every 3 minutes.
- **High Risk Systems**: The five systems with the most accounts that have administrator access, in descending order. The number is the count of accounts. Select a system to open it on the **Access** > **Grant Access** screen.
- **Operating Systems**: A chart of your systems by operating system. The chart shows the three most common operating systems and groups the rest as **Others**. Select the table icon to open a list with the number and percentage of systems for every operating system.

Select the title of **Highest Privileged Accounts** or **High Risk Systems** to open **Insight** > **Overview**.

## Requests and failures

- **Overdue Requests**: JITA requests that are still counting down more than 2 minutes after their expiration time, which means the product hasn't removed the access yet. Each entry shows the system, the user, the expiration time, and the latest activity message. The list shows five requests per page. Use **Prev** and **Next** to move between pages. Users who aren't administrators see only their own requests.
- **Failed Hosts**: The ten systems whose most recent scan failed, with the **Host**, **Error**, **Date**, and **Message** of the failure. A system stays in the list after you turn off Scan Mode until a later scan succeeds. A system that has no scan result yet doesn't appear.

## Related information

- [Use the Systems screen](./systems-screen.md)
- [View application logs](../troubleshooting/application-logs.md)
