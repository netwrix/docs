---
title: "Automate Add-On Execution"
description: "Automate Add-On Execution"
sidebar_position: 30
---

# Automate Add-On Execution

To ensure you feed the most recent data to your SIEM solution, Netwrix recommends scheduling a daily
task for running the add-on.

**Perform the following steps to create a scheduled task:**

**Step 1 –** On the computer where you want to execute the add-on, navigate to **Task Scheduler**.

**Step 2 –** On the **General** tab, specify a task name. Make sure the account that runs the task
has all necessary rights and permissions.

**Step 3 –** On the **Triggers** tab, click **New** and define the schedule. This option controls
how often audit data is exported from Auditor and saved to event log. Netwrix recommends scheduling a
daily task.

**Step 4 –** On the **Actions** tab, click **New** and specify action details. Review the following
for additional information:

| Option                   | Value                                                                                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Action                   | Set to "_Start a program_".                                                                                                                                                            |
| Program/script           | Input "_Powershell.exe_".                                                                                                                                                              |
| Add arguments (optional) | Add a path to the add-on in double quotes and specify add-on parameters. For example: -file "C:\Add-ons\Netwrix_Auditor_Add-on_for_AlienVault_USM.ps1" -NetwrixAuditorHost 172.28.6.15 |

**Step 5 –** Save the task.

After creating a task, wait for the next scheduled run or navigate to **Task Scheduler** and run the
task manually. To do this, right-click a task and click **Run**.
