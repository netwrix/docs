---
description: >-
  Describes how to use GroupID Management Shell commands to remove disabled
  users from the Include and Exclude lists of Smart Groups, and how to automate
  the process with Windows Task Scheduler by using an encrypted credential file.
keywords:
  - Smart Groups
  - disabled users
  - Include list
  - Exclude list
  - ExcludeRecipients
  - IncludeRecipients
  - GroupID Management Shell
  - Windows Task Scheduler
  - encrypted credential file
  - Netwrix Directory Manager
products:
  - directorymanager
sidebar_label: Removing Disabled Users from Include and Exclude Lists of Smart Groups
tags:
  - kb
  - group-management-and-operations
title: "Removing Disabled Users from Include and Exclude Lists of Smart Groups"
knowledge_article_id: kA0Qk0000003pPNKAY
---

# Removing Disabled Users from Include and Exclude Lists of Smart Groups

## Overview

This article describes how to remove disabled users from the Include and Exclude lists of Smart Groups in Netwrix Directory Manager 11 by using GroupID Management Shell commands. It also describes how to automate the process with Windows Task Scheduler so the script runs on a defined schedule, using an encrypted credential file instead of a password stored in the script.

The commands affect Smart Groups only. They do not affect dynasties.

## Instructions

> **IMPORTANT:** Netwrix strongly recommends running the commands against individual test Smart Groups first. Verify the results before you run them against all Smart Groups.

The commands treat an account as disabled when the Account is disabled flag (value `2`) is set in `userAccountControl`. This includes disabled accounts that have other flags set, such as Password never expires.

### Step 1 — Run the Commands Against a Single Test Smart Group

Use the following command to remove disabled user accounts from the `ExcludeRecipients` list of one Smart Group:

```powershell
$c=Get-SmartGroup -Identity "<Smart Group name>" -SmartGroupType "smartgroup" | Where-Object {$_.ExcludeRecipients -ne $null} | Select Name, ExcludeRecipients
foreach($i in $c){
    foreach($j in $i.ExcludeRecipients.split(",")){
        if([int](Get-Object -Identity $j -AttributesToLoad "userAccountControl").userAccountControl -band 2){
            Set-Smartgroup -Identity $i.Name -Remove @{ExcludeRecipients = $j}
        }
    }
}
```

Use the following command to remove disabled user accounts from the `IncludeRecipients` list of one Smart Group:

```powershell
$c=Get-SmartGroup -Identity "<Smart Group name>" -SmartGroupType "smartgroup" | Where-Object {$_.IncludeRecipients -ne $null} | Select Name, IncludeRecipients
foreach($i in $c){
    foreach($j in $i.IncludeRecipients.split(",")){
        if([int](Get-Object -Identity $j -AttributesToLoad "userAccountControl").userAccountControl -band 2){
            Set-Smartgroup -Identity $i.Name -Remove @{IncludeRecipients = $j}
        }
    }
}
```

Either command can display the following warning:

```text
Cannot implicitly convert type 'System.Dynamic.ExpandoObject' to 'Imanami.Groups.Management.Common.AttributeList.Group'
```

You can safely ignore this warning when the output also displays the following message:

```text
Status :: Update is Successful
```

### Step 2 — Run the Commands Against All Smart Groups

After you verify the test results, use the following command to remove disabled user accounts from the `ExcludeRecipients` list of all Smart Groups:

```powershell
$c=Get-SmartGroup -SmartGroupType "smartgroup" | Where-Object {$_.ExcludeRecipients -ne $null} | Select Name, ExcludeRecipients
foreach($i in $c){
    foreach($j in $i.ExcludeRecipients.split(",")){
        if([int](Get-Object -Identity $j -AttributesToLoad "userAccountControl").userAccountControl -band 2){
            Set-Smartgroup -Identity $i.Name -Remove @{ExcludeRecipients = $j}
        }
    }
}
```

Use the following command to remove disabled user accounts from the `IncludeRecipients` list of all Smart Groups:

```powershell
$c=Get-SmartGroup -SmartGroupType "smartgroup" | Where-Object {$_.IncludeRecipients -ne $null} | Select Name, IncludeRecipients
foreach($i in $c){
    foreach($j in $i.IncludeRecipients.split(",")){
        if([int](Get-Object -Identity $j -AttributesToLoad "userAccountControl").userAccountControl -band 2){
            Set-Smartgroup -Identity $i.Name -Remove @{IncludeRecipients = $j}
        }
    }
}
```

### Step 3 — Automate the Process with Windows Task Scheduler

The scheduled script reads the service account credential from an encrypted file instead of storing the password in the script. Windows encrypts the file with the Data Protection API (DPAPI), so only the account that created it, on the same server, can read it.

> **IMPORTANT:** Create the credential file while signed in as the account that runs the scheduled task. Windows cannot read a file created by another account or copied from another server. If the service account password changes, create the file again.

Complete the following steps on the Directory Manager server:

1. Sign in to the server as the service account, or start PowerShell 7 as that account:

    ```batch
    runas /user:<DOMAIN>\<service-account> "C:\Program Files\PowerShell\7\pwsh.exe"
    ```

2. In that PowerShell 7 window, run the following commands to create the credential file. Enter the service account user name (`<DOMAIN>\<service-account>`) and password when prompted:

    ```powershell
    New-Item -ItemType Directory -Path 'C:\GroupIDScripts' -Force | Out-Null
    Get-Credential -Message 'Directory Manager service account' | Export-Clixml -Path 'C:\GroupIDScripts\groupid-cred.xml'
    ```

3. Copy the following script into a text editor and save it as `C:\GroupIDScripts\Remove-DisabledFromSmartGroups.ps1`. Replace `<IdentityStoreID>` with your Identity Store ID. The script removes disabled users from both the Include and Exclude lists of all Smart Groups.

    ```powershell
    # --- settings ---
    $IdentityStoreId = <IdentityStoreID>
    $CredentialFile  = 'C:\GroupIDScripts\groupid-cred.xml'
    $LogFile         = "C:\GroupIDScripts\Logs\RemoveDisabled_$(Get-Date -Format 'yyyyMMdd_HHmmss').log"

    $ErrorActionPreference = 'Stop'
    New-Item -ItemType Directory -Path (Split-Path $LogFile) -Force | Out-Null
    Start-Transcript -Path $LogFile

    try {
        # --- credentials (DPAPI-encrypted file, readable only by this account on this server) ---
        if (-not (Test-Path $CredentialFile)) {
            throw "Credential file not found: $CredentialFile. Create it as the task account with Get-Credential | Export-Clixml."
        }
        $Cred = Import-Clixml -Path $CredentialFile

        # --- load GroupID v11 Management Shell ---
        $srcu = [reflection.assembly]::LoadFrom('C:\Program Files\PowerShell\7\System.Windows.Forms.dll')
        $OnAssemblyResolve = [System.ResolveEventHandler]{
            param($sender, $e)
            if ($e.Name -like "System.Windows.Forms, Version=*") { return $srcu }
            return $null
        }
        [System.AppDomain]::CurrentDomain.add_AssemblyResolve($OnAssemblyResolve)

        $reg = Get-ItemProperty -Path 'HKLM:\SOFTWARE\Microsoft\PowerShell\1\PowerShellSnapIns\Imanami.Groups.Management.PowerShell.Admin11'
        $appbase = $reg.ApplicationBase
        Import-Module -Name (Join-Path $appbase 'GroupIDManagementShell\bin\Imanami.GroupID.Management.dll') -Force
        Set-ModulePath -ModulePath (Join-Path $appbase 'GroupIDManagementShell\bin')

        # --- connect to identity store (the cmdlet reports failures as text, so check its output) ---
        $conn = Connect-IdentityStore -AuthenticationMode Credential -IdentityStoreId $IdentityStoreId -Credential $Cred
        if ($conn -match 'Unable to connect') { throw "Connect-IdentityStore failed: $conn" }

        # --- remove disabled users from Include and Exclude lists ---
        foreach ($attr in 'IncludeRecipients', 'ExcludeRecipients') {
            $groups = Get-SmartGroup -SmartGroupType "smartgroup" | Where-Object { $_.$attr -ne $null } | Select-Object Name, $attr
            foreach ($g in $groups) {
                if ($g.$attr -is [string]) { $members = $g.$attr.Split(",") } else { $members = @($g.$attr) }
                foreach ($m in $members) {
                    if ([string]::IsNullOrWhiteSpace($m)) { continue }
                    $uac = [int](Get-Object -Identity $m -AttributesToLoad "userAccountControl").userAccountControl
                    if ($uac -band 2) {   # 2 = Account is disabled
                        Write-Output "Removing $m from $attr of $($g.Name)"
                        Set-SmartGroup -Identity $g.Name -Remove @{ $attr = $m }
                    }
                }
            }
        }
    }
    catch {
        Write-Output "ERROR: $($_.Exception.Message)"   # written to the log before it closes
        throw
    }
    finally {
        Stop-Transcript
    }
    ```

    To find the Identity Store ID, select **SQL Management Studio** > **GroupID Database** > **Tables** > **SVC.identitystore** > **Select Top 1000 Rows**.

4. Run the script once from the PowerShell 7 window that you opened in step 1, and then check the log file in `C:\GroupIDScripts\Logs`:

    ```powershell
    & 'C:\GroupIDScripts\Remove-DisabledFromSmartGroups.ps1'
    ```

5. In **Windows Task Scheduler**, create a task with the following settings:

    - **General** tab: run the task as the service account that created the credential file, and select **Run whether user is logged on or not**. The account needs the Log on as a batch job right.
    - **Triggers** tab: set the schedule you need.
    - **Actions** tab: set **Program/script** to `C:\Program Files\PowerShell\7\pwsh.exe` and **Add arguments** to:

        ```text
        -NoProfile -ExecutionPolicy Bypass -File "C:\GroupIDScripts\Remove-DisabledFromSmartGroups.ps1"
        ```

    For more Task Scheduler configuration steps, see [How to Run PowerShell Script from Task Scheduler ⸱ Netwrix 🡥](https://netwrix.com/en/resources/blog/how-to-automate-powershell-scripts-with-task-scheduler/).
