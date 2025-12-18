---
description: >-
  Notifications from Netwrix Password Reset (PEN) may appear illegible when the
  previewing environment does not use UTF-8 encoding; this article explains the
  cause and how to resolve it.
keywords:
  - UTF-8
  - encoding
  - notifications
  - illegible characters
  - email client
  - PEN
  - Netwrix Password Reset
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Illegible Notification Contents and Characters in Netwrix Password Reset
tags: []
title: "Illegible Notification Contents and Characters in Netwrix Password Reset"
knowledge_article_id: kA0Qk0000000Q8zKAE
---

# Illegible Notification Contents and Characters in Netwrix Password Reset

## Symptom

When previewing or viewing notifications sent by Netwrix Auditor Netwrix Password Reset (PEN), the contents are illegible. The text and particular characters do not correspond to the intended language.

![IllegibleCharacters]./../0-images/ka0Qk0000001Zjh_0EMQk000002jqCb.png)

## Cause

The email client or environment used to preview the notification does not support the `UTF-8` encoding.

## Resolution

Review the character encoding settings in your email client or affected environment − make sure the `UTF-8 (Unicode)` encoding is enabled.

> **NOTE:** It is recommended to set up the explicit `UTF-8 (Unicode)` encoding support instead of available automatic detection methods.

