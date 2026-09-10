---
title: SMB File Servers
description: Add a File Server source to scan the shares, permissions, and file contents of an SMB file server.
sidebar_position: 1
---

A **File Server** source points Access Analyzer at one SMB file server: a Windows file server, NetApp, Dell PowerScale (formerly Isilon), or Nutanix Files. Access scans walk its shares and record who can reach which folders and files; Sensitive data scans open the files and look for sensitive data patterns. Connections use SMB 2 or 3; Access Analyzer doesn't support SMB 1.

Add one source per server, using the server's own hostname or IP address. Access Analyzer doesn't follow Distributed File System (DFS) namespaces; when a DFS link points at a share it can't reach, the scan records an error on that object and continues.

For an end-to-end walkthrough from source to first report, see [Scan SMB file servers](../guides/smb-file-servers.md).

## Prerequisites

### Service Account

File Server sources use a [Username and password](../service-accounts/username-password.md) service account. Enter the username as `DOMAIN\username`; the `username@domain` form works for Access scans but not for Sensitive data scans. For a server that isn't domain-joined, use the server's workgroup name in place of the domain, for example `WORKGROUP\username`, or enter it in the source's **Domain** field.

The account needs the following rights on the file server:

| Right | Why |
|---|---|
| **Read** access to every share to scan | Access scans list folders and files within each share; Sensitive data scans read file contents. |
| **Read permission on object security descriptors** for every share, folder, and file to scan | Access scans enumerate the access control list (ACL) on each object to record who can reach it. |
| The **Back up files and directories** user right, or membership in the local **Backup Operators** group | Lets the scan open folders and files the account has no explicit permission on. Without it, the scan records those objects with an error status and skips their contents. |

The account doesn't need write rights. The scans only read.

### Network

The agent that runs the scan connects to the file server over Transmission Control Protocol (TCP) port 445. Connections use SMB 2 or 3 and require signing but not encryption.

:::note

Access scans can use any port you enter in **Port**. Sensitive data scans work only on port 445; against a source on another port, the scan runs but can't read any files.

:::

You select the agent on the scan, not on the source; see [Agents](../agents/index.md).

## Add a File Server Source

1. Go to **Configuration > Sources**.
2. Click **Add source**.
3. In **Source type**, select **File Server**.
4. Under **Details**, enter a **Name**.
5. Add a **Description** and **Labels** if you want them; see [Labels](labels.md).
6. Under **Connection**, fill in the fields described in the following table.
7. Under **Access**, in **Service account**, select the account you set up for this server.
8. Click **Test connection**. A **Connection successful** message confirms the account can reach the server and list its shares.
9. Click **Add source**.

![Add source dialog with File Server selected](/images/accessanalyzer/26.1/sources/add-file-server.webp)

| Field | Required | What to enter | Default |
|---|---|---|---|
| **Host** | Yes | The hostname or IPv4 address of the SMB server, for example `fileserver.example.com`. | None |
| **Port** | No | The TCP port for the SMB connection, 1 to 65535. Leave the default unless the server listens elsewhere; Sensitive data scans require 445. | 445 |
| **Domain** | No | The Windows domain or workgroup name, for example `CORP`. Applies when the username doesn't include a domain. | None |

## Test Connection

**Test connection** opens an SMB session on the host and port with the service account's credentials and lists the first page of shares. The button becomes available after you fill in **Host** and select a service account.

A successful test shows the message **Connection successful**. A failed test shows **Connection failed** with a hint about the cause:

| Hint | What to check |
|---|---|
| Connection timed out | The host is reachable and the port is open |
| Connection refused | An SMB service is listening on the port you entered |
| Permission denied | The account can sign in to the server and list its shares |
| SMB protocol version not supported by server or client | The server allows SMB 2 or 3; Access Analyzer doesn't support SMB 1 |

## What the Scans Collect

### Access Scans

Access scans enumerate the server's shares, then walk each share's folders down to the configured depth. For every share, folder, and file, they record the path, name, owner, size, timestamps, and attributes, plus, for shares and folders, the permission entries: which security identifier (SID) is allowed or denied which rights, and whether each entry is inherited or explicit. The results also flag conditions such as access granted to Everyone or Authenticated Users, explicit deny entries, and folders where inheritance is broken.

Access scans collect file-level permission entries only when you turn on **Enable File-Level Permission Scanning** in the scan's settings; otherwise they record permissions for shares and folders.

Access scans treat shares whose names end in `$`, such as `C$` or `ADMIN$`, as system shares and skip them by default. To scan a share whose name ends in `$`, either clear **Exclude system shares** in the scan's settings or list the share under **Include shares**, which scans only the shares you name. See [Scan types](../scans/scan-types.md) for every File Server scan option.

Access scans record each trustee (the account or group named in a permission entry) as a SID. Add an [Active Directory](active-directory.md) source for the same domain and run an Identity sync on it so that reports show names for domain accounts and groups instead. Server-local accounts and groups stay as SIDs.

### Sensitive Data Scans

Sensitive data scans read the contents of the files a completed Access scan inventoried and match them against the enabled [sensitive data patterns](../sensitive-data-patterns/index.md). Run an Access scan on the source first. The scan skips files larger than the maximum file size set in [Application settings](../settings/application.md). With **Differential scan** turned on, the scan reads only files added or changed since the last Sensitive data scan.

The collected data drives the [Data security dashboard](../dashboards-reports/dashboards/data-security.md) and the file system [Data reports](../dashboards-reports/reports/data.md).
