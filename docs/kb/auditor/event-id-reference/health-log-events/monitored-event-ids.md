---
description: >-
  Lists the Windows event IDs that Netwrix Account Lockout Examiner monitors for
  invalid logons and account lockout/unlock events.
keywords:
  - event IDs
  - account lockout
  - Kerberos
  - NTLM
  - Windows event log
  - 4771
  - 4776
  - 4740
  - 4625
products:
  - auditor
sidebar_label: Monitored Event IDs
tags: []
title: "Monitored Event IDs"
knowledge_article_id: kA00g000000H9dXCAS
---

# Monitored Event IDs

Netwrix Account Lockout Examiner monitors invalid logons and lockouts.

Here is the detailed list of monitored events:

| Windows Vista/2008/7/2008R2 | Windows XP/2003 | Type    | Description                                                            |
|-----------------------------|-----------------|---------|------------------------------------------------------------------------|
| `4771`                      | `675`           | Failure | Invalid Kerberos logon - Kerberos ticket request failed                |
| `4776`                      | `680,681`       | Failure | Invalid NTLM logon - failed NTLM authentication attempt                |
| `4740`                      | `644`           | Success | An account was locked out                                              |
| `4767`                      | `671`           | Success | An account was unlocked                                                |
| `4625`                      | `529-539*`      | Failure | An account failed to log on - actual invalid logon event              |

*In Windows XP/2003 actual invalid logons can be logged as any of 10 events with IDs between 529 and 539
