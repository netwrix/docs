---
description: >-
  This article explains why you may see an Access Denied error when connecting
  to a non-domain-joined Windows resource and provides steps to enable remote
  PowerShell authentication for the service account.
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
  - privilege-secure-access-management
sidebar_label: Access Denied Error Connecting to a Non-domain-joi
tags: []
title: "Access Denied Error Connecting to a Non-domain-joined Windows Resource"
knowledge_article_id: kA04u000000LLRQCA4
---

# Access Denied Error Connecting to a Non-domain-joined Windows Resource

## Overview

When connecting to a non-domain-joined Windows resource, you may receive an `Access Denied` message in the ActionServiceWorker log when trying to provision an activity session or run a resource scan.

```
Add-SbPAMActionLog: Warn Message: Unable to create New-PSSSession for HOSTNAME using ComputerName (HOSTNAME)
Error: [HOSTNAME] Connecting to remote server HOSTNAME failed with the following error message :
Access is denied.
For more information, see the about_Remote_Troubleshooting Help topic
```

## Instructions

Review the local configuration of the target host resource:

1. Run `lusrmgr.msc` via the Run command window − make sure the NPS service account used is a member of the **Administrators** group. In case the NPS account is not a part of the **Administrators** group, proceed to the next step.

2. Change a UAC setting preventing remote PowerShell authentication for non-Administrator accounts. Run the following line in elevated PowerShell:

```powershell
New-ItemProperty -Name LocalAccountTokenFilterPolicy `
-Path HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System `
-PropertyType DWord -Value 1
```

> **NOTE:** Learn more in [about_Remote_Troubleshooting − How to enable remoting for administrators in other domains ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_troubleshooting?view=powershell-7.3#how-to-enable-remoting-for-administrators-in-other-domains).

You should now be able to use your service account to connect to the resource via NPS. For additional information on configuring non-domain-joined NPS resources, to refer to the following article: [Managing Non-domain-joined Windows Computers with Netwrix Privilege Secure](/docs/kb/privilegesecure/resource-management/managing-non-domain-joined-windows-computers-with-privilege-secure.md).

## Related articles

- [about_Remote_Troubleshooting − How to enable remoting for administrators in other domains ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_troubleshooting?view=powershell-7.3#how-to-enable-remoting-for-administrators-in-other-domains)
- [Managing Non-domain-joined Windows Computers with Netwrix Privilege Secure](/docs/kb/privilegesecure/resource-management/managing-non-domain-joined-windows-computers-with-privilege-secure.md)
