---
description: >-
  This article addresses the error message received during the installation or upgrade of Netwrix Recovery for Active Directory, specifically regarding the failure to register SmtpNotification.comhost.dll.
keywords:
  - SmtpNotification.comhost.dll
  - installation error
  - Netwrix Recovery for Active Directory
sidebar_label: SmtpNotification Registration Error
tags: []
title: "Error: SmtpNotification.comhost.dll Failed to Register During Installation or Upgrade"
knowledge_article_id: kA0Qk0000001gzhKAA
products:
  - recovery-active-directory
---

# Error: SmtpNotification.comhost.dll Failed to Register During Installation or Upgrade

## Symptom

You receive the following error message when installing or upgrading Netwrix Recovery for Active Directory:

```
SmtpNotification.comhost.dll failed to register. HRESULT -2147450749. Contact your support personnel.
```

![Error message dialog showing SmtpNotification.comhost.dll failed to register](./images/servlet_image_89acf0e7ac0c.png)

## Cause

Your version of .NET does not meet the requirements to install the latest version of Recovery for Active Directory.

> **NOTE:** The installer will try to download a newer version but may fail if unable to connect to the internet or is otherwise blocked.

## Resolution

1. Manually download and install [ASP.NET Core 8.0.6](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) and [Windows Desktop Runtime 8.0.6](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).
2. Ensure that the following required permissions are obtained prior to installing the application:
   - Membership in the local Administrators group
   - The Log on as a service Right – From the Local Security Policy (Local Policies > User Rights Assignment > Log on as a service policy)
   - SQL Server permissions – Domain account requires SQL Server permissions
   - Recovery Configuration Utility – Must have Domain Admin rights to use all options in this utility

## Related Articles

- [ASP.NET Core 8.0.6](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [Windows Desktop Runtime 8.0.6](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)