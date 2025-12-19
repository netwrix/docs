---
title: "Manage Settings for a Native IIS Deployment"
description: "Manage Settings for a Native IIS Deployment"
sidebar_position: 20
---

# Manage Settings for a Native IIS Deployment

You can manage various settings for a portal instance deployed in native IIS.

What do you want to do?

- [Start or Stop an Instance](#start-or-stop-an-instance)
- [Change the IIS Application Name for an Instance](#change-the-iis-application-name-for-an-instance)
- [Move an Instance under a Different IIS Site](#move-an-instance-under-a-different-iis-site)
- [View the Launch URL for an Instance](#view-the-launch-url-for-an-instance)
- [View the Data Service and Security Service Bound to an Instance](#view-the-data-service-and-security-service-bound-to-an-instance)
- [Set File Logging and Windows Logging for an Instance](#set-file-logging-and-windows-logging-for-an-instance)
- [Delete an Instance](#delete-an-instance)

## Start or Stop an Instance

You can start and stop a portal instance deployed in native IIS, remote IIS, and Docker. When you
stop an instance, the following happens:

- For a native IIS deployment, GroupID stops the instance’s application pool.
- For a remote IIS deployment, GroupID stops the site that hosts the instance.
- For a Docker deployment, GroupID stops the container where the instance is deployed.

**To start or stop an instance:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including all its instances.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. On the **IIS**, **Remote IIS**, or **Docker** tab, the **Select Application Deployment**
   drop-down list displays the portal instances deployed in the respective web server.  
   Select an instance to start or stop it.

    - When an instance is running, **Stop** is displayed next to it. Click it to stop the instance.
    - When an instance has stopped, **Start** is displayed next to it. Click it to start the
      instance.

## Change the IIS Application Name for an Instance

Each deployment instance of a portal in IIS is assigned an IIS application name to represent that
specific deployment. The name uniquely identifies the deployment in the IIS site and is used to
name:

- The instance’s virtual directory in IIS.
- It’s physical directory under X:\Program Files\Imanami \GroupID 11.0\GroupIDPortal\Inetpub\ on the
  GroupIDserver  
  (X represents the GroupID installation drive)

This name is also appended to the web server address to construct the URL that users click to access
the portal instance. For example:  
`https://<web-server-name>:<port>/<IIS-application-name>`

When you change the name, it propagates to the instance’s IIS directory, physical directory, and
launch URL. You must provide the updated URL to users to enable them to access the portal. See the
[Launch a Portal](/docs/directorymanager/11.0/signin/applications/portal/create.md#launch-a-portal)
topic.

**To change the IIS application name:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays the portal’s info, including all its
   instances.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. On the **IIS** tab, the **Select Application Deployment** drop-down list displays all portal
   instances deployed in native IIS. Select an instance to change its IIS application name.
5. In the **IIS Application Name** box on the **Deployment Configurations** tab, update the IIS
   deployment name for the instance.
6. Click **Save**.

## Move an Instance under a Different IIS Site

You can change the IIS site that hosts a deployment instance of a portal. In doing so, the URL of
the deployment instance also changes. You must provide the updated URL to your users to enable them
to access the instance. See the
[Launch a Portal](/docs/directorymanager/11.0/signin/applications/portal/create.md#launch-a-portal)
topic.

**To change the site:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including all its instances.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. On the **IIS** tab, the **Select Application Deployment** drop-down list displays all portal
   instances deployed in native IIS. Select an instance to move its directory under a different IIS
   site.
5. In the **IIS Site** drop-down list on the **Deployment Configurations** tab, select a site to
   move the instance’s directory under it. The list displays the websites defined in native IIS.
6. Click **Save**.

## View the Launch URL for an Instance

Use the URL for a portal's deployment instance to launch the respective instance.

**To view the URL:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including all its instances.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. On the **IIS**, **Remote IIS**, or **Docker** tab, the **Select Application Deployment**
   drop-down list displays the portal instances deployed in the respective web server. Select an
   instance to view the launch URL for it.
5. The **Launch URL** box on the **Deployment Configurations** tab displays the URL. Copy and paste
   it in the browser to launch the deployment instance of the portal or share it with users to
   enable them to launch the instance.

## View the Data Service and Security Service Bound to an Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including all its instances.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. On the **IIS**, **Remote IIS**, or **Docker** tab, the **Select Application Deployment**
   drop-down list displays the portal instances deployed in the respective web server. Select an
   instance to view the launch URL for it.
5. The **Data Service** and **Security Service** boxes on the **Deployment Configurations** tab
   display the Data service and Security service this portal instance uses.

## Set File Logging and Windows Logging for an Instance

To set file logging and Windows logging levels for a deployment instance, see the
[Manage Log Settings](/docs/directorymanager/11.0/signin/applications/portal/server/log.md) topic.

## Delete an Instance

To delete a portal’s deployment instance, see the
[Delete a Deployment Instance for a Portal](/docs/directorymanager/11.0/signin/applications/portal/delete.md#delete-a-deployment-instance-for-a-portal)
topic.

**See Also**

- [Server Settings](/docs/directorymanager/11.0/signin/applications/portal/server/overview.md)
