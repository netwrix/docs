---
title: "Approving a Change Request"
description: "Approving a Change Request"
sidebar_position: 50
---

# Approving a Change Request

Approvers are populated from the Change/Approval Policy for the Change Request. Approval
notifications are sent when the Change Request owner advances the status to **Pending Approval**.

1. Approver receives an email with a link to the Change Request.
2. When the Change Request opens, **Approve** and **Reject** buttons are available at the top of the
   form:

    - If all approvers approve the Change Request, the status is changed to **Approved**. Implement
      the changes specified by the Change Request.
    - If an approver rejects the Change Request, the status is changed to **Rejected**. You can
      return the Change Request to **In Progress**, edit it, and reset it to **Pending Approval** if
      there are errors or omissions.

3. Change Request owner [Completes and Validates the Change Request](/docs/platgovsalesforce/changemanagement/completing_change_request.md).

Once the Change Request is approved, you cannot change the customizations attached to the Change
Request.

You can add the **Strongpoint CR Approval Override** Permission Set to specific users. Users with
this Permission Set can approve a Change Request independent of the governing policy. The default
approve permission is no longer included with the System Administrator role. If you have a System
Administrator or other user you want to be able to approve, assign the **Strongpoint CR Approval
Override** Permission Set.
