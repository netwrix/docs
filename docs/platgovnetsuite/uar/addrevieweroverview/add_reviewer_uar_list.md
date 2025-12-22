---
title: "User Access Reviews List"
description: "User Access Reviews List"
sidebar_position: 10
---

# User Access Reviews List

Access your Additional Reviewer list from **UAR List** in your menu bar, or one of the review
shortcuts. Your UAR List displays either the list of Global Reviews or Single Reviews. The view is
controlled with the **Sort By** selection in the Filters section.

Here is an example of the **Global** review list:

![UAR list additional reviewer](/images/platgovnetsuite/uar/uar_additional_reviewer/additional_user_uar_list.webp)

## Filters

Filters help you organize your UAR list.

Use **Clear** to reset the Filters.

- **Create Date** Use the data picker to select a date. Dates are optional and not set by default.

    - First Date field only: All reviews created from the specified date to the current date are
      listed.
    - Second Date field only: All reviews created before the specified date are listed.
    - Both Date fields: All reviews created in the date range are listed.

- **Status** Select from the drop down list. **All** is the default.
  Possible statuses are **Not Started**, **Pending Assignment**, **In Progress**, **Complete**,
  **Cancelled** and **Waiting for CR**.
- **Sort By** Displays a list of either **Global Reviews** or **Single Reviews**. **Global Reviews**
  are displayed by default.

## UAR List

- **Name** is a link. For a **global** review, the link opens the Review list showing all of the
  associated reviews. For a **single** review the [Membership](/docs/platgovnetsuite/uar/addrevieweroverview/add_reviewer_membership_reviews.md)
  or [Permission ](/docs/platgovnetsuite/uar/adminoverview/owner_permission_reviews.md)**Review** tab is opened. Reviews can
  also be opened via links in dashboard or email **Notifications**.
- **Number of Reviews** (global) is the number of single reviews in the global review.
- **Review Type** is the type of review. Global can be **Both**, **Membership**, or **Permission**.
  Single is **Membership** or **Permission**. The review type is set when the review is created.
- **Status** Current status of the review:

    - **Pending Assignment** Review does not have an assigned owner.
    - **Not Started** Email notification has been sent, review has not been started.
    - **In Progress** Review has been started.
    - **Additional Reviewer** Review has been assigned to an additional reviewer.
    - **Change Request** Change request has been created. The **Change Request ID** is added to the
      row. The link opens the Change Request. **CR Rejected**, **CR Cancelled**, and **CR Complete**
      are the other Change Request status values.
    - **Waiting for CR** Change request cannot be started, because there is an existing change
      request in progress for the role or permission as part of a different global review. Once the
      existing change request is complete, the current review can continue.
    - **Cancelled** Review has been canceled. Canceled global reviews are shown in the UAR History
      list. Canceled single reviews are shown in the global review.
    - **Completed** All of the rows within the review have been marked **Complete**.

- **Create Date** the date the administrator created the review.
- **Created By** the administrator who created the review.
- **Last Owner Update** the date the last change was submitted for the review.

## Review List

When you open a global review using the **Name** link in the UAR list, the Review list is displayed,
showing all of the single reviews associated with the global review.

![Review list of associated single reviews under a global review](/images/platgovnetsuite/uar/uar_owner/review_list.webp)

- **Export** exports the list of selected reviews as either a **CSV** or **PDF** file. The exported
  file is named _Reviews_Group_List_.
- **Extract Membership Detail** creates a CSV file (_Membership_Report.csv_) of the membership
  details for the reviews.
- **Extract Permission Detail**creates a CSV file (_Permission_Report.csv_) of the permission
  details for the reviews.
- **Review Name** is a link to the [Membership](/docs/platgovnetsuite/uar/addrevieweroverview/add_reviewer_membership_reviews.md) **Review** tab.
  Reviews can also be opened via links in dashboard or email **Notifications**.
- **Role Name** the role being reviewed.
- **Review Type** is the type of review: **Membership** or **Permission**. The review type is set
  when the review is created.
- **Status** Current status of the review:

    - **Pending Assignment** Review does not have an assigned owner.
    - **Not Started** Email notification has been sent, review has not been started.
    - **In Progress** Review has been started.
    - **Additional Reviewer** Review has been assigned to an additional reviewer.
    - **Change Request** Change request has been created. The **Change Request ID** is added to the
      row. The link opens the Change Request. **CR Rejected**, **CR Cancelled**, and **CR Complete**
      are the other Change Request status values.
    - **Waiting for CR** Change request cannot be started, because there is an existing change
      request in progress for the role or permission as part of a different global review. Once the
      existing change request is complete, the current review can continue.
    - **Cancelled** Review has been canceled. Canceled global reviews are shown in the UAR History
      list. Canceled single reviews are shown in the global review.
    - **Completed** All of the rows within the review have been marked **Complete**.

- **Created By** the administrator who created the review.
- **Create Date** the date the administrator created the review.
- **Due Date** an optional due date assigned by the administrator.
- **Complete Date** the date the review was completed.

Continue with the procedures to complete your Additional Reviewer
[Membership](/docs/platgovnetsuite/uar/addrevieweroverview/add_reviewer_membership_reviews.md) reviews.
