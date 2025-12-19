---
title: "SoD Test Case Scenarios"
description: "SoD Test Case Scenarios"
sidebar_position: 110
---

# SoD Test Case Scenarios

Here are test case scenarios for SoD rules:

- Assign an Admin Role to a User
- Set Conflicting Global Permissions for a User
- Assign a User a Single User Role that Violates SoD rule
- Assign a Combination of Multiple Roles that Violates SoD rule
- Assign an Employee the Administrator Role with a Pre-Approved Change Request
- Create an Approved Change Request to Clear a Violation

## Assign an Admin Role to a User

**SoD Rules**

Admin Role should not be assigned without second level approval and monitoring.

**Process**

To assign an administrator role to a user:

1. Open **Lists** > **Employees** > **Employees**
2. Select **Edit** by the Employee Name. (For this example select _Mini Granger_ from the list.)
3. Open the **Access** tab.
4. Check **Give Access**.
5. On the **Roles** tab, select **Administrator** for the **Role**.
6. Click **Add**.
7. Click **Save**.

**Result**

If the SoD rule is violated, the change made will not be allowed and will be blocked right away. A
user should not be assigned an Administrator role unless there is a pre-approved change request. A
prompt violation message will be seen by the user trying to make the change. The user will not be
able to proceed with the save action.

## Set Conflicting Global Permissions for a User

SoD Rules

Users who have permission to create Sales Orders should not have the permission to Approve Sales
orders.

Process

To set global permissions for a user:

1. Open **Lists** > **Employees** > **Employees**
2. **Select** Edit by the Employee Name. (For this example select _Miriam Hobbs_ from the list.)
3. Open the **Access** tab.
4. Open the **Global Permissions** tab.
5. Select the following **Permission** and **Level**:

    - **Sales Order** with **Full**
    - **Sales Order Approval** with **Create**

6. Click **Add** after each selection.
7. Click **Save**.

**Result**

If the SoD rule is violated, an SoD incident is logged and the user is prompted with a warning.

## Assign a User a Single User Role that Violates SoD rule

**SoD Rules**

Anyone who can create a journal should not be able to approve it. Users who have permission to
create sales orders should not have the permission to approve sales orders.

**Process**

To set a user role:

1. Open **Lists** > **Employees** > **Employees**
2. Select **Edit** by the Employee Name. (For this example select _Sam Smith_ from the list.)
3. Open the **Access** tab.
4. Check **Give Access**.
5. On the **Roles** tab, select **Administrator** for the **Role**.
6. Click **Add**.
7. Click **Save**.

**Result**

If the SoD rule is violated, an SoD incident is logged and the user is prompted with a warning.

## Assign a Combination of Multiple Roles that Violates SoD rule

**SoD Rules**

Anyone who can create a bill should not be able to approve it and should not reconcile.

**Process**

To set up multiple roles:

1. Open **Lists** > **Employees** > **Employees**
2. Select **Edit** by the Employee Name. (For this example select _Angela Roelle_ from the list.)
3. Open the **Access** tab.
4. Check **Give Access**.
5. On the **Roles** tab, select **Bill Approver** for the **Role**.
6. Click **Add**.
7. Click **Save**.

**Result**

If the SoD rule is violated, an SoD incident is logged and the user is prompted with a warning.

## Assign an Employee the Administrator Role with a Pre-Approved Change Request

**SoD Rules**
Administrator assignment requires approval.

**Process**

To assign an administrator role:

1. Open **Strongpoint** > **Change Management Tools** > **ITGC Change Request** > **New**
2. Enter these fields:

    - **Name**: Admin approval for Randy
    - **Change Type**: SoD Approval
    - **Completion Status**: Not completed
    - **Change Overview**: Need to add admin for Randy
    - **Customizations**: Administrator (user role)
    - **Approval Status**: Approved
    - **SoD** tab **Affected Employee**: Randy Unger

3. Click **Save**.
4. Open **Lists** > **Employees** > **Employees**
5. Select **Edit** by the Employee Name. (For this example select _Randy Unger_ from the list.)
6. Open the **Access** tab.
7. Check **Give Access**.
8. On the **Roles** tab, select **Administrator** for the **Role**.
9. Click **Add**.
10. Click **Save**.

**Result**

1. The change made is NOT blocked. There would be NO SoD Violation pop-up.
2. Employee now has the Administrator role.
3. The SoD Rule field in the Employee form is set to Cleared.
4. A Change Log is created, and is listed under the Resolved SoD Incidents list on the **Access**
   tab. It is also listed under **SoD** > **SoD Incident Management Reports** > **Resolved SoD
   Incidents**.
5. The Change Log has the following details:

    - Change Log is compliant (**Noncompliance** checkbox is NOT checked)
    - **SoD Rule** is Administrator assignment requires approval
    - The employee given the new Administrator role is set in the **Affected Employee** field
    - The pre approved Change Request is set in the **Related Change Request** field

## Create an Approved Change Request to Clear a Violation

**SoD Rules**

Anyone who can create a journal should not be able to approve it.

Anyone entering customer orders cannot approve or process it.

**Process**

1. Open **Lists** > **Employees** > **Employees**
2. Select **Edit** by the Employee Name. (For this example select _Beverly Ucab_ from the list.)
3. Open the **Access** tab.
4. Check **Give Access**.
5. On the **Roles** tab, select **Z - Senior Executive** for the **Role**.
6. Click **Add**.
7. Click **Save**.  
   Result: SoD Incidents are logged. Z - Senior Executive violates both rules.
8. Open **Strongpoint** > **Change Management Tools** > **ITGC Change Request** > **New**  
   Enter these fields:

    - **Name**: Approve Z-Senior Executive for Beverly
    - **Change Type**: SoD Approval
    - **Completion Status**: Not completed
    - **Change Overview**: Test
    - **Customizations**: Z - Senior Executive (user role)
    - **Approval Status**: Approved
    - **SoD** tab **Affected Employee**: Beverly Ucab

**Result**

Violations are caught after employee save.

Violation clear out in the employee record after the approved Change Request is saved.
