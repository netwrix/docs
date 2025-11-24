---
description: >-
  Shows how to manually update Netwrix Auditor User Activity Core Service on
  single or multiple target servers when versions mismatch, including PowerShell
  and batch methods.
keywords:
  - netwrix
  - auditor
  - user activity
  - core service
  - UACoreSVCSetup
  - uninstall
  - powershell
  - batch
  - UAVR
products:
  - auditor
sidebar_label: Manually Update User Activity Core Service
tags: []
title: "Manually Update User Activity Core Service"
knowledge_article_id: kA0Qk0000000PJNKA2
---

# Manually Update User Activity Core Service

## Question

The Netwrix Auditor User Activity Core Service version in a target server does not correspond to the version of the Auditor server. Is it possible to manually update User Activity Core Service in either all or specific target servers?

## Answer

> **NOTE:** Refer to the following article for additional information on establishing the version of your Auditor server: [How to Find Out My Netwrix Auditor Version](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-find-out-my-netwrix-auditor-version)

> **IMPORTANT:** It is recommended to stop User Activity services in the Netwrix server before making changes to installed Core Services in targets. Run the following command in elevated PowerShell to stop User Activity Core Service and Audit Service:
>
> ```powershell
> Stop-Service -DisplayName "Netwrix Auditor User Activity *"
> ```

User Activity Core Service is designed to be deployed automatically when adding items to the corresponding monitoring plan. The Core Service version is supposed to match the Auditor server version − the service is updated on each Auditor server upgrade. In case of connectivity issues during the upgrade procedure, Core Service in a target server may be skipped leading to a version mismatch. Refer to the following steps to manually update Core Service in affected servers depending on the scope of the out-of-date Core Service targets.

### Update Core Service in a single target server

1. Remove the server item from the User Activity monitoring plan and add it again. In the User Activity monitoring plan, select the target server and click **Remove item** in the right pane. To verify the status of Core Service in a target server, select **Edit Data Source** > the **Monitored Computers** tab.
2. Manually delete the User Activity Core Service app from the target server. In the target server, proceed to the **Settings** menu > **Apps (& Features)** > select **Netwrix Auditor User Activity Core Service** > click **Uninstall**. Allow the Auditor server some time to reinstall Core Service.
3. Update Core Service by manually installing the new version in the affected server − in your Auditor server, copy the `UACoreSVCSetup.exe` file located by default in the following directory:

   ```text
   C:\Program Files (x86)\Netwrix Auditor\User Activity Video Recording
   ```

   Copy the `.exe` file to the affected server and run it. Proceed with the installation steps to update your Core Service version.

> **IMPORTANT:** If User Activity services were previously stopped in Auditor server, start them after deleting Core Service in target servers. This will allow Auditor server to install the new version automatically or detect the updated service. Run the following command in elevated PowerShell:
>
> ```powershell
> Start-Service -DisplayName "Netwrix Auditor User Activity *"
> ```

### Manually update Core Service in multiple target servers − Option #1

1. Download the following PowerShell script: [Uninstall Netwrix Product](https://www.netwrix.com/download/products/KnowledgeBase/Uninstall-NetwrixProduct.ps1).
2. In elevated PowerShell in your Netwrix server, run the script to uninstall Core Service from all target servers in the User Activity monitoring plan:

   ```powershell
   . .\Uninstall-NetwrixProduct.ps1
   Uninstall-UAVRAgents -Verbose
   ```

   > **NOTE:** Make sure to either `cd` or `Set-Location -Path` to the directory containing the script.

3. The output for the PowerShell script should include the `Status: Uninstalled` lines.

> **IMPORTANT:** If User Activity services were previously stopped in Auditor server, start them after deleting Core Service in target servers. This will allow Auditor server to install the new version automatically. Run the following command in elevated PowerShell:
>
> ```powershell
> Start-Service -DisplayName "Netwrix Auditor User Activity *"
> ```

### Manually update Core Service in multiple target servers − Option #2

1. Create a temporary folder for the files used. This article implements the **tmp** folder located in `C:\TMP`.
2. Create a `.txt` file containing a list of affected servers. To automate the task, you can use the following PowerShell command:

   ```powershell
   Get-ADComputer -Filter * -SearchBase "DistinguishedName_of_affected_servers_OU" | Select -Expand Name | Out-File -filepath C:\TMP\servers.txt -Encoding ascii
   ```

   Replace the `DistinguishedName_of_affected_servers_OU` with the actual distinguished name of the OU containing affected servers. Replace the filepath with the actual filepath for the folder used.

3. Create a `delete_UAVR.bat` file in the same folder. Edit it to add the following contents:

   ```batch
   @echo off
   for /F "tokens=*" %%A in (servers.txt) do echo Processing %%A & wmic /node:"%%A" product where "description='Netwrix Auditor User Activity Core Service'" call uninstall
   ```

   Save the changes.

4. Run PowerShell as a user having permissions to uninstall applications in target servers.
5. Run the `.bat` file:

   ```powershell
   . .\delete_UAVR.bat
   ```

   > **NOTE:** Make sure to either `cd` or `Set-Location -Path` to the directory containing the `.bat` file.

6. The output for each deleted Core Service in each server should include a `ReturnValue = 0` line.
7. Once the `.bat` file finishes running, you can run it again to verify Core Service instances were deleted.

> **IMPORTANT:** If User Activity services were previously stopped in Auditor server, start them after deleting Core Service in target servers. This will allow Auditor server to install the new version automatically. Run the following command in elevated PowerShell:
>
> ```powershell
> Start-Service -DisplayName "Netwrix Auditor User Activity *"
> ```

## Related links

- [How to Find Out My Netwrix Auditor Version](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-find-out-my-netwrix-auditor-version)
- [Uninstall Netwrix Product](https://www.netwrix.com/download/products/KnowledgeBase/Uninstall-NetwrixProduct.ps1)
