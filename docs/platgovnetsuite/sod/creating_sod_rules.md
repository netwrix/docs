---
title: "Creating SoD Rules"
description: "Creating SoD Rules"
sidebar_position: 20
---

# Creating SoD Rules

## ​SoD Rules

No individual user should ​have permission to take a transaction from initiation to completion.

Transaction duties should be separated under:

- Recording
- Approvals
- Reconciliations
- Custody of Assets

Ideally these should all be handled by four separate people​. Where external compensating controls
exist and approvals are closely monitored, exemptions can be made. Exceptions must be acceptable to
the company’s auditors.

You can create a custom change request form for SoD Rule Changes. Refer to
[Using Custom Change Request Forms](/docs/platgovnetsuite/changemanagement/use_custom_cr_forms.md) for information on
implementing your custom form.

### Access Levels

The following are general definitions of access levels for permissions in NetSuite.

- **View**: The user has access to view existing files. The user cannot create, edit, or delete
  existing files.
- **Create**: The user can create new and view existing files. The user cannot edit or delete
  existing files.
- **Edit**: The user has access to create, view, and edit files. The user cannot delete existing
  files.
- **Full**: The user can create, view, edit, and delete files.

## Creating an SoD Rule

1. Open **SoD** > **SoD Rule** > **SoD Rule Library** > **New**

    ![sod_rule_new](/images/platgovnetsuite/sod/sod_rule_new.webp)

2. **External ID** is assigned by Platform Governance for NetSuite. Custom rules are numbered 1000
   or above. External IDs for custom rules can be edited. SoD Library rule External IDs are 1
   through 999 and cannot be edited.
3. Add a Rule **Name** and **Description** and optional **Memo**.
4. **Status** indicates the current state of the Rule: **Test on Roles**, **Disabled**, **Test on
   Employees**, **Approved**, **Pending for Approval**, **Disabled - Feature Not In Use**, or
   **Disabled - Compensating Control**. Only **Approved**and **Active** rules are applied.
5. Select or add a new **Risk** (optional).
6. Select the **Process** from the list. The rule pertains to the group of activities and
   transactions defined for the selected **Process**. The **Process** for an SoD Library rule cannot
   be edited.
7. Check to make the rule **Inactive** if needed (optional).
8. Check to **Block Conflict** to block the save attempt on the employee record if the employee
   permissions/roles violates this rule (optional).
9. Select the **Access Control Type**:

    ![SoD Access Controls](/images/platgovnetsuite/sod/sod_access_controls.webp)

    - **Role-based** - Select one or more **Roles** from the displayed list. The Permissions and
      Advanced Permission Controls are not available for this option.
    - **Permission-based**

        1. Select **One-Sided Rule** (only Base Permissions/Levels) or **Two-Sided Rule** (both Base
           and Conflicting Permissions/Levels).
        2. Select one or more **Base Permissions** and one or more **Base Permission Levels**. For
           **Base Permission**, you can enter part of the name to see a matching list, or use the
           drop down to view all of the permissions.
        3. Optionally add a **Base Permission Text Match** to filter for conflicts matching the base
           permission string. For example: **ADMI\_** matches all **ADMI** permissions. Can use
           **startswith** search operator.
        4. For Two-Sided Rules, select one or more **Conflicting Permissions** and one or more
           **Conflicting Permission Levels**. For **Conflict Permission**, you can enter part of the
           name to see a matching list, or use the drop down to view all of the permissions.
        5. Optionally add a **Conflict Permission Text Match** to filter for conflicts matching the
           conflicting permission string. For example: **ADMI\_** matches all **ADMI** permissions.
           Can use **startswith** search operator.

    - **Permission vs Role** provides you additional control to fine tune access to sensitive custom
      records. Requires all of the fields for both **Role-based** and **Permission-based**.

10. Add Restrictions to limit the SoD rule to employees associated in one or more of the categories:
    **Subsidiaries**, **Departments**, **Classes**, and **Locations**.

    ![SoD Classifications](/images/platgovnetsuite/sod/sod_classifications.webp)

11. **Save** the rule.

Once a Rule is saved, the **Change ID** and **Run Retroactive** functions are available.

There are four tabs to access details:

- **Change Logs**: all changes to the rule, including Date Created, SoD Rule, Operation, Changed By,
  Field Name and Script ID, NonCompliance, Old/New Value and Difference Summary.
- **SoD Rule Processing Status**: the last update and current status of the rule. Status can be
  **Not Started**, **InQueue**, **Processing**, or **Done**.
- **Compensating Controls**: list of controls for the rule. Click + to the right of the list to add
  a new control. Compensating Controls are defined on the Customization record.
- **Workflow**: displays Active Workflows and Workflow History.

![SoD Processing Status](/images/platgovnetsuite/sod/sod_proc_status_tab.webp)

When you add or change a rule, you can manually start the evaluation process, or wait until the
Spider runs overnight. To manually run the process:

1. Open **SoD** > **SoD Processing Status** > **Run SoD on User Roles**
2. Select all of the roles you have modified.
3. Click **Run SoD**

## Updates to SoD Rules Report

To view the updates to your SoD rules:

**SoD** > **SoD Rule** > **Updates to SoD Rules**

![Updates to SoD Rules report](/images/platgovnetsuite/sod/sod_rules_update_report.webp)

With this report, you can easily identify modified pre-defined SoD rules. There is a saved import
SoD Rule Import available to enable bulk add or update SoD rules to your production environment.

1. Create a **.csv** file with the following fields:

    - External ID
    - Name
    - Status
    - Description
    - Block Conflict
    - Process Issues
    - Process
    - Roles
    - Memo
    - Base Permission
    - Base Permission Level(s)
    - Conflicting Permission
    - Conflicting Permission Level(s)
    - Base Permission Text Match
    - Conflict Permission Text Match
    - Subsidiaries
    - Departments
    - Classes
    - Locations
    - Compensating Controls

2. Open **Setup** > **Import/Export** > **Saved Imports** > **SoD Rule Import**
3. Follow the prompts in the **Import Assistant**.
