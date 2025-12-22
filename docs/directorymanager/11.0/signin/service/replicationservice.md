---
title: "Replication Service"
description: "Replication Service"
sidebar_position: 50
---

# Replication Service

The Replication service replicates the attributes of the following objects from the provider (such
as Active Directory) to the Elasticsearch repository.

- Group
- User
- Contact
- Computers
- Organizational Unit

For more on the Replication service, see the
[Elasticsearch and Replication ](/docs/directorymanager/11.0/signin/replication/overview.md)topic.

The service is also responsible for syncing data between the Elasticsearch clusters in your
environment.

What do you want to do?

- [View Replication Service Details](#view-replication-service-details)
- [Manage Replication Service Settings](#manage-replication-service-settings)
- [Enable Elastic Cluster Syncing](#enable-elastic-cluster-syncing)

## View Replication Service Details

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Service** tab.  
   The tab displays the default Replication service hosted in native IIS. When multiple GroupID
   instances have been deployed, you will find multiple default Replication services on this tab
   page, as each instance has its own default Replication service. See the
   [Elasticsearch Clusters, Nodes, and GroupID](/docs/directorymanager/11.0/signin/service/overview.md#elasticsearch-clusters-nodes-and-groupid)
   topic.  
   For details displayed on a service card, see the table in the
   [View Data Service Details](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#view-data-service-details)
   topic.

    You cannot create a Replication Service or delete an existing one from Admin Center.

## Manage Replication Service Settings

You can manage the following settings for a Replication service:

- [Change a Service’s Display Name](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#change-a-services-display-name)
- [Start or Stop a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#start-or-stop-a-service)
- [View the Deployment Settings for a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#view-the-deployment-settings-for-a-service)
- [Specify Log Settings for a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#specify-log-settings-for-a-service)

## Enable Elastic Cluster Syncing

In an environment with multiple Elasticsearch clusters, you can choose to sync data between
clusters. You can also specify an interval for syncing.

NOTE: In GroupID, a separate Replication service is created for each node in a cluster. To enable
data syncing between clusters, simply enable the sync option for one Replications service within
each cluster.

To sync data:

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the **Replication Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Configurations** under **Server Settings**.
5. On the **Configurations** page, enable the **Elastic Cluster Syncing** toggle button to sync data
   from all other clusters to the cluster that uses this Replication service.  
   If this toggle button is disabled for a cluster (say, ClusterA), data from other clusters will
   not be synced to ClusterA.  
   Suppose syncing is disabled for ClusterA but enabled for ClusterB and ClusterC. This means that
   (a) data from ClusterB and ClusterC will not be synced to ClusterA (b) data from ClusterA will be
   synced to ClusterB and ClusterC.
6. You can specify an interval for syncing data. Click **Edit** under **Elastic Cluster Syncing
   Interval**, specify an interval (in seconds) and click the check mark.  
   By default, the interval is set to 5 seconds. You can specify a maximum interval of 900 seconds.
7. Click **Save**.

**See Also**

- [GroupID Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [Services](/docs/directorymanager/11.0/signin/service/overview.md)
