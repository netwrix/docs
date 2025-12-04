---
description: >-
  When exporting the AD Group Members View report as CSV, you may encounter a
  '(File not found error)' with 'Unable to log error to Access Analyzer: Object
  doesn't support property or method 'LogJSMessage'.' This article explains the
  cause and provides step-by-step resolution by enabling the interactive grid
  and CSV export option.
keywords:
  - file not found
  - CSV export
  - interactive grid
  - Access Analyzer
  - AD Group Members
  - report grid
  - export table data
  - Generate
  - Run Job
products:
  - access-analyzer
sidebar_label: 'File Not Found Reports Error: Unable to Log Error '
tags:
  - troubleshooting-and-errors
title: 'File Not Found Reports Error: Unable to Log Error to Access Analyzer'
knowledge_article_id: kA0Qk00000022s9KAA
---

# File Not Found Reports Error: Unable to Log Error to Access Analyzer

## Symptom

When the report grid settings are configured for a non-interactive grid on the AD Group Members View table of the report, and you are attempting to download an exported report as a CSV file, the system generates the following error message:

```text
(File not found error)

Unable to log error to Access Analyzer: Object doesn't support property or method 'LogJSMessage'.
```

![Error image](./../0-images/ka0Qk000000CgOT_0EMQk00000B05RB.png)

## Cause

This error message is caused by setting the report grid configuration to Non Interactive grid.

## Resolution

To resolve this error, refer to the following steps:

1. Click **Configure** to access the report settings.  
   ![Configure button image](./../0-images/ka0Qk000000CgOT_0EMQk00000Aq6Zr.png)

2. Navigate to the **Widgets** node and select **Configure** on the layout location of the report.  
   ![Widgets configure image](./../0-images/ka0Qk000000CgOT_0EMQk00000AqZFF.png)

3. After clicking **Configure**, select the **Interactive grid** option in the top-right corner under Table Properties.  
   ![Interactive grid option image](./../0-images/ka0Qk000000CgOT_0EMQk00000AqJtg.png)

4. Ensure that you have the **Export table data as CSV** box checked.  
   ![Export table data as CSV image](./../0-images/ka0Qk000000CgOT_0EMQk00000BF2eH.png)

5. Confirm that the error has been resolved using either of the following methods:
   - Right-click the **Job** itself and select **Run Job**.  
     ![Run Job image](./../0-images/ka0Qk000000CgOT_0EMQk00000Aqj6X.png)
   - In the Reports pane, click the **Kebab menu** (three vertical dots) next to **Configure** and select **Generate**.  
     ![Generate image](./../0-images/ka0Qk000000CgOT_0EMQk00000Aqj6Y.png)
