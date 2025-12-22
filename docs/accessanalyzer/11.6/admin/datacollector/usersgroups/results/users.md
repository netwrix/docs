---
title: "UsersGroups: Users Category"
description: "UsersGroups: Users Category"
sidebar_position: 10
---

# UsersGroups: Users Category

The Users Query category collects information for users in different contexts.

![Users and Groups Browser wizard Results page Users category](/images/accessanalyzer/11.6/admin/datacollector/usersgroups/category/users.webp)

In the Users section, select from the following options:

- All users – All users found on the target host
- All users in the following groups – Click the ellipsis (**…**) to open the Find a Group browser
  window and specify a group. See the [Find a Group/User Browser](#find-a-groupuser-browser) topic
  for additional information. A specific group can also be entered manually into the text field.
- These users – Click the ellipsis (**…**) to open the Find a User browser window and specify one or
  more users. See the [Find a Group/User Browser](#find-a-groupuser-browser) topic for additional
  information. A specific user can also be entered manually into the text field.
- Special users – The users found can be flagged as special users in the following categories:

    - Administrator
    - Guest
    - Check if account has been renamed – Select this checkbox to check if the Administrator or
      Guest account has been renamed
    - Resolve nested group membership – Returns nested group membership
    - Include every occurrence of a user – Show every group in which the user is a member

In the Additional Properties section, select from the following checkboxes to return additional
information on user objects:

- Is the user account enabled?
- Is the user account locked out?
- Can the user change their password?
- Does the user’s password expire?
- What rights does the user have?
- Does the user require a password?
- When was this user’s password last changed?
- What is this user’s password age in days?
- When did this user last logon?

Click **Select all** to select all properties. Click **Clear all** to deselect all properties

:::warning
The number of offline Users can significantly increase the time for a scan.
:::


:::info
For large networks, configure the length of time for a scan when Users are
offline.
:::


- Retry Attempts [number]
- Retry Interval [number] seconds

## Find a Group/User Browser

Clicking the ellipses for the **All users in the following groups** and the **These users** options
opens the Find a Group or Find a User browser.

![Find a group window](/images/accessanalyzer/11.6/admin/datacollector/usersgroups/category/findagroup.webp)

The Find a Group and Find a User browsers display a list of groups or users, depending on which one
is being used, that can be selected for the option. Select from a specific host using the Sample
from host option, or leave the text field blank and click **Connect** to retrieve all user groups or
users that are selectable.

Select a group or user by selecting the checkbox next to it, and click **OK** to confirm selection.
Click **Cancel** to leave the window without a selection.
