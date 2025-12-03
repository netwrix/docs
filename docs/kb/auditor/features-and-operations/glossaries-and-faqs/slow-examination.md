---
description: >-
  Explains causes and troubleshooting steps when Account Lockout Examiner
  examinations run for several hours without returning results.
keywords:
  - Account Lockout Examiner
  - lockout
  - examination
  - ALEService.exe
  - slow
  - performance
  - troubleshooting
  - firewall
  - bandwidth
products:
  - auditor
sidebar_label: Slow examination
tags: []
title: "Slow examination"
knowledge_article_id: kA00g000000H9bRCAS
---

# Slow examination

Examination of lockouts runs for several hours without returning any results.

---

During examination Account Lockout Examiner service connects to the workstation where the lockout occurred and scans it.
Time of examination depends on several factors, e.g.
- Bandwidth of the connection to the workstation - for workstations located on other continents examination might run for a long time
- The Account Lockout Examiner service load - if there are a lot of events to process in your environment, the service might not have resources to perform the examination
- Permissions or connection issues.
- etc

---

Ensure that:
1. Workstation is reachable from the Account Lockout Examiner server.
2. Connection is not blocked by the firewall.
3. CPU and Memory usage of Account Lockout Examiner (`ALEService.exe` process) is normal
4. The Account Lockout Examiner service account has local administrator permissions on the target workstation.
5. There is not a network bottleneck between the two endpoints (Account Lockout Examiner and target workstation).

It is recommended to perform examination of workstations located in the same site with the Account Lockout Examiner host machine.  Using separate installations of Account Lockout Examiner for other sites is recommended.

If all above factors are OK, please try to perform the steps from the  following articles and re-run examination:

- https://kb.netwrix.com/2763
- https://kb.netwrix.com/1406
- https://kb.netwrix.com/2777
