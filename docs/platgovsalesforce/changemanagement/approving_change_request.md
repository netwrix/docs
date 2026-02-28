---
title: "Approving a Change Request"
description: "Approving a Change Request"
sidebar_position: 50
---

# Approving a Change Request

Approvers are populated from the Change/Approval Policy for the Change Request. Approval
notifications are sent when the Change Request owner advances the status to **Pending Approval**.

1. Approvers receive an email with a link to the Change Request.
2. When the Change Request opens, **Approve** and **Reject** buttons are available at the top of the
   form:

    - If an approver rejects the Change Request, the status is changed to **Rejected**. You can
      return the Change Request to **In Progress**, edit it, and re-submit it for approval if
      there are errors or omissions.

3. Change Request owner [Completes and Validates the Change Request](/docs/platgovsalesforce/changemanagement/completing_change_request.md).

Once the Change Request is approved, you cannot change the customizations associated with it or make any other modifications to the record.

You can add the **Netwrix CR Approval Override** Permission Set to specific users. Users with
this Permission Set can approve a Change Request independently of the governing policy. 

:::note
The default approve permission is no longer included with the System Administrator role. If you have a System
Administrator or other users you want to be able to approve, assign the **Netwrix CR Approval Override** Permission Set.
:::
