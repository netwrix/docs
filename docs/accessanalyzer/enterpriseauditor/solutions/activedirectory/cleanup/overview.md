# Cleanup Job Group

The **Active Directory** > **Cleanup** Job Group identifies potential stale and unused users,
computers, and groups as well as issues with group membership. Remediation workflows are included to
deprovision unnecessary objects.

**CAUTION:** Apply changes only to intended target Active Directory objects, and ensure only the
changes required are enabled. Enabling and executing action modules without consideration can
negatively impact Active Directory.

**_RECOMMENDED:_** Run the actions in a test environment before making changes to a production
environment.

![Cleanup Job Group Overview page](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/runninginstances/overviewpage.webp)

The job groups in the Cleanup Job Group are:

- [1.Groups Job Group](groups/overview.md) – Provides an automated workflow to safely deprovision
  groups, as well as the ability to stamp security groups with what resources they are given access
  to
- [2.Users Job Group](users/overview.md) – Provides an automated workflow to deprovision stale and
  unused user accounts
- [3.Computers Job Group](computers/overview.md) – Provides an automated workflow to deprovision
  stale computer accounts
- [AD_CleanupProgress Job](ad_cleanupprogress.md) – Tracks Active Directory computer, group, and
  user exceptions over time. This information can be used to provide a high-level picture of an
  organization's Active Directory cleanup effort.
