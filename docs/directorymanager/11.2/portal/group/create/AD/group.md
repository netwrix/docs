---
title: "Create Active Directory Groups in Directory Manager"
description: "Create static groups, Smart Groups, and password expiry groups in an Active Directory identity store with the Directory Manager Create Group wizard."
keywords:
  - create Active Directory group
  - Create Group wizard
  - static group
  - Smart Group
  - password expiry group
sidebar_position: 20
---

# Create Active Directory Groups in Directory Manager

Using the Directory Manager portal, you can create static groups and Smart Groups in an Active Directory
identity store.

:::note
If the Directory Manager administrator has specified the group creation action for review, the
new group is created after an approver verifies it. See the
[Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.2/portal/request/overview.md) topic for additional information.
:::

## Create a Static Group

To create a static group:

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    Pages and fields on the Create Group wizard can vary, since the administrator can customize the
    wizard by adding or removing pages and fields.

2. On the [Select a group type in Directory Manager](/docs/directorymanager/11.2/portal/group/create/grouptype.md), select the **Static Group** option button and click
   **Next**.
3. On the [Specify Basic Group Information in Directory Manager](/docs/directorymanager/11.2/portal/group/create/AD/general.md), specify basic information about the group.
4. On the [Members Page in the Create Group Wizard](/docs/directorymanager/11.2/portal/group/create/AD/members.md), specify members for the group.
5. On the [Owners Page in the Create Group Wizard](/docs/directorymanager/11.2/portal/group/create/AD/owners.md), specify primary and additional owners for the group.
6. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.2/portal/user/create/AD/summary.md), review the settings and
   then click **Finish** to complete the wizard.

## Create a Smart Group

A Smart Group is one that dynamically maintains its membership based on the rules applied by a
user-defined query, such as an LDAP query.

Rather than specifying static user memberships, you can use a query (such as "All full-time
employees in the company") to dynamically build membership in a Smart Group. Managing memberships
with queries significantly reduces administrative costs.

To create a Smart Group:

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    Pages and fields on the Create Group wizard can vary, since the administrator can customize the
    wizard by adding or removing tabs and fields.

2. On the [Select a group type in Directory Manager](/docs/directorymanager/11.2/portal/group/create/grouptype.md), select the **Smart Group** option button and click
   **Next**.
3. On the [Specify Basic Group Information in Directory Manager](/docs/directorymanager/11.2/portal/group/create/AD/general.md), specify basic information about the group.
4. On the [Smart Group Page in the Create Group Wizard](/docs/directorymanager/11.2/portal/group/create/AD/smartgroup.md), review and modify the query for updating group
   membership.
5. On the [Owners Page in the Create Group Wizard](/docs/directorymanager/11.2/portal/group/create/AD/owners.md), specify primary and additional owners for the group.

    When a Smart Group Update job runs on a group, the notification behavior is as follows:  
     Even when the **Don't Notify** checkbox is selected, the additional owner receives the
    notifications if the administrator has included its email address for job-specific
    notifications.

6. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.2/portal/user/create/AD/summary.md), review the settings and then click
   **Finish** to complete the wizard.

## Create a Password Expiry Group

A password expiry group is a Smart Group whose membership contains users whose identity store
account passwords are approaching their expiry dates. Members of this group are notified by email to
reset their passwords. When they do, they are automatically removed from the group membership.

:::note
Password Expiry group isn't supported in Microsoft Entra ID.
:::

To create a Password Expiry Group:

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    Pages and fields on the Create Group wizard can vary, since the administrator can customize the
    wizard by adding or removing tabs and fields.

2. On the [Select a group type in Directory Manager](/docs/directorymanager/11.2/portal/group/create/grouptype.md), select the **Password Expiry Group** option button and
   click **Next**.
3. On the [Specify Basic Group Information in Directory Manager](/docs/directorymanager/11.2/portal/group/create/AD/general.md), specify basic information about the group.
4. On the [Smart Group Page in the Create Group Wizard](/docs/directorymanager/11.2/portal/group/create/AD/smartgroup.md), review and modify the query for updating group
   membership.
5. On the [Owners Page in the Create Group Wizard](/docs/directorymanager/11.2/portal/group/create/AD/owners.md), specify primary and additional owners for the group.

    When a Smart Group Update job runs on a group, the notification behavior is as follows:  
     Even when the **Don't Notify** checkbox is selected, the additional owner receives the
    notifications if the administrator has included its email address for job-specific
    notifications.

6. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.2/portal/user/create/AD/summary.md), review the settings and
   then click **Finish** to complete the wizard.
