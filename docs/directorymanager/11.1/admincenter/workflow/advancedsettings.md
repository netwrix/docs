---
title: "Manage Advanced Workflow Settings"
description: "Manage Advanced Workflow Settings"
sidebar_position: 20
---

# Manage Advanced Workflow Settings

You can specify advanced settings for workflow, such as set a default approver for workflow requests
and define approver acceleration settings.

:::note
Functions discussed in this topic are licensed under different add-ons. See the
[ Licensing ](/docs/directorymanager/11.1/admincenter/general/licensing.md) topic.
:::


## Specify a Default Approver

You can designate a recipient as the default approver for workflow requests. Requests are routed to
this recipient based on the following rules:

- When approver acceleration is not enabled, the applicable rules are discussed in the
  [Workflow Approval Scenarios](overview.md#workflow-approval-scenarios) topic.
- When approver acceleration is enabled:

    - A request is sent to the default approver when the last approver in the acceleration chain
      does not approve or deny it within the specific number of days.
    - A request is routed to the default approver when the hierarchy breaks at any point in the
      acceleration chain. For example, if the maximum acceleration level is set to 3 but there is no
      recipient to accelerate the request after second level acceleration, the request goes to the
      default approver.

The default approver also receives group expiry and deletion notifications for groups without
owners.

**To specify a default approver:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Workflows** page, click the **Advanced Workflow Settings** tab.
5. On th **Advanced Workflow Settings** tab, use the **Default Approver** box to specify a recipient
   as the default approver. To search for a recipient:

    - Enter a search string in the box. Group and user names starting with the string are displayed
      as you type. Select a user or group to set as the default approver.

**Or**

    - Click **Advanced** to search an object by different parameters, such as name, department,
      company, and email.  
      In the _advanced search_ box, enter a search string and click **Search**. User and group
      objects matching the string are displayed. Select the required object.

    To remove the default approver, click **Delete** for it.

6. Click **Save**.

## Apply Approver Acceleration

The workflow approver acceleration feature ensures that no workflow request remains undecided. To
apply setting related to approver acceleration, see the
[Workflow Approver Acceleration](/docs/directorymanager/11.1/admincenter/workflow/approveracceleration.md) topic.

## Delete Workflow Requests

You can delete the workflow requests generated for an identity store based on certain settings. For
example, you can delete the ‘denied’ requests that are old by 30 days or more.

**To delete workflow requests:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Workflows** page, click the **Advanced Workflow Settings** tab. Go to the **Workflow
   Requests** section.
5. In the **Delete requests that are x or more days old** box, specify a number, say 30. Workflow
   requests that are 30 days old and older will be auto deleted.
6. Select the type of requests you want to delete.

    - **Pending:** to delete requests that are pending, including your own.
    - **Approved:** to delete requests that have been approved.
    - **Denied:** to delete requests that have been denied.

7. Click **Delete**. Directory Manager deletes requests of the selected type that are old or older
   than the specified number of days.
8. Click **Save**.

## Integrate with Microsoft Power Automate

You can also link your Power Automate flows to Directory Manager workflows. For details, see the
[Integrate with Power Automate](/docs/directorymanager/11.1/admincenter/workflow/integrate.md) topic.
