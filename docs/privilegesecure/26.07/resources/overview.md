---
title: "Resources"
description: "See which systems Privilege Secure manages, filter the Resources list, and change the platform or service account of selected resources."
sidebar_position: 10
---

# Resources

A resource is a system that Netwrix Privilege Secure for Access Management (Privilege Secure) manages. Resources include servers, Active Directory domains, websites, Microsoft Entra ID tenants, secret vaults, and databases. Open **Resources** in the left navigation to see every onboarded resource in one list.

The **Resources** tile on the Dashboard shows the same list. See [Dashboard](/docs/privilegesecure/26.07/admin/sessions/dashboard.md).

{/* TODO screenshot: Resources list with the Add menu open, showing the six entries and the filter bar */}

## Resource types

The Type filter and the **Type** column use these names. The Type filter calls a server a **Host**.

| Type | What it is | Page |
|---|---|---|
| Host | A Windows, Linux, BSD, Cisco, or Palo Alto PanOS server or device | [Server details](/docs/privilegesecure/26.07/resources/servers.md) |
| Domain | An Active Directory domain | [Active Directory domains](/docs/privilegesecure/26.07/resources/domains.md) |
| Website | A web application with its own logon URL | [Websites](/docs/privilegesecure/26.07/resources/websites.md) |
| Entra ID | A Microsoft Entra ID tenant | [Microsoft Entra ID tenants](/docs/privilegesecure/26.07/resources/entra-id-tenants.md) |
| Secret Vault | A container for accounts and files | [Secret vaults](/docs/privilegesecure/26.07/resources/secret-vaults.md) |
| Database | A Microsoft SQL Server or Oracle database | [Databases](/docs/privilegesecure/26.07/resources/databases.md) |

## Filter the list

Use the filters above the table to narrow the list. The filters combine, and **Refresh** reloads the list.

| Filter | Behavior |
|---|---|
| Search | Shows rows that match the text you enter. |
| Type | Shows one resource type. The default is **All**. |
| Operating System | A searchable multi-select. Select one or more operating systems. |
| Resource Group | A searchable multi-select. Select one or more [resource groups](/docs/privilegesecure/26.07/resources/resource-groups.md). |
| Last Scanned | Shows resources scanned between a **Start date** and an **End date**. |

## Add, remove, and change resources

The toolbar above the list has these buttons. **Remove**, **Change Platform**, **Change Service Account**, and **Scan Resource** stay disabled until you select at least one row.

| Button | What it does |
|---|---|
| **Add** | Opens a menu with **New Server**, **New Domain**, **New Website**, **New Entra ID Tenant**, **New Secret Vault**, and **New Database**. See [Add servers](/docs/privilegesecure/26.07/resources/add-resources.md) for **New Server**. The other entries open a details page for the new resource. |
| **Remove** | Stops Privilege Secure from managing the selected resources. See [Remove resources](/docs/privilegesecure/26.07/resources/remove-resources.md). |
| **Change Platform** | Sets the platform of the selected resources. |
| **Change Service Account** | Sets the service account of the selected resources. |
| **Scan Resource** | Scans the selected resources. |

{/* TODO verify: what Scan Resource does, which resource types it applies to, and whether it asks for confirmation. The lab didn't run it. The 26.03 page says it scans a host for local users, groups, Windows services, and scheduled tasks and shows a confirmation window. */}

## Columns

You can sort and resize every column. The table scrolls horizontally.

| Column | Shows |
|---|---|
| Type | An icon for the resource type |
| Resource | The resource name. Select the name to open its details page. |
| Operating System | The operating system of the resource |
| Active | The number of active sessions on the resource |
| Scheduled | The number of sessions scheduled for the resource |
| Access Policies | The number of access policies that include the resource |
| Protection Policies | The number of protection policies that include the resource |
| DNS Host Name | The DNS host name of a host, or the fully qualified domain name (FQDN) of a domain |
| IP Address | The IP address of the resource |
| Domain | The domain of the resource |
| Service Account | The service account that Privilege Secure uses to reach the resource |
| Platform | The platform that defines how Privilege Secure manages the resource. See [Platforms](/docs/privilegesecure/26.07/resources/platforms/platforms.md). |
| Last Scanned | The date and time of the last scan |

## Change the platform of resources

Change the platform when Privilege Secure detects the wrong platform or when a resource has none.

1. Select **Resources** in the left navigation.
1. Select the checkbox of each resource to change.
1. Select **Change Platform**.
1. In the **Platform** dropdown, select the new platform. For example, select **Linux** for a CentOS server. The dropdown lists these platforms:
   - Active Directory
   - BSD
   - Cisco
   - Entra ID
   - Linux
   - Microsoft SQL Server
   - Oracle
   - Palo Alto PanOS
   - Secret Vault
   - Website
   - Windows
1. Select **Okay**.

{/* TODO screenshot: Change Platform dialog with the Platform dropdown open */}

## Change the service account of resources

Change the service account when the account that reaches a resource changes or when a resource uses the wrong account. Add the account first on the Service Accounts page. See [Service accounts](/docs/privilegesecure/26.07/configuration/service-accounts/service-accounts.md).

1. Select **Resources** in the left navigation.
1. Select the checkbox of each resource to change.
1. Select **Change Service Account**.
1. In the **Service Account** dropdown, select the account that has credentials for the selected resources.
1. Select **Okay**.

## Related topics

- [Resource groups](/docs/privilegesecure/26.07/resources/resource-groups.md)
- [Protection policies](/docs/privilegesecure/26.07/resources/protection-policies.md)
- [Platforms](/docs/privilegesecure/26.07/resources/platforms/platforms.md)
