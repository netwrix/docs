---
description: >-
  When opening the Netwrix Access Analyzer console, you may see "System Error.
  Code: 5. Access is denied." This article explains the cause and provides steps
  to resolve the issue by granting the required permissions to the
  %SAInstallDir% folder.
keywords:
  - code 5
  - access denied
  - Netwrix Access Analyzer
  - permissions
  - Modify
  - '%SAInstallDir%'
  - schema check
  - console error
products:
  - access-analyzer
sidebar_label: 'Error: Code: 5 Access is Denied When Opening the C'
tags:
  - troubleshooting-and-errors
title: 'Error: Code: 5 Access is Denied When Opening the C'
knowledge_article_id: kA0Qk0000001rK1KAI
---

# Error: Code: 5 Access is Denied When Opening the C

## Symptom

When opening the Netwrix Access Analyzer console, you receive the following error message while checking schemas:

```text
System Error. Code: 5. Access is denied.
```

![Error dialog image](./../0-images/ka0Qk000000EMFB_0EMQk00000CzhkH.png)

## Cause

The current user does not have sufficient permissions to the ` %SAInstallDir%` folder. The user must have at least **Modify** permission access to the folder and all child objects.

## Resolution

1. Add the user or group to the security permissions on the ` %SAInstallDir%` folder.
2. Ensure that they have at least **Modify** permission access to the folder and all child objects.
