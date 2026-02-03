---
description: >-
  Explains how the File Size Threshold controls individual file uploads in
  Netwrix Endpoint Protector's Content Aware Policies and how it affects
  multi-file uploads.
keywords:
  - file size threshold
  - upload limit
  - content aware policies
  - Netwrix Endpoint Protector
  - multi-file upload
  - DLP
  - CAP
  - file size
products:
  - endpoint-protector
visibility: public
sidebar_label: How Does the File Size Threshold Apply to Uploads?
tags:
  - content-aware-protection-and-dpi
title: "How Does the File Size Threshold Apply to Uploads?"
knowledge_article_id: kA0Qk0000002BE0KAM
---

# How Does the File Size Threshold Apply to Uploads?

## Question
How does the File Size Threshold apply to uploads?

## Answer
The **File Size Threshold** setting limits uploads at the individual file level, not at the aggregate level. This approach provides more granular control when multiple files are uploaded through web-facing applications.

To activate this option, do the following:
1. Go to **Content Aware Protection** > **Content Aware Policies**.
2. Select your CAP policy and enable the **File Size Threshold** option.

![File Size Threshold option in Content Aware Policies settings](./../0-images/ka0Qk000000ESKb_0EMQk00000C8iL7.png)

> **NOTE:** If a File Size Threshold is set, it applies to the entire policy, regardless of which file types or custom contents are selected. The value must be a positive, whole number. For example, if the File Size Threshold is set to `1024 MB`, any file smaller than `1 GB` can be uploaded. If ten `200 MB` files are uploaded, all will be accepted. However, if one of the ten files is `1.5 GB`, the upload attempt will be blocked.
