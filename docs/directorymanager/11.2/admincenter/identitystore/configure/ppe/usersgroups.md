---
title: "Assign Password Policies to Users, Groups, and Containers"
description: "Assign Password Policy Enforcer policies to users, groups, and containers, and learn how Password Policy Enforcer resolves assignment conflicts."
keywords:
  - Password Policy Enforcer
  - policy assignment
  - assign policy to users
  - assign policy to groups
  - policy assignment conflicts
sidebar_position: 20
---

# Assign Password Policies to Users, Groups, and Containers

Password Policy Enforcer uses policy assignments to decide which policy to enforce for each user. You can assign domain policies to users, groups, and containers (Organizational Units).

To open the policy assignments:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the **ellipsis** button for an identity store and select **Edit**.
3. Under Settings in the left pane, click **Configurations**, and then click **PPE Policies**. The PPE Policies page opens.
4. Click the **three vertical dots** icon next to the policy, and click **Edit**.

   **Or**

   Click a policy name to open the policy configuration page.

5. Open the **Users & Groups** tab.

**Assign Policies to Users**

When you assign a domain policy to a user, Password Policy Enforcer stores the user's information in the configuration. The assignment remains valid even if the user is renamed.

1. Click **+Add User** to add the users you want to apply the policy to.
2. On the Add Objects dialog box, select a container from the **Search Container** dropdown list.
3. By default, the Include Sub-Containers checkbox is selected. To exclude users in the sub-containers from the policy, clear it.
4. Click **Advanced** to search users with the search fields, such as Name, Display Name, First Name, and Last Name.
5. Click **Search**. The users that match the criteria are listed.
6. Click the **Add** button next to the user's name.
7. After you add all the users you need, click **Add** on the Add Objects dialog box.

   The selected users are listed in the Users box. To remove a user from the list, click the cross (x) icon next to the user's name.

**Assign Policies to Groups**

When you assign a domain policy to a group, Password Policy Enforcer stores the group's information in the configuration. The assignment remains valid even if the group is renamed.

Password Policy Enforcer enforces the policy for all members of the group and any nested groups. For example, if the Helpdesk group is a member of the Info Tech group, any policy assigned to the Info Tech group also applies to the members of the Helpdesk group. To avoid this behavior, assign a different policy to the Helpdesk group.

1. Click **+Add Group** to add groups for the policy assignment.
2. On the Add Objects dialog box, select a container from the **Search Container** dropdown list.
3. By default, the Include Sub-Containers checkbox is selected. To exclude groups in the sub-containers from the policy, clear it.
4. Click **Advanced** to search groups with the Name, Display Name, and Description fields.
5. Click **Search**. The groups that match the criteria are listed.
6. Click the **Add** button next to the group's name.
7. After you add all the groups you need, click **Add** on the Add Objects dialog box.

   The selected groups are listed in the Groups box. To remove a group from the list, click the cross (x) icon next to the group's name.

**Assign Policies to Containers**

When you assign a policy to a container, Password Policy Enforcer enforces the policy for all users in the container and any child containers. For example, if the Helpdesk and Managers OUs are children of the Info Tech OU, any policy assigned to the Info Tech OU also applies to the two child OUs. To avoid this behavior, assign a different policy to a child OU.

:::note
You can use different assignment types for a single policy. For example, you can assign users to a policy by both OU and group at the same time.
:::

1. Click **+Add Container** to add containers for the policy assignment.
2. On the **Add Container(s)** dialog box, click **+** to expand the Entire Directory.
3. Select the checkbox before the domain name to select the entire directory, or select the containers you want. To remove a container from the list, click the cross (x) icon next to its name.

When you finish assigning users, groups, and containers, click **Update**.

## Policy assignment conflicts

A policy assignment conflict occurs when more than one policy is assigned to a user. Password Policy Enforcer resolves these conflicts and chooses one policy for each user.

Password Policy Enforcer first tries to resolve a conflict by examining the assignment type. Assignments by user take precedence over assignments by group, which take precedence over assignments by container. For example, Policy A is assigned to a user by group, and Policy B is assigned to the same user by container. Password Policy Enforcer enforces Policy A because assignments by group take precedence over assignments by container.

If all the policies are assigned to the user by container, Password Policy Enforcer enforces the policy assigned to the nearest parent container. For example, Policy A is assigned to the Users OU, and Policy B is assigned to the Users\Students OU. Password Policy Enforcer enforces Policy B for all users in the Users\Students and Users\Students\Science OUs because Policy B is assigned to the nearest parent container.

If a conflict still exists, Password Policy Enforcer checks the priority of each remaining policy and enforces the policy with the highest priority. See the Manage Policies topic for a diagram of this algorithm.

To see which policy Password Policy Enforcer enforces for a particular user, click **Test Policy** and expand the **View log**.
