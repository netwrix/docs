---
title: "Create Microsoft Entra ID Groups in GroupID"
description: "Create static groups and Smart Groups in a Microsoft Entra ID identity store by using the Create Group wizard in the GroupID portal."
keywords:
  - create Entra ID group
  - Create Group wizard
  - static group
  - Smart Group
  - Microsoft Entra ID identity store
sidebar_position: 30
---

# Create Microsoft Entra ID Groups in GroupID

Using the GroupID portal, you can create static groups and Smart Groups in a Microsoft
Entra ID identity store.

:::note
If the GroupID administrator has specified the group creation action for review, the new
group is created after an approver verifies it. See the
[Workflow Requests in the GroupID Portal](/docs/directorymanager/11.0/welcome/request/overview.md) topic.
:::

What do you want to do?

- [Create a Static Group](#create-a-static-group)
- [Create a Smart Group](#create-a-smart-group)

## Create a Static Group

To create a static group:

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    :::note
    Pages and fields on the Create Group wizard can vary, since the administrator can
    customize the wizard by adding or removing tabs and fields.
    :::

2. On the [Select a group type in GroupID](/docs/directorymanager/11.0/welcome/group/create/grouptype.md),
   select the **Static Group** option button and click **Next**.
3. On the [General Page for Entra ID Groups in Create Group Wizard](/docs/directorymanager/11.0/welcome/group/create/group/general_1.md),
   specify basic information about the group.
4. On the
   [Members Page in the Create Group Wizard](/docs/directorymanager/11.0/welcome/group/create/group/members.md),
   add objects to group membership.

    Only user objects can be added as members of a Microsoft 365 group.

5. On the
   [Owners Page in the Create Group Wizard](/docs/directorymanager/11.0/welcome/group/create/group/owners.md),
   specify primary and additional owners for the group.

    Only users can be set as primary owners. You can specify multiple primary owners for a group. At
    least one primary owner is mandatory.

6. On the
   [Review the Summary page before creating an object](/docs/directorymanager/11.0/welcome/user/create/activedirectory/summary.md),
   review the settings and then click **Finish** to complete the wizard.

## Create a Smart Group

To create a Smart Group:

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    Pages and fields on the Create Group wizard can vary, since the administrator can
    customize the wizard by adding or removing tabs and fields.

2. On the [Select a group type in GroupID](/docs/directorymanager/11.0/welcome/group/create/grouptype.md),
   select the **Smart Group** option button and click **Next**.
3. On the [General Page for Entra ID Groups in Create Group Wizard](/docs/directorymanager/11.0/welcome/group/create/group/general_1.md),
   specify basic information about the group.
4. On the
   [Smart Group Page in the Create Group Wizard](/docs/directorymanager/11.0/welcome/group/create/group/smartgroup.md),
   review and modify the query for updating group membership.

    Smart Groups in a Microsoft Entra ID-based identity store use a device structured query
    language to update group membership. Apply a query to a group either in the Microsoft
    Entra ID portal or in GroupID.

5. On the
   [Owners Page in the Create Group Wizard](/docs/directorymanager/11.0/welcome/group/create/group/owners.md),
   specify primary and additional owners for the group.

    - Only users can be set as primary owners.
    - You can specify multiple primary owners for a group. At least one primary owner is mandatory.
    - When a Smart Group Update job runs on a group, the notification behavior is as follows:

        Even when the **Do not Notify** checkbox is selected, the additional owner receives the
        notifications if the administrator has included its email address for job-specific
        notifications.

6. On the
   [Review the Summary page before creating an object](/docs/directorymanager/11.0/welcome/user/create/activedirectory/summary.md),
   review the settings and then click **Finish** to complete the wizard.

**See Also**

- [View and Edit Group Properties in GroupID](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
