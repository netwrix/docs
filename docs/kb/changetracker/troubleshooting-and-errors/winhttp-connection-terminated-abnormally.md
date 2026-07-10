---
description: >-
  When you run the Netwrix Change Tracker Gen 7 Agent installer and test the Hub
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
sidebar_label: 'Error: WinHTTP Connection Terminated Abnormally (Gen 7 Agent)'
tags: [kb, troubleshooting-and-errors]
title: 'Error: WinHTTP Connection Terminated Abnormally (Gen 7 Agent)'
---

# Error: WinHTTP Connection Terminated Abnormally (Gen 7 Agent)

## Symptom

Running the **Netwrix Change Tracker Gen 7 Agent** installer on a Windows system and entering the correct Hub credentials produces an error when testing the **Hub connection** before proceeding with the full setup.

## Cause

On older Windows systems, WinHTTP does not use TLS 1.1 or TLS 1.2 as a default secure protocol. Because the Netwrix Change Tracker Hub requires a modern TLS version, the connection is terminated during the installer's Hub connection test.

## Resolution

1. Download the Easy Fix tool from [Update to enable TLS 1.1 and TLS 1.2 as default secure protocols in WinHTTP in Windows ⸱ Microsoft 🡥](https://support.microsoft.com/en-us/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392).
2. Run through the hotfix installation.
3. Close the **Netwrix Change Tracker Gen 7 Agent** installer if it is still open.
4. Try to install the **Netwrix Change Tracker Gen 7 Agent** again and test the **Hub connection**.

## Related Articles

- [How to Configure the FAST Cloud Integration with Proxy Internet Settings](/docs/kb/changetracker/configuration-and-setup/fast-cloud-proxy-settings.md)

<!--
Additional related articles pending migration to the public docs site. Re-add
each link below to this Related articles list when the target article is
migrated in a future batch:

- Add Palo Alto Device to a Proxy Agent as a Proxy Device in Change Tracker Gen 7 (kA04u0000000JXHCA2) — SME decision 2026-07-10 (Ben): KEEP + UPDATE (steps are outdated); Batch 4 candidate
- Supporting Documents for Hub Server Problems (kA04u0000000JdtCAE) — SME decision 2026-07-10 (Ben): KEEP + UPDATE (remove Linux-related content); Batch 4 candidate
- Fixing the "Check Log for Details" Message in the Event Details (docs/kb/changetracker/troubleshooting-and-errors/check-log-for-details-message.md) — pending merge of batch 3b PR #1209; re-add once merged to dev. Link text updated to match the article's current (batch 3b) title (dropped stale "How to Fix" phrasing).
-->
