---
title: "Activity Summary Email"
description: "Activity Summary Email"
sidebar_position: 220
---

# Activity Summary Email

Activity Summary email is generated automatically by Netwrix Auditor and lists all changes /
recorded user sessions that occurred since the last Activity Summary delivery. By default, for most
data sources an Activity Summary is generated daily at 3:00 AM and delivered to the specified
recipients. You can also launch data collection and Activity Summary generation manually.

Notifications on user activity and event log collection (Event Log Collection Status) are a bit
different and do not show changes.

The following Activity Summary example applies to Active Directory. Other Activity Summaries
generated and delivered by Netwrix Auditor will vary slightly depending on the data source.

![ad_activitity_summary](/images/auditor/10.6/admin/monitoringplans/ad_activitity_summary.webp)

The example Activity Summary provides the following information on Active Directory changes:

| Column      | Description                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| Action      | Shows the type of action that was performed on the object. - Added - Removed - Modified - Activated (User Activity) |
| Object Type | Shows the type of the modified AD object, for example, 'user'.                                                      |
| What        | Shows the path to the modified AD object.                                                                           |
| Item        | Shows the item associated with the selected monitoring plan.                                                        |
| Where       | Shows the name of the domain controller where the change was made.                                                  |
| Who         | Shows the name of the account under which the change was made.                                                      |
| When        | Shows the exact time when the change occurred.                                                                      |
| Workstation | Shows the name / IP address of the computer where the user was logged on when the change was made.                  |
| Details     | Shows the before and after values of the modified AD object.                                                        |

To initiate an on-demand Activity Summary delivery, navigate to the Monitoring Plans section, select
a plan, click Edit, and then select Update. A summary will be delivered to the specified reciptient,
listing all activity that occurred since the last data collection.
