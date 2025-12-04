---
description: >-
  This article explains the RBAC 'Access Denied' error caused by missing role
  assignments for a service account and shows how to resolve it by adding the
  service account to the Exchange Management Group and Organization Management
  security groups.
keywords:
  - RBAC
  - Access Denied
  - role assignments
  - Exchange Management Group
  - Organization Management
  - Service Account
  - Domain Controller
  - permissions
  - Exchange
products:
  - auditor
sidebar_label: RBAC authorization returns access denied
tags: []
title: "RBAC authorization returns access denied"
knowledge_article_id: kA00g000000H9aNCAS
---

# RBAC authorization returns access denied

## Symptoms

You receive the following error message:

```
RBAC authorization returns Access Denied for user **[Service Account]**. Reason: No role assignments associated with the specified user were found on Domain Controller **[Domain Controller]**
```

## Cause

Role assignments are missing for the specified user.

## Resolution

1. Add the specified Service Account to the **Exchange Management Group** and **Organization Management** security groups.
