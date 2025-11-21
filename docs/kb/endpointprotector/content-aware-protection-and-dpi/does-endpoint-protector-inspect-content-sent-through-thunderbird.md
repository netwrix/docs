---
description: >-
  Explains whether Endpoint Protector can inspect email content sent through
  Thunderbird and how Thunderbird version affects inspection capabilities.
keywords:
  - endpoint-protector
  - Thunderbird
  - content inspection
  - attachments
  - Content Aware Protection
  - email clients
  - add-ons
  - version 38.0
products:
  - endpoint-protector
sidebar_label: Does Endpoint Protector Inspect Content Sent Throu
tags:
  - content-aware-protection-and-dpi
title: "Does Endpoint Protector Inspect Content Sent Through Thunderbird?"
knowledge_article_id: kA0Qk0000002BCdKAM
---

# Does Endpoint Protector Inspect Content Sent Through Thunderbird?

## Question
Does Endpoint Protector inspect content sent through Thunderbird?

## Answer
For Thunderbird version `38.0` and earlier, you can inspect all email content, including the body, subject, sender, recipients, and attachments. For Thunderbird versions later than `38.0`, you can inspect file attachments only.

Using the Content Aware Protection module, you can inspect content sent through various email clients, such as Outlook and Thunderbird. You can scan the email body, subject, sender, recipients, and create a file shadow of the body content, where supported. This functionality relies in part on email client add-ons.

Thunderbird changed its add-on implementation policy after version `38.0`. As a result, you can only filter attachments in newer Thunderbird versions.

> **NOTE:** To use the full content inspection features with Thunderbird, do not update beyond version `38.0`.
