---
title: "Schedules"
description: "Schedules"
sidebar_position: 60
---

# Schedules

The Access Analyzer Console can only run one task at a time. However, with the Schedule Service
Account, the Access Analyzer application can run multiple tasks simultaneously. See the
[Schedule](/docs/accessanalyzer/12.0/admin/settings/schedule.md) topic for information on configuring the Schedule Service
Account.

The following tasks can be scheduled:

- Job or Job Group – Schedule jobs to run at the job or job group level. See the
  [Schedule Jobs](#schedule-jobs) topic for additional information.
- Host Discovery Query – Schedule Host Discovery queries from the Host Discovery node. See the
  [Host Discovery Queries Activities Pane](/docs/accessanalyzer/12.0/admin/hostdiscovery/activities.md) topic for additional
  information.
- Host Inventory Query – Schedule Host Inventory queries from within the Host Management node. See
  the [Schedule (Activities Pane Option)](/docs/accessanalyzer/12.0/admin/hostmanagement/actions/schedule.md) topic for
  additional information.

:::note
If you attempt to rename a task after a scheduled task using custom credentials has been
created, then the Rename Scheduled Task wizard displays to update the credentials. See the
[Rename Scheduled Task Wizard](/docs/accessanalyzer/12.0/admin/schedule/renamewizard.md) topic for additional information.
:::


## Schedule Jobs

Jobs can be scheduled at the job group or job level.

![Schedule option from Job Tree](/images/accessanalyzer/12.0/admin/schedule/jobtree.webp)

Select the desired job group or job. Right-click on the node and select **Schedule** to open the
Schedule wizard.

![Schedule Job wizard](/images/accessanalyzer/12.0/admin/schedule/schedule.webp)

The Schedule wizard has five pages with options for setting up the schedule task:

- Schedule
- Host List
- Connection
- Run as
- Options

See the [Schedule Wizard](/docs/accessanalyzer/12.0/admin/schedule/wizard.md) topic for additional information.
