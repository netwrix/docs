---
description: >-
  The Netwrix Password Policy Enforcer Web installation wizard shows no sites in the drop-down menu. Run the MSI installer from an elevated Command Prompt to resolve the issue.

keywords:
  - Netwrix Password Policy Enforcer
  - PPE Web
  - PPEWeb
  - IIS
  - installation wizard
  - MSI
  - sites drop-down
  - elevated Command Prompt
  - Run as administrator
  - msiexec
  - upgrade
  - UAC

products:
  - passwordpolicyenforcer
sidebar_label: No Sites in the Drop-Down Menu During PPE Web Installation
tags:
  - kb
  - troubleshooting-and-errors
title: "No Sites in the Drop-Down Menu During PPE Web Installation"
knowledge_article_id: ""
---

# No Sites in the Drop-Down Menu During PPE Web Installation

## Symptom

When you install or upgrade Netwrix Password Policy Enforcer (PPE) Web, the installation wizard does not list any sites in the drop-down menu on the Web Site and Virtual Directory page.

## Cause

The user account running the installation wizard does not have sufficient permissions for the Microsoft Installer (MSI) package to access the sites in Internet Information Services (IIS). Reading and writing IIS site configuration requires administrator rights on the server. When User Account Control (UAC) is enabled, an account that belongs to the local Administrators group still runs programs with a standard token unless you start them as an administrator. Without elevated rights, the installer cannot read the IIS site list, so the drop-down menu is empty.

## Resolution

Run the MSI installer from an elevated **Command Prompt** as an administrator.

1. Click **Start**, then type `cmd`.
2. Right-click **Command Prompt** and select **Run as administrator**.
3. In the elevated **Command Prompt**, run the PPE Web MSI installer:

   ```
   msiexec /i "<path-to-installer>\<installer-name>.msi"
   ```

4. In the installation wizard, verify that the sites appear in the drop-down menu.
5. Proceed with the installation wizard steps as normal to install or upgrade PPE Web.
