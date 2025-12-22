---
title: "AD_DSRMSettings Job"
description: "AD_DSRMSettings Job"
sidebar_position: 50
---

# AD_DSRMSettings Job

The AD_DRSMSettings Job provides details on domain controller registry settings for the
DSRMAdminLogonBehavior key. If this key is set to 1 or 2, the DSRM Admin Account can be used to log
in to the domain controller even if it has not been started in DSRM which can present a potential
security vulnerability. Additional information on this registry key is available in this
[Microsoft Document](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732714(v=ws.10)?redirectedfrom=MSDN).

## Analysis Tasks for the AD_DSRMSettings Job

Navigate to the **Active Directory > 5.Domains > AD_DSRMSettings > Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![dsrmsettingsanalysis](/images/accessanalyzer/12.0/solutions/activedirectory/domains/dsrmsettingsanalysis.webp)

The default analysis tasks are:

- Change tracking – Creates the SA_AD_DSRMSettings_ChangeTracking table accessible under the job’s
  Results node
- Details – Creates the SA_AD_DSRMSettings_Details table accessible under the job’s Results node
- Summary – Creates the SA_AD_DSRMSettings_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_DSRMSettings Job produces
the following pre-configured report:

| Report              | Description                                                                                                                                                                                                                                                                                                                                                                                                                               | Default Tags | Report Elements                                                                                                                                                                |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DSRM Admin Security | This report highlights domain controller registry settings for the DSRMAdminLogonBehavior key. If this key is set to 1 or 2, the DSRM Admin account can be used to log in to the domain controller even if it has not been started in DSRM. This is a potential vulnerability. See the Microsoft [Restartable AD DS Step-by-Step Guide](https://technet.microsoft.com/en-us/library/cc732714(v=ws.10).aspx) for additional information.   | None         | This report is comprised of two elements: <ul><li>Pie Chart – Displays DSRM admin logon  by domain controller</li><li>Table – Provides details on domain controllers</li></ul> |
