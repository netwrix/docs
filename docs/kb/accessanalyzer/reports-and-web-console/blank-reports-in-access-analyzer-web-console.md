---
description: >-
  Published reports in the Netwrix Access Analyzer Web Console show blank pages;
  you can still run a report by searching for its name. This article explains
  causes and two resolutions to restore report display.
keywords:
  - blank reports
  - web console
  - Netwrix Access Analyzer
  - Solution.xml
  - Reports folder
  - StealthAUDIT
  - SQL timeout
  - reporting
  - reports path
products:
  - access-analyzer
sidebar_label: Blank Reports in Access Analyzer Web Console
tags:
  - reports-and-web-console
title: "Blank Reports in Access Analyzer Web Console"
knowledge_article_id: kA04u000001119aCAA
---

# Blank Reports in Access Analyzer Web Console

## Symptom

The published reports in the Web Console of Netwrix Access Analyzer show blank pages. Searching by a report name allows you to run a report.

## Causes

- The SQL Server instance times out due to the preexisting query. This issue might arise in larger environments with higher loads.
- The **Reports** folder is corrupted.

## Resolutions

### Remove the Solution.xml file

The `Solution.xml` file queries SQL for a summary of audited systems, and it might be timing out depending on the loads in your environment. Removing it allows the reports to populate in a timely manner.

1. In the Netwrix Access Analyzer host, navigate to `Installation_Folder\STEALTHbits\StealthAUDIT\Jobs\GROUP_NAME`.
2. Remove the `Solution.xml` file.

### Recreate the Reports folder

If the prior resolution did not help, follow these steps:

1. In Netwrix Access Analyzer, navigate to the **Reporting** node.
2. Review the path to the **Reports** folder in the **Publish Reports:** field. The default path is `C:\Program Files (x86)\STEALTHbits\StealthAUDIT\Reports`.
3. In the Netwrix Access Analyzer host, recreate the **Reports** folder.
