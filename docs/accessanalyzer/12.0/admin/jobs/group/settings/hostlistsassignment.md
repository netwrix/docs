---
title: "Host Lists Assignment"
description: "Host Lists Assignment"
sidebar_position: 30
---

# Host Lists Assignment

At the job group level, the Host Lists Assignment node identifies target host lists assigned for the
job group.

![Job Group Host Lists Assignment](/images/accessanalyzer/12.0/admin/jobs/group/hostlistassignment.webp)

At a top-level job group, there's no host list to inherit. The **Use Default Settings** option
is grayed-out. However, a sub-job group can inherit host lists from a parent job group. You configure
host lists through the **Host Management** node. See the
[Host Management](/docs/accessanalyzer/12.0/admin/hostmanagement/overview.md) topic for additional information.

Several pre-defined solutions have default host lists already assigned to the solution, for example
the .Active Directory Inventory Job Group has the Default domain controller assigned at the job
group and inherited to the jobs.

Select the host lists to target with the job group. The **Filter host lists by** feature scopes
the list to match the search string provided. At the bottom of the list, an indicator shows how many
host lists you've selected out of the total number of host lists known to the Access Analyzer
Console. If you've applied a filter, an indicator also shows how many host lists matched the
search string.

Selecting the **Set all the child objects to inherit these settings** option forces inheritance of
this setting to all sub-groups and jobs within the job group. When you enable this option, it
overrides any custom settings configured for the child objects.
