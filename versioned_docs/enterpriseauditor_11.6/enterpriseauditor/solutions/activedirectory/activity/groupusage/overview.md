# Group Usage Job Group

The Group Usage Job Group reports shows how group membership changes have affected access across the
entire environment, the actions taken by the members of a group, and identifies where groups may be
used for authorization in applications.

![Group Usage Job Group in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/jobstree.png)

The following Jobs make up the Group Usage Job Group:

**_RECOMMENDED:_** Schedule these jobs to run with the 0.Collection job group.

- [AD_AccessChanges Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/activity/groupusage/ad_accesschanges.md)
  – Reports on activity relating to access changes for Active Directory groups, highlighting
  membership changes that have created large access change within the environment
- [AD_GroupHosts Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/activity/groupusage/ad_grouphosts.md)
  – Reports on what hosts groups are being used on within the environment
- [AD_GroupMemberActivity Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/activity/groupusage/ad_groupmemberactivity.md)
  – Reports on the activity that group members are taking within the Active Directory environment
