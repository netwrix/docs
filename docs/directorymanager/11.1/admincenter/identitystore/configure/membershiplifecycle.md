---
title: "Manage Membership Life Cycle Policies"
description: "Manage Membership Life Cycle Policies"
sidebar_position: 50
---

# Manage Membership Life Cycle Policies

A membership lifecycle policy enables you to specify a period, so that all members added or removed
from specific group(s) during that period are treated as temporary addition or removal respectively.

You can define a membership policy for groups and OUs. In case of an OU, the policy applies to all
groups in that OU. The Membership Life Cycle schedule is responsible for applying membership
lifecycle policies to groups.

:::note
Membership lifecycle policies apply to static groups only. You cannot specify system critical
objects, Smart Groups, and Dynasties as target groups in a policy.
:::


:::note
When Smart Groups and Dynasties reside in a target OU, Directory Manager does not process
them.
:::


## Types of Membership Lifecycle Policies

You can define two types of membership life cycle policies:

- **Add temporary** - Users added to group membership during a specified period will be temporary
  members, to be removed from membership at the end of the period. If this policy is extended to
  existing group members, then all members (including permanent members) will be removed from group
  membership when the period ends.
- **Remove temporary** - Users added to group membership during a specified period will be
  temporarily removed on addition, to be permanently added to group membership at the end of the
  period. If this policy is extended to existing group members, then all members (including
  permanent members) will be temporarily removed from group membership for the specified period. At
  the end of the period, they will be added back as permanent members.

## Key Features

Some main features of the membership lifecycle policies are:

- **Groups with nested membership** - If a policy is applied to a group with nested membership, it
  does not affect nested membership. For an OU with nested OUs, the policy applies to all nested
  OUs.
- **Groups with different settings for individual members** - When a policy is applied to a group
  having members with temporary addition or removal applied to them individually, then individual
  member settings take precedence over the group policy. Temporary addition or removal applied to
  individual members remains intact when you remove a policy from a group or OU.
- **Single policy rule** - A single policy can be applied to a group or an OU at a time. Hence, a
  group or OU cannot be set as the target in more than one policy. If you apply a policy to an OU
  that contains a group with a different policy already applied to it, then the group policy would
  be effective.
- **Notifications** - Directory Manager generates notifications when users are temporarily added or
  removed from a group’s membership. See the
  [Manage Membership Life Cycle Notifications](/docs/directorymanager/11.1/admincenter/identitystore/configure/smtpserver.md#manage-membership-life-cycle-notifications)
  topic.

**What do you want to do?**

- Specify an ‘Add Temporary’ Membership Policy
- Specify a ‘Remove Temporary’ Membership Policy
- Edit a Policy
- Reapply a Policy
- Delete a Policy

## Specify an ‘Add Temporary’ Membership Policy

An _add temporary_ membership policy states that all members added to the target groups during a
certain period will be temporary. When the period ends, they will be removed from group membership.

**To define a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life
   Cycle**.  
   The **Group/OU Based Membership Lifecycle** page displays any group/OU based membership policy
   already defined.
4. Click **Add**; the **Add Group/OU Based Membership Lifecycle Policy** dialog box is displayed.
5. In the **Membership Type** drop-down list, select _Add Temporary_.
6. To specify a duration for the policy, select one of these options:

    - Click **Days** and in the box below, specify the number of days the policy will apply to
      target group(s), starting from today.
    - Click **Custom** and specify a date range in the **Starting Date** and **Ending Date** boxes.
      The starting date must be the current or future date.

7. Specify groups and OUs to apply the policy to.

    - In the **Add Group and OU to Membership Policy** area, enter a search string in the box. Group
      and OU names starting with the string are displayed as you type. Click **Add** for an object
      to add it to the policy.

**Or**

    - Click **Advanced** to search an object by different parameters, such as name, display name,
      and email.

    The selected objects are displayed with their type (can be group or OU), display name, and
    distinguished name.

    - For a container, the policy applies to all groups residing in it and its sub-containers.
    - For a group, the policy does not apply to any groups that are nested into your selected
      group(s).

    To remove an object, click **Remove** for it.

8. Click **Add**.
9. On the **Apply Policy to Existing Members** message box, do one of the following:

    - Click **Yes** to extend the policy to include the target groups’ existing membership. All
      members of the target group(s) convert to temporary at the start of the period, and get
      removed from the respective group(s) when the period ends. Simply put, a group’s membership
      will be emptied when the period ends. Membership change is also logged in the group’s history.
    - Click **No** to apply the policy to new members only and exempt existing members.

10. The policy is displayed on the **Group/OU Based Membership Life Cycle** page. Click **Save**.  
    To view the impact of the policy, go to the properties of a target group in the Directory
    Manager portal.

## Specify a ‘Remove Temporary’ Membership Policy

A _remove temporary_ policy states that all members added to the target group(s) during a certain
period will be temporarily removed from membership. When the period ends, those members would be
added back as permanent members.

**To define a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life
   Cycle**.  
   The **Group/OU Based Membership Life Cycle** page displays any group/ OU based membership policy
   already defined.
4. Click **Add**; the **Add Group/OU Based Membership Lifecycle Policy** dialog box is displayed.
5. In the **Membership Type** drop-down list, select _Remove Temporary_.
6. To specify a duration for the policy, select one of these options:

    - Click **Days** and in the box below, specify the number of days the policy will apply to
      target group(s), starting from today.
    - Click **Custom** and specify a date range in the **Starting Date** and **Ending Date** boxes.
      The starting date must be the current or future date.

7. Specify groups and OUs to apply the policy to.

    - In the **Add Group and OU to Membership Policy** area, enter a search string in the box. Group
      and OU names starting with the string are displayed as you type. Click **Add** for an object
      to add it to the policy.

**Or**

    - Click **Advanced** to search an object by different parameters, such as name, display name,
      and email.

    The selected objects are displayed with their type (can be group or OU), display name, and
    distinguished name.

    - For a container, the policy applies to all groups residing in it and its sub-containers.
    - For a group, the policy does not apply to any groups that are nested into your selected
      group(s).

    To remove an object, click **Remove** for it.

8. Click **Add**.
9. On the **Apply Policy to Existing Members** message box, do one of the following:

    - Click **Yes** to extend the policy to include the target groups’ existing membership. All
      membership of the target group(s) is temporarily removed at the start of the period, and is
      added back as permanent members when the period ends. Membership change is also logged in the
      group’s history.
    - Click **No** to apply the policy to new members only and exempt existing members.

10. The policy is displayed on the **Group/OU Based Membership Life Cycle** page. Click **Save**.  
    To view the impact of the policy, go to the properties of a target group in the Directory
    Manager portal.

## Edit a Policy

You can edit a policy to change its details.

Let’s assume you have an ‘add temporary’ policy with May 1 and May 31 set as starting and ending
dates. By May 14, User A and User B are added as temporary members, to be removed from membership on
May 31.

On May 15, you change the policy’s ending date to May 20. The new ending date will apply to members
that are added to the group hence onwards; it does not apply to User A and User B, who will still be
removed on May 31. However, if the policy is applied to existing members, User A and User B will
also be removed from membership on May 20.

**To edit a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life
   Cycle**.
4. On the **Group/OU Based Membership Life Cycle** page, click the ellipsis button for a policy and
   select **Edit**.
5. Make the required changes to the policy on the **Edit Group/OU Based Membership Lifecycle
   Policy** dialog box.

    - For an _add temporary_ policy, follow step 5 and onwards in the Specify an ‘Add Temporary’
      Membership Policy topic.
    - For a _remove temporary_ policy, follow step 5 and onwards in the Specify a ‘Remove Temporary’
      Membership Policy topic.

6. On the **Group/OU Based Membership Life Cycle** page, click **Save**.

## Reapply a Policy

You need to reapply a policy when:

- A new group is created in the policy’s target OU through the identity provider, such as Active
  Directory. To extend the policy to the new group, you have to reapply it.
- A group is moved to a target OU using Directory Manager or the identity provider.

You do not need to reapply a policy when a new group is created in the policy’s target OU through
Directory Manager. In this case, the policy is automatically applied.

Consider the following:

- If a policy has been defined for future dates and you add a group to a target OU before the start
  date, you must reapply the policy. Reapplying a policy when no group has been added to a target OU
  has no impact.
- If you add a group to a target OU of a policy that is currently active, you must reapply it to
  extend the policy to that group.
- When you reapply a policy after its effective dates, it has no impact.  
  **Example:** Let’s assume a policy is active from Jan. 20-31. Reapplying it on Feb 1 will have no
  impact.\

:::note
When you move a group from a target OU in a policy (OUA) to an OU that is not the target of
any policy (OUB), the policy applied to the group in OUA will continue to apply to till its end
date.
:::


**To reapply a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life
   Cycle**.
4. On the **Group/OU Based Membership Life Cycle** page, click the ellipsis button for a policy and
   select **Reapply**.
5. On the **Reapply Membership Lifecycle Policy** dialog box, click **Yes** to reapply the policy to
   the target groups’ new and existing members or **No** to close the dialog box without reapplying
   the policy.
6. Click **Save**.

## Delete a Policy

Deleting a membership lifecycle policy has the following impact:

- When a policy is deleted before or after its effective dates, it has no impact.
- When a policy is deleted during its effective dates, all members of the target groups and those of
  groups in the target OUs become permanent members of the respective groups.

To delete a policy:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life
   Cycle**.
4. On the **Group/OU Based Membership Life Cycle** page, click the ellipsis button for a policy and
   select **Delete**.
5. The **Delete Membership Lifecycle Policy** message box is displayed.

    - On clicking **Yes**, all members of the target groups and those of groups in the target OUs
      become permanent members of the respective groups and the policy is deleted.
    - On clicking **No**, the policy is not deleted and continues to apply to the target groups and
      OUs.

6. Click **Save**.

**See Also**

- [Membership Life Cycle Schedule](/docs/directorymanager/11.1/admincenter/schedule/membershiplifecycle.md)
