---
title: "Checking the Log Files"
description: "Checking the Log Files"
sidebar_position: 70
---

# Checking the Log Files

Log files for Endpoint Policy Manager Java Rules Manager are found in two places:

- `%Programdata%\PolicyPak\PolicyPak Java Rules Manager`
- `%appdata%\local\PolicyPak\PolicyPak Java Rules Manager`

To see the \ProgramData\PolicyPak folder, run an admin command prompt as shown in Figure 35.
Endpoint Policy Manager Java Rules manager logs are contained within the Endpoint Policy Manager
Java Rules Manager folder.

![troubleshooting_policypak_6](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/troubleshooting_endpointpolicymanager_6.webp)

Figure 35. The PolicyPak Java Rules Manager logs are contained withinEndpoint Policy Manager Java
Rules Manager folder.

The log files can help determine processing occurrences. There is a different log file for each time
Group Policy applies. The following list shows some of these logs:

- `ppComputer_onPolicyChanged` is used when Group Policy, Endpoint Policy Manager Cloud, and/or
  PolicyPak XML files (via PolicyPak Exporter) are used. This is your best bet to try first.
- `ppComputer_onLogon` is used when the computer starts up and processes initial GPOs.
- `ppComputer_onGroupPolicy` is used when Group Policy is processed.
- `ppComputer_OnManual` is used when Endpoint Policy Manager's command ppupdate.exe is run.
- `ppComputer_onSchedule` is used when Endpoint Policy Manager's internal processes attempt to look
  for any changes while offline (usually every 60 minutes).

Logs are automatically wrapped up and can be sent to support by [opening a support ticket](https://www.netwrix.com/tickets.html#/open-a-ticket) with the `PPLOGS.EXE` command on any endpoint
where the client-side extension (CSE) is installed. Since the main logs for Endpoint Policy Manager
Java Rules Manager are in ProgramData, run an Elevated Command Prompt (as admin), and run
`PPLOGS.EXE` to obtain the data from the PolicyPak Java Rules Manager logs.


