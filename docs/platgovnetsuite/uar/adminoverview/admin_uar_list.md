---
title: "Administrator UAR List"
description: "Administrator UAR List"
sidebar_position: 30
---

# Administrator UAR List

Access your owner User Access Reviews List from **UAR List** in your menu bar, or one of the review
shortcuts. Your UAR List displays either the list of Global Reviews or Single Reviews. The view is
controlled with the **Sort By** selection in the Filters section. All changes are captured in the
[UAR History](/docs/platgovnetsuite/uar/adminoverview/uar_history.md).

Here is an example of the **Global** review list:

![Administrator UAR list](/images/platgovnetsuite/uar/uar_admin/admin_uar.webp)

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
- **Type of Review** (single) Displays **Both**, **Membership** only, or **Permission** only reviews
  in the Review list.

## UAR List

- **Undo**: undoes all actions that have not been submitted.
- **Export** exports the list of selected reviews as either a **CSV** or **PDF** file. There is an
  option to **Export All Reviews**. The exported file is named _User_Access_Reviews_List_.
- **Create Review** creates a new Global review or adds a Single review to an existing Global
  review.
- **Send Reminders** send email reminders to the owners of the selected reviews.
- **Cancel Review** cancels one or more selected reviews. Any associated open Change Requests are
  also canceled.
- **Name** is a link to the Review list.
- **Number of Reviews** (global) is the number of single reviews in the global review.
- **Review Type** is the type of review. Global can be **Both**, **Membership**, or **Permission**.
  Single is **Membership** or **Permission**. The review type is set when the review is created.
- **Owner** (single) is the owner of the role review type.
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

- **Created On** the date the administrator created the review.
- **Created By** the administrator who created the review.
- **Last Owner Update** the date the last change was submitted for the review.
- **Back** returns you to the previous screen.

### Create a New Review

**Create Review** is an option on the administrator's UAR List.

1. Open **UAR List** from your menu bar or a shortcut.
2. Click **Create Review**.

    ![Create a review](/images/platgovnetsuite/uar/uar_admin/create_review1.webp)

3. Select **Single Review** to add to an existing review, or **Global Review** to start a new
   review. This example shows the Add to an Existing Review option.

    ![Create a review](/images/platgovnetsuite/uar/uar_admin/create_review2.webp)

4. Use the drop down to **Select Global Review** this option is only if you chose **Single**. It is
   not available if you are creating a new **Global** review. The existing information for the
   Global review is populated.
5. Add or remove one or more roles. The left pane shows all the available roles, the right pane
   shows the roles you have added. The **Add all active roles** shows active roles in the left pane.
   It toggles to **Show all active and assigned roles** in the left pane. You cannot change
   permissions on Standard roles or the Administrator role..
6. Select **Type of Review**. This is only available if you are creating a new **Global** review.
   You can select one or both options.
7. **Due Date for This Review**. Specify an optional due date.
8. Assign a **Review Name**. This is only available if you are creating a new **Global** review.
9. Click **Create**.

Owners are assigned on the administrator's [Owner's List](/docs/platgovnetsuite/uar/adminoverview/admin_owner_list.md), available on your
menu.

### Cancel a Review

**Cancel Review** is an option on the administrator's UAR List and on the Review list.

1. Open the **UAR List** from your menu bar or a shortcut.
2. Select one or more Reviews.
3. Click **Cancel Review**. Any open change requests are canceled.

    ![Cancel a review](/images/platgovnetsuite/uar/uar_admin/cancel_review.webp)

4. Click **Accept**.

### Send Reminders

Reminders can be sent from the administrator's UAR List or from the Review list.

1. Open the UAR List from your menu bar or a shortcut.
2. Select one or more reviews.
3. Click **Send Reminders**. Reminders are sent immediately.
4. Click **Accept** to exit.

## Review List

Clicking on a **Name** in the UAR List opens the Review List. Here is an example.

![Review List](/images/platgovnetsuite/uar/uar_admin/admin_review_list.webp)

### Filters

Filters help you organize your Review list.

Use **Clear** to reset the Filters.

- **Create Date** Use the data picker to select a date. Dates are optional and not set by default.

    - First Date field only: All reviews created from the specified date to the current date are
      listed.
    - Second Date field only: All reviews created before the specified date are listed.
    - Both Date fields: All reviews created in the date range are listed.

- **Status** Select from the drop down list. **All** is the default.
  Possible statuses are **Not Started**, **Pending Assignment**, **In Progress**, **Complete**,
  **Cancelled** and **Waiting for CR**.
- **Role** Select the role from the drop down list. **All** is the default.
- **Type of Review** Displays **Both**, **Membership** only, or **Permission** only reviews in the
  Review list.
- **Owner** Select from the drop down list.

### Review List Actions

There are various actions you can perform from this list:

- **Export** exports the list of selected reviews as either a **CSV** or **PDF** file. The exported
  file is named _Reviews_Group_List_.
- **Send Reminders** send email reminders to the owners of the selected reviews.
- **Cancel Review** cancels one or more selected reviews. Any associated open Change Requests are
  also canceled.
- **Extract Membership Detail** creates a CSV file (_Membership_Report.csv_) of the membership
  details for the reviews.
- **Extract Permission Detail**creates a CSV file (_Permission_Report.csv_) of the permission
  details for the reviews.
- **Review Name** is a link to the [Membership](/docs/platgovnetsuite/uar/adminoverview/owner_membership_reviews.md) or
  [Permission ](/docs/platgovnetsuite/uar/adminoverview/owner_permission_reviews.md)**Review** tab. Reviews can also be opened
  via links in dashboard or email **Notifications**. The Review tab and Review notes tab is the
- **Role Name** the role being reviewed.
- **Review Type** is the type of review: **Membership** or **Permission**. The review type is set
  when the review is created.
- **Owner** Current review owner.
- **Status** Current status of the review:

    - **Pending Assignment** Review does not have an assigned owner.
    - **Not Started** Email notification has been sent, review has not been started.
    - **In Progress** Review has been started.
    - **Additional Reviewer** Review has been assigned to an
      [additional reviewer](/docs/platgovnetsuite/uar/adminoverview/owner_membership_reviews.md).
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
- **Due Date** an optional date assigned by the administrator for the review.
- **Complete Date** the date the review was completed.
