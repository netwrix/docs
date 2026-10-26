---
title: "Use the Systems screen"
description: "Find, filter, and export the systems that Privilege Secure for Discovery manages, and open a system to review its access, policy, and scan status."
sidebar_position: 30
---

The **Systems** screen lists the systems that Netwrix Privilege Secure for Discovery manages. Use it to find systems that need follow-up, such as systems with scan errors or systems that aren't in Protect Mode yet. Select **Management** > **Systems** to open it.

![The Systems screen with the Views list, the Show Filters link, and the table of systems with their scan and Protect Mode status](/images/privilegesecurediscovery/admin/systems-list.webp)

## Read the systems table

The table shows 25 systems per page. Select a column heading to sort by it. The columns are:

| Column | What it shows |
| --- | --- |
| **Name** | The computer name. Select it to open the system. |
| **Domain** | The domain that the system belongs to. |
| **OU** | The organizational unit (OU) that contains the system. |
| **OS** | The operating system that the directory reports. |
| **Added** | When the product added the system. |
| **Last Logon** | The last logon time that the directory reports. |
| **Last Scanned** | When the product last scanned the system. |
| **Scan** | **Enabled** when Scan Mode is on. |
| **Protect** | **Deny** or **JITA** when Protect Mode is on, and **Disabled** when it's off. |
| **OAM** | The Offline Access Management (OAM) state of the system. |
| **EDR** | The endpoint detection and response (EDR) integration of the system, or **Disabled**. |
| **Sync Error** | The error from the last scan, if it failed. |
| **JITA Session Expire** | When the active just-in-time administration (JITA) sessions on the system expire. Administrators see this column. |

## Narrow the list with views

The **Views** list narrows the table to a common group of systems. Select **about views** to see the same descriptions in the product.

| View | Systems it shows |
| --- | --- |
| **All Active Systems** | All active systems, subject to the filters you set. |
| **Ready for Configuration** | Systems that scanned successfully but don't have Protect Mode on. |
| **Scan Disabled** | Systems that Scan Mode doesn't include. |
| **Protect Disabled** | Systems that Protect Mode doesn't include. |
| **Protect Deny** | Systems in Protect Mode with **New Accounts: Deny**, which removes unauthorized administrators that the product finds on the system. |
| **Protect JITA** | Systems in Protect Mode with **New Accounts: JITA**, which removes unexpected administrators but lets those accounts request access through the product. |
| **Scan Errors** | Systems that the product can resolve on the network but has never scanned because of an error. Systems that the product can't reach don't appear. |
| **OAM Disabled** | Systems without an Offline Access Management policy. |
| **Retired Systems** | Systems that the product retired because they no longer exist in the directory. |

The address in your browser includes the selected view, so you can bookmark a view.

## Filter the list

Select **Show Filters** to narrow the list further. The filters combine, and the link changes to **Show Filters (filters applied)** while any filter is active. Select **Clear Filters** to remove them all.

- **System Name**: Part of the computer name.
- **Domain**: One or more of your domains, or **Other**.
- **OU**: An organizational unit.
- **Operating System**: **Windows Workstation**, **Windows Server**, **Linux**, or **Unknown**.
- **Jita Sessions**: **Show Active** lists only systems with an active JITA session.
- **Offline Access** and **Strategy**: The Offline Access Management state and its policy strategy.
- **Added**, **Last Logon**, and **Last Scanned**: A time window, such as 24 hours, 7 days, or 90 days. **Last Scanned** also offers **Never**.
- **Account with access**, **Access Path**, and **Access Type**: Systems that a specific user or group can administer, and how. Administrators see these filters.

For example, to find the Windows servers that nobody has scanned in a month, select **Windows Server** under **Operating System**, then select **Last Scanned** and choose a window. Combine it with the **Scan Errors** view to see why.

## Export the list

Select **Copy**, **CSV**, **Excel**, or **PDF** to export the rows that match the current view and filters.

## Open a system

Select a system name to open the system on the **Access** > **Grant Access** screen. There you can request access to the system and, as an administrator, review its policy and configuration. A retired system has no link.

To act on many systems at once, select their check boxes. The screen selects up to 1000 systems. Select **Bulk Actions** to continue, or select **Select By File** to choose systems from a file. For the available actions, see [Bulk actions](./systems/bulk-actions.md).

## Related information

- [Bulk actions](./systems/bulk-actions.md)
- [Remove a system](./systems/remove-a-system.md)
- [Restore a system](./systems/restore-a-system.md)
