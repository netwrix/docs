---
title: "Change Management Overview"
description: "Change Management Overview"
sidebar_position: 80
---

# Change Management Overview

Platform Governance for Salesforce Closed Loop Change Management and Compliance is an enhanced
change management system for changes to Salesforce accounts using the Platform Governance for
Salesforce automated documentation and change management system.

With Platform Governance for Salesforce, you can extend your current change management system to:

- Establish change management policies for different types of objects and processes.
- Route changes for approval within Salesforce.
- Authenticate that changes to the system are in accordance with applicable policies.
- Detect and resolve non-compliant changes.
- Manage deployments and sandbox refreshing using best practices.

## Plan, Approve, and Deploy Changes

### Plan with a Change Request

Use Change Requests to plan and track changes to the system.

They allow for common actions associated with change requests including:

- Grouping process issues.
- Planning completion targets.
- Tracking the status.
- Managing approvals.

The **Advanced Change Management** Module provides additional functionality:

- Automatically define the change level required for compliance based on the appropriate
  [Change and Approval Policy](/docs/platgovsalesforce/changemanagement/change_and_approval_policy.md).
- Identify impacts on other customizations.
- Attach and manage test scripts.
- Manage and record Pre and Post-Deployment
  [Environment Comparisons](/docs/platgovsalesforce/tools/environment_comparison.md).
- Archive fields.
- Delete customizations.

:::note
Change Management can be integrated with other change tracking systems using the External Change
Request Number field. Use the change records because they can be linked to
processes, customizations, and clean-up activities.
:::

### Confirm with a Deployment Record

When tracking Full Software Development Lifecycle changes, use the Deployment Record to
track deployment approvals. Once a Change Request is approved, the Deployment Record documents that
a change is ready for development. You can then create and track a new change request with the
Stage Deployment Record.

This enables:

- Tracking of deployment activities.
- Documentation of approvals for deployment to document that any changes that occurred during
  development have been approved and that the appropriate pre-deployment checks have been completed.

This record links to the original change request to enable end-to-end reporting of the change.
