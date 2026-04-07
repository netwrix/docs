---
description: >-
  Shows how to deploy Tesseract OCR language packs and configure OCR Path
  Mapping so Netwrix Data Classification processes non‑English images correctly.
keywords:
  - OCR
  - Tesseract
  - language pack
  - tessdata
  - Data Classification
  - OCR Path Mapping
  - non‑English
  - conceptQS
  - conceptCollector
products:
  - auditor
  - data-classification
visibility: public
sidebar_label: How to Enable OCR for Non-English Images
tags: []
title: "How to Enable OCR for Non-English Images"
knowledge_article_id: kA00g000000H9e3CAC
---

# How to Enable OCR for Non-English Images

## Question

How can I enable OCR for non-English images?

## Answer

The steps below explain how to deploy additional **OCR language pack(s)** and how to identify which **files** should be processed via the installed **pack(s)**. This assumes that you have enabled **OCR** correctly. More details can be found in the following KB article: [Process Document Images results in no extracted text or invalid text](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/process-document-images-results-in-no-extracted-text-or-invalid-text).

Select the language you wish to use from the list below to download the corresponding language pack:

1. Ensure that the **pack** is deployed on all **servers** to the following locations:
   1. **conceptQS** (typically: `C:\inetpub\wwwroot\NDC\bin\Tesseract-OCR\tessdata`)
   2. **conceptCollector** (typically: `C:\Program Files\Netwrix\Data Classification\Services\ConceptCollectorService\Tesseract-OCR\tessdata`)
2. The **language pack** file should not be **renamed.**

Then, identify which files should be processed via a particular language pack:

1. Log into the **Administration Portal.**
2. Select **Config.**
3. Expand **Text Processing.**
4. Select **OCR Path Mapping.**
5. Each mapping allows you to define part of a **path** to identify specific files for processing:
   1. Select **Add.**
   2. Define the **inclusion** filter, such as:
      - `*ru_*` - Identifies any file that contains `ru_` within the path
      - `*` - Identifies any file
   3. Select the **language** (mapped to the deployed language pack).
   4. Select **Save.**
6. In the event that a **file** matches **multiple** **inclusion rules**, the longest matching **rule** will be used.

## Language Packs:

- [Afrikaans](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/afr.traineddata)
- [Albanian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/sqi.traineddata)
- [Arabic](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/ara.traineddata)
- [Basque](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/eus.traineddata)
- [Belarusian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/bel.traineddata)
- [Bengali](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/ben.traineddata)
- [Bulgarian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/bul.traineddata)
- [Catalan](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/cat.traineddata)
- [Czech](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/ces.traineddata)
- [Chinese Simplified](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/chi_sim.traineddata)
- [Chinese Traditional](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/chi_tra.traineddata)
- [Croatian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/hrv.traineddata)
- [Danish](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/dan.traineddata)
- [Dutch](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/nld.traineddata)
- [English](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/eng.traineddata)
- [Estonian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/est.traineddata)
- [Finnish](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/fin.traineddata)
- [French](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/fra.traineddata)
- [Galician](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/glg.traineddata)
- [German](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/deu.traineddata)
- [Greek](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/ell.traineddata)
- [Hebrew](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/heb.traineddata)
- [Hindi](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/hin.traineddata)
- [Hungarian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/hun.traineddata)
- [Icelandic](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/isl.traineddata)
- [Italian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/ita.traineddata)
- [Japanese](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/jpn.traineddata)
- [Kannada](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/kan.traineddata)
- [Korean](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/kor.traineddata)
- [Latvian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/lav.traineddata)
- [Lithuanian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/lit.traineddata)
- [Malayalam](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/mal.traineddata)
- [Macedonian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/mkd.traineddata)
- [Maltese](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/mlt.traineddata)
- [Malay](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/msa.traineddata)
- [Norwegian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/nor.traineddata)
- [Polish](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/pol.traineddata)
- [Portuguese](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/por.traineddata)
- [Romanian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/ron.traineddata)
- [Russian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/rus.traineddata)
- [Slovak](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/slk.traineddata)
- [Slovenian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/slv.traineddata)
- [Spanish](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/spa.traineddata)
- [Serbian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/srp.traineddata)
- [Swahili](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/swa.traineddata)
- [Swedish](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/swe.traineddata)
- [Tamil](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/tam.traineddata)
- [Telugu](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/tel.traineddata)
- [Tagalog](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/tgl.traineddata)
- [Thai](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/tha.traineddata)
- [Turkish](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/tur.traineddata)
- [Ukrainian](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/ukr.traineddata)
- [Vietnamese](https://dl.netwrix.com/products/DDC/TesseractLanguagePacks/vie.traineddata)
