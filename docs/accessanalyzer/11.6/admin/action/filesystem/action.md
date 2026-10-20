---
title: "File System Action: Action"
description: "File System Action: Action"
sidebar_position: 10
---

# File System Action: Action

On the Action page, select the type of action to configure, define a new action, and additional
capabilities.

![File System Action Module Wizard Action page](/images/accessanalyzer/11.6/admin/action/filesystem/action.webp)

The following options are available:

- Define a new action – Enables the Operation page, where you select the operations the action is
  based on
- Rollback a previously executed action – Enables the Prior Actions page, where you can select lists
  of previously executed actions and rollback actions. Not all operations support rollback. Enable
  the Support Rollback option before execution for the action to perform a rollback.
- Remove the applet service from a host – If an executed action installs an applet service on a host
  from a Enterprise Auditor Console, it remains installed after the action completes so other
  Enterprise Auditor consoles can perform actions using the same applet service. This setting removes
  the action’s applet service from that host.
