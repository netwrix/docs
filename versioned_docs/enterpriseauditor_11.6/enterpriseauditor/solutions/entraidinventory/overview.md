# .Entra ID Inventory Solution

The .Entra ID Inventory Solution is designed to inventory, analyze, and report on Microsoft Entra
ID. It provides essential user and group membership details to the Entra ID Solution. Key
information includes managers, email addresses, and direct memberships. Collected data helps an
organization identify toxic conditions like nested groups, circular nesting, disabled users, and
duplicate groups. The user and group information assists with understanding probable group
ownership, group memberships, largest groups, user status, attribute completion, and synchronization
status between on-premises Active Directory and Microsoft Entra ID.

Supported Platforms

- Microsoft Entra ID (formerly Azure AD)

Requirements, Permissions, and Ports

See the
[Microsoft Entra ID Tenant Target Requirements](/versioned_docs/enterpriseauditor_11.6/config/entraid/overview.md)
topic for additional information.

Location

The .Entra ID Inventory Solution is a core component of all Enterprise Auditor installations. It can
be installed from the Enterprise Auditor Instant Job Wizard. See the
[Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md)
topic for additional information. Navigate to the solution by expanding the Jobs tree and selecting
the **.Entra ID Inventory** Job Group. This group has been named in such a way to keep it at the top
of the Jobs tree.

## Jobs

![.Entra ID Inventory overview page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/runninginstances/overviewpage.png)

The jobs in the .Entra ID Inventory Solution are:

- [1-AAD_Scan Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/entraidinventory/1-aad_scan.md)
  – Provides essential Microsoft Entra ID User and Group membership details to several Enterprise
  Auditor built-in solution sets. Key information includes user status, user attributes, and group
  membership.
- [2-AAD_Exceptions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/entraidinventory/2-aad_exceptions.md)
  – Runs analysis on the collected data and identifies toxic conditions that exist within Microsoft
  Entra ID which may leave your environment at risk or add unnecessary administrative overhead

The data collection is conducted by the AzureADInventory Data Collector. See the
[Standard Reference Tables & Views for the AzureADInventory Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/azureadinventory/standardtables.md)
topic for database table information.

**NOTE:** This solution is required for SharePoint Online reports in the Netwrix Access Information
Center.
