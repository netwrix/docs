---
title: "How to Rollback CSE version from newer to older using PowerShell"
description: "How to Rollback CSE version from newer to older using PowerShell"
sidebar_position: 20
---

# How to Rollback CSE version from newer to older using PowerShell

## How To Implement:

Use PowerShell or PowerShell ISE running as Administrator to run the PowerShell script below on the
target machine where you would like the Netwrix Endpoint Policy Manager (formerly PolicyPak) CSE
(Client-Side Extension) to be rolled back.

## What This Script Does:

This script will check to see if the CSE version currently installed on a computer matches the
version defined under
the $OldVersion variable, OR if there is no CSE currently installed, if either of these conditions is evaluated to TRUE then the CSE version as defined by the $URL
variable will be downloaded to `"C:\Temp\PP_CSE"` and installed on the computer. If any CSE version
other than the version specified under the $OldVersion variable is installed on the computer then
the script will exit without doing anything.

```
#### Start of Script
#### Purpose: This script rolls the PolicyPak Client-Side Extension back from ($OldVersion) 20.8.2543 to ($NewVersion) 20.7.2513.
#### Inspired by and uses portions of script submitted by Jacob Hill
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
$software = "PolicyPak Client-Side Extension"
$installed = (Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* | Where { $_.DisplayName -eq $software }) -ne $null
$OldVersion = "20.8.2543"
$fileName = "PolicyPak Client-Side Extension x64-2513.msi" # $Filename should match the name of the file you uploaded.
$URL = "https://s3.amazonaws.com/0PolicyPakSupport/OldBuilds/$fileName" # $URL = Direct download link to MSI installer
$dir = "C:\Temp\PP_CSE\"
$logfile = $dir+"cse_rollback.log"
$OutPath = $dir+$fileName
# TIMESTAMP FUNCTION: Usage: Write-Output "$(Get-TimeStamp) Text goes here" | Out-file C:\log.txt -append
function Get-TimeStamp {
  return "[{0:MM/dd/yyyy} {0:HH:mm:ss}]" -f (Get-Date)
}
Function Install-Correct-Version {
  Write-Output "$(Get-TimeStamp) Install-Correct-Version Process started, downloading new CSE installation file." | Out-file $logfile -append
  (New-Object Net.WebClient).DownloadFile($URL, "$OutPath")
  Write-Output "$(Get-TimeStamp) Starting MSI installation." | Out-file $logfile -append
  Start-Process C:\Windows\System32\msiexec.exe -Wait -ArgumentList "/i `"$outPath`" /qn /L*V `"$dir\CSE_install.log`"" -NoNewWindow
  $NewVersion = (Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* | Where { $_.DisplayName -eq $software }).DisplayVersion
  Write-Output "$(Get-TimeStamp) Installation complete! Version $newVersion installed." | Out-file $logfile -append
  Return
}
# Create the storage directory if it does not exist.
If ((Test-Path -Path $dir) -eq $false)
{
  New-Item -Path $dir -ItemType directory
  Write-Output "$(Get-TimeStamp) Created the $dir directory." | Out-file $logfile -append
}
If(-Not $installed)
{
  Write-Output "$(Get-TimeStamp) '$software' is NOT installed." | Out-file $logfile -append
  Install-Correct-Version
  Return
}
else
{
  Write-Output "$(Get-TimeStamp) '$software' IS installed. Checking version." | Out-file $logfile -append
  $version = (Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* | Where { $_.DisplayName -eq $software }).DisplayVersion
  if ($version -eq $OldVersion)
  {
    Write-Output "$(Get-TimeStamp) Old version $version is installed. Uninstalling problematic version." | Out-file $logfile -append
    # REPLACE - replace the MSI uninstall code. The MSI code can be obtained by running the following command in PowerShell:
    # (Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* | Where { $_.DisplayName -eq "PolicyPak Client-Side Extension" }).UninstallString
    # For example the uninstall String for CSE version 2543 is: "MsiExec.exe /X{B3A3F160-51B6-41FD-9D89-054DA19C09B7}"
    Start-Process C:\Windows\System32\msiexec.exe -Wait -ArgumentList "/x {B3A3F160-51B6-41FD-9D89-054DA19C09B7} /q" -NoNewWindow
    Write-Output "$(Get-TimeStamp) Uninstall complete. Now installing correct version." | Out-file $logfile -append
    Install-Correct-Version
    Return
  }
  else
  {
  Write-Output "$(Get-TimeStamp) CSE Version $version is installed. No further action necessary" | Out-file $logfile -append
  Return
  }
}
Write-Output "$(Get-TimeStamp) *** Rollback PolicyPak CSE Process Finished ***" | Out-file $logfile -append
#### End of Script
```

Troubleshooting:

Logs for the Rollback process and MSI install process can both be found in `"C:\Temp\PP_CSE"` once
the script has executed.

