---
description: >-
  Explains how to resolve the "No connection could be made" error in the
  Help-Desk portal caused by mismatched web portal and administrative console
  versions, and provides a link to download the latest builds.
keywords:
  - No connection could be made
  - SocketException
  - Help-Desk portal
  - web portal
  - administrative console
  - Account Lockout Examiner
  - Netwrix
  - connection refused
  - '127.0.0.1:20345'
products:
  - auditor
sidebar_label: 'Error: "No connection could be made"'
tags: []
title: 'Error: "No connection could be made"'
knowledge_article_id: kA00g000000H9TsCAK
---

# Error: "No connection could be made"

I get the following error in the **Help-Desk portal**:

```
"System.Net.Sockets.SecketException: No connection could be made because the target machine actively refused it 127.0.0.1:20345"
```

## Cause

This usually happens when the versions of the product web portal and the administrative console do not match.

## Resolution

1. Make sure that the versions of the web portal and the administrative console match.
2. If they do not match, or to ensure you have the latest fixes, download and install the latest versions of both the console and the web portal from here: [http://www.netwrix.com/account_lockout_examiner.html](https://www.netwrix.com/account_lockout_examiner.html)
