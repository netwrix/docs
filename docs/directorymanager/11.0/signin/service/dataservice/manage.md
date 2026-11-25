---
title: "Manage Directory Manager Data Service Settings"
description: "Rename, start, stop, view the deployment and launch URL of, configure logging for, and delete Directory Manager Data services in Admin Center."
keywords:
  - Data service launch URL
  - service display name
  - service logging level
  - service deployment settings
  - delete Data service
sidebar_position: 20
---

# Manage Directory Manager Data Service Settings

Data services in Directory Manager are displayed on the **Data Service** tab. A card for a service displays
information such as its name and status.

You can manage several settings for a service, such as:

- Change the display name of a service
- Start or stop a service
- Configure file logging for a service
- Delete a service

## View Data Service Details

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Data Service** tab. The **Data Service** tab page is
   displayed. It lists the default Data service created while configuring Directory Manager and any other
   Data service that you have created.  
   When multiple Directory Manager instances have been deployed, you find multiple default Data services
   on this tab page, as each instance has its own default Data service. See the
   [Elasticsearch Clusters, Nodes, and GroupID](/docs/directorymanager/11.0/signin/service/overview.md#elasticsearch-clusters-nodes-and-groupid)
   topic.
3. The card for a Data service displays the following information:

    | Info                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Name                 | The name given to the service. For a Mobile service, the identity stores associated with the service are also displayed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | Deployment Instances | Displays the deployment name of the service and the web server where it is deployed. For a Mobile service, this area can display multiple deployment instances of a service. Each instance is represented by a tile that shows the deployment name of the instance and the target web server.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | Status               | A service has one of the following statuses: - **Running:** Indicates that the service is running. - **Stopped:** Indicates that Directory Manager is unable to communicate with the service. To troubleshoot, go to the web server where the service is deployed (IIS, remote IIS, or Docker) and ensure the service is running. - **Error:** Any issue other than _stopped_ is categorized as _error_. Contact your system administrator to resolve it.                                                                                                                                                                                                                                                                                 |
    | Launch Application   | Click it to launch the service page. - For a Data service, Replication service, Email service, and Scheduler service, a page is displayed that shows the status of the service as _running_, _stopped_, or _error_. - For a Security service, the **GroupID Applications** page is displayed. The respective Security service performs any action on this page. See the [Access Your Applications in Directory Manager](/docs/directorymanager/11.0/signin/concepts/accessapplications.md) topic. - For Admin Center, this launches the Admin Center application. - For Mobile service, it launches the **GroupIDMobileService** page, where users can configure the Directory Manager mobile app on a phone. |
    | Ellipsis             | Click it to launch a shortcut menu with the following options: - **Settings:** launches the service settings page, where you can manage deployment settings and log settings. - **Delete:** deletes the service. This option isn't available for the default services. For Mobile service, this shortcut menu also displays the following options: - **Deploy Another Instance:** lets you deploy another instance of the service. - **Copy:** lets you create a new Mobile service by copying the settings of this service.                                                                                                                                                                                                 |

## Change a Service's Display Name

A service is assigned an application name during creation, which is used as its display name in
Directory Manager. When you change it, Directory Manager displays the service with the new name.

To change the display name:

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the
   **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. In the **Application Name** box on the **General Settings** page, enter a new name for the
   service.
5. Click **Save**.

## Start or Stop a Service

You can start and stop a service deployed in native IIS, remote IIS, and Docker. When you stop a
service, the following happens:

- For a native IIS deployment, Directory Manager stops the service's application pool.
- For a remote IIS deployment, Directory Manager stops the site that hosts the service.
- For a Docker deployment, Directory Manager stops the container where the service is deployed.

To start or stop a service:

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the
   **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed.
5. The **Select Application Deployment** dropdown list displays the deployment name of the service.

    - When the service is running, **Stop** is displayed next to it. Click it to stop the service.
    - When the service is stopped, **Start** is displayed next to it. Click it to start the service.

## View the Launch URL for a Service

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the
   **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed. The **Select Application Deployment** dropdown list displays the deployment
   name of the service.
5. The **Launch URL** box on the **Deployment Configurations** tab displays the URL. Copy and paste
   it in the browser to launch the service. See the table in the
   [View Data Service Details](#view-data-service-details) topic to understand what is displayed
   with this URL.

## View the Deployment Settings for a Service

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the
   **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed. The **Select Application Deployment** dropdown list displays the deployment
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

Directory Manager uses file logging and Windows logging to monitor events from a service. You can set the
logging level for a service to track a specific set of information for it.

For details on file logging and Windows logging, see the
[File Logging](/docs/directorymanager/11.0/signin/applications/portal/server/log.md#file-logging)
and
[Windows Logging](/docs/directorymanager/11.0/signin/applications/portal/server/log.md#windows-logging)
topics. Replace references to the portal with the respective service.

:::note
Windows logging isn't available for Data service and Security service.
:::

### Change the File Logging Level for a Service

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the
   **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed. The **Select Application Deployment** dropdown list displays the deployment
   name of the service.
5. Click the **Logging** tab.
6. In the **File Logging** area, select a logging level for the service in the **Log Events**
   dropdown list.  
   File logging groups events into different levels, based on the type of information captured. See
   the table in the
   [Change the File Logging Level for a Portal Instance](/docs/directorymanager/11.0/signin/applications/portal/server/log.md#change-the-file-logging-level-for-a-portal-instance) topic
   for information on the logging levels. Replace references to the portal with the respective
   service.
7. Click **Save**.

### Turn off File Logging for a Service

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the
   **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed. The **Select Application Deployment** dropdown list displays the deployment
   name of the service.
5. Click the **Logging** tab.
6. In the **File Logging** area, select _Off_ in the **Log Events** dropdown list.
7. Click **Save**.

### Change the Windows Logging Level for a Service

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the
   **Replication Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed. The **Select Application Deployment** dropdown list displays the deployment
   name of the service.
5. Click the **Logging** tab.
6. In the **Windows Logging** area, select a logging level for the service in the **Log Events**
   dropdown list.  
   Windows logging groups events into different levels, based on the type of information captured.
   See the table in the
   [Change the File Logging Level for a Portal Instance](/docs/directorymanager/11.0/signin/applications/portal/server/log.md#change-the-file-logging-level-for-a-portal-instance) topic
   for information on the logging levels. Replace references to the portal with the respective
   service.
7. Click **Save**.

### Turn Off Windows Logging for a Service

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the
   **Replication Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under **Server Settings**.  
   The **Deployment Settings** page displays the web server (IIS, remote IIS, or Docker) where the
   service is deployed. The **Select Application Deployment** dropdown list displays the deployment
   name of the service.
5. Click the **Logging** tab.
6. In the **Windows Logging** area, select _Off_ in the **Log Events** dropdown list.
7. Click **Save**.

## Delete a Data Service

Deleting a Data service removes the following:

- **For a native IIS deployment:**

    - The Data service directory under the following location on the Directory Manager server:  
      X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\  
      (X represents the Directory Manager installation drive)
    - The Data service directory from the website in IIS

- **For a remote IIS deployment:**

    - The service's directory in the remote IIS site
    - The service's physical directory under the folder mapped to the remote IIS site

- **For a Docker deployment:**

    The container created in Docker Engine for the Data service

To delete a Data service:

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Data Service** tab.
3. On the **Data Service** tab page, click the ellipsis button for a Data service and select
   **Delete**.

:::note
You can't delete the default Data service. You also can't delete a Data service that has
been linked with a Directory Manager client, such as the Directory Manager portal or a Mobile service.
:::

**See Also**

- [Manage Directory Manager Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [Directory Manager Data Service](/docs/directorymanager/11.0/signin/service/dataservice/overview.md)
- [Create a Directory Manager Data Service in IIS](/docs/directorymanager/11.0/signin/service/dataservice/create.md)
- [Download Directory Manager Logs from Admin Center](/docs/directorymanager/11.0/signin/concepts/logs.md)
