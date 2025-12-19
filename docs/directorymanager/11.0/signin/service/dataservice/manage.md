---
title: "Manage Data Service Settings"
description: "Manage Data Service Settings"
sidebar_position: 20
---

# Manage Data Service Settings

Data services in GroupID are displayed on the **Data Service** tab. A card for a service displays
information such as its name and status.

You can manage several settings for a service, such as:

- Change the display name of a service
- Start or stop a service
- Configure file logging for a service
- Delete a service

What do you want to do?

- [View Data Service Details](#view-data-service-details)
- [Change a Service’s Display Name](#change-a-services-display-name)
- [Start or Stop a Service](#start-or-stop-a-service)
- [View the Launch URL for a Service](#view-the-launch-url-for-a-service)
- [View the Deployment Settings for a Service](#view-the-deployment-settings-for-a-service)
- [Specify Log Settings for a Service](#specify-log-settings-for-a-service)
- [Delete a Data Service](#delete-a-data-service)

## View Data Service Details

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Data Service** tab. The **Data Service** tab page is
   displayed, that lists the default Data service created while configuring GroupID and any other
   Data service that you have created.  
   When multiple GroupID instances have been deployed, you will find multiple default Data services
   on this tab page, as each instance has its own default Data service. See the
   [Elasticsearch Clusters, Nodes, and GroupID](/docs/directorymanager/11.0/signin/service/overview.md#elasticsearch-clusters-nodes-and-groupid)
   topic.
3. The card for a Data service displays the following information:

    | Info                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Name                 | The name given to the service. For a Mobile service, the identity stores associated with the service are also displayed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | Deployment Instances | Displays the deployment name of the service and the web server where it is deployed. For a Mobile service, this area may display multiple deployment instance(s) of a service. Each instance is represented by a tile that shows the deployment name of the instance and the target web server.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | Status               | A service has one of the following statuses: - **Running:** Indicates that the service is up and running. - **Stopped:** Indicates that GroupID is unable to communicate with the service. To troubleshoot, go to the web server where the service is deployed (IIS, remote IIS, or Docker) and make sure the service is running. - **Error:** Any issue other than _stopped_ is categorized as _error_. Contact your system administrator to resolve it.                                                                                                                                                                                                                                                                                 |
    | Launch Application   | Click it to launch the service page. - For a Data service, Replication service, Email service, and Scheduler service, a page is displayed that simply shows the status of the service as _running_, _stopped_, or _error_. - For a Security service, the **GroupID Applications** page is displayed. Performing an action on this page will be carried out through the respective Security service. See the [Access your Applications](/docs/directorymanager/11.0/signin/concepts/accessapplications.md) topic. - For Admin Center, this link launches the Admin Center application. - For Mobile service, it launches the **GroupIDMobileService** page that enables users to configure the GroupID mobile app on a phone. |
    | Ellipsis             | Click it to launch a shortcut menu with the following options: - **Settings:** launches the service settings page, where you can manage deployment settings and log settings. - **Delete:** deletes the service. This option is not available for the default services. For Mobile service, this shortcut menu also displays the following options: - **Deploy Another Instance:** enables you to deploy another instance of the service. - **Copy:** enables you to create a new Mobile service by copying the settings of this service.                                                                                                                                                                                                 |

## Change a Service’s Display Name

A service is assigned an application name during creation, which is used as it's display name in
GroupID. On changing it, the service is displayed with the new name.

**To change the display name:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the desired service. For example, click the
   **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. In the **Application Name** box on the **General Settings** page, enter a new name for the
   service.
5. Click **Save**.

## Start or Stop a Service

You can start and stop a service deployed in native IIS, remote IIS, and Docker. When you stop a
service, the following happens:

- For a native IIS deployment, GroupID stops the service’s application pool.
- For a remote IIS deployment, GroupID stops the site that hosts the service.
- For a Docker deployment, GroupID stops the container where the service is deployed.

**To start or stop a service:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the desired service. For example, click the
   **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed.
5. The **Select Application Deployment** drop-down list displays the deployment name of the service.

    - When the service is running, **Stop** is displayed next to it. Click it to stop the service.
    - When the service is stopped, **Start** is displayed next to it. Click it to start the service.

## View the Launch URL for a Service

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the desired service. For example, click the
   **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed. The **Select Application Deployment** drop-down list displays the deployment
   name of the service.
5. The **Launch URL** box on the **Deployment Configurations** tab displays the URL. Copy and paste
   it in the browser to launch the service. See the table in the
   [View Data Service Details](#view-data-service-details) topic to understand what is displayed
   with this URL.

## View the Deployment Settings for a Service

1. n Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the desired service. For example, click the
   **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed. The **Select Application Deployment** drop-down list displays the deployment
   name of the service.
5. On the **Deployment Configurations** tab:

    - For a native IIS deployment, you can view the name of the service application in IIS, the site
      where it is hosted, the URL to launch the service page, and any other services that this
      service uses.
    - For a remote IIS deployment, you can view the Microsoft IIS Administration API URL, access
      token, and credentials. You can also view the name of the service application in remote IIS,
      the site where it is hosted, the URL to launch the service page, and any other services that
      this service uses.
    - For a Docker deployment, you can view the port and service URL used to communicate with Docker
      engine. You can also view the URL to launch the service page, and any other services that this
      service uses.

## Specify Log Settings for a Service

GroupID uses file logging and Windows logging to monitor events from a service. You can set the
logging level for a service to track a specific set of information for it.

For details on file logging and Windows logging, see the
[File Logging](/docs/directorymanager/11.0/signin/applications/portal/server/log.md#file-logging)
and
[Windows Logging](/docs/directorymanager/11.0/signin/applications/portal/server/log.md#windows-logging)
topics. Replace references to the portal with the respective service.

NOTE: Windows logging is not available for Data service and Security service.

### Change the File Logging Level for a Service

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the tab for the desired service. For example, click the
   **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed. The **Select Application Deployment** drop-down list displays the deployment
   name of the service.
5. Click the **Logging** tab.
6. In the **File Logging** area, select a logging level for the service in the **Log Events**
   drop-down list.  
   File logging groups events into different levels, based on the type of information captured. See
   the table in the
   [Change the File Logging Level for a Portal Instance](/docs/directorymanager/11.0/signin/applications/portal/server/log.md#change-the-file-logging-level-for-a-portal-instance)topic
   for information on the logging levels. Replace references to the portal with the respective
   service.
7. Click **Save**.

### Turn off File Logging for a Service

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the tab for the desired service. For example, click the
   **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed. The **Select Application Deployment** drop-down list displays the deployment
   name of the service.
5. Click the **Logging** tab.
6. In the **File Logging** area, select _Off_ in the **Log Events** drop-down list.
7. Click **Save**.

### Change the Windows Logging Level for a Service

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the tab for the desired service. For example, click the
   **Replication Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed. The **Select Application Deployment** drop-down list displays the deployment
   name of the service.
5. Click the **Logging** tab.
6. In the **Windows Logging** area, select a logging level for the service in the **Log Events**
   drop-down list.  
   Windows logging groups events into different levels, based on the type of information captured.
   See the table in the
   [Change the File Logging Level for a Portal Instance](/docs/directorymanager/11.0/signin/applications/portal/server/log.md#change-the-file-logging-level-for-a-portal-instance)topic
   for information on the logging levels. Replace references to the portal with the respective
   service.
7. Click **Save**.

### Turn Off Windows Logging for a Service

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the tab for the desired service. For example, click the
   **Replication Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed. The **Select Application Deployment** drop-down list displays the deployment
   name of the service.
5. Click the **Logging** tab.
6. In the **Windows Logging** area, select _Off_ in the **Log Events** drop-down list.
7. Click **Save**.

## Delete a Data Service

Deleting a Data service removes the following:

- **For a native IIS deployment:**

    - The Data service directory under the following location on the GroupID server:  
      X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\  
      (X represents the GroupID installation drive)
    - The Data service directory from the website in IIS

- **For a remote IIS deployment:**

    - The service's directory in the remote IIS site
    - The service's physical directory under the folder mapped to the remote IIS site

- **For a Docker deployment:**

    The container created in Docker Engine for the Data service

**To delete a Data service:**

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Data Service** tab.
3. On the **Data Service** tab page, click the ellipsis button for a Data service and select
   **Delete**.

NOTE: You cannot delete the default Data service. You cannot also delete a Data service that has
been linked with a GroupID client, such as the GroupID portal or a Mobile service.

**See Also**

- [GroupID Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [Data Service](/docs/directorymanager/11.0/signin/service/dataservice/overview.md)
- [Create a Data Service](/docs/directorymanager/11.0/signin/service/dataservice/create.md)
- [Get Logs](/docs/directorymanager/11.0/signin/concepts/logs.md)
