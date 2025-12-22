---
description: >-
  Shows how to map a custom or incorrect file extension to a known content type
  so text extraction succeeds.
keywords:
  - text extraction
  - file extension
  - content type
  - Content Type Extension Mappings
  - Administration Interface
  - Collector service
  - Text Processing
products:
  - auditor
  - data-classification
sidebar_label: An unknown file type or a file with a custom exten
tags: []
title: "An unknown file type or a file with a custom extension is failing text extraction"
knowledge_article_id: kA00g000000H9e9CAC
---

# An unknown file type or a file with a custom extension is failing text extraction

In some cases **internal** files may have the **wrong extension**, but are a known and supported content type. If that happens, use the following steps to map the **custom extension** to a known **Content Type** so text extraction can succeed.

1. Navigate to the **Config** section of the **Administration Interface**
2. Expand **Text Processing**
3. Select **Content Type Extension Mappings**
4. Create a new **entry**, mapping the **extension** (such as `".rpt"`) to the correct content type (such as `HTML`)
5. **Restart** the **Collector service**
6. **Re-process** any affected **files**
