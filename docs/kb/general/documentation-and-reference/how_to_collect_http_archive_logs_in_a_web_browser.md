---
description: >-
  This article explains how to collect HTTP Archive (HAR) logs in a web browser, which are useful for troubleshooting web application issues by capturing network requests and responses.
keywords:
  - HAR logs
  - web browser
  - troubleshooting
sidebar_label: Collect HTTP Archive Logs
tags:
  - documentation-and-reference
title: "How to Collect HTTP Archive Logs in a Web Browser"
knowledge_article_id: kA0Qk0000002B18KAE
products:
  - general
---

# How to Collect HTTP Archive Logs in a Web Browser

## Overview

This article explains how to collect HTTP Archive (HAR) logs in a web browser. HAR logs are useful for troubleshooting web application issues by capturing network requests and responses.

## Instructions

1. Open **Chrome**, **Edge**, or **Firefox** and navigate to the page where the issue is occurring.
2. Select the **Application Menu** button, then choose **More Tools** > **Developer Tools**.
3. Click the **Network** tab and keep it open.
4. Make sure the round **Record** button in the upper left is red. If it is gray, click it to start recording. Select the **Preserve log** checkbox, then click the **Clear** crossed circle button to remove previous logs.
5. Reproduce the issue so that all relevant network activity is captured. If required, repeat this step with and without DPI enabled.
6. Click the **Export HAR** button and save the file to your computer as **Save as HAR with Content**.

![Dialog box for exporting HAR logs with the Export HAR button highlighted](./../0-images/servlet_image_25a6a63e2d98.png)