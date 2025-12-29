---
description: >-
  Shows how to restore a File System host list after accidental deletion in
  Netwrix Access Analyzer by using the FSAA job output file or Task Stats, and how to
  reapply the host list to job settings.
keywords:
  - host list
  - FSAA
  - ConnectStatus.csv
  - Add Hosts
  - Task Stats
  - restore hosts
  - Netwrix Access Analyzer
  - File System
  - host import
products:
  - access-analyzer
sidebar_label: Restoring a Host List in FSAA
tags:
  - file-system-and-sensitive-data-discovery
title: "Restoring a Host List in FSAA"
knowledge_article_id: kA0Qk0000001ODBKA2
---

# Restoring a Host List in FSAA

## Question

Is it possible to restore a File System host list upon an accidental deletion in Netwrix Access Analyzer (formerly Enterprise Auditor)?

## Answer

Refer to the following options to restore a host list in your environment:

- The `1-FSAA System Scans` job creates a `ConnectStatus.csv` file upon completion to log the audited hosts. Navigate to the following path to locate the file:

```text
%SAINSTALLDIR%Jobs\GROUP_FileSystem\GROUP_0.Collection\JOB_1-FSAA System Scans\OUTPUT
```

Import a list of audited hosts via **Add Hosts**. Refer to the following articles for additional information: https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/hostmanagement/actions/add (Host Management Activities — Add Hosts · v12.0); https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/hostmanagement/actions/importhost (Import Hosts Option).

- Review the **Task Stats** of the affected job to collect the list of servers and import the list via **Add Hosts**.

> **IMPORTANT:** Once you recreate the host list, reapply it in the job settings.

## Related Links

- [Host Management Activities — Add Hosts ⸱ v12.0](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/hostmanagement/actions/add)
- [Import Hosts Option](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/hostmanagement/actions/importhost)
