---
title: "0.Collection Job Group"
description: "0.Collection Job Group"
sidebar_position: 20
---

# 0.Collection Job Group

The **5.Domains > 0.Collection** Job Group collects the data which will be further analyzed in order
to provide details on domains, sites, and trusts.

![0.Collection Job Group](/images/accessanalyzer/12.0/solutions/activedirectory/domains/collection/collectionjobstree.webp)

The 0.Collection Job Group is comprised of:

- [AD_DomainControllers Job](/docs/accessanalyzer/12.0/solutions/activedirectory/domains/collection/ad_domaincontrollers.md) – Collects domain controller details which
  will be further analyzed in order to provide information on domains, sites, and trusts.
- [AD_DSRM Job](/docs/accessanalyzer/12.0/solutions/activedirectory/domains/collection/ad_dsrm.md) – Collects data related to domain controller registry settings for the
  DSRMAdminLogonBehavior key. If this key is set to 1 or 2, the DSRM Admin Account can be used to
  log in to the domain controller even if it has not been started in DSRM which can present a
  potential security vulnerability. Additional information on this registry key is available in this
  [Microsoft Document](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732714(v=ws.10)?redirectedfrom=MSDN).
- [AD_TimeSync Job](/docs/accessanalyzer/12.0/solutions/activedirectory/domains/collection/ad_timesync.md) – Collects TimeSync information from the registry for each
  domain controller within the domain
