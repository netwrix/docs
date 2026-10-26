---
title: "Scheduler Service"
description: "Scheduler Service"
sidebar_position: 50
---

# Scheduler Service

In Directory Manager, schedules perform different tasks in an identity store. They run at a
specified frequency to auto execute their respective functions. The Scheduler service is responsible
for triggering these schedules at their respective frequency.

## View Scheduler Service Details

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Applications page, click the **Scheduler Service** tab.

The tab displays the default Scheduler services hosted in native IIS. The number of services
displayed on the tab depend on the number of nodes in all Elasticsearch clusters in your
environment, as each cluster has its own Scheduler services. See the
[Elasticsearch Clusters, Nodes, and Directory Manager](overview.md#elasticsearch-clusters-nodes-and-directory-manager)
topic for additional information.  
For details displayed on a service card, see the table in the
[View Data Service Details](dataservice/manage.md#view-data-service-details) topic.

You can't create a new Scheduler service or delete the existing one.

## Manage Scheduler Service Settings

You can manage the following settings for a Scheduler service:

- [Change a Service’s Display Name](dataservice/manage.md#change-a-services-display-name)
- [Start or Stop a Service](dataservice/manage.md#start-or-stop-a-service)
- [View the Deployment Settings for a Service](dataservice/manage.md#view-the-deployment-settings-for-a-service)
- [Specify Log Settings for a Service](dataservice/manage.md#specify-log-settings-for-a-service)
