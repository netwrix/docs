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

   Check if you can add or remove files from this folder. If not, check the permissions for the Data Collection account: [Data Collecting Account](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/dataaccounts)

   **Note:** Pay attention to which collector you're going to adjust permissions.
3. Test the ports required for the problematic monitoring plan:
   - [Protocols and Ports](https://docs.netwrix.com/docs/auditor/10_8/requirements/ports)
   - [Check TCP and UDP Ports Required](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/check-tcp-and-udp-ports-required)
4. Check Remote Registry and Windows Management Instrumentation Services:
   - [Enable Remote Registry and Windows Management Instrumentation Services for Windows Server](https://docs.netwrix.com/docs/auditor/10_8/configuration/windowsserver/remoteregistry)
   - [Enable Remote Registry Services for File Server](https://docs.netwrix.com/docs/auditor/10_8/configuration/fileservers/windows/remoteregistryservice)
5. Add antivirus exclusions on the Netwrix and target servers for folders:
   - [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
