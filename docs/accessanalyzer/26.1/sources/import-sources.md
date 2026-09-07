---
title: Import sources from a CSV file
description: Create many sources at once by uploading a CSV file that lists them, with one row per source and columns for each type's connection fields.
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Import CSV** on the Sources page creates sources in bulk from a CSV file. One file can mix every source type: each row names its type and fills in only the columns that type needs. The file refers to service accounts by name, so it never contains a password, secret, or key.

The import validates every row before it creates anything, imports the rows that pass, and hands you a report of the rows it skipped so you can fix them and import the report.

## Before you start

- Create the [service accounts](../service-accounts/index.md) the sources need. The import skips any row that names a service account that doesn't exist.
- Check the connection requirements for each type on its page: [SMB file servers](smb-file-servers.md) (the **File Server** source type), [Active Directory](active-directory.md), [Entra ID](entra-id.md), and [Microsoft 365](microsoft-365.md) (the **SharePoint Online** source type). The import doesn't test connections; it only creates the sources.
- Keep the file to 5 MB and 5,000 data rows at most. Split larger inventories into several files.

Users with the Viewer role don't see the **Import CSV** button.

## Import a file

1. Go to **Configuration > Sources**.
2. Click **Import CSV**.
3. Click **Download CSV template** if you want a starting point. The template has the header row and one example row per source type.

   ![Import CSV dialog for bulk-adding sources](/images/accessanalyzer/26.1/sources/import-csv.webp)

4. Drop your file on the upload area, or click the area to browse for it. The upload accepts only `.csv` files.
5. Review the preview. Each row shows a **Status** of **Valid** or **Error**. Error rows appear first, with the reason in the **Problem** column. The summary above the table shows how many rows the import creates and how many it skips.
6. Click **Import N valid rows**, where N is the number of rows that passed. To start over instead, click **Choose a different file**.
7. Keep the dialog open while the progress bar runs.
8. Check the result. It shows how many sources the import created. If any rows failed, it also shows how many it skipped and a **Download skipped rows report** link.
9. Click **Done**.

If you try to close the dialog before the import finishes, a warning says **If you close now, this import will be discarded.** Click **Stay** to continue or **Discard import** to abandon it.

## File format

The file is a standard CSV with a header row. The import matches header names after trimming and lowercasing them, so `Name`, `name`, and `NAME` all work and column order doesn't matter. It ignores columns it doesn't recognize, trims every cell, and skips empty lines. Only `name` and `type` are required columns; leave out any other column when no row needs it.

### Columns

| Column | Required | Used by | Notes |
|---|---|---|---|
| `name` | Yes | All types | Must be unique among existing sources and within the file, ignoring case. |
| `type` | Yes | All types | The source type; see [Values for `type`](#values-for-type). |
| `description` | No | All types | Free text. |
| `service_account` | No | All types | The name of an existing service account, matched ignoring case. Leave empty to assign one later. |
| `labels` | No | All types | `key=value` pairs separated by `;`, for example `env=production;team=finance`. Same rules as [labels](labels.md) set on a source: one value per key, at most 50 labels, no `=`, `;`, or `,` inside a key or value. |
| `host` | For File Server and Active Directory | File Server, Active Directory | Hostname or IP address of the SMB server or domain controller. |
| `port` | For Active Directory | File Server, Active Directory | Port number. Optional for File Server, where an empty cell means 445. Required for Active Directory: 389 for LDAP, or 636 for LDAPS. |
| `domain` | For Active Directory | File Server, Active Directory | Windows domain or workgroup name for File Server; DNS name of the domain for Active Directory. |
| `ignore_ssl_errors` | No | Active Directory | `true` or `false`, ignoring case. Empty means `false`. |
| `tenant_id` | For Entra ID | Entra ID | The directory (tenant) ID. |
| `azure_cloud` | No | Entra ID, SharePoint Online | `AzurePublic`, `AzureUsGovernmentGcc`, `AzureUsGovernmentGccHigh`, `AzureUsGovernmentDoD`, or `AzureChina`. The default is `AzurePublic`. |
| `sharepoint_domain` | For SharePoint Online | SharePoint Online | The SharePoint Online domain, such as `contoso.sharepoint.com`. |

The header row in the downloaded template is the authoritative list of connection columns for your installation.

### Values for `type`

Each type accepts its record name, its underscore alias, or the display name shown in Access Analyzer. Matching ignores case. The record name is the safest choice because the template uses it.

| Source type | Record name | Alias | Display name |
|---|---|---|---|
| File Server | `cifs` | `file_server` | `File Server` |
| Active Directory | `active-directory` | `active_directory` | `Active Directory` |
| Entra ID | `entra-id-ccf` | `entra_id` | `Entra ID` |
| SharePoint Online | `sharepoint-online-ccf` | `sharepoint_online` | `SharePoint Online` |

## Examples

Each example uses only the columns its type needs. You can include the full header from the template instead and leave the unused cells empty.

<Tabs groupId="source-type">
<TabItem value="file-server" label="File Server">

```csv title="file-servers.csv"
name,type,description,service_account,labels,host,port,domain
Finance file server,cifs,HQ finance shares,fs-scan,env=production;team=finance,fs01.corp.example.com,445,CORP
HR file server,cifs,,fs-scan,env=production;team=hr,fs02.corp.example.com,,CORP
Lab NAS,cifs,Engineering lab,lab-scan,env=dev;team=engineering,10.20.30.40,,WORKGROUP
```

</TabItem>
<TabItem value="active-directory" label="Active Directory">

```csv title="domains.csv"
name,type,description,service_account,labels,host,port,ignore_ssl_errors,domain
Corp domain,active-directory,Production forest root,ad-reader,env=production,dc01.corp.example.com,389,false,corp.example.com
Lab domain,active-directory,,ad-reader-lab,env=dev,dc01.lab.example.com,636,true,lab.example.com
```

</TabItem>
<TabItem value="entra-id" label="Entra ID">

```csv title="tenants.csv"
name,type,description,service_account,labels,tenant_id,azure_cloud
Contoso Entra ID,entra-id-ccf,,entra-app,env=production,00000000-0000-0000-0000-000000000000,AzurePublic
```

</TabItem>
<TabItem value="sharepoint-online" label="SharePoint Online">

```csv title="sharepoint.csv"
name,type,description,service_account,labels,sharepoint_domain,azure_cloud
Contoso SharePoint,sharepoint-online-ccf,Includes OneDrive,spo-app,env=production;data=confidential,contoso.sharepoint.com,AzurePublic
```

</TabItem>
<TabItem value="mixed" label="Mixed">

```csv title="sources.csv"
name,type,description,service_account,labels,host,port,domain,ignore_ssl_errors,tenant_id,azure_cloud,sharepoint_domain
Finance file server,cifs,HQ finance shares,fs-scan,env=production;team=finance,fs01.corp.example.com,445,CORP,,,,
Corp domain,active-directory,,ad-reader,env=production,dc01.corp.example.com,389,corp.example.com,false,,,
Contoso Entra ID,entra-id-ccf,,entra-app,env=production,,,,,00000000-0000-0000-0000-000000000000,AzurePublic,
Contoso SharePoint,sharepoint-online-ccf,,spo-app,env=production,,,,,,AzurePublic,contoso.sharepoint.com
```

</TabItem>
</Tabs>

## Validation

### File-level errors

These stop the import before the preview:

| Message | Fix |
|---|---|
| **The file couldn't be read. Check that it is a valid CSV.** | Save the file as plain CSV. Check for unbalanced quotes. |
| **Missing required column: name.** / **Missing required column: type.** | Add the column to the header row. |
| **The file contains no data rows.** | Add at least one row under the header. |
| **File exceeds 5,000 rows.** | Split the file. |

### Row-level errors

The import checks each row in the following order and shows only the first problem it finds in the **Problem** column. Fixing that problem can reveal the next.

| Message | Meaning |
|---|---|
| **Name is required.** | The `name` cell is empty. |
| **Unknown type "X". Use one of: …** | The `type` cell matches no source type. The message lists the record names. |
| **Missing required field: host.** (or another column) | A required connection column for that type is empty. |
| **"X" is not a valid hostname or IP address.** | The `host` cell fails the hostname and IPv4 checks. Other fields show their own format message. |
| **ignore_ssl_errors must be true or false.** | A boolean column holds something other than `true` or `false`. |
| **Duplicate name — first used on row N.** | Another row in the file uses the same name, ignoring case. |
| **A source named "X" already exists.** | A source with that name exists in Access Analyzer. |
| **Service account "X" not found.** | No service account has that name. |
| **Invalid labels — use key=value pairs separated by ";".** | A pair in `labels` is malformed or contains a forbidden character. |
| **Duplicate label key "X" — a key can have only one value.** | The same key appears twice in `labels`. |
| **At most 50 labels per source.** | Too many pairs in `labels`. |

## Partial success and the skipped rows report

An import never fails as a whole because of one bad row. The import leaves out rows marked **Error** in the preview and creates the valid rows. A row that passes the preview can still fail when the import saves it, for example if someone created a source with the same name in the meantime. The result counts that row as skipped, and the skipped rows report shows it with a **Server error:** message.

The skipped rows report is a CSV with the same columns as your file plus a final `error` column holding the message for each row. Fix the cells and import the report as it is; the import ignores the `error` column like any other column it doesn't recognize. Because the rows that succeeded aren't in it, importing it again creates no duplicates.
