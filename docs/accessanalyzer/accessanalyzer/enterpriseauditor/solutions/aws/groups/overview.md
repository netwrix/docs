# 3.Groups Job Group

The 3.Groups job group provides details on AWS IAM group membership, orphaned groups (those with no policy assigned to them), sensitive security group membership, and stale groups.

![3.Groups Job Group in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.png)

The 3.Groups job group is comprised of:

- [AWS\_GroupMembers Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/groups/aws_groupmembers.md) – Provides details about group members and the policies assigned to those groups
- [AWS\_NoPolicyGroups Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/groups/aws_nopolicygroups.md) – Provides details on groups that have no policies assigned to them
- [AWS\_StaleGroups Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/groups/aws_stalegroups.md) – Highlights groups that have members that are considered stale
