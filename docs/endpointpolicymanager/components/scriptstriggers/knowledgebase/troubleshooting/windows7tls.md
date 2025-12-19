---
title: "How do I update Windows 7 machines to TLS 1.2 such that they work with Endpoint Policy Manager Cloud?"
description: "How do I update Windows 7 machines to TLS 1.2 such that they work with Endpoint Policy Manager Cloud?"
sidebar_position: 80
---

# How do I update Windows 7 machines to TLS 1.2 such that they work with Endpoint Policy Manager Cloud?

First know that Windows 7 is not officially supported by Netwrix Endpoint Policy Manager (formerly
PolicyPak) and may or may not work for all functions.

Pre-read the following to know what is known to NOT work in Windows 7 before continuing:

[How does Endpoint Policy Manager support (and not support) Windows 11?](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/gettingstarted/windows11.md)

Then after that, if you still wish to use Endpoint Policy Manager with Windows 7 and Endpoint Policy
Manager Cloud, you must update Windows 7 to be TLS 1.2 complaint.

Then to adjust on these computers, all pre-Windows 10 machines must be upgraded to use TLS 1.2 on
the client. The how-to from Microsoft is
here:[https://docs.microsoft.com/en-us/mem/configmgr/core/plan-design/security/enable-tls-1-2-client](https://docs.microsoft.com/en-us/mem/configmgr/core/plan-design/security/enable-tls-1-2-client)The
quick version goes like this:

- Have Service Pack 1 installed (on Windows 7).
- Have the Windows Update KB3140245 installed. (Download from
  [https://www.catalog.update.microsoft.com/search.aspx?q=kb3140245](https://www.catalog.update.microsoft.com/search.aspx?q=kb3140245).)
- Update the registry. (Download the Microsoft
  [https://support.microsoft.com/en-us/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392#bkmk_easy](https://support.microsoft.com/en-us/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392#httpssupportmicrosoftcomen-ustopicupdate-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392bkmk_easy)
  which is downloadable as a .MSI for easy deliver.)

Note that Endpoint Policy Manager Support cannot be engaged for you to update these machines on your
behalf. And we cannot automatically validate or report that you have performed the steps correctly.

If you wish to script the installation of the KB3140245 hotfix and the Registry with the "Easy fix"
you can do so with two scripts. These scripts will work with Endpoint Policy Manager Cloud and
Endpoint Policy Manager Scripts Manager (GPO, MDM or Cloud.)

The video explaining how to do this by hand, or by script, or using Endpoint Policy Manager Scripts
can be found at : How do I update Windows 7 machines to TLS 1.2 such that they work with Endpoint
Policy Manager Cloud?

Note for the MSU file, you will need to stage it on Amazon S3 or another publicly readable service
like Azure Blob storage. The file cannot automatically be downloaded by Windows 7 in its original
home location because that download requires TLS 1.2; and the machine you're trying to update
doesn't support that yet.  Note also that the script references the 64-bit MSU file. You will need a
separate script to deliver the MSU to 32-bit Windows 7 machines. Or if you have Windows 8 machines
or Server 2008 R2 machines, use the corresponding MSU from the Microsoft Catalog referenced above.

Script 1: Win 7 MSU Update

```
# Microsoft MSU will be coming from = https://z_deleteme.s3.amazonaws.com/windows6.1-kb3140245-x64_5b067ffb69a94a6e5f9da89ce88c658e52a0dec0.msu
#Script starts here
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
# Set Download variables
$DownloadFolder = "c:\temp\apps"
$DownloadURL = "https://z_deleteme.s3.amazonaws.com/windows6.1-kb3140245-x64_5b067ffb69a94a6e5f9da89ce88c658e52a0dec0.msu"
$LocalDownloadFile = "c:\temp\apps\kb3140245-x64.msu"
#Create temp folder if not present
$tempfolder = "C:\temp"
if (-not (Test-Path $tempfolder -PathType Container))
{
New-Item -ItemType directory -Path $tempfolder
}
# Create apps folder and enable logging
New-Item -ItemType directory -Path $DownloadFolder
start-transcript -path "c:\temp\apps\kb3140245-x64_PS.log" -append
# Download and install kb3140245-x64.msu
If ((Test-Path $LocalDownloadFile -PathType Leaf) -eq $False)
{
Invoke-WebRequest -Uri $DownloadURL -OutFile $LocalDownloadFile
#install kb3140245-x64.msu silently and enable verbose logging
wusa.exe c:\temp\apps\kb3140245-x64.msu /quiet /norestart /log:c:\temp\apps\kb3140245-x64_MSU.log
}
#Script ends here
```

Script 2: Win 7 Easy Fix

```
# Microsoft EasyFix will be coming from here: https://download.microsoft.com/download/0/6/5/0658B1A7-6D2E-474F-BC2C-D69E5B9E9A68/MicrosoftEasyFix51044.msi
#Script starts here
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
# Set Download variables
$DownloadFolder = "c:\temp\apps"
$DownloadURL = "https://download.microsoft.com/download/0/6/5/0658B1A7-6D2E-474F-BC2C-D69E5B9E9A68/MicrosoftEasyFix51044.msi"
$LocalDownloadFile = "c:\temp\apps\MicrosoftEasyFix51044.msi"
#Create temp folder if not present
$tempfolder = "C:\temp"
if (-not (Test-Path $tempfolder -PathType Container))
{
New-Item -ItemType directory -Path $tempfolder
}
# Create apps folder and enable logging
New-Item -ItemType directory -Path $DownloadFolder
start-transcript -path "c:\temp\apps\MicrosoftEasyFix51044.msi_PS.log" -append
# Download and install MSEasyFix
If ((Test-Path $LocalDownloadFile -PathType Leaf) -eq $False)
{
Invoke-WebRequest -Uri $DownloadURL -OutFile $LocalDownloadFile
#install MSEasyFix silently and enable verbose logging
msiexec.exe /i c:\temp\Apps\MicrosoftEasyFix51044.msi /qn /L*V C:\temp\apps\MSEasyFix_install.log
}
#Script ends here
```


