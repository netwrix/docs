---
description: >-
  When you run the Netwrix ChangeTracker Gen7 Agent NetCore installer and test the Hub
  connection, you may receive a WinHttp.WinHttpRequest error stating the
  connection was terminated abnormally. Install Microsoft's Easy Fix update to
  enable TLS 1.1/TLS 1.2 for WinHTTP to resolve the issue.
keywords:
  - Netwrix Change Tracker
  - Gen 7 Agent
  - WinHttp.WinHttpRequest
  - TLS 1.2
  - Easy Fix
  - Hub connection
  - installer error
  - Windows hotfix
products:
  - changetracker
knowledge_article_id: kA04u0000000Je8CAE
sidebar_label: 'Error: WinHTTP Connection Terminated Abnormally'
tags: [kb, troubleshooting-and-errors]
title: 'Error: WinHTTP Connection Terminated Abnormally'
---

# Error: WinHTTP Connection Terminated Abnormally

## Symptom

On a Windows system, the **Netwrix ChangeTracker Gen7 Agent NetCore** installer produces an error during the **Hub connection** test, even with correct Hub credentials.

## Cause

On older Windows systems, WinHTTP does not use TLS 1.1 or TLS 1.2 as a default secure protocol. If the Netwrix Change Tracker Hub requires a modern TLS version, the connection is terminated during the installer's Hub connection test.

## Resolution

Complete the following steps:

1. Close the **Netwrix ChangeTracker Gen7 Agent NetCore** installer.
2. Review the information provided by Microsoft for this specific issue: [Enable TLS 1.1 and TLS 1.2 as default secure protocols in WinHTTP in Windows](https://support.microsoft.com/en-us/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392).
3. Install the updates or make the registry changes Microsoft outlines, then re-run the **Netwrix ChangeTracker Gen7 Agent NetCore** installer and confirm whether the **Hub connection** test completes successfully.
4. If the test still fails, select **Do not test my hub connection before proceeding** in the installer. This installs the agent while bypassing the connection check.
5. If the connectivity issue persists after installation, open a support ticket with [Netwrix Support](https://www.netwrix.com/support.html) and include the `C:\ProgramData\NNT\gen7agent.app.netcore\rolling-log.txt` file, which contains more information and specific error logs related to the issue.

