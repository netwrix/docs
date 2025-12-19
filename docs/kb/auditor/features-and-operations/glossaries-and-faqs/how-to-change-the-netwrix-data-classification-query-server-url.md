---
description: >-
  Shows how to change the Netwrix Data Classification Query Server URL from HTTP
  to HTTPS by updating the `conceptConfig.exe` configuration in the application
  and web service locations.
keywords:
  - Netwrix Data Classification
  - Query Server
  - URL
  - conceptConfig.exe
  - conceptQS
  - ConceptCollectorService
  - conceptIndexer
  - HTTPS
  - localhost
  - change URL
products:
  - auditor
  - data-classification
sidebar_label: How to change the Netwrix Data Classification Query Server URL
tags: []
title: "How to change the Netwrix Data Classification Query Server URL"
knowledge_article_id: kA00g000000H9eXCAS
---

# How to change the Netwrix Data Classification Query Server URL

## Scenario

You want to change the Netwrix Data Classification Query Server URL from `http://localhost:80/conceptQS` to `https://localhost:80/conceptQS`.

## Solution

Navigate to the following file locations:

- `C:\Program Files\ConceptSearching\Services\ConceptCollectorService\conceptConfig.exe`
- `C:\inetpub\wwwroot\conceptQS\bin\conceptConfig.exe`
- `C:\Program Files\ConceptSearching\Services\conceptIndexer\conceptConfig.exe`

For each instance of `conceptConfig.exe`, change the path seen here:

![Change NDC URL](https://kb.netwrix.com/wp-content/uploads/2019/10/Change-NDC-URL-3.png)
