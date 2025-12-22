---
description: >-
  Explains how to remove audit data for a decommissioned or excluded domain by
  using the Drop Domain task in Netwrix Auditor to delete the related data from
  your SQL Server.
keywords:
  - drop domain
  - domain audit
  - AD inventory
  - ADINVENTORY
  - Netwrix Auditor
  - SQL Server
  - remove domain data
  - create job
products:
  - access-analyzer
sidebar_label: Remove Domain Audit Data from Reports − Drop Domai
tags:
  - active-directory-auditing
title: "Remove Domain Audit Data from Reports − Drop Domains"
knowledge_article_id: kA0Qk0000000R3RKAU
---

# Remove Domain Audit Data from Reports − Drop Domains

## Related Query

- “Why is data from an old, removed domain still appearing in tables and reports?”

## Overview

In case a domain was decommissioned or excluded from the monitoring scope, the Netwrix Auditor reports may still contain audit data for the domain. This article lists the steps to implement the **Drop Domain** task to remove the related domain data from your SQL Server.

## Instructions

> **TIP:** You can create a separate folder (e.g., called **Sandbox**) for custom Jobs.

1. Right-click the custom or **Jobs** folder and select **Create Job**.
2. Navigate to the **Configure** node and select the **Queries** node.
3. Click the **Create Query** button.
4. In the **General** tab, specify the **AD Domain Drop** name in the **Name** field.
5. In the **Data Source** tab, specify `ADINVENTORY` in the **Data Collector** drop-down menu.
6. Click **Configure** to launch Active Directory Inventory DC Wizard.
7. In the **Category** page, select the **Drop Domain** task and click **Next**.
8. In the **Domains** page, select the domains you would like to drop the AD data from.
9. Proceed with the wizard steps and save the configuration.
10. In the **Hosts** node, select the **Local host** checkbox to save the changes.
11. Run the job to drop the target domains.

> **NOTE:** To update the AD reports results, re-run the reports.
