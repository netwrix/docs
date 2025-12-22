---
title: "5.Domains Job Group"
description: "5.Domains Job Group"
sidebar_position: 50
---

# 5.Domains Job Group

The 5.Domains Job Group provides details on domains, sites, and trusts, and highlight domain level
configurations that may leave your environment at risk.

![Domains Job Group](/images/accessanalyzer/11.6/solutions/activedirectory/domains/jobstree.webp)

The following components comprises the 5.Domains Job Group:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/activedirectory/domains/collection/overview.md)
  – Collects the data which will be further analyzed in order to provide details on domains, sites,
  and trusts.
- [AD_DCSummary Job](/docs/accessanalyzer/11.6/solutions/activedirectory/domains/ad_dcsummary.md)
  – Provides operational reporting related to the details collected for each domain controller. For
  each domain controller, the report identifies the FSMO role, whether it is a bridgehead server,
  whether it is a global catalog, and the time server it syncs to.
- [AD_DomainInfo Job](/docs/accessanalyzer/11.6/solutions/activedirectory/domains/ad_domaininfo.md)
  – Provides operational reporting related to the collected domains, sites, and trusts, providing
  details such as high level object counts by domain or site, domain and forest functional levels,
  and types and directions of trusts
- [AD_DSRMSettings Job](/docs/accessanalyzer/11.6/solutions/activedirectory/domains/ad_dsrmsettings.md)
  – Provides details on domain controller registry settings for the DSRMAdminLogonBehavior key. If
  this key is set to 1 or 2, the DSRM Admin Account can be used to log in to the domain controller
  even if it has not been started in DSRM which can present a potential security vulnerability.
  Additional information on this registry key is available in this
  [Microsoft Document](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732714(v=ws.10)?redirectedfrom=MSDN).
