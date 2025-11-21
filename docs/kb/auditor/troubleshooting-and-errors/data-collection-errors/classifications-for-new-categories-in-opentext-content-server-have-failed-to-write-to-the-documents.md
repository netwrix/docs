---
description: >-
  One or more categories were added to folders or documents in OpenText Content
  Server, but classifications were not written to the documents. Re-index the
  affected items so the Classifier can update document classifications.
keywords:
  - OpenText
  - Content Server
  - classification
  - re-index
  - Collector
  - Classifier
  - Re-Index
  - documents
  - folders
  - Netwrix Data Classification
products:
  - auditor
  - data-classification
visibility: public
sidebar_label: Classifications for New Categories in OpenText Con
tags: []
title: "Classifications for New Categories in OpenText Content Server Have Failed to Write to the Documents"
knowledge_article_id: kA00g000000H9eBCAS
---

# Classifications for New Categories in OpenText Content Server Have Failed to Write to the Documents

## Overview

One or more categories have been added to folder(s)/document(s) in OpenText Content Server - the documents have been reclassified but classifications have failed to write to the documents.

## Instructions

The **Classifier** service relies on data populated by the **Collector** service to process classifications - this improves performance by ensuring that we **cache** the information on which categories are available for each document. When new **categories** are added it is thus necessary to re-index the affected documents. For that:

1. Open the **Administration Interface**.
2. Click on **Sources** in the top navigation bar.
3. Drill down to the affected level within the **OpenText Content Server source**.
4. Do one of the following:
   - Select an individual file and click **Re-Index**
   - OR
   - Select a folder and click **Re-Index**
5. When you click **Re-Index**, select the scope **Selected Item(s) and All Descendants** to update an entire folder.
