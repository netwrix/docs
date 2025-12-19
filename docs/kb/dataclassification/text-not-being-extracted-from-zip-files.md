---
description: >-
  Explains that `.zip` files are classified based on the combined content of
  their documents and instructs you to install the Microsoft Filter Pack so
  Netwrix Data Classification can extract text from ZIP archives.
keywords:
  - zip
  - .zip
  - text extraction
  - ifilters
  - Filter Pack
  - NDC server
  - DQS cluster
  - Netwrix Data Classification
  - classification
  - zip files
products:
  - data-classification
sidebar_label: Text not being extracted from ZIP files
tags: []
title: "Text not being extracted from ZIP files"
knowledge_article_id: kA04u0000000H69CAE
---

# Text not being extracted from ZIP files

## Expected Behavior

`*.zip` files should be classified based on the sum of their content. This means that the documents within are read as a single file and the `.zip` is classified as a whole.

## Issue

When you review `.zip` files in the Netwrix Data Classification interface you may realize that no text has been extracted from them and they are therefore not being classified based on their content.

## Resolution

To extract text from a `.zip` file Netwrix Data Classification uses **ifilters**. For `.zip` files, [this filter pack](https://download.microsoft.com/download/0/A/2/0A28BBFA-CBFA-4C03-A739-30CCA5E21659/FilterPack64bit.exe) must be installed on the NDC server (or each server in a DQS cluster).
