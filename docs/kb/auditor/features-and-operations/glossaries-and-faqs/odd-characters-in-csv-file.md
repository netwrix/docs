---
description: >-
  Explains why a CSV file attachment in a summary report shows odd characters
  and how to import it correctly in Microsoft Excel.
keywords:
  - CSV
  - Excel
  - Win1251
  - UTF8
  - encoding
  - summary report
  - odd characters
  - import
  - bytes
products:
  - auditor
sidebar_label: Odd characters in CSV File
tags: []
title: "Odd characters in CSV File"
knowledge_article_id: kA00g000000H9bCCAS
---
# Odd characters in CSV File

## Symptoms
You receive a CSV file attachment in your summary report and it contains odd characters.

Example: Size changed from "97Â 280 bytes" to "191Â 488 bytes""

## Cause
The CSV file when opened in Excel is opened in a Win1251 Charset.

## Resolution
1. Use the data import feature of **Microsoft Excel** and import the CSV file in `UTF8` format.
