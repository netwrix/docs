---
description: >-
  During installation of NetWrix Account Lockout Examiner on Windows 2003, the
  ALE service (ALService) may fail to start with an insufficient permissions
  error. This article explains the cause and steps to resolve the issue.
keywords:
  - NetWrix Account Lockout Examiner
  - ALService
  - ALE service
  - Windows 2003
  - .NET 3.5 SP1
  - service failed to start
  - insufficient permissions
products:
  - auditor
sidebar_label: ALE service is unable to start during installation
tags: []
title: "ALE service is unable to start during installation"
knowledge_article_id: kA00g000000H9YCCA0
---

# ALE service is unable to start during installation

During installation of NetWrix Account Lockout Examiner on **Windows 2003**, a "Service 'NetWrix Account Lockout Examiner' (ALService) failed to start" message is received that the service cannot be started due to insufficient permissions. The account in use is a domain admin.

![User-added image]./../0-images/ka04u000000HcRH_0EM700000004wmJ.png)

## Cause

NetWrix Account Lockout Examiner uses .NET Framework and requires .NET 3.5 SP1.  
The message appears if only NET 3.5 is installed.

## Resolution

1. Make sure that .NET Framework 3.5 SP1 is installed.
2. If it is installed, reinstall it or upgrade to .NET 4.

Also:
1. Verify that the account specified during installation is a local admin.
2. Check that there are no restrictive policies for this account to run services.
3. Try entering another local admin or domain admin account during the installation.



