---
title: "Directory Manager Email Service"
description: "View the Email service, learn how it queues and sends notifications through each identity store's SMTP server, and find its settings."
keywords:
  - Directory Manager Email service
  - notification queue
  - SMTP server
  - email notifications
sidebar_position: 30
---

# Directory Manager Email Service

The Email service maintains a queue of all email notifications that the identity stores in Directory Manager generate. It sends them one by one through the SMTP server configured for the respective identity store.

When the SMTP server for an identity store is down, notifications stay in the queue until the server is up again. The Email service then delivers them. Successfully delivered emails are removed from the queue.

For more on the notification queue, see the [Manage the Directory Manager Notification Queue](/docs/directorymanager/11.2/admincenter/notification/queue.md) topic.

## View Email service details

To view Email service details:

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Email Service** tab.

   The tab displays the default Email services hosted in native IIS. The number of services on the tab depends on the number of nodes in all Elasticsearch clusters in your environment, because each node has its own Email service.

   On each Directory Manager instance, Directory Manager operations generate notifications and queue them in the Notification queue. All the deployed services on each Directory Manager instance check the notification queue every 100 seconds. They send 10 notifications from the queue for processing.

For more information, see the [Elasticsearch Clusters, Nodes, and Directory Manager](overview.md#elasticsearch-clusters-nodes-and-directory-manager) topic. For details on a service card, see the table in the [View Data Service Details](dataservice/manage.md#view-data-service-details) topic.

You can't create a new Email service or delete the existing one.

## Manage Email service settings

You can manage the following settings for the Email service:

- [Change a Service’s Display Name](dataservice/manage.md#change-a-services-display-name)
- [Start or Stop a Service](dataservice/manage.md#start-or-stop-a-service)
- [View the Deployment Settings for a Service](dataservice/manage.md#view-the-deployment-settings-for-a-service)
- [Specify Log Settings for a Service](dataservice/manage.md#specify-log-settings-for-a-service)
