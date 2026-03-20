---
title: "Adding a Data Source"
description: "Connect a data source using the Connect Source wizard"
sidebar_position: 20
---

# Adding a Data Source

Before scanning, you need to connect a data source to Access Analyzer. The **Connect Source** wizard guides you through a 3-step process: select the source type, configure the connection, and set up a scan.

## Open the Connect Source Wizard

1. Navigate to **Configuration** > **Sources** in the sidebar
2. Click **Connect Source** to open the wizard drawer

## Step 1 — Select Source Type

Choose the type of data source to connect:

| Source Type | Category | Description |
| --- | --- | --- |
| **Active Directory** | IAM | Domain controllers, users, groups, and permissions |
| **Entra ID** | IAM | Azure AD tenant with users, groups, and roles |
| **File Server** | Data Source | Windows file shares (CIFS/SMB) |
| **SharePoint Online** | Data Source | SharePoint sites and document libraries |

Select a source type card and click **Next**.

## Step 2 — Configure the Source

Configuration varies by source type. For this getting started guide, we'll walk through the **File Server** example — the most common first source.

### File Server Configuration

1. Enter a **Source Group Name** (for example, `Finance File Servers`)
2. Select or create a **Service Account**:
   - Click **+ Create New Account** to add credentials inline
   - Select **Username/Password** and enter the username and password for an account with read access to the target file servers
   - Or select an existing service account from the dropdown
3. Optionally enter a **Domain** name (for example, `company.local`)

### Add File Servers

1. Click **+ Add** or the empty state area
2. Select **Add Manually**
3. Enter one or more server names or IP addresses, separated by commas or pressing **Enter** after each
4. Set the **Port** (default: `445`)
5. Click **Add file servers**, then click **Done**

### Test Connection (Optional)

Click **Test Connection** to verify connectivity to all servers. Each server shows its connection status (Connected, Failed, or Testing). Testing is non-blocking — you can proceed regardless of results.

:::note
If a connection test fails, verify network connectivity on port 445 and that the service account has read access to the target shares.
:::

Click **Next** to proceed to scan setup.

### Other Source Types

For detailed configuration instructions for each source type, see:

- [Active Directory](/docs/accessanalyzer/1_0/connectors/iam/activedirectory/connectionsetup) — Domain controller configuration
- [Entra ID](/docs/accessanalyzer/1_0/connectors/iam/entraid/appregistration) — Azure AD app registration and tenant setup
- [SharePoint Online](/docs/accessanalyzer/1_0/connectors/source/sharepointonline/connectionconfig) — Site collection configuration

## Next Step

[Configuring a Scan](/docs/accessanalyzer/1_0/gettingstarted/firstscan/configuringscan) — Set up scanning options and schedule your first scan.
