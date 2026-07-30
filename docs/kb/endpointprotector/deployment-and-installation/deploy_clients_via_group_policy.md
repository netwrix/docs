---
description: >-
  This article explains how to deploy Endpoint Protector client software to Windows computers using Active Directory Group Policy Objects (GPO).
keywords:
  - Endpoint Protector
  - Group Policy
  - deployment
sidebar_label: Deploy Clients via GPO
tags:
  - deployment-and-installation
  - kb
title: "Deploy Clients via Group Policy"
knowledge_article_id: kA0Qk0000002B6KKAU
products:
  - endpointprotector
---

# Deploy Clients via Group Policy

## Overview

This article explains how to deploy Endpoint Protector client software to Windows computers using Active Directory Group Policy Objects (GPO). The Endpoint Protector client is provided as a Microsoft Installer (`.msi`) file. You will create a GPO for each installer and use Windows Management Instrumentation (WMI) filters to target the correct processor architecture. This method allows for automated, large-scale deployment across your organization.

:::note
Netwrix no longer produces 32-bit (x86) Endpoint Protector Client installers for current versions. Current Windows client packages target **x64** and **Windows ARM (ARM64)** devices. If you still have legacy 32-bit endpoints, contact Netwrix Support for guidance.
:::

For the full reference, see [Active Directory](/docs/endpointprotector/install/activedirectory/overview).

:::note
This document is provided as an optional reference for Active Directory deployment method configuration. It is not regularly updated and may not reflect the current state of the product or its interface. For the most current information, please refer to the official resources provided by the product vendor.
:::

## Instructions

### Prepare the Endpoint Protector Client Installers

1. Obtain the Endpoint Protector client `.msi` installer file for each architecture you need to deploy — **x64**, and **ARM64** if you manage Windows on Arm devices.
2. Place each installer in a network share that is accessible by all target computers in your Active Directory environment.

### Create WMI Filters for Processor Architecture

1. Open the **Group Policy Management** console.
2. Expand **Domains** and your domain tree.
3. Right-click **WMI Filters** and select **New**.
4. In the New WMI Filter window, create a filter for each architecture you're deploying:
   - **x64:**
     ```sql
     Select * from Win32_Processor where Architecture = 9
     ```
   - **ARM64:**
     ```sql
     Select * from Win32_Processor where Architecture = 12
     ```

   :::note
   For reference, the legacy 32-bit filter used with older Endpoint Protector Client installers was:
   ```sql
   Select * from Win32_Processor where AddressWidth = '32'
   ```
   Netwrix no longer produces 32-bit installers for current versions — don't create a GPO for this filter unless you're deploying a legacy package to older endpoints.
   :::

5. Optionally, add additional queries to target specific operating systems or computer types. For example:
   - **Windows 10 Workstation:** 
     ```sql
     SELECT * FROM Win32_OperatingSystem WHERE BuildNumber >= 10240 AND BuildNumber < 22000 AND ProductType="1"
     ```
   - **Windows 11 Workstation:** 
     ```sql
     SELECT * FROM Win32_OperatingSystem WHERE BuildNumber >= 22000 AND ProductType="1"
     ```
   - **Windows Server 2025:** 
     ```sql
     SELECT * FROM Win32_OperatingSystem WHERE BuildNumber >= 26100 AND (ProductType="3" OR ProductType="2")
     ```

   :::note
   Windows 10 and Windows 11 both report `Version` as `10.0`, so `BuildNumber` is required to distinguish between them — Windows 11 starts at build 22000.
   :::

   See [Creating WMI Filters](/docs/endpointprotector/install/activedirectory/creatingfilters) for the full list of queries, including Workstation, Domain Controller, Server, and additional Windows and Windows Server version filters. That reference predates ARM64 support and uses the legacy 32-bit/64-bit `AddressWidth` filter — use the `Architecture`-based queries above instead.

### Create Deployment GPOs

1. In the **Group Policy Management** console, right-click **Group Policy Objects** and select **New**.
2. Name the first GPO (for example, **Endpoint Protector x64**).
3. Right-click the new GPO and select **Edit**.
4. Expand **Computer Configuration** > **Software Settings**.
5. Right-click **Software Installation** and select **New** > **Package**.
6. Browse to the appropriate `.msi` file on your network share and select it.
7. Repeat these steps to create a GPO for each additional architecture you're deploying (for example, **Endpoint Protector ARM64**).

:::note
The `.msi` files must be located in a shared folder accessible by all target computers.
:::

### Link WMI Filters to GPOs

1. In the **Group Policy Management** console, select the **Endpoint Protector x64** GPO.
2. In the **WMI Filtering** section, select the x64 filter you created earlier.
3. Repeat this process for the **Endpoint Protector ARM64** GPO, if applicable, selecting the ARM64 filter.

### Link GPOs to OUs

1. Right-click the target OU and select **Link an Existing GPO**.
2. Select the **Endpoint Protector x64** GPO and click **OK**.
3. Repeat for the **Endpoint Protector ARM64** GPO, if applicable.

:::note
The new policies will be applied only after the target computers are rebooted.
:::