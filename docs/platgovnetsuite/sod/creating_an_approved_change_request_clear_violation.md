---
title: "Creating an Approved Change Request to Clear a Violation"
description: "Creating an Approved Change Request to Clear a Violation"
sidebar_position: 80
---

# Creating an Approved Change Request to Clear a Violation

## Assign a Non-Compliant Role to an Employee

:::note
Make sure the SoD Rule that it will violate is **Non-Blocking**. This way the employee record can be
saved even if it is a non-compliant role.
:::

To assign a non-compliant role to an employee:

1. Open **Lists** > **Employees** > **Employees**
2. Click **Edit** for the affected employee.
3. Assign the **non-compliant role**.
4. Click **Save**.

This creates a SoD Violation Log.

## Create an Approved Change Request - New Method

To create an approved change request:

1. Open **SoD** > **SoD Change Management** > **New SoD Approval**
2. Enter information in the following fields:

    - **Name**: Enter a name for the request.
    - **Priority Level**: Select the priority level for the request. Select **New** to add a custom
      level.
    - **Reason for Role or Permission Change**: Enter the information supporting the approval
      request.
    - Select one or more of the **Affected Employee(s)**, **Affected Rule(s)** and **Affected User
      Role(s)**.

3. Click **In Progress** in the status bar to indicate you are working on the request.
4. **Save** the Change Request.
5. The Approval section is now available. Click **Edit** to add **Additional Approvers** or
   **Approver Notes**. Click **Save** if you make changes. Refer to
   [Create a Change Request](/docs/platgovnetsuite/changemanagement/creating_change_request.md) for more details about
   the status bar.

The violation clears in the employee record after the approved Change Request is saved.

## Create an Approved Change Request - Old Method

To create an approved change request:

1. Open **Strongpoint** > **Change Management Tools** > **Change Request** > **New**
2. Add the following required fields for pre-approval:

    - **Name**: Enter a name for the request.
    - **Change Type**: **SoD Approval**
    - **Completion Status**: **In Progress**
    - **Change Overview**: Enter a description for the change
    - **Customization**: Select the non-compliant role you want to assign to an employee.
    - **Approval Status**: **Approved**

3. Under the **SoD** tab:

    - Select the **Affected Employee**
    - Set the **Completion Status** to **NOT Completed**

4. Click **Save**.

The violation clears in the employee record after the approved Change Request is saved.
