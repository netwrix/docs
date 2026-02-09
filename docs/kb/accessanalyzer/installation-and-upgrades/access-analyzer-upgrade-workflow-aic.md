---
description: Step-by-step instructions for upgrading the Netwrix Access Information Center (AIC), including installation, SSL and SSO configuration, and post-upgrade validation.
keywords:
  - Netwrix Access Analyzer
  - Access Information Center
  - AIC upgrade
  - AIC configuration
  - SSO
  - SSL
  - BindingUrl
  - AuthAllowWindowsAuthentication
  - installation
products:
  - access-analyzer
sidebar_label: Upgrading Access Information Center (AIC)
title: Upgrading Access Information Center (AIC)
knowledge_article_id: ka0Qk000000GIqbIAG
---

# Upgrading Access Information Center (AIC)

> **NOTE:**
> - Return to the main workflow page: [Access Analyzer Upgrade Workflow Articles](/docs/kb/accessanalyzer/installation-and-upgrades/access-analyzer-upgrade-workflow.md).
> - Return to the previous section: [Completing Access Analyzer Upgrade](/docs/kb/accessanalyzer/installation-and-upgrades/access-analyzer-upgrade-workflow-post-upgrade.md).

## Overview

This article lists the steps to perform the **Access Information Center (AIC)** upgrade.

## Upgrade

Follow these steps:

1. Download the latest version of **Netwrix AIC** from the [My Products ⸱ Netwrix 🡥](https://www.netwrix.com/my_products.html).

   > **IMPORTANT:** Unblock the installer. In **Properties**, select the **Unblock** checkbox and save the changes.

2. To upgrade the AIC application to a newer version, run the new `AccessInformationCenter.msi` installer. You do not need to uninstall the existing version.
   See the [Install the Access Information Center](https://docs.netwrix.com/docs/accessinformationcenter/12_0/installation/install) topic for additional details.

3. Hold **Shift**, right-click the latest AIC installer, and select **Copy as path**. In an elevated Command Prompt, paste the path and run it to start installation.
4. Complete the installation.

## Post-Upgrade

Follow these steps to complete the AIC upgrade:

1. If SSL is implemented, update the `BindingUrl` node of the AIC configuration file to use HTTPS. Example:

   ```registry
   <add key="BindingUrl" value="https://+:481" />
   ```
  - Default configuration file path:

  ```registry
  C:\Program Files\STEALTHbits\Access Information Center
  ```

1. If SSO is implemented, update the `AuthAllowWindowsAuthentication` node of the configuration file. Example:

     ```registry
     <add key="AuthAllowWindowsAuthentication" value="True" />
     ```

   - Default configuration file path:

     ```registry
     C:\Program Files\STEALTHbits\Access Information Center
     ```

2. Have a user with the correct permissions log in to the AIC to confirm operability.
3. Verify the AIC configuration settings match those saved during the preparation phase.
4. Verify that the built-in admin account for the AIC is either disabled or that the password has been changed.
