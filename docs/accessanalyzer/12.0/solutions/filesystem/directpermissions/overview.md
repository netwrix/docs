---
title: "2.Direct Permissions Job Group"
description: "2.Direct Permissions Job Group"
sidebar_position: 40
---

# 2.Direct Permissions Job Group

The 2.Direct Permissions job group is designed to report on Direct Permissions information from
targeted file servers.

![2.Direct Permissions Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/filesystem/directpermissions/jobstree.webp)

The 2.Direct Permissions job group is comprised of:

- [FS_DomainUserACLs Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs_domainuseracls.md) – Reports on domain users that have been granted
  direct permissions on resources from targeted file servers
- [FS_HighRiskACLs Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs_highriskacls.md) – Reports on high risk security principals that have
  been granted direct permissions on resources from targeted file servers
- [FS_LocalUsersAndGroups Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs_localusersandgroups.md) – Reports on local users and groups that
  have been granted direct permissions on resources from targeted file servers
- [FS_MissingFullControl Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs_missingfullcontrol.md) – Reports on resources from targeted file
  servers that have no Full Control rights granted to it
- [FS_NestedShares Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs_nestedshares.md) – Reports on nested shares that have been granted direct
  permissions from targeted file servers
- [FS_SIDHistory Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs_sidhistory.md) – Reports on trustees that have a historical SID that has
  been granted direct permissions on resources from targeted file servers
- [FS_UnresolvedSIDs Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs_unresolvedsids.md) – Reports on unresolved SIDs that have been granted
  direct permissions on resources from targeted file servers
