---
title: "Add servers"
description: "Onboard servers into Privilege Secure by importing from Active Directory, importing a CSV file, or entering names and IP addresses manually."
sidebar_position: 20
---

# Add servers

Onboard a server so that Netwrix Privilege Secure for Access Management (Privilege Secure) can scan it, manage its accounts, and include it in access policies. The **New Server** entry on the **Add** menu opens the **Add Resources** window. The window has three onboarding methods.

| Method | Use it when |
|---|---|
| **Import from AD** | The servers are computers in an Active Directory domain that Privilege Secure has synchronized. This method is the default. |
| **Import from CSV** | You have a comma-separated values (CSV) list of servers to onboard in one pass. |
| **Add Manually** | You have a few servers, or servers that aren't in Active Directory. |

Each method has a **Service Account** dropdown in the window footer. Privilege Secure uses that account to scan the servers. Select an account that has the rights it needs on the servers. See [Service accounts](/docs/privilegesecure/26_07/configuration/service-accounts).

{/* TODO verify: COM 4 reports that a manually added server didn't appear in an access policy until a service account and a platform were set, and that a placeholder service account worked. The root cause is unconfirmed, and it is unclear whether a scan must fail first. Confirm in the lab, then state the requirement here. */}

## Prerequisites

- A service account that has credentials for the servers. See [Service accounts](/docs/privilegesecure/26_07/configuration/service-accounts).
- For **Import from AD**, a domain that Privilege Secure has synchronized. See [Active Directory domains](/docs/privilegesecure/26_07/resources/domains).

## Import servers from Active Directory

1. Select **Resources** in the left navigation.
1. Select **Add**, then select **New Server**. The **Add Resources** window opens with **Import from AD** selected.
1. In the **Search Resources...** box, enter part of a server name to filter the **Available Resources** table. For example, enter `app`.
1. Select each server to onboard. Each selected server moves to the **Resources to Add** table.
1. To remove a server from **Resources to Add**, clear its checkbox in either table.
1. In the **Service Account** dropdown, select the account that has credentials for the selected servers.
1. Select **Add**.

Both tables show the **Type**, **Name**, **Operating System**, and **DNS Host Name** columns.

{/* TODO screenshot: Add Resources window with Import from AD selected and two servers in Resources to Add */}

## Import servers from a CSV file

### Create the CSV file

Each row describes one server. Identify each server by a DNS host name, an IP address, or both. The other columns are optional. A **Platform** or **Credential** value must exactly match a platform or service account that Privilege Secure already has.

| Column | Required | Value |
|---|---|---|
| DNS Host Name | One of this column or IP Address | The fully qualified domain name (FQDN) of the server |
| Operating System | No | The operating system of the server |
| IP Address | One of this column or DNS Host Name | The IP address of the server |
| Platform | No | The name of an existing platform |
| Credential | No | The name of an existing service account |

To get a template, select **Import from CSV** in the **Add Resources** window, then select **Download CSV Template**. The browser saves `nps-resource-import-template.csv` to the default download folder.

{/* TODO verify: the header row of the 26.07 template. The 26.03 template uses DNS Host Name, Operating System, IP Address, Platform, Credential. The server validation also reads an SSH port. Confirm the 26.07 columns against the downloaded template. */}

The following example has seven servers. The first row sets every column. The last row sets only a DNS host name.

```csv
DNS Host Name,Operating System,IP Address,Platform,Credential
app01.example.com,Windows Server 2022,192.0.2.10,Windows,<windows-service-account>
app02.example.com,Windows Server 2019,192.0.2.11,Windows,
web01.example.com,Windows Server 2019,,,
,Windows Server 2022,192.0.2.12,Windows,
,,192.0.2.20,Linux,<linux-service-account>
db01.example.com,,,,
file01.example.com,,,,
```

Replace `<windows-service-account>` and `<linux-service-account>` with the names of service accounts that exist in your environment.

### Import the file

1. Select **Resources** in the left navigation.
1. Select **Add**, then select **New Server**.
1. Select **Import from CSV**.
1. Select **Import CSV**, then select your file and select **Open**. The window validates each row and adds it to the table.
1. Fix any row that shows a red icon. Either correct the CSV file and import it again, or select the row and select **Remove**.
1. To import more files, repeat steps 4 and 5.
1. In the **Service Account** dropdown, select the account that has credentials for the servers. Privilege Secure applies it to each row that has no service account.
1. When every row has a service account, select **Add**.

The table shows the **Type**, **Name**, **Platform**, **Operating System**, **IP Address**, **Service Account**, and **Input Source** columns. **Input Source** is the name of the import file.

### Validation messages

The validation reports these messages for a row:

- "DNS Host Name required"
- "Invalid IP Address"
- "Invalid Credential"
- "Invalid Platform"

"Invalid Credential" and "Invalid Platform" mean that the value doesn't exactly match a service account or platform name.

{/* TODO verify: the condition that triggers "DNS Host Name required", given that a row can use an IP address instead. The code falls back to the IP address when the host name is empty. */}

## Add servers manually

1. Select **Resources** in the left navigation.
1. Select **Add**, then select **New Server**.
1. Select **Add Manually**.
1. In **Resource Name / IP Address**, enter the DNS host name or IP address of a server. For example, enter `app01.example.com`.
1. Select **Add** next to the box. The server appears in the table with **User Input** as its **Input Source**.
1. Repeat steps 4 and 5 for each server. To remove a server, select its row and select **Remove**.
1. In the **Service Account** dropdown, select the account that has credentials for the servers.
1. Select **Add** in the window footer.

## Other ways to add servers

- On the **Computers** tab of a domain, select computers and select **Add as NPS Managed Resource**. See [Active Directory domains](/docs/privilegesecure/26_07/resources/domains).
- On a resource group that maps to an organizational unit (OU), select **Auto-Onboard** to onboard the computers in the OU. See [Resource groups](/docs/privilegesecure/26_07/resources/resource-groups).

## Next steps

After you onboard a server, open it to check that **Platform** and **Service Account** are set, and to check its ports and certificate trust settings. See [Server details](/docs/privilegesecure/26_07/resources/servers). Add the server to an access policy so users can request sessions on it. See [Access policies](/docs/privilegesecure/26_07/configuration/access-policies/overview).
