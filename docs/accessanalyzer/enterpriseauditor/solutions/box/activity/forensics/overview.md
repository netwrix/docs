# Forensics Job Group

The Forensics Job Group highlights deletions, file downloads, permissions changes, external user
activity, collaboration activity and high-risk collaborations within the targeted Box environment.
It is dependent on data collected by the 0.Collection Job Group, also housed in the Box Job Group.
The jobs that comprise the 1.Activity Job Group process analysis tasks and generate a report.

![Forensics Job Group in the Jobs Tree](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

The Forensics Job Group is comprised of:

- [Box_Deletions Job](box_deletions.md) – Provides details on file and folder deletions that have
  occurred over the past 30 days
- [Box_Downloads Job](box_downloads.md) – Provides details on file and folder deletions that have
  occurred over the past 30 days
- [Box_ExternalUserActivity Job](box_externaluseractivity.md) – Identifies and analyzes external
  user activity which has occurred over the past 30 days
- [Box_ExternalUserCollaborations Job](box_externalusercollaborations.md) – Identifies collaboration
  invites sent to external users. These collaborations should be reviewed to ensure sensitive data
  is not being shared outside of your organization.
- [Box_PermissionChanges Job](box_permissionchanges.md) – Provides details on permission changes
  that have occurred over the past 30 days
- [Box_Sharing Job](box_sharing.md) – Provides details on sharing activity that has occurred over
  the past 30 days
