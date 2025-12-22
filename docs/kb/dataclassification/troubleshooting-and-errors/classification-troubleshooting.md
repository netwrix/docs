---
description: >-
  Troubleshoot why a document is not classified as expected in Netwrix Data
  Classification. Steps to check workflow logs, reindexing, OCR extraction, and
  taxonomy debugging.
keywords:
  - classification
  - Netwrix Data Classification
  - taxonomy
  - OCR
  - reindex
  - workflow logs
  - PageId
  - collector tracing
products:
  - data-classification
sidebar_label: Classification Troubleshooting
tags:
  - troubleshooting-and-errors
title: "Classification Troubleshooting"
knowledge_article_id: kA0Qk0000000Q0vKAE
---

# Classification Troubleshooting

## Question

Why is my document not classified as expected?

## Answer

Identify a document with incorrect classifications:

### Step #1: Check the status of a document

Go to the workflow logs (`https://[YourNDCServerName]/NDC/Workflows/Logs`) on your Netwrix Data Classification server and check the status:

- If it's **negative**, then there was an error. Enable collector tracing and reindex the file, then view the event logs for details of the issue. You will usually see either the `PageID`, `PageURL`, or both in the logs to know which errors are related.
- If it's less than 400, it means that it is not classified and needs to finish processing first. Verify codes in the [NDC Page Status Codes](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/ndc-page-status-codes)  article.
- If the status is **Classified (400)** and the **ReindexStatus** is 3, then it means it hasn't been reindexed or reclassified. This means that a change was detected or the user manually requested reprocessing. Give Netwrix Data Classification time to reprocess the document.
- If the status is 400 and the reindex status is 0, check the **Text** and **Metadata** tabs. This is an easy way to confirm issues where Optical Character Recognition (OCR) has failed to extract the text you're looking for or if there was an issue processing text extraction for the document. If it doesn't match, enable collector tracing and reindex the document for details in the logs.

### Step #2: Investigate content configuration

If it has the expected text and metadata, investigate why the expected classification/term is not present on the document:

1. Make a note of the **PageId**.
2. Navigate to **Taxonomies** and select the taxonomy you need to diagnose.
3. Click the **Search** tab and then select **Add custom filter**.
4. Select the **Include documents (PageIds)** filter type and type in the PageId of the document you wish to check and then click **Add** > **Search**.

> **TIP:** The document should be shown. If it is not, then check to see if security trimming is enabled and hiding the document.

5. Click on the calculator icon. This will confirm which clues matched and if any filters have been applied.
6. See if the details shown differ from what is expected. You should understand why you expect this document to be classified, so you will see certain matching clues. By comparing the expectations to the results in the classification debug, you can identify which clues are not matching as expected. You may also notice if a mandatory clue hasn't been matched and then adjust the clues accordingly.
7. If the document shows as classified in the calculations dialog but is not shown as classified in the page info dialog, then it's possible that the taxonomy clues have changed since the document was last classified.

   Select the document, select **Re-classify**, and then select **Reset Cache** > **Ok**. Then, observe whether the status of the document changes to **Reclassified**, and then recheck the page info **classifications** tab.
