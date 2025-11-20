---
title: "When I use Forcepoint, Firefox takes 15 minutes to open. How can I fix this?"
description: "When I use Forcepoint, Firefox takes 15 minutes to open. How can I fix this?"
sidebar_position: 180
---

# When I use Forcepoint, Firefox takes 15 minutes to open. How can I fix this?

Forcepoint has a deadlock with regard to Netwrix Endpoint Policy Manager (formerly PolicyPak). We
have reported this to Forcepoint, but they have not taken any action.

There are two possible methods to workaround, which will release the deadlock, but you will reduce
Endpoint Policy Manager functionality.

The reduced functionality is that when you re-launch the application, Endpoint Policy Manager
Application Manager will not automatically re-apply those settings again at launch time.

Therefore, in order to see, say, Firefox's user-created CHANGED settings re-apply, then a GPupdate,
PPupdate, or logoff/logon must occur instead.

## Method 1

Find the Endpoint Policy Manager Application Manager Pak, like Firefox and select to UN-check this
checkbox.

For each Pak you think is causing the deadlock, you must UN-check this checkbox like what's seen
here.

Additionally, if you have MULTIPLE Paks for the same application, INCLUDING, say the Firefox
ABOUT:config Paks, you ALSO need to perform this same UN-check in ALL those Paks.

![568_1_img-1](/images/endpointpolicymanager/troubleshooting/applicationsettings/568_1_img-1.webp)

## Method 2

Block all applications from performing settings re-application using ADMX

This method causes a universal block to Reapply of application settings. You can try this method if
the first method doesn't operate as expected.

[How do I turn off "Reapply on Launch" for all applications if asked by tech support?](/docs/endpointpolicymanager/components/applicationsettingsmanager/technotes/troubleshooting/reapplylaunchdisable.md)


