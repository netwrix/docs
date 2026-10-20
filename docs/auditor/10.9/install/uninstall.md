---
title: "Uninstall Netwrix Auditor"
description: "Uninstall Netwrix Auditor"
sidebar_position: 90
---

# Uninstall Netwrix Auditor

This topic provides instructions to uninstall Netwrix Auditor.

**NOTE:** If you enabled network traffic compression for data collection, ensure to disable it
before uninstalling the product. Some network compression services must be removed manually. See the
Uninstall Compression and Core Services topic for additional information.

To uninstall Auditor:

**Step 1 –** On the computer where Auditor is installed, navigate to **Start > Control Panel >
Programs and Features**.

**Step 2 –** Select Netwrix Auditor and click **Uninstall**.

If you uninstall an instance on Auditor that includes Server part (full installation), all remote
client consoles will become inoperable.

## Uninstall Compression and Core Services

Perform the following procedures if you used Compression Services and Core Services for data
collection (i.e., the **Network traffic compression** option was enabled).

Uninstalling the product stops but doesn't remove some Auditor Compression services. You need to
delete them manually before uninstalling Auditor.

### Delete Netwrix Auditor for Active Directory Compression Service

To uninstall the service:

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

To delete the Netwrix Auditor for the SharePoint Core Service:

**Step 1 –** In the audited SharePoint farm, navigate to the computer where Central Administration
is installed and where the Netwrix Auditor for SharePoint Core Service resides.

**Step 2 –** Navigate to **Start > Control Panel > Programs and Features**.

**Step 3 –** Select the Netwrix Auditor **for SharePoint Core Service** and click Uninstall.

**CAUTION:** After you click Uninstall, you can't cancel the uninstallation. Netwrix Auditor
**for SharePoint Core Service** continues uninstalling even if you click Cancel.

### Delete Netwrix Auditor for Windows Server Compression Service

**NOTE:** Perform this procedure only if you enabled the Compression Service for data collection.

To delete the Netwrix Auditor for Windows Server Compression Service:

**Step 1 –** On the target servers, navigate to **Start > Control Panel > Programs and Features**.

**Step 2 –** Select **Netwrix Auditor for Windows Server** **Compression Service** and click
**Uninstall**.

### Delete Netwrix Auditor Mailbox Access Core Service

To delete a Netwrix Auditor Mailbox Access Core Service:

**Step 1 –** In the command prompt, execute the following command:

```
sc delete "Netwrix Auditor Mailbox Access Core Service"
```

**Step 2 –** Remove the following folder: _%SYSTEMROOT%\Netwrix Auditor\Netwrix Auditor Mailbox
Access Core Service_

If any argument contains spaces, use double quotes.

### Delete Netwrix Auditor User Activity Core Service

To remove the Core Service via Auditor client on the computer where the Auditor Server resides:

**Step 1 –** In Auditor client, navigate to All **monitoring plans** and specify the plan.

**Step 2 –** In the right pane, select the **Items** tab.

**Step 3 –** Select a computer in the list and click **Remove**. Auditor deletes the Netwrix Auditor
**User Activity Core Service** from the selected computer. Perform this action with other computers.

**Step 4 –** In the left pane navigate to **All monitoring plans >\_\_**User Activity monitoring
plan > Monitored Computers.\_\_ ensure that the computers you have removed from auditing are no
longer present in the list.

**Step 5 –** In case some computers are still present in the list, select them one by one and click
**Retry Uninstallation**. If this doesn't help, remove the Core Services manually from the target
computers through **Programs and Features**.

Remove the Netwrix Auditor User Activity Core Service manually on each audited computer:

**Step 1 –** Navigate to **Start > Control Panel > Programs and Features**.

**Step 2 –** Select the **Netwrix Auditor User Activity** **Core Service** and click **Uninstall**.

**NOTE:** You may also use the attached PowerShell script to remove the User Activity Core Service from multiple systems: [Uninstall-NetwrixProduct.ps1](/files/auditor/Uninstall-NetwrixProduct.ps1)

### Delete the Netwrix Auditor Application Deployment Service

The Netwrix Auditor **Application Deployment Service** allows collecting file events and data. The
service runs on the target servers.

**NOTE:** Perform this procedure only if you enabled the Network traffic compression option for
Windows File Servers data collection.

To delete the Netwrix Auditor Application Deployment Service:

**Step 1 –** On the target server, navigate to **Start > Registry Editor > Programs and Features**.

**Step 2 –** Delete the **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NwxExecSvc** registry
key.

**Step 3 –** Restart your machine to remove the service.

### Delete Netwrix Auditor for File Servers Compression Service

The Netwrix Auditor for File Servers Compression Service runs on the Auditor Server host as
designed.

**NOTE:** This is applicable for NetApp and Dell Data Storage sources. Delete the service
irrespective of the Network traffic compression option for Dell Isilon source.

To delete the Netwrix Auditor for File Servers Compression Service:

**Step 1 –** On the computer where AuditorServer resides, navigate to **Start > Control Panel >
Programs and Features**.

**Step 2 –** Select Netwrix Auditor**for File Servers Compression Service** and click **Uninstall**.

**NOTE:** This is applicable to NetApp and Dell Data Storage only if the service was installed on
the Auditor Server. For a Windows File Server, the service is the Netwrix Auditor Application
Deployment Service and runs on the File Server directly.

### Delete the Netwrix Auditor Event Log Compression Service

To delete the Netwrix Auditor Event Log Compression Service:

**Step 1 –** Navigate to **Start > Control Panel > Programs and Features**.

**Step 2 –** Select **Netwrix Auditor Event Log Compression** > **Service** and click **Uninstall**.
