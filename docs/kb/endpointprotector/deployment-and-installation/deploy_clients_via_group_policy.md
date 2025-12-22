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
title: "Deploy Clients via Group Policy"
knowledge_article_id: kA0Qk0000002B6KKAU
products:
  - endpoint-protector
---

# Deploy Clients via Group Policy

## Overview

This article explains how to deploy Endpoint Protector client software to Windows computers using Active Directory Group Policy Objects (GPO). The Endpoint Protector client is provided as a Microsoft Installer (`.msi`) file, available in both 32-bit and 64-bit versions. You will create separate GPOs for each installer and use Windows Management Instrumentation (WMI) filters to target the correct operating system architecture. This method allows for automated, large-scale deployment across your organization.

## Instructions

### Prepare the Endpoint Protector Client Installers

1. Obtain both the 32-bit and 64-bit Endpoint Protector client `.msi` installer files.
2. Place each installer in a network share that is accessible by all target computers in your Active Directory environment.

### Create WMI Filters for OS Architecture

1. Open the **Group Policy Management** console.
2. Expand **Domains** and your domain tree.
3. Right-click **WMI Filters** and select **New**.
4. In the New WMI Filter window, create two filters:
   - **32-bit Operating System:**
     ```sql
     Select * from Win32_Processor where AddressWidth = '32'
     ```
   - **64-bit Operating System:** 
     ```sql
     Select * from Win32_Processor where AddressWidth = '64'
     ```
5. Optionally, add additional queries to target specific operating systems or computer types. For example:
   - **Windows 10 Workstation:** 
     ```sql
     SELECT * FROM Win32_OperatingSystem WHERE Version LIKE "10%" AND ProductType="1"
     ```
   - **Windows Server 2019:** 
     ```sql
     SELECT * FROM Win32_OperatingSystem WHERE BuildNumber >= 17763 AND (ProductType="3" OR ProductType="2")
     ```

### Create Deployment GPOs

1. In the **Group Policy Management** console, right-click **Group Policy Objects** and select **New**.
2. Name the first GPO (for example, **Endpoint Protector 32-bit**).
3. Right-click the new GPO and select **Edit**.
4. Expand **Computer Configuration** > **Software Settings**.
5. Right-click **Software Installation** and select **New** > **Package**.
6. Browse to the appropriate `.msi` file on your network share and select it.
7. Repeat these steps to create a second GPO for the 64-bit installer (for example, **Endpoint Protector 64-bit**).

> **NOTE:** The `.msi` files must be located in a shared folder accessible by all target computers.

### Link WMI Filters to GPOs

1. In the **Group Policy Management** console, select the **Endpoint Protector 32-bit** GPO.
2. In the **WMI Filtering** section, select the 32-bit Windows filter you created earlier.
3. Repeat this process for the **Endpoint Protector 64-bit** GPO, selecting the 64-bit Windows filter.

### Link GPOs to OUs

1. Right-click the target OU and select **Link an Existing GPO**.
2. Select the **Endpoint Protector 32-bit** GPO and click **OK**.
3. Repeat for the **Endpoint Protector 64-bit** GPO.

> **NOTE:** The new policies will be applied only after the target computers are rebooted.

For more information, see the [Endpoint Protector User Manual](https://docs.netwrix.com/docs/endpointprotector/5_9_4_2/admin/overview).