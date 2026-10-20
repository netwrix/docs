---
title: "History Node"
description: "History Node"
sidebar_position: 20
---

# History Node

At the job group level, the History node identifies data retention and log retention periods
assigned for the job group.

![Job Group History Settings](/images/accessanalyzer/12.0/admin/jobs/group/history.webp)

By default, Access Analyzer sets all job groups to inherit the **Use Default Setting** option from
the global level (**Settings** > **History**) or a parent job group. See the [History](/docs/accessanalyzer/12.0/admin/settings/history.md)
topic for additional information.

:::warning
Some pre-configured jobs require history retention
while others don't support it. See job group and job descriptions for additional information.
:::


If you don't prefer the Default Setting, select one of the following custom retention settings:

- Data Retention Period

    - Never retain previous job data
    - Retain previous job data for [number] [time period]
    - Always retain previous job data

- Log Retention Period

    - Retain previous job logs for [number] [time period]

Selecting the **Set all the child objects to inherit these settings** option forces inheritance of
this setting to all sub-groups and jobs within the job group. When you enable this option, it
overrides any custom settings configured for the child objects.
