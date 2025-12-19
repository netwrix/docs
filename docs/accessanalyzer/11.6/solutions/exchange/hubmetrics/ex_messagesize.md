---
title: "EX_MessageSize Job"
description: "EX_MessageSize Job"
sidebar_position: 70
---

# EX_MessageSize Job

The EX_MessageSize Job provides information around the size of sent and received messages.

## Analysis Tasks for the EX_MessageSize Job

View the analysis task by navigating to the **Exchange** > **1. HUB Metrics** > **EX_MessageSize** >
**Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the EX_MessageSize Job](/images/accessanalyzer/11.6/solutions/exchange/hubmetrics/messagesizeanalysis.webp)

The following analysis task is selected by default:

-   **1. Message Size by Server** – Creates the SA_EX_MessageSize_HostSummary table accessible under the
       job’s Results node

In addition to the tables and views created by the analysis task, the EX_MessageSize Job produces
the following pre-configured report:

| Report       | Description                                                   | Default Tags | Report Elements                                                                                                                                                                                   |
| ------------ | ------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message Size | This report identifies servers which handle the largest mail. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top servers by average message size (KB)</li><li>Table – Provides details on average message size by server (KB)</li></ul> |
