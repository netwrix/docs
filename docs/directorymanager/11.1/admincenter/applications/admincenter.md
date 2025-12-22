---
title: "Admin Center"
description: "Admin Center"
sidebar_position: 10
---

# Admin Center

Admin Center enables administrators to configure settings that are used by different functions of
the application and manage Directory Manager clients.

When multiple instances of Directory Manager are deployed, a separate Admin Center application is
created for each instance in native IIS.

## View Admin Center Hosting Details

Follow the steps to view Admin Center Hosting details.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Applications page, click the **Admin Center** tab.  
The tab displays Admin Center hosted in native IIS. When multiple Directory Manager instances have
been deployed, you will find multiple Admin Center cards on this tab page, each card representing a
separate instance. See the
[Elasticsearch Clusters, Nodes, and Directory Manager](/docs/directorymanager/11.1/admincenter/service/overview.md#elasticsearch-clusters-nodes-and-directory-manager)
topic.  
For details displayed on an Admin Center card, see the table in the
[View Data Service Details](/docs/directorymanager/11.1/admincenter/service/dataservice/manage.md#view-data-service-details) topic for additional
information.

You cannot create an Admin Center application or delete an existing one from Admin Center tab.

## Launch Admin Center

Follow the steps to launch Admin Center.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Admin Center tab, click **Launch Application** on an Admin Center card.  
Provide the Admin Center URL to admin and helpdesk users so they can access it. You can either copy
the URL from the address bar or from Admin Center deployment settings. See the See the
[View the Launch URL for a Service](/docs/directorymanager/11.1/admincenter/service/dataservice/manage.md#view-the-launch-url-for-a-service) topic.

## Change the Application Display Name

To change the display name of the Admin Center application, see the
[Change a Service’s Display Name](/docs/directorymanager/11.1/admincenter/service/dataservice/manage.md#change-a-services-display-name) topic.
Replace references to the service with Admin Center.

## View Deployment Settings

You can view deployment settings for Admin Center, such as the IIS site that hosts it, the IIS
Application name given to it, and the URL to launch it.

Follow the steps to view deployment settings.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Admin Center tab, click the ellipsis button on an Admin Center card and select
**Settings**.

Step 3 – Click **Deployments** under Server Settings. The Deployment Settings page is displayed,
where you can view Admin Center deployment details in native IIS.

## Configure Event Logging

To configure file logging and Windows logging for Admin Center, see the
[Specify Log Settings for a Service](/docs/directorymanager/11.1/admincenter/service/dataservice/manage.md#specify-log-settings-for-a-service) topic
for additional information.
