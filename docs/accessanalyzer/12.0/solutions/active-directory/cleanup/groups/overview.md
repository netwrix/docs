# 1.Groups Job Group

The 1.Groups Job Group provides a workflow to safely deprovision groups, as well as the ability to
stamp security groups with what resources they are given access to.

![1.Groups Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/solutions/activedirectory/cleanup/groups/groupsjobtree.webp)

The jobs in the 1.Groups Job Group are:

- [1.Deprovision Job Group](/docs/accessanalyzer/12.0/solutions/active-directory/cleanup/groups/deprovision/overview.md) – This job group provides a simple, automated
  workflow to deprovision stale groups

  - [AD_DeprovisionGroups Job](/docs/accessanalyzer/12.0/solutions/active-directory/cleanup/groups/deprovision/ad-deprovision-groups.md) – This job provides a simple
    automated workflow to deprovision stale groups
  - [AD_DeprovisionGroups_Status Job](/docs/accessanalyzer/12.0/solutions/active-directory/cleanup/groups/deprovision/ad-deprovision-groups-status.md) – This job
    tracks and reports on the progress of the deprovisioning workflow

- [2.Group Stamping Job Group](/docs/accessanalyzer/12.0/solutions/active-directory/cleanup/groups/stamping/overview.md) – This job group updates the Notes attribute
  for all security groups to show where the group is provisioned inside the environment.

  - [AD_GroupCleanup_Permissions Job](/docs/accessanalyzer/12.0/solutions/active-directory/cleanup/groups/stamping/ad-group-cleanup-permissions.md) – This job reports
    on where security groups are being used to assign permissions. This can be used to prioritize
    remediation for groups that are rarely used.
  - [AD_GroupStamping Job](/docs/accessanalyzer/12.0/solutions/active-directory/cleanup/groups/stamping/ad-group-stamping.md) – This job replaces the Notes attribute
    for all security groups to show where the group is provisioned inside the environment. This
    overwrites the Notes field with data from Access Analyzer.

Workflow

**Step 1 –** Ensure the following prerequisites are met:

- The .Active Directory Inventory Job Group needs to be successfully run
- For the AD_DeprovisionGroups Job, the target OU needs to be manually set in the Move Groups Action
  Task prior to executing the actions. See the
  [Action Tasks for the AD_DepvisionGroups Job](/docs/accessanalyzer/12.0/solutions/active-directory/cleanup/groups/deprovision/ad-deprovision-groups.md#action-tasks-for-the-ad_depvisiongroups-job)
  topic for additional information.
- The AD_DeprovisionGroups Job needs to be run prior to running the AD_DeprovisionGroups_Status Job

**Step 2 –** Schedule the 1.Groups Job Group to run as desired after the prerequisites have been
satisfied.

**Step 3 –** Review the reports generated by the 1.Groups Job Group.
