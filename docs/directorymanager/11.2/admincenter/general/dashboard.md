---
title: "Monitor Directory Manager with the Admin Center Dashboard"
description: "Use the Admin Center dashboard cards to check service status, failed notifications, schedules, replication, enrollment, authentication, and activity."
keywords:
  - Admin Center dashboard
  - Elasticsearch service status
  - replication status
  - enrollment summary
  - authentication summary
  - activity summary
sidebar_position: 30
---

# Monitor Directory Manager with the Admin Center Dashboard

The Admin Center dashboard shows widgets for performance analytics, alerts, and reporting on Directory Manager and its identity stores on a single page.

In Admin Center, click **Dashboard** in the left pane. The dashboard shows cards with aggregated data from all identity stores built on Active Directory, Microsoft Entra ID, Google Workspace, and Generic LDAP, as well as data for individual identity stores.

![Admin Center dashboard showing the information cards for identity stores](/images/directorymanager/11.2/admincenter/general/dashboard.webp)

The dashboard shows these cards:

- Basic information
- Elasticsearch service
- Objects modified in last 24 hours
- Failed notifications
- Upcoming schedules
- Replication status of identity stores
- Enrollment summary
- Auth summary
- Activity summary

## Basic information

This card shows:

- **Server Name:** The name of the Directory Manager server machine.
- **Database Server:** The name of the SQL server machine hosting the Directory Manager database.
- **Database Name:** The name of the Directory Manager database.

## Elasticsearch service

This card shows this information about the Elasticsearch service:

- **Cluster:** The name of the Elastic cluster that the Directory Manager Elasticsearch node has joined.
- Elasticsearch service status, which can be:

    - **Running** - indicates that the service is running.
    - **Stopped** - indicates that the Directory Manager Elasticsearch node has run into issues. You must troubleshoot it for Directory Manager to work.

## Objects modified in last 24 hours

This card shows the number of users, groups, mailboxes, and contacts modified in the directory during the last 24 hours. The count includes modifications made with Directory Manager and directly in the directory.

The card shows data for each identity store individually. Select an identity store from the list next to the card name to view its data.

## Failed notifications

This card shows the count of failed notifications. These are Directory Manager-generated notifications that couldn't be delivered for any reason, such as when the SMTP server is down or the recipient's address is incorrect.

Click **View All** to go to the **Notification Queue** page, where you can view the failed notifications in detail. See the [Manage the Directory Manager Notification Queue](/docs/directorymanager/11.2/admincenter/notification/queue.md) topic.

## Upcoming schedules

You can define multiple schedules for an identity store. This card shows the number of schedules that run in the next 24 hours. It also shows the date and time the next schedule runs.

You can:

- View the details of upcoming schedules for all identity stores in Directory Manager.
- View the details of upcoming schedules for an identity store individually.

Select an identity store from the list next to the card name to view its upcoming schedules, or select **All Identity Stores** to view the upcoming schedules for all identity stores.

Click **View All** to view a list of the upcoming schedules with their names, the next date and time of the schedule run, and the identity store they belong to.

![Upcoming schedules list with schedule names, next run date and time, and identity store](/images/directorymanager/11.2/admincenter/general/image38.webp)

## Replication status of identity stores

This card lists the identity stores for Active Directory, Microsoft Entra ID, Google Workspace, and Generic LDAP defined in Directory Manager, along with their replication status, which can be:

- **Successful:** Indicates that identity store objects are successfully replicated.
- **Failed:** Indicates that identity store objects have failed to replicate either because the Replication service didn't run as scheduled or an error occurred during replication.
- **Never Replicated:** Indicates that the identity store has never been replicated.

## Enrollment summary

This card uses a bar graph to show the enrollment stats and trends for an identity store. It shows the number of user accounts enrolled with each authentication type, including accounts enrolled by end users and by the helpdesk for end users.

Consider the following:

- You can view enrollment data for an identity store individually or view aggregated data for all identity stores in Directory Manager. Select an identity store from the list next to the card name to view its enrollment data, or select **All Identity Stores** to view the data for all identity stores.
- Hover the mouse over a bar to view the number of users enrolled with that authentication type. Click a bar to open the **Helpdesk** page, which lists the users enrolled with that authentication type. See the [View Users' Information](/docs/directorymanager/11.2/admincenter/helpdesk/operation/search.md#view-users-information) topic for details on the information shown for a user. The **Filters** dialog box shows the selected authentication type in the **Enrolled With** box.
- By default, the card shows data for the last one month. You can view enrollment data for any specific period. Click the tile showing the time period to open the calendar, and specify a date range.

## Auth summary

This card uses a pie chart to show the authentication stats and trends for an identity store: the number of successful and failed authentication attempts made by identity store users in Directory Manager. The information is based on:

- Authentication attempts made with authentication types for second factor authentication.
- Authentication attempts made with authentication types for multifactor authentication.
- Sign-in attempts made with a username and password.

The pie chart is interactive. You can:

- Hover the mouse over an arc to view the successful or failed authentication attempt count.
- Click the arc for successful or failed attempts to view the attempts for each authentication type. Another pie chart appears and shows the authentication types used in the attempts. Click this chart to go to the **History** tab of the **Helpdesk** page, which shows the logged history for the authentication attempts with that authentication type. See the [View and Search Helpdesk History in Directory Manager](/docs/directorymanager/11.2/admincenter/helpdesk/history.md) topic.

Consider the following:

- You can view authentication data for an identity store individually or view aggregated data for all identity stores in Directory Manager. Select an identity store from the list next to the card name to view its auth data, or select **All Identity Stores** to view the data for all identity stores.
- By default, the card shows data for the last one week. You can view authentication data for any specific period. Click the tile showing the time period to open the calendar, and specify a date range.

See the [Directory Manager Authentication Policies](/docs/directorymanager/11.2/admincenter/authpolicy/authpolicy.md) topic for a list of supported authentication types.

## Activity summary

This card uses a bar graph to show the number of times helpdesk and end users performed these activities in an identity store:

- Password change
- Password reset
- Account unlock
- Link account
- Unlink account
- Enroll account

Consider the following:

- You can view data for these activities for an identity store individually or view aggregated data for all identity stores in Directory Manager. Select an identity store from the list next to the card name to view its activity summary, or select **All Identity Stores** to view the data for all identity stores.
- To view a list of users who used a function on a particular date, click the relevant data point on the function line. The **History** tab of the **Helpdesk** page lists the users. See the [View and Search Helpdesk History in Directory Manager](/docs/directorymanager/11.2/admincenter/helpdesk/history.md) topic. The **Filters** dialog box shows the selected function in the **Action Type** box.
- By default, the card shows data for the last one week. You can view the activity summary for any specific period. Click the tile showing the time period to open the calendar, and specify a date range.
- By default, the graph shows data for all the activities. Click an activity name at the bottom of the graph to hide its data. The name is struck out, which indicates that the graph doesn't show data for that activity. Click the activity name again to show its data on the graph.

**See Also**

- [Navigate Admin Center in Directory Manager](/docs/directorymanager/11.2/admincenter/general/navigation.md)
