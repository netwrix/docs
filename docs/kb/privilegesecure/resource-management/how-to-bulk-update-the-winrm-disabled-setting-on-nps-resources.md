---
description: >-
  Shows how to bulk-clear the "WinRM Disabled" flag on Windows NPS resources
  managed by Netwrix Privilege Secure using a PowerShell script and the SbPAM
  API.
keywords:
  - WinRM
  - NPS
  - Netwrix Privilege Secure
  - PowerShell
  - SbPAM
  - WinRM Disabled
  - managed resources
  - bulk update
products:
  - privilege-secure-access-management
sidebar_label: How to Bulk Update the "WinRM Disabled" Setting on
tags: []
title: How to Bulk Update the "WinRM Disabled" Setting on NPS Resources
knowledge_article_id: kA04u000001112eCAA
---

# How to Bulk Update the "WinRM Disabled" Setting on NPS Resources

## Question

Some servers are added with the **WinRM Disabled** option. It is only possible to connect by manually changing the option. Is there another way to do this?

## Answer

> **IMPORTANT:** If WinRM is disabled during the initial scan of the domain resources, the subsequent scan and addition of resources would be performed with WinRM disabled as well

Follow the steps below:

1. Make sure that PowerShell 7.1 is installed. Assets and v7.1.7 release info are available on the [PowerShell Team's Organization Page ⸱ GitHub 🫱🏽‍🫲🏽](https://github.com/PowerShell/PowerShell/releases/tag/v7.1.7)

2. Install `SbPAMPowershellModules`. Location: Netwrix Privilege Secure installation directory > the **Extras** folder

3. Run the following script:

```powershell
$user = Read-Host -Prompt "Enter your Privilege Secure administrator account (eg: 'DOMAIN\username')"
                $password = Read-Host -Prompt "Enter your Privilege Secure admin password" -MaskInput
                $sbpamUri = (Read-Host -Prompt "Enter your Privilege Secure URL, ending in :6500 (eg: 'https://localhost:6500')").TrimEnd("/")
                $setValueResponse = Read-Host -Prompt "Set all Windows resources with 'WinRM Disabled' = True to 'WinRM Disabled' = False ? Y or N"
                if ($setValueResponse.toLower() -eq "y" -or $setValueResponse.ToLower() -eq "yes") { $setValue = $true }
                else { $setValue = $false }
                
                [securestring]$secStringPassword = ConvertTo-SecureString $password -AsPlainText -Force
                [pscredential]$userCred = New-Object System.Management.Automation.PSCredential ($user, $secStringPassword)
                
                #get the SbPAMAPI module (must be installed - PowerShell 7.1 required)
                Import-Module SbPAMAPI -Force
                
                # create the web session
                $WebSession = New-Object Microsoft.PowerShell.Commands.WebRequestSession
                
                # grab the user token
                $token = Get-SbPAMToken -Credential $userCred -Uri $sbpamUri -WebSession $WebSession -SkipCertificateCheck -ErrorAction Stop
                if ($null -eq $userSecret) {
                    $userCode = Read-Host -Prompt "Enter SbPAM MFA Code (if MFA is OFF - just type '0')"
                }
                else {
                    $userCode = Get-SbPAMTotp -Secret $UserSecret
                }
                $userMfaToken = Get-SbPAMMfaToken -Uri $sbpamUri -Token $token -Code $userCode -WebSession $WebSession -SkipCertificateCheck -ErrorAction Stop
                
                if ($userMfaToken.length -gt 0) { Write-Host "Auth token obtained." }
                else { Write-Host "Auth token not obtained." }
                
                #get the list of all Windows resources
                Write-Host "Obtaining list of managed resources"
                $hostsArrayList = New-Object System.Collections.ArrayList
                $take=1000; $skip = 0;
                $hostResourceURI = "$sbpamUri/api/v1/ManagedResource/Search?skip=0&filterText=&take=$take&filterType=0"
                $hosts = Invoke-SbPAMRest -Uri $hostResourceURI -Token $userMfaToken -Method GET -ContentType "application/json"
                foreach($h in $hosts.data) { $hostsArrayList += $h }
                $recordsRemaining = $hosts.recordsTotal - $take
                while ($recordsRemaining -gt 0)
                {
                    $skip++
                    $startingPoint = ($skip*$take)
                    $hostResourceURI = "$sbpamUri/api/v1/ManagedResource/Search?skip=$startingPoint&filterText=&take=$take&filterType=0"
                    $hosts = Invoke-SbPAMRest -Uri $hostResourceURI -Token $userMfaToken -Method GET -ContentType "application/json"
                    foreach($h in $hosts.data) { $hostsArrayList += $h }
                    $recordsRemaining = $recordsRemaining - $take
                }
                
                #Write-Host "Resource count (all platforms) - $($hostsArrayList.Count)"
                
                foreach($row in $hostsArrayList)
                {
                    if ($row.platformName -eq "Windows")
                    {
                        Write-Host "Windows Resource: $($row.dnsHostName) has WinRM Disabled set to $($row.disableWinRm)"
                        if ($row.disableWinRm -ne $false -and $setValue -eq $true)
                        {
                            $managedResourceURI = "$sbpamUri/api/v1/ManagedResource/$($row.id)"
                            $rowPayload = $row
                            $rowPayload.disableWinRm = $false
                            $rowJson = $rowPayload | ConvertTo-Json
                            $putCall = Invoke-SbPAMRest -Uri $managedResourceURI -Token $userMfaToken -Method PUT -ContentType "application/json" -Body $rowJson
                            Write-Host "$($putCall.name) - WinRM Disabled is now set to False."
                        }
                    }
                }
```

