---
title: "Server details"
description: "Review a server's settings, ports, and certificate trust options, and use its tabs to see sessions, policies, accounts, services, and installed software."
sidebar_position: 30
---

# Server details

The server details page shows the settings of one server and what Netwrix Privilege Secure for Access Management (Privilege Secure) found on it. To open the page, select **Resources** in the left navigation, then select the name of a server in the **Resource** column. The Type filter calls servers **Host**.

![The header of a server details page with the buttons, fields, ports, Trust on Discovery, and Action on Fingerprint Mismatch.](/images/privilegesecure/26.07/resources/server-details.webp)

## Header buttons

| Button | What it does |
|---|---|
| **Test** | Tests whether Privilege Secure can connect to the server. A window shows the status and any messages. The button appears only for Windows and Hyper-V servers. |
| **Scan Now** | Scans the server for local users, groups, services, scheduled tasks, and databases. On a Windows server, the scan also collects the installed Windows features. |
| **WinRM Config** | Opens the **Configure Secure WinRM Connection** window. The button appears only for Windows servers. See [Configure a secure WinRM connection](/docs/privilegesecure/26.07/resources/secure-winrm.md). |

## Settings

Change a setting and select **Save**, or select **Cancel** to discard the change.

| Field | Description |
|---|---|
| **DNS Host Name** | The DNS name of the server. |
| **OS Version** | The operating system that the last scan found. |
| **Last Scanned** | The date and time of the last scan. |
| **Active** | The number of active sessions on the server. Read-only. |
| **Scheduled** | The number of sessions scheduled for the server. Read-only. |
| **Platform** | The platform that defines how Privilege Secure manages the server. See [Platforms](/docs/privilegesecure/26.07/resources/platforms/platforms.md). |
| **Service Account** | The service account that Privilege Secure uses to reach the server. See [Service accounts](/docs/privilegesecure/26.07/configuration/service-accounts/service-accounts.md). |
| **IP Address** | The IP address of the server. |
| **SSH Port** | The SSH port. The default is 22. |
| **RDP Port** | The Remote Desktop Protocol (RDP) port. The default is 3389. |
| **WinRM Port** | The Windows Remote Management (WinRM) HTTP port. The default is 5985. |
| **WinRM HTTPS Port** | The WinRM HTTPS port. The default is 5986. |
| **WinRM Disabled** | When selected, Privilege Secure doesn't connect to the server through WinRM. The first scan sets this value, and later scans don't change it. |

If a server uses other ports, change the port fields on its details page. Open the ports between the Privilege Secure service nodes and the server. See [Ports](/docs/privilegesecure/26.07/requirements/ports.md).

### Certificate trust

These settings control how Privilege Secure trusts the certificate or host key that a server presents.

| Field | Description |
|---|---|
| **Trust on Discovery** | When selected, Privilege Secure trusts the certificate or host key that the server presents the first time it connects, and saves its thumbprint as the trusted thumbprint. This option is selected by default. When cleared, the first connection is blocked until an administrator approves the thumbprint. |
| **Action on Fingerprint Mismatch** | Sets what happens when the thumbprint a server presents differs from the trusted thumbprint. |

**Trust on Discovery** applies to every kind of certificate or host key that Privilege Secure checks on the server: the WinRM HTTPS certificate, the RDP certificate, and the SSH host key. A server keeps one trusted thumbprint.

The **Action on Fingerprint Mismatch** dropdown has these values:

| Value | Behavior |
|---|---|
| **Allow Connection** | Allows the connection. Privilege Secure records no event. |
| **Log event and allow** | Allows the connection and records an event. This value is the default. |
| **Log event and block** | Blocks the connection and records an event. |

When you choose a value that records an event, Privilege Secure writes it to the Events table. If you configured a Security Information and Event Management (SIEM) connection, Privilege Secure also sends the event to the SIEM. See [Events](/docs/privilegesecure/26.07/admin/audit-reporting/events.md).

## Tabs

A Windows server has 10 tabs. A Linux server has 7: **Sessions**, **Access Policies**, **Protection Policies**, **Users**, **Groups**, **History**, and **Installed Software**. The **Services**, **Scheduled Tasks**, and **Databases** tabs appear only for Windows servers. Each tab shows a count. If the tab strip doesn't fit the window, use the arrow to scroll it.

| Tab | Shows |
|---|---|
| **Sessions** | Sessions on the server. Columns: **Requested**, **Requested By**, **Login Account**, **Activity**, **Start**, **End**, **Status**. Select a row and select **View Logs** to open the session logs. |
| **Access Policies** | The access policies that include the server. Columns: **Name**, **Description**. |
| **Protection Policies** | The protection policies that include the server. Columns: **Name**, **Description**. See [Protection policies](/docs/privilegesecure/26.07/resources/protection-policies.md). |
| **Users** | The local users on the server, with buttons to manage them. See [Users tab](#users-tab). |
| **Groups** | The local groups on the server. Columns: **Group Name**, **Members**. |
| **Services** | The services on the server. Columns: **Service Name**, **Display Name**, **Description**, **Startup Type**, **Log On As**. Filter by **Type**. |
| **Scheduled Tasks** | The scheduled tasks on the server. Columns: **Task Name**, **Run As Account**, **Managed**, **Description**. Filter by **Type**. |
| **Databases** | The database instances that the scan found. Columns: **Instance Name**, **Full Name**, **Type**, **Product**, **Version**. Filter by **Type**. |
| **History** | Session events on the server. Columns: **Status**, **Time**, **User**, **Access Policy**, **Event Message**, **Session ID**. Select **View Logs** to open the session logs. |
| **Installed Software** | The Windows features that the last scan found installed on the server. Columns: **Software Name**, **Version**, **Description**. |

Every tab has a search box, and most have a **Refresh** button. You can sort and resize the columns.

The **Type** filter on the **Services** and **Scheduled Tasks** tabs offers **All**, **Unmanaged**, and **Managed**. On the **Databases** tab, the **Type** filter lists **All**, **Unknown**, **PostgreSQL**, **SQL Server**, **SQLite**, **Oracle**, and **MySQL**.

### Users tab

The **Users** tab lists the local accounts on the server. Use its buttons to bring accounts under management and to rotate and verify their passwords.

| Button | What it does |
|---|---|
| **Manage** | Brings the selected account under Privilege Secure management. |
| **Unmanage** | Stops managing the selected account. |
| **Rotate** | Queues a password rotation for the selected managed account. |
| **Verify** | Checks that the account password matches the password that Privilege Secure stores. |
| **View History** | Shows the password history of the account. |
| **Password Reset Options** | Sets whether Privilege Secure rotates the password before or after a session, and whether the account stays enabled when credentials are released through a credential-based access policy. |

The tab has a **Search** box and a **Type** filter. The columns are **Name**, **User Name**, **Privilege**, **Last Login**, **Password Changed**, **Age**, **Managed**, **Rotate Start | End**, **Keep Enabled**, **Dependents**, **Status**, **Last Checked**, **Next Change**, and **Schedule**.

**Keep Enabled** shows **No** or **Yes**. The default is **No**. With **No**, Privilege Secure disables the account when the last credential-based release of it ends. It doesn't disable the platform's built-in account. With **Yes**, the account stays enabled. To change the setting, select the account and select **Password Reset Options**, then select or clear **Keep Enabled (Credential Release only)**.

The **Status** column shows the result of the last verification:

| Status | Meaning |
|---|---|
| Unspecified | No verification has run. |
| Verified | The password matches the one that Privilege Secure stores. |
| Mismatch | The password doesn't match. This status appears only when the platform has Reset On Mismatch turned off. |
| Changed | Privilege Secure reset the password to match. This status appears only when Reset On Mismatch is on. |
| Failed | The reset didn't succeed. This status appears only when Reset On Mismatch is on. |

For rotation methods, password history, and verification schedules, see [Manage, rotate, and verify credentials](/docs/privilegesecure/26.07/admin/credentials/manage-credentials.md).

## Test connectivity to a server

Test connectivity to one server at a time from its details page. **Test** appears only for Windows and Hyper-V servers. The Resources list has no **Test** button.

1. Open the details page of the server.
1. Select **Test**.
1. Review the status and messages in the window.

## Scan a server

1. Open the details page of the server.
1. Select **Scan Now**. A confirmation window opens.
1. Confirm the scan. While the scan runs, a **Cancel** button stops it.

Platform scan schedules are set on the platform. See [Schedule policies](/docs/privilegesecure/26.07/resources/platforms/schedule-policies.md).
