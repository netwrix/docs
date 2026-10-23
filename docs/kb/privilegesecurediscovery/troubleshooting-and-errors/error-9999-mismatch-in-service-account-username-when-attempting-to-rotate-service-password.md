---
title: "Error: 9999 Mismatch in Service Account Username when Attempting to Rotate Service Password"
description: "Resolve the 9999 service account username mismatch error that stops an endpoint scan by setting Local Admin Password TTL Days to 0 and restarting the service."
sidebar_label: "Error: 9999 Mismatch in Service Account Username when Attempting to Rotate Service Password"
keywords:
- 9999 Mismatch in service account username
- rotate service password
- service account
- Local Admin Password TTL Days
- scan error
- endpoint scan
- password rotation
- error 9999
- NPS-D
- SecureONE
- Remediant SecureONE
products:
- privilegesecurediscovery
tags:
- kb
- troubleshooting-and-errors
knowledge_article_id: kA04u00000110qYCAQ
---

## Symptom

When you scan an endpoint, the scan does not complete, and the following error occurs:

```text
9999 Mismatch in service account username when attempting to rotate service password
```

## Cause

The error is caused by the **Local Admin Password TTL Days** setting. This setting belongs to a legacy feature that rotated local account passwords. The product no longer supports this feature, and the setting is `0` by default in current installations and upgrades.

## Resolution

1. Set **Local Admin Password TTL Days** to `0` for the affected service.
2. Restart the service from the UI.
