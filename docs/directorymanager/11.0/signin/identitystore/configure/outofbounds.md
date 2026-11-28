---
title: "Manage Group Membership Limits in GroupID"
description: "Set maximum group membership, handle orphan nested groups, and define out-of-bounds thresholds that stop large unexpected Smart Group and Dynasty changes."
keywords:
  - group membership limit
  - out-of-bounds exceptions
  - Smart Groups
  - Dynasties
  - nested groups
  - Smart Group Update schedule
sidebar_position: 70
---

# Manage Group Membership Limits in GroupID

Use GroupID to update group membership in the following ways:

- Add members manually (recommended only for static groups)
- Update Smart Groups and Dynasties automatically using a Smart Group Update schedule
- Import members using an external data source

To avoid large, unforeseen changes to Smart Group and Dynasty memberships, you can configure the
following group membership settings for an identity store:

- Specify the maximum number of members for Smart Groups and Dynasties. Then determine the action to
  take when the member limit is exceeded, such as not updating the group or breaking the membership into
  smaller, nested groups.
- Define a criterion for out-of-bounds exceptions that raise alerts for group owners.

What do you want to do?

- [Set the Maximum Number of Group Members](#set-the-maximum-number-of-group-members)
- [Manage Orphan Nested Groups](#manage-orphan-nested-groups)
- [Set a Group Update Threshold](#set-a-group-update-threshold)

## Set the Maximum Number of Group Members

You can set the maximum membership limit for groups and set GroupID to do one of the
following when an update to a group exceeds this limit:

- Not update the group membership, which retains the old membership.

    **Or**

- Create nested groups to accommodate membership. Nested groups are created as sub-groups of the
  group being updated. This simplifies permissions by allowing sub-groups to inherit permissions
  from the parent group.

**Example:**

Assume you set the maximum membership limit to 500 and opt for nested groups when membership
exceeds this limit.

**Scenario 1**: On update, 485 objects are fetched to be added to Group A's membership. Because the
count is less than 500, GroupID adds the objects directly as group members.

**Scenario 2:** On the next update, 620 objects are fetched to be added to Group A's membership.
Because the count exceeds 500, GroupID breaks the membership into two child groups
(Group 1 with 500 members and Group 2 with 120 members) and nests them into Group A. GroupID
checks the member count and takes necessary action before adding members to the group.

:::note
For an Office 365 group, the option to break the membership into child groups has the
following impact: GroupID updates an Office 365 group (Group A) according to the Smart
Group update process. However, when the maximum membership limit is reached, the update process
creates child groups and tries to add them as members of Group A. Because an Office 365 group can't
have groups as members, Group A's membership is empty. The child groups continue to exist but
without any link to Group A.
:::

**To set group membership limits:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Out of Bounds**.
4. In the **Maximum membership per group** box on the **Out of Bounds** page, enter the maximum number of
   members that a Smart Group or Dynasty can contain.
5. Select one of the following options for **When threshold reached:**

    - **Do not update:** to prevent any action when the maximum membership limit is hit on update.
      As a result, the group isn't updated and retains its old membership.
    - **Nest into child groups:** to create nested child groups when the maximum membership limit is
      reached. Each nested group, in turn, can't have more than the maximum number of members
      specified. Nested groups are displayed in GroupID as members of the parent group.

6. Click **Save**.

## Manage Orphan Nested Groups

An orphan nested group is one that has its relationship cut off from the parent group because it
has no members to bind it to the parent group.

This can happen, for example, when the membership of a group decreases, or the maximum membership
limit is increased. As a result, when group membership is updated, members from one or more nested
child groups are emptied, leaving the nested groups orphaned.

You can choose to delete or retain the orphan nested groups in the identity store.

**To delete orphan nested groups:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Out of Bounds**.
4. On the **Out of Bounds** page, select the **Delete orphan nested groups** checkbox to delete
   nested groups that become orphaned on membership update.  
   To retain orphan nested groups, don't select the checkbox.
5. Click **Save**.

## Set a Group Update Threshold

Out-of-bounds exceptions prevent large, unforeseen membership changes to groups. When an
out-of-bounds exception occurs, GroupID doesn't update group membership and notifies the
intended recipients by email. If they consider the change valid, they can update the group manually
in the GroupID portal.

:::note
1. Settings in the **Threshold** section apply in case of membership update through a Smart
Group Update schedule. On manual update, these settings have no impact.  
2. If the group isn't updated manually after an out-of-bounds exception, the changes remain
pending and the group isn't updated when the Smart Group Update job runs.  
3. GroupID sends out-of-bounds exception notifications according to the notification
settings configured for the Smart Group Update schedule responsible for updating the respective
group.
:::

**To set a group update threshold:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Out of Bounds**.
4. On the **Out of Bounds** page, use the toggle button for **Do not update and alert** to monitor
   out-of-bounds exceptions in group memberships and enable alerts in case an out-of-bounds
   exception occurs.
5. Provide values for the following:

    1. In the **Percent change in membership exceeds** box, enter a percentage of membership change
       that, when exceeded, raises an out-of-bounds exception.

        Membership change is the difference between new membership and the existing membership.
        GroupID calculates the percentage change in membership with this formula:  
         (newMemberCount - oldMemberCount) x 100 / oldMemberCount

        Assume you specify 20 in this field. When group membership changes by 20% or more,
        GroupID considers it an exception.

        So, if Group A has 500 members and 200 new members are to be added, the formula is  
         (newMemberCount - oldMemberCount) x 100 / oldMemberCount  
         (700-500) x 100 / 500 = 40

        Since 40 is greater than 20, GroupID treats it as an out-of-bounds exception.

    2. In the **And either current or new membership exceeds** box, enter the number of current or
       new memberships. If the current or new membership of a group is equal to or less than the
       specified number, GroupID doesn't raise an out-of-bounds exception for the group,
       even when the change percentage is exceeded. You can ignore changes to small groups.

        For example, you set the change percentage to 20 and specify 25 in the **And either current
        or new membership exceeds** box. It works as follows:

        - For current (existing) membership - When the existing membership of a group is equal to or
          less than 25, GroupID doesn't trigger out-of-bounds for this group when the
          change percentage is exceeded (is greater than 20). For example, adding 3 new members to a
          group of 10 members doesn't trigger an exception. GroupID ignores the
          change percentage and updates the group.
        - For new membership - When 12 new members are added to a group with 10 existing
          members, the new membership reaches 22, which is less than 25. Even though the change
          percentage is exceeded, GroupID doesn't raise an exception and updates group membership.

6. Click **Save**.

**See Also**

- [Manage Dynasty Settings in GroupID](/docs/directorymanager/11.0/signin/identitystore/configure/dynastysettings.md)
- [Create a GroupID Smart Group Update Schedule](/docs/directorymanager/11.0/signin/schedule/smartgroupupdate.md)
