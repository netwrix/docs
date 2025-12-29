---
description: >-
  Use this article to identify which Threat Prevention components are installed
  and how to find the installed version using the registry, installation
  directory, Programs and Features, or the Threat Prevention console.
keywords:
  - Threat Prevention
  - installation
  - components
  - version
  - registry
  - Programs and Features
  - installation directory
  - Threat Prevention Console
  - SIEnterpriseManager
products:
  - threat-prevention
sidebar_label: Identify Threat Prevention Installed Components an
tags: []
title: "Identify Threat Prevention Installed Components and Version"
knowledge_article_id: kA04u0000000HwPCAU
---

# Identify Threat Prevention Installed Components and Version

## Identifying Installed Threat Prevention Components

### Using the Registry

1. Open **RegEdit.exe**
2. Navigate to and expand the key `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\STEALTHbits Technologies`
3. The subkeys that exist below will tell you which key components are installed

Component | Corresponding Subkey Name
--- | ---
Enterprise Manager | SIEnterpriseManager
Threat Prevention Console | SIWinConsole
Threat Prevention Reporting | SIReports

### Using the Installation Directory

1. Navigate to the Threat Prevention installation directory. By default this is ` %PROGRAMFILES%\STEALTHbits\StealthINTERCEPT`
2. The subfolders shown here will tell you which components are installed

Component | Corresponding Folder Name
--- | ---
Enterprise Manager | SIEnterpriseManager
Threat Prevention Console | SIWinConsole
Threat Prevention Reporting | SIReports

## Identifying the Threat Prevention Version

### Using Programs and Features

1. Open the **Control Panel**
2. Navigate to **Programs and Features**
3. Click on **Uninstall a Program**
4. Search for `Threat Prevention Server` in the list of installed programs
   1. If Threat Prevention Server is not found then Threat Prevention is not installed
5. Check the **Version** column for the version information
   1. If the **Version** column is not shown then right-click on the column header bar for the table of programs and click on **Version** to enable it.

### Using the Threat Prevention Console

1. Open the **Threat Prevention Console**
2. Once launched, the title of the Threat Prevention Console includes the currently installed version.

Example: "Threat Prevention Administration Console V7.3.0.196""
