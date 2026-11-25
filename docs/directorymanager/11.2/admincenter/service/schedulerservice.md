---
title: "Directory Manager Scheduler Service"
description: "View the Scheduler service, which triggers identity store schedules at their set frequency, and find the settings you can manage."
keywords:
  - Directory Manager Scheduler service
  - scheduled jobs
  - identity store schedules
  - service settings
sidebar_position: 50
---

# Directory Manager Scheduler Service

In Directory Manager, schedules perform different tasks in an identity store. They run at a
specified frequency to run their respective functions automatically. The Scheduler service triggers
these schedules at their respective frequency.

## View Scheduler service details

To view the details of the Scheduler service:

1. In Admin Center, click **Applications** in the left pane.

2. On the Applications page, click the **Scheduler Service** tab.

   The tab displays the default Scheduler services hosted in native IIS. The number of services on
   the tab depends on the number of nodes in all Elasticsearch clusters in your environment, because
   each cluster has its own Scheduler services. See the
   [Elasticsearch Clusters, Nodes, and Directory Manager](overview.md#elasticsearch-clusters-nodes-and-directory-manager)
   topic for additional information.

   For details on a service card, see the table in the
   [View Data Service Details](dataservice/manage.md#view-data-service-details) topic.

You can't create a new Scheduler service or delete the existing one.

## Manage Scheduler service settings

You can manage the following settings for a Scheduler service:

- [Change a Service’s Display Name](dataservice/manage.md#change-a-services-display-name)
- [Start or Stop a Service](dataservice/manage.md#start-or-stop-a-service)
- [View the Deployment Settings for a Service](dataservice/manage.md#view-the-deployment-settings-for-a-service)
- [Specify Log Settings for a Service](dataservice/manage.md#specify-log-settings-for-a-service)
