---
description: >-
  When configuring subscriptions, the product is unable to upload the
  subscription file to a shared file server location; the configuration
  completes with the error "Could not find a part of the path." This article
  describes the cause and steps to resolve the issue.
keywords:
  - subscription
  - shared location
  - file share
  - permissions
  - domain admin
  - monitoring plan
  - Active Directory
  - error
  - Could not find a part of the path
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Unable to Save Subscription File to a Shared Locat
tags: []
title: "Unable to Save Subscription File to a Shared Location"
knowledge_article_id: kA0Qk0000000PKzKAM
---

# Unable to Save Subscription File to a Shared Location

## Symptom

When configuring subscriptions, the product is unable to upload the subscription file to a shared file server location. The configuration completes with the following error:

```
Could not find a part of the path.
```

## Cause

Insufficient permissions for the account specified in the monitoring plan settings.

## Resolution

Perform the following steps to fix the error:

1. Check the user specified for the problematic monitoring plan with your AD user via **Active Directory Users and Computers** (permission or membership). The account should be a **domain admin** account or member of the **domain admins** group.
2. Add this computer account to the target file share.

### Related Article

- Data Source Configuration — Permissions for Active Directory Auditing — v10.6
