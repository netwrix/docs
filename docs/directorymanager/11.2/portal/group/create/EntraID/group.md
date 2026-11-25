---
title: "Create Microsoft Entra ID Groups in Directory Manager"
description: "Create static groups and Smart Groups in a Microsoft Entra ID identity store by using the Create Group wizard in the Directory Manager portal."
keywords:
  - create Entra ID group
  - Create Group wizard
  - static group
  - Smart Group
  - Microsoft Entra ID identity store
sidebar_position: 30
---

# Create Microsoft Entra ID Groups in Directory Manager

Using the Directory Manager portal, you can create static groups and Smart Groups in a Microsoft
Entra ID identity store.

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

    :::note
    Pages and fields on the Create Group wizard can vary, since the administrator can
    customize the wizard by adding or removing tabs and fields.
    :::


2. On the [Select a group type in Directory Manager](/docs/directorymanager/11.2/portal/group/create/grouptype.md), select the **Static Group** option button and click
   **Next**.
3. On the [General Page for Entra ID Groups in Create Group Wizard](/docs/directorymanager/11.2/portal/group/create/EntraID/general.md), specify basic information about the group.
4. On the [Members Page in the Create Group Wizard](/docs/directorymanager/11.2/portal/group/create/AD/members.md), add objects to group membership.

    Only user objects can be added as members of an Office 365 group.

5. On the [Owners Page in the Create Group Wizard](/docs/directorymanager/11.2/portal/group/create/AD/owners.md), specify primary and additional owners for the
   group.

    Only users can be set as primary owners. You can specify multiple primary owners for a group. At
    least one primary owner is mandatory.

6. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.2/portal/user/create/AD/summary.md), review the settings and
   then click **Finish** to complete the wizard.

## Create a Smart Group

To create a Smart Group:

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    :::tip
    Pages and fields on the Create Group wizard can vary, since the administrator can
    customize the wizard by adding or removing tabs and fields.
    :::

2. On the [Select a group type in Directory Manager](/docs/directorymanager/11.2/portal/group/create/grouptype.md), select the **Smart Group** option button and
   click **Next**.
3. On the [Specify Basic Group Information in Directory Manager](/docs/directorymanager/11.2/portal/group/create/AD/general.md), specify basic information about the group.
4. On the [Smart Group Page in the Create Group Wizard](/docs/directorymanager/11.2/portal/group/create/AD/smartgroup.md), review and modify the query
   for updating group membership.

    Smart Groups in a Microsoft Entra ID-based identity store use a device structured query
    language to update group membership. Apply a query to a group either in the Microsoft
    Entra ID portal or in Directory Manager.

5. On the [Owners Page in the Create Group Wizard](/docs/directorymanager/11.2/portal/group/create/AD/owners.md), specify primary and additional owners for the
   group.

    - Only users can be set as primary owners.
    - You can specify multiple primary owners for a group. At least one primary owner is mandatory.
    - When a Smart Group Update job runs on a group, the notification behavior is as follows:

        Even when the **Don't Notify** checkbox is selected, the additional owner receives the
        notifications if the administrator has included its email address for job-specific
        notifications.

6. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.2/portal/user/create/AD/summary.md), review the settings and
   then click **Finish** to complete the wizard.
