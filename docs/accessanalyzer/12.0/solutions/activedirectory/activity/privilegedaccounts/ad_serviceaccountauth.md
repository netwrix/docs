---
title: "AD_ServiceAccountAuth Job"
description: "AD_ServiceAccountAuth Job"
sidebar_position: 20
---

# AD_ServiceAccountAuth Job

The AD_ServiceAccountAuth Job shows the last time a service account, identified by the presence of a
servicePrincipalName, was active within the environment.

## Analysis Task for the AD_ServiceAccountAuth Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **Operations** >
**AD_ServiceAccountAuth** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Task for the AD_ServiceAccountAuth Job](/images/accessanalyzer/12.0/solutions/activedirectory/activity/privilegedaccounts/serviceaccountauthanalysis.webp)

The following non-configurable analysis task is selected by default:

- Creates the SA_AD_ServiceAccountAuth_Details table accessible under the job’s Results node.

In addition to the tables created by the analysis tasks, the AD_ServiceAccountAuth Job produces the
follow pre-configured report:

| Report           | Description                                                                                                                                 | Default Tags                                               | Report Elements                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Service Accounts | Because many service accounts may not ever perform a logon, tracking authentication can be a better way to identify stale service accounts. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: <ul><li>Bar Chart– Displays stale service accounts</li><li>Table – Displays account details</li></ul> |
