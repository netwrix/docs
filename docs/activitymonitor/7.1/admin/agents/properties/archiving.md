---
title: "Archiving Tab"
description: "Archiving Tab"
sidebar_position: 50
---

# Archiving Tab

By default, the Activity Monitor keeps the activity logs on the servers where the activity agents
are deployed. The Archiving tab provides users with options to enable archiving for the activity
agent and move the archived files to another location on the server or to a network location.

![Archiving Tab for Agent Properties](/images/activitymonitor/7.1/admin/agents/properties/archiving_tab.webp)

The Days to keep Log files option, listed under the Log Files tab within Host Properties, applies to
Archive log files. When the entered number of days entered have passed, the activity logs and
Archive log files are deleted. The path to the Archive log files is next to the Configure button,
and listed under the Archive Location column within the Agents tab.

Check the Enable archiving for this agent box to enable the options on this tab. The archive feature
is disabled by default.

- Disk Quota — Maximum disk space the agent is allowed to use on the server it is installed on (at
  least 100MB) – Select the number of megabytes or gigabytes. The default is 5 GB.
- Archive log files on this computer – Select to archive the logs on the server hosting this
  activity agent. When archiving is enabled, this is the default selection. Click Configure to open
  the Configure a network share on this computer window and provide the following information:

![Popup window for Configure a network share on this computer option](/images/activitymonitor/7.1/admin/agents/properties/archivingtabconfigure.webp)

The options in the Configure a network share on this computer window are:

- Directory – Click the ellipsis (…) to browse to a location on the server
- Share name – Enter the share name for the archives
- Grant read access to – Click the ellipsis (…) to specify an account or group to be granted Read
  and Write access to the archive

The options below the **Configure** button are:

- Archive log files on an UNC path (e.g. \\host-name.domain.local\share-name) – Click the ellipsis
  (…) to browse for a location and select the UNC path
- User name/User password – Specify credentials to access the network share. Leave the credentials
  blank to access the share using the credentials supplied for activity agent deployment.
- Test – Click Test to ensure a successful connection to the network share

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The Agent
Properties window closes.

:::note
Linux agents move activity logs to a set local path. Remote storage can be mounted to use
this path for archiving.

:::
