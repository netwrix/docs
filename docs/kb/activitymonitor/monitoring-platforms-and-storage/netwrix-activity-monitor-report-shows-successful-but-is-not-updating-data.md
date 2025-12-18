---
description: >-
  Explains why Netwrix Activity Monitor FSAC system scans report successful but
  do not update data, shows the observed error messages, identifies missing
  licenses as the cause, and gives steps to verify licensing in Netwrix Access
  Analyzer.
keywords:
  - FSAC
  - File System
  - licensing
  - Netwrix Activity Monitor
  - Netwrix Access Analyzer
  - File Activity
  - FILESYSTEMACCESS
  - 1-FSAC System Scans_Log.tsv
products:
  - activitymonitor
  - access-analyzer
sidebar_label: Netwrix Activity Monitor Report Shows Successful B
tags: []
title: "Netwrix Activity Monitor Report Shows Successful But is Not Updating Data"
knowledge_article_id: kA0Qk0000001y8bKAA
---

# Netwrix Activity Monitor Report Shows Successful But is Not Updating Data

## Symptoms

In the FSAC System scan log (`1-FSAC System Scans_Log.tsv`), the following errors are observed:

```
ERROR TDCThread TDCThread.LoadSourceItf "No DC installed to handle source: FILESYSTEMACCESS"
```

```
ERROR TDCThread TDCThread.PrepareForTask "The 'FILESYSTEMACCESS' data collector has not been installed"
```

## Cause

There is no license for one or more of the following features in **Netwrix Activity Monitor** (NAM):

- File System
- File System Actions
- File System Reports

> **NOTE:** There may only be a license for **File Activity** in NAM and not for **File System Reports**, **File System Actions**, or **File System** in **Netwrix Access Analyzer (NEA)**. Sometimes, leftover reports from a sales or professional services demo may still be present in NEA.

## Resolution

To verify a feature's licensing in NEA, refer to the following steps:

1. Navigate to **Help > About**.
2. Scroll down to the **File System Licensed Features** section to confirm the licensed features.

If needed, contact the Netwrix Account Owner, Enterprise Account Manager (EAM), or Customer Success Manager (CSM) to negotiate the proper functionality and licensing required for the customer.
