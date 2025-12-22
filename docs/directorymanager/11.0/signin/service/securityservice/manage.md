---
title: "Manage Security Service Settings"
description: "Manage Security Service Settings"
sidebar_position: 20
---

# Manage Security Service Settings

Security services in GroupID are displayed on the **Security Service** tab. A card for a service
displays information such as its name and status.

You can manage several settings for a service, such as:

- Change the name of a service
- Start or stop a service
- Configure file logging for a service
- Delete a service

What do you want to do?

- View Service Details
- Manage Security Service Settings
- Delete a Security Service

## View Service Details

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Security Service** tab.  
   The tab displays the default Security service created while configuring GroupID and any other
   Security service that you have created. When multiple GroupID instances have been deployed, you
   will find multiple default Security services on this tab page, as each instance has its own
   default Security service. See the
   [Elasticsearch Clusters, Nodes, and GroupID](/docs/directorymanager/11.0/signin/service/overview.md#elasticsearch-clusters-nodes-and-groupid)
   topic.  
   For details displayed on a service card, see the table in the
   [View Data Service Details](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#view-data-service-details)
   topic.

## Manage Security Service Settings

See the
[Manage Data Service Settings](/docs/directorymanager/11.0/signin/service/dataservice/manage.md)
topic to manage settings for a Security service, such as deployment and log settings.

## Delete a Security Service

Deleting a Security service removes the following:

- **For a native IIS deployment:**

    - The Security service directory under the following location on the GroupID server:  
      X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\  
      (X represents the GroupID installation drive)
    - The Security service directory from the website in IIS

- **For a remote IIS deployment:**

    - The service's directory in the remote IIS site
    - The service's physical directory under the folder mapped to the remote IIS site

- **For a Docker deployment:**

    The container created in Docker Engine for the Security service

**To delete a Security service:**

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Security Service** tab.
3. Click the ellipsis button for a Security service and select **Delete**.

NOTE: You cannot delete the default Security service. You cannot also delete a Security service that
has been linked with a GroupID client, such as the GroupID portal or a Mobile service.

See Also

- [GroupID Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [Services](/docs/directorymanager/11.0/signin/service/overview.md)
- [Create a Security Service](/docs/directorymanager/11.0/signin/service/securityservice/create.md)
