---
title: "How To deploy a TCP/IP Printer using Endpoint Policy Manager Remote Work Delivery Manager"
description: "How To deploy a TCP/IP Printer using Endpoint Policy Manager Remote Work Delivery Manager"
sidebar_position: 50
---

# How To deploy a TCP/IP Printer using Endpoint Policy Manager Remote Work Delivery Manager

**Step 1 –** Zip up the Printer setup files and store on a network share that is accessible to the
users that need to have the printer installed.

For Example:

![571_1_image-20210320020022-1](/images/endpointpolicymanager/remoteworkdelivery/571_1_image-20210320020022-1.webp)

:::note
This zip should contain the driver INF file for the printer to be installed.
:::


![571_2_image-20210320020022-2](/images/endpointpolicymanager/remoteworkdelivery/571_2_image-20210320020022-2.webp)

**Step 2 –** Using the Microsoft Group Policy Management Console (GPMC), create a new Netwrix
Endpoint Policy Manager (formerly PolicyPak) RWDM Standard Policy on either the Computer side (using
Switched-Mode), or the User side.

![571_3_image-20210320020022-3](/images/endpointpolicymanager/remoteworkdelivery/722_3_image-20201105183910-3.webp)

**Step 3 –** At the Welcome screen select Copy a single file, and click **Next**.

![571_4_image-20210320020022-4](/images/endpointpolicymanager/remoteworkdelivery/722_4_image-20201105183910-4.webp)

**Step 4 –** Select Apply this policy to all users who log on to the computer (switched mode), then
click **Next**.

![571_5_image-20210320020022-5](/images/endpointpolicymanager/remoteworkdelivery/571_5_image-20210320020022-5.webp)

**Step 5 –** Enter the UNC path to the printer zip file from step 1 above, then click **Next**.

![571_6_image-20210320020022-6](/images/endpointpolicymanager/remoteworkdelivery/571_6_image-20210320020022-6.webp)

**Step 6 –** Specify the target folder on the endpoint(s) where you would like the zip to be
downloaded to, provide the file name for the destination, then click **Next**. 

:::note
The target folder will be created if it does not exist
:::


![571_7_image-20210320020022-7](/images/endpointpolicymanager/remoteworkdelivery/571_7_image-20210320020022-7.webp)

**Step 7 –** Accept the default values and click **Next**.

![571_8_image-20210320020022-8](/images/endpointpolicymanager/remoteworkdelivery/571_8_image-20210320020022-8.webp)

**Step 8 –** Select **Once** then click **Next**.

![571_9_image-20210320020022-9](/images/endpointpolicymanager/remoteworkdelivery/571_9_image-20210320020022-9.webp)

At the Post-copy actions screen select the **Run PowerShell script**, and **Run process or script as
user** options, then add/edit the command lines below as needed to reflect what is needed for your
specific printer model, then click **Next**.

TIP:[ Go to https://www.pdq.com/blog/using-powershell-to-install-printers/ for more information on this topic.](https://www.pdq.com/blog/using-powershell-to-install-printers/)

```
Expand-Archive -LiteralPath 'c:\temp\canon.zip' -DestinationPath C:\Temp    pnputil.exe /a "C:\Temp\Canon\Driver\CNS30MA64.INF"    Start-Sleep -s 10    Add-PrinterDriver -Name "Canon Generic Plus PS3"    Add-PrinterPort -Name "IP Port" -PrinterHostAddress "192.168.1.27"    Add-Printer -DriverName "Canon Generic Plus PS3" -Name "Canon Generic Plus PS3" -PortName "IP Port" 
```

![571_10_image-20210320020022-10](/images/endpointpolicymanager/remoteworkdelivery/571_10_image-20210320020022-10.webp)

**Important**: The Add-PrinterDriver -Name section above the name specified (i.e., "Canon Generic
Plus PS3" in this example) must match one of the names in the INF file!

![571_11_image-20210320020022-11](/images/endpointpolicymanager/remoteworkdelivery/571_11_image-20210320020022-11.webp)

**Step 9 –** Skip the Revert actions screen unless you wish to add a revert action.

**Step 10 –** At the Policy settings screen give the policy a descriptive name, then click
**Finish**.

![571_12_image-20210320020022-12](/images/endpointpolicymanager/remoteworkdelivery/571_12_image-20210320020022-12.webp)

**Step 11 –** Run GPUPDATE on an endpoint that receives this policy to test, then verify under
Printers & Scanners that you see the printer installed.

:::note
The printer may take around 30 seconds to install.
:::


![571_13_image-20210320020022-13](/images/endpointpolicymanager/remoteworkdelivery/571_13_image-20210320020022-13.webp)


