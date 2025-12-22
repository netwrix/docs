---
description: >-
  Collections show as Not Scheduled because Windows cannot create the required
  scheduled task. This article lists checks and steps to identify and resolve
  issues that block scheduled task creation on the Netwrix Auditor server.
keywords:
  - Not Scheduled
  - Windows Task Scheduler
  - scheduled task
  - UAC
  - Group Policy
  - credentials
  - Netwrix Auditor
  - 'C:WindowsTasks'
products:
  - auditor
sidebar_label: Data gathering task has not been scheduled
tags: []
title: "Data gathering task has not been scheduled"
knowledge_article_id: kA00g000000H9auCAC
---

# Data gathering task has not been scheduled

The status of your collections show as Not Scheduled after creation.  Following the instructions in the description does not help.

---

Something is blocking the creation of the Windows Scheduled Task.  This could be permissions of some kind, group policy or UAC.

---

To ensure that the following KB will be helpful please verify the following:

1) There is a scheduled task created in the `C:WindowsTasks` folder however the Windows Task Scheduler GUI does not show this task.

Once that is confirmed please try the following.  After each step where a change was made, refresh Windows Task Scheduler to see if the task shows up.

1) Ensure the Data Processing Account is a local admin and/or disable UAC on the Netwrix Auditor server.
2) Ensure that credentials that are entered in **Settings -> Data Collection -> Modify Button** are not blank.
3) **Right click** each of your managed objects and for each one that is using **custom credentials** also make sure that those are not blank.
4) Ensure that the following **Group Policy** is not applied to the Netwrix Auditor server - **Network access: Do not allow storage of passwords and credentials for network authentication**.  You can see if it is by opening **Local Security Policy** and navigating to **Security Settings -> Local Policies -> Security Options**.

Note #2 and #3 are more likely to occur after a migration as the credentials are encrypted specifically for the original computer and need to be entered manually.
