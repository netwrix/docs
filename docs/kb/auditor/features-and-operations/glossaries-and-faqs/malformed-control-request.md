---
description: >-
  Explains why Account Lockout Examiner returns "Malformed control request" when
  you send a remote control email and lists the required email structure to
  unlock accounts.
keywords:
  - account lockout
  - malformed control request
  - Account Lockout Examiner
  - UNLOCK
  - remote control email
  - UTF-8
  - lockout notification
  - unlock code
products:
  - auditor
sidebar_label: Malformed control request
tags: []
title: "Malformed control request"
knowledge_article_id: kA00g000000H9a1CAC
---

# Malformed control request

When I send remote control e-mail to Account Lockout Examiner to unlock user account, I get a reply saying:

**Malformed control request**

---

Account Lockout Examiner requires a specific structure of an e-mail to unlock the user account.

It should be a reply to lockout notification and shall have the code specified after `UNLOCK:` keyword.

For example:

![User-added image]./../0-images/ka04u000000HcT2_0EM700000005kEC.png)

---

Make sure that:
1. you reply to a lockout notifications
2. `UNLOCK:` keyword is specified
3. the quoted e-mail was not changed
4. you reply in UTF-8 encoding.

