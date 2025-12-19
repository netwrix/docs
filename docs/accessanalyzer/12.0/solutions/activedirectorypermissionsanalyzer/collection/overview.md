---
title: "0.Collection Job Group"
description: "0.Collection Job Group"
sidebar_position: 20
---

# 0.Collection Job Group

The 0.Collection job group collects data on permissions applied to certificates, computers, groups,
organizational units, and users. It is dependent on data collected by the .Active Directory
Inventory job group. The jobs which comprise the 0.Collection job group process analysis tasks.

![0.Collection Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/jobstree.webp)

The jobs in the 0.Collection job group are:

- [AD_CertificateRights Job](/docs/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/ad_certificaterights.md) – Collects all Active Directory permissions
  applied to certificate objects within the targeted domains
- [AD_ComputerRights Job](/docs/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/ad_computerrights.md) – Collects all Active Directory permissions applied
  to computer objects within the targeted domains
- [AD_ContainerRights Job](/docs/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/ad_containerrights.md) – Collects all Active Directory permissions
  applied to container objects within the targeted domains
- [AD_DomainRights Job](/docs/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/ad_domainrights.md) – Collects all Active Directory permissions applied to
  domain objects within the targeted domains
- [AD_GroupRights Job](/docs/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/ad_grouprights.md) – Collects all Active Directory permissions applied to
  group objects within the targeted domains
- [AD_OURights Job](/docs/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/ad_ourights.md) – Collects all Active Directory permissions applied to group
  objects within the targeted domains
- [AD_SiteRights Job](/docs/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/ad_siterights.md) – Collects all Active Directory permissions applied to site
  objects within the targeted domains
- [AD_UserRights Job](/docs/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/ad_userrights.md) – Collects all Active Directory permissions applied to user
  objects within the targeted domains
