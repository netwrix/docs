# Permissions Job Group

The Permissions job group is comprised of data collection, analysis and reports that focus on access
granted to each mailbox in the environment including, Mailbox Rights, Active Directory Permissions,
Delegation, and Folder Permissions.

**_RECOMMENDED:_** Schedule the Permissions job group to run weekly on Fridays at 6 PM.

![Permissions Job Group in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/jobstree.png)

The job groups and jobs in the Permissions job group are:

- [0. Collection Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/mailboxes/permissions/collection/overview.md)
  – Comprised of data collection and analysis that focus on access granted to each mailbox in the
  environment including: Mailbox Rights, Active Directory Permissions, Delegation, and Folder
  Permissions
- [EX_AdminGroups Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/mailboxes/permissions/ex_admingroups.md)
  – Provides visibility into the direct and effective membership of Exchange Administrative groups
- [EX_MailboxAccess Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/mailboxes/permissions/ex_mailboxaccess.md)
  – Provides visibility into access granted to each mailbox in the environment taking into
  consideration Mailbox Rights, Active Directory Permissions, Delegation, and Folder Permissions
