---
description: >-
  NetApp 7-mode activity monitoring can fail when the SAM agent runs on Windows
  Server 2019 because SMB1 is disabled by default. Enable SMB2 on the NetApp or
  (less recommended) re-enable SMB1 on the Windows 2019 host to restore
  communication.
keywords:
  - NetApp
  - NetApp 7-mode
  - SMB1
  - SMB2
  - Windows Server 2019
  - SAM agent
  - Netwrix Activity Monitor
  - certificate error
  - TCP session
products:
  - activitymonitor
sidebar_label: "NetApp 7-mode activity monitoring_is not working w"
tags: []
title: "NetApp 7-mode activity monitoring_is not working w on Windows 2019 machine"
knowledge_article_id: kA04u0000000IK7CAM
---

# NetApp 7-mode activity monitoring is not working when the SAM agent is installed on Windows 2019 machine

## Summary
**Summary:** NetApp 7-mode activity monitoring is not working when the SAM agent is installed on Windows 2019 machine

## Issue
**Issue:** You are attempting to monitor NetApp in 7-mode via a Netwrix Activity Monitor agent running on a Windows 2019 machine. When trying to use the **Connect** button during configuration setup, you see messages about a being unable to open a TCP session or certificate error. Note that other issues can also cause the certificate error. Try with the **HTTP ignore certificate errors** option. Communication from the agent to the NetApp cannot be established, so scanning is not possible.

## Instructions
NetApp 7-mode by default requires the SMB1 protocol. Windows 2019 by default disables SMB1 protocol. The preferred method to resolve this issue is to enable SMB2 communication on the NetApp device by using the following setting in the NetApp configuration:

`options cifs.smb2.client.enable on`

This method is the most secure.

Alternative (less secure):
1. Enable SMB1 on the Windows 2019 machine.
2. Restart the SAM agent.

> Note: Enabling SMB1 on Windows 2019 is less secure and is not the preferred option.

## Metadata
- **Submitted by:** Robert Parsons
- **Product:** SAM & NetApp
- **Affected Versions:** SAM v4.1 & NetApp in 7-mode [possibly other combinations too]
- **Affected Module:** Communication between SAM and NetApp
- **Dev Ticket:** 38299
- **Resolved In Version:** N/A for Netwrix, requires settings change on Win2019 box or NetApp device
- **KB Type:** Known Issue
