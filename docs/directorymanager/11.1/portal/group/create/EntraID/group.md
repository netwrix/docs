---
title: "Create Microsoft Entra ID Groups"
description: "Create Microsoft Entra ID Groups"
sidebar_position: 30
---

# Create Microsoft Entra ID Groups

Using Directory Manager portal, you can create static groups and Smart Groups in an Microsoft Entra
ID identity store.

:::note
If the Directory Manager administrator has specified the group creation action for review, the
new group will be created after it is verified by an approver. See the
[Requests](/docs/directorymanager/11.1/portal/request/overview.md) topic for additional information.
:::


## Create a Static Group

Follow the steps to create a static group.

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    :::note
    Pages and fields on the Create Group wizard may vary, since the administrator can
    customize the wizard by adding or removing tabs and fields.
    :::


2. On the [Group Type page](/docs/directorymanager/11.1/portal/group/create/grouptype.md), select the **Static Group** option button and click
   **Next**.
3. On the [General page](/docs/directorymanager/11.1/portal/group/create/EntraID/general.md), specify basic information about the group.
4. On the [Members page](/docs/directorymanager/11.1/portal/group/create/AD/members.md), add objects to group membership.

    Only user objects can be added as members of an Office 365 group.

5. On the [Owners page](/docs/directorymanager/11.1/portal/group/create/AD/owners.md), specify primary and additional owners for the
   group.

    Only users can be set as primary owners. You can specify multiple primary owners for a group. At
    least one primary owner is mandatory.

6. On the [Summary Page](/docs/directorymanager/11.1/portal/user/create/AD/summary.md), review the settings and
   then click Finish to complete the wizard.

## Create a Smart Group

Follow the steps to create a Smart Group.

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    :::tip
    Remember, pages and fields on the Create Group wizard may vary, since the administrator can
    customize the wizard by adding or removing tabs and fields.
    :::



2. On the [Group Type page](/docs/directorymanager/11.1/portal/group/create/grouptype.md) page, select the **Smart Group** option button and
   click **Next**.
3. On the [General page](/docs/directorymanager/11.1/portal/group/create/AD/general.md) page, specify basic information about the group.
4. On the [ Smart Group page](/docs/directorymanager/11.1/portal/group/create/AD/smartgroup.md) page, review and modify the query
   for updating group membership.

    Smart Groups in an Microsoft Entra ID based identity store use a device structured query
    language to update group membership. You should either apply a query to a group in the Microsoft
    Entra ID portal or in Directory Manager.

5. On the [Owners page](/docs/directorymanager/11.1/portal/group/create/AD/owners.md), specify primary and additional owners for the
   group.

    - Only users can be set as primary owners.
    - You can specify multiple primary owners for a group. At least one primary owner is mandatory.
    - When a Smart Group Update job runs on a group, the notification behavior is as follows:

        Even when the **Do not Notify** check box is selected, the additional owner will receive the
        notifications if the administrator has included its email address for job-specific
        notifications.

6. On the [Summary Page](/docs/directorymanager/11.1/portal/user/create/AD/summary.md), review the settings and
   then click **Finish** to complete the wizard.
