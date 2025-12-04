---
description: >-
  Explains how to apply the Preserve Last Access Time (LAT) option in FSAA scans
  in Netwrix Access Analyzer and which settings to configure to avoid modifying
  last access times, with cautions for NAS devices.
keywords:
  - FSAA
  - LAT
  - Last Access Time
  - NAS
  - Windows File Server
  - FSAA Data Collector Wizard
  - Scan Settings
  - Netwrix Access Analyzer
  - file access preservation
products:
  - access-analyzer
sidebar_label: "How to Correctly Apply the Preserve Last Access Time (LAT) Option to FSAA Scans"
tags:
  - file-system-and-sensitive-data-discovery
title: >-
  How to Correctly Apply the Preserve Last Access Time (LAT) Option to FSAA
  Scans
knowledge_article_id: kA04u00000111GWCAY
---

# How to Correctly Apply the Preserve Last Access Time (LAT) Option to FSAA Scans

## Questions

- Why are scans of my NAS failing to open files or skipping them?
- If we select the **Last Access Time (LAT) Preservation** option, can we avoid a situation in which our FSAA job has changed the time of the last access?
- What other options must be configured in the FSAA Data Collector Wizard when choosing the LAT Preservation?

## Answer

Follow the recommendations below:

- The **Only return file types with these comma-separated values (without leading dots)** option changes the LAT. Therefore, if you want to preserve it, unselect this option. To find this option, go to the **FSAA Data Collector Wizard** > **Default Scoping Options** step > **File Properties (Folder Summary)** tab.
- It is impossible to preserve LAT on a directory. It can be enabled for files only.
- *LAT Preservation is only applicable to Windows File Servers.* Enabling **Preserve LAT** on NAS and other file servers may cause unexpected results.

For more information, please see the following article: https://docs.netwrix.com/docs/auditor/10_8 (Scan Settings Tab).

## Related Articles

- https://docs.netwrix.com/docs/auditor/10_8 (Scan Settings Tab)
