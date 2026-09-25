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

#### Required Rights

Grant the account the following four rights on the file server. Together they let both Access scans and Sensitive data scans cover every share without making the account an administrator.

| # | Grant | Where | Why it's needed |
|---|---|---|---|
| 1 | **Read** share permission | Every share to scan | Opens the share over SMB. Windows checks the share permission before any file system permission, so without at least **Read** the scan can't open the share at all. |
| 2 | **Read & execute** NTFS permission, applied to **This folder, subfolders and files** | The root folder of every share to scan | Lets Access scans list folders and files and read each object's access control list (ACL), and lets Sensitive data scans read file contents. **Read & execute** includes **Read permissions**, which the scans need to read ACLs; a custom permission that grants only **Read data** isn't enough. |
| 3 | Membership in the local **Access Control Assistance Operators** group (Windows Server only) | The file server | Lets the scan list every share on the server, with its local path, and read each share's share-level permissions. Without it, a scan that doesn't name its shares under **Include shares** finds no shares, and no scan records share-level permissions. |
| 4 | Membership in the local **Backup Operators** group, for a domain account | The file server | Lets Access scans open folders and files whose ACL has no entry for the account, such as folders with broken inheritance. Without it, the scan records those objects with an error status and skips their contents. |

The account doesn't need write rights, administrator rights, or the right to sign in interactively. The scans only read.

For example, the following PowerShell commands, run as an administrator on a Windows file server, grant all four rights to the account `CORP\svc-aa-scan` on every non-system share:

```powershell
$account = 'CORP\svc-aa-scan'

# Groups are added by security identifier (SID), so the commands also work
# on non-English Windows, where the group names are translated.
Add-LocalGroupMember -SID 'S-1-5-32-579' -Member $account   # Access Control Assistance Operators
Add-LocalGroupMember -SID 'S-1-5-32-551' -Member $account   # Backup Operators

foreach ($share in Get-SmbShare -Special $false) {
    Grant-SmbShareAccess -Name $share.Name -AccountName $account -AccessRight Read -Force
    icacls $share.Path /grant "${account}:(OI)(CI)RX"
}
```

On a domain controller, both groups are domain groups in the **Builtin** container; manage their membership in **Active Directory Users and Computers**.

#### Considerations

- **Access Control Assistance Operators doesn't grant access to any share.** It only lets the account list the shares and read their share-level permissions. Every share still needs rights 1 and 2. A share the scan lists but can't open is skipped: the scan records its share-level permissions, scans the other shares, and finishes with the status **Completed with errors**. To get a clean result, grant the account access to the share or add it to **Exclude shares**.
- **Grant access to new shares as you add them.** Rights 1 and 2 are per share, so a share created after setup isn't scanned until the account has access to it.
- **Access through a group counts.** Rights 1 and 2 describe the access the account ends up with, so access it already has through a group such as **Everyone**, **Users**, or **Authenticated Users** is enough. Explicit grants are more reliable, because they don't depend on group settings that can change.
- **Backup Operators works only for a domain account.** For a local account, Windows removes the **Back up files and directories** right from network sign-ins, so the membership has no effect on a standalone server. Backup Operators also doesn't replace rights 1 through 3: no Windows right overrides a share permission, and Backup Operators can't list shares.
- **Sensitive data scans need right 2 on every file they read.** Sensitive data scans don't open files in backup mode, so Backup Operators doesn't extend them. A folder the Access scan reached only through Backup Operators appears in Access scan results, but the Sensitive data scan can't read its files. To classify those files, give the account **Read & execute** on them.
- **Check the result of a Sensitive data scan that finds nothing.** When the account can't read any of the files, the scan still reports **Completed**, with an error recorded for each file.
- **Other groups don't let the account list shares.** On Windows Server 2025, membership in **Backup Operators** or **Power Users** doesn't let the account list shares or read share-level permissions. Membership in **Administrators** does, along with everything else here, but it grants far more access than the scans need.
- **Keep the default user rights.** The scans rely on the **Access this computer from the network** and **Bypass traverse checking** user rights, which Windows grants to **Everyone** by default. If your server's security policy removes **Everyone** from either right, grant it to the account.
- **NetApp, Dell PowerScale, and Nutanix Files handle share listing their own way.** Rights 3 and 4 are Windows groups. On other platforms, grant rights 1 and 2. If a scan finds no shares, list the shares to scan under **Include shares**.

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
