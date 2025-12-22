---
description: >-
  Explains Event ID 5803 in the Health Log of Netwrix Auditor and how to resolve
  it when an activity session ends while the corresponding credentials were in
  use.
keywords:
  - Event ID 5803
  - Health Log
  - Netwrix Auditor
  - Netwrix Privilege Secure
  - Configuration Server Service
  - session terminated
  - data collection failures
products:
  - auditor
  - privilege-secure-access-management
visibility: public
sidebar_label: Event ID 5803 in Health Log
tags: []
title: "Event ID 5803 in Health Log"
knowledge_article_id: kA0Qk0000001GVlKAM
---

# Event ID 5803 in Health Log

## Symptom

Netwrix Auditor prompts the following error in Health Log:

```text
Event ID: 5803
The activity session terminated while the corresponding credentials were in use. This might result in data collection failures.
```

## Causes

Refer to the following possible causes for the error message:

- A user manually terminated the session in the Netwrix Privilege Secure for Access Management console.
- The Netwrix Auditor Configuration Server Service was restarted.

## Resolution

This error message informs a user of the abruptly ended session. This behavior is expected in case of a manual session termination in Netwrix Privilege Secure or an abrupt restart of the Netwrix Auditor Configuration Server Service.
