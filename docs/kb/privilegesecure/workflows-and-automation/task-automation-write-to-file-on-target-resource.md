---
description: >-
  Example Task Automation script that finds and replaces strings in a file on a
  target resource, using a PowerShell script you can modify.
keywords:
  - task automation
  - write file
  - PowerShell
  - find and replace
  - SbPAM
  - Netwrix Privilege Secure
  - remote execution
  - Invoke-Command
  - Run Custom Powershell Script
products:
  - privilegesecure
sidebar_label: Writing to a File on a Target Resource with Task Automation
tags:
  - kb
  - workflows-and-automation
title: "Writing to a File on a Target Resource with Task Automation"
knowledge_article_id: kA0Qk00000015GzKAI
---

# Writing to a File on a Target Resource with Task Automation

## Overview

This article describes how to use a Task Automation script to write to a specified file on the targeted resource in Netwrix Privilege Secure for Access Management. The example provided is a simple find-and-replace script. It gives a basic framework for using Task Automation to write to files and can be modified as needed.

## Instructions

1. In Privilege Secure, go to the **Activities** page and create an Activity with the **Task Automation** Activity Type. Configure the activity to provide sufficient privilege to remotely execute scripts on the target resource. The **Login Account**, **Requester Login Format**, and **Pre- and Post-Session** action steps should reflect this.
   ![Activity configured with the Task Automation Activity Type, showing the Login Account, Requester Login Format, and Pre- and Post-Session settings](./../0-images/ka0Qk0000003etl_0EMQk000004iG8P.png)

2. In the **Session** of the Activity, click the **+** button and add a **Run Custom Powershell Script** action step.

3. Enter the following script block in the action step:

   ```powershell
   $findString = "findMe"
   $replaceString = "replaceMe"
   $filePath = "C:\sampledir\example.txt" #specify your file path here!

   Import-Module (Join-Path $SbPAMScriptDirectory "SbPAMWindows.psm1")
   if (![string]::IsNullOrEmpty($HostId)) {
       $targetHost = Get-SbPAMHost -Id $HostId
       if ($null -eq $targetHost -or [string]::IsNullOrEmpty($targetHost.DnsHostName)) {
           Write-Error "Unable to find host."
           exit 2
       }
       Write-Host (ConvertTo-Json $targetHost)
   }

   $session = New-SbPAMPSSession -RemoteHost $targetHost -Credential (Get-PSCredential -Credentials $Credentials)
   if ($null -ne $session) {
   	try{
   	Add-SbPAMActionLog -Type Info -Message "Running custom powershell script block - Write to File: $filePath - Find: $findString - Replace: $replaceString"
   	Invoke-Command -Session $Session -ArgumentList $findString,$replaceString,$filePath `
   		-ScriptBlock {
   			param($findString,$replaceString,$filePath)

   			try {
   				(Get-Content $filePath).Replace($findString,$replaceString) | Set-Content $filePath
   				Add-SbPAMActionLog -Type Info -Message "Running custom powershell script block - Write to File - SUCCESS"
   			}
   			catch {
   				Add-SbPAMActionLog -Type Info -Message "Running custom powershell script block - Write to File - ERROR"
   			} } -ErrorAction SilentlyContinue 
   	}
   	finally {Remove-PSSession -Session $session}
   }

   Add-SbPAMActionLog -ActionQueueActionId $ActionQueueActionId -Type Info -Message "Finished custom powershell script block - Write to File: $filePath - Find: $findString - Replace: $replaceString"
   ```

4. Modify the script block according to your needs. This example is for a find-and-replace, with the ` $findString` and ` $replaceString` containing the original and replacement values, and the ` $filePath` containing the local path for the target file. This is just a basic example and can be modified for different use cases.

5. Save the activity and ensure that it is added to an **Access Policy**. You can now run the activity; it finds and replaces strings in the targeted file on the targeted resource.
