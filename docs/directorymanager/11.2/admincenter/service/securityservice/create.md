---
title: "Create a Directory Manager Security Service"
description: "Create a Security service in native IIS or remote IIS from Admin Center, bind it to a Data service, and launch it."
sidebar_position: 10
keywords:
  - Security service
  - native IIS
  - remote IIS
  - Admin Center applications
  - Data service binding
---

# Create a Directory Manager Security Service

You can create a Security service in native IIS or in remote IIS.

## Create a Security service in native IIS

When you deploy a Security service in native IIS, Directory Manager does the following:

- It creates a directory with the Security service's name on the Directory Manager server and copies the service files from its template directory to the new directory. The path is `X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\`. X represents the Directory Manager installation drive.
- It creates a virtual directory for the service in the IIS site you choose.

The Security service runs within a virtual directory in IIS. The service files are physically located on disk.

**To create a Security service:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **Security Service** and click **Next step**.
4. On the **Create Directory Manager Application** page, ensure the **IIS** tile is selected.
5. In the **Application Name** box, enter a name for the service or use the default name. Directory Manager displays the Security service with this name.
6. In the **Deployment Name** box, enter a deployment name for the service. The service card shows the application name and the deployment name.

   ![Security service card showing the application name and deployment name](/images/directorymanager/11.2/admincenter/service/securityservice/securityservicecard.webp)

7. In the **IIS Application Name** box, enter an IIS deployment name for the service. Directory Manager uses this name for the service's directory in IIS. It also uses it for the physical directory under `X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\` on the Directory Manager server. X represents the Directory Manager installation drive. The IIS application name must be unique for each Security service deployed in IIS.
8. In the **IIS Site** dropdown list, select a website to host the service files. The list shows the websites defined on the local IIS server. GroupIDSite11 is the default selection.
9. In the **Data Service** dropdown list, select a Data service to bind to this Security service. A Security service needs a Data service to perform tasks such as authentication and multifactor authentication.
10. Click **Create Application**. Directory Manager creates the Security service and shows it on the **Security Service** tab.

## Create a Security service in remote IIS

You can deploy a Security service within a site in remote IIS. To do this, connect to the Microsoft IIS Administration API running on the remote IIS machine.

When you create a Security service in remote IIS, Directory Manager does the following:

- It creates a virtual directory for the service in a preconfigured site in remote IIS.
- It creates a physical directory for the service in the folder that is mapped to this preconfigured site.

The Security service runs within a virtual directory in remote IIS. The service files are physically located on disk.

For the remote IIS settings and configurations to review before you deploy a service there, see the [Prerequisites for Deploying Directory Manager in Remote IIS](/docs/directorymanager/11.2/admincenter/applications/remoteiisprerequisites.md) topic.

**To create a Security service:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **Security Service** and click **Next step**.
4. On the **Create Directory Manager Application** page, select the **Remote IIS** tile.
5. In the **Application Name** box, enter a name for the service or use the default name. Directory Manager displays the Security service with this name.
6. In the **Deployment Name** box, enter a deployment name for the service. The service card shows the application name and the deployment name.
7. Enter the **API URL**, **Access Token**, **Username**, **Password**, **IIS
   Application Name**, and **Website** values. For these values, see steps 7-11 in the [Create a Portal in Remote IIS](/docs/directorymanager/11.2/admincenter/applications/portal/create.md#create-a-portal-in-remote-iis) topic. Replace any reference to the portal with the Security service.
8. In the **Data Service** dropdown list, select a Data service to bind to this Security service. A Security service needs a Data service to perform tasks such as authentication and multifactor authentication.
9. Click **Create Application**. Directory Manager shows the Security service on the **Security Service** tab.

## Launch a Security service

1. In Admin Center, select **Applications** in the left pane.
2. On the **Security Service** tab, click **Launch Application** for a service. The **Directory Manager Applications** page opens. For the options on this page, see the [Access Your Applications in Directory Manager](/docs/directorymanager/11.2/admincenter/general/accessapplications.md) topic. Any actions you perform run through the respective Security service.
