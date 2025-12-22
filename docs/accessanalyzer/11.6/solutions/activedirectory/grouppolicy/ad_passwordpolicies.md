---
title: "AD_PasswordPolicies Job"
description: "AD_PasswordPolicies Job"
sidebar_position: 50
---

# AD_PasswordPolicies Job

The AD_PasswordPolicies Job identifies fine-grained domain password policies that are stored within
the Password Settings Container. Fine-Grained password policies allow AD administrators to apply
different password policies within a single domain.

## Query for the AD_PasswordPolicies Job

The AD_PasswordPolicies Job uses the LDAP Data Collector for the following query:

:::warning
Do not modify the query. The query is preconfigured for this job.
:::


![Query for the AD_PasswordPolicies Job](/images/accessanalyzer/11.6/solutions/activedirectory/grouppolicy/passwordpoliciesquery.webp)

The query for this job is:

- Fine-grained Policies – Targets one domain controller per domain known to Enterprise Auditor to
  return fine-grained password policies

    - See the
      [LDAP Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/ldap.md)
      topic for additional information

## Analysis Task for the AD_PasswordPolicies Job

Navigate to the **Active Directory** > **4.GroupPolicy** > **AD_PasswordPolicies** > **Configure**
node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Task for the AD_PasswordPolicies Job](/images/accessanalyzer/11.6/solutions/activedirectory/grouppolicy/passwordpoliciesanalysis.webp)

The default analysis tasks are:

- Determine fine-grained password policy details – Creates the SA_AD_PasswordPolicies_Details table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the AD_UserDelegation Job produces
the following pre-configured report:

| Report                         | Description                                                                               | Default Tags | Report Elements                                                                                                             |
| ------------------------------ | ----------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Fine-Grained Password Policies | This report highlights fine-grained password policies on all targeted domain controllers. | None         | This report is comprised of one element: <ul><li>Table – Provides details on fine-grained password policy details</li></ul> |
