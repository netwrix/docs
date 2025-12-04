---
description: >-
  This article describes steps to prepare the Netwrix Auditor host server for a
  Windows operating system upgrade, including backup recommendations and service
  stop/start commands.
keywords:
  - Netwrix Auditor
  - OS upgrade
  - Windows upgrade
  - snapshot
  - backup
  - PowerShell
  - Stop-Service
  - Start-Service
  - failover
products:
  - auditor
sidebar_label: How to Prepare Netwrix Server for OS Upgrade
tags: []
title: "How to Prepare Netwrix Server for OS Upgrade"
knowledge_article_id: kA04u000000wnjVCAQ
---

# How to Prepare Netwrix Server for OS Upgrade

## Overview

This article provides preparation steps for upgrading an operating system (Windows) in the Netwrix Auditor host server.

## Instructions

### Pre-Upgrade Data Security Measures: Snapshot and Backup Guidelines

Taking a snapshot or creating a backup of the Netwrix Auditor Server is recommended for data protection and recovery. The method to be used depends on the approach used for Auditor installation, whether it's on a virtual or physical machine.

> **TIP:** You can configure Netwrix Auditor in the failover mode. To learn about failover and backup scenarios, read [How to Configure Netwrix Auditor in Failover Mode](/docs/kb/auditor/configuration-and-setup/general-configuration/how-to-configure-netwrix-auditor-in-failover-mode)

Stop all Netwrix services running in your server − run the following line in elevated PowerShell:

```powershell
Stop-Service -Displayname Netwrix*
```

### Post-Upgrade Procedure: Auditor Initialization and Service Verification

After the upgrade, give Netwrix Auditor a couple of hours to initialize, and make sure all services are running. To start all Netwrix Auditor-related processes in the server, run the following line in elevated PowerShell:

```powershell
Start-Service -Displayname Netwrix*
```

### Post-Upgrade Warnings and Data Collection Interruptions

After the upgrade, you might notice warnings in the Health log. These warnings occur because services are temporarily unavailable and data collection is interrupted during the upgrade and server reboot. Once the upgrade is complete, services will be automatically restarted, and data collection will continue without any issues.

## Related articles

- [How to Configure Netwrix Auditor in Failover Mode](/docs/kb/auditor/configuration-and-setup/general-configuration/how-to-configure-netwrix-auditor-in-failover-mode)
