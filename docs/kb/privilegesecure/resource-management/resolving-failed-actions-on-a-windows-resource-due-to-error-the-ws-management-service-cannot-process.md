---
description: >-
  Fix failed Actions caused by a Group Policy that disables remote shell access:
  verify the GPO and registry value, then set the GPO to Enabled or Not Configured.
keywords:
  - WinRM
  - AllowRemoteShellAccess
  - Group Policy
  - GPO
  - PowerShell
  - Remote Shell
  - WS-Management
  - Netwrix Privilege Secure
  - Action Service
products:
  - privilegesecure
sidebar_label: "Resolving Failed Actions on a Windows Resource Due to Error \"The WS-Management service cannot process the request. The service is configured to not accept any remote shell requests.\""
tags:
  - kb
  - resource-management
title: "Resolving Failed Actions on a Windows Resource Due to Error \"The WS-Management service cannot process the request. The service is configured to not accept any remote shell requests.\""
knowledge_article_id: kA04u0000000HRqCAM
---

# Resolving Failed Actions on a Windows Resource Due to Error "The WS-Management service cannot process the request. The service is configured to not accept any remote shell requests."

## Symptom

If remote shell access is disabled on a Windows resource, the Action Service in Netwrix Privilege Secure for Access Management cannot perform actions on that host. You can confirm this when an action's logs contain the following error:

```
Unable to connect using PowerShell remoting to <hostname> with user <domain>\<user>: Connecting to remote server <ip_address> failed with the following error message : The WS-Management service cannot process the request. The service is configured to not accept any remote shell requests.
```

![Action logs showing the WS-Management error for the failed remote shell connection](./../0-images/ka04u000000HcZv_0EM4u000004bUoa.png)

## Cause

This is caused by a Group Policy Object (GPO), configured at the local or domain level, that disables remote shell access on the resources the GPO targets:

![Allow Remote Shell Access GPO setting set to Disabled](./../0-images/ka04u000000HcZv_0EM4u000004bUof.png)

## Resolution

Verify this GPO in the Group Policy Editor on the target resource (or in the domain GPO configuration). Domain configuration takes precedence over local configuration.

```
Computer Configuration > Administrative Templates > Windows Components > Windows Remote Shell > Allow Remote Shell Access
```

![Group Policy Editor showing the Allow Remote Shell Access setting set to Disabled](./../0-images/ka04u000000HcZv_0EM4u000004bUok.png)

You can also verify the setting in PowerShell, but the GPO must first have been **Enabled** or **Disabled** so the correct registry key exists:

```
Get-ItemProperty -Path "HKLM:\Software\Policies\Microsoft\Windows\WinRM\Service\WinRS" -Name "AllowRemoteShellAccess"
```

- If the value is set to **0**, then remote shell access is **Disabled**.
- If the value is set to **1**, then remote shell access is **Enabled**.

![PowerShell output showing the AllowRemoteShellAccess registry value](./../0-images/ka04u000000HcZv_0EM4u000004bUop.png)

To resolve the error, set this GPO to either **Enabled** or **Not Configured**. In a domain environment, make this change in a domain-configured GPO rather than manually modifying the registry key on the target resource.
