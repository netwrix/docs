# Privileged Accounts Job Group

The Privileged Accounts Job Group highlights the activity performed by this accounts, to identify
potential abuses or unused accounts which can be deprovisioned.

![Privileged Accounts Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following Jobs make up the Privileged Accounts Job Group:

**_RECOMMENDED:_** Schedule these jobs to run with the 0.Collection job group.

- [AD_AdminAccounts Job](/docs/accessanalyzer/12.0/solutions/active-directory/activity/privileged-accounts/ad-admin-accounts.md) – Shows all actions taken by domain administrators
  within the environment being compromised
- [AD_ServiceAccountAuth Job](/docs/accessanalyzer/12.0/solutions/active-directory/activity/privileged-accounts/ad-service-account-auth.md) – Shows the last time a service account,
  identified by the presence of a servicePrincipalName, was active within the environment
