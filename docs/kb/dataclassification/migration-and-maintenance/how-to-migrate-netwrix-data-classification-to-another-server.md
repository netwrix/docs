---
description: >-
  Explains how to change or replace the server hosting Netwrix Data
  Classification, including stopping services, backing up the database and index
  files, reinstalling the same version, and restoring services.
keywords:
  - Netwrix Data Classification
  - migration
  - server replacement
  - backup
  - index files
  - ConceptSearching
  - Service Viewer
  - SQL
  - installation
products:
  - dataclassification
sidebar_label: Migrating to Another Server
tags:
  - kb
  - migration-and-maintenance
title: "Migrating Netwrix Data Classification to Another Server"
knowledge_article_id: kA04u0000000HMMCA2
---

# Migrating Netwrix Data Classification to Another Server

## Overview

This article describes how to change or replace the server on which Netwrix Data Classification (NDC) is running.

## Instructions

1. Stop and disable **all NDC services** on the application server (`conceptClassifier`, `conceptIndexer`, `conceptCollector`).

<img width="1257" height="446" alt="image" src="https://github.com/user-attachments/assets/05351069-7f95-473c-adf2-f388c27f0905" />


   > **NOTE:** You can also disable the NDC services using the **Service Viewer** located at: `C:\Program Files\ConceptSearching\ServiceViewer` or 'C:\Program Files\Netwrix\Data Classification\ServiceViewer'
  (by default).

2. Back up the **NDC database** and the files in the **NDC Index** at `C:\Program Files\ConceptSearching\ConceptDB` or 'C:\Program Files\Netwrix\Data Classification\ConceptDB' (by default).

3. Before installation, ensure the necessary software [prerequisites](https://docs.netwrix.com/docs/dataclassification/5_7) are in place.

4. Install the same version of NDC on the new server, pointing to the original database location with the same service account. The installer should detect an existing NDC schema. (See [Install Netwrix Data Classification](pathname:///docs/dataclassification/5_7/introduction/install/overview) for installation instructions.)

   > **NOTE:** The account being used for the installation of NDC should ideally be the same service account used to connect with the SQL database, and this account will need local admin rights on the new server.

5. During the install, select the checkbox to stop services on application start.

6. Copy the **backed-up Index files** from the old server to the new server's index location (`C:\Program Files\ConceptSearching\ConceptDB` or or 'C:\Program Files\Netwrix\Data Classification\ConceptDB' by default).

7. If you are migrating with 5.7.10.1 onwards, you could run into this error.
<img width="551" height="345" alt="image" src="https://github.com/user-attachments/assets/731ac109-f8a6-49a8-bc75-8f240e3c6ae0" />

You need to change the value of the primary Collector, Indexer and Classifier server in the NDC DB.

The query should be run against NDC Database as follows

Update DBStats 
SET 
Collector1 = 'NewServerName',
Indexer1 = 'NewServerName',
Classifier1 = 'NewServerName'

8. Start **all services** on the new server, and collection resumes as normal. The `conceptCollector`, `conceptIndexer`, and `conceptClassifier` services must stay disabled on the **old server** to prevent re-connecting to the database. NDC can be uninstalled once the migration is successful.
