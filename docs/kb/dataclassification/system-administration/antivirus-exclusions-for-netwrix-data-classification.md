---
description: >-
  Explains which antivirus exclusions to add for Netwrix Data Classification to
  prevent slowdowns and locked index or temporary files.
keywords:
  - antivirus
  - exclusions
  - Netwrix Data Classification
  - CSE files
  - index files
  - collector
  - indexer
  - classifier
products:
  - dataclassification
sidebar_label: Antivirus Exclusions for Netwrix Data Classification
tags:
  - system-administration
  - kb
title: "Antivirus Exclusions for Netwrix Data Classification"
knowledge_article_id: kA04u000001111WCAQ
---

# Antivirus Exclusions for Netwrix Data Classification

## Symptom

An antivirus suite can slow down or even prevent correct operation of Netwrix Data Classification:

- Reduced speed of processing
- Locked index files or temporary collected files

## Cause

Netwrix Data Classification writes information to CSE files in small chunks at short intervals — an antivirus will attempt to read the entire file looking for threats after each writing session.

This considerably slows down processes of the service, as each short writing session is expected to occur frequently, while a full read of a file might take a long time (especially in a larger environment).

## Resolution

Add the following exclusions for the antivirus:

> **NOTE:** In Netwrix Data Classification v5.6, the first path to exclude is `C:\Program Files\Conceptsearching\Index`

1. NDC Index databases: CSE files, located by default `C:\Program Files\Netwrix\Data Classification\Index`
2. Temp files: `C:\Users\<ServiceAccountName>\AppData\Local\Temp\Netwrix\Data Classification\Collector`

During data collection, a collector uses a specific location to store copies of the files it is currently collecting and then places them in the temp location until they are processed and passed to the **Indexer** and **Classifier** services.

For regular index backups, see [How to Back Up the Netwrix Data Classification Index](/docs/kb/dataclassification/system-administration/how-to-back-up-the-ndc-index).
