# 1.Groups Job Group

The 1.Groups Job Group identifies effective group membership and pinpoints potential areas of
administrative concern such as nested or stale groups.

![1.Groups Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following jobs comprise the 1.Groups Job Group:

- [AD_CircularNesting Job](/docs/accessanalyzer/12.0/solutions/active-directory/groups/ad-circular-nesting.md) – Identifies circularly nested groups within
  Active Directory which can pose administrative and operational challenges with identifying
  effective access to resources
- [AD_DCLogonGroups Job](/docs/accessanalyzer/12.0/solutions/active-directory/groups/ad-dc-logon-groups.md) – Identifies users who are able to log on to Domain
  Controllers through effective membership to the Enterprise Admins, Domain Admins, Administrators,
  Backup Operators, Account Operators, Print Operators, or Remote Desktop Users groups. This type of
  access should be limited to only those individuals who require this level of administrative
  privileges.
- [AD_DuplicateGroups Job](/docs/accessanalyzer/12.0/solutions/active-directory/groups/ad-duplicate-groups.md) – Identifies duplicate groups within Active
  Directory. Duplicate groups contain the same group membership as one another and are suitable
  candidates for cleanup.
- [AD_EmptyGroups Job](/docs/accessanalyzer/12.0/solutions/active-directory/groups/ad-empty-groups.md) – Identifies empty and single member groups which are
  suitable candidates for consolidation or cleanup
- [AD_GroupProbableOwners Job](/docs/accessanalyzer/12.0/solutions/active-directory/groups/ad-group-probable-owners.md) – Determines potential owners for Active
  Directory Groups which can be used to perform automated membership reviews and enable self-service
  group management and membership requests
- [AD_LargestGroups Job](/docs/accessanalyzer/12.0/solutions/active-directory/groups/ad-largest-groups.md) – Identifies groups with large effective member
  counts. These types of groups may cause administrative overhead and burden in being able to easily
  understand who is getting access to resources, or how much access is being granted to resources
  through these groups.

  - The definition of a large group is set by the **.Active Directory Inventory** >
    **3-AD_Exceptions** Job. It can be customized. See the
    [3-AD_Exceptions Job](/docs/accessanalyzer/12.0/solutions/active-directory-inventory/3-ad-exceptions.md) topic for additional
    information.

- [AD_MailSecurityGroups Job](/docs/accessanalyzer/12.0/solutions/active-directory/groups/ad-mail-security-groups.md) – Identifies mail-enabled security groups
  within Active Directory
- [AD_NestedGroups Job](/docs/accessanalyzer/12.0/solutions/active-directory/groups/ad-nested-groups.md) – Identifies nested groups within Active Directory and
  provides details such as the levels of nesting. While Active Directory provides the ability to
  nest certain types of groups within other groups, Microsoft recommends nesting does not go beyond
  two levels in order to avoid difficulties in understanding effective membership and access.

  - The definition of a deeply nested group is set by the **.Active Directory Inventory** >
    **3-AD_Exceptions** Job. It can be customized. See the
    [3-AD_Exceptions Job](/docs/accessanalyzer/12.0/solutions/active-directory-inventory/3-ad-exceptions.md) topic for additional
    information.

- [AD_SensitiveSecurityGroups Job](/docs/accessanalyzer/12.0/solutions/active-directory/groups/ad-sensitive-security-groups.md) – Identifies users who are granted
  administrative access within Active Directory through membership to the Enterprise Admins, Domain
  Admins, Schema Admins, DNS Admins, or Administrators groups. This level of access should be
  limited to only those individuals who require this level of administrative privileges.
- [AD_StaleGroups Job](/docs/accessanalyzer/12.0/solutions/active-directory/groups/ad-stale-groups.md) – Identifies groups that contain potentially stale users.
  Users are considered stale if they have never logged onto the domain, have not logged onto the
  domain in the past 60 days, or are disabled. These group memberships should be reviewed and
  possibly removed.

  - The definition of a stale user” is set by the **.Active Directory Inventory** >
    **3-AD_Exceptions** Job. It can be customized. See the
    [3-AD_Exceptions Job](/docs/accessanalyzer/12.0/solutions/active-directory-inventory/3-ad-exceptions.md) topic for additional
    information.
