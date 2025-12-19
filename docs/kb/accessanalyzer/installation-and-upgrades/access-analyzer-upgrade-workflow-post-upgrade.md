---
description: Final steps for completing the Netwrix Access Analyzer upgrade, including schema updates, settings verification, and published reports validation.
keywords:
  - Netwrix Access Analyzer
  - Access Analyzer upgrade
  - upgrade completion
  - File System auditing
  - schema update
  - Active Directory Inventory
  - published reports
  - SQL database
  - db_owner
products:
  - access-analyzer
sidebar_label: Completing Access Analyzer Upgrade
title: Completing Access Analyzer Upgrade
knowledge_article_id: ka0Qk000000GIozIAG
---

# Completing Access Analyzer Upgrade

> **NOTE:**
> - Return to the main workflow page: [Access Analyzer Upgrade Workflow Articles](/docs/kb/accessanalyzer/installation-and-upgrades/access-analyzer-upgrade-workflow.md).
> - Return to the previous section: [Upgrading Access Analyzer](/docs/kb/accessanalyzer/installation-and-upgrades/access-analyzer-upgrade-workflow-upgrade.md).
> - Proceed to the next section: [Upgrading Access Information Center (AIC)](/docs/kb/accessanalyzer/installation-and-upgrades/access-analyzer-upgrade-workflow-aic.md).



## Overview

This article lists the steps to complete the **Access Analyzer** upgrade procedure.

## Instructions

Follow these steps to finalize the Access Analyzer upgrade:

1. After the **Netwrix Upgrade Wizard** finishes, open the **Access Analyzer Console**.
2. Verify the global settings match the initial settings.
3. If licensed for File System auditing, run the **File System\0-CreateSchema** job. This updates the schema for the tables, views, and functions used by the rest of the File System solution.
4. Run the **Active Directory Inventory** group from the **Schedules** node to confirm operability.
5. Verify that the published reports configuration matches the backed-up version. If necessary, migrate the `<AppSettings>` node from the default configuration path:

   ```registry
   %SAInstallDir%Web\WebServer.exe.config
   ```

6. If you are using Windows authentication to connect to the SQL database, configure the **Netwrix Access Analyzer Web Server** service to log on as a service account with **db_owner** permissions for the Access Analyzer database.
7. Have a user with the appropriate permissions log in to the **Published Reports** site to confirm operability.
