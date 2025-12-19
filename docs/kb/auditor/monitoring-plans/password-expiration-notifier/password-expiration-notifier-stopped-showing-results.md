---
description: >-
  If you exclude OUs using the `omitoulist.txt` file, Netwrix Password Reset may
  stop showing results if the file contains blank lines. Remove blank lines from
  `omitoulist.txt` to restore monitoring plan results.
keywords:
  - omitoulist.txt
  - blank lines
  - password expiration notifier
  - Netwrix Password Reset
  - monitoring plans
  - troubleshooting
  - text editor
  - PEN
products:
  - auditor
sidebar_label: Password expiration notifier stopped showing resul
tags: []
title: "Password expiration notifier stopped showing resul"
knowledge_article_id: kA04u000000HDgYCAW
---

# Password expiration notifier stopped showing resul

After excluding some OUs from the scope by modifying the `omitoulist.txt` file, you may notice that Netwrix Password Reset has stopped showing any results for any monitoring plans, even after reverting changes back.

A possible cause is blank lines accidentally added at the beginning, in the middle, or at the end of the `omitoulist.txt` file. To fix that, open the file in any text editor and remove the blank lines. On the screenshot below, the lines 1, 7 and 9 must be removed.

1. Open `omitoulist.txt` in any text editor.
2. Remove any blank lines at the beginning, middle, or end of the file.
3. Save the file.

![image.png]./../0-images/ka04u000000HdDR_0EM4u0000084XpS.png)

