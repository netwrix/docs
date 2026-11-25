---
title: "Create a Directory Manager Data Service in IIS"
description: "Create a Directory Manager Data service in native IIS and bind it to an Elasticsearch service, a Replication service, and a Scheduler service."
keywords:
  - Directory Manager
  - Data service
  - IIS
  - Elasticsearch service
  - Scheduler service
sidebar_position: 10
---

# Create a Directory Manager Data Service in IIS

You can create a Data service in native IIS. Deploying a Data service in remote IIS isn't supported.

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

   ![Data service card showing the application name and deployment name](/images/directorymanager/11.2/admincenter/service/dataservice/dataservicecard.webp)

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
