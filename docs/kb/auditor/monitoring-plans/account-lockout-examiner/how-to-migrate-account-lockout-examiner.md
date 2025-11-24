---
description: >-
  Shows how to migrate NetWrix Account Lockout Examiner to a different server by
  installing the product on the new host, stopping services, copying
  configuration files, and installing the Web Help-Desk Portal if required.
keywords:
  - Account Lockout Examiner
  - migration
  - server migration
  - NetWrix
  - alinfo.xml
  - settings.xml
  - notifylist.txt
  - Web Help-Desk Portal
products:
  - auditor
sidebar_label: How to migrate Account Lockout Examiner
tags: []
title: "How to migrate Account Lockout Examiner"
knowledge_article_id: kA00g000000H9TgCAK
---

# How to migrate Account Lockout Examiner

How do I migrate NetWrix Account Lockout Examiner to a different server?

## Procedure

To migrate NetWrix Account Lockout Examiner to a different server, perform the following steps:

1. Install NetWrix Account Lockout Examiner on a new server.
2. Stop the product service on a new server
3. Stop the NetWrix Account Lockout Examiner service on the old server
4. Copy the following files from the old NetWrix Account Lockout Examiner installation directory to the same location on the new server:

- `alinfo.xml`
- `inv_logon.xml`
- `settings.xml`
- `sessions.xml`
- `notification_template.txt` (if you use non-default notification template)
- `notifylist.txt` (if you use granularity for notifications)

5. Start the NetWrix Account Lockout Examiner service on the new server.
6. If you are using the NetWrix Account Lockout Examiner Web Help-Desk Portal, install it on the new server.

![User-added image]./../0-images/ka04u000000HcNT_0EM700000004wyK.png)

