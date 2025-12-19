---
title: "AD_ServiceAccounts Job"
description: "AD_ServiceAccounts Job"
sidebar_position: 60
---

# AD_ServiceAccounts Job

The AD_ServiceAccounts Job offers information about service accounts and if they are vulnerable to
Kerberoasting. An account is deemed vulnerable to a Kerberoasting attack if the
msDS-SupportedEncryptionTypes value supports RC4 as the highest encryption type.

:::tip
Remember, the 1-AD_Scan Job needs to be configured to collect these Custom Attributes:
:::


- servicePrincipalName – Provides service account information. See the Microsoft
  [Service Principal Names](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/cc961723(v=technet.10))
  article for additional information.
- msDS-SupportedEncryptionTypes – Identifies service accounts vulnerable to Kerberoasting attacks

## Analysis Task for the AD_ServiceAccounts Job

Navigate to the **Active Directory** > **2.Users** > **AD_ServiceAccounts** > **Configure** node and
select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Task for the AD_ServiceAccounts Job](/images/accessanalyzer/12.0/solutions/activedirectory/users/serviceaccountsanalysis.webp)

The default analysis tasks are:

- Password Status Details – Creates the SA_AD_ServiceAccounts_Details table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis task, the AD_ServiceAccounts Job
produces the following pre-configured report:

| Report           | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Service Accounts | This report provides details on service accounts in the audited environment. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays service accounts by domain</li><li>Table – Provides details on service accounts</li><li>Table – Provides details on service accounts by domain</li></ul> |
