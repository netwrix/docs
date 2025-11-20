---
title: "Settings Delivery and Reinforcement Options"
description: "Settings Delivery and Reinforcement Options"
sidebar_position: 80
---

# Settings Delivery and Reinforcement Options

When the client is online and able to make contact with a domain controller, Endpoint Policy Manager
Application Settings Manager will automatically utilize the Group Policy background refresh cycle
and ensure that any changed settings are reapplied and up to date (if changed by a user).
Additionally, users can manually run the built-in Windows command `gpupdate.exe` to kick off a
background refresh and get updated settings. But what happens if the client is offline?

As seen In the figure shown, a client machine can detect that there is no network connectivity. With no
network connectivity, Microsoft's built-in `gpupdate.exe `will fail when it is run.

![policypak_application_settings_1_20](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_20.webp)

The figure shown. The error message that is received when `gpupdate.exe` is run while the client machine is
offline.

Because the network is disconnected, no updates can come from the server.

Additionally, Endpoint Policy Manager Application Settings Manager cannot use AppLock™ for every
setting for every application. That is, Endpoint Policy Manager Application Settings Manager cannot
gray out or remove the UI from every application.

In these cases, Endpoint Policy Manager Application Settings Manager will do the next best thing: it
will continually reapply your desired configuration settings to the User and Computer—regardless of
whether the computer is online or offline.

Endpoint Policy Manager Application Settings Manager will reapply an application's settings manually
when

- the computer is online and the Microsoft `GPupdate `command is run and
- the computer is online or offline and the Endpoint Policy Manager `ppupdate` command is run.

It will reapply automatically when

- the user logs out and logs back in,
- Group Policy refreshes and reapplies in the background,
- the application is re-launched, and
- the Reinforcement Timer kicks in (it must be turned on).

Let's explore the manual command `ppupdate` and the various automatic ways that Endpoint Policy
Manager Application Settings Manager will reenforce application settings.

## Manual Reapplication of Settings with PPupdate

Whether the computer is online or offline, PolicyPak Application Settings Manager can manually
reapply settings using` ppupdate.exe`. In the figure shown, you can see `ppupdate.exe` being run to
reinforce any changed settings.

![policypak_application_settings_1_21](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_21.webp)

The figure shown. `Ppupdate.exe` being run.

This command will work when the computer is online or offline, if the settings that are locally
cached on the machine are reapplied, or if you use a non-Group Policy method (where XML data files
are used) (see section, "Deploying Endpoint Policy Manager Directives without Group Policy," in
Appendix A: Using Endpoint Policy Manager with MDM and UEM Tools). The Endpoint Policy Manager
Application Settings Manager `ppupdate` command never uses the network to retrieve settings, so
network connectivity is not needed to run this command.

## Automatic Reapplication of Settings at Application Launch

:::note
For a demonstration of this feature, please see this video:
[The Superpowers](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/featurestechsupport/superpowers.md).
:::


When an application is run, its settings are automatically reapplied before the application is
launched. This feature is turned on for all AppSets by default.

If you do not want a particular AppSet's settings to apply automatically when the application is
relaunched, it can be disabled when you set up the directives inside the GPMC.

Inside the AppSet definition, find the Options button and deselect "Always re-apply settings when
application runs." As you can see In the figure shown, all applications are checked by default. You can
uncheck the checkbox to stop the reapplication.

![policypak_application_settings_1_22](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_22.webp)

The figure shown. Select or unselect the "Always re-apply settings when application runs" setting in the
Options inside the Pak definition.

Remember that the applications' settings will still reapply during periodic Group Policy background
processing, or if you manually run `GPupdate `and have that setting enabled.

The reapplication is provided by a kernel-mode driver, which is actively looking for applications
that Endpoint Policy Manager Application Settings Manager is managing. If you wish to fully disable
the kernel-mode driver (and, hence, the automatic reapplication of settings), you need to manually
configure a Registry setting on the client at `HKLM\Software\PolicyPak\Config\Driver`, and then set
Enabled (REG_DWORD) to 0. This is demonstrated In the figure shown.

Note that you also should either reboot the machine to disable or re-enable the driver.

![policypak_application_settings_1_23](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_23.webp)

The figure shown. Use the following Registry location to fully disable the Endpoint Policy Manager driver,
which performs reapplication of settings for applications.

:::note
Log files for the automatic reapplication of settings at launch are found
in` %appdata%\local\PolicyPak` in a file called ppUser_onLaunch.log.
:::


## Automatic Reapplication of Settings with the Reinforcement Timer

As previously stated, when the client is online and able to make contact with a domain controller,
Endpoint Policy Manager Application Settings Manager will automatically utilize the Group Policy
background refresh cycle and ensure that any changed settings are reapplied as well as up to date
(if changed by a user). And, a user can manually run `ppupdate.exe` for reapplication of settings
when online or offline. Also, when the application is next run, the default behavior is set to have
Endpoint Policy Manager Application Settings Manager reapply the application's settings.

Endpoint Policy Manager Application Settings Manager has an optional switch, which must be manually
turned on in the client's Registry, that will reapply applications' settings based on a timer. In
essence, this runs `ppupdate` on a prescribed timeline. You might want to use this feature if the
app is run infrequently or if you suspect that another application is modifying the application's
settings.

Again, the reinforcement timer is not enabled by default on the target machine. If you want to turn
it on, edit `HKLM\Software\PolicyPak\Config\Scheduler` for everyone on the whole computer or
`HKCU\Software\PolicyPak\Config\Scheduler` for a specific user on the machine and set ReapplyPeriod
(as a REG_DWORD) to the desired interval in seconds. The allowed range is 30 seconds to 24 hours
(86400 seconds). If you'd like to utilize the feature, the recommended reinforcement time is 30
minutes (1800 seconds) to 60 minutes (3600 seconds).

However, note that if you enable the "Do not re-apply settings with Reinforcement Timer," as seen in
Figure 45 (which is at the AppSet level), then the specific AppSet will NOT be reapplied when the
timer is supposed to apply it. In short, by setting this option, you bypass reapplication of the
settings even when the enforcement timer is set.

![policypak_application_settings_1_24](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_24.webp)

The figure shown. Enabling the "Do not re-apply settings with Reinforcement Timer" setting.

:::note
Log files for the "Automatic reapplication of settings using the timer" can be found
in` %appdata%\local\PolicyPak` in a file called ppUser_onSchedule.log.

:::



