---
title: "Create a Directory Manager Data Service in IIS"
description: "Deploy a Directory Manager Data service in native or remote IIS and bind it to Elasticsearch, Replication, and Scheduler services."
keywords:
  - Directory Manager
  - Data service
  - IIS
  - remote IIS
  - Elasticsearch service
  - Scheduler service
sidebar_position: 10
---

# Create a Directory Manager Data Service in IIS

You can create a Data service in native IIS or remote IIS.

## Create a Data Service in Native IIS

When you deploy a Data service in native IIS, Directory Manager does the following:

- It creates a directory with the Data service's name and copies the service files from its template directory to the new directory. The directory is at this physical path on the Directory Manager server:

  `X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\`

  **(X represents the Directory Manager installation drive)**

- It creates a virtual directory for the service in the IIS site you choose.

The Data service runs within a virtual directory in IIS. The service files are physically located on disk.

To create a Data service:

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **Data Service** and click **Next step**.
4. On the **Create Directory Manager Application** page, ensure the **IIS** tile is selected.
5. In the **Application Name** box, enter a unique name for the service or use the default name. Directory Manager displays the service with this name.
6. In the **Deployment Name** box, enter a deployment name for the service. The service card shows the application name and the deployment name.

   ![Data service card showing the application name and deployment name](/images/directorymanager/11.1/admincenter/service/dataservice/dataservicecard.webp)

7. In the **IIS Application Name** box, enter an IIS deployment name for the service. The name must be unique for each Data service deployed in IIS.

   The IIS application name names the service's directory in IIS. It also names the service's physical directory under `X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\` on the Directory Manager server.

   (X represents the Directory Manager installation drive)

8. In the **IIS Site** dropdown list, select a website to host the service files. The list displays the websites defined on the local IIS server. `GroupIDSite11` is the default selection.
9. In the **Service Endpoints** area, bind an Elasticsearch service, a Replication service, and a Scheduler service to the Data service:

   1. In the **Elasticsearch Service** dropdown list, select an Elasticsearch service to bind to this Data service. The list displays the Elasticsearch services running in the environment. The Elasticsearch service you select processes the requests that the Data service receives for searching the Elasticsearch repository.
   2. After you select an Elasticsearch service, the **Replication Service** dropdown list displays the Replication services running on the same machine as the Elasticsearch service. Select a Replication service to bind to this Data service.

      When a user force-runs the Replication service (globally or for a specific identity store), a request goes to the Data service. The Data service passes it on to the Replication service bound to it.

   3. In the **Scheduler Service** dropdown list, select a Scheduler service to bind to this Data service. The number of services in the list depends on the number of nodes in Directory Manager clusters, because each node has its own Scheduler service.

      This Data service sends requests to the selected Scheduler service to trigger schedule runs.

10. Click **Create Application**. Directory Manager creates the Data service and displays it on the **Data Service** tab.

## Create a Data Service in Remote IIS

You can deploy a Data service within a site in remote IIS. To do this, connect to the Microsoft IIS Administration API running on the remote IIS machine.

When you create a Data service in remote IIS, Directory Manager does the following:

- It creates a virtual directory for the service in a preconfigured site in remote IIS.
- It creates a physical directory for the service in the folder mapped to this preconfigured site.

The Data service runs within a virtual directory in remote IIS. The service files are physically located on disk.

Before you deploy a service in remote IIS, review the remote IIS settings and configurations. See the [Prerequisites for Deploying Directory Manager in Remote IIS](/docs/directorymanager/11.1/admincenter/applications/remoteiisprerequisites.md) topic.

To create a Data service:

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **Data Service** and click **Next step**.
4. On the **Create Directory Manager Application** page, select the **Remote IIS** tile.
5. In the **Application Name** box, enter a unique name for the Data service or use the default name. Directory Manager displays the Data service with this name.
6. In the **Deployment Name** box, enter a deployment name for the service. The service card shows the application name and the deployment name.
7. Enter the **API URL**, **Access Token**, **Username**, **Password**, **IIS Application Name**, and **Website** values. See steps 7-11 in the [Create a Portal in Remote IIS](/docs/directorymanager/11.1/admincenter/applications/portal/create.md#create-a-portal-in-remote-iis) topic. Replace any reference to the portal with the Data service.
8. In the **Service Endpoints** area, enter the values as described in step 9 of [Create a Data Service in Native IIS](#create-a-data-service-in-native-iis).
9. Click **Create Application**. Directory Manager displays the new Data service on the **Data Service** tab.
