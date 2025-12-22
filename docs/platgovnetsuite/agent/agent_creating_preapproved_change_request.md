---
title: "Creating an Agent Preapproved Change Request"
description: "Creating an Agent Preapproved Change Request"
sidebar_position: 40
---

# Creating an Agent Preapproved Change Request

You can create a custom change request form for an Agent Preapproved Change Request. Refer to
[Using Custom Change Request Forms](/docs/platgovnetsuite/changemanagement/use_custom_cr_forms.md) for information on
implementing your custom form.

Here are the steps to create a pre-approved change request for a control:

1. Open **Strongpoint** > **Financial Controls** > **New Agent Control Approval**

    ![agent_pre_app_not_started](/images/platgovnetsuite/financial_controls/agent_pre_app_not_started.webp)

2. Enter the **Name** and **Overview** for the Control.
3. Set a combination of two or more filters. Using one filter can create a blanket approval or too
   loose approval criteria.

    | Pattern       | Description                              |
    | --- | --- |
    | Value1        | Value1 must exist in the Diff            |
    | Value1,Value2 | Value1 AND Value2 must exist in the Diff |
    | Value1,Value2 \|Value3                                   | Value1 AND (Value2 OR Value3) must exist in the Diff |
    | Value1,Value2\|Value3;Value4,Value5\|Value6                                               | -( Value1 AND (Value2 OR Value3) ) OR ( Value4 AND (Value5 OR Value6) ) must exist in the Diff |

4. Click **In Progress** to advance the status bar.
5. Click **Save**.
6. The Approval section is now available. Click **Edit** to add **Additional Approvers** or
   **Approver Notes**. Click **Save**.

    if you make
    changes.![agent_pre_app_approval_section](/images/platgovnetsuite/financial_controls/agent_pre_app_approval_section.webp)

    Related Change Record information is added when you save. The results are shown on the **Related
    Change Records** tab.

    - Created From
    - Originated System
    - Originating Case (shown if record is created from a Case record)
    - Originating Case Company (shown if record is created from a Case record)
    - External Change Request Number
    - External Link
    - Parent Change Request

7. Click **Pending Approval** in the status bar when you are finished with the Change Request. A
   confirmation prompt is displayed. When confirmed, Approval Notifications are sent to the
   approvers.
8. Once approved, click **Completed** in the status bar to finish the Change Request. If rejected,
   you can return the Change Request to **In Progress**, fix any issues, and resubmit it to
   **Pending Approval**.

### Status Bar States

![change_request_bar_not_started](/images/platgovnetsuite/change_management/change_request_bar_not_started.webp)

New Change Request. Click **In Progress** to advance the status.

![change_request_bar_inprogress](/images/platgovnetsuite/change_management/change_request_bar_inprogress.webp)

Change Request **In Progress**.

Can be demoted to **Not Started**.

Approval section is added when the Change Request is saved.

When ready for approval, click **Pending Approval**.

![change_request_bar_pending](/images/platgovnetsuite/change_management/change_request_bar_pending.webp)

Approvers are notified.

Status can be demoted.

Status promoted based on Approvers actions.

![change_request_bar_approved](/images/platgovnetsuite/change_management/change_request_bar_approved.webp)

Status when all approvers have approved.

Can be returned to a previous status or rejected.

![change_request_bar_approved_partial](/images/platgovnetsuite/change_management/change_request_bar_approved_partial.webp)

Status when Change Request is partially approved. Wait for all approvers to finish.

![change_request_bar_approved_override](/images/platgovnetsuite/change_management/change_request_bar_approved_override.webp)

Status when an administrator has approved in place of a specified approver.

**Approval Override by** field displays the approver.

![change_request_bar_approved_completed](/images/platgovnetsuite/change_management/change_request_bar_approved_completed.webp)

Approved and Completed.

Can be returned to a previous status.

![change_request_bar_approved_canceled](/images/platgovnetsuite/change_management/change_request_bar_approved_canceled.webp)

Approved and Canceled.

Can be returned to a previous status.

![change_request_bar_rejected](/images/platgovnetsuite/change_management/change_request_bar_rejected.webp)

Rejected and Completed.

Can be returned to a previous status.
