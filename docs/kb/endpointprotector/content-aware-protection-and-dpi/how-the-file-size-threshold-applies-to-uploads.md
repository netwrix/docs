---
description: >-
  Explains how the File size threshold setting limits uploads per individual
  file rather than by aggregate, with an example showing allowed and blocked
  uploads.
keywords:
  - file size threshold
  - upload limits
  - file uploads
  - endpoint protector
  - per-file limit
  - upload block
  - web-facing applications
products:
  - endpoint-protector
sidebar_label: How the File Size Threshold Applies to Uploads
tags:
  - content-aware-protection-and-dpi
title: "How the File Size Threshold Applies to Uploads"
knowledge_article_id: kA0Qk0000002Ay2KAE
---

# How the File Size Threshold Applies to Uploads

## Question
How does the file size threshold apply to uploads?

## Answer
The **File size threshold** setting is designed to limit uploads at the individual file level, rather than at the aggregate level. By managing limits at the individual level, you gain more granularity when multiple files are uploaded through web-facing applications.

For example, if the file size threshold is set to `1024 MB`, any file smaller than `1 GB` is acceptable. If you upload ten files, each `200 MB`, there will be no restriction. However, if one of the ten files is `1.5 GB`, the upload attempt for that file will be blocked.
