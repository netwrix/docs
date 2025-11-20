---
title: "How do I turn AppLock off or on based upon the CSE version I'm using?"
description: "How do I turn AppLock off or on based upon the CSE version I'm using?"
sidebar_position: 160
---

# How do I turn AppLock off or on based upon the CSE version I'm using?

AppLock is an aspect of Endpoint Policy Manager Application Settings Manager.

Its goal is to hide specific UI elements in Win32 applications, Eclipse IDE (aka Java Control Panel
applets), and Firefox.

An example of hiding or disabling elements in a Win32 application can be seen here.

![applock9](/images/endpointpolicymanager/troubleshooting/applicationsettings/applock/applock9.webp)

AppLock works by hooking all processes and looking for a policy match and attempting to perform the
UI hiding operation.

You can learn more about AppLock at:

- [AppLock™ Modes](/docs/endpointpolicymanager/components/applicationsettingsmanager/manual/modes/applock.md)
- [The Superpowers](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/featurestechsupport/superpowers.md)

It is generally advised to turn off AppLock if you are not using this feature as it can interfere
with security software you might have on your endpoints.

- AppLock may be turned directed to be turned off in older versions of the CSE (for Win32
  applications.)
- AppLock is already turned off by default in newer versions of the CSE (for Win32 applications.)

:::note
AppLock's actions may not be turned off (ever) for Eclipse ISE (aka Java Control Panel
applets) or Firefox, but only for Win32 applications.
:::


You can witness PPAppLockLdr64.dll injected into processes by using Process Explorer. An example can
be seen here with Win32 app NotepadP. Using the Process Explorer Search you may also look for other
hooked processes with PPAppLockLdr64.dll.

![applock1](/images/endpointpolicymanager/troubleshooting/applicationsettings/applock/applock1.webp)

- For CSEs before 24.9, AppLock is ON, and you might want to turn it off because of interference or
  because you are directed by Endpoint Policy Manager support.
- Starting with CSE 24.9, AppLock is OFF, and if you want to turn it on you may do so to restore the
  functionality if needed.

![applock4](/images/endpointpolicymanager/troubleshooting/applicationsettings/applock/applock4.webp)

In all cases AppLock is turned ON or OFF using the same ADMX setting. However, the ADMX setting has
gone through a rename and a state change.

Before continuing, please get familiar with how to use the Endpoint Policy Manager ADMX settings and
also how to update them:
[Troubleshooting with ADMX files](/docs/endpointpolicymanager/gettingstarted/misc/videos/troubleshooting/admxfiles.md)

If you're using an older set of ADMX settings, you will find a setting named "Disable Endpoint
Policy Manager AppLock" (which exists on both User and Computer Side):

![applock5](/images/endpointpolicymanager/troubleshooting/applicationsettings/applock/applock5.webp)

When the "Disable Endpoint Policy Manager Applock(TM)" setting is set to "Enabled" this will
TURN OFF the AppLock service for any CSEs. However, the state status of "Enabled" makes it unclear
because you're "Enabling" a policy which disables a setting.

Therefore, if you're using newer ADMX settings, the setting has been renamed to "Configure Endpoint
Policy Manager AppLock(TM) code injection state." And the setting will automatically be changed from
the policy state of "Enabled" (which is unclear) to clearer, more obvious-to-understand-state of
"Disabled."

Remember though that CSE 24.9 and later already has AppLock turned OFF so no specific action is
needed here if you want the CSE to have this function off. However, if you wanted to re-enable it
for CSE 24.9 and later, you would set this value to Enabled.

But again, if you were to upgrade older ADMX settings to newer ADMX settings, you will see a policy
name change (to Configure Endpoint Policy Manager AppLock code injection state) and also a state
change better reflecting the goals for disabling the AppLock service.

You will see this in a few places. When you edit the policy, you will notice the old policy is
absent and replaced with the new policy name like what's seen here.

![applock3](/images/endpointpolicymanager/troubleshooting/applicationsettings/applock/applock3.webp)

And, any existing GPOs with the old policy name will automatically start using the new policy name
and new state. Here's an example GPO with the old name and old state:

![applock7](/images/endpointpolicymanager/troubleshooting/applicationsettings/applock/applock7.webp)

![applock8](/images/endpointpolicymanager/troubleshooting/applicationsettings/applock/applock8.webp)

:::note
You might need to close the GPMC and re-open it to have the GPMC refresh the ADMX / ADML
files and reflect a change. Then re-run the GPO setting report to verify your change.

:::


