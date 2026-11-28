---
title: "Manage Directory Manager Security Service Settings"
description: "View, rename, start, stop, and delete a Security service, and enable the distributed cache so multiple Security services share session information."
sidebar_position: 20
keywords:
  - Security service settings
  - distributed cache
  - delete Security service
  - Advanced Settings
  - high availability
---

# Manage Directory Manager Security Service Settings

Security services in Directory Manager appear on the **Security Service** tab. A card for a service shows information such as its name and status.

You can manage several settings for a service, such as:

- Change the name of a service
- Start or stop a service
- Configure file logging for a service
- Delete a service

## View service details

To view the service details:

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Security Service** tab. The tab shows the default Security service created while configuring Directory Manager and any other Security service that you have created.

   When multiple Directory Manager instances are deployed, this tab shows multiple default Security services, because each instance has its own default Security service. For more information, see the [Elasticsearch Clusters, Nodes, and Directory Manager](/docs/directorymanager/11.2/admincenter/service/overview.md#elasticsearch-clusters-nodes-and-directory-manager) topic.

   For the details on a service card, see the table in the [View Data Service Details](/docs/directorymanager/11.2/admincenter/service/dataservice/manage.md#view-data-service-details) topic.

## Manage Security service settings

To manage settings for a Security service, such as deployment and log settings, see the [Manage Directory Manager Data Service Settings](/docs/directorymanager/11.2/admincenter/service/dataservice/manage.md) topic.

## Manage advanced settings

If you have created multiple Security services for load balancing and high availability, the Advanced Settings option lets services share session information.

To enable communication between multiple Security services:

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Security Service** tab. The tab shows the default Security service created while configuring Directory Manager and any other Security service that you have created.

   When multiple Directory Manager instances are deployed, this tab shows multiple default Security services, because each instance has its own default Security service. For more information, see the [Elasticsearch Clusters, Nodes, and Directory Manager](/docs/directorymanager/11.2/admincenter/service/overview.md#elasticsearch-clusters-nodes-and-directory-manager) topic.

   For the details on a service card, see the table in the [View Data Service Details](/docs/directorymanager/11.2/admincenter/service/dataservice/manage.md#view-data-service-details) topic.

3. Click the **ellipsis button** for a Security service and select **Settings**.
4. Select **Advanced Settings** under **Server Settings**.
5. Enable the **Distributed Cache** toggle button to enable communication among defined Security services.

Communication between Security services is now enabled.

## Delete a Security service

Deleting a Security service removes the following:

- **For a native IIS deployment:**

  - The Security service directory under the following location on the Directory Manager server: `X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\`. X represents the Directory Manager installation drive.
  - The Security service directory from the website in IIS

- **For a remote IIS deployment:**

  - The service's directory in the remote IIS site
  - The service's physical directory under the folder mapped to the remote IIS site

- **For a Docker deployment:**

  The container created in Docker Engine for the Security service

To delete a Security service:

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Security Service** tab.
3. Click the ellipsis button for a Security service and select **Delete**.

:::note
You can't delete the default Security service. You also can't delete a Security service that is linked with a Directory Manager client, such as the Directory Manager portal.
:::
