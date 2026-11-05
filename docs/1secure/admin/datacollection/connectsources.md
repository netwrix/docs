---
title: "Connect Sources"
description: "Connect an Active Directory domain, file server, SQL Server, or Windows device to Netwrix 1Secure and manage its connection health."
sidebar_position: 15
---

# Connect Sources

A source is a system that Netwrix 1Secure collects data from, such as a domain, a file server, or a
SQL Server. Use the add-source wizard to connect a source, and use the **Sources** page to manage
sources, source groups, and connectors afterward.

## Source types

The add-source wizard offers these tiles:

- **Active Directory**
- **Windows Device**
- **Windows device source group**
- **Network Attached Storage**

Each type is labeled **Cloud** or **On-Prem**. The **File servers** and **SQL Server** cards can
show "Requires Active Directory".

Connecting a cloud source requires the **Manage Sources** permission.

## Open the Sources page

The **Sources** page lists source groups in a table. Each row has actions to edit and delete the group. You can
also open the group's **Sources** and **Connectors** lists, and open a health-status dialog from
the status column.

To open the add-source wizard directly, add `openSourceWizard=true` to the page URL. Add
`sourceFilter=cloud` or `sourceFilter=onprem` to show only cloud or on-premises source types.

## Connect an Active Directory domain

**Step 1 –** In the add-source wizard, select **Active Directory**. The **Connect to the domain**
step opens.

**Step 2 –** In **Domain name**, enter the domain name. The placeholder reads "Enter domain name".

**Step 3 –** Under **Service account**, enter a **Username** and **Password**. To reuse an account,
select **Use a saved service account** and choose it from **Saved service account**. To enter a
different account, select **Add another service account**.

**Step 4 –** Click **Continue**.

The wizard requires a privileged account for these purposes:

- Real-time activity. The account reads the security event log on domain controllers.
- Risk scoring. The account needs read access across the full directory.
- Posture assessment. The account runs domain-wide checks, such as PingCastle.

The wizard shows these validation messages: "Domain name is required", "Username is required", and
"Password is required". The username and password are required only when you enter a new account.
They aren't required when you choose a saved service account.

When you create the source through the wizard, 1Secure adds these default connectors to the
Active Directory source group, all with compression off:

- AD Activity
- AD Logons
- Group Policy Activity
- AD State
- Ping Castle

Group Policy Activity requires the Active Directory data source.

## Connect a file server

The **Connect a file server** step has these fields.

**Step 1 –** Enter the address in **File server address**, or select **Discover them from Active
Directory**.

**Step 2 –** If you discover file servers from Active Directory, enter a **Domain name** and a
container.

The wizard shows these validation messages: "File server address is required" and "Computer
container is required".

The wizard notice reads "An account with read-only access is not enough." The account needs read
access to every share and its permissions. It also reads the file server security event log for file
activity.

## Connect a SQL Server

**Step 1 –** In the **Connect to SQL Server** step, in **SQL Server**, enter the instance. The placeholder reads "Enter SQL Server". The
hint reads "The SQL Server instance, e.g. SQLSRV01\SQLEXPRESS, or SQLSRV01 for the default
instance."

The wizard shows the validation message "SQL Server is required". The service account needs a login
on the SQL Server with access to read its activity.

## Source fields

After you connect a source, its identifier field depends on the source type.

| Source type | Field | Description |
|---|---|---|
| Active Directory Domain | **Domain Name** | "Fully Qualified Domain Name e.g. example.com." |
| Windows Device | **Endpoint** | "IP address, FQDN, or NetBIOS name" |
| SQL Server | **SQL Server Name** | "The name of the SQL Server instance e.g. StationDB\\SQLExpress or StationSQL (for default instance)" |
| Entra ID Domain | **Tenant ID** | The external reference for the source type |
| Exchange Online | **Tenant ID** | The external reference for the source type |

A Windows device source group has these fields:

- **Container Name** – "The name of the AD container to crawl, this should not include the domain name e.g. File Servers"
- **Domain Name** – "Fully qualified domain name of the domain the container is in"

## Sites and source groups

The **Site** field in the wizard reads: "Sites are used to signify physical groupings within the
organisation. This could be a geographical location like 'Barcelona' or a cluster of servers from
which a single agent collects data."

The wizard explains source groups this way: "Sources, such as computers, are grouped together to share a common configuration. Please enter a descriptive name for the group to which the source will belong."

## Check the connection result

The wizard shows these states while it connects: "Testing the connection", "Connection verified",
"Connection test failed", "Turning on data collection", and "Couldn't turn on data collection".

A skipped collector shows one of these reasons:

- "Not included in your license"
- "Needs a data collector that couldn't be turned on"
- "Not turned on"

If the connection fails, the wizard shows one of these causes:

| Message | What to check |
|---|---|
| "Sign-in failed" | Enter the username as DOMAIN\user or user@domain. |
| "Access denied" | The account needs the privileged access. |
| "Can't reach the domain" | Check the domain name. Check that the agent server can reach a domain controller. |
| "Can't reach the SQL Server" | "Check the server and instance name, and that the agent server can reach the SQL Server on your network, including through any firewall." |

For SQL Server, an access failure shows "The service account needs a login on the SQL Server with
access to read its activity."

## Credentials

Credential forms have these fields: **Client ID**, **Client Secret**, and
**Tenant ID**. The credential type is **App Registration**.

The forms show these validation messages: "Tenant ID is required", "Client ID is required", and
"Client Secret is required." Fields that take a GUID show "Enter a valid GUID (e.g.
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)." The required messages in the credentials form read "The
Client ID field is required.", "The Client Secret field is required.", and "The Tenant ID field is
required."

Existing credentials "are encrypted and cannot be displayed here".

The edit source and credentials forms offer a **Skip Validation** option.

## Connectors

A source group has connectors that collect data. Each connector has a toggle:

- "Monitor this connector and collect activity data" for activity connectors
- "Monitor this connector and collect state data" for state connectors
- "Monitor this connector and process after data collection"

### Connector names

| Source | Connectors |
|---|---|
| Active Directory | Active Directory Activity, Active Directory Logons, Ping Castle, Active Directory State |
| Group Policy | Group Policy Activity, Group Policy State |
| File Server | File Server Activity, File Server State, File Server Data Classification |
| Windows Server | Windows Server Activity, Windows Server State |
| Network Attached Storage | Network Attached Storage Activity (NAM) |
| Entra ID | Entra ID Activity, Entra ID Logons, Entra ID State |
| Exchange Online | Exchange Online Activity |
| SharePoint Online | SharePoint Online Activity, SharePoint Online Copilot, SharePoint Online Data Classification, SharePoint Online State |

Ping Castle is the Active Directory posture connector. Active Directory Logons is the logon
activity connector.

### Connector options

Group Policy Activity uses the same options as Active Directory Activity:

- **Enable traffic network compression** is off by default. Its description reads "Netwrix will deploy an additional agent to the source system. This option is not compatible with Netwrix Auditor. If both products monitor the same servers, enable this option in only one product."
- **Adjust audit settings automatically** is on by default.

For a file server, the audit option text reads: "Turns on auditing on the file server so that
1Secure's reports and alerts have file activity. Turn off if you manage audit policy yourself, for
example with Netwrix Auditor."

### Licensing

A default connector that the license doesn't cover shows "Not included in your license". 1Secure
skips disabled connectors when you add a source. It shows "One Connector is not enabled and won't be added to the source." or "{0} Connectors are not enabled and won't be added to the source."

Licensing messages for connectors are "License required", "License is required for the connector
{0}", and "Requires {0}".

## Manage sources and connectors

From a source group's **Sources** drill-down, add, edit, and delete sources. From its **Connectors**
drill-down, add, edit, and delete connectors.

Source groups have validation settings:

- **Validation Source** – "Validate changes against one of the group's sources"
- **Validation Source Group**
- **Skip Validation**

If validation fails, 1Secure shows "Validation failed, please try again" or "A problem occured when validating, please try again or contact support".

Deleting a source group asks "Are you sure you want to delete this source group? This will also
delete all its sources and connectors." Deleting a connector asks "Are you sure you want to delete
connector {0}?"

## Check source health

Open the health-status dialog from the status column. For a connector, the dialog title reads
"Health Status for {0} of type {1}".

| Status | When it appears |
|---|---|
| Offline | Any non-state connector last updated more than 3 hours ago. The text reads "Last connection over 3 hours ago". |
| Offline (state connectors) | A state connector last updated more than 7 days ago. State connectors are SharePoint Online, File Server, Entra ID, Windows Server, and Group Policy. |
| Needs attention | Any connector reports a failure. |
| Unlicensed | A connector isn't licensed. |
