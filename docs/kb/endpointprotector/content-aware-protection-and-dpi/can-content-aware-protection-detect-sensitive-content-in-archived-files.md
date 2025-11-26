---
description: >-
  Explains whether Netwrix Endpoint Protector's Content Aware Protection can
  detect sensitive content inside archived files and how password protection
  affects scanning.
keywords:
  - endpoint protector
  - content aware
  - archives
  - password protected
  - sensitive data
  - credit card
  - social security
  - file type filter
  - data leak
products:
  - endpoint-protector
visibility: public
sidebar_label: Can Content Aware Protection Detect Sensitive Cont
tags:
  - content-aware-protection-and-dpi
title: "Can Content Aware Protection Detect Sensitive Content in Archived Files?"
knowledge_article_id: kA0Qk0000002BNeKAM
---

# Can Content Aware Protection Detect Sensitive Content in Archived Files?

## Question
Will Netwrix Endpoint Protector's Content Aware Protection detect and block documents containing sensitive information, such as credit card numbers or Social Security numbers, when they are transferred as archives?

## Answer
Netwrix Endpoint Protector's Content Aware agent will detect and block documents with sensitive content only if the archives are not password protected. If an archive is password protected, the agent cannot scan its contents.

> **NOTE:** To help prevent leaks of sensitive data through archives, use the file type filter and select all archive types.
