---
description: >-
  This article explains how to resolve EventID 2002 in the Netwrix Auditor
  health log caused by an invalid custom Data Collecting Account format. It
  shows how to provide a correctly formatted account name in the monitoring plan
  settings.
keywords:
  - EventID 2002
  - health log
  - monitoring plan
  - Data Collecting Account
  - custom account
  - Take Action
  - Netwrix Auditor
  - A local error has occurred
  - domain\\user
products:
  - auditor
sidebar_label: Netwrix Auditor Health Log Contains EventID 2002
tags: []
title: "Netwrix Auditor Health Log Contains EventID 2002"
knowledge_article_id: kA04u000001114aCAA
---

# Netwrix Auditor Health Log Contains EventID 2002

## Symptom

An item has the **Take Action** status and the Netwrix Auditor Health Log contains the `EventID 2002`:

```
A local error has occurred.
```

## Cause

Invalid format of a custom Data Collecting Account is specified in your monitoring plan settings.

## Resolution

Provide a name for your custom Data Collecting Account in the `domain\\user` format. For that:

1. In Netwrix Auditor, navigate to **Monitoring Plans**.
2. Select the monitoring plan that contains the item with the **Take Action** status.
3. Click **Edit Item** on the right.
4. On the **General** tab, provide the account name in the `domain\\user` format (e.g., `corp\\administrator`) under **Custom account**.
5. Save your edits.
