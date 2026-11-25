---
title: "History in Directory Manager"
description: "Learn what history Directory Manager tracks, how to enable it, where it's displayed, and how long it's kept."
keywords:
  - Directory Manager history
  - history tracking
  - history retention
  - audit trail
sidebar_position: 50
---

# History in Directory Manager

Directory Manager tracks history for the following areas:

- **Admin Center:** Actions performed in Admin Center, such as creating identity stores, creating SMS gateway accounts, and changing notification templates. To view this history, see [View and Export Admin Center History in Directory Manager](/docs/directorymanager/11.1/admincenter/general/historyadmincenter.md).
- **Helpdesk:** Helpdesk-specific actions, such as account unlock and enrollment. To view this history, see [View and Search Helpdesk History in Directory Manager](/docs/directorymanager/11.1/admincenter/helpdesk/history.md).
- **Identity store configurations:** Changes made to identity store configurations, including changes to security roles and workflows. To view this history, see [View Identity Store History in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/view/view.md).
- **Identity store objects:** Modifications made to objects in an identity store, such as creating objects and updating attributes for an object. This includes modifications made through:

    - The Directory Manager portal, whether manually, through Synchronize jobs, or through changes to object entitlements
    - Management Shell cmdlets
    - Admin Center, for actions performed by schedules only
    - Directory Manager APIs

    To view this history, see [Directory Manager Portal History Tracking](/docs/directorymanager/11.1/portal/history/overview.md).

**Enable History Tracking**

Directory Manager tracks history for Admin Center and the helpdesk by default. You can't disable it.

History for identity store configurations and objects is disabled by default. You can enable it for an identity store and choose to track all actions or specific actions. See [Configure History Tracking in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/historytracking.md).

**Where is History Displayed?**

- Admin Center displays history for Admin Center, the helpdesk, and identity store configurations. Each type appears on a separate page.
- The Directory Manager portal displays history for identity store objects.

**History Retention**

Use the history retention setting for an identity store to keep history data forever or for a specific period. For details, see [Retain Complete History Data](/docs/directorymanager/11.1/admincenter/identitystore/configure/historytracking.md#retain-complete-history-data) and [Retain History for a Specific Period](/docs/directorymanager/11.1/admincenter/identitystore/configure/historytracking.md#retain-history-for-a-specific-period).

The setting applies to all history tracked for that identity store, including history tracked for the helpdesk and Admin Center.

:::note
Actions tracked under Admin Center history are independent of an identity store. The history retention setting applies to a history item in the context of the identity store the user selected to sign in to Admin Center and perform that action.

**Example:** UserA selects IdentityStoreA to sign in to Admin Center and creates an SMS gateway account. This user then selects IdentityStoreB to sign in to Admin Center and creates a Directory Manager portal. Directory Manager logs both actions in Admin Center history. However, the history retention setting of IdentityStoreA applies to the SMS gateway account creation action, and that of IdentityStoreB applies to the Directory Manager portal creation action.
:::

**Event Logging**

In addition to history tracking, Directory Manager provides event logging. It includes file logging and Windows logging for Directory Manager clients and services. See [Directory Manager Event Logging](/docs/directorymanager/11.1/admincenter/identitystore/view/eventlogging.md).
