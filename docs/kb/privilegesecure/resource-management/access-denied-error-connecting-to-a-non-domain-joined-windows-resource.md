---
description: >-
  Resolve the Access Denied error in the ActionServiceWorker log when connecting to
  a non-domain-joined Windows resource by enabling remote PowerShell authentication.
keywords:
  - Access Denied
  - non-domain-joined
  - PowerShell remoting
  - LocalAccountTokenFilterPolicy
  - NPS
  - Netwrix Privilege Secure
  - lusrmgr.msc
  - remote troubleshooting
products:
  - privilegesecure
sidebar_label: Access Denied Error Connecting to a Non-domain-joined Windows Resource
tags:
  - kb
  - resource-management
title: "Access Denied Error Connecting to a Non-domain-joined Windows Resource"
knowledge_article_id: kA04u000000LLRQCA4
---

# Access Denied Error Connecting to a Non-domain-joined Windows Resource

## Overview

This article describes how to resolve the `Access Denied` message you may receive in the ActionServiceWorker log when connecting to a non-domain-joined Windows resource to provision an activity session or run a resource scan.

Example error:

```
Add-SbPAMActionLog: Warn Message: Unable to create New-PSSSession for HOSTNAME using ComputerName (HOSTNAME)
Error: [HOSTNAME] Connecting to remote server HOSTNAME failed with the following error message :
Access is denied.
For more information, see the about_Remote_Troubleshooting Help topic
```

## Instructions

Review the local configuration of the target host resource:

1. Run `lusrmgr.msc` from the Run command window and ensure the Netwrix Privilege Secure for Access Management service account is a member of the **Administrators** group. If the account is not a member of the **Administrators** group, proceed to the next step.

2. Change a User Account Control (UAC) setting that prevents remote PowerShell authentication for non-Administrator accounts. Run the following line in elevated PowerShell:

   ```powershell
   New-ItemProperty -Name LocalAccountTokenFilterPolicy `
   -Path HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System `
   -PropertyType DWord -Value 1
   ```

   You should now be able to use your service account to connect to the resource through Privilege Secure.

   > **NOTE:** For details on enabling remoting for administrators in other domains, see [about_Remote_Troubleshooting − How to enable remoting for administrators in other domains ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_troubleshooting?view=powershell-7.3#how-to-enable-remoting-for-administrators-in-other-domains).

For additional information on configuring non-domain-joined Privilege Secure resources, see [Managing Non-Domain-Joined Windows Computers with Netwrix Privilege Secure](/docs/kb/privilegesecure/resource-management/managing-non-domain-joined-windows-computers-with-privilege-secure.md).

## Related Links

- [about_Remote_Troubleshooting − How to enable remoting for administrators in other domains ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_troubleshooting?view=powershell-7.3#how-to-enable-remoting-for-administrators-in-other-domains)
- [Managing Non-Domain-Joined Windows Computers with Netwrix Privilege Secure](/docs/kb/privilegesecure/resource-management/managing-non-domain-joined-windows-computers-with-privilege-secure.md)
