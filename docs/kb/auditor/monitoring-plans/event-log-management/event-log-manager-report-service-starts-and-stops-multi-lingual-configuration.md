---
description: >-
  If your servers use a non-English language, the Event Log Manager report
  "Service Starts and Stops" may show no data because the RDL template looks for
  English service-state terms. This article explains how to add localized terms
  to the report template and redeploy it to SSRS.
keywords:
  - Event Log Manager
  - Service Starts and Stops
  - RDL
  - SSRS
  - Netwrix Auditor
  - multilingual
  - report template
  - service state
products:
  - auditor
sidebar_label: Event Log Manager Report "Service Starts and Stops
tags: []
title: >-
  Event Log Manager Report "Service Starts and Stops" Multi-Lingual
  Configuration
knowledge_article_id: kA04u000000XmDcCAK
---

# Event Log Manager Report "Service Starts and Stops" Multi-Lingual Configuration

## Overview
If your servers are configured in any language other than English, the Event Log Manager report "Service Starts and Stops" will not display information. This is due to the fact that the report template file is written to look for the terms `RUNNING`, `START`, or `STOP`. To fix this, replace those words with the appropriate words in the configured language.

## Procedure
1. Navigate to the RDL file located at:
   - `C:\ProgramData\Netwrix Auditor\Reports\Netwrix Auditor for Event Log\Change Reports\Service Starts and Stops.rdl`
2. Use `Control + F` to find the English words `Running`, `Start`, and `Stop`. Add the correct words in the alternative language to the string values. Example:
   - `('RUNNING', 'START', 'WORD3', 'WORD4')`
   - ![User-added image]./../0-images/ka04u000000HdFvAAK.jpeg)
3. Save the file.
4. Navigate to the SSRS Report Manager URL, which you can find under **Netwrix Auditor Settings** > **Audit Database** tab.
5. Drill down through the **Netwrix Auditor Report** folder on the homepage.
6. Select the **Netwrix Auditor for Event Log** folder and then the **Change Reports** folder.
7. Find the **Service Starts and Stops** file and click the three dots to choose the delete option.
8. Restart the **Netwrix Auditor Management Service** and the file will be updated with the appropriate language.
