---
title: "Troubleshooting Logs"
description: "Troubleshooting Logs"
sidebar_position: 10
---

# Troubleshooting Logs

PolicyPak Preferences Manager client-side extension (CSE) has several key log files.
PolicyPak Preferences Manager can affect the Computer side and User side. The
computer-side log files can be seen in Figure 19, and the user-side log files can be seen in
Figure 20.

![troubleshooting](/images/policypak/troubleshooting/preferences/troubleshooting.webp)

Figure 19. Computer-side log files.

![troubleshooting_1](/images/policypak/troubleshooting/preferences/troubleshooting_1.webp)

Figure 20. User-side log files.

If you want to look through the log files to help diagnose your problems, Table 1 shows the list of
PolicyPak Preferences Manager log files.

Table 1: Log files.

| Log file                         | Location     | Description                                                                                                                                      |
| -------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ppUser_onLogon.log`             | LocalAppData | CSE log for user policies created by PPWatcherSvc on login                                                                                       |
| `ppUser_onManual.log`            | LocalAppData | CSE log for user policies created when Group Policy is manually run via GPupdate                                                                 |
| `ppUser_onSchedule.log`          | LocalAppData | CSE log for user policies created by automatic reapplication of settings using the timer                                                         |
| `ppUser_onPolicyChanged.log`     | LocalAppData | CSE log for user policies created when PolicyPak Preferences Manager receives data from GPOs or XML Data files                     |
| `ppUser_onServiceStart.log`      | LocalAppData | Log for when the PolicyPak Application Settings Manager Service starts and attempts to process the user-side                       |
| `ppComputer_onServiceStart.log`  | ProgramData  | Log for when the PolicyPak Application Settings Manager Service starts and attempts to process the computer-side                   |
| `ppComputer_manual.log`          | ProgramData  | CSE log for computer policies created during ppupdate call                                                                                       |
| `ppComputer_onLogon.log`         | ProgramData  | CSE log for computer policies created by PPWatcherSvc on login (see next section for more information)                                           |
| `ppComputer_onSchedule.log`      | ProgramData  | CSE log for computer policies created by automatic reapplication of settings using the timer                                                     |
| `ppComputer_onPolicyCHanged.log` | ProgramData  | CSE log for computer policies created when XML Data settings get changed                                                                         |
| `ppUpdatesChecker.log`           | ProgramData  | Automatic updates log. Check here to see if the auto-update component is seeing the updates.config file with instructions on how to auto-update. |
| `ppService.log`                  | ProgramData  | Main PolicyPak CSE service log. This log contains messages related to system-wide functions.                                       |

You can see an example of the contents of the logs in Figure 21.

![troubleshooting_2](/images/policypak/troubleshooting/preferences/troubleshooting_2.webp)

Figure 21. The contents of the logs that are required for troubleshooting.


