---
title: "Manage Remote IIS Deployment Settings in Directory Manager"
description: "View the deployment settings of a Directory Manager portal instance in remote IIS, including the API URL, access token, site, and bound services."
keywords:
  - remote IIS deployment
  - IIS Administration API
  - access token
  - portal instance
  - deployment configurations
  - Directory Manager portal
sidebar_position: 30
---

# Manage Remote IIS Deployment Settings in Directory Manager

You can manage several settings for a portal instance that is deployed in remote IIS.

**What do you want to do?**

## Start or stop an instance

To start or stop a deployment instance, see the
[Start or Stop an Instance](nativeiis.md#start-or-stop-an-instance) topic.

## View the deployment settings for an instance

When you create a portal's deployment instance in remote IIS, you must provide information about the
[Microsoft IIS Administration API](https://learn.microsoft.com/en-us/iis-administration/):

- The API URL that Directory Manager uses to communicate with the remote IIS server
- The access token that Directory Manager uses to access the API
- The credentials used to connect to the API

You must also provide an IIS application name and select a site to host the portal instance. In
addition, specify the Data service and Security service that the instance uses.

After you create the instance, you can view these settings but you can't modify them.

**To view deployment settings:**

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal card displays its info, including all its instances. Each
   portal type has its own logo, so you can tell a standard Directory Manager portal from an SSPR
   portal.

2. Click the ellipsis button for a portal and select **Settings**.
3. Under **Server Settings**, click **Deployments**. The **Deployment Settings** page appears.
4. Click the **Remote IIS** tab.
5. On the **Remote IIS** tab, select an instance in the **Select Application Deployment** dropdown
   list. The list displays all portal instances deployed in remote IIS.
6. Open the **Deployment Configurations** tab to view the API URL, access token, and credentials.
   The tab also shows the name of the portal application in remote IIS, the site that hosts it, the
   URL to launch the instance, and the Data service and Security service the instance uses. For a
   description of these fields, see steps 7-12 in the
   [Create a Portal in Remote IIS](/docs/directorymanager/11.2/admincenter/applications/portal/create.md#create-a-portal-in-remote-iis) topic.

## Set file logging and Windows logging for an instance

To set file logging and Windows logging levels for a deployment instance, see the
[Manage Portal Log Settings in Directory Manager](/docs/directorymanager/11.2/admincenter/applications/portal/server/log.md) topic.

## Delete an instance

To delete a portal's deployment instance, see the
[Delete a Deployment Instance for a Portal](/docs/directorymanager/11.2/admincenter/applications/portal/delete.md#delete-a-deployment-instance-for-a-portal)
topic.
