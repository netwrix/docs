---
title: "Entra Data Collector"
description: "Entra Data Collector"
sidebar_position: 130
---

# Entra Data Collector

The Entra data collector collects Microsoft Entra roles information from the target Microsoft Entra
tenant. This data collector is preconfigured in the .Entra ID Inventory solution.

Both this data collector and the .Entra Inventory solution are available with all Access Analyzer
license options. See the
[.Entra ID Inventory Solution](/docs/accessanalyzer/12.0/solutions/entraidinventory/overview.md) topic for additional
information.

**Protocols**

- HTTP
- HTTPS
- REST

**Ports**

- TCP 80 and 443

**Permissions**

- Microsoft Graph API Application permissions:

    - RoleManagement.Read.Directory

- Resource Manager permissions:

    - Microsoft.Authorization/roleAssignments/read
    - Microsoft.Authorization/roleDefinitions/read
    - Microsoft.Resources/resources/read
    - Microsoft.Resources/subscriptions/read
    - Microsoft.Resources/subscriptions/resources/read
    - Microsoft.Resources/subscriptions/resourceGroups/read
    - Microsoft.Authorization/providerOperations/read
    - Microsoft.Management/managementGroups/read

## Query Configuration

The Entra data collector is configured through the Entra Data Collector Wizard, which contains the
following wizard pages:

- [Entra: Scan options](/docs/accessanalyzer/12.0/admin/datacollector/entra/options.md)
- [Entra: Results](/docs/accessanalyzer/12.0/admin/datacollector/entra/results.md)
- [Entra: Summary](/docs/accessanalyzer/12.0/admin/datacollector/entra/summary.md)
