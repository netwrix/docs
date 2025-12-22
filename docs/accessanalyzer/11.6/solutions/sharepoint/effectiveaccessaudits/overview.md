---
title: "Effective Access Audits Job Group"
description: "Effective Access Audits Job Group"
sidebar_position: 110
---

# Effective Access Audits Job Group

This group returns reports identifying specific trustees’ effective access across the entire
SharePoint environment.

![Effective Access Audits Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/sharepoint/effectiveaccessaudits/jobstree.webp)

The Effective Access Audits Job Group is comprised of:

- [Scoping > SP_TrusteeAccess Job](/docs/accessanalyzer/11.6/solutions/sharepoint/effectiveaccessaudits/sp_trusteeaccess.md)
  – Scopes a list of users to audit their access across the SharePoint environment. This can also be
  accomplished by looking users up in the Access Information Center. However, it is recommended to
  use this job in scenarios where a report on multiple users’ effective access at once needs to be
  generated.
- [SP_TrusteeAudit Job](/docs/accessanalyzer/11.6/solutions/sharepoint/effectiveaccessaudits/sp_trusteeaudit.md)
  – Provides functionality similar to the Access Information Center by allowing scoped audits of
  users’ access across the environment

For the SP_TrusteeAccess Job, the host list is set to Local host at the Scoping Job Group level. The
assigned Connection Profile needs to have rights on the Enterprise Auditor Console server to access
the CSV file saved in the job’s directory. The Connection Profile should be set at the **Effective
Access Audits** > **Scoping** > **Settings** > **Connection** node.
