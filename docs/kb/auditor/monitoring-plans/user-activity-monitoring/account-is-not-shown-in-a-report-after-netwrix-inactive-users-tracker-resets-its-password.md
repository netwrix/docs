---
description: Explains why an account that had its password reset by Netwrix Inactive
  Users Tracker does not appear in the next report and where the product stores a
  list of reset accounts.
keywords:
- inactive users
- password reset
- Inactive users.txt
- Netwrix Inactive Users Tracker
- report
- C:ProgramDataNetWrixInactive Users Tracker
products:
- auditor
sidebar_label: Account is not shown in a report after Netwrix...
tags: []
title: "Account is not shown in a report after Netwrix Inactive Users Tracker resets its password"
knowledge_article_id: kA00g000000H9TuCAK
---

# Account is not shown in a report after Netwrix Inactive Users Tracker resets its password

I have received a report from Netwrix Inactive Users Tracker, and it says that the password of the inactive user had been reset. But why cannot I find this user in the next report?

---

After a password has been reset, the account is added to the `Inactive users.txt` file stored at `C:ProgramDataNetWrixInactive Users Tracker`. This happens to prevent automatic changing of the inactive user password every time the product runs. This user account will be shown in a report next time when any new action is performed on it (such as move to OU, disable and so on).
