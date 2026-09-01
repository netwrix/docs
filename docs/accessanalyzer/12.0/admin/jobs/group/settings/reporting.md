---
title: "Reporting Node"
description: "Reporting Node"
sidebar_position: 40
---

# Reporting Node

At the job group level, the **Reporting** node identifies the report publishing and email
configurations assigned for the job group. By default, Access Analyzer sets all job groups to
inherit the reporting settings, the **Use default setting** option, from the global level
(**Settings** > **Reporting**), or a parent job group. See the [Reporting](/docs/accessanalyzer/12.0/admin/settings/reporting.md) topic for
additional information.

:::note
If you enable the Role Based Access feature, it also displays a list of all accounts
granted access, via the Web Console, to the published reports that jobs within the job group
generate.
:::


![Job Group Reporting Settings page](/images/accessanalyzer/12.0/admin/jobs/group/reporting.webp)

Checking the **Set all the child objects to inherit these settings** option at the bottom of the
page forces inheritance of these settings to all sub-groups and jobs within the job group. When you
enable this option, it overrides any custom settings configured for the child objects.

:::note
The **Set all the child objects to inherit these settings** option has no impact on the
inheritance of Report Roles.
:::


## Publish
