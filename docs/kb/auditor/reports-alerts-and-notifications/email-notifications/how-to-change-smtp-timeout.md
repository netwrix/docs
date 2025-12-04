---
description: >-
  Explains how to increase the SMTP send timeout by editing the registry. The
  default timeout is set to 60 seconds.
keywords:
  - SMTP
  - timeout
  - SMTP timeout
  - registry
  - regedit
  - Password Expiration Notifier
  - NetWrix
  - Timeout registry
  - SMTP submit
products:
  - auditor
sidebar_label: How to change SMTP Timeout
tags: []
title: "How to change SMTP Timeout"
knowledge_article_id: kA00g000000H9TRCA0
---

# How to change SMTP Timeout

Timeout occurs during submitting a mail message to an SMTP. Is it possible to increase the default timeout?

The default timeout is set to 60 seconds. To change this parameter:

1. Navigate to **Start -> Run** and type `regedit`.
2. Expand `HKLM -> Software -> NetWrix -> Password Expiration Notifier -> Timeout` and set a new value.
