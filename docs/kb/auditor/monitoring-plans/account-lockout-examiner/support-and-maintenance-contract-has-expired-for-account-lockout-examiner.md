---
description: >-
  Explains how to stop the "Support and Maintenance contract has expired"
  message for NetWrix Account Lockout Examiner after the contract has been
  renewed and a new license has been entered.
keywords:
  - account lockout examiner
  - license
  - support contract
  - maintenance expired
  - users.dat
  - services.msc
  - NetWrix
  - license renewal
products:
  - auditor
sidebar_label: 'Support and Maintenance contract has expired" for '
tags: []
title: Support and Maintenance contract has expired" for Account Lockout Examiner
knowledge_article_id: kA00g000000PbdFCAS
---

# Support and Maintenance contract has expired" for Account Lockout Examiner

The "Support and Maintenance contract has expired" message persists event after the contract has been renewed and a new license has been entered.

Perform the following procedure to stop getting this message:

1. Stop the **NetWrix Account Lockout Examiner service** (navigate to **Start** -> **Run** and type `services.msc`, locate the service, right-click it and select **Stop**).
2. Navigate to the NetWrix Account Lockout Examiner installation directory.
3. Locate the `users.dat` file and delete it.
4. Restart the **NetWrix Account Lockout Examiner service**.
5. Re-enter the license, if necessary.
