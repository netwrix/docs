---
description: >-
  This article explains why Optical Character Recognition (OCR) may not be functioning in Endpoint Protector and provides steps to resolve the issue.
keywords:
  - Optical Character Recognition
  - OCR issues
  - Endpoint Protector
sidebar_label: OCR Not Working
tags:
  - content-aware-protection-and-dpi
  - kb
title: "Optical Character Recognition (OCR) Not Working"
knowledge_article_id: kA0Qk0000002B2gKAE
products:
  - endpointprotector
---

# Optical Character Recognition (OCR) Not Working

## Question

Why is Optical Character Recognition (OCR) not working in Endpoint Protector?

## Answer

OCR may not be working in Endpoint Protector due to the setting not being enabled, low image quality, insufficient resolution, poor contrast, an unsupported document language, or an outdated client version.

To resolve OCR issues, follow the steps below:

1. Confirm **Optical Character Recognition** is enabled for the affected computer, group, or globally. See [Client Settings](/docs/endpointprotector/admin/dc_module/globalsettings#client-settings) for this and related OCR settings, including **Disable OCR notifications**.
2. Ensure the image quality is high, with a recommended minimum of **150 dpi** (dots/pixels per inch). Good contrast in the image also improves OCR accuracy.
3. To check the dpi of an image on Windows, open the image in **Paint**, go to **File** > **Properties**, and review the **Resolution** field (in dpi).
4. Make sure you are using the latest version of the Endpoint Protector client.

:::note
Starting with EPP Client 5.9.4.3 Hotfix 1, Endpoint Protector uses an improved native OCR engine with faster and more accurate detection, plus support for images embedded in PDF files (Windows and macOS) and HEIC images (macOS). If OCR results are inaccurate or slow, upgrading the client can resolve this without any additional configuration.
:::

5. On Windows, confirm the document's language is supported by the built-in Windows OCR engine (`Windows.Media.Ocr`), and that the corresponding OCR language pack is installed on the endpoint — OCR only recognizes languages with an installed language pack. See Microsoft's [OcrEngine.AvailableRecognizerLanguages](https://learn.microsoft.com/en-us/uwp/api/windows.media.ocr.ocrengine.availablerecognizerlanguages) reference for the current supported-language list.