---
title: "Create Active Directory Groups"
description: "Create Active Directory Groups"
sidebar_position: 20
---

# Create Active Directory Groups

Using GroupID portal, you can create static groups and Smart Groups in an Active Directory identity
store.

NOTE: If the GroupID administrator has specified the group creation action for review, the new group
will be created after it is verified by an approver. See
[Requests](/docs/directorymanager/11.0/welcome/request/overview.md).

What do you want to do?

- [Create a Static Group](#create-a-static-group)
- [Create a Smart Group](#create-a-smart-group)
- [Create a Password Expiry Group](#create-a-password-expiry-group)

## Create a Static Group

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    Pages and fields on the Create Group wizard may vary, since the administrator can customize the
    wizard by adding or removing pages and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/welcome/group/create/grouptype.md),
   select the **Static Group** option button and click **Next**.
3. On the
   [General page](/docs/directorymanager/11.0/welcome/group/create/group/general.md),
   specify basic information about the group.
4. On the
   [Members page](/docs/directorymanager/11.0/welcome/group/create/group/members.md),
   specify members for the group.
5. On the
   [Owners page](/docs/directorymanager/11.0/welcome/group/create/group/owners.md),
   specify primary and additional owners for the group.
6. On the
   [Summary Page](/docs/directorymanager/11.0/welcome/user/create/activedirectory/summary.md),
   review the settings and then click Finish to complete the wizard.

## Create a Smart Group

A Smart Group is one that dynamically maintains its membership based on the rules applied by a
user-defined query, such as an LDAP query.

Rather than specifying static user memberships, you can use a query (for example, "All full-time
employees in my company") to dynamically build membership in a Smart Group. Managing memberships
with queries significantly reduces administrative costs.

**To create a Smart Group:**

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    Pages and fields on the Create Group wizard may vary, since the administrator can customize the
    wizard by adding or removing tabs and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/welcome/group/create/grouptype.md),
   select the **Smart Group** option button and click **Next**.
3. On the
   [General page](/docs/directorymanager/11.0/welcome/group/create/group/general.md),
   specify basic information about the group.
4. On the
   [ Smart Group page](/docs/directorymanager/11.0/welcome/group/create/group/smartgroup.md),
   review and modify the query for updating group membership.
5. On the
   [Owners page](/docs/directorymanager/11.0/welcome/group/create/group/owners.md),
   specify primary and additional owners for the group.

    When a Smart Group Update job runs on a group, the notification behavior is as follows:  
     Even when the **Do not Notify** check box is selected, the additional owner will receive the
    notifications if the administrator has included its email address for job-specific
    notifications.

6. On the
   [Summary Page](/docs/directorymanager/11.0/welcome/user/create/activedirectory/summary.md),
   review the settings and then click Finish to complete the wizard.

## Create a Password Expiry Group

A password expiry group is a Smart Group whose membership contains users whose identity store
account passwords are approaching their expiry dates. Members of this group are notified by email to
reset their passwords. When they do so, they are automatically removed from the group membership.

NOTE: Password Expiry group is not supported in Microsoft Entra ID.

**To create a Password Expiry Group:**

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    Pages and fields on the Create Group wizard may vary, since the administrator can customize the
    wizard by adding or removing tabs and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/welcome/group/create/grouptype.md),
   select the **Password Expiry Group** option button and click **Next**.
3. On the
   [General page](/docs/directorymanager/11.0/welcome/group/create/group/general.md),
   specify basic information about the group.
4. On the
   [ Smart Group page](/docs/directorymanager/11.0/welcome/group/create/group/smartgroup.md),
   review and modify the query for updating group membership.
5. On the
   [Owners page](/docs/directorymanager/11.0/welcome/group/create/group/owners.md),
   specify primary and additional owners for the group.

    When a Smart Group Update job runs on a group, the notification behavior is as follows:  
     Even when the **Do not Notify** check box is selected, the additional owner will receive the
    notifications if the administrator has included its email address for job-specific
    notifications.

6. On the
   [Summary Page](/docs/directorymanager/11.0/welcome/user/create/activedirectory/summary.md),
   review the settings and then click Finish to complete the wizard.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
