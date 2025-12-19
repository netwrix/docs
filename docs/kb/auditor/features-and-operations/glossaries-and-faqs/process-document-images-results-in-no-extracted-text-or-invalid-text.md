---
description: >-
  Troubleshoot cases where images or documents produce no extracted text or
  invalid OCR text in Netwrix Data Classification and Netwrix Auditor by
  verifying OCR settings and image quality.
keywords:
  - OCR
  - Tesseract
  - Process Document Images
  - Visual C++ Redistributable
  - DPI
  - Text Extraction
  - Content Type Extraction Methods
  - Netwrix Data Classification
  - Netwrix Auditor
products:
  - auditor
  - data-classification
sidebar_label: Process Document Images results in no extracted te
tags: []
title: "Process Document Images results in no extracted text or invalid text"
knowledge_article_id: kA00g000000H9e1CAC
---

# Process Document Images results in no extracted text or invalid text

Documents containing images, or images themselves are resulting in no extracted text - or invalid text.

<hr />

## No Text

The first step is to ensure that Netwrix Data Classification's OCR capabilities are enabled, please:

1. Navigate to the **Config** section of the **Administration Interface**
2. Expand **Text Processing**
3. Select **Content Type Extraction Methods**
4. Edit each of the image types that you wish to **OCR** selecting the **Tesseract** option

To **OCR** images contained within documents (such as **PDFs**, or **Office documents**) please also enable the **Process Document Images** mode, found within: **Config** → **Core** → **Collector**.

**Tesseract** requires the **Visual C++ Redistributable** for **Visual Studio 2015** to be installed, this is available from the following [link](https://www.netwrix.com/go/VCRedistributable2015).

## Invalid Text

Sometimes **OCR** processing will result in **garbled** or **invalid text**. Typically this is because the document is either **rotated**, or at too **low** a **resolution** for processing (the recommended **DPI** is **300** for **OCR processing**). If this is no the case please raise a support request, attaching the image to the request, for us to investigate further.
