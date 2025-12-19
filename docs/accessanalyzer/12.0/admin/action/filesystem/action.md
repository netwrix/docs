---
title: "File System Action: Action"
description: "File System Action: Action"
sidebar_position: 10
---

# File System Action: Action

On the Action page, select the type of action to be configured, define a new action, and additional
capabilities.

![File System Action Module Wizard Action page](/images/accessanalyzer/12.0/admin/action/filesystem/action.webp)

The following options are available:

- Define a new action – Enables the Operation page where operations are selected on which the action
  is based
- Rollback a previously executed action – Enables the Prior Actions page where lists of previously
  executed actions and rollback actions can be selected. Not all operations support rollback. Enable
  the Support Rollback option prior to execution for the action in order to perform a rollback.
- Remove the applet service from a host – If an executed action installs an applet service on a host
  from a Access Analyzer Console, it remains installed after the action is completed for other
  Access Analyzer consoles to perform actions using the same applet service. This setting removes
  the action’s applet service from that host.
