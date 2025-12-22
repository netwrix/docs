---
title: "1.Groups Job Group"
description: "1.Groups Job Group"
sidebar_position: 10
---

# 1.Groups Job Group

The 1.Groups Job Group identifies effective group membership and pinpoints potential areas of
administrative concern such as nested or stale groups.

![1.Groups Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/activedirectory/groups/jobstree.webp)

The following jobs comprise the 1.Groups Job Group:

- [AD_CircularNesting Job](/docs/accessanalyzer/11.6/solutions/activedirectory/groups/ad_circularnesting.md)
  – Identifies circularly nested groups within Active Directory which can pose administrative and
  operational challenges with identifying effective access to resources
- [AD_DCLogonGroups Job](/docs/accessanalyzer/11.6/solutions/activedirectory/groups/ad_dclogongroups.md)
  – Identifies users who are able to log on to Domain Controllers through effective membership to
  the Enterprise Admins, Domain Admins, Administrators, Backup Operators, Account Operators, Print
  Operators, or Remote Desktop Users groups. This type of access should be limited to only those
  individuals who require this level of administrative privileges.
- [AD_DuplicateGroups Job](/docs/accessanalyzer/11.6/solutions/activedirectory/groups/ad_duplicategroups.md)
  – Identifies duplicate groups within Active Directory. Duplicate groups contain the same group
  membership as one another and are suitable candidates for cleanup.
- [AD_EmptyGroups Job](/docs/accessanalyzer/11.6/solutions/activedirectory/groups/ad_emptygroups.md)
  – Identifies empty and single member groups which are suitable candidates for consolidation or
  cleanup
- [AD_GroupProbableOwners Job](/docs/accessanalyzer/11.6/solutions/activedirectory/groups/ad_groupprobableowners.md)
  – Determines potential owners for Active Directory Groups which can be used to perform automated
  membership reviews and enable self-service group management and membership requests
- [AD_LargestGroups Job](/docs/accessanalyzer/11.6/solutions/activedirectory/groups/ad_largestgroups.md)
  – Identifies groups with large effective member counts. These types of groups may cause
  administrative overhead and burden in being able to easily understand who is getting access to
  resources, or how much access is being granted to resources through these groups.

    - The definition of a large group is set by the **.Active Directory Inventory** >
      **3-AD_Exceptions** Job. It can be customized. See the
      [3-AD_Exceptions Job](/docs/accessanalyzer/11.6/solutions/activedirectoryinventory/3-ad_exceptions.md)
      topic for additional information.

- [AD_MailSecurityGroups Job](/docs/accessanalyzer/11.6/solutions/activedirectory/groups/ad_mailsecuritygroups.md)
  – Identifies mail-enabled security groups within Active Directory
- [AD_NestedGroups Job](/docs/accessanalyzer/11.6/solutions/activedirectory/groups/ad_nestedgroups.md)
  – Identifies nested groups within Active Directory and provides details such as the levels of
  nesting. While Active Directory provides the ability to nest certain types of groups within other
  groups, Microsoft recommends nesting does not go beyond two levels in order to avoid difficulties
  in understanding effective membership and access.

    - The definition of a deeply nested group is set by the **.Active Directory Inventory** >
      **3-AD_Exceptions** Job. It can be customized. See the
      [3-AD_Exceptions Job](/docs/accessanalyzer/11.6/solutions/activedirectoryinventory/3-ad_exceptions.md)
      topic for additional information.

- [AD_SensitiveSecurityGroups Job](/docs/accessanalyzer/11.6/solutions/activedirectory/groups/ad_sensitivesecuritygroups.md)
  – Identifies users who are granted administrative access within Active Directory through
  membership to the Enterprise Admins, Domain Admins, Schema Admins, DNS Admins, or Administrators
  groups. This level of access should be limited to only those individuals who require this level of
  administrative privileges.
- [AD_StaleGroups Job](/docs/accessanalyzer/11.6/solutions/activedirectory/groups/ad_stalegroups.md)
  – Identifies groups that contain potentially stale users. Users are considered stale if they have
  never logged onto the domain, have not logged onto the domain in the past 60 days, or are
  disabled. These group memberships should be reviewed and possibly removed.

    - The definition of a stale user” is set by the **.Active Directory Inventory** >
      **3-AD_Exceptions** Job. It can be customized. See the
      [3-AD_Exceptions Job](/docs/accessanalyzer/11.6/solutions/activedirectoryinventory/3-ad_exceptions.md)
      topic for additional information.
