# Creating an Agent Preapproved Change Request

You can create a custom change request form for an Agent Preapproved Change Request. Refer to [Using Custom Change Request Forms](/docs/product_docs/strongpointfornetsuite/change_management/use_custom_cr_forms.md) for information on implementing your custom form.

Here are the steps to create a pre-approved change request for a control:

1. Open __Strongpoint__ > __Financial Controls__ > __New Agent Control Approval__

   ![agent_pre_app_not_started](/static/img/product_docs/strongpointfornetsuite/financial_controls/agent_pre_app_not_started.png)
2. Enter the __Name__ and __Overview__ for the Control.
3. Set a combination of two or more filters. Using one filter can create a blanket approval or too loose approval criteria.

   | Pattern | Description |
   | --- | --- |
   | Value1 | Value1 must exist in the Diff |
   | Value1,Value2 | Value1 AND Value2 must exist in the Diff |
   | Value1,Value2 | Value3 | Value1 AND (Value2 OR Value3) must exist in the Diff |
   | Value1,Value2 | Value3; Value4,Value5 | Value6 | -( Value1 AND (Value2 OR Value3) ) OR ( Value4 AND (Value5 OR Value6) ) must exist in the Diff |
4. Click __In Progress__ to advance the status bar.
5. Click __Save__.
6. The Approval section is now available. Click __Edit__ to add __Additional Approvers__ or __Approver Notes__. Click __Save__.

   if you make changes.![agent_pre_app_approval_section](/static/img/product_docs/strongpointfornetsuite/financial_controls/agent_pre_app_approval_section.png)  
    Related Change Record information is added when you save. The results are shown on the __Related Change Records__ tab.

   - Created From
   - Originated System
   - Originating Case (shown if record is created from a Case record)
   - Originating Case Company (shown if record is created from a Case record)
   - External Change Request Number
   - External Link
   - Parent Change Request
7. Click __Pending Approval__ in the status bar when you are finished with the Change Request. A confirmation prompt is displayed. When confirmed, Approval Notifications are sent to the approvers.
8. Once approved, click __Completed__ in the status bar to finish the Change Request. If rejected, you can return the Change Request to __In Progress__, fix any issues, and resubmit it to __Pending Approval__.

### Status Bar States

![change_request_bar_not_started](/static/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_not_started.png)

New Change Request. Click __In Progress__ to advance the status.

![change_request_bar_inprogress](/static/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_inprogress.png)

Change Request __In Progress__.

Can be demoted to __Not Started__.

Approval section is added when the Change Request is saved.

When ready for approval, click __Pending Approval__.

![change_request_bar_pending](/static/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_pending.png)

Approvers are notified.

Status can be demoted.

Status promoted based on Approvers actions.

![change_request_bar_approved](/static/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_approved.png)

Status when all approvers have approved.

Can be returned to a previous status or rejected.

![change_request_bar_approved_partial](/static/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_approved_partial.png)

Status when Change Request is partially approved. Wait for all approvers to finish.

![change_request_bar_approved_override](/static/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_approved_override.png)

Status when an administrator has approved in place of a specified approver.

__Approval Override by__ field displays the approver.

![change_request_bar_approved_completed](/static/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_approved_completed.png)

Approved and Completed.

Can be returned to a previous status.

![change_request_bar_approved_canceled](/static/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_approved_canceled.png)

Approved and Canceled.

Can be returned to a previous status.

![change_request_bar_rejected](/static/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_rejected.png)

Rejected and Completed.

Can be returned to a previous status.
