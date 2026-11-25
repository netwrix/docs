---
title: "Manage Directory Manager Membership Lifecycle Policies"
description: "Create, edit, reapply, and delete membership lifecycle policies that make group membership additions or removals temporary for a set period."
keywords:
  - membership lifecycle policy
  - temporary group membership
  - Directory Manager
  - identity store
  - group and OU policy
sidebar_position: 50
---

# Manage Directory Manager Membership Lifecycle Policies

Use a membership lifecycle policy to specify a period so that all members added to or removed from groups during that period are treated as temporary additions or removals, respectively.

You can define a membership policy for groups and OUs. For an OU, the policy applies to all groups in that OU. The Membership Life Cycle schedule applies membership lifecycle policies to groups.

:::note
Membership lifecycle policies apply to static groups only. You can't specify system critical objects, Smart Groups, and Dynasties as target groups in a policy.
:::

:::note
When Smart Groups and Dynasties reside in a target OU, Directory Manager doesn't process them.
:::

## Types of membership lifecycle policies

You can define two types of membership lifecycle policies:

- **Add temporary**: Users added to group membership during a specified period are temporary members and are removed from membership at the end of the period. If you extend this policy to existing group members, all members (including permanent members) are removed from group membership when the period ends.
- **Remove temporary**: Users added to group membership during a specified period are temporarily removed on addition and are permanently added to group membership at the end of the period. If you extend this policy to existing group members, all members (including permanent members) are temporarily removed from group membership for the specified period. At the end of the period, they are added back as permanent members.

## Key features

Membership lifecycle policies have these main features:

- **Groups with nested membership**: If a policy is applied to a group with nested membership, it doesn't affect the nested membership. For an OU with nested OUs, the policy applies to all nested OUs.
- **Groups with different settings for individual members**: When a policy is applied to a group that has members with temporary addition or removal applied to them individually, the individual member settings take precedence over the group policy. Temporary addition or removal applied to individual members remains intact when you remove a policy from a group or OU.
- **Single policy rule**: A single policy can be applied to a group or an OU at a time. Therefore, a group or OU can't be set as the target in more than one policy. If you apply a policy to an OU that contains a group with a different policy already applied to it, the group policy takes effect.
- **Notifications**: Directory Manager generates notifications when users are temporarily added or removed from a group's membership. See the [Manage Membership Life Cycle Notifications](/docs/directorymanager/11.2/admincenter/identitystore/configure/smtpserver.md#manage-membership-life-cycle-notifications) topic.

**What do you want to do?**

- [Specify an 'add temporary' membership policy](#specify-an-add-temporary-membership-policy)
- [Specify a 'remove temporary' membership policy](#specify-a-remove-temporary-membership-policy)
- [Edit a policy](#edit-a-policy)
- [Reapply a policy](#reapply-a-policy)
- [Delete a policy](#delete-a-policy)

## Specify an 'add temporary' membership policy

An add temporary membership policy states that all members added to the target groups during a certain period are temporary. When the period ends, Directory Manager removes them from group membership.

**To define a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life Cycle**.
   The **Group/OU Based Membership Lifecycle** page displays any group/OU based membership policy already defined.
4. Click **Add**. The **Add Group/OU Based Membership Lifecycle Policy** dialog box is displayed.
5. In the **Membership Type** dropdown list, select **Add Temporary**.
6. To specify a duration for the policy, select one of these options:

   - Click **Days** and in the box below, specify the number of days the policy applies to target groups, starting from today.
   - Click **Custom** and specify a date range in the **Starting Date** and **Ending Date** boxes. The starting date must be the current date or a future date.

7. Specify the groups and OUs to apply the policy to, using one of these methods:

   - In the **Add Group and OU to Membership Policy** area, enter a search string in the box. Group and OU names starting with the string are displayed as you type. Click **Add** for an object to add it to the policy.

   **Or**

   - Click **Advanced** to search for an object by different parameters, such as name, display name, and email.

   The selected objects are displayed with their type (group or OU), display name, and distinguished name.

   - For a container, the policy applies to all groups residing in it and its sub-containers.
   - For a group, the policy doesn't apply to any groups that are nested into your selected groups.

   To remove an object, click **Remove** for it.

8. Click **Add**.
9. On the **Apply Policy to Existing Members** message box, do one of the following:

   - Click **Yes** to extend the policy to include the existing membership of the target groups. All members of the target groups convert to temporary at the start of the period and are removed from the groups when the period ends. This means the group's membership is emptied when the period ends. Directory Manager also logs the membership change in the group's history.

   - Click **No** to apply the policy to new members only and exempt existing members.

10. The policy is displayed on the **Group/OU Based Membership Lifecycle** page. Click **Save**.  
    To view the impact of the policy, go to the properties of a target group in the Directory Manager portal.

## Specify a 'remove temporary' membership policy

A remove temporary policy states that all members added to the target groups during a certain period are temporarily removed from membership. When the period ends, Directory Manager adds those members back as permanent members.

**To define a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life Cycle**.
   The **Group/OU Based Membership Lifecycle** page displays any group/OU based membership policy already defined.
4. Click **Add**. The **Add Group/OU Based Membership Lifecycle Policy** dialog box is displayed.
5. In the **Membership Type** dropdown list, select **Remove Temporary**.
6. To specify a duration for the policy, select one of these options:

   - Click **Days** and in the box below, specify the number of days the policy applies to target groups, starting from today.
   - Click **Custom** and specify a date range in the **Starting Date** and **Ending Date** boxes. The starting date must be the current date or a future date.

7. Specify the groups and OUs to apply the policy to, using one of these methods:

   - In the **Add Group and OU to Membership Policy** area, enter a search string in the box. Group and OU names starting with the string are displayed as you type. Click **Add** for an object to add it to the policy.

   **Or**

   - Click **Advanced** to search for an object by different parameters, such as name, display name, and email.

   The selected objects are displayed with their type (group or OU), display name, and distinguished name.

   - For a container, the policy applies to all groups residing in it and its sub-containers.
   - For a group, the policy doesn't apply to any groups that are nested into your selected groups.

   To remove an object, click **Remove** for it.

8. Click **Add**.
9. On the **Apply Policy to Existing Members** message box, do one of the following:

   - Click **Yes** to extend the policy to include the existing membership of the target groups. All membership of the target groups is temporarily removed at the start of the period and added back as permanent members when the period ends. Directory Manager also logs the membership change in the group's history.

   - Click **No** to apply the policy to new members only and exempt existing members.

10. The policy is displayed on the **Group/OU Based Membership Lifecycle** page. Click **Save**.  
    To view the impact of the policy, go to the properties of a target group in the Directory Manager portal.

## Edit a policy

You can edit a policy to change its details.

Assume you have an add temporary policy with May 1 and May 31 set as starting and ending dates. By May 14, User A and User B are added as temporary members, to be removed from membership on May 31.

On May 15, you change the policy's ending date to May 20. The new ending date applies to members added to the group from then on. It doesn't apply to User A and User B, who are still removed on May 31. However, if the policy is applied to existing members, User A and User B are also removed from membership on May 20.

**To edit a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life Cycle**.
4. On the **Group/OU Based Membership Lifecycle** page, click the ellipsis button for a policy and select **Edit**.
5. Make the required changes to the policy on the **Edit Group/OU Based Membership Lifecycle Policy** dialog box.

   - For an add temporary policy, follow step 5 and onwards in the [Specify an 'add temporary' membership policy](#specify-an-add-temporary-membership-policy) section.
   - For a remove temporary policy, follow step 5 and onwards in the [Specify a 'remove temporary' membership policy](#specify-a-remove-temporary-membership-policy) section.

6. On the **Group/OU Based Membership Lifecycle** page, click **Save**.

## Reapply a policy

Reapply a policy when:

- A new group is created in the policy's target OU through the identity provider, such as Active Directory. To extend the policy to the new group, you must reapply it.
- A group is moved to a target OU using Directory Manager or the identity provider.

You don't need to reapply a policy when a new group is created in the policy's target OU through Directory Manager. In this case, Directory Manager applies the policy automatically.

Consider the following:

- If a policy has been defined for future dates and you add a group to a target OU before the start date, you must reapply the policy. Reapplying a policy when no group has been added to a target OU has no impact.
- If you add a group to a target OU of an active policy, you must reapply it to extend the policy to that group.
- When you reapply a policy after its effective dates, it has no impact.  
  **Example:** Assume a policy is active from January 20-31. Reapplying it on February 1 has no impact.

:::note
When you move a group from a target OU in a policy (OUA) to an OU that isn't the target of any policy (OUB), the policy applied to the group in OUA continues to apply until its end date.
:::

**To reapply a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life Cycle**.
4. On the **Group/OU Based Membership Lifecycle** page, click the ellipsis button for a policy and select **Reapply**.
5. On the **Reapply Membership Lifecycle Policy** dialog box, click **Yes** to reapply the policy to the target groups' new and existing members, or click **No** to close the dialog box without reapplying the policy.
6. Click **Save**.

## Delete a policy

Deleting a membership lifecycle policy has the following impact:

- When a policy is deleted before or after its effective dates, it has no impact.
- When a policy is deleted during its effective dates, all members of the target groups and those of groups in the target OUs become permanent members of the respective groups.

**To delete a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life Cycle**.
4. On the **Group/OU Based Membership Lifecycle** page, click the ellipsis button for a policy and select **Delete**.
5. In the **Delete Membership Lifecycle Policy** message box, click one of these options:

   - **Yes**: All members of the target groups and those of groups in the target OUs become permanent members of the respective groups, and the policy is deleted.
   - **No**: The policy isn't deleted and continues to apply to the target groups and OUs.

6. Click **Save**.

**See Also**

- [Membership Life Cycle Schedule in Directory Manager](/docs/directorymanager/11.2/admincenter/schedule/membershiplifecycle.md)
