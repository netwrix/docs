---
description: >-
  Shows how to manually remove compression services from previously audited
  servers after you change the auditing scope for Windows Server Auditing or
  User Activity Auditing in Netwrix Auditor.
keywords:
  - compression
  - compression service
  - remove
  - Netwrix Auditor
  - Windows Server Auditing
  - User Activity Auditing
  - PsExec
  - PowerShell
products:
  - auditor
sidebar_label: How to Manually Remove Compression Services from A
tags: []
title: "How to Manually Remove Compression Services from Audited Servers"
knowledge_article_id: kA04u0000000HepCAE
---

# How to Manually Remove Compression Services from Audited Servers

## Question

I've changed the auditing scope for Windows Servers Auditing or User Activity Auditing monitoring plans. How to manually delete compression services from previously audited servers?

## Answer

### Prerequisites

Refer to the following list for prerequisites:

- Access to your domain contoller. All further activities should be done on a domain controller.
- Access to PowerShell.
- Access to a file share accessible from all servers.
- PsExec tool. Download the PsExec tool in PsExec ⸱ Microsoft 🛈: https://learn.microsoft.com/en-us/sysinternals/downloads/psexec

### Generate a list of affected servers

You can manually create the list, however, it is recommended to execute the following PowerShell command to create it:

```powershell
Get-ADComputer -Filter * -SearchBase "DIstinguishedName of an OU with affected servers" | Select -Expand Name | Out-File -filepath %PATH TO FILESHARE%\serverlist.txt
```

Do make sure to replace `*PATH TO FILESHARE*` with a relevant path.

### Add Compression Service installation files to your file share

For Windows Server Auditing:

```text
C:\Program Files (x86)\Netwrix Auditor\Windows Server Auditing\Netwrix.WSA.CompressionService.Setup.msi
```

For User Activity Auditing:

```text
C:\Program Files (x86)\Netwrix Auditor\User Activity Video Recording\UACoreSvcSetup.msi
```

### Create a text file

Depending on Compression Service, add the following lines to the file:

For Windows Server Auditing:

```text
msiexec /i "%PATH TO FILESHARE%\Netwrix.WSA.CompressionService.Setup.msi" /quiet
msiexec /x "%PATH TO FILESHARE%\Netwrix.WSA.CompressionService.Setup.msi" /quiet
```

For User Activity Auditing:

```text
msiexec /i "%PATH TO FILESHARE%\UACoreSvcSetup.msi" /quiet
msiexec /x %PATH TO FILESHARE%\UACoreSvcSetup.msi" /quiet
```

Name the file `"remove"` and add the `".bat"` extension to have the file named `remove.bat`.

### Execute the command via PowerShell

Open Powershell in the PSexec installation folder and execute the following command:

```text
./psexec64.exe \@"*PATH TO FILESHARE*\serverlist.txt" -s "*%PATH TO FILESHARE%\remove.bat"
```

Do make sure to replace `*PATH TO FILESHARE*` with a relevant path.

If you'd like to remove Compression Service from a single server, replace `@"*PATH TO FILESHARE*\serverlist.txt"` with `\Servername`. Refer to the following screenshot for the output reference:

![Output reference]./../0-images/ka04u00000116iG_0EM4u000004bz9T.png)

The script calls upon the functions in the msi to upgrade the Compression Service to the version of .msi installer and then to remove said Compression Service, since it only can execute remove command on a Compression Service of the same version.

> NOTE: If the script reads only the first symbol of the serverlist.txt file, you will need to use Notepad++ or any similar tool to change the file encoding to ANSI.

