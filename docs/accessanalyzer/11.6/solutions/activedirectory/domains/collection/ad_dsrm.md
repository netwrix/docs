---
title: "AD_DSRM Job"
description: "AD_DSRM Job"
sidebar_position: 20
---

# AD_DSRM Job

The **0.Collection > AD_DSRM** Job collects data related to domain controller registry settings for
the DSRMAdminLogonBehavior key. If this key is set to 1 or 2, the DSRM Admin Account can be used to
log in to the domain controller even if it has not been started in DSRM which can present a
potential security vulnerability. Additional information on this registry key is available in this
[Microsoft Document](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732714(v=ws.10)?redirectedfrom=MSDN).

## Query for the AD_DSRM Job

The AD_TimeSync Job uses the Registry Data Collector for the following query:

:::warning
Do not modify this query. The query is preconfigured for this job.
:::


![Query Selection](/images/accessanalyzer/11.6/solutions/activedirectory/domains/collection/dsrmquery.webp)

The queries for this job are:

- Check LSA registry keys – Targets all domain controllers check LSA registry keys
    - See the
      [Registry Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/registry.md)
      topic for additional information.
