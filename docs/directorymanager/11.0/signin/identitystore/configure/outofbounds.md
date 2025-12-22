---
title: "Manage Group Membership Settings"
description: "Manage Group Membership Settings"
sidebar_position: 70
---

# Manage Group Membership Settings

GroupID enables you to update group membership in the following ways:

- Add members manually (only recommended for static groups)
- Auto update Smart Groups and Dynasties using a Smart Group Update schedule.
- Import members using an external data source

To avoid large, unforeseen changes to Smart Group and Dynasty memberships, you can configure the
following group membership setting for an identity store:

- Specify the maximum number of members for Smart Groups and Dynasties. Then determine the action to
  take when the member limit is exceeded, such as not to update or break the membership into
  smaller, nested groups.
- Define a criterion for out-of-bounds exceptions to raise alerts for group owners.

What do you want to do?

- [Set the Maximum Number of Group Members](#set-the-maximum-number-of-group-members)
- [Manage Orphan Nested Groups](#manage-orphan-nested-groups)
- [Set a Group Update Threshold](#set-a-group-update-threshold)

## Set the Maximum Number of Group Members

You can set the maximum membership limit for groups and set GroupID to do one of the following when
an update to a group breaches this limit.

- Not to update the group membership, thereby retaining the old membership.

    Or

- Create nested groups to accommodate membership. Nested groups are created as sub-groups of the
  group being updated. This simplifies permissions by allowing sub-groups to inherit permissions
  from the parent group.

**Example:**

Let’s assume you set the maximum membership limit to 500 and opt for nested groups when membership
exceeds this limit.

**Scenario 1**: On update, 485 objects are fetched to be added to Group A’s membership. Since the
count is less than 500, the objects are directly added as group members.

**Scenario 2:** On the next update, 620 objects are fetched to be added to Group A’s membership.
Since the count exceeds 500, it breaks the membership into 2 child groups (Group 1 with 500 members
and Group 2 with 120 members) and nests them into Group A. Hence, GroupID checks the member count
and takes necessary action before adding members to the group.

NOTE: In case of an Office 365 group, the option to break the membership into child groups has the
following impact - An Office 365 group (Group A) will be updated according to the Smart Group update
process. However, when the maximum membership limit is hit, the update process will create child
group(s) and try to add them as members of Group A. Since an Office 365 group cannot have groups as
members, Group A’s membership will be empty. The child groups will continue to exist but without any
link to Group A.

**To set group membership limits:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Out of Bounds**.
4. In the **Maximum membership per group** box on the **Out of Bounds** page, enter the number of
   maximum members that a Smart Group or Dynasty can contain.
5. Select one of the following options for **When threshold reached:**

    - **Do not update:** to prevent any action when the maximum membership limit is hit on update.
      As a result, the group will not be updated and will retain its old membership.
    - **Nest into child groups:** to create nested child groups when the maximum membership limit is
      reached. Each nested group, in turn, cannot have more than the maximum number of members
      specified. Nested groups are displayed in GroupID as members of the parent group.

6. Click **Save**.

## Manage Orphan Nested Groups

An orphan nested group is one that has its relationship cut-off from the parent group, since this
orphan group has no members to bind it to the parent group.

This may happen, for example, when the membership of a group decreases, or the maximum membership
limit is increased. As a result, when group membership is updated, members from one or more nested
child groups are emptied, leaving the nested groups orphan.

You can choose to delete or retain the orphan nested groups in the identity store.

**To delete orphan nested groups:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Out of Bounds**.
4. On the **Out of Bounds** page, select the **Delete orphan nested groups** check box to delete
   nested groups that become orphan on membership update.  
   To retain orphan nested groups, do not select the check box.
5. Click **Save**.

## Set a Group Update Threshold

Out-of-bounds exceptions prevent large, unforeseen membership changes to groups. When an
out-of-bounds exception occurs, GroupID does not update group membership and notifies the intended
recipient(s) by email. If they deem the change as valid, they can update the group manually in the
GroupID portal.

NOTE: 1. Settings in the **Threshold** section apply in case of membership update through a Smart
Group Update schedule. On manual update, these settings have no impact.  
 2. If the group is not updated manually after an out-of-bounds exception, the changes remain
pending and the group will not be updated in future when the Smart Group Update job runs.  
 3. Out-of-bounds exception notifications are sent as per notification settings configured for the
Smart Group Update schedule responsible for updating the respective group.

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
        Percentage change in membership is calculated by the following formula:  
         (newMemberCount - oldMemberCount) x 100 / oldMemberCount

        Let’s assume you specify 20 in this field. When group membership changes by 20% or more,
        GroupID considers it as an exception.

        So, if Group A has 500 members and 200 new members are to be added, the formula will be as  
         (newMemberCount - oldMemberCount) x 100 / oldMemberCount  
         (700-500) x 100 / 500 = 40

        Since 40 is greater than 20, GroupID treats it as an out-of-bounds exception.

    2. In the **And either current or new membership exceeds** box, type the number of current or
       new memberships. If the current or new membership of a group is equal or less than the
       specified number, GroupID does not raise an out-of-bounds exception for the group, even when
       the change percentage is exceeded. This allows you to ignore changes to small groups.

        For example, you set the change percentage to 20 and specify 25 in the **And either current
        or new membership exceeds** box. It works as follows:

        - For current (existing) membership - When the existing membership of a group is equal or
          less than 25, GroupID does not trigger out-of-bounds for this group when the change
          percentage is exceeded (is greater than 20). For example, adding 3 new members to a group
          of 10 members would not trigger an exception. GroupID will ignore the change percentage
          and update the group.
        - For new membership - When, say 12 new members are added to a group with 10 existing
          members, the new membership reaches 22, which is less than 25. Even though the change
          percentage is exceeded, GroupID will not raise an exception and update group membership.

6. Click **Save**.

**See Also**

- [Manage Dynasty Settings](/docs/directorymanager/11.0/signin/identitystore/configure/dynastysettings.md)
- [Smart Group Update Schedule](/docs/directorymanager/11.0/signin/schedule/smartgroupupdate.md)
