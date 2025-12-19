---
title: "What is the difference between running the gp update (Microsoft) and ppupdate (Endpoint Policy Manager) commands?"
description: "What is the difference between running the gp update (Microsoft) and ppupdate (Endpoint Policy Manager) commands?"
sidebar_position: 150
---

# What is the difference between running the gp update (Microsoft) and ppupdate (Endpoint Policy Manager) commands?

The gpupdate command updates all of the GPO's that are applied to the computer that is issuing the
command. The `ppupdate` command only updates Netwrix Endpoint Policy Manager (formerly PolicyPak)
settings that are contained within a GPO.

In addition, a computer must be online in order to execute the `gpupdate` command while `ppupdate`
will execute if the client computer is online or offline.


