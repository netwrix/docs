---
title: "AWS_InlinePolicies Job"
description: "AWS_InlinePolicies Job"
sidebar_position: 20
---

# AWS_InlinePolicies Job

The AWS_InlinePolicies job provides details on customer managed policies that are directly assigned
to a user or group.

## Analysis Tasks for the AWS_InlinePolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS_InlinePolicies** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AWS_InlinePolicies Job](/images/accessanalyzer/11.6/solutions/aws/policies/inlinepoliciesanalysis.webp)

The following analysis tasks are selected by default:

- Inline Policy Details – Provides details for AWS Inline Policies. Creates the
  AWS_InlinePolicy_Details table accessible under the job’s Results node.
- Inline Policy Summary – Summarizes AWS Inline Policies by organization. Creates the
  AWS_InlinePolicy_Summary table accessible under the job’s Results node.

## Report for the AWS_InlinePolicies Job

In addition to the tables and views created by the analysis task, the AWS_InlinePolicies job
produces the following pre-configured report:

| Report          | Description                                                                               | Default Tags | Report Element                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inline Policies | This report identifies AWS Inline Policies that are assigned directly on an AWS Identity. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays inline policies by account</li><li>Table – Shows inline policies by account</li><li>Table – Provides details on inline policies</li></ul> |
