---
title: "GroupID Scheduler Service"
description: "View the Scheduler service, which triggers identity store schedules at their set frequency, and find the settings you can manage."
keywords:
  - GroupID Scheduler service
  - scheduled jobs
  - identity store schedules
  - service settings
sidebar_position: 60
---

# GroupID Scheduler Service

In GroupID, schedules perform different tasks in an identity store. They run at a
specified frequency to automatically run their respective functions. The Scheduler service is responsible for
triggering these schedules at their respective frequency.

What do you want to do?

- [View Scheduler Service Details](#view-scheduler-service-details)
- [Manage Scheduler Service Settings](#manage-scheduler-service-settings)

## View Scheduler Service Details

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Scheduler Service** tab.

    The tab displays the default Scheduler services hosted in native IIS. The number of services
    displayed on the tab depends on the number of Elasticsearch clusters in your environment, as each
    cluster has its own Scheduler service. See the
    [Elasticsearch Clusters, Nodes, and GroupID](/docs/directorymanager/11.0/signin/service/overview.md#elasticsearch-clusters-nodes-and-groupid)
    topic.  
    For details displayed on a service card, see the table in the
    [View Data Service Details](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#view-data-service-details)
    topic.

    You can't create a new Scheduler service or delete the existing one.

## Manage Scheduler Service Settings

You can manage the following settings for the Scheduler service:

- [Change a Service’s Display Name](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#change-a-services-display-name)
- [Start or Stop a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#start-or-stop-a-service)
- [View the Deployment Settings for a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#view-the-deployment-settings-for-a-service)
- [Specify Log Settings for a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#specify-log-settings-for-a-service)

**See Also**

- [Manage GroupID Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [GroupID Services](/docs/directorymanager/11.0/signin/service/overview.md)
