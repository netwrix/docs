---
description: >-
  Learn how to manually force the Upgrade Wizard to run in Netwrix Access Analyzer
  using either the /Upgrade command-line switch or a configuration reset.
keywords:
  - upgrade wizard
  - force upgrade
  - StealthAUDIT
  - Access Analyzer
  - Enterprise Auditor
  - GlobalOptions.xml
  - command-line switch
  - console upgrade
  - Netwrix
products:
  - access-analyzer
sidebar_label: 'Forcing the Upgrade Wizard to Run'
tags: [How to]
title: 'Forcing the Upgrade Wizard to Run'
knowledge_article_id: ka0Qk000000FkwzIAC
---

# Forcing the Upgrade Wizard to Run

## Overview

This article explains how to manually trigger the [Upgrade Wizard in Netwrix Access Analyzer](https://docs.netwrix.com/docs/accessanalyzer/12_0/install/application/upgrade/wizard) (formerly Enterprise Auditor). The Upgrade Wizard updates solution jobs and configuration to the new version.

By default, launching the console after an install or upgrade will invoke the wizard if an older version is detected. If the wizard does not appear, you can force it to run using a command-line switch or a configuration file adjustment.

## Instructions

### Method 1: Command-Line Flag to Launch the Upgrade Wizard

The primary method is to run the console executable with the `/Upgrade` switch. All versions of Access Analyzer support this flag. Running the console in an elevated Command Prompt with `/Upgrade` will start the Upgrade Wizard immediately, regardless of whether the wizard has run before.

For example:

```text
"C:\Program Files\STEALTHbits\StealthAUDIT\StealthAUDIT.exe" /Upgrade
```

Adjust the path to match your installation directory. This command forces the console to launch in upgrade mode. Internal experts confirm that using `StealthAUDIT.exe /Upgrade` will bring up the Upgrade Wizard on launch.

This approach is consistent across all product versions and names:

* **StealthAUDIT 11.x and earlier:** Use `StealthAUDIT.exe /Upgrade` to trigger the wizard.
* **Netwrix Enterprise Auditor 11.x:** The underlying executable remains `StealthAUDIT.exe`, so the same `/Upgrade` flag applies.
* **Netwrix Access Analyzer 12.x:** Still uses the StealthAUDIT console under the hood (installed in the `...\STEALTHbits\StealthAUDIT\` directory), so the `/Upgrade` switch continues to work.

> **NOTE:** Run the Command Prompt as Administrator, since the upgrade process makes system and configuration changes that require elevated privileges. If the wizard does not run, verify that you included `/Upgrade` exactly (it is case-insensitive) and that you are using the correct path to the executable.

### Method 2: Configuration Tweak to Force the Wizard

If the command-line flag is not available or you prefer a configuration-based approach, you can reset the console’s saved settings so that it thinks it is running for the first time on a new version. This is done by renaming or removing the `GlobalOptions.xml` file in the installation directory. After doing so, launch the console normally. The application will regenerate a fresh `GlobalOptions.xml` and detect that an upgrade has not been finalized, prompting the Upgrade Wizard (or a job upgrade dialog) on startup.

1. Close the Access Analyzer console if it is open.
2. Navigate to the install folder (for example, `%sainstalldir%`).
3. Find and rename `GlobalOptions.xml` (for example, rename it to `GlobalOptions.xml.bak` to keep a backup).
4. Launch the console (`StealthAUDIT.exe`) normally. It will rebuild the `GlobalOptions.xml` file and should invoke the Upgrade Wizard since it detects a first launch or inconsistent state.
5. Proceed through the wizard. You can opt not to upgrade any jobs if you only want to review the process. After finishing, you can delete the old renamed XML once you are confident everything is working.

> **IMPORTANT:** This is a troubleshooting technique, not an official feature. The recommended way to invoke the Upgrade Wizard is using the `/Upgrade` switch. Altering configuration files should be done cautiously and usually only if guided by support. You may need to manually reconfigure settings such as storage profiles after resetting `GlobalOptions.xml`.

## Related Link

* [Access Analyzer Core Upgrade Instructions](https://docs.netwrix.com/docs/accessanalyzer/12_0/install/application/upgrade/wizard)
