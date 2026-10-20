---
description: >-
  Shows how to move indexed files (CSE files) used by Netwrix Data
  Classification from one drive to another, including stopping services, copying
  files, updating configuration, and restarting services.
keywords:
  - Netwrix Data Classification
  - CSE files
  - ConceptDB
  - conceptConfig.exe
  - conceptServiceViewer.exe
  - indexed files
  - ConceptCollectorService
  - conceptIndexer
products:
  - dataclassification
sidebar_label: Moving Indexed Files
tags:
  - kb
  - migration-and-maintenance
title: "Moving Indexed Files"
knowledge_article_id: kA00g000000H9eTCAS
---

# Moving Indexed Files

## Question

How can you move the indexed files created by Netwrix Data Classification?

## Answer

To move indexed files to a different drive, follow these steps:

1. Run the Netwrix Data Classification (NDC) Service Viewer utility:
   - If you upgraded NDC to a newer version, its default location is:
     `%ProgramFiles%\ConceptSearching\ServiceViewer\conceptServiceViewer.exe`
   - If you installed NDC v5.6 for the first time, its default location is:
     `%ProgramFiles%\Netwrix\Data Classification\ServiceViewer\conceptServiceViewer.exe`

2. Stop the following Data Classification services:
   - Collector Service
   - Indexer Service
   - Classifier Service

3. Copy all CSE files from the original folder (by default, located in either `%ProgramFiles%\ConceptSearching\ConceptDB` or `%ProgramFiles%\Netwrix\Data Classification\ConceptDB`) to a new location.

4. Run `conceptConfig.exe` from one of the following locations (default paths):

   ```
   C:\inetpub\wwwroot\conceptQS\bin
   %ProgramFiles%\ConceptSearching\Services\ConceptCollectorService
   %ProgramFiles%\ConceptSearching\Services\conceptIndexer
   ```

   or

   ```
   C:\inetpub\wwwroot\conceptQS\bin
   %ProgramFiles%\Netwrix\Data Classification\Services\ConceptCollectorService
   %ProgramFiles%\Netwrix\Data Classification\Services\conceptIndexer
   ```

   Enter the new directory path in the **Folder for CSE Files** field and click **Save**.

5. Start Data Classification services using Windows Services Manager.
