---
title: "Create a Mobile Service"
description: "Create a Mobile Service"
sidebar_position: 10
---

# Create a Mobile Service

You can create a Mobile service in native IIS and remote IIS.

What do you want to do?

- [Create a Mobile Service in Native IIS](#create-a-mobile-service-in-native-iis)
- [Create a Mobile Service in Remote IIS](#create-a-mobile-service-in-remote-iis)
- [Deploy Another Instance of a Mobile Service](#deploy-another-instance-of-a-mobile-service)
- [Create a Mobile Service by Copying an Existing Service](#create-a-mobile-service-by-copying-an-existing-service)
- [View Mobile Service Details](#view-mobile-service-details)
- [Launch a Mobile Service or a Service Instance](#launch-a-mobile-service-or-a-service-instance)

## Create a Mobile Service in Native IIS

When you deploy a Mobile service in native IIS, GroupID does the following:

- It creates a directory with the Mobile service’s name at the following physical path on the
  GroupID server, and copies the service files from its template directory to the new service
  directory:
  X:\Program Files\Imanami\GroupID 11.0\GroupIDMobileService\Inetpub\
  (X represents the GroupID installation drive).
- It also creates a virtual directory for the service in your desired IIS site.

The Mobile service runs within a virtual directory in IIS while the service files are physically
located on disk.

**To create a Mobile Service:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **Mobile Service** and click **Next step**.
4. On the **Create GroupID Application** page, make sure the **IIS** tile is selected.
5. In the **Application Name** box, enter a unique name for the Mobile service or use the default
   name. The Mobile service is displayed with this name in GroupID.
6. In the **Deployment Name** box, enter a deployment name for the service. This name is used to
   indicate the deployment instance of the service in GroupID. A service can have multiple
   deployments, for example, one in native IIS and another in remote IIS. The application name and deployment
   name are displayed on the service card, as shown below:

    ![ms_card](/images/directorymanager/11.0/admincenter/mobileservice/ms_card.webp)

7. In the **IIS Application Name** box, enter an IIS deployment name for the service. The name
   should be unique for each Mobile service deployed in IIS.

    - The IIS application name is used to name the service’s directory in IIS and its physical
      directory under X:\Program Files\Imanami\GroupID 11.0\GroupIDMobileService\Inetpub\.
      (X represents the GroupID installation drive.)
    - This IIS application name is also appended to the web server address to construct the URL that
      users click to access this deployment instance of the service. Users can then configure the
      GroupID app with this instance. For example:
      `https://<web-server-name>:<port>/<IIS-application-name>`
      Hence, a different URL is constructed for each deployment of a service in IIS.

8. In the **IIS Site** drop-down list, select a website to host the service files.
   The list displays the websites defined on the local IIS server. _GroupIDSite11_ is the default
   selection.
9. In the **Service Endpoints** area, bind a Data service and a Security service with the Mobile
   service.

    1. In the **Data Service** drop-down list, select a Data service. When the GroupID app is
       configured using this deployment of the Mobile service, it will use the Data service you
       select here.
    2. In the **Security Service** drop-down list, select a Security service. When the GroupID app
       is configured using this deployment of the Mobile service, it will use the Security service
       you select here.

10. In the **Select Identity Stores** area, select the check boxes for the identity stores you want
    to associate with the Mobile service. When the GroupID app is configured using this Mobile
    service, app users will be presented with these identity stores for signing in.
11. Click **Create Application**.
    The Mobile service is created and displayed on the **Mobile Service** tab.

## Create a Mobile Service in Remote IIS

You can deploy a Mobile service within a site in remote IIS. For this, you need to connect with the
Microsoft IIS Administration API running on the remote IIS machine.

When you create a service in remote IIS, GroupID does the following:

- It creates a virtual directory for the service in a preconfigured site in remote IIS.
- It creates a physical directory for the service in the folder that is mapped to this preconfigured
  site.

The service runs within a virtual directory in remote IIS while the service files are physically
located on disk.

To learn about the remote IIS settings and configurations before deploying a service there, see the
[Prerequisites for Deployments in Remote IIS](/docs/directorymanager/11.0/signin/applications/remoteiisprerequisites.md)
topic.

**To create a service:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **Mobile Service** and click **Next step**.
4. On the **Create GroupID Application**page, select the **Remote IIS** tile.
5. In the **Application Name** box, enter a unique name for the Mobile service or use the default
   name. The service is displayed in GroupID with this name.
6. In the **Deployment Name** box, enter a deployment name for the service. This name is used to
   indicate the deployment instance of the service in GroupID. A Mobile service can have multiple
   deployments, for example, one in native IIS and another in remote IIS.
   The application name and deployment name are displayed on the service card.
7. To enter information for **API URL**, **Access Token**, **Username**, **Password**, **IIS
   Application Name**, and **Website**, refer to steps 7-11 in the
   [Create a Portal in Remote IIS](/docs/directorymanager/11.0/signin/applications/portal/create.md#create-a-portal-in-remote-iis)
   topic. Replace any reference to the portal with the Mobile service.
8. To enter information in the **Service Endpoints** and **Select Identity Stores** areas, refer to
   steps 9-10 in the [Create a Mobile Service in Native IIS](#create-a-mobile-service-in-native-iis)
   topic.
9. Click **Create Application**.
   The Mobile service is displayed on the **Mobile Service** tab.

## Deploy Another Instance of a Mobile Service

GroupID enables you to deploy more than one instance of a Mobile Service. Instances can be deployed
in different web servers, for example, one in native IIS and another in remote IIS.
For more on how instances work, see the
[Deploy Multiple Instances of a Portal](/docs/directorymanager/11.0/signin/applications/portal/create.md#deploy-multiple-instances-of-a-portal)
topic.

To deploy a new instance, you have to provide deployment details only. All instances share the same
server and design configurations, while only deployment details differ. For example, all instances
serve the same identity stores and have the same display and search-related configurations. Changing
a shared setting propagates to all deployment instances of the service.

**To deploy an instance:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Deploy
   Another Instance**.
3. Select the **IIS** or **Remote IIS** tile to indicate the web server where you want to deploy the
   service instance.
   The **Application Name** field displays the name of the service as read-only.
4. Fields on the page vary, depending on the web server selected. In any case, the **Select Identity
   Stores** area is not available, as it remains the same for all instances.

    - To deploy an instance in native IIS, follow steps 6-9 in the
      [Create a Mobile Service in Native IIS](#create-a-mobile-service-in-native-iis) topic.
    - To deploy an instance in remote IIS, follow steps 6-8 in the
      [Create a Mobile Service in Remote IIS](#create-a-mobile-service-in-remote-iis) topic.

5. After entering the required information, click **Deploy Instance**.
   The new instance is created and displayed on the service’s card.

    ![ms_instance_deployed](/images/directorymanager/11.0/admincenter/mobileservice/ms_instance_deployed.webp)

## Create a Mobile Service by Copying an Existing Service

You can create a new Mobile service by copying an existing service. All server and design
configurations of the template service are duplicated to the new service. Deployment details are not
duplicated, so you can choose to deploy the new service in any of the supported web servers.

**To create a service:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Copy**.
   The **Copy GroupID Application** page is displayed; populated with the following settings of the
   copied service:

    - The Data service and Security service linked to the service
    - The identity store(s) linked with the service

3. You can deploy the new service in native IIS or remote IIS.

    - To specify settings for a native IIS deployment, follow the instructions in the
      [Create a Mobile Service in Native IIS](#create-a-mobile-service-in-native-iis) topic,
      beginning at step 4.
    - To specify settings for a remote IIS deployment, follow the instructions in the
      [Create a Mobile Service in Remote IIS](#create-a-mobile-service-in-remote-iis), beginning at
      step 4.

## View Mobile Service Details

1. In GroupID Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the **Mobile Service** tab.
   The tab displays the default Mobile service in GroupID and any other Mobile service that you have
   created. For details displayed on a service card, see the table in the
   [View Data Service Details](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#view-data-service-details)
   topic.

## Launch a Mobile Service or a Service Instance

To launch a Mobile service or an instance of a service means that you launch the
**GroupIDMobileService** page in a web browser, which displays a server URL and a QR code. Users can
use any of these to configure the GroupID app on their phones. See the
[Configure the App](/docs/directorymanager/11.0/signin/service/mobileservice/phonesetup.md#configure-the-app)
topic.

To launch a service or a service instance:

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click **Launch Application** on a service’s card to launch it.
   When multiple deployments of a service are available, select a deployment instance on the card
   and click **Launch Application** to launch that instance.

    ![mobileservice](/images/directorymanager/11.0/admincenter/mobileservice/mobileservice.webp)

Provide the URL of the GroupIDMobileService page to your users so they can use the QR code or the
server URL to set up the GroupID app on their mobile phone while binding it to the respective
deployment instance of the Mobile service.

You can either copy the URL of the GroupIDMobileService page from the address bar or from a
service's deployment settings. See the
[View the Launch URL for an Instance](/docs/directorymanager/11.0/signin/service/mobileservice/server/deployment.md#view-the-launch-url-for-an-instance)
topic.

**See Also**

- [Mobile Service](/docs/directorymanager/11.0/signin/service/mobileservice/overview.md)
