---
description: Step-by-step instructions for upgrading Netwrix Access Analyzer, including the Console, Sensitive Data Discovery add-on, and File System Proxy service.
keywords:
  - Netwrix Access Analyzer
  - Access Analyzer upgrade
  - upgrade console
  - Sensitive Data Discovery
  - SDD add-on
  - File System Proxy
  - FSAA Proxy
  - upgrade wizard
  - Netwrix Customer Portal
products:
  - access-analyzer
sidebar_label: Upgrading Access Analyzer
title: Upgrading Access Analyzer
knowledge_article_id: ka0Qk000000GInNIAW
---

# Upgrading Access Analyzer

> **NOTE:**
> - Return to the main workflow page: [Access Analyzer Upgrade Workflow Articles](/docs/kb/accessanalyzer/installation-and-upgrades/access-analyzer-upgrade-workflow.md)
> - Return to the previous section: [Preparing for Access Analyzer Upgrade](/docs/kb/accessanalyzer/installation-and-upgrades/access-analyzer-upgrade-workflow-preparations.md)
> - Proceed to the next section: [Completing Access Analyzer Upgrade](/docs/kb/accessanalyzer/installation-and-upgrades/access-analyzer-upgrade-workflow-post-upgrade.md)

## Overview

This article lists the steps to perform the **Access Analyzer** upgrade.

## Upgrading Access Analyzer Console

Follow these steps to upgrade the Access Analyzer Console:

1. Download the latest version of **Netwrix Access Analyzer Management Platform** from the [My Products ⸱ Netwrix 🡥](https://www.netwrix.com/my_products_int.html).

   > **IMPORTANT:** Unblock the installer. In **Properties**, select the **Unblock** checkbox and save the changes.

2. Verify no Access Analyzer jobs are running. Check **Task Manager** > **Details**.
3. Uninstall the Access Analyzer Console either via **Control Panel** or **Apps & Features**.
4. Hold **Shift**, right-click the Console installer, and select **Copy as path**. In an elevated Command Prompt, paste the path and run it to start the installation.
5. Complete the installation and launch the Console instance. This should start the upgrade wizard.

   > **IMPORTANT:** If the upgrade wizard does not start, run the following commands in PowerShell:
   ```registry
   cd $Env:SAINSTALLDIR
   .\StealthAUDIT.EXE /Upgrade
   ```

6. Review upgrade conflicts. Click **View Conflicts** to review, then select an item in the **Changes** window and click **Undo**.
7. In the **Solution Set Files** tab, click **Advanced**. Verify that the Active Directory solution, File System solution, and any custom solution groups in the job tree are set to **Upgrade in Place**.
8. Proceed with the upgrade wizard to complete setup.

## Upgrading Sensitive Data Discovery

> **IMPORTANT:** If licensed and used in your environment, upgrade the SDD Add-on after upgrading the Access Analyzer Console.

Follow these steps to upgrade the **Sensitive Data Discovery Add-on (SDD):**

1. Download the latest SDD version from the [My Products ⸱ Netwrix 🡥](https://www.netwrix.com/my_products_int.html) and transfer the installer to the Access Analyzer Console server.

   > **IMPORTANT:** Unblock the installer. In **Properties**, select the **Un**
