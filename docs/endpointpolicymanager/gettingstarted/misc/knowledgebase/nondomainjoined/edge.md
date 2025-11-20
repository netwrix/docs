---
title: "How to use Scripts Manager to manually install and enable Endpoint Policy Manager Browser Router for new Edge Chromium?"
description: "How to use Scripts Manager to manually install and enable Endpoint Policy Manager Browser Router for new Edge Chromium?"
sidebar_position: 30
---

# How to use Scripts Manager to manually install and enable Endpoint Policy Manager Browser Router for new Edge Chromium?

The problem is that New Edge + PPC will not install the chrome extension. We have following steps
for Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts Manager that should work for Edge
Chromium.

You're welcome to test the PowerShell script manually for installing chrome extension on New Edge
Chromium + Non domain joined machines.

Pre-requisite

1. CRX (chrome extension file) for PPBR will be downloaded from Endpoint Policy Manager ShareFile
   link.
2. CRX file local path is defined in the script, you can change it if you like.

Steps:

**Step 1 –** Create and link a new policy to required Computer group

**Step 2 –** Select Endpoint Policy Manager Scripts Manager form the Create Policy list

**Step 3 –** Click on the Policy button drop-down and Select Policy

**Step 4 –** Choose Machine button at the Select scope for policy

**Step 5 –** Select Apply action and from drop-down chose PowerShell Script option

**Step 6 –** Paste the below script in to the window

![856_1_image-20211130230540-1_950x555](/images/endpointpolicymanager/troubleshooting/nondomain/856_1_image-20211130230540-1_950x555.webp)

**Step 7 –** Wait for Policy refresh or run PPCLOUD /SYNC at endpoint

**Step 8 –** Ask user to sign back in and launch Edge Chromium

**Step 9 –** Users will be presented with the following screen. Click Turn on extension

![856_2_image-20211130230540-2_950x436](/images/endpointpolicymanager/troubleshooting/nondomain/856_2_image-20211130230540-2_950x436.webp)

\*\*\*\*\* PowerShell Script to apply using Scripts Manager: Scripts & Triggers Manager >
[Knowledge Base](/docs/endpointpolicymanager/)

```
#Download the latest PPBR extension from shareFile/PolicyPak Support - Inbox/ppbr_crx/ppbr_21_2_0_0.crx
$url = "https://endpointpolicymanager.sharefile.com/d-sb40ca79b2ea646f08a90e860c4ef79c2"
#Path of the downloaded CRX file at the client-machines
New-Item -ItemType directory -Path C:\Temp\ppbr_ext\ -ErrorAction SilentlyContinue | foreach-object { if ($_ -notmatch "already exists") { write-error $_ } }
$output = "C:\Temp\ppbr_ext\ppbr_21_2_0_0.crx"
$start_time = Get-Date
#Copy-Item "C:\realFolder\*" "C:\realFolder_new" -recurse -ErrorVariable capturedErrors -ErrorAction SilentlyContinue
#$capturedErrors | foreach-object { if ($_ -notmatch "already exists") { write-error $_ } }
#Setting a registry path when Windows OS version is 32-bit.
$registryPathx86 = "HKLM:\Software\Microsoft\Edge\Extensions\fmbfiodledfjldlhiemaadmgppoeklbn"
#Setting a registry path when Windows OS version is 64-Bit.
$registryPathx64 = "HKLM:\Software\Wow6432Node\Microsoft\Edge\Extensions\fmbfiodledfjldlhiemaadmgppoeklbn"
#PPBR Extension version.
$version = "21.2.0.0"
$valueEXT = "https://clients2.google.com/service/update2/crx"
#Importing module for file transfer from the web.
Import-Module BitsTransfer
Start-BitsTransfer -Source $url -Destination $output
#OR
Start-BitsTransfer -Source $url -Destination $output -Asynchronous
Write-Output "Time taken: $((Get-Date).Subtract($start_time).Seconds) second(s)"
#Detecing a Windows OS versin on the host machine.
gwmi win32_operatingsystem | select osarchitecture
if ((gwmi win32_operatingsystem | select osarchitecture).osarchitecture -eq "64-bit")
{
    #64-bit support
    #New-ItemProperty -Path $registryPathx64 -Name $name -Value $output `
    #-PropertyType String -Force | Out-Null
    New-Item -Path $registryPathx64 -Force | Out-Null
    New-ItemProperty -Path $registryPathx64 -Name Path -Value $output `
    -PropertyType String -Force | Out-Null
    New-ItemProperty -Path $registryPathx64 -Name Version -Value $version `
    -PropertyType String -Force | Out-Null
    New-ItemProperty -Path $registryPathx64 -Name update_URL -Value $valueEXT `
    -PropertyType String -Force | Out-Null
    }
else
{
    #32-bit support
    #New-ItemProperty -Path $registryPathx86 -Name $name -Value $output `
    #-PropertyType String -Force | Out-Null
    New-Item -Path $registryPathx86 -Force | Out-Null
    New-ItemProperty -Path $registryPathx86 -Name Path -Value $output `
    -PropertyType String -Force | Out-Null
     New-ItemProperty -Path $registryPathx86 -Name Version -Value $version `
    -PropertyType String -Force | Out-Null
     New-ItemProperty -Path $registryPathx86 -Name update_URL -Value $valueEXT `
    -PropertyType String -Force | Out-Null
    }
```

