---
title: "Manage Global Replication Settings in Directory Manager"
description: "Schedule and force-run the Replication service, monitor Elasticsearch health, restore object data, clear unused indices, and set error alerts."
keywords:
  - global replication settings
  - Elasticsearch Health Monitor
  - replication interval
  - restore object data
  - Search Guard password
  - replication error notifications
sidebar_position: 10
---

# Manage Global Replication Settings in Directory Manager

The Replication service replicates attributes of group, user, contact, computer, and organizational unit objects from a provider (such as Active Directory) to Elasticsearch.

In Admin Center, you can configure the following settings for the Replication service:

- Schedule it to run every x minutes.
- Force run it at any time.
- Set a threshold for triggering replication error notifications.
- View the Elasticsearch health status.

On every successful run of the Replication service, Directory Manager generates the replication status of object types for each domain in an identity store. It alerts you to any errors that occurred during the replication process.

:::note
The Replication service doesn't replicate excluded domains for an identity store. See the [Exclude an Active Directory Domain from Replication](/docs/directorymanager/11.2/admincenter/identitystore/manage.md#exclude-an-active-directory-domain-from-replication) topic.
:::

## How to resolve replication errors

To eliminate replication errors, take the following actions:

- Ensure the Replication service and Elasticsearch service are running.
- Ensure Search Guard or any other security plugin you use for Elasticsearch is operational.
- Consult the Replication service logs. They provide detailed information about the object type in the specific domain of the identity store where the error occurred. They also show whether the error comes from the identity provider or Elasticsearch. See the [Replication Service Logs](overview.md#replication-service-logs) topic.

## Monitor Elasticsearch health status

Directory Manager monitors the Elasticsearch service for the following:

- The status of the Elasticsearch service. See the [Elasticsearch Service](/docs/directorymanager/11.2/admincenter/general/dashboard.md#elasticsearch-service) card on the Admin Center dashboard.
- Elasticsearch cluster health stats, which include:

  - Cluster name, health status, node info, and shards info
  - Cluster indices information, such as health, number of documents, and status

Directory Manager checks if the Elasticsearch service is running, if all nodes are working, and if the cluster is intact. It also checks the health of each index.

**To view Elasticsearch health status:**

1. In Admin Center, click **Replication** in the left pane.
2. On the **Replication** page, click **Elasticsearch Health Monitor**.

   ![Elasticsearch Health Monitor dialog box listing clusters with health, node count, and master node](/images/directorymanager/11.2/admincenter/replication/es_health_monitor.webp)

   This dialog box lists the Elasticsearch clusters in your environment, with the following information for each cluster:

   - **Health:** the cluster health status, denoted by the following colors:

     - Green – the service is running and the cluster is intact. Two or more nodes exist within the cluster.
     - Yellow – the cluster is running but with warnings. It also indicates that a single node exists within the cluster. Elasticsearch recommends a three-node topology for improved performance and high availability.
     - Red – the service has stopped or the cluster is broken (for reasons such as network connectivity).

   - **Nodes:** the number of nodes in the cluster.
   - **Master:** the name of the master node in the cluster.

3. To refresh the information, click the **Refresh** icon.
4. Click a cluster name to view it in detail.

   ![Cluster details dialog box showing node cards and the list of indices](/images/directorymanager/11.2/admincenter/replication/cluster_info.webp)

   This dialog box displays the total number of nodes in the cluster. Each node has a card that displays the following:

   - The name of the node
   - The system resources the node uses, such as hard disk space, RAM, and heap size
   - Node health with respect to disk space usage, denoted by the following colors:

     - Green – when hard disk space usage is 79.99% or less
     - Yellow – when hard disk space usage is 80-89.99%
     - Red – when hard disk space usage is 90% or more

5. Review the indices in the cluster in the grid.

   - The **Name** column displays the names of the indices.
   - The **Health** column displays the health of the index, denoted by the following colors:

     - Green – the index is replicated to all nodes within the cluster.
     - Yellow – the index is replicated to some but not all nodes within the cluster.
     - Red – the index isn't replicated to any node within the cluster.

   - The **Document** column shows the number of documents in the index.

6. Click the back arrow to return to the **Elasticsearch Health Monitor** dialog box.

## Specify a replication interval for objects

The Replication service interval applies to all identity stores defined in Admin Center. You specify the object attributes to replicate in the identity store settings. See the [Manage Identity Store Replication Settings](/docs/directorymanager/11.2/admincenter/identitystore/replication.md) topic.

By default, the interval is 10 minutes, so the service is triggered every 10 minutes. This way, changes made to objects in the directory during the last 10 minutes are replicated to Elasticsearch. In Active Directory, the `whenChanged` attribute stores the time and date the object was last changed. The service checks the value of this attribute and replicates any changes to Elasticsearch.

**To set global replication interval:**

1. In Admin Center, click **Replication** in the left pane.
2. On the **Replication** page, review the **Replication Service Interval** card. It displays:

   - The date and time the Replication service last ran
   - The date and time the service runs next
   - The interval (in minutes) between each run of the service

3. To change the interval, click **Edit** next to **Service Interval** on the **Replication Service Interval** card.
4. Specify the interval (in minutes) between each run of the service and click the check mark.

## Force run the Replication service (for object replication)

**To force run the Replication service for objects:**

1. In Admin Center, click **Replication** in the left pane.
2. On the **Replication** page, click **Force Replication Now** on the **Replication Service Interval** card to run the Replication service instantly.

Changes made to objects in the directory between the last and current run are replicated to Elasticsearch. Force-starting the service has no impact on the interval set in the **Service Interval** box for triggering the service.

## View the replication status for objects

After every run of the Replication service, you can view the replication status of each object type for each domain in an identity store. You can see which object types were successfully replicated and which ones failed to replicate.

**To view the replication status:**

1. In Admin Center, click **Replication** in the left pane.
2. On the **Replication** page, click **Advanced Replication Status**. The **Advanced Replication Status** dialog box displays the status of object types for each domain in an identity store.

   1. The dialog box shows in red the domains or object types that failed to replicate in the last run of the Replication service. Reasons could be inaccessibility or partial failure. Directory Manager reports replication errors to administrators in the following ways:

      - On the **Identity Stores** page, the card for the identity store turns red and **Errors** is displayed as the identity store status.
      - A notification is sent to relevant personnel. See the [Set a threshold to trigger replication error notifications](#set-a-threshold-to-trigger-replication-error-notifications) topic.

      These alerts are triggered when replication fails in the last run of the Replication service, or if the service doesn't run at the required triggering interval. To resolve replication errors, see the [How to resolve replication errors](#how-to-resolve-replication-errors) topic.

   2. The ‘Never replicated’ status indicates that the particular object type isn't replicated yet. Similarly, a child domain that isn't being used has its status marked in red. To avoid these recurring errors, set the dates for these objects to a distant future date in the Directory Manager database. You can also exclude a domain from replication. See the [Exclude an Active Directory Domain from Replication](/docs/directorymanager/11.2/admincenter/identitystore/manage.md#exclude-an-active-directory-domain-from-replication) topic.

## Specify an interval for deleting tombstone objects

Objects deleted from the directory must also be removed from Elasticsearch. For this purpose, you can specify a triggering interval for the Replication service to remove tombstone objects from the Elasticsearch repository. By default, the interval is 60 minutes, so the service is triggered every 60 minutes. As a result, objects deleted in the directory during the last 60 minutes are removed from Elasticsearch.

To identify objects that were deleted in the directory but still exist in Elasticsearch, the Replication service compares the objects in both. It deletes objects that don't exist in the directory anymore.

This Replication service interval applies to all identity stores in Directory Manager.

**To specify an interval:**

1. In Admin Center, click **Replication** in the left pane.
2. On the **Replication** page, review the **Deleted Objects Replication Interval** card. It displays:

   - The date and time the Replication service last ran to remove tombstone objects from Elasticsearch
   - The date and time the service runs again
   - The interval (in minutes) between each run of the service

3. Note the default interval of 60 minutes. The service is triggered every 60 minutes, so objects deleted in the directory during the last 60 minutes are removed from Elasticsearch.
4. To change the interval, click **Edit** next to **Service Interval** on the **Deleted Objects Replication Interval** card.
5. Specify the interval (in minutes) between each run of the service and click the check mark.

## Force run the Replication service (for deleting objects)

**To force run the Replication service for deleted objects:**

1. In Admin Center, click **Replication** in the left pane.
2. On the **Replication** page, click **Force Replication Now** on the **Deleted Objects Replication Interval** card to run the Replication service instantly.

Objects deleted in the directory between the last and current run of the service are removed from Elasticsearch. Force-starting the service has no impact on the interval set in the **Service Interval** box for triggering the service.

## Restore object data to Elasticsearch

You may need to restore object data to Elasticsearch. The restore object data function restores the following for all identity stores in Directory Manager:

- The current attribute values of objects (groups, users, contacts, computers, and OUs) from the provider (for example, Active Directory)
- The Directory Manager pseudo attributes of these objects from the Directory Manager database to Elasticsearch

**To restore object data:**

1. In Admin Center, click **Replication** in the left pane.
2. On the **Replication** page, click **Restore Now** in the **Restore Objects Data** area to restore data to Elasticsearch.

## Clear unused indices

Directory Manager stores object attributes and their values in Elasticsearch, where each object type in an identity store is indexed separately. If you delete an identity store from Directory Manager, its indices aren't required anymore. You can clear them from Elasticsearch to avoid clutter.

**To clear unused indices:**

1. In Admin Center, click **Replication** in the left pane.
2. On the **Replication** page, click **Clear Now** in the **Clear Unused Indices** area. The system checks if Elasticsearch holds any indices for an identity store that no longer exists in Directory Manager.
3. The **Delete Unused Indices** dialog box displays the indices to be deleted from Elasticsearch. Click **Delete** to proceed or click **Don't Delete** to close the dialog box without clearing the indices.

   If no unused indices are found, a notification appears in the bottom-right corner to inform you that no unused indices were found.

## Change the Search Guard password

Search Guard is a security plugin that adds an authentication mechanism to Elasticsearch. The option to change the Search Guard password is available when you install and manage Elasticsearch with Directory Manager. Users who use their own instance of Elasticsearch can't change the Search Guard password using Directory Manager.

You can change the password of the admin account that Directory Manager uses to access Elasticsearch.

**To change the password:**

1. In Admin Center, click **Replication** in the left pane.
2. On the **Replication** page, click **Change Password** in the **Search Guard Settings** area.
3. On the **Change Password** dialog box, provide the current password for the Search Guard admin account in the **Your current password** box.
4. Specify a new password in the **New Password** and **Confirm Password** boxes.
5. Click **Change Password**.

## Set a threshold to trigger replication error notifications

The Replication service runs every x minutes to replicate objects in an identity store. If it fails to replicate during a run, Directory Manager displays a replication error, as discussed in the [View the replication status for objects](#view-the-replication-status-for-objects) topic.

Directory Manager generates notifications to alert administrators to replication errors. By default, the triggering threshold is set to ‘3 attempts’, which means that notifications are sent when errors occur in three consecutive runs of the Replication service. You can change the threshold value as required.

Replication error notifications are sent to recipients whose email addresses are specified in the **To** and **CC** boxes on the **Notifications** page. See the [Specify Notification Recipients](/docs/directorymanager/11.2/admincenter/identitystore/configure/smtpserver.md#specify-notification-recipients) topic.

**To set a triggering threshold:**

1. In Admin Center, click **Replication** in the left pane.
2. On the **Replication** page, review the **Replication Error Notification** area. It displays ‘3 Attempts’ as the default threshold for initiating notifications. This means that notifications are sent when three consecutive runs of the replication service result in error. Notifications aren't sent if, for example, errors occur in two consecutive runs but no error shows in the third consecutive run.
3. To change the threshold value, click **Edit**.
4. Specify a threshold value to trigger replication error notifications and click the check mark.
