---
title: "View and Search Helpdesk History in Directory Manager"
description: "View, search, sort, and export the history of end-user and helpdesk actions tracked in Directory Manager identity stores."
keywords:
  - helpdesk history
  - audit password resets
  - history details
  - export history
  - identity store actions
sidebar_position: 20
---

# View and Search Helpdesk History in Directory Manager

Directory Manager tracks the following actions performed by end users and helpdesk users in an identity store. It displays them as history to helpdesk users:

- Unenroll account
- Sending of secure link for password reset by helpdesk
- Change Password
- Reset Password
- Unlock Account
- Link Account
- Unlink Account
- Enroll account
- Authenticate with password, authentication types, or any other medium

Use history to audit and analyze your security. For example, see how many users changed their passwords in the last X days or reset their passwords using a secure link. You can also verify the identity of a user through the last action they performed.

## View history in Helpdesk

1. In Admin Center, click **Helpdesk** in the left pane.
2. On the **Helpdesk** page, click the **History** tab. This tab displays the tracked history actions for all identity stores in Directory Manager. Use the pagination options at the bottom of the listing to navigate through records.

To search for specific records, see [Search history](#search-history).

### Switch history layouts

You can view history in two layouts:

- **Basic view:** displays history in a friendly, descriptive manner.
- **Administrative view:** displays history in tabular form.

In both layouts, click **Details** for an item to view more details.

You can also export history to Microsoft Excel, CSV, and XML formats.

To switch layouts:

- In the Basic view, click the **Switch to Administrative View** button to view history in Administrative layout.
- In the Administrative view, the button changes to **Switch to Basic View**. Click it to view history in Basic layout.

#### View history in Basic layout

By default, the **History** tab of the **Helpdesk** page displays history in the Basic view. This view lists the tracked actions in meaningful sentences.

Click **Details** for a history item to launch the **History Details** dialog box. It displays the following:

- **Display name:** the user on whom the action was performed.
- **Identity store:** the identity store the action was performed in.
- **Action:** the action performed.
- **Authentication type:** the authentication types the user used to authenticate to perform the action. For some actions performed by helpdesk, such as sending a secure link for password reset, no authentication type is displayed. For other actions such as unenroll, the authentication type for which the end user is unenrolled is displayed.
- **Status:** whether the action was performed successfully or not.
- **Date/Time:** the date and time the action was performed.
- **Performed by:** the user who performed the action.
- **Client name:** the name of the Directory Manager client the action was performed from.
- **Helpdesk action:** whether the action was performed through helpdesk or not.
- **Machine name:** the name of the machine the action was performed from.
- **IP:** the IP address of the machine the action was performed from.
- **Browser:** the name of the browser used to perform the action.
- **Device type:** the device type used to perform the action, such as PC/laptop or mobile.

Click **Close** to close the dialog box.

#### View history in Administrative layout

The Administrative layout displays history in a table. On the **History** tab of the **Helpdesk** page, click **Switch to Administrative View**.

The following information is displayed for a record:

- **Name:** the name of the user the action was performed on
- **Client Name:** the name of the Directory Manager client the action was performed from.
- **Identity Store:** the identity store the action was performed in
- **Action:** the action performed
- **Date:** the date and time the action was performed

Click **Details** for a history item to view its details in the **History Details** dialog box. For the fields in the dialog box, see [View history in Basic layout](#view-history-in-basic-layout).

Use the pagination options at the bottom of the listing to navigate through records.

#### Sort the listing

History records on the **History** tab of the **Helpdesk** page are sorted in chronological order, with the latest action at the top.

You can sort the listing in the Administrative view by any column name in the header row. Click a column name to sort the listing by that attribute. An arrow appears next to the column name.

- The upward arrow head indicates that the list is sorted in ascending order.
- The downward arrow head indicates that the list is sorted in descending order.

Click the arrow to change the order from ascending to descending and vice versa.

## Search history

You can search for history records in all the identity stores or specific identity stores. Enter the name of a user to view all actions performed for it, whether by that same user or by another user, such as helpdesk. You can also create a filter based on multiple attributes to search for specific records.

To perform a search:

1. In Admin Center, click **Helpdesk** in the left pane.
2. On the **Helpdesk** page, click the **History** tab.
3. On the **History** tab, use the following search options:

   - **Identity Store list** - To get the history records for one or more specific identity stores, click in the **Identity Store** box. Select the checkboxes for the identity stores you want to view the history for.
   - **Search box to search for records specific to a user** - In the **Search** box, enter a user's full name or part of a name and press **Enter**. Directory Manager displays all history actions that are performed by or performed on the user.
   - **Search filter** - Click **Filter**. In the **Filters** dialog box, search the history data using the available filters individually or in combination.

     - **Date Logged:** Specify a time period to view history data for. Click in the box and use the calendar to select a date range.
     - **Performed By:** Specify whether you want to view the actions performed by end users, helpdesk users, or both.
     - **Device Type:** Specify a device type (PC/laptop, mobile, or both) to view actions that have been performed using that device type.
     - **Status:** Specify whether you want to view successful actions, failed actions, or both successful and failed actions.
     - **Action Type:** Select an action to view the history records for it. When you select **Enrollment** or **Authenticate**, another dropdown list appears with the authentication types. Select an option to view the enrollment or authentication actions performed using that specific type.

4. Click **Apply**. History records matching the given criteria are displayed.

## Export history to a file

1. In Admin Center, click **Helpdesk** in the left pane.
2. On the **Helpdesk** page, click the **History** tab.
3. On the **History** tab, you can export all history records in all identity stores to a file or filter the listing to export specific records only. To narrow down records, see [Search history](#search-history).
4. Click **Export History** and select a file format in the list to export history data to. The file is saved to the download location specified in your browser settings.
