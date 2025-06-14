# 0. Collection Job Group

The 0. Collection job group is comprised of data collection and analysis that focus on access
granted to each mailbox in the environment including: Mailbox Rights, Active Directory Permissions,
Delegation, and Folder Permissions.

![0.Collection Job Group in the Jobs Tree](../../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.webp)

The jobs in the 0. Collection job group are:

- [EX_Delegates Job](ex_delegates.md) – Collects data from Active Directory to identify the
  delegates applied to a mailbox
- [EX_MBRights Job](ex_mbrights.md) – Collects data from Active Directory to identify the mailbox
  rights applied to a mailbox
- [EX_Perms Job](ex_perms.md) – Collects information about permissions applied to the folders within
  Exchange mailboxes
- [EX_SendAs Job](ex_sendas.md) – Collects data from Active Directory to identify the Active
  Directory rights applied to a mailbox
