---
title: "Resources Page"
description: "Resources Page"
sidebar_position: 50
---

# Resources Page

The Resources page shows information for onboarded resources, such as active and scheduled sessions,
policies, and service accounts for the host resources and domain. The Resources page displays the same information as the
[Resources Dashboard](/docs/privilegesecure/25.12/admin/dashboard/resources.md).

![Resources page](/images/privilegesecure/25.12/accessmanagement/admin/policy/page/resourcespage.webp)

The Resources table has the following features:

- Search — Searches the table or list for matches to the search string. 
- Filter by the type of resource in the drop-down: All, Host, Domain, Website, Azure AD, Secret Vault, or Database. 

- Add — Opens a list of available resources to add. The Add list contains the following options:

    - New Server — Opens the Add Resources window to onboard new servers. See the
      [Add Resources Window](/docs/privilegesecure/25.12/admin/interface/resources/addserver/addsourcesonboard.md) topic for additional
      information.
    - New Domain — Opens the Domain Details page for a new domain. See the
      [Add New Domain](/docs/privilegesecure/25.12/admin/interface/resources/domain.md) topic for additional information.
    - New Website — Opens the Website Details page for a new website. See the
      [Add New Website](/docs/privilegesecure/25.12/admin/interface/resources/website.md) topic for additional information.
    - New Microsoft Entra ID (formerly Azure AD) Tenant — Opens the Microsoft Entra ID Tenant
      Details page for a new tenant. See the
      [Add New Microsoft Entra ID Tenant](/docs/privilegesecure/25.12/admin/interface/resources/entraidtenant.md) topic for additional information.
    - New Secret Vault — Opens the Secret Vault Details page for a new vault. See the
      [Add Secret Vault](/docs/privilegesecure/25.12/admin/interface/resources/secretvault.md) topic for additional information.
    - New Database — Opens the Databse Details page for a new database. See the
      [Add New Database](/docs/privilegesecure/25.12/admin/interface/resources/database.md)topic for additional information.

- Remove — Removes the selected resource from being managed by the application. A confirmation
  window will display. See the [Remove Resource Window](/docs/privilegesecure/25.12/admin/interface/resources/removeresource.md) topic
  for additional information.
- Scan Resource — Scans a host resource for local users, groups, windows services, and scheduled
  tasks. A confirmation window will display.. See the [Platforms Page](/docs/privilegesecure/25.12/admin/interface/platforms/overview.md) topic
  for additional information.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Type — Icon indicates the type of object
- Resource — Displays the name of the resource. Click the link to view additional details. The
  details vary based on the type of resource.

    - [Host Details Page](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/host/host.md)
    - [Domain Details Page](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/domain/domain.md)
    - [Website Details Page](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/website/website.md)
    - [Microsoft Entra ID Details Page](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/entraid/entraid.md)
    - [Secret Vault Details Page](/docs/privilegesecure/25.12/admin/interface/resources/secretvault.md)
    - [Database Details Page](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/databases/databases.md)

- Operating System — Displays the operating system of the resource
- Active — Displays the number of active sessions on the resource
- Scheduled — Displays the number of sessions scheduled for the resource
- Access Policies — Displays the number of access policies associated with the resource
- Protection Policies — Displays the number of protection policies associated with the resource
- DNS Host Name — Displays the DNS host name for a host resource or the FQDN for a domain resource
- IP Address — Displays the IP address for the resource
- Domain — Displays the domain name for the resource. Click the link to view additional details. See
  the [Domain Details Page](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/domain/domain.md) topic for additional information.
- Service Account — Displays the service account associated with the resource. Click the link to
  view additional details. See the
  [Service Accounts Page](/docs/privilegesecure/25.12/admin/configuration/serviceaccounts/serviceaccounts.md) topic for additional
  information.
- Platform — Displays the type of platform, which defines the resource. See the
  [Platforms Page](/docs/privilegesecure/25.12/admin/interface/platforms/overview.md) topic for additional information.
- Last Scanned — Date timestamp for the last time the resource was scanned

The table columns can be resized and sorted in ascending or descending order.
