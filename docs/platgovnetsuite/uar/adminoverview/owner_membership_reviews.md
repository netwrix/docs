---
title: "Membership Reviews"
description: "Membership Reviews"
sidebar_position: 40
---

# Membership Reviews

This type of review is used to keep your roles up to date. When you click on a membership review,
the list of users with the role is displayed. The links open the appropriate record in NetSuite, for
example the **User** link opens the **User** record. Access membership reviews from **UAR List** in
your menu bar, or one of the review shortcuts.

:::note
Reviews open on the **Review** tab. The **Review Notes** tab lists the review details for the
review.
:::

![Membership review](/images/platgovnetsuite/uar/uar_owner/membership_review.webp)

## Membership Review Actions

You can perform these actions as part of your review:

- Review and Complete Role Membership Review
- Remove Users from the Role
- Assign an Additional Reviewer
- Complete the Membership Review

Once an action is taken, the Membership review changes to **In Progress**.

Other available actions:

- **Undo**: undoes all actions that have not been submitted.
- **Export**: exports the UAR list as a CSV or PDF file.
- **Submit**: submits the current changes.
- **Complete Review**: marks the review complete. All rows must be completed (**Complete** or
  **CR Complete** status) before the **Complete Review** action is available. The complete review is
  displayed in the UAR History. No further actions can be taken.
- **Back**: returns you to the UAR list.

### Review and Complete Role Membership Review

This display provides a global view of the user's access.

- **User**: the person assigned the role.
- **Supervisor**: the User's supervisor.
- **Global Permissions**: any global permissions assigned to this user.
- **Other Roles**: all roles assigned to this user.
- **SoD Violations**: any existing SoD violations for this user. Only applicable if your
  organization uses SoD.
- **Status**: the current review status. Can be **Not Started**, **Completed**, **Change Request**,
  **CR Approved**, **CR Rejected**, **CR Cancelled**, **CR Complete**, or **Additional Reviewer**.
- **Change Request ID**: if a change request is created, the linked number is added.
- **Reason for Change**: brief description of why the change is submitted.
- **Change Request Comments**: comments entered on the change request.
- **Additional Reviewer**: you can add an additional reviewer to approve the access. For example,
  you are the role owner, but the user reports to a different manager. You can specify that manager
  as an Additional Reviewer to verify the role.

1. Select the user.
2. Review their Global Permissions, Other Roles, and SoD Violations. The links all open the specific
   records for further review. If the user should retain the role, click **Mark Completed**. The
   status is updated. You cannot undo this action.
   ![Mark user as reviewed](/images/platgovnetsuite/uar/uar_owner/mark_complete.webp)

### Remove Users from the Role

To remove one or more users from the role:

1. Select the user.
2. Review their Global Permissions, Other Roles, and SoD Violations. The links all open the specific
   records for further review. If the user should be removed from the role, click **Remove Role
   Membership**. The user line is highlighted. Click **Undo** to cancel changes that have not be
   submitted.
3. Click **Submit**.
4. Enter a brief description of why the change is requested when prompted for the **Reason for
   Change**. Click **Accept** when complete.

    ![Reason for change](/images/platgovnetsuite/uar/uar_owner/change_request_reason.webp)

    A Change Request is generated for each user removed from the role. Status is changed to either
    **Change Request** and the **Change Request ID** added, or **Waiting for CR** if there is an
    existing change request in progress as part of another review. Click the **Change Request ID**
    to open the Change Request.

    ![Remove a user from a role](/images/platgovnetsuite/uar/uar_owner/remove_user_from_role.webp)

    If the Change Request is rejected (**CR Rejected status**) or canceled (**CR Cancelled**), the
    user row is returned to a pending state and can then be reviewed again. Use the Change Request
    ID link to open the Change Request and review the **Approver Comments** for more information.

### Assign an Additional Reviewer

You can add additional reviewers to the review:

1. Select the user.
2. Select an additional reviewer from the drop down list.
   ![Assign an additional reviewer](/images/platgovnetsuite/uar/uar_owner/additional_user_assign.webp)
   The user line is highlighted. You can click **Undo** to cancel the addition before you click
   **Submit**.
3. Click **Submit** or make additional changes.
   ![Assigning an additional user](/images/platgovnetsuite/uar/uar_owner/additional_user_assign2.webp)
   The line is highlighted, the status updated, and the email notification is sent to the reviewer.
   You can no longer undo this action.

### Complete the Membership Review

Each row must be in the **Complete** or **CR Complete status**, with all change requests finished
before you can click **Complete Review**. Once a review is complete, no further changes can be made.

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
