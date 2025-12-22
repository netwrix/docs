---
description: >-
  Shows how to exclude Smart Card users from monitoring by Netwrix Password
  Reset by adding a registry DWORD under the monitoring plan key on the Netwrix
  Auditor Server.
keywords:
  - smart card
  - Password Expiration Notifier
  - Netwrix Password Reset
  - registry
  - IgnoreUsersWithSmartCardsSettings
  - monitoring plan GUID
  - Netwrix Auditor
  - regedit
products:
  - auditor
sidebar_label: How to exclude Smart Card users from monitoring by Netwrix Password Reset
tags: []
title: "How to exclude Smart Card users from monitoring by Netwrix Password Reset?"
knowledge_article_id: kA00g000000H9cZCAS
---

# How to exclude Smart Card users from monitoring by Netwrix Password Reset?

Perform the following steps:

1. On the computer where Netwrix Auditor Server resides, open Registry Editor: navigate to **Start** > **Run** and type `regedit`.
2. In the Registry Editor, create a new registry key:  
   `HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Netwrix Auditor\Password Expiration Notifier\<Monitoring plan GUID>`.
3. Create the new DWORD `IgnoreUsersWithSmartCardsSettings` value under this key and set it to `1`.

Note: The shortest way to learn the Monitoring plan GUID would be looking up the trace file for the following line: `Profile: {0}`
