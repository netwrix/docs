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

- [Afrikaans](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/afr.traineddata)
- [Albanian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/sqi.traineddata)
- [Arabic](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/ara.traineddata)
- [Basque](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/eus.traineddata)
- [Belarusian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/bel.traineddata)
- [Bengali](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/ben.traineddata)
- [Bulgarian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/bul.traineddata)
- [Catalan](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/cat.traineddata)
- [Czech](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/ces.traineddata)
- [Chinese Simplified](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/chi_sim.traineddata)
- [Chinese Traditional](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/chi_tra.traineddata)
- [Croatian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/hrv.traineddata)
- [Danish](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/dan.traineddata)
- [Dutch](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/nld.traineddata)
- [English](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/eng.traineddata)
- [Estonian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/est.traineddata)
- [Finnish](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/fin.traineddata)
- [French](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/fra.traineddata)
- [Galician](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/glg.traineddata)
- [German](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/deu.traineddata)
- [Greek](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/ell.traineddata)
- [Hebrew](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/heb.traineddata)
- [Hindi](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/hin.traineddata)
- [Hungarian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/hun.traineddata)
- [Icelandic](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/isl.traineddata)
- [Italian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/ita.traineddata)
- [Japanese](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/jpn.traineddata)
- [Kannada](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/kan.traineddata)
- [Korean](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/kor.traineddata)
- [Latvian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/lav.traineddata)
- [Lithuanian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/lit.traineddata)
- [Malayalam](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/mal.traineddata)
- [Macedonian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/mkd.traineddata)
- [Maltese](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/mlt.traineddata)
- [Malay](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/msa.traineddata)
- [Norwegian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/nor.traineddata)
- [Polish](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/pol.traineddata)
- [Portuguese](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/por.traineddata)
- [Romanian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/ron.traineddata)
- [Russian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/rus.traineddata)
- [Slovak](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/slk.traineddata)
- [Slovenian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/slv.traineddata)
- [Spanish](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/spa.traineddata)
- [Serbian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/srp.traineddata)
- [Swahili](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/swa.traineddata)
- [Swedish](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/swe.traineddata)
- [Tamil](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/tam.traineddata)
- [Telugu](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/tel.traineddata)
- [Tagalog](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/tgl.traineddata)
- [Thai](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/tha.traineddata)
- [Turkish](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/tur.traineddata)
- [Ukrainian](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/ukr.traineddata)
- [Vietnamese](https://www.netwrix.com/download/products/DDC/TesseractLanguagePacks/vie.traineddata)
