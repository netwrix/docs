---
description: >-
  Netwrix Access Analyzer published reports with the option to download to CSV
  may open directly in the default browser if Windows has no application
  associated with the .csv extension. Associate .csv files with Notepad or
  another application to force a download prompt.
keywords:
  - access analyzer
  - csv
  - download
  - Notepad
  - default apps
  - Windows Server
  - Netwrix Access Analyzer
  - AllData
  - file association
products:
  - access-analyzer
sidebar_label: "Access Analyzer published reports with the option to download to CSV opens directly in default browser"
tags:
  - reports-and-web-console
title: >-
  Access Analyzer published reports with the option to download to CSV opens
  directly in default browser instead of as a download
knowledge_article_id: kA04u0000000IxjCAE
---

# Access Analyzer published reports with the option to download to CSV opens directly in default browser instead of as a download

## Summary
**Netwrix Access Analyzer** published reports with the option to download to CSV open directly in the default browser instead of prompting to save.

## Issue
**Netwrix Access Analyzer** published reports can be configured with the option to download to csv (`AllData`). When you click this, the CSV file opens directly in the default browser rather than prompting you to save. This happens when Windows has no application associated with the file extension `.csv`.

## Instructions
To resolve the issue, associate the `.csv` file extension with Notepad (or another application of your choice). The steps are Windows OS specific.

### Server 2016 / 2019
1. Open **`Windows Settings\Apps`**, then choose **default apps by file type**.
2. Scroll down to file extension `.csv`, select **Choose default app**, and select **Notepad**.

### Server 2012 / R2
1. Open **`Control Panel\Programs\Default Programs`**.
2. Select **Associate a file type or protocol with a specific application**.
3. Scroll down to `.csv`, select **Change program**, and select **Notepad**.

### Server 2008
1. Open **Control Panel > Default Programs**.
2. Select the `.csv` file type and choose **Change program**, then select **Notepad**.

### Windows Desktop OS
- If Microsoft Office is installed, CSV files are likely already associated with Excel and you will not need to change this.
- Files may be associated with your choice of program, not just Notepad.

## Product
- Product: Netwrix Access Analyzer  
- Module: Netwrix Access Analyzer - Reporting  
- Versions: All  
- Legacy Article ID: 2394
