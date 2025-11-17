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
  - data-classification
sidebar_label: How to Move Indexed Files
tags:
  - migration-and-maintenance
title: "How to Move Indexed Files"
knowledge_article_id: kA00g000000H9eTCAS
---

# How to Move Indexed Files

## Question

How can you move the indexed files created by Netwrix Data Classification?

## Answer

If indexed files need to be moved from one drive to another, refer to the following steps:

1. Run the Netwrix Data Classification Service Viewer utility:
   - if NDC has been upgraded to a newer version, its default location is ` %ProgramFiles%\ConceptSearching\ServiceViewer\conceptServiceViewer.exe`
   - if NDC v5.6 has been installed for the first time, its default location is ` %Program Files%\Netwrix\Data Classification\ServiceViewer\conceptServiceViewer.exe`

2. Stop the following Netwrix Data Classification services:
   - Collector Service
   - Indexer Service
   - Classifier Service

3. Copy all CSE files from the original folder (by default, located in either ` %ProgramFiles%/ConceptSearching/ConceptDB` or ` %Program Files%/Netwrix/Data Classification/ConceptDB`) to a new location.

4. Run `conceptConfig.exe` from one of the locations below (default paths), enter the new directory path in the **Folder for CSE Files** field, and click **Save**:

   ```
   C:\inetpub\wwwroot\conceptQS\bin
   %ProgramFiles%\ConceptSearching\Services\ConceptCollectorService
   %ProgramFiles%\ConceptSearching\Services\conceptIndexer
   ```

   or

   ```
   C:\inetpub\wwwroot\conceptQS\bin
   %Program Files%\Netwrix\Data Classification\Services\ConceptCollectorService
   %Program Files%\Netwrix\Data Classification\Services\conceptIndexer
   ```

5. Start Netwrix Data Classification services using Windows Services Manager.
