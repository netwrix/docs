---
title: "AWS_Accounts Job"
description: "AWS_Accounts Job"
sidebar_position: 10
---

# AWS_Accounts Job

The AWS_Accounts job provides detailed information about the accounts that exist in each AWS
Organization. This job also determines the AWS Master Account for each Organization. The AWS Master
Account can be set manually by adding a line for each Organization in the temporary table
#IdentitySourceAccount in the analysis task parameters for this job.

## Analysis Tasks for the AWS_Accounts Job

Navigate to the **AWS** > **1.Organizations** > **AWS_Accounts** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AWS_Accounts Job](/images/accessanalyzer/11.6/solutions/aws/organizations/accountsanalysis.webp)

The following analysis tasks are selected by default:

- AWS Account Details – Provides details for the AWS IAM accounts in the organization. Creates the
  AWS_Account_Details table accessible under the job’s Results node.
- AWS Account Summary – Summarizes AWS Accounts by organization. Creates the AWS_Account_Summary
  table accessible under the job’s Results node.

## Report for the AWS_Accounts Job

In addition to the tables and views created by the analysis task, the AWS_Accounts job produces the
following preconfigured report:

| Report   | Description                                                               | Default Tags | Report Element                                                                                                                                                                                            |
| -------- | ------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accounts | This report provides details on the IAM Accounts in the AWS Organization. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays top accounts by org</li><li>Table – Shows accounts by Org</li><li>Table – Provides details on accounts</li></ul> |
