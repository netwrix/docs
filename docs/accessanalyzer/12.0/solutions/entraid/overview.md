---
title: "Entra ID Solution"
description: "Entra ID Solution"
sidebar_position: 110
---

# Entra ID Solution

The Entra ID Solution is a comprehensive set of audit jobs and reports that provide the information
regarding Microsoft Entra ID configuration, operational management, and troubleshooting. The jobs
within this group help pinpoint potential areas of administrative and security concerns related to
Microsoft Entra ID users and groups, including syncing with on-premises Active Directory.

**Supported Platforms**

- Microsoft Entra ID (formerly Azure AD)

**Requirements, Permissions, and Ports**

See the [Microsoft Entra ID Tenant Target Requirements](/docs/accessanalyzer/12.0/requirements/entraid/entraid/overview.md) topic
for additional information.

**Location**

The Entra ID Solution requires a special Access Analyzer license. It can be installed from the
Instant Job Wizard, see the [Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md) topic for
additional information. Once it has been installed into the Jobs tree, navigate to the solution:
**Jobs** > **Entra ID**.

The .Entra ID Inventory Job Group collects the data. The Entra ID Job Groups run analysis and
generate reports on the collected data.

## Job Groups

![Entra ID Job Group Overview page](/images/accessanalyzer/12.0/solutions/entraid/overviewpage.webp)

The job groups in the Entra ID Solution are:

- [1.Groups Job Group](/docs/accessanalyzer/12.0/solutions/entraid/groups/overview.md) – Identifies group conditions and pinpoints potential
  areas of administrative concern
- [2.Users Job Group](/docs/accessanalyzer/12.0/solutions/entraid/users/overview.md) – Identifies areas of administrative concern related to
  Microsoft Entra ID users
