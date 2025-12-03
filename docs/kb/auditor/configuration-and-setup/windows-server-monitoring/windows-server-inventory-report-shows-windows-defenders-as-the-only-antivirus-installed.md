---
description: >-
  Explains why the Windows Server Inventory Report in Netwrix Auditor lists
  Windows Defender as the only antivirus on Windows Server 2016/2019 systems and
  how to resolve it.
keywords:
  - Windows Server Inventory
  - Windows Defender
  - SecurityCenter2
  - WMI
  - antivirus detection
  - Windows Server 2016
  - Windows Server 2019
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Windows Server Inventory Report shows Windows Defe
tags: []
title: "Windows Server Inventory Report shows Windows Defenders as the only Antivirus installed"
knowledge_article_id: kA04u000000XmGgCAK
---

# Windows Server Inventory Report shows Windows Defenders as the only Antivirus installed

## Scenario
When running the Windows Server Inventory Report in Netwrix Auditor, the results show Windows Defender as the only installed Antivirus.

## Cause
This is due to the fact that Windows Server 2016 and 2019 are missing the WMI SecurityCenter2 namespace, resulting in the OS only recognizing Windows Defender.

## Solution
Once a 3rd party software is installed, disable Windows Defender. The WMI SecurityCenter2 namespace will regenerate and identify the alternative Antivirus software.

For more information, visit this Microsoft article: https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-antivirus/microsoft-defender-antivirus-compatibility
