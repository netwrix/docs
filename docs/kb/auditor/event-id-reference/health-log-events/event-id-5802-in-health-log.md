---
description: >-
  Describes Event ID 5802 in the Health Log where an activity session expires
  while credentials are in use and explains how to resolve it by increasing the
  session timeout.
keywords:
  - Event ID 5802
  - health log
  - session expired
  - data collection
  - Netwrix Auditor
  - Netwrix Privilege Secure
  - connection profile
  - timeout
products:
  - auditor
  - privilege-secure-access-management
sidebar_label: Event ID 5802 in Health Log
tags: []
title: "Event ID 5802 in Health Log"
knowledge_article_id: kA0Qk0000001H5FKAU
---

# Event ID 5802 in Health Log

## Symptom

- You may see the following error in the Health Log of Netwrix Auditor:

```
Event ID: 5802
The activity session expired while the corresponding credentials were in use. This might result in data collection failures.
```

- A resource-based policy is used in Netwrix Privilege Secure for Access Management.

## Cause

A data collection activity takes too long to complete.

## Resolution

Increase the session timeout to allow the data collection to complete. Refer to the following article for additional information on connection profile setup in Netwrix Privilege Secure for Access Management: Connection Profiles Page — Add Connection Profile · v4.2.

## Related Articles

- Connection Profiles Page — Add Connection Profile · v4.2
