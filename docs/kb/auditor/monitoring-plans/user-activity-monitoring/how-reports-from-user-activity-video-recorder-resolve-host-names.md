---
description: >-
  Explains how User Activity Video Recorder determines host names for reports by
  checking the local hosts file and falling back to DNS; includes a PowerShell
  command to verify the resolved host name.
keywords:
  - User Activity Video Recorder
  - UAVR
  - host name resolution
  - hosts file
  - DNS
  - PowerShell
  - 127.0.0.1
  - reports
  - name resolution
products:
  - auditor
sidebar_label: How Reports from User Activity Video Recorder reso
tags: []
title: "How Reports from User Activity Video Recorder resolve host names"
knowledge_article_id: kA04u000000PdIsCAK
---

# How Reports from User Activity Video Recorder resolve host names

**Question**: When I check reports, the server name is shown differently as when I try to resolve its' name using the DNS server. How does User Activity Video Recorder resolve host names?

**Answer:** First of all, the UAVR Agent looks locally in the hosts file of the server (located in `C:\Windows\System32\drivers\etc` folder). You can also check the Name resolution by utilizing this command in PowerShell on the monitored server:

```powershell
[System.Net.Dns]::GetHostEntry("127.0.0.1").HostName
```

The resulting name will match the name of the server in the UAVR report. If there is no record for `127.0.0.1-localhost` on the server, the DNS server will be polled for the name.
