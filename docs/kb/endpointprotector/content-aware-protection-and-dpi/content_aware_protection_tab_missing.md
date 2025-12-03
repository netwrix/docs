---
description: >-
  This article explains why the Content Aware Protection (CAP) tab may be missing from the Endpoint Protector Console and provides troubleshooting steps.
keywords:
  - Content Aware Protection
  - Endpoint Protector
  - CAP tab
sidebar_label: CAP Tab Missing
tags:
  - content-aware-protection-and-dpi
title: "Content Aware Protection Tab Missing"
knowledge_article_id: kA0Qk0000002B70KAE
products:
  - endpoint-protector
---

# Content Aware Protection Tab Missing

## Question

Why is the Content Aware Protection (CAP) tab missing from the Endpoint Protector Console?

## Answer

The CAP tab will be absent from the console if the machine or user is not assigned to any CAP policies.

If the machine or user is assigned to at least one CAP policy but the CAP tab is still missing from the console, verify that the client can communicate with the server. For example, check the **Last Seen** field in the server user interface under **Device Control > Computers**.

You can also check the client connection status from the agent's **Settings** tab by pressing the following keyboard shortcuts:

- On Windows: **CTRL + ALT + I**
- On macOS: **Command + Option + I**