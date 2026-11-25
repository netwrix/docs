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

You can create a Security service in native IIS and remote IIS.

What do you want to do?

- [Create a Security Service in Native IIS](#create-a-security-service-in-native-iis)
- [Create a Security Service in Remote IIS](#create-a-security-service-in-remote-iis)
- [Launch a Security Service](#launch-a-security-service)

## Create a Security Service in Native IIS

When you deploy a Security service in native IIS, Directory Manager does the following:

- It creates a directory with the Security service's name at the following physical path on the
  Directory Manager server, and copies the service files from its template directory to the new service
  directory:
  X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\
  (X represents the Directory Manager installation drive)
- It also creates a virtual directory for the service in your desired IIS site.

The Security service runs within a virtual directory in IIS while the service files are physically
located on disk.

**To create a Security service:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **Security Service** and click **Next step**.
4. On the **Create GroupID Application** page, ensure the **IIS** tile is selected.
5. In the **Application Name** box, enter a name for the service or use the default name. The
   Directory Manager displays the Security service with this name.
6. In the **Deployment Name** box, enter a deployment name for the service. The application name and
   deployment name are displayed on the service card, as shown in the following image:

    ![Security service card showing the application name and deployment name](/images/directorymanager/11.0/admincenter/service/securityservice/ss_card.webp)

7. In the **IIS Application Name** box, enter an IIS deployment name for the service. This name is
   used to name the service's directory in IIS and its physical directory under X:\Program
   Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\ on the Directory Manager server.
   (X represents the Directory Manager installation drive)
   The IIS application name should be unique for each Security service deployed in IIS.
8. In the **IIS Site** dropdown list, select a website to host the service files.
   The list displays the websites defined on the local IIS server. GroupIDSite11 is the default
   selection.
9. In the **Data Service** dropdown list, select a Data service to bind to this Security service.
   A Security service needs a Data service to perform various tasks, such as authentication and
   multifactor authentication.
10. Click **Create Application**.
    The Security service is created and displayed on the **Security Service** tab.

## Create a Security Service in Remote IIS

You can deploy a Security service within a site in remote IIS. For this, you need to connect with
the Microsoft IIS Administration API running on the remote IIS machine.

When you create a Security service in remote IIS, Directory Manager does the following:

- It creates a virtual directory for the service in a preconfigured site in remote IIS.
- It creates a physical directory for the service in the folder that is mapped to this preconfigured
  site.

The Security service runs within a virtual directory in remote IIS while the service files are
physically located on disk.

To learn about the remote IIS settings and configurations before you deploy a service there, see the
[Prerequisites for Deploying Directory Manager in Remote IIS](/docs/directorymanager/11.0/signin/applications/remoteiisprerequisites.md)
topic.

**To create a Security service:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **Security Service** and click **Next step**.
4. On the **Create GroupID Application** page, select the **Remote IIS** tile.
5. In the **Application Name** box, enter a name for the service or use the default name. The
   Directory Manager displays the Security service with this name.
6. In the **Deployment Name** box, enter a deployment name for the service. The application name and
   deployment name are displayed on the service card.
7. To enter the **API URL**, **Access Token**, **Username**, **Password**, **IIS
   Application Name**, and **Website** values, refer to steps 7-11 in the
   [Create a Portal in Remote IIS](/docs/directorymanager/11.0/signin/applications/portal/create.md#create-a-portal-in-remote-iis)
   topic. Replace any reference to the portal with the Security service.
8. In the **Data Service** dropdown list, select a Data service to bind to this Security service.
   A Security service needs a Data service to perform various tasks, such as authentication and
   multifactor authentication.
9. Click **Create Application**.
   The Security service is displayed on the **Security Service** tab.

## Launch a Security Service

1. In Admin Center, select **Applications** in the left pane.
2. On the **Security Service** tab, click **Launch Application** for a service. The **GroupID
   Applications** page is displayed. Options on this page are discussed in the
   [Access Your Applications in Directory Manager](/docs/directorymanager/11.0/signin/concepts/accessapplications.md)
   topic. Any actions you perform are executed through the respective Security service.

**See Also**

- [Manage Directory Manager Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [Directory Manager Services](/docs/directorymanager/11.0/signin/service/overview.md)
- [Manage Directory Manager Security Service Settings](/docs/directorymanager/11.0/signin/service/securityservice/manage.md)
