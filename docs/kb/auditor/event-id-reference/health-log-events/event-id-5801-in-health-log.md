---
description: >-
  Explains Event ID 5801 in the Health Log, which indicates an activity session
  expired while credentials were in use, and provides possible causes and
  resolutions when a resource-based policy and Netwrix Privilege Secure are
  used.
keywords:
  - Event ID 5801
  - health log
  - session expired
  - credentials rotation
  - data collection
  - Netwrix Auditor
  - Netwrix Privilege Secure
  - session timeout
  - monitoring plans
products:
  - auditor
  - privilege-secure-access-management
sidebar_label: Event ID 5801 in Health Log
tags: []
title: "Event ID 5801 in Health Log"
knowledge_article_id: kA0Qk0000001H3dKAE
---

# Event ID 5801 in Health Log

## Symptom

- Netwrix Auditor prompts the following error in the Health Log:

```text
Event ID: 5801
The activity session expired while the corresponding credentials were in use.
This might prevent credentials from rotating or result in data collection failures.
```

- A resource-based policy is used in Netwrix Privilege Secure.

## Causes

Refer to the following possible causes for the error in your environment:

1. A data collection activity takes too long to complete.
2. Multiple parallel activities use the same credentials.

## Resolutions

Refer to the respective resolution for the cause in your environment:

1. Increase the session timeout to allow the data collection to complete. Refer to the following article for additional information on connection profile setup in Netwrix Privilege Secure: https://docs.netwrix.com/docs/privilegesecure/4_2 (Connection Profiles Page — Add COnnection Profile · v4.2).
2. Specify different credentials in the monitoring plans and data sources using Netwrix Privilege Secure accounts. Refer to the following article for the list of supported data sources: https://docs.netwrix.com/docs/auditor/10_8 Auditor Settings — Netwrix Privilege Secure · v10.7).

## Related Articles

- https://docs.netwrix.com/docs/privilegesecure/4_2 (Connection Profiles Page — Add COnnection Profile · v4.2)
- https://docs.netwrix.com/docs/auditor/10_8 Auditor Settings — Netwrix Privilege Secure · v10.7)
