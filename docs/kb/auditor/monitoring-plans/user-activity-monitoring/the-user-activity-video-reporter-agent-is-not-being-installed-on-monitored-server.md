---
description: >-
  Describes how to troubleshoot the " Installation failed" error when the User
  Activity Video Reporter agent is not installed on a monitored server in
  Netwrix Auditor.
keywords:
  - user activity
  - agent installation
  - Installation failed
  - remote registry
  - RPC
  - firewall
  - Netwrix Auditor
  - ports
  - troubleshooting
products:
  - auditor
sidebar_label: The User Activity Video Reporter Agent is not bein
tags: []
title: "The User Activity Video Reporter Agent is not being installed on monitored server"
knowledge_article_id: kA00g000000H9awCAC
---

# The User Activity Video Reporter Agent is not being installed on monitored server

The **" Installation failed"** error message is being listed for one of the monitored computers in the Netwrix Auditor UI (monitored computers list).

---

## Cause

This error indicates that the agent failed to be installed for one of the following reasons:

1. RPC is not available on the target machine.
2. Firewall blocks product activity.
3. Remote Registry service is not available.
4. Target machine is not properly configured.

---

## Resolution

To troubleshoot the issue with agent installation, perform the following steps:

1. Make sure that target computers are configured properly per the article:
   - https://docs.netwrix.com/docs/auditor/10_8/configuration/useractivity/overview

2. Make sure the following ports are opened on the local machine and target machine firewall settings:
   - https://docs.netwrix.com/docs/auditor/10_8  
   Or disable the firewall for testing purposes to localize the problem. The agent status should be updated in `10 - 15 minutes`.

3. Try to connect to the target machine from the local server through Remote Registry:
   - http://technet.microsoft.com/en-us/library/cc785793(v=ws.10).aspx
