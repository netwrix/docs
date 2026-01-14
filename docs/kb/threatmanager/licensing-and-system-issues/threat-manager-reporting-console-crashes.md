---
description: 'Netwrix Threat Manager Reporting Console may crash on launch in v7.3.7 and newer due to Microsoft Silverlight end of support causing conflicts with the IIS-based Reporting Console when the Reporting Module is installed.'
keywords:
- Netwrix Threat Manager
- Reporting Console
- Silverlight
- IIS
- Reporting Module
- crash
- v7.3.7
- Reporting
products:
- threat-manager
title: 'Threat Manager Reporting Console Crashes'
knowledge_article_id: kA0Qk0000000Gw1KAE
---

# Threat Manager Reporting Console Crashes

## Symptom

In Netwrix Threat Manager v7.3.7 and newer, the Reporting Console crashes on launch.

## Cause

Microsoft Silverlight has reached the end of support. If you have the new Reporting Module installed, it conflicts with the IIS-based Reporting Console.

## Resolution

1. Uninstall Microsoft Silverlight from servers in your environment.

> **NOTE:** If the new Netwrix Threat Manager Reporting Module is not installed in your environment, refer to the following article for additional information: Reporting Module − Getting Started with the Reporting Module ⸱ v7.3.

## Related articles

- Reporting Module − Getting Started with the Reporting Module ⸱ v7.3