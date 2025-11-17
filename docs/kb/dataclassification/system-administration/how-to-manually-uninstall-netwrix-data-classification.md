---
description: >-
  This article describes how to manually uninstall Netwrix Data Classification
  by removing the SQL database, uninstalling Windows services, and deleting
  installation and index folders.
keywords:
  - uninstall
  - Netwrix Data Classification
  - ConceptSearching
  - InstallUtil
  - SQL Server Management Studio
  - services
  - index
  - '*.cse'
  - SETUP
products:
  - data-classification
sidebar_label: How to Manually Uninstall Netwrix Data Classificat
tags:
  - system-administration
title: "How to Manually Uninstall Netwrix Data Classification"
knowledge_article_id: kA04u000000XmISCA0
---

# How to Manually Uninstall Netwrix Data Classification

## Overview

To manually uninstall Netwrix Data Classification, follow the instructions below.

## Instructions

1. Delete the **SQL database** using SQL Server Management Studio.
2. Uninstall the three Windows services by issuing these commands from the command prompt:

```text
C:\Windows\Microsoft.NET\Framework\v4.0.30319\InstallUtil /u "C:\Program Files\ConceptSearching\Services\conceptCollectorService\conceptCollectorService.exe""
C:\Windows\Microsoft.NET\Framework\v4.0.30319\InstallUtil /u "C:\Program Files\ConceptSearching\Services\conceptIndexer\conceptIndexerService.exe"
C:\Windows\Microsoft.NET\Framework\v4.0.30319\InstallUtil /u "C:\Program Files\ConceptSearching\Services\conceptIndexer\conceptClassifierService.exe"
```

> **NOTE:** You may need to adjust these commands to reflect the locations of your `Windows Folder`, the `version(s) of Microsoft.NET Runtime` installed, and the location of your `conceptSearching installation`.

3. Delete the folder at `C:\Program Files\ConceptSearching`.
4. Delete the folder that contains the `conceptSearching index` ("*.cse") files. **Note** that this is included in the above folder location by default, but can be changed from within the SETUP utility.
