---
description: >-
  This article addresses the warning message encountered during the File Server Activity auditing scan in Netwrix Access Analyzer, detailing its causes and resolutions.
keywords:
  - Netwrix Access Analyzer
  - File Server Activity auditing
  - Ini section error
sidebar_label: Ini Section Error Resolution
tags: []
title: "Error: Ini Section Does Not Exist in SBTFileMon.ini"
knowledge_article_id: kA0Qk0000001M05KAE
products:
  - activitymonitor
---

# Error: Ini Section Does Not Exist in SBTFileMon.ini

## Symptom

Netwrix Access Analyzer (formerly Enterprise Auditor) prompts the following warning message during the File Server Activity auditing (FSAC) scan:

```
Error during processing:  GetFSACIniAttributeValue: 
Error: Ini section for %hostname% does not exist in ini file  C:\Program Files\STEALTHbits\StealthAUDIT\FSAC\SBTFileMon.ini.
```

> **NOTE:** This article references the `%hostname%` variable as the expected name.

## Causes

- The name of the monitored host in **Netwrix Activity Monitor** mismatches the expected name.
- The echo ping is disabled in your environment.
- The affected server is missing the `OSType` value in the **Host Management** settings.

## Resolutions

Refer to the appropriate resolution steps to resolve the issue in your environment:

1. Set up the **Report Hostname As** parameter of the affected output to match the expected host name. Follow these steps:
   1. In **Netwrix Activity Monitor**, select the target output and click **Edit**.
   2. In the **Additional Properties** tab, specify the expected host name in the **Report Hostname As** field. Click **OK** to save changes.

   > **NOTE:** Alternatively, in **Netwrix Activity Monitor**, select the target host, click **Edit**, and alter the **Report the Host Name As** value to reflect the expected name.

2. Disable the **Stop on Failed Ping** rule via **Host Inventory**. Refer to the following article for additional information: Global Settings — Host Inventory · v11.6.

3. Manually specify the `OSType` value for the affected server. Use the following values for the corresponding systems:
   - Specify `Windows` for any Windows File System.
   - Specify `NAS` for any NetApp, Isilon, Nasuni, Qumolo, and other systems.

## Related Article

- Global Settings — Host Inventory · v11.6