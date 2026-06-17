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
  - evtx
products:
  - dataclassification
visibility: public
sidebar_label: Exporting Event Logs
tags:
  - system-administration
  - kb
title: "Exporting Event Logs"
knowledge_article_id: kA00g000000H9eECAS
---

# Exporting Event Logs

## Question

How do you export the Netwrix Data Classification event logs?

## Answer

1. Open **Event Viewer** (`eventvwr.msc`) on each of the affected server(s).
2. Expand **Applications and Services Logs.**
3. Right-click the log associated with the product version:
   - Netwrix Data Classification v5.7: **NDC**
   - Older versions: **conceptSearching**
4. Select **Save All Events As.**
5. Enter a file name that includes the log type and the server it was exported from.

   - For example, when exporting the Application event log from server named `SRV01`, enter `Application_SRV01`.
6. In Save as type, select **Event Files.**
