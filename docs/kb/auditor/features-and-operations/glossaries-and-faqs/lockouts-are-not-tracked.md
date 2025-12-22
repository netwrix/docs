---
description: >-
  If some account lockout events are not tracked even though auditing and
  NetWrix Account Lockout Examiner settings are correct and the connection to
  the domain controller (DC) shows as OK, follow the steps to verify the Windows
  security log and adjust registry keys to enable proper tracking.
keywords:
  - lockout
  - account lockout
  - domain controller
  - registry
  - readLog
  - UseWatcher
  - UseWMI
  - Event Viewer
  - Windows security log
products:
  - auditor
sidebar_label: Lockouts are not tracked
tags: []
title: "Lockouts are not tracked"
knowledge_article_id: kA00g000000H9dSCAS
---

# Lockouts are not tracked

You noticed that some lockout events are not tracked even though audit and all settings for Netwrix Account Lockout Examiner have been configured correctly and connection to the required domain controller (DC) and audit setup are shown as OK.

---

First, make sure the Windows security log on your DC is reachable: connect via **Event Viewer** and check that events are logged. If the events are written correctly, but Netwrix Account Lockout Examiner still does not track them, do the following:

1. On the computer where Netwrix Account Lockout Examiner is installed, open Registry Editor: navigate to **Start** - **Run**, enter `regedit` and click **OK**.
2. In the Registry Editor left pane, navigate to `HKLM\Software\Wow6432Node\NetWrix\Account Lockout Examiner` (Wow6432Node only for x64 OS).
3. In the right pane, double-click `readLog` and set its value to `0`.
4. Create a new DWORD named `UseWatcher` and set its value to `1`.
5. Restart the Netwrix Account Lockout Examiner service via the Services snap-in.

[![User-added image]./../0-images/ka04u000000HcWD_0EM700000004udF.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000kAcl&feoid=00N700000032Pj2&refid=0EM700000004udF)

If the above doesn't help, try to change the value of the `UseWMI` registry key to `0`.

[![User-added image]./../0-images/ka04u000000HcWD_0EM700000004wzc.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000kAcl&feoid=00N700000032Pj2&refid=0EM700000004wzc)

