---
title: "Active Directory Permissions Analyzer Solution"
description: "Active Directory Permissions Analyzer Solution"
sidebar_position: 50
---

# Active Directory Permissions Analyzer Solution

The Enterprise Auditor Active Directory Permissions Analyzer Solution enables organizations to
easily and automatically determine effective permissions applied to any and all Active Directory
(AD) objects. AD, Security, and Network Administrators can easily browse and compare information
from individual or multiple domains using comprehensive, preconfigured analyses and reports focused
on permissions associated with AD domains, organizational units, groups, users, and computers. These
capabilities enable them to obtain the most authoritative view of who has access to what in AD.

The Active Directory Permissions Analyzer Solution is located within the **Jobs** > **Active
Directory Permissions Analyzer** Job Group, which identifies permissions applied to computers,
groups, organizational units, and users.

**Supported Platforms**

- Windows Server 2016 and later
- Windows 2003 Forest level or higher

:::note
See the Microsoft
[Windows Server end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/deployoffice/endofsupport/windows-server-support)
article for additional information.
:::


**Requirements, Permissions, and Ports**

See the
[Domain Target Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/activedirectorypermissionsanalyzer/target.md)
topic for additional information.

**Location**

The Active Directory Permissions Analyzer requires a special Enterprise Auditor license. It can be
installed from the Instant Job Wizard, see the
[Instant Job Wizard](/docs/accessanalyzer/11.6/admin/jobs/instantjobs/overview.md)
topic for additional information. When purchased separately, the Permissions Analyzer Solution is
installed into the Jobs tree with the Active Directory instant solution. The license limits the
solution to just the **Jobs** > **Active Directory Permissions Analyzer** Job Group. Once installed
into the Jobs tree, navigate to the solution: **Jobs** > **Active Directory Permissions Analyzer**.
The 0.Collection Job Group collects the data. The other job groups run analysis on the collected
data and generate reports.

## Job Groups

The Active Directory Permissions Analyzer Solution is designed to provide visibility into Active
Directory permissions applied on all objects. Key information includes who can reset user passwords,
who can modify group membership, and who can replicate domain information.

The jobs which comprise the Active Directory Permissions Analyzer Job Group use the ADPermissions
Data Collector and the PowerShell Data Collector to return advanced security permissions and process
analysis tasks and generate reports. The collected data is then available to the Netwrix Access
Information Center for analysis.

![Active Directory Permissions Analyzer Solution Overview page](/images/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/overview.webp)

The job groups and jobs in the Active Directory Permissions Analyzer Solution are:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/collection/overview.md)
  – Collects all Active Directory permissions information from the targeted domain
- [1.Users Job Group](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/users/overview.md)
  – Reports on all Active Directory permissions applied to user objects within the targeted domains
- [2.Groups Job Group](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/groups/overview.md)
  – Reports on all Active Directory permissions applied to group objects within the targeted domains
- [3.OUs > AD_OUPermissions Job](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/ad_oupermissions.md)
  – Reports on all Active Directory permissions applied to organizational unit objects within the
  targeted domains
- [4.Computers Job Group](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/computers/overview.md)
  – Reports on all Active Directory permissions applied to computer objects within the targeted
  domains
- [5.Open Access > AD_OpenAccess Job](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/ad_openaccess.md)
  – Reports on all Active Directory permissions granting open access within the targeted domains.
  Open Access can be defined as access granted to security principals such as: Domain Users,
  Authenticated Users, and Everyone.
- [6.Broken Inheritance > AD_BrokenInheritance Job](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/ad_brokeninheritance.md)
  – Reports on all locations within Active Directory where inheritance is broken within the targeted
  domains
- [7.Containers Job Group](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/containers/overview.md)
  – Reports on all Active Directory permissions applied to container objects within the targeted
  domains
- [8.Domains Job Group](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/domains/overview.md)
  – Reports on all Active Directory permissions applied to domain objects within the targeted
  domains.
- [9.Sites Job Group](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/sites/overview.md)
  – Reports on all Active Directory permissions applied to domain objects within the targeted
  domains
- [AD_ShadowAccess Job](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/ad_shadowaccess.md)
  – Finds shadow access that leads to compromise of a domain or sensitive data. Attackers can chain
  vulnerabilities to escalate privileges from a non-privileged user to administrator with only a few
  steps. This job generates the shortest path between every non-privileged user to a domain
  administrative group, total domain compromise, or access to sensitive data.
