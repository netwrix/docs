---
title: "Active Directory Solution"
description: "Active Directory Solution"
sidebar_position: 40
---

# Active Directory Solution

The Active Directory solution is a comprehensive set of audit jobs and reports that provide the
information administrators need for Active Directory configuration, operational management,
troubleshooting, analyzing effective permissions, and tracking who is making what changes within an
organization.

**Supported Platforms**

- Windows Server 2016 and later
- Windows 2003 Forest level or higher

:::note
See the Microsoft
[Windows Server end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/deployoffice/endofsupport/windows-server-support)
article for additional information.
:::


**Requirements, Permissions, and Ports**

See the [Active Directory Domain Target Requirements](/docs/accessanalyzer/12.0/requirements/activedirectory/target/overview.md)
topic for additional information.

**Location**

The Active Directory Solution requires a special Access Analyzer license. It can be installed from
the Access Analyzer Instant Job Wizard. See the
[Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md) topic for additional information.
Once installed into the Jobs tree, navigate to the solution: **Jobs** > **Active Directory**.

![Active Directory Solution](/images/accessanalyzer/12.0/solutions/activedirectory/solutionoverview.webp)

Each job group works independently from the other job groups. Some job groups run analysis tasks
against the analyzed data collected by the .Active Directory Inventory Solution to generate reports,
for example the 1.Groups job group. Other job groups run both data collection and analysis to
generate reports. The AD_SecurityAssessment job summarizes security related results from both the
Active Directory solution and the Active Directory Permissions Analyzer solution.

:::note
The Cleanup job group requires additional licenses to function. See the
[Active Directory Job Groups](#active-directory-job-groups) topic for additional information.
:::


## Active Directory Job Groups

The Active Directory solution is a comprehensive set of audit jobs and reports that provide the
information every administrator needs for Active Directory configuration, operational management,
troubleshooting, analyzing effective permissions, and tracking who is making what changes within an
organization.

![Active Directory Job Group](/images/accessanalyzer/12.0/solutions/activedirectory/adsolutionjobgroup.webp)

The following job groups comprise the Active Directory solution:

- [1.Groups Job Group](/docs/accessanalyzer/12.0/solutions/activedirectory/groups/overview.md) – Identifies effective group membership and pinpoints
  potential areas of administrative concern such as nested or stale groups
- [2.Users Job Group](/docs/accessanalyzer/12.0/solutions/activedirectory/users/overview.md) – Identifies user conditions and pinpoint potential areas
  of administrative concern such as weak passwords, user token size, or stale users
- [3.Computers Job Group](/docs/accessanalyzer/12.0/solutions/activedirectory/computers/overview.md) – Pinpoints potential areas of administrative
  concern related to computer accounts, including stale computers and computers that have been
  trusted for delegation
- [4.Group Policy Job Group](/docs/accessanalyzer/12.0/solutions/activedirectory/grouppolicy/overview.md) – Audits GPOs and their settings, and provides
  in depth analysis of conditions such as where GPOs have been linked, misconfigurations that can
  cause security or operational issues, and redundant GPOs that can be consolidated
- [5.Domains Job Group](/docs/accessanalyzer/12.0/solutions/activedirectory/domains/overview.md) – Provides details on domains, sites, and trusts, and
  highlight domain level configurations that may leave your environment at risk
- [6.Activity Job Group](/docs/accessanalyzer/12.0/solutions/activedirectory/activity/overview.md) – Provides insights into access sprawl, privileged
  account usage, and operational health of the Active Directory environment. Information collected
  includes Active Directory Changes, Authentication, LDAP Traffic, Replication Traffic, and
  LSASS.EXE process injection on domain controllers

    - Requires the Active Directory Activity license feature to function

- [7.Certificate Authority Job Group](/docs/accessanalyzer/12.0/solutions/activedirectory/certificateauthority/overview.md) – Collects settings,
  permissions, and configurations for Certificate Authorities. It details access rights for the
  Certificate Authority and reports on certificate requests, highlighting any that might expire
  soon.
- [Cleanup Job Group](/docs/accessanalyzer/12.0/solutions/activedirectory/cleanup/overview.md) – Identifies potential stale and unused users, computers,
  and groups as well as issues with group membership. Remediation workflows are included to
  de-provision unnecessary objects to help increase security and reduce complexity.

    - Requires the Active Directory Actions license feature to function
    - Requires the Active Directory Actions Module to be installed

- [AD Security Assessment Job](/docs/accessanalyzer/12.0/solutions/activedirectory/ad_securityassessment.md) – Summarizes security related results from
  the Active Directory solution and the Active Directory Permissions Analyzer solution

Since each job group within the Active Directory solution is designed to run independently, refer to
the Recommended Configurations topic for each job group, for information on frequency and job group
settings.
