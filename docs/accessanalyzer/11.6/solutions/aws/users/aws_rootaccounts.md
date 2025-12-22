---
title: "AWS_RootAccounts Job"
description: "AWS_RootAccounts Job"
sidebar_position: 30
---

# AWS_RootAccounts Job

The AWS_RootAccounts job provides details on AWS root accounts and how they conform to recommended
security practices.

## Analysis Tasks for the AWS_RootAccounts Job

Navigate to the **AWS** > **2.Users** > **AWS_RootAccounts** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AWS_RootAccounts Job](/images/accessanalyzer/11.6/solutions/aws/users/rootaccountsanalysis.webp)

The following analysis tasks are selected by default:

- Root Account Security Details – Provides details on the credentials and their usage for the AWS
  root account in each account. Creates the AWS_RootAccountSecurity_Details table accessible under
  the job’s Results node.
- Root Account Risk Assessment – Highlights security risks on AWS root accounts. Creates the
  AWS_RootAccountSecurity_RiskAssessment table accessible under the job’s Results node.
- Root Account Security Summary – Summarizes risks on the root account. Creates the
  AWS_RootAccountSecurity_Summary table accessible under the job’s Results node.

## Report for the AWS_RootAccounts Job

In addition to the tables and views created by the analysis task, the AWS_RootAccounts job produces
the following preconfigured report:

| Report                | Description                                                 | Default Tags | Report Element                                                                                                                                                                                                                                                                        |
| --------------------- | ----------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Root Account Security | This report highlights security risks on AWS Root Accounts. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays top account security by org</li><li>Table – Shows account security by Org</li><li>Table – Provides details on risk assessment</li><li>Table – Provides details on account security</li></ul> |
