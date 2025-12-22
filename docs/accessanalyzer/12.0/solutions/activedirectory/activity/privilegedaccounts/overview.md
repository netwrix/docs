---
title: "Privileged Accounts Job Group"
description: "Privileged Accounts Job Group"
sidebar_position: 80
---

# Privileged Accounts Job Group

The Privileged Accounts Job Group highlights the activity performed by this accounts, to identify
potential abuses or unused accounts which can be deprovisioned.

![Privileged Accounts Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/activedirectory/activity/privilegedaccounts/jobstree.webp)

The following Jobs make up the Privileged Accounts Job Group:

:::info
Schedule these jobs to run with the 0.Collection job group.
:::


- [AD_AdminAccounts Job](/docs/accessanalyzer/12.0/solutions/activedirectory/activity/privilegedaccounts/ad_adminaccounts.md) – Shows all actions taken by domain administrators
  within the environment being compromised
- [AD_ServiceAccountAuth Job](/docs/accessanalyzer/12.0/solutions/activedirectory/activity/privilegedaccounts/ad_serviceaccountauth.md) – Shows the last time a service account,
  identified by the presence of a servicePrincipalName, was active within the environment
