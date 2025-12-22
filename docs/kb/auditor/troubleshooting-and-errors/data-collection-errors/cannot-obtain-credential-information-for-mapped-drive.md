---
description: >-
  Explains the "Cannot obtain credential information for drive <> mapped by <>"
  error returned by Netwrix Account Lockout Examiner and what it means.
keywords:
  - account lockout
  - mapped drive
  - credentials
  - Windows registry
  - Netwrix
  - Account Lockout Examiner
  - mapped drives
  - error message
  - credential information
products:
  - auditor
sidebar_label: Cannot obtain credential information for mapped dr
tags: []
title: "Cannot obtain credential information for mapped drive"
knowledge_article_id: kA00g000000H9T9CAK
---

# Cannot obtain credential information for mapped drive

The following error is returned on account lockout examination:

`Cannot obtain credential information for drive <> mapped by <>`

![User-added image]./../0-images/ka04u000000HcMw_0EM700000004wzm.png)

---

This error means that there are mapped drives in the system, but Netwrix Account Lockout Examiner for some reason cannot read the information on the credentials used to map drives in the Windows registry of the examined machine. This error usually occurs when the user under whose account a drive is mapped, used their own credentials, or a drive is mapped each time a user logs on with the current crendeitals.

