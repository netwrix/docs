---
title: "Logs from the Client"
description: "Logs from the Client"
sidebar_position: 70
---

# Logs from the Client

Endpoint Policy Manager CSE has several key log files. We mentioned them earlier when describing
what to send technical support. If you are interested in looking through the log files to help
diagnose your own problems, below is the list of Endpoint Policy Manager log files in Table 2.

Table 2: Endpoint Policy Manager Application Settings Manager log files.

| Log file                                                             | Location     | Component       | Description                                                                                                                                                                                                 |
| -------------------------------------------------------------------- | ------------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Commonly used logs:                                                  |              |                 |                                                                                                                                                                                                             |
| `ppUser.log`                                                         | LocalAppData | CSE             | Main CSE log for user policies created during logon, background processing, or` gpupdate` calls.                                                                                                            |
| `ppUser_manual.log`                                                  | LocalAppData | CSE             | CSE log for user policies created during` ppupdate` call.                                                                                                                                                   |
| `ppUser_onLogon.log`                                                 | LocalAppData | CSE             | CSE log for user policies created by PPWatcherSvc on logon.                                                                                                                                                 |
| `ppUser_onLaunch.log`                                                | LocalAppData | CSE             | CSE log for user policies created by automatic reapplication of settings at launch. This log is created for both installed and virtual applications.                                                        |
| `ppUser_onSchedule.log`                                              | LocalAppData | CSE             | CSE log for user policies created by automatic reapplication of settings using the timer.                                                                                                                   |
| `ppUser_onXmlData.log`                                               | LocalAppData | CSE             | CSE log for user policies created when XML Data settings are changed.                                                                                                                                       |
| `ppSwitched.log`                                                     | LocalAppData | CSE             | Main CSE log for Switched policies (i.e., Computer-side settings affecting all users on the machine). This log is created during background processing or `gpupdate` calls.                                 |
| `ppSwitched_manual.log`                                              | LocalAppData | CSE             | CSE log for Switched policies created during` ppupdate` call.                                                                                                                                               |
| `ppSwitched_onLogon.log`                                             | LocalAppData | CSE             | CSE log for Switched policies created by PPWatcherSvc on logon.                                                                                                                                             |
| `ppSwitched_onLaunch.log`                                            | LocalAppData | CSE             | CSE log for Switched policies created by automatic reapplication of settings at launch. This log is created for both installed and virtual applications.                                                    |
| `ppSwitched_onSchedule.log`                                          | LocalAppData | CSE             | CSE log for Switched policies created by automatic reapplication of settings using the timer.                                                                                                               |
| `ppSwitched_onXmlData.log`                                           | LocalAppData | CSE             | CSE log for Switched policies created when XML Data settings get changed via file-based or cloud-based delivery.                                                                                            |
| Less commonly used logs:                                             |              |                 |                                                                                                                                                                                                             |
| `ppComputer.log`                                                     | ProgramData  | CSE             | Main CSE log for Computer-side Paks. Also useful for Switched policies, although Switched policies have their own log.                                                                                      |
| `ppComputer_manual.log `                                             | ProgramData  | CSE             | CSE log for Computer policies created during` ppupdate` call.                                                                                                                                               |
| `ppComputer_onLogon.log`                                             | ProgramData  | CSE             | CSE log for Computer policies created by PPWatcherSvc on logon. See the next section for more information.                                                                                                  |
| `ppComputer_onLaunch.log`                                            | ProgramData  | CSE             | CSE log for Computer policies created by automatic reapplication of settings at launch. This log is created for both installed and virtual applications.                                                    |
| `ppComputer_onSchedule.log`                                          | ProgramData  | CSE             | CSE log for Computer policies created by automatic reapplication of settings using the timer.                                                                                                               |
| `ppComputer_onXmlData.log`                                           | ProgramData  | CSE             | CSE log for computer policies created when XML data settings are changed.                                                                                                                                   |
| `ppUpdatesChecker.log`                                               | ProgramData  | CSE             | Automatic updates log. Check here to see if the auto-update component is seeing the `updates.config` file with instructions on how to auto-update.                                                          |
| `ppWatcherService.log ppWatcherService_x64.log`                      | ProgramData  | CSE             | Main CSE service log. This log contains messages related to system-wide functions (reapply on launch, hooking session creation, entry point for inter-process communication, and other system necessities). |
| `ppSessionWatcher.log ppSessionWatcher_x64.log`                      | LocalAppData | CSE             | This log contains messages related to the session: AppLock, high-level part of reapply on launch, timer-based reinforcement, monitoring XML data changes, and other session items.                          |
| `gpextension.log`                                                    | ProgramData  | MMC             | Main MMC snap-in log.                                                                                                                                                                                       |
| `mmclistshim.log`                                                    | ProgramData  | MMC             | Log for COM+ component used for extension list.                                                                                                                                                             |
| `ppDllWrapper.log`                                                   | ProgramData  | MMC (x64)       | Log for wrapper used for running x86 DLLs in x64 systems.                                                                                                                                                   |
| `ppLT.log`                                                           | ProgramData  | LT (old LT)     | Licensing tool log.                                                                                                                                                                                         |
| `ppUser_spoon.log` `ppSwtiched_spoon.log`````` ppComputer_spoon.log` | LocalAppData | Spoon .DLL Shim | Logs for Spoon.Net and Novell ZENworks Application Virtualization.                                                                                                                                          |
| `ppTemp.log`                                                         | Temp         | Any             | Emergency log created when all other locations are not accessible. (Log name could be ppTemp or any of the above.)                                                                                          |

You can see an example of the contents of the logs In the figure shown.

![troubleshooting_policypak_5](/images/endpointpolicymanager/troubleshooting/applicationsettings/logs/troubleshooting_endpointpolicymanager_5.webp)

The figure shown. An example of the logs.



