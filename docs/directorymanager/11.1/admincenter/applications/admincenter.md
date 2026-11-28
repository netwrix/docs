---
title: "Directory Manager Admin Center Application"
description: "View the hosting and deployment details of Admin Center, launch it, rename it, and configure its event logging."
keywords:
  - Directory Manager Admin Center
  - Admin Center deployment settings
  - launch Admin Center
  - Admin Center event logging
  - native IIS
sidebar_position: 10
---

# Directory Manager Admin Center Application

Admin Center lets administrators manage Directory Manager clients and configure settings that
different functions of the application use.

When multiple instances of Directory Manager are deployed, Directory Manager creates a separate
Admin Center application for each instance in native IIS.

## View Admin Center hosting details

To view the hosting details of Admin Center:

1. In Admin Center, click **Applications** in the left pane.
2. On the Applications page, click the **Admin Center** tab.

   The tab displays Admin Center hosted in native IIS. When multiple Directory Manager instances are
   deployed, the tab shows one Admin Center card for each instance. See the
   [Elasticsearch Clusters, Nodes, and Directory Manager](/docs/directorymanager/11.1/admincenter/service/overview.md#elasticsearch-clusters-nodes-and-directory-manager)
   topic.

   For details on an Admin Center card, see the table in the
   [View Data Service Details](/docs/directorymanager/11.1/admincenter/service/dataservice/manage.md#view-data-service-details)
   topic.

You can't create an Admin Center application or delete an existing one from the Admin Center tab.

## Launch Admin Center

To launch Admin Center:

1. In Admin Center, click **Applications** in the left pane.
2. On the Admin Center tab, click **Launch Application** on an Admin Center card.

Give the Admin Center URL to admin and helpdesk users so they can access it. Copy the URL from the
address bar or from the Admin Center deployment settings. See the
[View the Launch URL for a Service](/docs/directorymanager/11.1/admincenter/service/dataservice/manage.md#view-the-launch-url-for-a-service)
topic.

## Change the application display name

To change the display name of the Admin Center application, see the
[Change a Service’s Display Name](/docs/directorymanager/11.1/admincenter/service/dataservice/manage.md#change-a-services-display-name)
topic. Replace references to the service with Admin Center.

## View deployment settings

You can view the deployment settings for Admin Center, such as the IIS site that hosts it, the IIS
Application name given to it, and the URL to launch it.

To view the deployment settings:

1. In Admin Center, click **Applications** in the left pane.
2. On the Admin Center tab, click the ellipsis button on an Admin Center card and select
   **Settings**.
3. Click **Deployments** under Server Settings.

   The Deployment Settings page opens, where you can view the Admin Center deployment details in
   native IIS.

## Configure event logging

To configure file logging and Windows logging for Admin Center, see the
[Specify Log Settings for a Service](/docs/directorymanager/11.1/admincenter/service/dataservice/manage.md#specify-log-settings-for-a-service)
topic.
