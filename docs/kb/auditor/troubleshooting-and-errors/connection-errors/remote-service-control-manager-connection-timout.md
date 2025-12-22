---
description: >-
  This article explains the "Failed to connect to remote service control
  manager" timeout error that can appear in the daily summary report and shows
  how to increase the connection timeout by adding a registry value.
keywords:
  - remote service control manager
  - timeout
  - SvcMaxWaitTime
  - registry
  - Netwrix Auditor
  - domain controller
  - wait operation timed out
  - daily summary report
products:
  - auditor
sidebar_label: Remote service control manager connection timout
tags: []
title: "Remote service control manager connection timout"
knowledge_article_id: kA00g000000H9WPCA0
---

# Remote service control manager connection timout

In the daily summary report sometimes you may see the following error:

`Failed to process DC %DC name% due to the following error: Failed to connect to remote service control manager. Error details: The wait operation timed out.`

The product tries to connect to the remote service control manager on the domain controller, but it takes more than 30 seconds. This issue is usually caused by the network connection between the Netwrix host and the target domain controller.

Default connection timeout is 30 seconds, and in order to increase this value please perform the following steps:

1. Run `regedit`, and navigate to the following key: `HKEY_LOCAL_MACHINESOFTWAREWow6432NodeNetWrixAD Change Reporter`
2. Create a new DWORD key with the following name: `SvcMaxWaitTime`
3. Set decimal value in seconds more than 30 e.g. `60` or `120`
