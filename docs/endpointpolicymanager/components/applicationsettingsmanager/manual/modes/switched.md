---
title: "Switched Mode"
description: "Switched Mode"
sidebar_position: 70
---

# Switched Mode

Endpoint Policy Manager Application Settings Manager has a special mode, called Switched mode, which
can come in handy for larger collections of computers. Switched mode enables you to take policies
with user-based Registry settings and apply them to the Computer side.

Switched mode, therefore, makes it easy to apply the same user-based policies to anyone who logs
into a particular computer. This can be useful for

- call centers,
- classrooms,
- kiosk machines,
- libraries,
- special-event computers,
- Terminal Services (RDS) machines and Citrix machines, and
- collections of computers.

So when anyone logs into these special computers, they will get the same User-side settings.

In the following example, we're creating a Switched policy with Endpoint Policy Manager Application
Settings Manager for WinZip, which will affect all users who log onto the machine.

Switched policies are created on the Computer side, and they affect all users who use the effected
machines.

In the figure shown, you can see a GPO that affects Computer accounts. You use the AppSet in the same way
as you would on the User side; however, you configure it for the Computer side. The User-side policy
settings will automatically affect every user who logs onto the targeted computer.

![policypak_application_settings_1_19](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_19.webp)

The figure shown. A GPO that affects Computer accounts.

:::tip
Remember, that in order for Switched policies to apply, the GPO must be linked to an
organizational unit (OU) containing computers, and the chosen computer must be in that OU to
retrieve the GPO. Switched mode logs are generated automatically when users log in and when Group
Policy reapplies in the background.
:::


If you need to troubleshoot Switched mode, all log files in this mode will appear in the user's own
`%localappdata%\PolicyPak` directory and start with "ppSwitched". There are four times a ppSwitched
log file might be generated or written to. They are as follows:

- `ppSwitched_OnLogon.log`—when the user has just logged in
- `ppSwittched.log`—when Group Policy processes in the background or when `GPupdate `is run
- `ppSwitched_ onXmlData.log`—when directives are delivered via MSI, file, or Endpoint Policy
  Manager Cloud service
- `ppSwitched_onSchedule.log`—when directives are redelivered using the Endpoint Policy Manager
  timer mechanism, which is off by default (See the section "Automatic Reapplication of Settings
  with the Reinforcement Timer" for details on how to use the timer.)

:::note
Experienced Group Policy administrators may note the similarities between Endpoint Policy
Manager Application Settings Manager Switched mode and Group Policy's own loopback processing mode.
Endpoint Policy Manager Application Settings Manager Switched policies can be handier than loopback
processing because with Endpoint Policy Manager Application Settings Manager Switched mode, you can
specify a single policy with particular settings to apply to everyone on the computer. With loopback
processing, loopback is enabled for every GPO, which often means a lot more policy settings are
placed on the machine than are desired.

:::



