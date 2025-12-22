---
title: "Notify Users to Enroll"
description: "Notify Users to Enroll"
sidebar_position: 50
---

# Notify Users to Enroll

You can send email notifications to unenrolled users, directing them to enroll their identity store
accounts in Directory Manager. Notifications can be sent to:

- All users in all identity stores created in Directory Manager
- All users in an identity store
- Specific users

Users must have an email address to receive notifications.

## Send Enrollment Notifications

1. In Admin Center, click **Helpdesk** in the left pane.  
   On the **Helpdesk** page, the **Helpdesk Operations** tab is displayed by default.
2. Do the following:

    - To send enrollment notifications to all users in all identity stores in Directory Manager,
      make sure _All_ is selected in the **Identity store** box. Then click **Notify All Users**.
    - To send the notification to specific recipients, search for the required users and click
      **Notify All Users**. See the [Search Users](/docs/directorymanager/11.1/admincenter/helpdesk/operation/search.md) topic to perform a search.

    Notifications are sent to all users listed on the **Helpdesk Operations** tab, including those
    on other pages (use the navigation options at the bottom of the listing to view the pages). To
    send it to specific users in the listing, select the check boxes for them and click **Notify All
    Users**.

3. On clicking **Notify All Users**, the **Compose email** dialog box is displayed.

    1. The **Recipients** box is read-only.
    2. The **Subject** box displays the default subject line. You can choose to use it or replace it
       with your own text.
    3. Specify the authentication type(s) you want the users to enroll their account with.  
       In the **Enrollment Types** drop-down list, click _All_ if you want users to enroll with all
       the available authentication types, or select the authentication types you want users to
       enroll with.
    4. The **Message** box displays the default message text. You can choose to use it or replace it
       with your own text.
    5. Click **Notify**.