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
  - data-classification
sidebar_label: How to Migrate Netwrix Data Classification to Anot
tags: []
title: "How to Migrate Netwrix Data Classification to Another Server"
knowledge_article_id: kA04u0000000HMMCA2
---

# How to Migrate Netwrix Data Classification to Another Server

## Overview

This article describes how to change or replace the server on which Netwrix Data Classification (NDC) is running.

## Instructions

1. Stop/disable **all NDC services** on the application server (**conceptClassifier, conceptIndexer, conceptCollector**).

   ![User-added image](./images/ka0Qk0000007H0v_0EM4u000002Qwyh.png)

   > **NOTE:** You can also disable the NDC services using the **Service Viewer** located at: `C:\Program Files\ConceptSearching\ServiceViewer` (by default).

2. Back up the **NDC database** and the files in the **NDC Index** at `C:\Program Files\ConceptSearching\ConceptDB` (by default).

3. Prior to installation, ensure that the necessary software [pre-requisites](https://docs.netwrix.com/docs/dataclassification/5_7) are in place.

4. Install the same version of NDC on the new server, pointing to the original database location with the same service account. The installer should detect an existing NDC schema. (You may refer to Install Netwrix Data Classification for instructions on NDC installation.)

   > **NOTE:** The account being used for the installation of NDC should ideally be the same service account used to connect with the SQL database, and this account will need local admin rights on the new server.

5. During the install, ensure that the box to stop services on application start is **checked**.

6. Copy the **backed-up Index files** from the old server to the new server's index location (`C:\Program Files\ConceptSearching\ConceptDB` by default).

7. Start **all services** on the new server, and collection should resume as normal. The **conceptCollector/Indexer/Classifier** services should stay disabled on the **old server** to prevent re-connecting to the database. NDC can be uninstalled once the migration is successful.

## Related Articles

- Install Netwrix Data Classification
