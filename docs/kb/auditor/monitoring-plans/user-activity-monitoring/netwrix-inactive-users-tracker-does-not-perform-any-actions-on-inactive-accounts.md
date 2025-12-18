---
description: >-
  Explains why Netwrix Inactive Users Tracker does not perform configured
  actions on inactive accounts and how to resolve the DS_NAME_ERROR_NOT_FOUND
  error caused by missing OUs.
keywords:
  - inactive users
  - inactive accounts
  - Inactive Users Tracker
  - DS_NAME_ERROR_NOT_FOUND
  - Netwrix Password Reset
  - logs
  - OU
  - Active Directory
  - monitoring plan
products:
  - auditor
sidebar_label: Netwrix Inactive Users Tracker does not perform an
tags: []
title: "Netwrix Inactive Users Tracker does not perform any actions on inactive accounts"
knowledge_article_id: kA04u00000110uBCAQ
---

# Netwrix Inactive Users Tracker does not perform any actions on inactive accounts

You have configured a monitoring plan for Netwrix Inactive Users Tracker and specified rules for the product to take actions on inactive accounts (for example, disable inactive accounts or move them to an OU). The required ports are opened for connections as described in the following documentation article: Netwrix Tools. However, Netwrix Inactive Users Tracker does not perform any actions on inactive accounts.

## Symptoms

1. The Inactive Users in Active Directory report shows `None` in the **Performed Action** column for accounts.
2. The Netwrix Password Reset log contains the following error:

```text
DS_NAME_ERROR_NOT_FOUND
```

The log can be found at `%Working_Folder%\Logs\Inactive Users Tracker`.

## Cause

The possible cause for the issue is that some OUs no longer exist in a domain.

## Resolution

Review your Inactive Users monitoring plan settings and check the OU where accounts belong to. The error indicates that the monitored OU does not exist and should be removed from the Netwrix Password Reset's filters.
