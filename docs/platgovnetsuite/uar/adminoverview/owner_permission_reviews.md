---
title: "Permission Reviews"
description: "Permission Reviews"
sidebar_position: 50
---

# Permission Reviews

This type of review is used to keep your role permissions up to date. When you click on a permission
review, the permissions list is displayed. Access permission reviews from **UAR List** in your menu
bar, or one of the review shortcuts.

:::note
Reviews open on the **Review** tab. The **Review Notes** tab lists the review details for the
review.
:::

![Permission Review](/images/platgovnetsuite/uar/uar_owner/permission_review.webp)

## Filters

Filters help you organize your Permissions review list:

- **Level**: Permission Level can be **All** (default), **View**, **Create**, **Edit** or **Full**.
- **Category**: Permission Category can be **All** (default), **Transactions**, **Reports**,
  **Lists**, **Setup**, or **Custom Records**.
- **Role Permission**: Full list of all of your defined permissions. **All** is the default.
- **GL Impact**: Impact can be **All** (default), **No**, or **Yes**.
- **Permission Risk Severity**: can be**All** (default), **Low**, or **High**.
- **Status**: Status can be **All** (default), **Not Started**, **Complete**, **Change Request**,
  **CR Approved** or **CR Complete**.

Use **Clear** to reset the Filters.

## Permission Review Actions

You can perform these actions as part of your review:

- Review and Complete Permission Review
- Change Permission Level
- Add a Permission
- Complete the Permission Review

Once an action is taken, the Permission review changes to **In Progress**.

Other available actions:

- **Undo**: undoes all actions that have not been submitted.
- **Refresh**: reloads the UAR list.
- **Export**: exports the UAR list as a CSV or PDF file.
- **Submit**: submits the current changes.
- **Complete Review**: marks the review complete. All rows must be completed before the **Complete
  Review** action is available. The complete review is displayed in the UAR History. No further
  actions can be taken.

### Review and Complete Permission Review

1. Select one or more **Role Permissions**.
2. Review the **Permission** and the **Level** are appropriate for the role. If correct, click
   **Mark Completed**. The status is updated. You cannot undo this action.
   ![Mark the Permission review complete](/images/platgovnetsuite/uar/uar_owner/permission_review_complete.webp)

### Change Permission Level

To change a permission level:

1. Select one or more **Role Permissions**.
2. Select a **Level** for the permission: **None** (removes the permission), **View**, **Create**,
   **Edit**, or **Full**. Not all levels are available for every permission. For standard roles, the
   administrator must create a new custom role for the requested changes.
3. Click **Submit**.
4. Enter a brief description of why the change is requested when prompted for the **Reason for
   Change**. Click **Accept** when complete.

    ![Reason for change](/images/platgovnetsuite/uar/uar_owner/change_request_reason.webp)

    A Change Request is generated for each level change. Status is changed to either **Change
    Request** and the **Change Request ID** added, or **Waiting for CR** if there is an existing
    change request in progress as part of another review. Click the **Change Request ID** to open
    the Change Request.

    ![Change requests for Level changes](/images/platgovnetsuite/uar/uar_owner/permission_review_cr.webp)

    If the Change Request is approved, the status changes to **CR Approved**. If the Change Request
    is rejected (**CR Rejected status**) or canceled (**CR Cancelled**), the permission row is
    returned to a pending state.

5. You can click on the **Change Request ID** link and review the **Approver Notes**.

### Add a Permission

To add a permission:

1. Click + **Add**.
   ![Add a permission](/images/platgovnetsuite/uar/uar_owner/permission_review_add.webp)
2. Select the **Permission**, **Category**, and **Level**.
3. Click **Submit**.
4. Enter a brief description of why the change is requested when prompted for the **Reason for
   Change**. Click **Accept** when complete.

    A Change Request is generated for each new permission. Status is changed to either **Change
    Request** and the **Change Request ID** added, or **Waiting for CR** if there is an existing
    change request in progress as part of another review. Click the **Change Request ID** to open
    the Change Request.

    ![Adding a new permission](/images/platgovnetsuite/uar/uar_owner/permission_review_add2.webp)

    If the Change Request is rejected or canceled, the added permission row is removed from the
    list.

### Complete the Permission Review

Each permission must be in the **Complete** or **CR Complete status**, with all change requests
finished before you can click **Complete Review**. Once a review is complete, no further changes can
be made.

![Permission review complete when all rows are complete](/images/platgovnetsuite/uar/uar_owner/permission_review_complete.webp)

When you click **Complete Review**, the review status is updated to **Complete**, and the review is
added to the [UAR History](/docs/platgovnetsuite/uar/adminoverview/uar_history.md).

## Review Notes

Every record has review notes with details about the changes. Only submitted changes are captured.
The UAR list opens on the **Review** tab. Click **Review Notes** to open the notes tab. You can
**Export** the notes as a CSV or PDF file.

![Open the Review Notes tab](/images/platgovnetsuite/uar/uar_owner/review_notes_tab.webp)

The notes have the following fields:

- **Date**: the creation or update date for the record.
- **Set By**: the user that created or updated the record.
- **Type**: the change performed.

    - **Set**: field was assigned a value.
    - **Change**: field was updated from a value to another value.
    - **Edit Permission**: when the permission was changed.
    - **Mark Complete**: when permission is marked complete.
    - **Remove**: when the permission was removed.

- **Field**: the field that was set or updated.
- **Old Value**: the previous field value.
- **New Value**: the new field value.
- **Role**: the affected role.
