---
description: >-
  After upgrading or patching to a new build, the Netwrix Threat Prevention
  Agent may show as Lost Connection in the Threat Prevention Console due to
  duplicate host entries in the NVMonitorConfig database. This article explains
  how to identify and resolve the issue.
keywords:
  - agent
  - connection
  - upgrade
  - NVMonitorConfig
  - Server table
  - CertsInfo
  - Enterprise Manager
  - SQL Server
  - uninstall
  - duplicate host
products:
  - threat-prevention
sidebar_label: Agent Connection Lost After Upgrading
tags: []
title: "Agent Connection Lost After Upgrading"
knowledge_article_id: kA0Qk00000024IrKAI
---

# Agent Connection Lost After Upgrading

## Symptom

After upgrading or patching to a new build, the Netwrix Threat Prevention Agent is listed as **Lost Connection** in the Threat Prevention Console.

## Cause

Within the Threat Prevention Console, the host may be listed without domain details. This can occur if the host was replaced with a new server that was named to match the original.

In the `NVMonitorConfig` database, the host may appear multiple times within the **Server** table, both with and without the domain prefix.

> **NOTE:** You can confirm this in SQL Server Management Studio by running the following query:
>
> ```sql
> SELECT * FROM [NVMonitorConfig].[dbo].[Server] WHERE name LIKE '%<Host Name>%'
> ```
>
> ![Query results in SSMS showing duplicate host entries in the Server table](../0-images/ka0Qk000000FNHF_0EMQk00000E8sBH.png)

## Resolution

1. Stop the **Netwrix Threat Prevention Enterprise Manager (EM)** service from the Windows Services screen.
2. In SQL Server Management Studio, run the following command to remove duplicate or incorrect host entries:
   ```sql
   DELETE FROM [NVMonitorConfig].[dbo].[Server] WHERE name LIKE '%<Host Name>%'
   ```
3. Rename the `CertsInfo` folder in the agent's install path. It is recommended to collect this folder when stopping the EM service.

   > **NOTE:** The default path may vary depending on the Threat Prevention version:
   >
   > - New default path: `C:\Program Files\Netwrix\Netwrix Threat Prevention\SIWindowsAgent\CertsInfo`
   > - Old default path: `C:\Program Files\STEALTHbits\StealthINTERCEPT\SIWindowsAgent\CertsInfo`

4. Manually uninstall the agent from the affected host.
5. Push the installer back out from the Threat Prevention Console.

The agent should now be listed as **Active**.
