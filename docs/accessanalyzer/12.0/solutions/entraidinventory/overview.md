---
title: ".Entra ID Inventory Solution"
description: ".Entra ID Inventory Solution"
sidebar_position: 20
---

# .Entra ID Inventory Solution

The .Entra ID Inventory Solution is designed to inventory, analyze, and report on Microsoft Entra
ID. It provides essential user and group membership details to the Entra ID Solution. Key
information includes managers, email addresses, and direct memberships. Collected data helps an
organization identify toxic conditions like nested groups, circular nesting, disabled users, and
duplicate groups. The user and group information assists with understanding probable group
ownership, group memberships, largest groups, user status, attribute completion, and synchronization
status between on-premises Active Directory and Microsoft Entra ID.

This solution also provides information on Microsoft Entra roles. This includes role definitions,
role assignments, security principals, scope (management groups, subscriptions, and resources), and
effective role permissions.

**Supported Platforms**

- Microsoft Entra ID (formerly Azure AD)

**Requirements, Permissions, and Ports**

See the [Microsoft Entra ID Tenant Target Requirements](/docs/accessanalyzer/12.0/requirements/entraid/entraid/overview.md) topic
for additional information.

**Location**

The .Entra ID Inventory Solution is a core component of all Access Analyzer installations. It can be
installed from the Access Analyzer Instant Job Wizard. See the
[Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md) topic for additional information.
Navigate to the solution by expanding the Jobs tree and selecting the **.Entra ID Inventory** Job
Group. This group has been named in such a way to keep it at the top of the Jobs tree.

## Jobs

![.Entra ID Inventory overview page](/images/accessanalyzer/12.0/solutions/entraidinventory/overviewpage.webp)

The jobs in the .Entra ID Inventory Solution are:

- [1-AAD_Scan Job](/docs/accessanalyzer/12.0/solutions/entraidinventory/1-aad_scan.md) – Provides essential Microsoft Entra ID User and Group membership
  details to several Access Analyzer built-in solution sets. Key information includes user status,
  user attributes, and group membership. This job also collects Microsoft Entra roles information.
- [2-AAD_Exceptions Job](/docs/accessanalyzer/12.0/solutions/entraidinventory/2-aad_exceptions.md) – Runs analysis on the collected data and identifies
  toxic conditions that exist within Microsoft Entra ID which may leave your environment at risk or
  add unnecessary administrative overhead

The data collection is conducted by the AzureADInventory and Entra data collectors. See the
[Standard Reference Tables & Views for the AzureADInventory Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/azureadinventory/standardtables.md)
topic for database table information.

:::note
This solution is required for SharePoint Online reports in the Netwrix Access Information
Center.

:::
