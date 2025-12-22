---
description: >-
  After rebooting a computer with Netwrix Auditor installed, the SharePoint
  Managed Object may show an "Unable to connect to Netwrix Auditor Service for
  Sharepoint" error because required services stopped. This article explains how
  to start the services and how to proceed if the issue recurs on every reboot.
keywords:
  - Netwrix Auditor
  - SharePoint
  - Managed Object
  - Unable to connect
  - .Net TCP Port Sharing
  - service timeout
  - reboot
  - Start service
products:
  - auditor
sidebar_label: The SharePoint Managed Object has "Unable to conne
tags: []
title: >-
  The SharePoint Managed Object has "Unable to connect to Netwrix Auditor
  Service for Sharepoint" error status
knowledge_article_id: kA00g000000H9ZeCAK
---

# The SharePoint Managed Object has "Unable to connect to Netwrix Auditor Service for Sharepoint" error status

## Symptoms

The SharePoint Managed Object has "Unable to connect to Netwrix Auditor Service for Sharepoint" error status after the computer with Netwrix Auditor installed has been rebooted.

## Cause

After the computer has been rebooted the **.Net TCP Port Sharing** and **Netwrix Auditor Service for SharePoint (your_server_name)** services are stopped.

## Resolution

1. In the **Netwrix Auditor** console, navigate to **Managed Objects → your_SharePoint_Managed_Object → SharePoint**.
2. In the right pane, click **Start**.

**NOTE:** If this error occurs every time your computer is rebooted, you must increase the service time out period. Refer to Microsoft documentation for more information: http://technet.microsoft.com/en-us/library/cc756342(v=ws.10).aspx
