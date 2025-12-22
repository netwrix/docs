---
title: "Change Management Overview"
description: "Change Management Overview"
sidebar_position: 100
---

# Change Management Overview

Closed Loop Change Management and Compliance is an enhanced change management system for changes to
NetSuite accounts using the Platform Governance for NetSuite automated documentation and change
management system.

We extend your current change management system to enable you to:

- Establish change management policies for different types of objects and processes.
- Route changes for approval within NetSuite.
- Authenticate that changes to the system are in accordance with applicable policies.
- Enable Opportunistic Clearance if desired, to reduce low risk non-compliant changes.
- Detect and resolve non-compliant changes.
- Manage deployments and sandbox refreshes using best practices.

:::note
Once a change request is complete, best practice is to change the status to **Completed**. If there
are multiple open change requests referencing the same object, any changes to the object result in
the change log being associated with the oldest of the approved change requests.
:::

## Plan, Approve and Deploy Changes

### Initiate with a Process Issue

A process issue can:

- Enable anyone with permission and access to NetSuite to initiate a ticket.
- Enable management and IT staff to triage issues and enhancements to determine if a change request
  should be created.
- Be attached to Customization and Process Records to automatically determine how risky the change
  is and what level of change process is required for compliance.
- Be linked to subsequent Change Requests to provide end to end reporting of changes for audit
  purposes.

:::note
The Process issue is an optional step. If you have an established ticketing system, you can continue
to use that and reference the external ticket in the Change Request.
:::

### Plan with a Change Request

Change Requests are used to plan and track changes to the system.

They allow for common actions associated with change requests including:

- Grouping process issues.
- Planning completion targets.
- Tracking the status.
- Managing approvals.

The **Advanced Change Management** Module provides additional functionality:

- Automatically define the change level required for compliance based on the appropriate
  [Change and Approval Policy](/docs/platgovnetsuite/changemanagement/change_and_approval_policy.md).
- Identify impacts on other customizations.
- Attach and manage test scripts.
- Manage and record Pre and Post-Deployment [Environment Comparisons](/docs/platgovnetsuite/changemanagement/comparing_environments.md).
- Archive fields.
- Delete customizations.

:::note
Change Management can be integrated with other change tracking systems using the External Change
Request Number field. It is beneficial to use the change records since they can be linked to
processes, customizations and clean up activities.
:::

### Confirm with a Deployment Record

When tracking Full Software Development Lifecycle changes, the Deployment Record enables you to
track deployment approvals. Once a Change Request is approved, this documents a change is ready for
development. At this point, a new change request with the Stage Deployment Record can be created and
tracked.

This enables:

- Tracking of deployment activities.
- Documentation of approvals for deployment to document that any changes that occurred during
  development have been approved and that the appropriate pre-deployment checks have been completed.

This record is linked to the original change request to enable end to end reporting of the change.
