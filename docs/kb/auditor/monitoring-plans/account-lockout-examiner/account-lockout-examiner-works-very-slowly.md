---
description: >-
  Resolve slow performance in Netwrix Account Lockout Examiner by stopping the
  service, removing stale XML files, and restarting the service.
keywords:
  - account lockout
  - performance
  - ALEService.exe
  - allinfo.xml
  - inv_logon.xml
  - readEvents.xml
  - sessions.xml
  - Netwrix
  - troubleshooting
products:
  - auditor
sidebar_label: Account Lockout Examiner works very slowly
tags: []
title: "Account Lockout Examiner works very slowly"
knowledge_article_id: kA00g000000H9dZCAS
---

# Account Lockout Examiner works very slowly

To address the slow performance issue, perform the following steps:

1. Stop the Netwrix Account Lockout Examiner service via the **Services snap-in**. If the service fails to stop, kill the `ALEService.exe` process via **Task Manager**.
2. Go to the **Account Lockout Examiner installation directory**.
3. Delete or rename the following files:
   - `allinfo.xml`
   - `inv_logon.xml`
   - `readEvents.xml`
   - `sessions.xml`

   **NOTE**: This will remove info about all old lockouts from Account Lockout Examiner. Backup this files if you need them for the further access.
4. Start Netwrix Account Lockout Examiner Service

[![User-added image]./../0-images/ka04u000000HcWK_0EM700000004wmE.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000kAbJ&amp;feoid=00N700000032Pj2&amp;refid=0EM700000004wmE)

