---
title: "Directory Manager Portal History Tracking"
description: "Learn what the portal logs, where history appears, and which settings control how many history items are shown."
keywords:
  - history tracking
  - My Account History
  - history items to display
  - portal history
sidebar_position: 100
---

# Directory Manager Portal History Tracking

The Directory Manager portal maintains a log of actions when objects are created, modified, and
deleted in the portal, provided that the Directory Manager administrator has enabled history
tracking for the identity store. The Directory Manager portal also tracks all actions that are
committed to the directory using:

- Directory Manager Management Shell cmdlets
- Directory Manager APIs

The administrator can configure the following for history tracking:

- Track all or specific events
- Retain history data forever or for a specified duration

Therefore, history data represents only the events that history tracking is configured to track.
Furthermore, if history tracking isn't enabled or has been recently disabled for the identity
store, the portal doesn't display history data or it displays data that was logged before
history tracking was turned off.

A user can add a note to a history action that they performed. Other users can only view that
note. The note may explain the reason for performing that action. See the
[Configure History Tracking in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/historytracking.md)
topic.

## History views in the portal

The Directory Manager portal displays history in the following places:

- **My Account History** on the portal's dashboard  
  Displays a list of actions performed by the logged-on user.
- The **History** tab in group, user, mailbox, and contact properties.  
  Displays the actions performed on the object by different users.
- The [View My History in the Directory Manager Portal](/docs/directorymanager/11.1/portal/history/myhistory.md) page.  
  Displays the actions performed by the logged-on user and any changes made to this user's profile
  by another user.
- The [View My Direct Reports' History in Directory Manager](/docs/directorymanager/11.1/portal/history/mydirectreport.md) page.  
  Displays the changes made to the logged-on user's direct reports by this user or by any other
  user.
- The [View and Filter History of Groups You Own](/docs/directorymanager/11.1/portal/history/mydirectorygroup.md) page.  
  Displays the changes made by the logged-on user to a group that they own.

Use the **History items to display on home page** setting on the User Settings panel to specify the
number of history items to display on the Dashboard.

Use the **History items to display** setting on the User Settings panel to specify the number of
history items to display on the History tab, My History page, My Direct Reports History page, and My
Groups History page.

Use the **Most recent objects** setting on the User Settings panel to specify the number of recent
objects to show on the **My Account History** card on the Dashboard.
