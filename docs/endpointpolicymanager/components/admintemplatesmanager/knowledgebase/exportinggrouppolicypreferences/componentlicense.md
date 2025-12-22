---
title: "Where is my Endpoint Policy Manager Preferences Component license and how do I request one?"
description: "Where is my Endpoint Policy Manager Preferences Component license and how do I request one?"
sidebar_position: 10
---

# Where is my Endpoint Policy Manager Preferences Component license and how do I request one?

The Netwrix Endpoint Policy Manager (formerly PolicyPak) Preferences component is available only
upon request. It is still part of what you paid for, and you can ask for it at anytime. It is no
longer included by default because Endpoint Policy Manager Preferences (PPPrefs) is typically not
needed for on-premise scenarios.  
Another reason we making available only when requested is because PPP calls the operating system in
a way that can sometime be unreliable.

Here are the scenarios for which you should request a PPPrefs license:

- You want to use Endpoint Policy Manager over MDM. (This is automatically included when we issue an
  MDM license)
- You want to deliver user-side-only Microsoft's GPPreferences items to computers, that is,
  [Deploying Endpoint Policy Manager directives without Group Policy (Endpoint Policy Manager Exporter Utility)](/docs/endpointpolicymanager/gettingstarted/misc/videos/methods/exporterutility.md)
- You want to deliver GPPrefs items using SCCM or some other non-GP method.

In those cases, or if you think you have another reason why you need it, open a support ticket at
[Netwrix Support](https://www.netwrix.com/sign_in.html?rf=tickets.html#netwrix-support) and we can
get it to you.

In your email please let us know the circumstance in which you plan to use PPPrefs.

Then, to mitigate unexpected OS integration issues, we suggest you gradually roll out your PPPrefs
license affecting only a small number of machines at a time.

If you do encounter a problem, simply remove the PPPrefs license and any GP + PP + Preferences and
the issues should go away.


