---
description: >-
  When you run the SQL Server Reporting Services Settings wizard during initial
  Audit Database configuration, you may receive an error stating the account is
  not granted the Content Manager role. This article explains the cause and
  points you to the software requirements to resolve the issue.
keywords:
  - reporting services
  - content manager
  - SQL Server Reporting Services
  - Audit Database
  - operating system language
  - Netwrix Auditor
  - installation
  - software requirements
  - error message
products:
  - auditor
sidebar_label: 'Reporting Services Error: Cannot Check the Content'
tags: []
title: "Reporting Services Error: Cannot Check the Content Manager Role on The Report Server"
knowledge_article_id: kA04u00000111F4CAI
---

# Reporting Services Error: Cannot Check the Content Manager Role on The Report Server

## Symptom

When you run the **SQL server Reporting Services Settings** wizard during initial Audit Database configuration in Netwrix Auditor, you see the following error:

```text
Cannot check if the account specified is granted the Content Manager role on the report server.
```

## Cause

This issue is related to the Operating System language. Netwrix Auditor can be installed on English-only OS.

## Resolution

Please review the **Operating System** component in the Software Requirements table. For additional information about Auditor software requirements, refer to the following article: Requirements — Software Requirements — v10.6.
