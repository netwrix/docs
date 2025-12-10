---
title: "Uninstall Netwrix Auditor"
description: "Uninstall Netwrix Auditor"
sidebar_position: 90
---
# Uninstall Netwrix Auditor

This topic provides instructions to uninstall Netwrix Auditor.

**NOTE:** If you enabled network traffic compression for data collection, make sure to disable it
before uninstalling the product. Some network compression services must be removed manually. See the
[Uninstall Compression and Core Services](#uninstall-compression-and-core-services) topic for
additional information.

Follow the steps to uninstall Auditor.

**Step 1 –** On the computer where Auditor is installed, navigate to **Start > Control Panel >
Programs and Features**.

**Step 2 –** Select Netwrix Auditor and click **Uninstall**.

If you uninstall an instance on Auditor that includes Server part (full installation), all remote
client consoles will become inoperable.

## Uninstall Compression and Core Services

Perform the procedures below if you used Compression Services and Core Services for data collection
(i.e., the **Network traffic compression** option was enabled).

Some Auditor Compression services are stopped but not removed when the product is uninstalled. You
need to delete them manually prior to uninstalling Auditor.

### Delete Netwrix Auditor for Active Directory Compression Service

Follow the steps to uninstall the service.

**Step 1 –** Navigate to the Active Directory monitoring plan you are using. In the command prompt,
execute the following command:

**Step 2 –** Select your Active Directory data source.

**Step 3 –** Click **Edit data source** on the right.

**Step 4 –** Uncheck the **Enable network traffic compression** checkbox.

**Step 5 –** Remove the network traffic compression service on the domain controller by executing
the following command:

```
sc delete adcrsvc
```

### Delete Netwrix Auditor for SharePoint Core Service

Follow the steps to delete the Netwrix Auditor for the SharePoint Core Service.

**Step 1 –** In the audited SharePoint farm, navigate to the computer where Central Administration
is installed and where the Netwrix Auditor for SharePoint Core Service resides.

**Step 2 –** Navigate to **Start > Control Panel > Programs and Features**.

**Step 3 –** Select the Netwrix Auditor **for SharePoint Core Service** and click Uninstall.

**CAUTION:** Once you click Uninstall you cannot cancel the uninstallation. The Netwrix Auditor
**for SharePoint Core Service** will be uninstalled even if you click Cancel.

### Delete Netwrix Auditor for Windows Server Compression Service

**NOTE:** Perform this procedure only if you enabled the Compression Service for data collection.

Follow the steps to delete the Netwrix Auditor for Windows Server Compression Service.

**Step 1 –** On the target servers, navigate to **Start > Control Panel > Programs and Features**.

**Step 2 –** Select **Netwrix Auditor for Windows Server** **Compression Service** and click
**Uninstall**.

### Delete Netwrix Auditor Mailbox Access Core Service

Follow the steps to delete a Netwrix Auditor Mailbox Access Core Service.

**Step 1 –** In the command prompt, execute the following command:

```
sc delete "Netwrix Auditor Mailbox Access Core Service"
```

**Step 2 –** Remove the following folder: _%SYSTEMROOT%\Netwrix Auditor\Netwrix Auditor Mailbox
Access Core Service_

If any argument contains spaces, use double quotes.

### Delete Netwrix Auditor User Activity Core Service

Follow the steps to remove the Core Service via Auditor client on the computer where the Auditor
Server resides:

**Step 1 –** In Auditor client, navigate to All **monitoring plans** and specify the plan.

**Step 2 –** In the right pane, select the **Items** tab.

**Step 3 –** Select a computer in the list and click **Remove**. The Netwrix Auditor **User Activity
Core Service** will be deleted from the selected computer. Perform this action with other computers.

**Step 4 –** In the left pane navigate to **All monitoring plans >__**User Activity monitoring
plan > Monitored Computers.__ Make sure that the computers you have removed from auditing are no
longer present in the list.

**Step 5 –** In case some computers are still present in the list, select them one by one and click
**Retry Uninstallation**. If this does not help, remove the Core Services manually from the target
computers through **Programs and Features**.

Remove the Netwrix Auditor User Activity Core Service manually on each audited computer:

**Step 1 –** Navigate to **Start > Control Panel > Programs and Features**.

**Step 2 –** Select the **Netwrix Auditor User Activity** **Core Service** and click **Uninstall**.

**NOTE:** You may also use the attached PowerShell script in order to remove the User Activity Core Service from multiple systems: [Uninstall-NetwrixProduct.ps1](/files/auditor/Uninstall-NetwrixProduct.ps1)

### Delete the Netwrix Auditor Application Deployment Service

The Netwrix Auditor **Application Deployment Service** allows collecting file events and data. The
service runs on the target servers.

**NOTE:** Perform this procedure only if you enabled the Network traffic compression option for
Windows File Servers data collection.

Follow the steps to delete the Netwrix Auditor Application Deployment Service.

**Step 1 –** On the target server, navigate to **Start > Registry Editor > Programs and Features**.

**Step 2 –** Delete the **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NwxExecSvc** registry
key.

**Step 3 –** Restart your machine and the service will be removed.

### Delete Netwrix Auditor for File Servers Compression Service

The Netwrix Auditor for File Servers Compression Service runs on the Auditor Server host as
designed.

**NOTE:** This is applicable for NetApp and Dell Data Storage sources. Delete the service
irrespective of the Network traffic compression option for Dell Isilon source.

Follow the steps to delete the Netwrix Auditor for File Servers Compression Service.

**Step 1 –** On the computer where AuditorServer resides, navigate to **Start > Control Panel >
Programs and Features**.

**Step 2 –** Select Netwrix Auditor**for File Servers Compression Service** and click **Uninstall**.

**NOTE:** This is applicable to NetApp and Dell Data Storage only if the service was installed on
the Auditor Server. For a Windows File Server, the service is the Netwrix Auditor Application
Deployment Service and runs on the File Server directly.

### Delete the Netwrix Auditor Event Log Compression Service

Follow the steps to delete the Netwrix Auditor Event Log Compression Service.

**Step 1 –** Navigate to **Start > Control Panel > Programs and Features**.

**Step 2 –** Select **Netwrix Auditor Event Log Compression** > **Service** and click **Uninstall**.
