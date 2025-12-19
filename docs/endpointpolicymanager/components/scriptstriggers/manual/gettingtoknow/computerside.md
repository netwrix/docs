---
title: "Using Endpoint Policy Manager Scripts on the Computer Side"
description: "Using Endpoint Policy Manager Scripts on the Computer Side"
sidebar_position: 20
---

# Using Endpoint Policy Manager Scripts on the Computer Side

In the Quickstart example, we delivered scripts to users, but Endpoint Policy Manager can also
deliver scripts on the Computer side. There are two options when you create a scripts policy from
the Computer side, which can be seen in Figure 17.

![getting_to_know_scripts_triggers_13](/images/endpointpolicymanager/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_13.webp)

Figure 17. Using Endpoint Policy Manager Scripts & Triggers Manager Wizard on the Computer side.

The two options to select from are:

- Apply this policy to computer (default):  This will apply the settings to the computer in the
  System context. This is best when you're trying to do things that only the system should do, like
  manipulate the Registry with HKLM keys or system files, and so on. The policy only applies when
  the Computer context is used.
- Apply this policy to all users who log into the computer (switched mode): This setting will run
  the script either as System (default behavior) or in the User context. This gives you the ability
  to run a script anytime a user logs into the computer, and then also specify the context (System
  or User.)

:::note
Scripts placed on the Computer side, but run in the User context can be run interactively.
But scripts run in the System context cannot be run interactively.
:::


The main advantage to applying scripts on the Computer side, but running in User context, is that
you do not need Loopback in order to deliver user-side scripts to computers. In this way, you can
target specific scripts for collections of computers like training rooms, free seating areas, VDI,
and similar situations, and ensure that the same script runs for everyone who sits down at these
computers.

Note some subtle differences about when policies are set to "Always apply":

- Switched policies apply to users (even though they're targeted to computers.) As such, all
  switched policies apply on login and anytime the Group Policy service updates (in the background,
  and manually when you run GPupdate and PPupdate).
- All policies with "Always apply" selected will reapply when policy changes are made.
- All policies with "Always apply" selected will reapply when the Endpoint Policy Manager service
  starts up.


