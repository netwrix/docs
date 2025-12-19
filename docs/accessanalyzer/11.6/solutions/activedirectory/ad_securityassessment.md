---
title: "AD Security Assessment Job"
description: "AD Security Assessment Job"
sidebar_position: 80
---

# AD Security Assessment Job

The AD_SecurityAssessment Job performs checks against Active Directory security best practices in
order to proactively identify critical security configurations that leave Active Directory
vulnerable to attack. The result are reports that provide a listing of findings by severity and
category with corresponding details that can be used to prioritize and remediate security issues.

![AD Security Assessment Job](/images/accessanalyzer/11.6/solutions/activedirectory/securityassessmentjobstree.webp)

## Recommended Configurations for the AD_SecurityAssessment Job

**Dependencies**

One or more of the following job groups or jobs must be run to produce results:

- .Active Directory Inventory Job Group
- Active Directory Job Group

    - Active Directory > 1.Groups > AD_SensitiveSecurityGroups
    - Active Directory > 2.Users > AD_PasswordStatus
    - Active Directory > 2.Users > AD_ServiceAccounts
    - Active Directory > 2.Users > AD_WeakPasswords
    - Active Directory > 2.Users > AD_SIDHistory
    - Active Directory > 2.Users > AD_UserDelegation
    - Active Directory > 3.Computers > AD_ComputerDelegation
    - Active Directory > 4.Group Policy > AD_CPassword
    - Active Directory > 5.Domains > AD_DomainInfo

- Active Directory Permissions Analyzer Job Group

    - Active Directory Permissions Analyzer > 1.Users > AD_ResetPasswordPermissions
    - Active Directory Permissions Analyzer > 1.Users > AD_UserPermissions
    - Active Directory Permissions Analyzer > 2.Groups > AD_GroupMembershipPermissions
    - Active Directory Permissions Analyzer > 2.Groups > AD_GroupPermissions
    - Active Directory Permissions Analyzer > 3.OUs > AD_OUPermissions
    - Active Directory Permissions Analyzer > 4.Computers > AD_ComputerPermissions
    - Active Directory Permissions Analyzer > 4.Computers > AD_LAPSPermissions
    - Active Directory Permissions Analyzer > 7.Containers > AD_AdminSDHolder
    - Active Directory Permissions Analyzer > 7.Containers > AD_ContainerPermissions
    - Active Directory Permissions Analyzer > 8.Domains > AD_DomainReplication
    - Active Directory Permissions Analyzer > 9.Sites > AD_DCShadowPermissions

- Windows Job Group

    - Windows > Privileged Accounts > Service Accounts > SG_ServiceAccounts

:::note
If any of the above jobs are not completed, the AD_SecurityAssessment job will run but all
checks will not be assessed.
:::


**Target Host**

This job group does not collect data. No target host is required.

**Connection Profile**

No specific Connection Profile is required.

**Schedule Frequency**

Scheduled to run as desired

**History Retention**

History is not supported. Turning on history will cause issues with data analysis and reporting.

**Multi-console Support**

Multiple StealthAUDIT consoles are not supported. This job should be run from a single StealthAUDIT
console.

## Analysis Task for the AD_SecurityAssessment Job

Navigate to the **Jobs** > Active Directory > AD_SecurityAssessment > Configure node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/activedirectory/securityassessmentanalysis.webp)

The following non-configurable analysis task is selected by default:

- Summarize Audit Findings – Creates the AD_SecurityAssessment_Results table accessible under the
  job’s Results node.

In addition to the tables created by the analysis task, the AD_SecurityAssessment job produces the
following preconfigured report:

| Report                 | Description                                                                                                                   | Default Tags       | Report Elements                                                                                                                                                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AD Security Assessment | This report identifies security risks within a targeted Active Directory environment based on results of previously run jobs. | GDPR SOX PCI HIPAA | This report is comprised of four elements: <ul><li>Table – Provides Scope of Audit on domains</li><li>Pie Chart – Displays Findings by Severity</li><li>Table – Provides Findings by Category</li><li>Table – Provides Details on Risk</li></ul> |
