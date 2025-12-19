---
title: "Configure History Tracking"
description: "Configure History Tracking"
sidebar_position: 90
---

# Configure History Tracking

In Directory Manager, history for an identity store is tracked at two levels:

- **When objects are created, modified, and deleted** - When you enable history tracking for an
  identity store, Directory Manager tracks all actions that are committed to the directory using:

    - Directory Manager portal (whether manually, through Synchronize jobs. or changes to object
      entitlements)
    - Management Shell cmdlets
    - Admin Center (actions performed by schedules only)
    - APIs

    You can choose to track specific actions, such as ownership change and object deletion. The
    table in the Track Specific Actions for an Identity Store topic lists some individual actions
    available for tracking.

    Use the _History_ node in the Directory Manager portal to view the history data that the history
    tracking function collects for objects. History for individual objects is also displayed in the
    respective object’s properties.

- **When changes are made to an identity store’s configurations** - Directory Manager enables you to
  track the changes made to an identity store’s configurations, which include the following:

    - identity store properties
    - workflows
    - security roles

    See the [Identity Store History](/docs/directorymanager/11.1/admincenter/identitystore/view/view.md) topic to view the tracked history data.

By default, history tracking is disabled. You can:

- Enable the history tracking function for an identity store.
- Track all or specific actions.
- Specify a period for retaining history data in the Directory Manager database. When the period is
  over, data is exported to CSV files and deleted from the database.

:::info
History tracking can slow down system performance. For optimal performance, it is
recommended that you track only specific, more important actions and limit Directory Manager history
data storage to the most recent records.
:::


See the [History in Directory Manager](/docs/directorymanager/11.1/admincenter/general/history.md) and
[Event Logging](/docs/directorymanager/11.1/admincenter/identitystore/view/eventlogging.md) topics for additional information.

## Enable History Tracking for All Actions

You can choose to enable or disable history tracking for an identity store. When enabled, all
actions that users perform on directory objects using Directory Manager are tracked by default. For
example, when a user creates a group, adds members to it, changes its expiry date, and assigns
owners, history logs are generated in Directory Manager. Moreover, changes made to identity store
configurations, workflows, and security roles are also tracked.

**To enable history tracking:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **History**.
4. Use the toggle button in the top right corner to enable or disable history tracking for the
   identity store.

    - On enabling, _All Actions_ is auto selected in the **Track** drop-down list. This indicates
      that (a) all actions that users perform on directory objects and (b) changes made to identity
      store configurations, workflows, and security roles are tracked for the identity store.  
      To track specific actions, see the Track Specific Actions for an Identity Store topic.
    - Disabling history tracking does not delete already recorded history data.

5. Click **Save**.

## Track Specific Actions for an Identity Store

Rather than tracking all actions for an identity store, you can choose to track the most important
actions, such as changes to a group’s primary owner and object creation.

**To track specific actions:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **History**.
4. On the **History** page, make sure history tracking is enabled. Them select _Selected Actions_ in
   the **Track** drop-down list. This enables the **Actions** area, where the following actions are
   listed:

    | Action                   | Description                                                                                                                                                                                                                                    |
    | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Ownership Change         | Changes to a group's primary ownership                                                                                                                                                                                                         |
    | Additional Owner Change  | Addition and removal of a group's additional owner(s)                                                                                                                                                                                          |
    | Expiration Policy Change | Any change to a group's expiry policy                                                                                                                                                                                                          |
    | Group Expire/Renew       | Expiration of a group and renewal of an expired group                                                                                                                                                                                          |
    | Query Change             | Changes to the query of a Smart Group or Dynasty                                                                                                                                                                                               |
    | Object Created           | Creation of a new object                                                                                                                                                                                                                       |
    | Object Deleted           | Deletion of an object                                                                                                                                                                                                                          |
    | Workflows history        | Addition, deletion, or modification made to a workflow. It does not track the deletion of workflow requests, that is tracked under the **Identity Store history** option.                                                                      |
    | Security Roles history   | Addition, deletion, or modification made to a security role                                                                                                                                                                                    |
    | Security Type Change     | Changes to a group's security type                                                                                                                                                                                                             |
    | Identity Store history   | Changes to an identity store’s settings. This includes the configurations available for an identity store. This option does not track changes made to workflows and security roles. It does, however, track the deletion of workflow requests. |

5. Click an action to track it for the identity store. The tile for the action changes to blue,
   indicating that it is tracked.
6. Click **Save**.

## Retain Complete History Data

You can set Directory Manager to retain history data for the identity store in the Directory Manager
database forever.

**To retain history data forever:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **History**.
4. On the **History** page, select _All_ in the **History Options** drop-down list to retain all
   tracked history data in the database.

    :::note
    This setting may result in a massive increase in the database size and may affect
    Directory Manager performance.
    :::


5. Click **Save**.

## Retain History for a Specific Period

You can set Directory Manager to retain an identity store's history data for a specified length of
time in the database. When the retention period is over, the History Retention schedule archives
this data by moving it from the database to CSV files. See the
[History Retention Schedule](/docs/directorymanager/11.1/admincenter/schedule/historyretention.md) topic.

**To retain history data for a specific period:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **History**.
4. On the **History** page, select one of the following options in the **History Options** drop-down
   list:

    - Last 30 Days
    - Last 60 Days
    - Last 90 Days
    - Last 120 Days
    - Last 6 Months
    - Last 1 Year
    - Last 2 Years
    - Last 5 Years

5. Click **Save**.

## Disable History Tracking

On disabling history tracking for an identity store, Directory Manager does not log the history for
actions performed in the identity store. Disabling history tracking does not delete any already
recorded history data.

**To disable history tracking:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **History**.
4. On the **History** page, use the toggle button in the top right corner to disable history
   tracking for the identity store.
5. Click **Save**.
