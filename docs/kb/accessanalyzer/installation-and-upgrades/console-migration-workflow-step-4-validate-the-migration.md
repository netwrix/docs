---
description: >-
  Instructions to validate a console migration for Netwrix Access Analyzer.
  Verify jobs, schedules, role-based access, published reports, and JobStats
  entries after migration.
keywords:
  - console migration
  - validation
  - Netwrix Access Analyzer
  - Job Tree
  - Published Reports
  - Schedules
  - Access Information Center
  - SA_HOST
products:
  - access-analyzer
  - access_info_center
sidebar_label: 'Console Migration Workflow: Step 4—Validate the Mi'
tags:
  - installation-and-upgrades
title: 'Console Migration Workflow: Step 4—Validate the Migration'
knowledge_article_id: kA0Qk0000002OsfKAE
---

# Console Migration Workflow: Step 4—Validate the Migration

> **NOTE:** Return to the main workflow page via this link: [Console Migration Workflow](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow.md).
>
> Return to the previous section via this link: [Console Migration Workflow: Step 3—Rebuild the Console](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow-step-3-rebuild-the-console.md).

## Overview

After completing Steps 1-3, please verify the following:

## Validating the Netwrix Access Analyzer Console Migration

- The Job Tree contains all expected jobs.
- Verify the **Tasks** under **Schedules** have been carried over.
- If using Role-Based Access, verify that the **Access** tab under **Settings** contains users.
- Confirm that the Access Information Center launches.
- Confirm that the Published Reports web server launches.
- Validate that the reports are published and available in the **Published Reports** site.
- Open ` .Active Directory Inventory\1-AD_Scan\Status\JobStats` in Netwrix Access Analyzer and verify that the `SA_HOST` column contains the new Netwrix Access Analyzer Console server name.

## Related Links

- [Console Migration Workflow](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow.md)
- [Console Migration Workflow: Step 3—Rebuild the Console](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow-step-3-rebuild-the-console.md)
