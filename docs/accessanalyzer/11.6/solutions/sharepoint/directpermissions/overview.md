---
title: "1.Direct Permissions Job Group"
description: "1.Direct Permissions Job Group"
sidebar_position: 30
---

# 1.Direct Permissions Job Group

The **SharePoint** > **1.Direct Permissions** Job Group provides insight into how directly applied
permissions are configured within the targeted SharePoint environment. It is dependent on data
collected by the
[SharePoint Access Auditing](/docs/accessanalyzer/11.6/solutions/sharepoint/collection/overview.md#sharepoint-access-auditing)
or
[SharePoint Sensitive Data Discovery Auditing (SEEK)](/docs/accessanalyzer/11.6/solutions/sharepoint/collection/overview.md#sharepoint-sensitive-data-discovery-auditing-seek)
components of the
[0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/sharepoint/collection/overview.md).
The jobs which comprise the 1.Direct Permissions Job Group process analysis tasks and generate
reports.

![1.Direct Permissions Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/sharepoint/directpermissions/jobstree.webp)

The 1.Direct Permissions Job Group is comprised of:

- [SP_DomainUsers Job](/docs/accessanalyzer/11.6/solutions/sharepoint/directpermissions/sp_domainusers.md)
  – Identifies locations where there are domain users directly applied on permissions. Best
  practices dictate that groups should be used to provide access to resources.
- [SP_EmptyDomainGroupPerms Job](/docs/accessanalyzer/11.6/solutions/sharepoint/directpermissions/sp_emptydomaingroupperms.md)
  – Identifies empty security groups with directly assigned permissions to resources, these groups
  should be deleted from SharePoint farms, where found. Inadvertent changes to group membership may
  open up unwanted access.
- [SP_HighRiskPermissions Job](/docs/accessanalyzer/11.6/solutions/sharepoint/directpermissions/sp_highriskpermissions.md)
  – Identifies where Authenticated Users, Everyone Except External Users, Anonymous Logon, or Domain
  users have been directly assigned permissions
- [SP_SiteCollectionPerms Job](/docs/accessanalyzer/11.6/solutions/sharepoint/directpermissions/sp_sitecollectionperms.md)
  – Most content will inherit the permissions configured at the root of the site collection. Having
  an understanding of how those permissions are assigned is useful for gaining perspective on the
  overall SharePoint permission configuration.
- [SP_StaleUsers Job](/docs/accessanalyzer/11.6/solutions/sharepoint/directpermissions/sp_staleusers.md)
  – Identifies locations where there are stale users directly applied on SharePoint resources. These
  permissions can be safely removed.
- [SP_UnresolvedSIDs Job](/docs/accessanalyzer/11.6/solutions/sharepoint/directpermissions/sp_unresolvedsids.md)
  – Identifies Unresolved SIDs that have permissions to any SharePoint resources. Unresolved SIDs
  can be safely cleaned up without affecting user access.
