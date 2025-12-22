---
title: "Advanced Notes for Policy Processing and Logs"
description: "Advanced Notes for Policy Processing and Logs"
sidebar_position: 80
---

# Advanced Notes for Policy Processing and Logs

There's a reason why Endpoint Policy Manager Application Settings Manager has a lot of log files:
Endpoint Policy Manager Application Settings Manager supports both Group Policy and file-based
delivery methods. Therefore, if you're trying to troubleshoot Endpoint Policy Manager Application
Settings Manager, use these advanced tips to help you understand Switched mode policies and Endpoint
Policy Manager Application Settings Manager's policy processing as a whole.

When the computer starts, there are no users logged on yet, so we cannot process Switched mode
policies. Switched policies are always applied after user policies and any User-based policies are
overridden by conflicts from Switched mode policies. Therefore, if a setting is the same on both the
User and Computer side, the Computer side "wins."

Additionally, any exported XML data files for Endpoint Policy Manager Application Settings Manager
must be processed, even when there are no GPOs with Endpoint Policy Manager Application Settings
Manager data linked to a computer. Therefore, after the user is logged in, we rerun our processing
to ensure that XML data files are processed.

So here's what a typical computer start-up scenario looks like.

During computer start-up, Windows checks if there is any Endpoint Policy Manager Application
Settings Manager data within Computer Configuration of any linked GPOs. If so, it calls our CSE,
asking it to process computer policies. At this time, we write `ppComputer.log`.

The user enters their credentials. Windows checks for any Endpoint Policy Manager Application
Settings Manager data within User Configuration of linked GPOs, and if present, asks our CSE to
process User policies. At this time we write `ppUser.log`.

Our service sees that a user has logged in and then calls for reprocessing. At that time, we process
ALL policies (User, Switched, and Computer) and create three logs: `ppUser_onLogon.log`,
`ppSwitched_onLogon.log`, and `ppComputer_onLogon.log`. This step helps us to ensure that we process
XML data policies even if there are no GPO-based policies linked to a computer. It also ensures that
Switched mode policies are processed after User mode policies and, hence, overrides them.



