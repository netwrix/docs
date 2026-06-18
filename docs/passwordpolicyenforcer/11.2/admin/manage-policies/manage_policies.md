---
title: "Manage Policies"
description: "Add, configure, prioritize, and manage password policies in Netwrix Password Policy Enforcer"
sidebar_position: 20
---

# Manage Policies

Password Policy Enforcer (PPE) can enforce up to 256 different password policies per domain. Password policies are collections of rules that users must comply with when choosing a new password. You can [assign policies](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/usersgroups.md) to users directly, or indirectly through Active Directory security groups and containers (Organizational Units).

PPE doesn't enforce any policies when it is first installed, so the policy list is empty when you open the configuration console for the first time.

![Configuration Console Dashboard](/images/passwordpolicyenforcer/11.2/evaluation/ppedashboard.webp)

PPE adds the policies you create to the policy list. Use the buttons above the policy list to [test policies](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/testpolicy.md), set policy priorities, and export the configuration. Use the options menu (**⋮**) to the right of each policy to perform actions on that policy.

![Dashboard with Policies](/images/passwordpolicyenforcer/11.2/administration/ppedashboardpolicies.webp)

## Add a Policy

1. Click **Add policy** to create a new password policy.
2. Enter a unique name for the policy.
3. Select a **Policy template** from the list if you want the default settings in the policy to match a standard password policy like HIPAA, PCI, NIST, and others. Select **None** to start with a blank policy.
4. Click **Create policy**.

The policy editor opens. The policy editor has many settings. The following pages explain the settings in each tab:
- [Rules](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/rules/rules.md)
- [Users & Groups](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/usersgroups.md)
- [Passphrase](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/passphrases.md)
- [Properties](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/policy_properties.md)
- [Messages](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/messages.md)


## Edit a Policy

Click the name of a policy in the policy list to make changes to the policy.

## Test Policies

Click **Test Policy** to check if Password Policy Enforcer's current configuration accepts or rejects specific passwords. The [Test Policy](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/testpolicy.md) feature is a useful troubleshooting tool when PPE isn't accepting or rejecting passwords as you expect.

## Set Policy Priorities

Policy priorities help Password Policy Enforcer resolve [policy assignment conflicts](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/usersgroups.md#policy-assignment-conflicts). If more than one policy is assigned to a user, and PPE can't decide which policy to enforce using the other conflict resolution rules, then PPE always enforces the policy with the highest priority.

Click **Set priorities** to view or modify policy priorities. This button is only visible if you have more than one password policy.

![Set priorities](/images/passwordpolicyenforcer/11.2/administration/policypriority.webp)

Select the policy you want to reprioritize, then click **Higher** or **Lower** to move the policy up or down. Click **Apply priorities** to accept the new priority order.

The [Assign Policies to Users](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/usersgroups.md) page has more information about how PPE assigns policies and resolves conflicts. You can also click **Test Policy** to quickly see which policy PPE enforces for a particular user.

## Export Configuration

Click **Export** to create an HTML configuration report in `%ProgramFiles%\Netwrix\Password Policy Enforcer\Report\report.html`.

## Policy Options Menu

Click the policy options menu to perform one of the following actions on the policy. The policy options menu appears as three vertical dots (**⋮**) to the right of each policy in the policy list.

![Policy Options Menu](/images/passwordpolicyenforcer/11.2/administration/policy_options_menu.webp)

### Copy a Policy

Click **Make copy** in the policy options menu to create a new policy with the same default settings as the existing policy. Policy names must be unique, so PPE prompts you to enter a new name. The policy editor opens so that you can make changes to the new policy immediately.

### Set the Default Policy

Password Policy Enforcer enforces the default policy for users who don't have an assigned password policy. Click **Make default** or **Remove default** in the policy options menu to toggle the default state of a policy. There can only be one default policy. 

Netwrix doesn't recommend using PPE without a default policy because it might leave some passwords unchecked. If you want to have a default policy, but still exempt some users from having to comply with PPE's rules:
1. Create a new policy for the exempted users.
2. Leave all the rules disabled for this policy.
3. Assign the policy to the users who don't have to comply with any PPE rules.

:::warning
If Password Policy Enforcer has only one policy, and that policy is also the default policy, then PPE enforces the policy for all users. If you want to deploy a single policy gradually, don't make it the default until the deployment is complete.
:::

### Rename a Policy

Click **Rename** in the policy options menu to rename a policy.

### Delete a Policy

Click **Delete** in the policy options menu to delete a policy. Password Policy Enforcer displays a second confirmation prompt if you try to delete the default policy. PPE doesn't assign a new default policy after you delete the default policy. You must set a new default policy manually.
