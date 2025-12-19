---
title: "Owner List"
description: "Owner List"
sidebar_position: 10
---

# Owner List

Access your **Owner List** from your menu bar. This is where Administrators can add or remove owners
from reviews. All changes are captured in the [UAR History](/docs/platgovnetsuite/uar/adminoverview/uar_history.md).

Auditors can view the Owner list and Owner notes, but cannot add or remove owners.

Here is an example of the **Owner List**:

![Administrator Owner list](/images/platgovnetsuite/uar/uar_admin/owner_list.webp)

## Filters

Filters help you organize your Owner list.

Use **Clear** to reset the Filters.

- **Center Type** Select from the drop down list. **All** is the default.
- **Role Type of Review** Displays **Both**, **Custom** only, or **Standard** only roles in the
  list.
- **Owner** Select from the drop down list. **All** is the default.
- **Role** Select from the drop down list. **All** is the default.
- Select either **All Roles** (default) or **Roles with missing Owners**.

## Owner List

- **Undo** undoes all actions that have not been submitted.
- **Export** exports the list of selected reviews as either a **CSV** or **PDF** file. The exported
  file is named _Owner_List_.
- **Remove Owner** removes the owner from the selected roles.
- **Add Owner** add owners to the selected roles.
- **Save** saves your changes.
- **Role** is the role to be reviewed.
- **From Bundle** the bundle number if applicable.
- **Custom/Standard** the role type.
- **Center Type** the center for the role.
- **Role Membership Owner** the user assigned to the role membership.
- **Role Permission Owner** the user assigned to the role permissions.
- **Access Owner** the user assigned to the role access.

### Add Owner

**Add Owner** is an option on the administrator Owner List.

1. Open **Owner List** from your menu bar.
2. Click **Add Owner** to add a new role.

    ![Add Owner](/images/platgovnetsuite/uar/uar_admin/add_owner.webp)

3. **Select Role** from the drop down. From Bundle, Custom/Standard and Center Type are
   automatically added.
4. Select users from the drop downs for the ownership roles.
5. Click **Save** when your changes are complete.

### Change Owner

You can change any of the owners from the Owner List.

1. Open **Owner List** from your menu bar.
2. Select an existing role. The drop down lists for the ownership roles are displayed.
3. Select users from the drop downs for the ownership roles.
4. Click **Save** when your changes are complete.

### Remove Owner

**Remove Owner** is an option on the administrator's Owner List.

1. Open **Owner List** from your menu bar.
2. Select the role.
3. Click **Remove Owner**. All ownership roles are removed.
4. Click **Save** when your changes are complete.

### Owner Notes

The **Owner Notes** tab displays the details for each change in the Owner List. Click the **Owner
Notes** tab to access this detail. You can filter the Owner Notes by **Create Date**.

![Owner notes](/images/platgovnetsuite/uar/uar_admin/owner_notes.webp)

1. Open **Owner List** from your menu bar.
2. Open the **Owner Notes** tab.
3. You can export the list as a CSV or PDF file. The file is named _Owner_Notes_.

The notes have the following fields:

- **Date**: the creation or update date for the record.
- **Set By**: the user that created or updated the record.
- **Type**: the change performed.

    - **Set**: field was assigned a value.
    - **Change**: field was updated from a value to another value.
    - **Remove**: when the permission was removed.

- **Field**: the field that was set or updated.
- **Old Value**: the previous field value.
- **New Value**: the new field value.
- **Role**: the affected role.
