# Azure Files — State-in-Time Reports Overview

Netwrix Auditor provides State-in-Time reports for Azure Files that allow you to generate reports on the permissions state of your Azure file shares at a specific moment in time. These reports complement change and activity reports by giving you a snapshot-based view of who has access to what, and the current state of files and folders across your Azure file shares.

State-in-Time reports rely on daily configuration snapshots collected by Netwrix Auditor. Each snapshot captures the permissions state, folder structure, and file metadata of the monitored Azure file shares at the time of collection.

## How it works

Netwrix Auditor connects to Azure Files via the SMB protocol and collects the following data daily:

- Folder and file permissions (NTFS ACLs + RBAC from Azure Portal)
- Folder structure, file sizes, and file metadata
- Account information resolved via Microsoft Graph API (EntraID and ADDS identities)

The effective permissions are calculated based on **NTFS ACLs + Share-level ACLs + RBAC (Azure Portal)**.

## Supported configurations

Azure Files State-in-Time reports support the following authentication configurations:

| Authentication type | Supported |
|--------------------|-----------|
| ADDS (Active Directory Domain Services) — Kerberos | Yes |
| Microsoft Entra Kerberos | Yes |
| Microsoft Entra Domain Services | **No** |
| NFS protocol | **No** (SMB only) |
| Azure File Sync | **No** |

Account identity (SSID) is resolved through the Microsoft Graph API.

## Available reports

| Report | Description |
|--------|-------------|
| Account Permissions | Shows accounts with permissions granted on files and folders |
| Azure Files and Folders Permission Details | Shows permissions granted on a shared folder, its subfolders and files |
| Folder Tree View | Shows folder owners, total file size and count per folder |
| Excessive Access Permissions in Azure Files | Shows accounts with permissions to infrequently accessed files and folders |
| Duplicate Files | Shows files with the same name and size |
| Largest Files - Azure Files | Lists the largest files across audited Azure file shares |
| Stale Data by Folder | Shows folders with files not accessed in the last 180 days (default) |

## Prerequisites

Before you can use Azure Files State-in-Time reports, you must:

1. Have a configured **Azure Files monitoring plan** in Netwrix Auditor.
2. Enable the **Collect data for state-in-time reports** option in the monitoring plan settings.
3. (Optional but recommended) Configure **Azure diagnostic settings** to send logs to a blob storage account. This is required for the "Times Accessed" data in the Excessive Access Permissions report.

For configuration details, see [Configuring State-in-Time Data Collection for Azure Files](/docs/auditor/10_8//configuration/azurefiles/stateintime).

## Snapshot dates and historical analysis

By default, reports show the current (most recent) state. To view historical snapshots:

1. Open any State-in-Time report.
2. In the **Snapshot Date** filter, select the date you want to view.
3. Click **View Report**.

Historical snapshots must be imported by a Global administrator. Once imported, they are available for all State-in-Time reports for that monitoring plan.

## Export formats

All Azure Files State-in-Time reports support export in the following formats:

Word, Excel, PowerPoint, PDF, Accessible PDF, TIFF, MHTML, CSV, XML, Data Feed.

## Key differences from File Server State-in-Time reports

If you are familiar with File Server State-in-Time reports, note the following differences for Azure Files:

- **"Item" filter** represents the monitoring scope: either a specific **Storage Account** or an **Azure Subscription** (not a file server or share).
- **"Times Accessed" data** comes from Azure Monitor diagnostic logs. If diagnostic settings are not configured, this value defaults to 0.
- **Local file server users and groups are not included** in Azure Files reports — only EntraID and ADDS identities.
- UNC paths follow the Azure file share format: `\\<storageaccount>.file.core.windows.net\<share>\<path>`.

## Related topics

- [Configuring State-in-Time Data Collection for Azure Files](/docs/auditor/10_8//configuration/azurefiles/stateintime)
- [Azure Files Configuration Overview](/docs/auditor/10_8/configuration/azurefiles/overview)
