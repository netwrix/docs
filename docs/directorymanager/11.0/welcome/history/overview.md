---
title: "GroupID Portal History Tracking"
description: "Learn what the portal logs, where history appears, and which settings control how many history items are shown."
keywords:
  - history tracking
  - My Account History
  - history items to display
  - portal history
sidebar_position: 100
---

# GroupID Portal History Tracking

The GroupID portal maintains a log of actions when objects are created, modified, and
deleted in the portal, provided that the GroupID administrator has enabled history
tracking for the identity store. The GroupID portal also tracks all actions that are
committed to the directory using:

- GroupID Management Shell cmdlets
- GroupID mobile app
- GroupID APIs

The administrator can configure the following for history tracking:

- Track all or specific events
- Retain history data forever or for a specified duration

Therefore, history data represents only the events that history tracking is configured to track.
Furthermore, if history tracking isn't enabled or has been recently disabled for the identity
store, the portal doesn't display history data or it displays data that was logged before
history tracking was turned off.

A user can add a note to a history action that they performed. Other users can only view that
note. The note may explain the reason for performing that action. See the
[Configure History Tracking in GroupID](/docs/directorymanager/11.0/signin/identitystore/configure/historytracking.md)
topic.

## History views in the portal

The GroupID portal displays history in the following places:

- **My Account History** on the portal's dashboard  
  Displays a list of actions performed by the logged-on user.
- The **History** tab in group, user, mailbox, and contact properties.  
  Displays the actions performed on the object by different users.
- The [View My History in the GroupID Portal](/docs/directorymanager/11.0/welcome/history/myhistory.md) page.  
  Displays the actions performed by the logged-on user and any changes made to this user's profile
  by another user.
- The
  [View My Direct Reports' History in GroupID](/docs/directorymanager/11.0/welcome/history/mydirectreport.md)
  page.  
  Displays the changes made to the logged-on user's direct reports by this user or by any other
  user.
- The [View and Filter History of Groups You Own](/docs/directorymanager/11.0/welcome/history/mydirectorygroup.md)
  page.  
  Displays the changes made by the logged-on user to a group that they own.

Use the **History items to display on home page** setting on the User Settings panel to specify the
number of history items to display on the Dashboard.

Use the **History items to display** setting on the User Settings panel to specify the number of
history items to display on the History tab, My History page, My Direct Reports History page, and My
Groups History page.

Use the **Most recent objects** setting on the User Settings panel to specify the number of recent
objects to show on the **My Account History** card on the Dashboard.

See Also

- [View My History in the GroupID Portal](/docs/directorymanager/11.0/welcome/history/myhistory.md)
- [View My Direct Reports' History in GroupID](/docs/directorymanager/11.0/welcome/history/mydirectreport.md)
- [View and Filter History of Groups You Own](/docs/directorymanager/11.0/welcome/history/mydirectorygroup.md)
- [GroupID User, Mailbox, and Contact Properties](/docs/directorymanager/11.0/welcome/user/properties/overview.md)
- [Configure GroupID Portal Settings](/docs/directorymanager/11.0/welcome/generalfeatures/portal.md)
- [History in GroupID](/docs/directorymanager/11.0/signin/concepts/history.md)
