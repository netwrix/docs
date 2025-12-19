---
title: "Can Microsoft App-V applications work with Endpoint Policy Manager Starts Screen and Taskbar Manager?"
description: "Can Microsoft App-V applications work with Endpoint Policy Manager Starts Screen and Taskbar Manager?"
sidebar_position: 30
---

# Can Microsoft App-V applications work with Endpoint Policy Manager Starts Screen and Taskbar Manager?

Yes. It is tested and should work just like any other registered application. The pre-requisites are
the same and we recommend creating GPOs for Netwrix Endpoint Policy Manager (formerly PolicyPak)
Starts Screen Manager from the machine where the required App-V package is already installed.

Steps to create App-V icon in Windows Starts Screen via GPO:

**Step 1 –** Create a GPO and expand Endpoint Policy Manager Starts Screen Manager.

**Step 2 –** Create Collection, create Group and then right-click and select **Add Desktop
Application Tile**.

![808_1_image-20201121192420-1](/images/endpointpolicymanager/integration/808_1_image-20201121192420-1.webp)

**Step 3 –** Select the **Registered Application (Recommended)** option and click **Next**.

![808_2_image-20201121192420-2](/images/endpointpolicymanager/integration/808_2_image-20201121192420-2.webp)

**Step 4 –** Wait for the wizard to discover all registered applications including App-V application
packages.

**Step 5 –** Select the App-V application and verify the path by moving your cursor over the Icon.

![808_3_image-20201121192420-3](/images/endpointpolicymanager/integration/808_3_image-20201121192420-3.webp)

**Step 6 –** Complete the remaining steps and apply group policy updates on the target machine.

:::note
The target application path must exist in the client machine.
:::


![808_4_image-20201121192420-4](/images/endpointpolicymanager/integration/808_4_image-20201121192420-4.webp)

**Step 7 –** Log-off and log back on to see the required Starts Screen items.

![808_5_image-20201121192420-5](/images/endpointpolicymanager/integration/808_5_image-20201121192420-5.webp)


