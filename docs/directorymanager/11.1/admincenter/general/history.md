---
title: "History in Directory Manager"
description: "History in Directory Manager"
sidebar_position: 50
---

# History in Directory Manager

In Directory Manager, history is tracked for:

- Admin Center - Actions performed in Admin Center, such as creating identity stores, SMS gateway
  accounts, changes to notification templates, and more. See the
  [Admin Center History](/docs/directorymanager/11.1/admincenter/general/historyadmincenter.md) topic to view the history.
- Helpdesk - Helpdesk-specific actions, such as account unlock and enrollment. See the
  [History in Helpdesk](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic to view the history.
- Identity store configurations - Changes made to identity store configurations, including changes
  to security roles and workflows. See the [Identity Store History](/docs/directorymanager/11.1/admincenter/identitystore/view/view.md)
  topic to view the history.
- Identity store objects - Modifications made to objects in an identity store, such as creating
  objects, updating attributes for an object, etc. It includes modifications made through:

    - Directory Manager portal (whether manually, through Synchronize jobs. or changes to object
      entitlements)
    - Management Shell cmdlets
    - Admin Center (actions performed by schedules only)
    - Directory Manager APIs

    See the [History](/docs/directorymanager/11.1/portal/history/overview.md) topic to view this history.

**Enable History Tracking**

History for Admin Center and helpdesk is tracked by default and you cannot disable it.

However, history for identity store configurations and objects is disabled by default. You can
enable it for an identity store as well as choose to track all or specific actions. See the
[Configure History Tracking](/docs/directorymanager/11.1/admincenter/identitystore/configure/historytracking.md) topic.

**Where is History Displayed?**

- History for Admin Center, helpdeak, and identity store configurations is displayed in Admin
  Center, each displayed on separate pages.
- History for identity store objects is displayed in the Directory Manager portal.

**History Retention**

The _history retention_ setting for an identity store enables you to choose whether you want to keep
history data forever or for a specific period. See the
[Retain Complete History Data](/docs/directorymanager/11.1/admincenter/identitystore/configure/historytracking.md#retain-complete-history-data)
and
[Retain History for a Specific Period](/docs/directorymanager/11.1/admincenter/identitystore/configure/historytracking.md#retain-history-for-a-specific-period)
topics. Your desired setting applies to all history tracked for the respective identity store,
including that tracked for helpdesk and Admin Center.

:::note
Actions tracked under Admin Center history are independent of an identity store. In this case,
history retention settings apply to a history item in the context of the identity store selected by
the user to log into Admin Center to perform that action.  
**Example:** UserA selects IdentityStoreA to sign into Admin Center and creates an SMS gateway
account. This user then selects IdentityStoreB to sign into Admin Center and creates a Directory
Manager portal. Both actions are logged in Admin Center history. However, history retention setting
of IdentityStoreA will apply to the SMS gateway account creation action and that of IdentityStoreB
will apply to the Directory Manager portal creation action.
:::

**Event Logging**

In addition to history tracking, Directory Manager provides event logging, which includes file
logging and Windows logging for Directory Manager clients and services. See the
[Event Logging](/docs/directorymanager/11.1/admincenter/identitystore/view/eventlogging.md) topic.
