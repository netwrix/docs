---
description: >-
  This article explains how to resolve the "Audit trails are incorrect" error in
  Netwrix Auditor file server monitoring by correcting object-level auditing and
  inheritance settings on the file server.
keywords:
  - Netwrix Auditor
  - audit trails
  - file server
  - object-level auditing
  - security log
  - permissions
  - Windows auditing
products:
  - auditor
sidebar_label: Audit Trails Are Incorrect in Netwrix Auditor
tags: []
title: "Audit Trails Are Incorrect in Netwrix Auditor"
knowledge_article_id: kA0Qk0000000YphKAE
---

# Audit Trails Are Incorrect in Netwrix Auditor

## Symptom

In Netwrix Auditor, file server monitoring generates the following error message:

```text
Audit trails are incorrect.
```

## Cause

This error message indicates audit configuration issues in the audited environment.

## Resolution

Follow the steps below to resolve the issue:

1. On your file server, navigate to a problematic folder/share. Right-click it and select **Properties**.
2. Select the **Security** tab > **Advanced**.
3. Under the **Audit** tab, disable inheritance.
4. Then, confirm that security principals are configured according to Netwrix documentation: https://docs.netwrix.com/docs/auditor/10_8 Changes and Failed Reads).
5. Click **Apply**. The server will propagate all permissions to the target folders.

Setting up permissions manually will ensure that Netwrix is detecting the settings and that correct Security log events are written on the file server.
