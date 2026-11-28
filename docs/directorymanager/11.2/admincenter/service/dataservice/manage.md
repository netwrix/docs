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

Data services in Directory Manager appear on the **Data Service** tab. A service's card displays information such as its name and status.

You can manage several settings for a service, such as:

- Change the display name of a service
- Start or stop a service
- Configure file logging for a service
- Delete a service

## View Data Service details

To view Data service details:

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Data Service** tab. The tab lists the default Data service created while you configured Directory Manager and any other Data service that you created.

   When multiple Directory Manager instances are deployed, the tab lists multiple default Data services, because each instance has its own default Data service. See the [Elasticsearch Clusters, Nodes, and Directory Manager](/docs/directorymanager/11.2/admincenter/service/overview.md#elasticsearch-clusters-nodes-and-directory-manager) topic.

3. Read the card for a Data service. It displays the following information:

| Info | Description |
| --- | --- |
| Name  | The name given to the service. |
| Deployment Instances | Displays the deployment name of the service and the web server where it is deployed. |
| Status | A service has one of the following statuses: <br /><ul><li>Running – Indicates that the service is running.</li><li>Stopped – Indicates that Directory Manager is unable to communicate with the service. To troubleshoot, go to the web server where the service is deployed (IIS or Docker) and ensure the service is running.</li><li>Error – Any issue other than stopped is categorized as error. Contact your system administrator to resolve it.</li></ul> |
| Launch Application | Click it to launch the service page. <br /><ul><li>For a Data service, Replication service, Email service, and Scheduler service, a page is displayed that shows the status of the service as running, stopped, or error.</li><li>For a Security service, the **Directory Manager Applications** page is displayed. The respective Security service performs any action on this page. See [Access Your Applications in Directory Manager](/docs/directorymanager/11.2/admincenter/general/accessapplications.md). </li><li>For Admin Center, this launches the Admin Center application.</li></ul> |
| Ellipsis | Click it to launch a shortcut menu with the following options: <br /><ul><li>Settings – launches the service settings page, where you can manage deployment settings and log settings.</li><li>Delete – deletes the service. This option isn't available for the default services.</li></ul> |

## Change a service’s display name

A service is assigned an application name during creation, which is used as its display name in Directory Manager. When you change it, Directory Manager displays the service with the new name.

To change the display name:

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. In the **Application Name** box on the General Settings page, enter a new name for the service.
5. Click **Save**.

## Start or stop a service

You can start and stop a service deployed in native IIS and Docker. When you stop a service, the following happens:

- For a native IIS deployment, Directory Manager stops the service’s application pool.
- For a Docker deployment, Directory Manager stops the container where the service is deployed.

To start or stop a service:

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under Server Settings. The Deployment Settings page displays the web server (IIS or Docker) where the service is deployed.
5. Find the **Select Application Deployment** dropdown list, which displays the deployment name of the service.
   - When the service is running, Stop is displayed next to it. Click it to stop the service.
   - When the service is stopped, Start is displayed next to it. Click it to start the service.

## View the launch URL for a service

To view the launch URL for a service:

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under Server Settings. The Deployment Settings page displays the web server (IIS or Docker) where the service is deployed. The **Select Application Deployment** dropdown list displays the deployment name of the service.
5. On the Deployment Configurations tab, find the **Launch URL** box, which displays the URL. Copy and paste it in the browser to launch the service. See the table in the View Data Service Details topic to understand what is displayed with this URL.

## View the deployment settings for a service

To view the deployment settings for a service:

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under Server Settings. The Deployment Settings page displays the web server (IIS or Docker) where the service is deployed. The **Select Application Deployment** dropdown list displays the deployment name of the service.
5. On the Deployment Configurations tab, view the following:
   - For a native IIS deployment, you can view the name of the service application in IIS, the site where it is hosted, the URL to launch the service page, and any other services that this service uses.
   - For a Docker deployment, you can view the port and service URL used to communicate with Docker engine. You can also view the URL to launch the service page, and any other services that this service uses.

## Specify log settings for a service

Directory Manager uses file logging and Windows logging to monitor events from a service. You can set the logging level for a service to track a specific set of information for it.

For details on file logging and Windows logging, see the [File Logging](/docs/directorymanager/11.2/admincenter/applications/portal/server/log.md#file-logging) and [Windows Logging](/docs/directorymanager/11.2/admincenter/applications/portal/server/log.md#windows-logging) topics. Replace references to the portal with the respective service.

:::note
Windows logging isn't available for Data service and Security service.
:::

### Change the file logging level for a service

To change the file logging level for a service:

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under Server Settings. The Deployment Settings page displays the web server (IIS or Docker) where the service is deployed. The **Select Application Deployment** dropdown list displays the deployment name of the service.
5. Click the **Logging** tab.
6. In the File Logging area, select a logging level for the service in the **Log Events** dropdown list.

   File logging groups events into different levels, based on the type of information captured. For the logging levels, see the table in the [Change the File Logging Level for a Portal Instance](/docs/directorymanager/11.2/admincenter/applications/portal/server/log.md#change-the-file-logging-level-for-a-portal-instance) topic. Replace references to the portal with the respective service.

7. Click **Save**.

### Turn off file logging for a service

To turn off file logging for a service:

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the **Data Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under Server Settings. The Deployment Settings page displays the web server (IIS or Docker) where the service is deployed. The **Select Application Deployment** dropdown list displays the deployment name of the service.
5. Click the **Logging** tab.
6. In the File Logging area, select **Off** in the **Log Events** dropdown list.
7. Click **Save**.

### Change the Windows logging level for a service

To change the Windows logging level for a service:

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the **Replication Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under Server Settings. The Deployment Settings page displays the web server (IIS or Docker) where the service is deployed. The **Select Application Deployment** dropdown list displays the deployment name of the service.
5. Click the **Logging** tab.
6. In the Windows Logging area, select a logging level for the service in the **Log Events** dropdown list.

   Windows logging groups events into different levels, based on the type of information captured. For the logging levels, see the table in the [Change the File Logging Level for a Portal Instance](/docs/directorymanager/11.2/admincenter/applications/portal/server/log.md#change-the-file-logging-level-for-a-portal-instance) topic. Replace references to the portal with the respective service.

7. Click **Save**.

### Turn off Windows logging for a service

To turn off Windows logging for a service:

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the **Replication Service** tab.
3. Click the ellipsis button for a service and select **Settings**.
4. Click **Deployments** under Server Settings. The Deployment Settings page displays the web server (IIS or Docker) where the service is deployed. The **Select Application Deployment** dropdown list displays the deployment name of the service.
5. Click the **Logging** tab.
6. In the Windows Logging area, select **Off** in the **Log Events** dropdown list.
7. Click **Save**.

## Delete a Data service

Deleting a Data service removes the following:

- For a native IIS deployment:
  - The Data service directory under this location on the Directory Manager server: `X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\`
  - The Data service directory from the website in IIS

  (X represents the Directory Manager installation drive)

- For a Docker deployment: the container created in Docker Engine for the Data service

To delete a Data service:

1. In Admin Center, click **Applications** in the left pane.
2. On the **Applications** page, click the **Data Service** tab.
3. On the **Data Service** tab page, click the ellipsis button for a Data service and select **Delete**.

:::note
You can't delete the default Data service. You also can't delete a Data service that is linked with a Directory Manager client, such as the Directory Manager portal.
:::
