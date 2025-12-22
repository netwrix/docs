---
title: "Job Groups Settings Node"
description: "Job Groups Settings Node"
sidebar_position: 10
---

# Job Groups Settings Node

A job group’s Settings node is where custom configurations can be set and where the host lists are
assigned to a job group.

![Job group settings in the Jobs Tree](/images/accessanalyzer/11.6/admin/jobs/group/settings.webp)

These settings inherit the global settings down by default unless inheritance is broken at a job
group or a job level.

- [Connection Node](/docs/accessanalyzer/11.6/admin/jobs/group/settings/connection.md)
  – Use the default Connection Profile or break inheritance to select the Connection Profile needed
  for the assigned host lists for this job group
- [History Node](/docs/accessanalyzer/11.6/admin/jobs/group/settings/history.md)
  – Use the default history settings or break inheritance on data retention and log retention
  settings for this job group
- [Host Lists Assignment](/docs/accessanalyzer/11.6/admin/jobs/group/settings/hostlistsassignment.md)
  – Use the default host list configured on a parent job group or break inheritance on assigned host
  lists for this job group

    :::note
    Host List Assignments is not a global setting. The pre-configured solutions may
    contain Host List Assignments configured to use Global Default Host Lists, for example All
    Domain Controllers. See the
    [Default Host Lists](/docs/accessanalyzer/11.6/admin/settings/hostinventory.md#default-host-lists)
    topic for additional information.
    :::


- [Reporting Node](/docs/accessanalyzer/11.6/admin/jobs/group/settings/reporting.md)
  – Use the default report settings or break inheritance on Published Report settings, Email
  settings, and Report role assignment for this job group
- [Storage Node](/docs/accessanalyzer/11.6/admin/jobs/group/settings/storage.md)
  – Use the default storage profile or break inheritance on where this job group's data is stored

If changes are made, click **Save** to implement the changes. Changes are not implemented unless
they are saved.

**Host List Assignment** and **Connection** are the two settings that should always be confirmed
before executing a job group or job when data collection is included. The assigned host lists
contains the hosts that are targeted by the job’s data collection queries. The assigned Connection
Profile must have the appropriate level of permissions in order for the data collection to be
successful. See the
[Permissions by Data Collector (Matrix)](/docs/accessanalyzer/11.6/admin/datacollector/permissionmatrix.md)
topic for information on the recommended permissions needed on the targeted hosts in order to
collect data.
