---
title: "Delete a Directory Manager Mobile Service"
description: "Delete a Mobile service or one of its deployment instances in Admin Center, and see what Directory Manager removes from IIS or Docker."
keywords:
  - delete Mobile service
  - Mobile service deployment instance
  - native IIS
  - remote IIS
  - Docker container
sidebar_position: 20
---

# Delete a Directory Manager Mobile Service

You can delete a Mobile service or an instance of a service. When you delete a service, Directory Manager also deletes all its
instances.

What do you want to do?

- [Delete a Deployment Instance for a Service](#delete-a-deployment-instance-for-a-service)
- [Delete a Service](#delete-a-service)

## Delete a Deployment Instance for a Service

A service can have multiple deployment instances. When you delete an instance, the following is
removed:

- **For an instance in native IIS:**

    - The service directory under the following location on the Directory Manager server:  
      X:\Program Files\Imanami\GroupID 11.0\GroupIDMobileService\Inetpub\  
      (X represents the Directory Manager installation drive)
    - The service directory in the IIS site

- **For an instance in remote IIS:**

    - The service's directory in the remote IIS site
    - The service's physical directory under the folder mapped to the remote IIS site

- **For an instance in Docker:**

    The container created in Docker Engine for the service

**To delete a deployment instance:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Select **Deployments** under **Server Settings** in the left pane.  
   The **Deployment Settings** page has varying tabs, depending on the deployment instances of the
   service.

    - The **IIS** tab is available when one or more service instances are deployed in native IIS.
    - The **Remote IIS** tab is available when one or more service instances are deployed in remote
      IIS.
    - The **Docker** tab is available when one or more service instances are deployed in Docker.

    Select a tab to delete a service instance deployed in the respective web server.

4. The **Select Application Deployment** dropdown list displays the service instances deployed on
   the selected web server. Select an instance and click **Delete**.

## Delete a Service

Deleting a Mobile service removes all its deployments and configurations from Directory Manager.

**To delete a service:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Delete**.
