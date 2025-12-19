---
title: "UsersGroups: Groups Category"
description: "UsersGroups: Groups Category"
sidebar_position: 20
---

# UsersGroups: Groups Category

The Groups Query category collects information for groups in different contexts.

![Users and Groups Browser wizard Results page for Groups category](/images/accessanalyzer/11.6/admin/datacollector/usersgroups/category/groups.webp)

In the Groups section, select from the following options:

- All groups
- All global groups
- All local groups
- All groups containing the following users – Click the ellipsis (**…**) to open the Find a User
  browser screen and select users. See the [Find a Group/User Browser](#find-a-groupuser-browser)
  topic for additional information.
- These groups – Click the ellipsis (**…**) to open the Find a Group browser window and select
  groups. See the [Find a Group/User Browser](#find-a-groupuser-browser) topic for additional
  information.

In the Additional Properties section, select the **What rights does this group have?** checkbox to
return rights for the selected groups.

:::warning
The number of offline Groups can significantly increase the time for a scan.
:::


:::info
For large networks, configure the length of time for a scan when Groups are
offline.
:::


- Retry Attempts [number]
- Retry Interval [number] seconds

## Find a Group/User Browser

Clicking the ellipses for the **All groups containing the following users** and the **These groups**
options opens the Find a Group or Find a User browser.

![Find a group window](/images/accessanalyzer/11.6/admin/datacollector/usersgroups/category/findagroup.webp)

The Find a Group and Find a User browsers display a list of groups or users, depending on which one
is being used, that can be selected for the option. Select from a specific host using the Sample
from host option, or leave the text field blank and click **Connect** to retrieve all user groups or
users that are selectable.

Select a group or user by selecting the checkbox next to it, and click **OK** to confirm selection.
Click **Cancel** to leave the window without a selection.
