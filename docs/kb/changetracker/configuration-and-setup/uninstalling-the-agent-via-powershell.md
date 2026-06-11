---
description: >-
  Uninstalling the Netwrix Change Tracker agent using the silent uninstaller
  executable via PowerShell for both NetCore and non-NetCore installations.
keywords:
  - uninstall
  - PowerShell
  - silent uninstall
  - Gen7Agent
  - unins000.exe
  - agent uninstaller
  - Gen7Agent NetCore
  - /VERYSILENT
  - remove agent
  - uninstall script
  - Change Tracker agent removal
products:
  - change-tracker
sidebar_label: Uninstalling the Agent via PowerShell
tags:
  - kb
  - configuration-and-setup
title: Uninstalling the Change Tracker Agent via PowerShell
knowledge_article_id: ""
---

# Uninstalling the Change Tracker Agent via PowerShell

## Overview

This article explains how to uninstall the Netwrix Change Tracker agent using a PowerShell script.

## Instructions

Navigate to the uninstaller location based on your installation type:

- **NetCore installation:** `C:\Program Files\NNT Change Tracker Suite\Gen7Agent (NetCore)\unins000.exe`
- **Non-NetCore installation:** `C:\Program Files\NNT Change Tracker Suite\Gen7Agent\unins000.exe`

Run the following command:

```powershell
.\unins000.exe /SP-- /VERYSILENT /SUPPRESSMSGBOXES
```

> **NOTE:** Change Tracker does not have a built-in silent uninstall feature. This method uses the installer's silent mode switches.
