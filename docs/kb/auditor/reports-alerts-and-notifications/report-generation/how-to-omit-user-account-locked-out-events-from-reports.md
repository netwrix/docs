---
description: >-
  To exclude all "User Account Locked Out" events from reports in Netwrix
  Auditor, edit the `unomitproplist.txt` file in the Netwrix Auditor
  installation folder and remove or comment out the `*.lockoutTime` line.
keywords:
  - User Account Locked Out
  - lockout
  - unomitproplist.txt
  - lockoutTime
  - Netwrix Auditor
  - omit events
products:
  - auditor
sidebar_label: How to omit User Account Locked Out events from re
tags: []
title: "How to omit User Account Locked Out events from reports"
knowledge_article_id: kA00g000000H9WeCAK
---

# How to omit User Account Locked Out events from reports

In order to exclude all "User Account Locked Out" events from reports in Netwrix Auditor, perform the following steps:

1. Navigate to the Netwrix Auditor installation folder
2. Open the `unomitproplist.txt` file
3. Remove the `*.lockoutTime` line OR just add `#` to the beginning of the line (for example, `#*.lockoutTime`)
4. Save the file
