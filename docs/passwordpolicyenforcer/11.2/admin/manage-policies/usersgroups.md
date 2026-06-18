---
title: "Assign Policies to Users"
description: "Assign Policies to Users"
sidebar_position: 20
---

# Assign Policies to Users

Password Policy Enforcer uses policy assignments to decide which policy to enforce for each user.
You can assign domain policies to users, groups, and containers (Organizational Units). You can
assign local policies only to users. See the
[Domain and Local Policies](/docs/passwordpolicyenforcer/11.2/installation/domain_and_local_policies.md) topic for additional information.

**Step 1 –** Open the Configuration Console:

Click **Start** > **Netwrix Password Policy Enforcer** > **PPE Configuration**
or
Double click the **PPE Configuration** desktop shortcut.

**Step 2 –** Click a policy name to open the policy configuration page.

**Step 3 –** Open the **Users & Groups** tab.

![Assign policies to Users and Groups](/images/passwordpolicyenforcer/11.2/administration/usersandgroups.webp)

When you assign a domain policy to a user or group, Password Policy Enforcer stores the user or
group SID in the configuration. The assignment remains valid even if the user or group is renamed.
When you assign a local policy to a user, Password Policy Enforcer stores the username in the
configuration. The assignment becomes invalid if the user is renamed.

When you assign a policy to a group, Password Policy Enforcer enforces the policy for all members
of the group as well as any nested groups. For example, if the Helpdesk group is a member of the
Info Tech group, then any policy assigned to the Info Tech group also applies to the members of the
Helpdesk group. If you don't want this behavior, then you can assign a different policy to the
Helpdesk group.

When you assign a policy to a container, Password Policy Enforcer enforces the policy for all users
in the container as well as any child containers. For example, if the Helpdesk and Managers OUs are
children of the Info Tech OU, then any policy assigned to the Info Tech OU also applies to the two
child OUs. If you don't want this behavior, then you can assign a different policy to a child OU.

![managing_policies_3](/images/passwordpolicyenforcer/11.2/administration/managing_policies_3.webp)

:::note
You can use different assignment types for a single policy. For example, you may assign
users to a policy by both OU and group at the same time.
:::


As you assign users and groups to the policy, they appear on the page.

![Policy assignments](/images/passwordpolicyenforcer/11.2/administration/usersandgroups2.webp)

To remove a policy assignment:

**Step 1 –** Select the user, group, or container. For example, **Administrators** under **Groups**.

**Step 2 –** Click the trash can icon in the appropriate header. For example, **Groups**.

## Policy Assignment Conflicts

A policy assignment conflict occurs when more than one policy is assigned to a user. Password Policy
Enforcer can resolve these conflicts and choose one policy for each user.

Password Policy Enforcer first tries to resolve a policy assignment conflict by examining the
assignment type. Assignments by user take precedence over assignments by group, which in turn take
precedence over assignments by container. For example, if Policy A is assigned to a user by group,
and Policy B is assigned to the same user by container, then Password Policy Enforcer enforces
Policy A because assignments by group take precedence over assignments by container.

If all the policies are assigned to the user by container, then Password Policy Enforcer enforces
the policy that is assigned to the nearest parent container. For example, if Policy A is assigned to
the Users OU, and Policy B is assigned to the Users\Students OU, then Password Policy Enforcer
enforces Policy B for all users in the Users\Students and Users\Students\Science OUs because it is
the policy assigned to the nearest parent container.

If a policy assignment conflict still exists, then Password Policy Enforcer checks the priority of
each remaining policy, and enforces the policy with the highest priority. See the
[Policy Selection Flowchart](#policy-selection-flowchart) section for a diagrammatic
representation of this algorithm.

Click **Test Policy** and expand the **View log** to see which policy Password Policy Enforcer
enforces for a particular user.

![Expand View log under Test to see which policy is enforced](/images/passwordpolicyenforcer/11.2/administration/testviewlog.webp)

## Policy Selection Flowchart

This flowchart shows how Password Policy Enforcer determines a policy for each user. Use the
[Test Policy](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/testpolicy.md) tool to quickly determine which policy Password Policy Enforcer
enforces for a particular user.

![managing_policies](/images/passwordpolicyenforcer/11.2/administration/managing_policies.webp)
