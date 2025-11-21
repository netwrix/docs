---
description: >-
  Steps to export Netwrix Data Classification event logs from Windows Event
  Viewer so you can collect and share logs for troubleshooting.
keywords:
  - Netwrix Data Classification
  - event logs
  - export
  - Event Viewer
  - NDC
  - conceptSearching
  - Save All Events As
products:
  - data-classification
visibility: public
sidebar_label: How to Export Event Logs
tags:
  - system-administration
title: "How to Export Event Logs"
knowledge_article_id: kA00g000000H9eECAS
---

# How to Export Event Logs

## Question

How To Export the Netwrix Data Classification Event Logs?

## Answer

1. Open **Event Viewer** (`eventvwr.msc`) on each of the affected server(s) (Run → `eventvwr.msc`).
2. Expand **Applications and Services Logs.**
3. Depending on a product version:
   - For Netwrix Data Classification v5.7: Right-click the log named **NDC.**
   - For Netwrix Data Classification older versions: Right-click the log named **conceptSearching.**
4. Select **Save All Events As.**
5. Enter a file name that includes the log type and the server it was exported from.

   For example, when exporting the Application event log from server named `SRV01`, enter `Application_SRV01`.
6. In **Save as type**, select **Event Files.**
