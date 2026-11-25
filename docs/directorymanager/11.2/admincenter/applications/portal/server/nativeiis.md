---
title: "Manage Native IIS Deployment Settings in Directory Manager"
description: "Start, stop, rename, or move a Directory Manager portal instance deployed in native IIS, and view its launch URL and bound services."
keywords:
  - native IIS deployment
  - portal instance
  - IIS application name
  - launch URL
  - Data service
  - Security service
sidebar_position: 20
---

# Manage Native IIS Deployment Settings in Directory Manager

You can manage settings for a portal instance deployed in native IIS.

## Start or stop an instance

You can start and stop a portal instance deployed in native IIS, remote IIS, and Docker. When you stop an instance:

- For a native IIS deployment, Directory Manager stops the instance’s application pool.
- For a remote IIS deployment, Directory Manager stops the site that hosts the instance.
- For a Docker deployment, Directory Manager stops the container that hosts the instance.

**To start or stop an instance:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, each portal card shows the portal’s information, including all its instances. Each portal type has its own logo, so you can tell a standard Directory Manager portal from a Self-Service Password Reset (SSPR) portal.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**. The **Deployment Settings** page appears.
4. On the **IIS**, **Remote IIS**, or **Docker** tab, the **Select Application Deployment** dropdown list shows the portal instances deployed in that web server. Select an instance to start or stop it.

   - When an instance is running, **Stop** appears next to it. Click it to stop the instance.
   - When an instance has stopped, **Start** appears next to it. Click it to start the instance.

## Change the IIS application name for an instance

Each portal deployment instance in IIS has an IIS application name that represents that specific deployment. The name uniquely identifies the deployment in the IIS site. Directory Manager uses it to name:

- The instance’s virtual directory in IIS.
- Its physical directory under X:\Program Files\Imanami \GroupID 11.0\GroupIDPortal\Inetpub\ on the Directory Manager server. X represents the Directory Manager installation drive.

Directory Manager also appends this name to the web server address to build the URL that users click to access the portal instance. For example:

`https://web-server-name:port/IIS-application-name`

When you change the name, the change propagates to the instance’s IIS directory, physical directory, and launch URL. You must give users the updated URL so they can access the portal. See the [Launch a Portal](/docs/directorymanager/11.2/admincenter/applications/portal/create.md#launch-a-portal) topic.

**To change the IIS application name:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, each portal card shows the portal’s information, including all its instances. Each portal type has its own logo, so you can tell a standard Directory Manager portal from a Self-Service Password Reset (SSPR) portal.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**. The **Deployment Settings** page appears.
4. On the **IIS** tab, the **Select Application Deployment** dropdown list shows all portal instances deployed in native IIS. Select an instance to change its IIS application name.
5. In the **IIS Application Name** box on the **Deployment Configurations** tab, update the IIS deployment name for the instance.
6. Click **Save**.

## Move an instance to a different IIS site

You can change the IIS site that hosts a deployment instance of a portal. When you do, the URL of the deployment instance also changes. You must give your users the updated URL so they can access the instance. See the [Launch a Portal](/docs/directorymanager/11.2/admincenter/applications/portal/create.md#launch-a-portal) topic.

**To change the site:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, each portal card shows the portal’s information, including all its instances. Each portal type has its own logo, so you can tell a standard Directory Manager portal from a Self-Service Password Reset (SSPR) portal.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**. The **Deployment Settings** page appears.
4. On the **IIS** tab, the **Select Application Deployment** dropdown list shows all portal instances deployed in native IIS. Select an instance to move to a different IIS site.
5. In the **IIS Site** dropdown list on the **Deployment Configurations** tab, select a site. The list shows the websites defined in native IIS. The instance moves to the selected site.
6. Click **Save**.

:::note
The instance moves to the new IIS site, and its URL changes to match. However, because of a known limitation, the **Launch URL** box on the **Deployment Configurations** tab continues to display the port of the previously assigned site instead of the new site’s port. Before using or distributing the launch URL, manually replace the displayed port with the port configured for the new IIS site.
:::

## View the launch URL for an instance

Use the URL for a portal’s deployment instance to launch that instance.

**To view the URL:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, each portal card shows the portal’s information, including all its instances. Each portal type has its own logo, so you can tell a standard Directory Manager portal from a Self-Service Password Reset (SSPR) portal.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**. The **Deployment Settings** page appears.
4. On the **IIS**, **Remote IIS**, or **Docker** tab, the **Select Application Deployment** dropdown list shows the portal instances deployed in that web server. Select an instance to view its launch URL.
5. The **Launch URL** box on the **Deployment Configurations** tab shows the URL. Copy and paste it in the browser to launch the portal’s deployment instance, or share it with users so they can launch the instance.

## View the Data service and Security service bound to an instance

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, each portal card shows the portal’s information, including all its instances. Each portal type has its own logo, so you can tell a standard Directory Manager portal from a Self-Service Password Reset (SSPR) portal.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**. The **Deployment Settings** page appears.
4. On the **IIS**, **Remote IIS**, or **Docker** tab, the **Select Application Deployment** dropdown list shows the portal instances deployed in that web server. Select an instance to view its launch URL.
5. The **Data Service** and **Security Service** boxes on the **Deployment Configurations** tab show the Data service and Security service this portal instance uses.

## Set file logging and Windows logging for an instance

To set file logging and Windows logging levels for a deployment instance, see the [Manage Portal Log Settings in Directory Manager](/docs/directorymanager/11.2/admincenter/applications/portal/server/log.md) topic.

## Delete an instance

To delete a portal’s deployment instance, see the [Delete a Deployment Instance for a Portal](/docs/directorymanager/11.2/admincenter/applications/portal/delete.md#delete-a-deployment-instance-for-a-portal) topic.
