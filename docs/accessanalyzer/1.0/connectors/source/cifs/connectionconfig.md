---
title: "Connection Configuration"
description: "Configuring CIFS/SMB connection parameters"
sidebar_position: 10
---

# Connection Configuration

Configure the CIFS/SMB connector to scan Windows file shares for files, folders, and access permissions. File server sources are created through the **Connect Source** wizard, which supports adding multiple servers in a single source group.

## Prerequisites

- A service account with read access to target shares — see [CIFS Requirements](/docs/accessanalyzer/1_0/requirements/connectors/cifs)
- Network connectivity from Access Analyzer to each file server on port 445

## Creating a File Server Source Group

File server sources are created through the 3-step **Connect Source** wizard:

### Step 1 — Select Source Type

1. Navigate to **Configuration** > **Sources**
2. Click **Connect Source** to open the wizard drawer
3. Select **File Server** from the source type cards
4. Click **Next**

### Step 2 — Configure File Server

1. Enter a **Source Group Name** (for example, `Finance File Servers`)
2. Select or create a **Service Account**:
   - Click **+ Create New Account** to add a new username/password account
   - Or select an existing service account from the dropdown
3. Optionally enter a **Domain** name (for example, `company.local`). The domain is applied to all servers in the group.

### Adding File Servers

Click **+ Add** or click the empty state area to begin adding servers:

1. Select **Add Manually** (CSV import is planned for a future release)
2. In the manual entry form, enter one or more server names or IP addresses:
   - Type multiple entries separated by commas, or press **Enter** after each one
   - For example: `fs01, fs02, fs03`
3. Set the **Port** (default: `445`)
4. Click **Add [N] file servers**
5. Review the added servers in the table — server names are editable inline
6. Click **Done** to return to the configuration screen

The file servers table shows each server's name, connection status, and a delete button.

### Test Connection

After adding servers and selecting a service account:

1. Click **Test Connection**
2. All servers are tested in parallel
3. Each server shows its status: **Connected** (green), **Failed** (red), or **Testing** (spinner)
4. A summary toast displays the results (for example, "All 3 connections successful" or "1 of 3 failed")

:::note
Testing is optional and non-blocking — you can proceed to the next step regardless of test results.
:::

### Connection Parameters

Each file server in the group uses the following connection parameters:

| Parameter | Description | Default |
| --- | --- | --- |
| **Host** | File server hostname or IP address | — |
| **Port** | SMB port | `445` |
| **Domain** | Domain name (set at the group level) | — |

## Supported Protocols

The connector supports SMBv2 and SMBv3. SMBv1 is not supported due to security vulnerabilities.

## Next Steps

After configuring servers, click **Next** to proceed to [scan setup](/docs/accessanalyzer/1_0/gettingstarted/firstscan/configuringscan), where you configure access scan options, share filtering, and scheduling.
