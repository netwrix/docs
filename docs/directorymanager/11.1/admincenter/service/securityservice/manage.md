---
title: "Manage Security Service Settings"
description: "Manage Security Service Settings"
sidebar_position: 20
---

# Manage Security Service Settings

Security services in Directory Manager are displayed on the **Security Service** tab. A card for a
service displays information such as its name and status.

You can manage several settings for a service, such as:

- Change the name of a service
- Start or stop a service
- Configure file logging for a service
- Delete a service

## View Service Details

Follow the steps to view the service details.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the **Applications** page, click the **Security Service** tab.  
The tab displays the default Security service created while configuring Directory Manager and any
other Security service that you have created. When multiple Directory Manager instances have been
deployed, you will find multiple default Security services on this tab page, as each instance has
its own default Security service. See the
[Elasticsearch Clusters, Nodes, and Directory Manager](/docs/directorymanager/11.1/admincenter/service/overview.md#elasticsearch-clusters-nodes-and-directory-manager)
topic for additional information.  
For details displayed on a service card, see the table in the
[View Data Service Details](/docs/directorymanager/11.1/admincenter/service/dataservice/manage.md#view-data-service-details) topic.

## Manage Security Service Settings

See the [Manage Data Service Settings](/docs/directorymanager/11.1/admincenter/service/dataservice/manage.md) topic to manage settings for a
Security service, such as deployment and log settings.

## Manage Advanced Settings

If you have created multiple Security services for load balancing and high availability, the
Advanced Settings option enables the services to share session information.

Follow the steps to enable communication between multiple Security services.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Applications page, click the **Security Service** tab.  
The tab displays the default Security service created while configuring Directory Manager and any
other Security service that you have created. When multiple Directory Manager instances have been
deployed, you will find multiple default Security services on this tab page, as each instance has
its own default Security service. See the
[Elasticsearch Clusters, Nodes, and Directory Manager](/docs/directorymanager/11.1/admincenter/service/overview.md#elasticsearch-clusters-nodes-and-directory-manager)
topics for additional information.  
For details displayed on a service card, see the table in the
[View Data Service Details](/docs/directorymanager/11.1/admincenter/service/dataservice/manage.md#view-data-service-details) topic for additional
information.

Step 3 – Click the **ellipsis button** for a Security service and select **Settings**.

Step 4 – Select **Advanced Settings** under Server Settings.

Step 5 – Enable the **Distributed Cache** toggle button to enable communication among defined
Security services.

Communication between Security services is now enabled.

## Delete a Security Service

Deleting a Security service removes the following:

- **For a native IIS deployment:**

    - The Security service directory under the following location on the Directory Manager server:  
      X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\  
      (X represents the Directory Manager installation drive)
    - The Security service directory from the website in IIS

- **For a remote IIS deployment:**

    - The service's directory in the remote IIS site
    - The service's physical directory under the folder mapped to the remote IIS site

- **For a Docker deployment:**

    The container created in Docker Engine for the Security service

Follow the steps to delete a Security service.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the **Applications** page, click the **Security Service** tab.

Step 3 – Click the ellipsis button for a Security service and select **Delete**.

:::note
You cannot delete the default Security service. You cannot also delete a Security service that
has been linked with a Directory Manager client, such as the Directory Manager portal.

:::
