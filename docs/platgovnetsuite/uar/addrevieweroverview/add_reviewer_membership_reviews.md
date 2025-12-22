---
title: "Additional Reviewer Membership Reviews"
description: "Additional Reviewer Membership Reviews"
sidebar_position: 20
---

# Additional Reviewer Membership Reviews

This type of review is used to keep your roles up to date. When you click on a membership review,
the list of users with the role is displayed. The links open the appropriate record in NetSuite, for
example the **User** link opens the **User** record.

As an **Additional Reviewer**, you can only review Users in the Role Membership that are assigned to
you. Look for rows with no highlighting, with the **Status** of **Additional Reviewer** assigned to
you.

:::note
Reviews open on the **Review** tab. The **Review Notes** tab lists the review details for the
review.
:::

![Opening a review as an additional user](/images/platgovnetsuite/uar/uar_additional_reviewer/additional_user_review.webp)

## Membership Review Actions

You can perform these actions as part of your review:

- Review and Complete Role Membership Review
- Remove Users from the Role

Other actions:

- **Undo**: undoes all actions that have not been submitted.
- **Export**: exports the UAR list as a CSV or PDF file.
- **Submit**: submits the current changes.

### Review and Complete Role Membership Review

This display provides a global view of the user's access.

- **User**: the person assigned the role.
- **Global Permissions**: any global permissions assigned to this user.
- **Other Roles**: all roles assigned to this user.
- **SoD Violations**: any existing SoD violations for this user. Only applicable if your
  organization uses SoD.
- **Status**: the current review status. Can be **Not Started**, **Completed**, **Change Request**,
  **CR Approved**, **CR Rejected**, **CR Cancelled**, **CR Complete**, or **Additional Reviewer**.
- **Change Request ID**: if a change request is created, the linked number is added.
- **Change Request Comment**s: approver comments added to the change request are displayed.
- **Additional Reviewer**: the additional reviewer assigned to the role.

1. Select the user.
   ![Reviewing user roles](/images/platgovnetsuite/uar/uar_additional_reviewer/additional_user_reviewer_review.webp)
2. Review their Global Permissions, Other Roles, and SoD Violations. The links all open the specific
   records for further review. If the user should retain the role, click **Mark Completed**. The
   status is updated. You cannot undo this action.
   ![Mark your review complete](/images/platgovnetsuite/uar/uar_additional_reviewer/additional_user_reviewer_complete.webp)
3. Click **Submit** or make additional changes.

### Remove Users from the Role

To remove one or more users from the role:

1. Select the user.
2. Review their Global Permissions, Other Roles, and SoD Violations. The links all open the specific
   records for further review. If the user should be removed from the role, click **Remove Role
   Membership**. The user line is highlighted. Click **Undo** to cancel changes that have not be
   submitted.
3. Click **Submit** or make additional changes. A Change Request is generated for each user removed
   from the role. Status is changed to either **Change Request** and the **Change Request
   ID** added, or **Waiting for CR** if there is an existing change request in progress as part of
   another review. Click the **Change Request ID** to open the Change Request.
   ![Remove a role](/images/platgovnetsuite/uar/uar_additional_reviewer/additional_user_review_remove.webp)
   If the Change Request is rejected (**CR Rejected status**) or canceled (**CR Cancelled**), the
   user row is returned to a pending state and can then be reviewed again.
   ![Remove a user from a role](/images/platgovnetsuite/uar/uar_owner/remove_user_from_role.webp)
   If
   the Change Request is rejected (**CR Rejected status**) or canceled (**CR Cancelled**), the user
   row is returned to a pending state and can then be reviewed again.

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
