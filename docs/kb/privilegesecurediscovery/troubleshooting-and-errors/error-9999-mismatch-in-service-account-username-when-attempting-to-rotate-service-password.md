---
description: 'When you scan an endpoint, you may see the error "9999 Mismatch in service account username when attempting to rotate service password". This article explains the cause and steps to resolve it by setting Local Admin Password TTL Days to 0 and restarting the service.'
keywords: ['9999 mismatch', 'service account', 'service password rotation', 'Local Admin Password TTL Days', 'scan error', 'endpoint scan', 'password rotation']
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116e9AAA
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-11'
  knowledge_article_id: kA04u00000110qYCAQ
  last_modified_date: '2023-07-11'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: "Error: 9999 Mismatch in Service Account Username when Attempting to Rotate Service Password"
tags: []
title: 'Error: 9999 Mismatch in Service Account Username when Attempting to Rotate
  Service Password'
knowledge_article_id: kA04u00000110qYCAQ
---

Formerly SecureONE

# Error: 9999 Mismatch in Service Account Username when Attempting to Rotate Service Password

## Symptom

When attempting to scan an endpoint the following error occurs:

```
9999 Mismatch in service account username when attempting to rotate service password
```

The scan will not complete.

## Cause

It is a bug related to the **Local Admin Password TTL Days**. This is an older feature that supported rotating local account passwords which is no longer supported/leveraged. We have set this to 0 in all installations/upgrades moving forward.

## Resolution

1. Update the **Local Admin Password TTL Days** to `0` for the respective service
2. Restart the service via the UI