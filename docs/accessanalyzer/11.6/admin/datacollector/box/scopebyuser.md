---
title: "Box: Scope by User Page"
description: "Box: Scope by User Page"
sidebar_position: 40
---

# Box: Scope by User Page

The User Scope Settings page (ScopeByUserPage) is where the scope of the scan can be limited to
specified users and the resulting scan will only scan for the specified users. It is a wizard page
for the Scan Box Permissions category.

![Box DC Wizard User Scope Settings page](/images/accessanalyzer/11.6/admin/datacollector/box/scopebyuser.webp)

Select whether to scan **All Users** or **Limited Users**. If scanning for **Limited Users**, click
**Browse** and navigate to the path of the CSV file that contains the email addresses of users to be
included in the scan. The CSV file should have one email address per row.

:::note
The query will collect information related to User names and Group membership for all
users in a target environment. However, if the query is scoped to specific users, no additional
information is collected for users outside out of the scope. User names and group membership for the
target environment is necessary to generate the Box Solution reports.

:::
