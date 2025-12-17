---
description: >-
  The FSAC System Scan job in Netwrix Access Analyzer targets the agent server
  instead of the NAS device, preventing the NAS from being scanned. This article
  explains how to update the job's host list so the scan targets the correct NAS
  device.
keywords:
  - FSAC
  - FSAC System Scan
  - NAS
  - host list
  - Netwrix Access Analyzer
  - agent
  - job configuration
  - data collection
  - NAS device
  - scan
products:
  - access-analyzer
sidebar_label: 'Error: FSAC System Scan Job Targets Incorrect Host'
tags: []
title: 'Error: FSAC System Scan Job Targets Incorrect Host'
knowledge_article_id: kA0Qk00000020DdKAI
---

# Error: FSAC System Scan Job Targets Incorrect Host

## Symptom
The FSAC System Scan job in Netwrix Access Analyzer fails to collect data from the intended NAS device. Instead, the job attempts to target the agent server, resulting in incomplete or missing data collection from the NAS device.

## Cause
The host list for the FSAC System Scan job was configured to target the agent server rather than the NAS device. As a result, Netwrix Access Analyzer did not collect the required FSAC data from the NAS device.

## Resolution
1. Open Netwrix Access Analyzer.
2. Navigate to the **Jobs** section.
3. Locate and select the **FSAC System Scan** job.
4. Navigate to **Configure > Hosts** and find the **Host List**.
5. Deselect any host list that is pointing to an agent.
6. Add the NAS device to the host list using either of the following methods:
   - Enter its hostname or IP address.
   - Select a host list that contains the NAS.
7. Save the changes to the job configuration.
8. Run the **FSAC System Scan** job again to verify that data is now collected from the NAS device.
