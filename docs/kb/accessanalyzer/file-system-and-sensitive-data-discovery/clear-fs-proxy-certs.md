---
description: >-
  Explains how to clear naa fsaa proxy certificates.
keywords:
  - FSAA
  - certificates
  - NAS
  - Windows File Server
  - FSAA Data Collector Wizard
  - Access Analyzer
  - Netwrix Access Analyzer
products:
  - access-analyzer
sidebar_label: "Clearing FSAA Proxy Certificates"
tags:
  - file-system-and-sensitive-data-discovery
title: >-
  Clearing FSAA Certificates for the Netwrix Enterprise Auditor FSAA Proxy Scanner Service
---
# Clearing FSAA Certificates for the Netwrix Enterprise Auditor FSAA Proxy Scanner Service

## Overview

This article explains how to clear certificates used by the **Netwrix Enterprise Auditor FSAA Proxy Scanner Service** (FSAA Proxy Service). These certificates may reside in the local machine or user certificate stores, depending on the account the service is running under.

You may need to perform this cleanup for one or more of the following reasons:

* **Uninstalling or decommissioning** the FSAA Proxy Service
* **Changing the service account** associated with the FSAA Proxy
* **Replacing or rotating certificates** due to **trust relationship changes**
* **Troubleshooting connectivity or authentication issues** related to certificate usage
* Using NAA v11.6.0.65 or earlier | NAA File System Proxy v11.6.0.19 or earlier

Before beginning, determine which account the FSAA Proxy Scanner service is running as by looking for the _Log On As_ account in Windows Services for the **Netwrix Enterprise Auditor FSAA Proxy Scanner** service. If running as **LocalSystem**, elevated access methods are required to remove certificates from the user profile for that account.


## Instructions

### Option 1 – Service Is Running as a Service Account


1. Move `FSAACertificateManager.exe` from `%SAInstallDir%\PrivateAssemblies\FILESYSTEMACCESS\Applet` to the FSAA Proxy Server.
2. Open **Command Prompt** as the service account used by FSAA Proxy.
3. Run the following commands one by one:

```cmd
cd C:\Path\to\FSAACertificateManager
.\FSAACertificateManager.exe -clearCertificatesFromStore -store Server -Location LocalMachine
.\FSAACertificateManager.exe -clearCertificatesFromStore -store Client -Location LocalMachine
.\FSAACertificateManager.exe -clearCertificatesFromStore -store CertificateAuthority -Location LocalMachine
```


---

### Option 2 – Service Is Running as LocalSystem (Using PsExec)


1. Move `FSAACertificateManager.exe` to the FSAA Proxy Server.
2. Install PSTools (PSExec) onto the FSAA Proxy Server from [Microsoft | PSTools](https://learn.microsoft.com/en-us/sysinternals/downloads/pstools)
3. Run:

```cmd
psexec -s -i cmd.exe
```


4. In the new console window, navigate to the tool's location:

```cmd
cd "C:\Path\to\FSAACertificateManager"
```


5. Run the following:

```cmd
.\FSAACertificateManager.exe -clearCertificatesFromStore -store Server -location CurrentUser
.\FSAACertificateManager.exe -clearCertificatesFromStore -store Client -location CurrentUser
.\FSAACertificateManager.exe -clearCertificatesFromStore -store CertificateAuthority -location CurrentUser
```


---

### Option 3 – LocalSystem Without PsExec (Using Scheduled Task)


1. Move `FSAACertificateManager.exe` to the FSAA Proxy Server.
2. In **PowerShell**, run:

```powershell
$action = New-ScheduledTaskAction -Execute "FSAACertificateManager.exe" -Argument "-clearCertificatesFromStore -store Server -location CurrentUser" -WorkingDirectory "C:\Path\to\FSAACertificateManager"
$principal = New-ScheduledTaskPrincipal -UserId "NT AUTHORITY\SYSTEM" -LogonType ServiceAccount -RunLevel Highest
Register-ScheduledTask -TaskName "CleanFSAACerts" -Action $action -Principal $principal
Start-ScheduledTask -TaskName "CleanFSAACerts"
Start-Sleep -Seconds 5
Unregister-ScheduledTask -TaskName "CleanFSAACerts" -Confirm:$false
```


3. Repeat the process for `Client` and `CertificateAuthority` stores.


---

### Option 4 – LocalSystem Without PsExec or Scheduled Tasks (Registry Deletion)


1. Open **PowerShell** as Administrator on the FSAA Proxy Server.
2. Run the following to delete certificates directly from the registry:

```powershell
$systemStores = @(
    "HKLM:\SOFTWARE\Microsoft\SystemCertificates\FSAA Certificate Authority Store",
    "HKLM:\SOFTWARE\Microsoft\SystemCertificates\FSAA Server Certificate Store",
    "HKLM:\SOFTWARE\Microsoft\SystemCertificates\FSAA Client Certificate Store"
)

foreach ($store in $systemStores) {
    if (Test-Path $store) {
        Remove-Item -Path $store -Recurse -Force
        Write-Host "Removed certificates from $store"
    }
}

$systemUserStore = "Registry::HKEY_USERS\S-1-5-18\Software\Microsoft\SystemCertificates"
$fsaaStores = @("FSAA Certificate Authority Store", "FSAA Server Certificate Store", "FSAA Client Certificate Store")

foreach ($storeName in $fsaaStores) {
    $path = Join-Path $systemUserStore $storeName
    if (Test-Path $path) {
        Remove-Item -Path $path -Recurse -Force
        Write-Host "Removed $storeName from SYSTEM user profile"
    }
}
```


---

### Option 5 – Create a Temporary Service for Cleanup


1. Move `FSAACertificateManager.exe` to the FSAA Proxy Server.
2. In **Command Prompt**, run:

```cmd
sc.exe create FSAACertCleanup binPath= "cmd.exe /c \"cd /d \"C:\Path\to\FSAACertificateManager\" && FSAACertificateManager.exe -clearCertificatesFromStore -store Server -location CurrentUser\"" type= own start= demand
sc.exe start FSAACertCleanup
timeout /t 3 /nobreak >nul
sc.exe delete FSAACertCleanup
```


3. Repeat for `Client` and `CertificateAuthority` stores as needed.


## Related Queries

* "How do I clean up FSAA certificates if the proxy is running as LocalSystem?"
* "Uninstalling Netwrix FSAA Proxy Scanner – what should I do with certificates?"
* "FSAA troubleshooting – trust issues and certificates"
* "Need to remove old FSAA service account certificates"
