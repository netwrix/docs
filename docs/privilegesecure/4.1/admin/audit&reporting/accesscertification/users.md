---
title: "Users Tab for Access Certification"
description: "Users Tab for Access Certification"
sidebar_position: 30
---

# Users Tab for Access Certification

The Users tab shows the users and groups in the selected access certification task for which the
reviewer must certify access entitlement.

![userstab](/images/privilegesecure/4.1/accessmanagement/admin/auditreporting/tab/userstab.webp)

The Users table has the following features:

- Search – Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Column headers can be resized and sorted by ascending or descending order:

    - Name – Click to open the Users and Groups Details page. See the
      [User, Group, & Application Details Page](/docs/privilegesecure/4.1/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md)
      topic for additional information.
    - User Name – Displays the name of the account
    - Email – Displays the associated email address, if available
    - Type – User or Group

- Add button (Only visible when adding a new task) – Opens the Add Users and Groups window. See the
  [Add Users to Review](#add-users-to-review) topic for additional information.

## Add Users to Review

Follow the steps to add users and groups to the access certification task.

:::note
It is not possible to add or remove users after they have been added.
:::


**Step 1 –** Navigate to the Audit and Reporting > Access Certification page.

**Step 2 –** In the Access Certification Task list, select the name of the task and select the Users
tab

**Step 3 –** Click Add to open the Add Users and Groups window.

![addusers](/images/privilegesecure/4.1/accessmanagement/admin/auditreporting/tab/addusers.webp)

The Add Users and Groups window has the following features:

- Filter by users or groups
- Search – Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Available Users/Groups – Shows all users and groups added to the console
- Users & Groups to Add – Shows the users to be added to the access certification task
- Column headers can be sorted in ascending or descending order:

    - Name – Displays the name of the account
    - User Name – SAM Account Name for the user or group
    - User Principal Name – User Principal Name (UPN) of the user or group
    - Email – Displays the associated email address, if available

**Step 4 –** Filter by Users or Groups, or use the Search feature.

**Step 5 –** To add a user or group to the access certification task, click a row in the Available
Users/Groups table and it is immediately moved to the Users & Groups to Add table.

**Step 6 –** (Optional) Click a row in the Users & Groups to Add table to move it back to the
Available Users/Groups table.

:::warning
It is not possible to add or remove users after they have been added to the access
certification task.
:::


**Step 7 –** Click Add to add the selected user(s) or group(s).

The new user(s) and group(s) are added to the certification task and are shown on the
[Users Tab for Access Certification](/docs/privilegesecure/4.1/admin/audit&reporting/accesscertification/users.md).

**Step 8 –** Click Close to return to the Access Certification page.

:::note
Only the assigned reviewer can interact with the entitlements once the access
certification task is created.
:::


The reviewer can now log in to see the access certification task(s) assigned to them and begin the
review process. See the
[Entitlements Tab for Access Certification](/docs/privilegesecure/4.1/admin/audit&reporting/accesscertification/entitlements.md)
topic for additional information.
