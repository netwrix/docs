---
title: "AD_LoadBalancing Job"
description: "AD_LoadBalancing Job"
sidebar_position: 40
---

# AD_LoadBalancing Job

The AD_LoadBalancing Job analyzes each domain controller's traffic to show what percent of all LDAP,
Replication, Authentication and Changes are being handled by that particular machine. This helps to
highlight domain controllers which are over utilized relative to others within the domain, or unused
domain controllers which may be decommissioned.

## Analysis Task for the AD_LoadBalancing Job

Navigate to the **Active Directory** > **6.Activity** > **Operations** > **AD_LoadBalancing** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Task for the AD_LoadBalancing Job](/images/accessanalyzer/11.6/solutions/activedirectory/activity/operations/loadbalancinganalysis.webp)

The default analysis task is:

- Domain Controller Traffic – Creates the SA_AD_LoadBalancing_DomainControllers table accessible
  under the job’s Results node

In addition to the tables created by the analysis tasks, the AD_LoadBalancing Job produces the
follow pre-configured reports:

| Report             | Description                                                                                                                                 | Default Tags                                               | Report Elements                                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Controllers | This report identifies the distribution of change events and authentication events between domain controllers in the monitored environment. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: <ul><li>Bar Chart – Displays top DCs by authentication traffic</li><li>Bar Chart – Displays top DCs by change traffic</li><li>Table – Displays domain controller traffic details</li></ul> |
