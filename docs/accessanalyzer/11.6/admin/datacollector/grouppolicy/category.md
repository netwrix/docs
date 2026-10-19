---
title: "GroupPolicy: Category"
description: "GroupPolicy: Category"
sidebar_position: 10
---

# GroupPolicy: Category

On the GroupPolicy Data Collector Category page, select the query category to run.

![Group Policy Data Collector Wizard Category page](/images/accessanalyzer/11.6/admin/datacollector/grouppolicy/category.webp)

The available categories are:

- Group Policy Objects – Retrieves the GPO’s list in the domain and where each is linked
- Policies State – lets you return information on configured policies and policy
  parts from the individual policies you select

    - For example, if you select **Account Policies** > **Policy Password**, the query returns
      **Account Policies** > **Policy Password** for the targeted domains

- Policies State for all GPOs – lets you return information on selected policy parts
  from all policies within the domain

    - For example, if you select **Account Policies** > **Password Policy**, the query returns
      **Password Policy** for all policies in the targeted domains

- Local policies – Returns effective security policies in effect at the individual workstation
