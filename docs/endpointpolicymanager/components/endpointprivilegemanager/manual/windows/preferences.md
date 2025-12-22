---
title: "Using Group Policy Preferences to Manage Local Admin Groups"
description: "Using Group Policy Preferences to Manage Local Admin Groups"
sidebar_position: 130
---

# Using Group Policy Preferences to Manage Local Admin Groups

:::note
See the
[Use Group Policy to remove local admin rights (then Endpoint Policy Manager to enable Least Privilege)](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/basicsandgettingstarted/removelocaladmin.md)
video for an overview of using Group Policy preference with Endpoint Policy Manager Least Privilege
Manager.
:::


Endpoint Policy ManagerLeast Privilege Manager is built on the principle of stripping local admin
rights for standard users and then giving them the exact privileges they need to do their jobs. To
fully utilize this strategy, you may need to start with a clean slate concerning the membership of
your Windows local admin groups. Before we do that, you should first confirm who the members of your
Domain Admins group are and make sure that no one is listed there who shouldn't be there. If so,
remove those accounts immediately.

:::note
Doing this will create the need to do some cleanup in the local admins group on each
computer.
:::


Now let's move on to local admin groups. You can easily do this by creating a GPO, going to
**Computer Configuration** > **Preferences** > **Control Panel Settings** > **Local Users and
Groups** and select **Local Group** .

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/using_group_policy_preferences.webp)

Next, you’ll use the **Update** action which has been selected by default along with the check box
to **Delete all member users**.  You may also want to select **Delete all member groups** as well. 
The first check box setting will delete any existing user members, including those remnant accounts
that were left after cleaning up the domain admins group in the prior step. This cleans out
everyone, which means you have to add back the accounts you want. Remember that you don't want to
allocate local admin groups to standard users, so only the domain admins group and the local admin
user account should be members. This is achieved by clicking the **Add** button and selecting them.

![A screenshot of a group Description automatically generated](/images/endpointpolicymanager/leastprivilege/using_group_policy_preferences_1.webp)

Once the policy is deployed, you will have removed all non-privileged users from the local admins
group of all targeted desktops.



