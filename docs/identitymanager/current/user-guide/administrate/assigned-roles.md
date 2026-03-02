---
title: "Review and Modify Assigned Roles"
description: "Review and Modify Assigned Roles"
sidebar_position: 70
---

# Review and Modify Assigned Roles

How to review and modify user permissions grouped by categories.

## Overview

The **Assigned Roles** page displays all user permissions organized by category. Users with appropriate permissions can view, assign, edit, and remove role assignments from this page.

**Access Control:** All role assignments displayed and operations available are governed by [Access Control Rules](../../integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule) (ACR). Users can only view and manage roles and identities within their configured area of responsibility. Proper ACR configuration is required for delegated administration scenarios.

## Participants and Artifacts

This operation should be performed by a user with the appropriate permissions. See the [Configure a User Profile](../../user-guide/set-up/user-profile-configuration) topic for additional information.

Users require the `/Custom/ProvisioningPolicy/AssignedRoles/{EntityType}` permission to access the Assigned Roles page.

The following example provides the rights for the Administrator profile to access the Assigned Roles page on the **Entity Type** `Directory_User`. See the [Create a Provisioning Rule](../../user-guide/set-up/provisioning-rule-creation) and [Create Roles in the Role Catalog](../../user-guide/set-up/single-roles-catalog-creation) topics for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```xml
<AssignedRolesAccessControlRules EntityType="Directory_User" Profile="Administrator" />
```

## Default Filters

When you open the Assigned Roles page, several filters are available, based on your configuration, to help you narrow down and focus on specific role assignments.

For information about configuring custom search bars, see [Custom Search Bar](../../integration-guide/ui/how-tos/custom-search-bar/#default-search-bar).

The default filters include:

* **Policy** — Filter by the governing policy associated with a role
* **Role** — Filter by a specific role to see all users who hold that assignment
* **Assignments ending before** — Filter by end date using a date picker to find expiring assignments
* **Workflow State** — Filter by the current state within a workflow (e.g., Approved, Calculated, Pre-existing)
* **Category Filtering:** Use the category selector in the left sidebar to view assignments organized by role category (e.g., Career Management, Payroll). 

Multiple filters can be combined simultaneously. Use filters to isolate specific assignments before multi-select operations.

## Review Assigned Roles

Review the Assigned Roles by proceeding as follows:

![assignedroles](/images/identitymanager/user-guide/administrate/assigned-roles/assignedroles.webp)

**Step 1 –** On the home page, in the Administration section of the UI click on Assigned Roles.

![assignedrolesscreen](/images/identitymanager/user-guide/administrate/assigned-roles/assignedrolesscreen.webp)

**Step 2 –** View the list of users with different assigned roles and filter them by **Entity Type**, **Workflow State**, **Policy**, **Role** or by using a custom filter.

:::note Role Display
Roles display their category hierarchy based on the selected category (e.g., Haunes > Administrator). The page shows both manual and automatic role assignments, including parameterized roles, with assignment metadata (workflow state, dates).
:::

## Edit Assignments

To edit dates and comments for multiple assignments simultaneously:

1. Use filters to display the assignments you want to modify.
2. Click the **Edit** button in the action bar.
3. Select the assignments by clicking their checkboxes.
4. In the "Update assigned roles" panel:
 - Review the selected owners and roles
 - Edit start/end dates
 - Add comments if needed
 - Update parameters if the selected roles are parameterized
5. Review and confirm your changes.

Changes take effect immediately and apply to all selected assignments.

:::tip
When editing multiple assignments, ensure they share compatible characteristics (same role, similar dates) to avoid conflicts.
:::

:::tip
Use multi-select editing when you need to extend expiration dates for a group of temporary assignments, or to add comments to multiple related permissions at once.
:::


**Note:** Some assignments may display a lock icon instead of a checkbox, indicating they cannot be selected due to permissions or workflow constraints.

## Remove Assignments

To remove multiple role assignments at once:

1. Apply filters to display the assignments you want to remove (e.g., filter by a specific role or department).
2. Click the **Remove** button in the bottom action bar.
3. Select the assignments using checkboxes. The selection count updates as you select more rows.
4. A success notification will confirm the removal, and the assignment list will refresh automatically. If any removals fail, an error notification will provide details.

:::caution Important Considerations
- **Cannot be undone**: Removal operations cannot be reversed from this screen. If you remove assignments in error, they must be re-requested through the assignment workflow.
- **Permission impact**: Ensure that removing a role does not unintentionally revoke permissions users require for their day-to-day responsibilities.
- **Locked assignments**: Assignments with lock icons cannot be selected or removed due to workflow constraints.
:::

:::tip Best Practice
Before removing multiple assignments, use specific filters to narrow the list to only the assignments you intend to remove. Double-check the selection count and review the confirmation message carefully before proceeding.
:::

## Assign Roles

Use the Assign Roles workflow to assign one or more roles to one or more users simultaneously.

### Starting the Assignment Workflow

1. Click the **+ Assign roles** button at the top left of the page.
2. The "Assign roles" panel opens on the right side, showing **Step 1: Select owner and role**.

### Step 1: Select Owners and Roles

**Selecting Users (Owners):**

1. In the **Owner** search field, begin typing a user's information.
2. Click a user to select them. The selected user appears as a chip (removable tag) above the search field.
3. **To select multiple users**: Continue typing and selecting additional users. Each selected user is added as a chip.

:::info
When selecting users, the AutocompleteBinding of the DisplayEntityType is taken into consideration. The configuration should be modified to correspond to the correct binding.

One should note that an evolution will be made in a future release to add several autocomplete bindings.

**Owner Filtering:** The list of available owners is filtered by the criteria applied on the main Assigned Roles page. Click **Remove filters** if you need to access users outside the current filter scope.
:::

**Selecting Roles:**

1. Below the owner section, browse the **Roles** list organized by category hierarchy.
2. Use the **Role** search field to filter roles by name if needed.
3. Click the radio button circle next to a role to select it.
4. **To select multiple roles**: Click additional role radio buttons. Selected roles are indicated with blue filled circles.
5. The selection counter at the bottom shows how many roles are selected (e.g., "2 rows selected").

Roles are displayed with their hierarchy path (e.g., "Career Management > Larissa > Administrator") and are filtered based on the category of the main Assigned Roles page.

### Step 2: Configure Assignment Details

1. Click **Next** to proceed to the next step of the workflow.
2. Specify assignment dates:
   - **Start Date**: Adjust when the role assignment becomes effective
   - **End Date**: Optionally set an expiration date for the assignment
3. Add any comments to document the business justification for the assignment.
4. Specify role parameters, if at least one of the roles is parameterized.

### Step 3: Confirm and Complete

1. Review all assignment details carefully.
2. Click **Confirm** to create the role assignments.
3. The system creates the assignments and displays a success notification.
4. The newly assigned roles appear in the Assigned Roles list once the operation completes.

:::warning Risk Behavior
If assigning a role would introduce a blocking risk violation (e.g., segregation of duties conflict), that specific role assignment will not be created. No notification is provided for blocked assignments.

Similarly, if assigning a role would introduce a warning, it will be added without a warning being raised.

A future release will include a summary indicating which role assignments were blocked due to risk violations and which assignments present a warning.
:::

## Download Report

The Assigned Roles page includes a **download button** in the upper-right corner. Click this button to export the current view as an Excel (**.xlsx**) file.

To download the report:

1. Apply filters to narrow the list of assigned roles.
2. Click the **download button** in the upper-right corner.
3. The file downloads automatically as an **.xlsx** file containing all role assignments visible in the current filtered view.
