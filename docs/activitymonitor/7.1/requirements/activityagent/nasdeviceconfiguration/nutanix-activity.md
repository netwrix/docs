---
title: "Nutanix Activity Auditing Configuration"
description: "Nutanix Activity Auditing Configuration"
sidebar_position: 90
---

# Nutanix Activity Auditing Configuration

The Netwrix Activity Monitor can be configured to monitor activity on Nutanix devices.

A user having REST API access must be created on the Nutanix Files server to monitor the files
server using Activity Monitor. Additional configurations are done by Activity Monitor with the help
of this user. In the Nutanix Files server, select **Configuration** > **Manage Roles**. Under the
REST API access users section, click **New User** to create a new user. Specify the username and the
password.

:::note
The user credentials created here are used when adding a Nutanix file server in Activity
Monitor.
:::


:::note
Nutanix Files does not report events for activity originating from a server where the
Activity Monitor Agent is installed.

:::
