---
description: >-
  This article explains why files cannot be scanned in end-to-end encrypted applications like WhatsApp Web and Telegram Web, and provides potential workarounds.
keywords:
  - end-to-end encryption
  - file scanning
  - Deep Packet Inspection
sidebar_label: Files Not Scanned in Encrypted Apps
tags:
  - cloud-and-permissions
title: "Files Cannot Be Scanned in End-to-End Encrypted Applications"
knowledge_article_id: kA0Qk0000002B6jKAE
products:
  - general
---

# Files Cannot Be Scanned in End-to-End Encrypted Applications

## Question

Why are files not scanned in end-to-end encrypted applications such as WhatsApp Web and Telegram Web?

## Answer

This is a known limitation. The client can intercept files uploaded through the web browser to WhatsApp Web and Telegram Web, but these files are encrypted. As a result, only the encrypted file can be scanned, and the original file content cannot be analyzed.

Files can be scanned or intercepted if Deep Packet Inspection (DPI) is disabled. Another workaround is to block the domains `web.whatsapp.com` and `web.telegram.org`.

As an alternative, use the desktop versions of these applications, which are not monitored via DPI. In this case, files can be blocked as expected.