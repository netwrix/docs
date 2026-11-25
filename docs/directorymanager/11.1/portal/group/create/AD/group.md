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

In the Directory Manager portal, you can create static groups, Smart Groups, and password expiry groups in an Active Directory identity store.

:::note
If the Directory Manager administrator has specified the group creation action for review, the new group is created after an approver verifies it. See the [Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.1/portal/request/overview.md) topic for additional information.
:::

## Create a static group

To create a static group:

1. In the Directory Manager portal, click the **Create New** button in the left pane and select **Group**. The **Create Group** wizard opens to the **Group Type** page.

   Pages and fields on the Create Group wizard can vary, since the administrator can customize the wizard by adding or removing pages and fields.

2. On the [Select a group type in Directory Manager](/docs/directorymanager/11.1/portal/group/create/grouptype.md), select the **Static Group** option button and click **Next**.
3. On the [Specify Basic Group Information in Directory Manager](/docs/directorymanager/11.1/portal/group/create/AD/general.md), specify basic information about the group.
4. On the [Members Page in the Create Group Wizard](/docs/directorymanager/11.1/portal/group/create/AD/members.md), specify members for the group.
5. On the [Owners Page in the Create Group Wizard](/docs/directorymanager/11.1/portal/group/create/AD/owners.md), specify primary and additional owners for the group.
6. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.1/portal/user/create/AD/summary.md), review the settings. Then click **Finish** to complete the wizard.

## Create a Smart Group

A Smart Group maintains its membership dynamically, based on the rules in a user-defined query, such as an LDAP query.

Instead of specifying static user memberships, you can use a query, such as "All full-time employees in the company", to build membership in a Smart Group. Managing memberships with queries significantly reduces administrative costs.

To create a Smart Group:

1. In the Directory Manager portal, click the **Create New** button in the left pane and select **Group**. The **Create Group** wizard opens to the **Group Type** page.

   Pages and fields on the Create Group wizard can vary, since the administrator can customize the wizard by adding or removing tabs and fields.

2. On the [Select a group type in Directory Manager](/docs/directorymanager/11.1/portal/group/create/grouptype.md), select the **Smart Group** option button and click **Next**.
3. On the [Specify Basic Group Information in Directory Manager](/docs/directorymanager/11.1/portal/group/create/AD/general.md), specify basic information about the group.
4. On the [Smart Group Page in the Create Group Wizard](/docs/directorymanager/11.1/portal/group/create/AD/smartgroup.md), review the query for updating group membership. Modify it if needed.
5. On the [Owners Page in the Create Group Wizard](/docs/directorymanager/11.1/portal/group/create/AD/owners.md), specify primary and additional owners for the group.

   When a Smart Group Update job runs on a group, notifications work as follows. Even when the **Don't Notify** checkbox is selected, the additional owner receives the notifications if the administrator has included its email address for job-specific notifications.

6. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.1/portal/user/create/AD/summary.md), review the settings. Then click **Finish** to complete the wizard.

## Create a password expiry group

A password expiry group is a Smart Group whose members are users with identity store account passwords that are approaching their expiry dates. Directory Manager notifies the members by email to reset their passwords. When they do, Directory Manager removes them from the group automatically.

:::note
Password Expiry group isn't supported in Microsoft Entra ID.
:::

To create a password expiry group:

1. In the Directory Manager portal, click the **Create New** button in the left pane and select **Group**. The **Create Group** wizard opens to the **Group Type** page.

   Pages and fields on the Create Group wizard can vary, since the administrator can customize the wizard by adding or removing tabs and fields.

2. On the [Select a group type in Directory Manager](/docs/directorymanager/11.1/portal/group/create/grouptype.md), select the **Password Expiry Group** option button and click **Next**.
3. On the [Specify Basic Group Information in Directory Manager](/docs/directorymanager/11.1/portal/group/create/AD/general.md), specify basic information about the group.
4. On the [Smart Group Page in the Create Group Wizard](/docs/directorymanager/11.1/portal/group/create/AD/smartgroup.md), review the query for updating group membership. Modify it if needed.
5. On the [Owners Page in the Create Group Wizard](/docs/directorymanager/11.1/portal/group/create/AD/owners.md), specify primary and additional owners for the group.

   When a Smart Group Update job runs on a group, notifications work as follows. Even when the **Don't Notify** checkbox is selected, the additional owner receives the notifications if the administrator has included its email address for job-specific notifications.

6. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.1/portal/user/create/AD/summary.md), review the settings. Then click **Finish** to complete the wizard.
