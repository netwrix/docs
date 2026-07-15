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
knowledge_article_id: ka0Qk000000DZWDIA4
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

1. Close the **Netwrix ChangeTracker Gen7 Agent NetCore** installer.
2. Review the information provided by Microsoft for this specific issue: [Enable TLS 1.1 and TLS 1.2 as default secure protocols in WinHTTP in Windows](https://support.microsoft.com/en-us/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392).
3. Once the appropriate updates have been installed and/or changes have been made to the systems registry, as outlined by Microsft, re-run the **Netwrix ChangeTracker Gen7 Agent NetCore** installer and confirm if the **Hub connection** test completes successfully. If the test continues to fail, choose the option in the installer: "Do not test my hub connection before proceeding". This will enable the agent to be installed, bypassing the connection check. If the connectivity issue persists post install, a support ticket should be opened with the Netwrix Change Tracker support team. More information/specific error logs related to the issue can be found in the C:\ProgramData\NNT\gen7agent.app.netcore\rolling-log.txt file, so this should be included upon opening the support ticket to help aid troubleshooting of the issue.

<!--
Additional related articles pending migration to the public docs site. When
any of the following target articles are migrated in a future batch,
re-create the "## Related Articles" section and add the corresponding link:

- Add Palo Alto Device to a Proxy Agent as a Proxy Device in Change Tracker Gen 7 (kA04u0000000JXHCA2) — SME decision 2026-07-10 (Ben): KEEP + UPDATE (steps are outdated); Batch 4 candidate
- Supporting Documents for Hub Server Problems (kA04u0000000JdtCAE) — SME decision 2026-07-10 (Ben): KEEP + UPDATE (remove Linux-related content); Batch 4 candidate
- Fixing the "Check Log for Details" Message in the Event Details (docs/kb/changetracker/troubleshooting-and-errors/check-log-for-details-message.md) — pending merge of batch 3b PR #1209; re-add once merged to dev. Link text updated to match the article's current (batch 3b) title (dropped stale "How to Fix" phrasing).
-->
