---
title: "Which log file should I consult in order to troubleshoot when one or more settings are not getting applied to the Computer?"
description: "Which log file should I consult in order to troubleshoot when one or more settings are not getting applied to the Computer?"
sidebar_position: 70
---

# Which log file should I consult in order to troubleshoot when one or more settings are not getting applied to the Computer?

"Switched Mode" logs are generated when users log-on (that's one log) and when Group Policy
re-applied in the background on Computer (or `GPupdate` is run).

Before CSE version 603 you would use the `ppComputer.log` in `programdata` to troubleshoot switched
policies.

After CSE version 603, you should look for `ppSwitched` log files.

If you need to troubleshoot switched mode, all switched mode log files will appear in the user's own
`%localappdata%PolicyPak` directory and start with "`ppSwitched`". There are four times a
`ppSwitched` log file might be generated or written to:

- `ppSwitched_OnLogon.log`: For when the user has just logged on.
- `ppSwittched.log`: For when Group Policy processes in the background or for when  `GPupdate` is
  run.
- `ppSwitched_ onXmlData.log`: For when directives are delivered via MSI, file or Netwrix Endpoint
  Policy Manager (formerly PolicyPak) Cloud service.
- `ppSwitched_onSchedule.log`: For when directives are re-delivered using the Endpoint Policy
  Manager timer mechanism (which is off by default. See the section Automatic Re-Application of
  settings with the Reinforcement Timer for details on how to use the timer.)


