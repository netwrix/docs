---
title: "Membership Object Type Enforcement Policy in Directory Manager"
description: "Limit which object types role members can add to static group membership, for all groups or only for specific groups and containers."
keywords:
  - Membership Object Type Enforcement
  - static group membership
  - object types
  - security role policy
  - group targets
sidebar_position: 100
---

# Membership Object Type Enforcement Policy in Directory Manager

The Membership Object Type Enforcement policy applies to static groups only. Use it to limit the objects that role members can add to the membership of a static group. For example, you can prevent Role A from adding a mailbox as a member of a group.

You can choose to:

- Extend the policy to all groups that role members create and manage in the identity store.
- Specify the groups, containers, or both that the policy applies to. For a container, the policy applies to all groups that role members can create and manage in that container and its subcontainers. All other groups are exempt, except those you specify.

**Impact on the Directory Manager portal**

The policy affects the Directory Manager portal in these ways:

- When a role member opens a group and searches for an object to add as a member, the search results show only the permitted objects. They don't show disallowed objects.
- When a role member opens a disallowed object and tries to add it to a group, a message says this isn't permitted.
- When a role member uses the Add to Group icon on the portal toolbar to add a disallowed object to a group, a message says this isn't permitted.

**Limitations**

- The policy doesn't apply to critical system objects, such as domain controllers and computers. Even if the policy allows these objects in group membership, they don't show up in search results when users search for objects to add to group membership.
- The policy can conflict with the [Configure a Search Policy for a Security Role](/docs/directorymanager/11.2/admincenter/securityrole/policy/search.md) you define for the same user role in an identity store. For example, the Search policy prevents a security role from searching for user objects in the portal, while the Membership Object Type Enforcement policy allows that same role to add only user objects to group membership. To avoid such conflicts, ensure the two policies align with each other.
- The policy can conflict with the static group properties you specify on the Properties page under the Design node for a portal. For example, for the Members tab in group properties, you can allow or disallow the object types that users can search for when adding to group membership (see step 17 in the [Add a Field to a Tab](/docs/directorymanager/11.2/admincenter/applications/portal/displaytype/objectproperties.md#add-a-field-to-a-tab) topic). A conflict can arise if the design settings prevent users from searching for user objects to set as members, while the policy allows role members to add only user objects to group membership. To avoid these conflicts, ensure the settings in the policy and the group properties design align with each other.

**What do you want to do?**

- Membership Object Type Enforcement Policy
- Apply the Membership Object Type Enforcement Policy to Specific Groups and Containers

## Apply the Membership Object Type Enforcement policy to all groups

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the **Policies** area.
6. On the **Add Policies** pane, click the **Membership Object Type Enforcement** tab.
7. Leave the **Targets** area empty. By default, it's empty, which means the policy applies to all groups that role members create and manage in the identity store.
8. In the **Objects** area, review the four categories of object types: Users, Contacts, Groups, and Computers. The area also lists the subtypes for each.

    - Select the checkboxes for the object types or subtypes you want to allow role members to add to group membership. Selecting the checkbox for an object type selects all its subtypes. You can select specific subtypes to allow only those subtypes.
    - Clear the checkboxes for the object types or subtypes you want to prevent role members from adding to group membership. Clearing the checkbox for an object type clears all its subtypes. You can clear specific subtypes to disallow only those subtypes.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Apply the Membership Object Type Enforcement policy to specific groups and containers

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the **Policies** area.
6. On the **Add Policies** pane, click the **Membership Object Type Enforcement** tab.
7. In the **Targets** area, specify the groups, containers, or both that the policy applies to. The policy applies when role members try to add members to the specified groups, or to groups in the specified containers and their subcontainers.

    1. To add containers as targets, follow step 9 in the [Create a Group Usage Service Schedule](/docs/directorymanager/11.2/admincenter/schedule/groupusageservice.md#create-a-group-usage-service-schedule) topic.
    2. To add groups as targets, follow step 9b in the [Create a Smart Group Update Schedule](/docs/directorymanager/11.2/admincenter/schedule/smartgroupupdate.md#create-a-smart-group-update-schedule) topic, replacing Smart Groups and Dynasties with static groups.
    3. To remove a container or group in the **Targets** area, click **Remove** for it. To remove all target objects, click **Remove All**.

8. Follow step 8 in the Apply the Membership Object Type Enforcement Policy to All Groups topic to allow and disallow the objects that role members can add as members to the target groups.
9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.
