---
title: "Manage Mobile Service Deployment Settings in Directory Manager"
description: "Start or stop a Mobile service instance, change its IIS application name or site, and view its launch URL and logging settings."
keywords:
  - Mobile service deployment
  - IIS application name
  - remote IIS deployment
  - service launch URL
  - deployment instance
sidebar_position: 20
---

# Manage Mobile Service Deployment Settings in Directory Manager

You can manage various deployment settings for a Mobile service on either type of web server: native
IIS or remote IIS.

What do you want to do?

- [View the Deployments for a Mobile Service](#view-the-deployments-for-a-mobile-service)
- [Start or Stop a Deployment Instance](#start-or-stop-a-deployment-instance)
- [View the Launch URL for an Instance](#view-the-launch-url-for-an-instance)
- [View the Data Service and Security Service Bound to an Instance](#view-the-data-service-and-security-service-bound-to-an-instance)
- [Manage Event Logging for an Instance](#manage-event-logging-for-an-instance)
- [Change the IIS Application Name for an Instance (Native IIS)](#change-the-iis-application-name-for-an-instance-native-iis)
- [Move an Instance under a Different Site (Native IIS)](#move-an-instance-under-a-different-site-native-iis)
- [View the Deployment Settings for an Instance (Remote IIS)](#view-the-deployment-settings-for-an-instance-remote-iis)

## View the Deployments for a Mobile Service

A Mobile service can have multiple deployments in the same or different web servers. You can update
certain settings for each deployment instance of a service.

**To view a service’s deployment instances:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. The **Deployment Settings** page has varying tabs, depending on the deployment instances of the
   service.

    - The **IIS** tab is available when one or more service instances are deployed in native IIS.
      Select an instance to view the name of the instance directory in IIS, the IIS site that hosts
      the instance, the URL for the instance, the Data service and Security service associated with
      the instance, and logging levels.
    - The **Remote IIS** tab is available when one or more service instances are deployed in remote
      IIS. Select an instance to view the Microsoft IIS Administration API URL and access token that
      Directory Manager uses to communicate with the remote IIS server, the credentials used to communicate
      with the API, the site that hosts the instance, the Data service and Security service
      associated with the instance, and logging levels.

## Start or Stop a Deployment Instance

See the
[Start or Stop a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#start-or-stop-a-service)
topic for details. Remember to use the **Select Application Deployment** dropdown list to select
the Mobile service instance you want to start or stop.

## View the Launch URL for an Instance

See the
[View the Launch URL for a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#view-the-launch-url-for-a-service)
topic for details. Remember to use the **Select Application Deployment** dropdown list to select
the Mobile service instance you want to view the launch URL for.

Use the launch URL for a Mobile service instance to launch the GroupIDMobileService page, which
appears in the
[Launch a Mobile Service or a Service Instance](/docs/directorymanager/11.0/signin/service/mobileservice/create.md#launch-a-mobile-service-or-a-service-instance)
topic.

## View the Data Service and Security Service Bound to an Instance

See the
[View the Data Service and Security Service Bound to an Instance](/docs/directorymanager/11.0/signin/applications/portal/server/nativeiis.md#view-the-data-service-and-security-service-bound-to-an-instance)
topic. Replace references to the portal with the Mobile service.

## Manage Event Logging for an Instance

To manage Windows logging and file logging for an instance of a Mobile service, see the
[Specify Log Settings for a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#specify-log-settings-for-a-service)
topic. Remember to use the **Select Application Deployment** dropdown list to select the Mobile
service instance you want to manage event logging for.

## Change the IIS Application Name for an Instance (Native IIS)

An instance of a Mobile service is assigned an IIS application name to represent its deployment in
IIS. The name uniquely identifies the deployment in the IIS site and is used to name:

- The instance’s directory in IIS.
- Its physical directory at the following path on the Directory Manager server:
  `X:\Program Files\Imanami\GroupID 11.0\GroupIDMobileService\Inetpub\`
  (X represents the Directory Manager installation drive).

This name is also appended to the web server address to construct the URL that users click to launch
the GroupIDMobileService page. For example:
`https://<web-server-name>:<port>/<IIS-application-name>`

When you change the IIS application name, it propagates to the instance’s IIS directory, physical
directory, and launch URL.

**To change the IIS application name:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the
   **Mobile Service** tab.
3. Click the ellipsis button for a service on its respective card and select **Settings**.
4. Click **Deployments** under **Server Settings**. The **Deployment Settings** page is displayed.
5. On the **IIS** tab, the **Select Application Deployment** dropdown list displays all service
   instances deployed in native IIS. Select an instance to change its IIS application name.
6. In the **IIS Application Name** box on the **Deployment Configurations** tab, update the IIS
   deployment name for the instance.
7. Click **Save**.

## Move an Instance under a Different Site (Native IIS)

You can change the IIS site that hosts a deployment instance of a service. In doing so, the URL of
the deployment instance also changes. The updated URL is displayed in the **Launch URL** box on the
**Deployment Settings** page. You must provide the updated URL to your users so they can
configure the GroupID app with this deployment instance of the Mobile service.

**To change the site:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Applications** page, click the tab for the service you want. For example, click the
   **Mobile Service** tab.
3. Click the ellipsis button for a service on its respective card and select **Settings**.
4. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
5. On the **IIS** tab, the **Select Application Deployment** dropdown list displays all service
   instances deployed in native IIS. Select an instance to move its directory under a different IIS
   site.
6. In the **IIS Site** dropdown list on the **Deployment Configurations** tab, select a site to
   move the instance’s directory under it. The list displays the websites defined in native IIS.
7. Click **Save**.

## View the Deployment Settings for an Instance (Remote IIS)

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
   Click the **Remote IIS** tab.
4. The **Select Application Deployment** dropdown list displays all service instances deployed in
   remote IIS. Select an instance to view its settings.
5. On the **Deployment Configurations** tab, you can view the Microsoft IIS Administration API URL,
   access token, and credentials. You can also view the name of the service application in remote
   IIS, the site where it's hosted, the URL to launch the instance, and the Data service and
   Security service the instance uses.

**See Also**

- [Directory Manager Mobile Service Overview](/docs/directorymanager/11.0/signin/service/mobileservice/overview.md)
- [Mobile Service Server Settings in Directory Manager](/docs/directorymanager/11.0/signin/service/mobileservice/server/overview.md)
