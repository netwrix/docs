---
title: "Logging Locations"
description: "Logging Locations"
sidebar_position: 10
---

# Logging Locations

The most common problem users experience with Netwrix Endpoint Policy Manager (formerly PolicyPak)
Feature Manager for Windows is that they don't see a feature installed or uninstalled as expected.
Here are some tips when trying to troubleshoot Endpoint Policy Manager Feature Manager for Windows.

The log files for Endpoint Policy Manager Feature Manager for Windows's are found in the following
folder:

`%Programdata%\PolicyPak\PolicyPak Feature Manager for Windows`. This is because Endpoint Policy
Manager Feature Manager for Windows affects the Computer side (and all users on that computer). It's
also possible there might be some user-side logins in the following folder:

`%appdata%\local\PolicyPak\PolicyPak Feature Manager for Windows.` But they will not be useful
because all work related to Endpoint Policy Manager Feature Manager for Windows happens on the
Computer side.

There are several files to check in the folder. These files are as follows:

- `ppComputerOperational.log`. This is the log where you can see exactly what Endpoint Policy
  Manager Feature Manager for Windows believes it has accomplished, any error conditions, and if the
  computer has a pending reboot or not.
- `ppUser_OnLogon.log`. New data is added to this log when Group Policy applies at the time of logon
  (and items are set for the User, not the Computer).
- `ppUser_Switched.log`. New data is added to this log when Group Policy applies at the time of
  logon (but items are set for the Computer).
- `ppUser_OnGroupPolicy.log`. New data is added to this log when Group Policy applies in the
  background (or on GPupdate).
- `ppUser_onPolicyChanged.log`. New data is added to this log when Group Policy applies in the
  background or when a non–Group Policy method is used (Microsoft Endpoint Manager [SCCM and
  Intune], Endpoint Policy Manager Cloud, and so on).

Start troubleshooting by verifying that you are set up with the following scenarios:

- You have the group policy object (GPO) or file.
- You have a collection within the GPO.
- You have the policies within the collection.

Figure 45 shows an example of a Endpoint Policy Manager Feature Manager for Windows log with some
annotations during a single run/GPupdate.

![troubleshooting](/images/endpointpolicymanager/troubleshooting/feature/troubleshooting.webp)

![troubleshooting_1](/images/endpointpolicymanager/troubleshooting/feature/troubleshooting_1.webp)

![troubleshooting_2](/images/endpointpolicymanager/troubleshooting/feature/troubleshooting_2.webp)

Figure 45. An example of a Endpoint Policy Manager Feature Manager for Windows log.

Then, to see details of what Endpoint Policy Manager Feature Manager for Windows is trying to do,
you can open up the PPComputerOperational.log (see Figure 46) located at
`Programdata\PolicyPak\PolicyPak Feature Manager for Windows`.

![troubleshooting_3](/images/endpointpolicymanager/troubleshooting/feature/troubleshooting_3.webp)

![troubleshooting_4](/images/endpointpolicymanager/troubleshooting/feature/troubleshooting_4.webp)

Figure 46. Log files showing when a policy installs and uninstalls items.

If needed, logs are automatically wrapped up and can be sent to support by [opening a support ticket](https://www.netwrix.com/tickets.html#/open-a-ticket) using the `PPLOGS.EXE` command on any endpoint
where the client-side extension (CSE) is installed.


