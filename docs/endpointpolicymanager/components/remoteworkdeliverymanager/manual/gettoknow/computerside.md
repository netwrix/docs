---
title: "Using Remote Work Delivery Manager on the Computer Side"
description: "Using Remote Work Delivery Manager on the Computer Side"
sidebar_position: 40
---

# Using Remote Work Delivery Manager on the Computer Side

In the Quickstart example, we delivered a file to users, but Endpoint Policy Manager can also
deliver scripts on the Computer side.

There are two options when you create a script policy from the Computer side.

![getting_to_know_policypak_34](/images/endpointpolicymanager/remoteworkdelivery/getting_to_know_endpointpolicymanager_34.webp)

The two options to select from are:

- Apply this policy to computer — This is the default option and will apply the files to the
  computer in the System context. This is best used when you're trying to do things that only the
  system should do, like deliver files, such as program files, system files, and so on, to protected
  Windows folders. The policy only applies when the Computer context is used.
- Apply this policy to all users who log into the computer (switched mode) — This setting will
  deliver files either as System (default behavior) or run in the User context. This gives you the
  ability to deliver files any time a user logs onto the computer, and specify the context (System
  or User).

:::note
Scripts placed on the Computer side, but run in the User context can be run interactively.
But scripts run in the System context cannot be run interactively.
:::


The main advantage to delivering files on the Computer side, but running in the User context
(switched mode), is that you do not need loopback in order to deliver files to each user who logs
on. In this way, you can target specific scripts for the collections of computers that you might
find in training rooms, free seating areas, VDI, and similar situations, and ensure that the same
script runs for everyone who sits down at these computers.

Also, note some subtle differences about when policies are set to Always apply:

- Switched policies apply to Users (even though they're targeted to Computers). As such, all
  Switched policies apply on logon and anytime the Group Policy service updates (in the background
  and manually when you run `GPupdate `and `PPupdate`).
- All policies with **Always run** selected will reapply when policy changes are made.
- All policies with **Always run** selected will reapply when the Endpoint Policy Manager service
  starts up.


