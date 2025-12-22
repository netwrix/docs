---
title: "Dashboard"
description: "Dashboard"
sidebar_position: 30
---

# Dashboard

The Admin Center dashboard is a data visualization tool that displays widgets for performance
analytics, alerts, and reporting on Directory Manager and identity stores on a single page.

In Admin Center, click **Dashboard** in the left pane. The dashboard displays the following cards
with aggregated data from all identity stores built on Active Directory, Microsoft Entra ID, Google
Workspace, and Generic LDAP, as well as individual identity stores.

![dashboard](/images/directorymanager/11.1/admincenter/general/dashboard.webp)

The dashboard displays the following information:

- Basic Information
- Elasticsearch Service
- Objects Modified in Last 24 Hours
- Failed Notifications
- Upcoming Schedules
- Replication Status of Identity Stores
- Enrollment Summary
- Auth Summary
- Activity Summary

## Basic Information

This card displays the following information:

- **Server Name:** The name of the Directory Manager server machine.
- **Database Server:** The name of the SQL server machine hosting the Directory Manager database.
- **Database Name:** The name of the Directory Manager database.

## Elasticsearch Service

This card displays the following information about the Elasticsearch service:

- **Cluster:** The name of the Elastic cluster the Directory Manager Elasticsearch node is joined
  to.
- Elasticsearch service status, which can be:

    - **Running** - indicates that the service is up and running.
    - **Stopped** - indicates that the Directory Manager Elasticsearch node has run into issues. You
      must troubleshoot it for Directory Manager to work.

## Objects Modified in Last 24 Hours

This card displays the number of users, groups, mailboxes, and contacts modified in the directory
during the last 24 hours. This count represents the modifications done using Directory Manager and
directly in the directory.

Information is displayed individually for each identity store. Select an identity store from the
list next to the card name to view the data for it.

## Failed Notifications

This card displays the count for failed notifications, i.e., the Directory Manager-generated
notifications that could not be delivered for any reason, such as when the SMTP server is down or
the recipient’s address is incorrect.

Click **View All** to go to the **Notification Queue** page, where you can view the failed
notifications in detail. See the [Manage the Notification Queue](/docs/directorymanager/11.1/admincenter/notification/queue.md) topic.

## Upcoming Schedules

Multiple schedules can be defined for an identity store. This card displays the number of schedules
that will run in the next 24 hours. The card also displays the data and time the next schedule will
run.

You can:

- View the details of upcoming schedules for all identity stores in Directory Manager.
- View the details of upcoming schedules for an identity store individually.

Select an identity store from the list next to the card name to view the upcoming schedules for it
or select _All Identity Stores_ to view the upcoming schedules for all identity stores.

Click **View All** to view a list of the upcoming schedules with their names, the next date and time
of schedule run, and the identity store they belong to.

![image38](/images/directorymanager/11.1/admincenter/general/image38.webp)

## Replication Status of Identity Stores

This card lists the identity stores for Active Directory, Microsoft Entra ID, Google Workspace, and
Generic LDAP defined in Directory Manager, along with their replication status, which can be:

- **Successful:** Indicates that identity store objects are successfully replicated.
- **Failed:** Indicates that identity store objects have failed to replicate either because the
  Replication service did not run as scheduled or an error occurred during replication.
- **Never Replicated:** Indicates that the identity store is never replicated.

## Enrollment Summary

This card employs a bar graph to display the enrollment stats and trends for an identity store. It
shows the number of user accounts enrolled using each of the authentication types (including
accounts enrolled by end-users and by helpdesk for end-users).

Consider the following:

- You can view enrollment data for an identity store individually or view aggregated data for all
  identity stores in Directory Manager. Select an identity store from the list next to the card name
  to view the enrollment data for it or select _All Identity Stores_ to view the data for all
  identity stores.
- Hover the mouse over a bar to view the number of users enrolled with the specific authentication
  type. Click a bar to launch the **Helpdesk** page, that displays a list of users enrolled with
  that authentication type. See the
  [View Users' Information](/docs/directorymanager/11.1/admincenter/helpdesk/operation/search.md#view-users-information) topic for
  details on the information displayed for a user. (Notice that the **Filter(s)** dialog box
  displays the selected authentication type in the **Enrolled With** box.)
- By default, data is displayed for the last one month. You can view enrollment data for any
  specific period. Click the tile showing the time period to launch the calendar. Use it to specify
  a date range to view the data.

## Auth Summary

This card employs a pie chart to display the authentication stats and trends for an identity store,
i.e., the number of successful and failed authentication attempts made by identity store users in
Directory Manager. Information is based on:

- Authentication attempts made using authentication types for second factor authentication.
- Authentication attempts made using authentication types for multifactor authentication.
- Sign in attempts made using username and password.

The pie chart is highly interactive. You can:

- Hover the mouse over an arc to view the successful or failed authentication attempt count.
- Click the arc for successful or failed attempts to view successful/failed authentication attempts
  for each authentication type. Another pie chart appears to display the authentication types used
  in the authentication attempt. Click this chart to navigate to the **History** tab of the
  **Helpdesk** page to view the logged history for the authentication attempts with the respective
  authentication type. See the [History in Helpdesk](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic.

Consider the following:

- You can view authentication data for an identity store individually or view aggregated data for
  all identity stores in Directory Manager. Select an identity store from the list next to the card
  name to view the auth data for it or select _All Identity Stores_ to view the data for all
  identity stores.
- By default, data is displayed for the last one week. You can view authentication data for any
  specific period. Click the tile showing the time period to launch the calendar. Use it to specify
  a date range to view the data.

See the [Authentication Policy](/docs/directorymanager/11.1/admincenter/authpolicy/authpolicy.md) topic for a list of
supported authentication types.

## Activity Summary

This card employs a bar graph to display the number of times the following activities were performed
in an identity store by both helpdesk and end-users:

- Password change
- Password reset
- Account unlock
- Link account
- Unlink account
- Enroll account

Consider the following:

- You can view data for these activities for an identity store individually or view aggregated data
  for all identity stores in Directory Manager. Select an identity store from the list next to the
  card name to view the activity summary for it or select _All Identity Stores_ to view the data for
  all identity stores.
- To view a list of users who used a function on a particular date, click the relevant data point on
  the function line. A list of users is displayed on the **History** tab of the **Helpdesk** page.
  See the [History in Helpdesk](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic. (Notice that the **Filter(s)** dialog
  box displays the selected function in the **Action Type** box.)
- By default, data is displayed for the last one week. You can view activity summary for any
  specific period. Click the tile showing the time period to launch the calendar. Use it to specify
  a date range to view the data.
- By default, data for all the activities is displayed. Click an activity name at the bottom of the
  graph to hide its data. The name is struck out, indicating that data for the activity is not
  depicted on the graph. Click the activity name again to display its data on the graph.

**See Also**

- [Navigation](/docs/directorymanager/11.1/admincenter/general/navigation.md)
