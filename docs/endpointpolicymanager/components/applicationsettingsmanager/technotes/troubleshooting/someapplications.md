---
title: "AppLock (UI lockdown) doesn't seem to work on some applications. Why?"
description: "AppLock (UI lockdown) doesn't seem to work on some applications. Why?"
sidebar_position: 110
---

# AppLock (UI lockdown) doesn't seem to work on some applications. Why?

Netwrix Endpoint Policy Manager (formerly PolicyPak) Applock™ is the ability to gray out or remove
the UI from target applications.

There are two types of AppLock: for Win32 applications (like Winzip, Acrobat Reader, etc.) and also
for specialized applications (Firefox and Java.)

Let's examine both and why AppLock might or might not work.

AppLock for Win32 applications

AppLock can be managed on individual settings for applications like what's seen here.

![195_1_image003](/images/endpointpolicymanager/troubleshooting/applicationsettings/applock/195_1_image003.webp)

And also here.

![195_2_image004](/images/endpointpolicymanager/troubleshooting/applicationsettings/applock/195_2_image004.webp)

Note that Endpoint Policy Manager AppLock options can only work on well-behaved Win32 applications.

Again, applications like WinZip or Acrobat Reader are good candidates, but Skype and Jing are not.

You can still deliver SETTINGS to those applications; but AppLock is not guaranteed to work on all
applications.

In each of our Pak readme files, we describe if AppLock worked in our testing.

That being said, AppLock might still not work for you when you go to try it out.
Applock is only guaranteed to work when the following matches are true from our Pak's definitions
and your target computers:

1. OS matches (Windows 7 or later).
2. Language matches.
3. On-Screen DPI matches.

So the Paks we create and capture at Endpoint Policy Manager, we use:

1. Windows 7 (and test on Windows 10).
2. US English version of Windows
3. Normal 100% DPI.

If you attempt to use a preconfigured Pak, but you aren't getting AppLock to work, it's possible one
of those three items in our Pak doesn't match what you are using.

Typically the problem is that we have made the Pak using US English version of the application, but
the target computer is using non-US English version of the same application.

In this case: Settings should apply, but the AppLock will fail to apply.

:::note
 it IS possible re-capture the UI using the Endpoint Policy Manager DesignStudio and then
get the applications' UI to lockdown.
:::


Alternatively, instead of locking down the UI, you could lock down the application's data store
using ACL Lockdown.

Video:

[ACL Lockdown for Registry Based Applications](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/featurestechsupport/acllockdown.md)

If you do this, it should prevent users from working around the item, even if the AppLock doesn't
work.

AppLock for Firefox, Java and Thunderbird

—

Three applications have built in (specific) ways to manage their user interface lockout: Firefox,
Java and Thunderbird. With all three applications, when you perform UI lockout, you must do it for
ALL users. And as such the Pak MUST be used on the COMPUTER Side (as seen here) or else the
"Lockdown this setting using the system-wide config file" does not appear.

![195_3_image009](/images/endpointpolicymanager/troubleshooting/applicationsettings/applock/195_3_image009.webp)

This same option with the Java Paks.

![195_4_image010](/images/endpointpolicymanager/troubleshooting/applicationsettings/applock/195_4_image010.webp)

The UI lockout mechanism is completely different for these applications versus Win32 applications
and as such is treated differently.


