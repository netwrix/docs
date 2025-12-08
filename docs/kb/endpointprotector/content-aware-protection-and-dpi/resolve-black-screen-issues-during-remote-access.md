---
description: >-
  Learn how to prevent a black screen when accessing a machine remotely by
  adjusting Content Aware Protection (CAP) policy settings in Netwrix Endpoint
  Protector.
keywords:
  - remote access
  - black screen
  - Content Aware Protection
  - CAP
  - print screen
  - Advanced Printer and MTP Scanning
  - endpoint protector
  - screen sharing
  - troubleshooting
products:
  - endpoint-protector
sidebar_label: Resolve Black Screen Issues During Remote Access
tags:
  - content-aware-protection-and-dpi
title: "Resolve Black Screen Issues During Remote Access"
knowledge_article_id: kA0Qk0000002B62KAE
---

# Resolve Black Screen Issues During Remote Access

## Overview

This article explains how to prevent a black screen from appearing when accessing a machine remotely. This issue can occur if a Content Aware Protection (CAP) policy has **Print screen** blocking enabled along with the **Advanced Printer and MTP Scanning** setting checked.

The **Print screen** blocking feature prevents capturing the content of windows on the screen when accessed remotely or during screen sharing in a meeting.

## Instructions

Follow the steps below to resolve this issue:

1. Open the CAP policy settings by navigating to **Content Aware Policies** and **Edit** the policy.

   ![CAP policy settings screenshot](./../0-images/ka0Qk000000ES7h_0EMQk00000Cp0a9.png)

2. Disable the **Print screen** blocking option.

   ![Disable Print screen blocking screenshot](./../0-images/ka0Qk000000ES7h_0EMQk00000Cp0ez.png)

3. Save the changes to the policy.
