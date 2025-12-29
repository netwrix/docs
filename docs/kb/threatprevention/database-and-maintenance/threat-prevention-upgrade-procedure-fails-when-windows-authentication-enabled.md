---
description: >-
  When you run the Threat Prevention upgrade (7.3.5.x – 7.3.9.x) while using
  Windows Authentication to connect to existing databases, the installer may
  complete without errors but install no applications. This article explains the
  cause and two ways to resolve the issue.
keywords:
  - threat prevention
  - upgrade
  - Windows Authentication
  - UAC
  - EnableLUA
  - registry
  - .MSI
  - installation
products:
  - threat-prevention
sidebar_label: Threat Prevention Upgrade Procedure Fails When Win
tags: []
title: "Threat Prevention Upgrade Procedure Fails When Windows Authentication Enabled"
knowledge_article_id: kA04u000000wnmoCAA
---

# Threat Prevention Upgrade Procedure Fails When Windows Authentication Enabled

## Symptom

When running Threat Prevention upgrade procedure (7.3.5.x – 7.3.9.x) and Windows Authentication is used to connect to existing Threat Prevention databases, the installation completes without errors and warnings, however, no applications were installed.

## Cause

The issue occurs when the User Account Control (UAC) is enabled on the Threat Prevention console host.

## Resolution

There are two options to resolve the issue:

1. Disable UAC on the Threat Prevention Console Host.

   Learn more about how to disable UAC in the Microsoft article: https://learn.microsoft.com/en-us/troubleshoot/windows-server/windows-security/disable-user-account-control. Follow the instructions below:

   - On the Threat Prevention console host, open **Registry Editor** – **Start** -> **Run** -> **Regedit**.
   - In the **Registry Editor**, navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System`.
   - Double-click the **EnableLUA**, and verify if the value is set to `0`; if not, change it to `0`.
   - Close **Registry Editor** and restart the computer.

2. If your company policy restricts disabling UAC then run the Threat Prevention installer `.MSI` file from admin PowerShell console and follow the normal installation procedure.
