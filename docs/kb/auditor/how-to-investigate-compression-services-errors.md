---
description: >-
  Describes how to troubleshoot compression service errors such as "Compression
  service is unavailable" and "Unable to update the Compression Service" in the
  Netwrix Auditor health log.
keywords:
  - compression service
  - Netwrix Auditor
  - health log
  - troubleshooting
  - data collection
  - ports
  - Remote Registry
  - WMI
products:
  - auditor
sidebar_label: How to Investigate Compression Services Errors
tags: []
title: "How to Investigate Compression Services Errors"
knowledge_article_id: kA04u000000TsqpCAC
---

# How to Investigate Compression Services Errors

## Overview

In the Netwrix Auditor health log, some error events mention issues with the compression service or its connectivity, such as **Compression service is unavailable** and **Unable to update the Compression Service**. This article describes how to troubleshoot these errors.

## Description

1. If you recently migrated Netwrix Auditor to a new server, check that the old Netwrix instance doesn't have access to your environment. Navigate to the old Netwrix server and stop all Netwrix Auditor services.
2. Log in to the Netwrix server with **Data Collection Account** credentials (monitoring plan – settings – data collection) and check that you can open this path via File Explorer:
   - `\*audited_server*\c$\Windows\`

   Check if you can add or remove files from this folder. If not, check the permissions for the Data Collection account:

   - MonitoringPlans – Data Collecting Account ⸱ v10.6 (opens in a new window)

   **Note:** Pay attention to which collector you're going to adjust permissions.
3. Test the ports required for the problematic monitoring plan:
   - Requirements – Protocols and Ports ⸱ v10.6 (choose the problematic monitoring plan on the left).

   Here is an article on how to check ports:

   - [How to check TCP, UDP and Dynamic ports required for Netwrix Auditor monitoring plans](/docs/kb/auditor/check-tcp-and-udp-ports-required.md) (opens in a new window)
4. Check Remote Registry and Windows Management Instrumentation Services:
   - For File Servers Auditing: Windows File Servers – Enable Remote Registry Service ⸱ v10.6 (opens in a new window)
   - For Windows Server Auditing: Windows Server – Enable Remote Registry and Windows Management Instrumentation Services ⸱ v10.6 (opens in a new window)
5. Add antivirus exclusions on the Netwrix and target servers for folders:
   - See the article on how to do it: [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/antivirus-exclusions-for-netwrix-auditor.md) (opens in a new window)
