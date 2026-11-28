---
title: "History in GroupID"
description: "Learn what history GroupID tracks, how to enable it, where it's displayed, and how long it's kept."
keywords:
  - GroupID history
  - history tracking
  - history retention
  - audit trail
sidebar_position: 30
---

# History in GroupID

In GroupID, history is tracked for:

- **Admin Center -** Actions performed in Admin Center, such as creating identity stores, SMS
  gateway accounts, changes to notification templates, and more.
- **Helpdesk -** Helpdesk-specific actions, such as account unlock and enrollment.
- **Identity store configurations -** Changes made to identity store configurations, including
  changes to security roles and workflows.
- **Identity store objects -** Modifications made to objects in an identity store, such as creating
  objects and updating attributes for an object. It includes modifications made through:

    - GroupID portal (whether manually, through Synchronize jobs, or changes to object
      entitlements)
    - GroupID Management Shell cmdlets
    - GroupID mobile app
    - GroupID Admin Center (actions performed by schedules only)
    - GroupID APIs

**Enable History Tracking**

History for Admin Center and helpdesk is tracked by default and you can't disable it.

However, history for identity store configurations and objects is disabled by default. You can
enable it for an identity store as well as choose to track all or specific actions. See the
[Configure History Tracking in GroupID](/docs/directorymanager/11.0/signin/identitystore/configure/historytracking.md)
topic.

**Where is History Displayed?**

- History for Admin Center, helpdesk, and identity store configurations is displayed in Admin
  Center, each displayed on separate pages.
- History for identity store objects is displayed in the GroupID portal.

**History Retention**

Use the _history retention_ setting for an identity store to choose whether to keep
history data forever or for a specific period. See the
[Retain Complete History Data](/docs/directorymanager/11.0/signin/identitystore/configure/historytracking.md#retain-complete-history-data)
and
[Retain History for a Specific Period](/docs/directorymanager/11.0/signin/identitystore/configure/historytracking.md#retain-history-for-a-specific-period)
topics. Your chosen setting applies to all history tracked for the respective identity store,
including that tracked for helpdesk and Admin Center.

:::note
Actions tracked under Admin Center history are independent of an identity store. In this case,
history retention settings apply to a history item in the context of the identity store selected by
the user to sign in to Admin Center to perform that action.  
**Example:** UserA selects IdentityStoreA to sign in to Admin Center and creates an SMS gateway
account. This user then selects IdentityStoreB to sign in to Admin Center and creates a GroupID
portal. Both actions are logged in Admin Center history. However, the history retention
setting of IdentityStoreA applies to the SMS gateway account creation action and that of
IdentityStoreB applies to the GroupID portal creation action.
:::

**Event Logging**

In addition to history tracking, GroupID provides event logging, which includes file logging and
Windows logging for GroupID clients and services. See the
[GroupID Event Logging](/docs/directorymanager/11.0/signin/identitystore/view/eventlogging.md)
topic.

**See Also**

- [View and Export Admin Center History in GroupID](/docs/directorymanager/11.0/signin/concepts/history_1.md)
- [View and Search Helpdesk History in GroupID](/docs/directorymanager/11.0/signin/helpdesk/history.md)
- [View Identity Store History in GroupID](/docs/directorymanager/11.0/signin/identitystore/view/view.md)
  (for identity store configurations, workflows, and security roles)
- [GroupID Portal History Tracking](/docs/directorymanager/11.0/welcome/history/overview.md) (for directory objects)
