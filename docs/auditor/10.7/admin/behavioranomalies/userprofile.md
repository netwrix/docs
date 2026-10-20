---
title: "Review User Profiles and Process Anomalies"
description: "Review User Profiles and Process Anomalies"
sidebar_position: 20
---

# Review User Profiles and Process Anomalies

Use the user profile to investigate user behavior and examine anomalies in detail.

To view a user profile

- On the Behavior Anomalies assessment dashboard, locate a user and click View Profile next to his
  or her name.

![userprofile_thumb_0_0](/images/auditor/10.7/admin/behavioranomalies/userprofile_thumb_0_0.webp)

The user profile page contains the following sections:

- User data with the name and the total risk score. Click Show user activity below the total risk
  score, to launch the Interactive Search in a new window. Use it to see all user actions, including
  those that weren't treated as anomalies.
- The Risk score timeline that demonstrates anomalous activity surges. Modify the timeframe to
  narrow down the results.
- The Risk score by top five alerts chart that outlines the most frequent anomalies provoked by
  user. To see the chart, click the pie chart icon in the upper left corner of the page.
- The anomalies list displays details for each anomaly: the alert that was triggered, the date and
  time, the risk score and anomaly status.

    Double-click an entry to view details: who did what, when, and where the action was made. Navigate to Linked actions and click Show user activity or Show this activity record to invoke Interactive Search and view all user actions or a specific action.

Netwrix Auditor shows only the top 2,000 anomalies. Modify the timeframe or hide reviewed anomalies,
and then click Refresh to display additional anomalies.

## Process Anomalies and Reduce Risk Score

By default, the anomaly status is active and it indicates that the incident still requires some
examination or is kept for further investigation. As you inspect anomalies and respond to threats,
update statuses and add comments.

To change an anomaly status

1. Specify an anomaly from the list and click the Active link in the Status column.
2. In the Change Status dialog, set the status to _"reviewed"_ and provide a justification.

    You can add comments without changing a status. This might be helpful if the anomaly remains
    active for a long period of time and you need even more time to examine it closely.

![changestatus_thumb_0_0](/images/auditor/10.7/admin/behavioranomalies/changestatus_thumb_0_0.webp)

After an anomaly is reviewed, it disappears from the timeline and chart, and its associated risk score is removed from the user's total score. The reviewed anomalies include the reviewer name and date in the status (e.g., _Reviewed by CORP\Administrator (10/02/2017 10:12:03 AM)_).

You can always revert changes and assign the Active status back.

To process all anomalies

- In the Actions section, select Mark all as reviewed.

In this case, all anomalies that are in view will be set to _"reviewed"_. Perform this
operation only with a proper justification. Since Netwrix Auditor shows only the top 2,000
anomalies, ensure to click Refresh to check if there are more anomalies to be reviewed.

The anomalies that are excluded from view by filters aren't affected by the Mark all as reviewed
action.

## Customize Anomalies List

By default, all anomalies are in view. The Filters section helps you show or hide anomalies.

Click Customize view and clear the checkboxes next to alert names, if you don't want to see
anomalies associated with them.

When you hide an alert from view, its associated anomalies will no longer be displayed on the timeline, chart, or in the list, but the user's total score will remain unchanged. Hidden anomalies can't be reviewed in bulk with the Mark all as reviewed action.

Use the Hide reviewed anomalies option to modify the anomalies list and focus on active anomalies only. To view reviewed anomalies, click Show reviewed anomalies.
