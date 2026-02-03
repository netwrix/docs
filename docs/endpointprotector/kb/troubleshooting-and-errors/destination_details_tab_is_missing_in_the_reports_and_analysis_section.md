---
description: >-
  This article explains why the Destination Details tab may be missing in the Reports and Analysis section of the Endpoint Protector Console and how to resolve the issue.
keywords:
  - Destination Details tab
  - Reports and Analysis
  - Endpoint Protector Console
sidebar_label: Missing Destination Details Tab
tags:
  - troubleshooting-and-errors
title: "Destination Details Tab Is Missing in the Reports and Analysis Section"
knowledge_article_id: kA0Qk0000002B4HKAU
products:
  - endpoint-protector
---

# Destination Details Tab Is Missing in the Reports and Analysis Section

## Question

Why is the Destination Details tab missing in the Reports and Analysis section?

## Answer

The **Destination Details** tab, which lists the website where a monitored file was uploaded, may be missing from the **Reports and Analysis** section in the **Endpoint Protector Console**.

![Missing Destination Details tab](./../0-images/servlet_image_1a8a53e40ad6.png)

If the **Destination Details** tab is missing, enable the **Reporting V2** setting in **System Configuration** > **System Settings**.

![Enable Reporting V2 setting](./../0-images/servlet_image_055f8013da42.png)

After enabling **Reporting V2**, the **Destination Details** field will be selectable and viewable in the Reports and Analysis section.

> **NOTE:** The **Reporting V2** setting should always be enabled, as it provides enhanced features compared to Reporting V1.