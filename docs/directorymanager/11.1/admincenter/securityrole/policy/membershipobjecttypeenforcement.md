---
title: "Membership Object Type Enforcement Policy"
description: "Membership Object Type Enforcement Policy"
sidebar_position: 100
---

# Membership Object Type Enforcement Policy

The Membership Object Type Enforcement policy applies to static groups only. It enables you to limit
the objects that role members can add to the membership of a static group. For example, you can
disallow Role A to add a mailbox as member of a group.

You can choose to:

- Extend the policy to all groups that role members create and manage in the identity store.
- Specify the groups and/or containers the policy would apply to. In case of a container, the policy
  would apply to all groups that role members can create and manage in that container and its
  sub-containers. All other groups would be exempt, except those specified.

**Impact on the Directory Manager portal**

The policy has the following impact on the Directory Manager portal:

- When the role member opens a group and searches for an object to add it as member, only the
  permitted objects are displayed in search results. Disallowed objects are not displayed.
- When a role member opens a disallowed object and tries to add it to a group, a message is
  displayed that this is not permitted.
- When a role member uses the Add to Group icon on the portal toolbar to add a disallowed object to
  a group, a message is displayed that this is not permitted.

**Limitations**

- The Membership Object Type Enforcement policy does not apply to critical system objects (such as
  domain controllers and computers). Therefore, even if the policy allows these objects to be added
  to group membership, they will not show up in search results when users search for objects for
  adding to group membership.
- The Membership Object Type Enforcement policy may conflict with the [Search Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/search.md) you
  define for the same user role in an identity store. An example of a conflict is: the Search policy
  prevents a security role from searching for user objects in the portal while the Membership Object
  Type Enforcement policy allows that same role to add only user objects to group membership. To
  avoid such conflicts, make sure the two policies align with each other.
- The Membership Object Type Enforcement policy may conflict with the static group properties you
  specify on the Properties page under the Design node for a portal. For example, for the Members
  tab in group properties, you can allow/disallow object types that can be searched for adding to
  group membership (see step 17 in the
  [Add a Field to a Tab](/docs/directorymanager/11.1/admincenter/applications/portal/displaytype/objectproperties.md#add-a-field-to-a-tab)topic). If the
  design settings prevent users from searching for user objects to set as members while the
  Membership Object Type Enforcement policy allows role members to add only user objects to group
  membership, a conflict may arise. To avoid these, make sure the settings in the policy and the
  group properties design align with each other.

**What do you want to do?**

- Membership Object Type Enforcement Policy
- Apply the Membership Object Type Enforcement Policy to Specific Groups and Containers

## Apply the Membership Object Type Enforcement Policy to All Groups

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Membership Object Type Enforcement** tab.
7. By default, the **Target(s)** area is empty, indicating that the policy applies to all groups
   that role members create and manage in the identity store.
8. The **Objects** area displays four categories for object types: Users, Contacts, Groups, and
   Computers. The sub-types are also listed for each of these.

    - Select the check boxes for the object types or sub-types you want to allow role members to add
      to group membership. On selecting the check box for an object type, all its sub-types are
      automatically selected. You can, however, choose to select specific sub-type(s), to allow only
      those to role members.
    - Clear the check boxes for the object types or sub-types you want to prevent role members from
      adding to group membership. On clearing the check box for an object type, all its sub-types
      are automatically deselected. You can, however, choose to deselect specific sub-type(s), to
      disallow only those to role members.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Apply the Membership Object Type Enforcement Policy to Specific Groups and Containers

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Membership Object Type Enforcement** tab.
7. Use the **Target(s)** area to specify the groups and/or containers the policy would apply to.
   This means that the policy would apply when role members try to add members to the specified
   groups, or to groups that reside in the specified container(s) and their sub-containers.

    1. To specific containers as target, follow step 9 in the
       [Create a Group Usage Service Schedule](/docs/directorymanager/11.1/admincenter/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
       topic.
    2. To add groups as target, follow step 9b in the
       [Create a Smart Group Update Schedule](/docs/directorymanager/11.1/admincenter/schedule/smartgroupupdate.md#create-a-smart-group-update-schedule)
       topic, replacing Smart Groups and Dynasties with static groups.
    3. To remove a container or group in the **Target(s)** area, click **Remove** for it.  
       To remove all target objects, click **Remove All**.

8. Follow step 8 in the Apply the Membership Object Type Enforcement Policy to All Groups topic to
   allow and disallow the objects that role members can add as members to the target groups.
9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.
