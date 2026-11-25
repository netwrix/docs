---
title: "Manage General Portal Server Settings in Directory Manager"
description: "Rename a Directory Manager portal, associate identity stores with it, and view its deployment instances from the General Settings page."
keywords:
  - portal display name
  - identity store association
  - portal deployments
  - Server Settings
  - Admin Center
  - Self-Service Password Reset portal
sidebar_position: 10
---

# Manage General Portal Server Settings in Directory Manager

On the General Settings page, you can change a portal's display name, associate identity stores with it, and view its deployments.

## Change a portal's display name

A portal gets an application name when you create it. Directory Manager uses this name as the portal's display name. When you change it, the portal appears with the new name.

**To change a portal's display name:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, each portal card shows the portal's information, including its name. Each portal type has its own logo, so you can tell a standard Directory Manager portal from an SSPR portal.
2. Click the ellipsis button for a portal and select **Settings**.
3. On the **General Settings** page, enter a new name for the portal in the **Application Name** box.
4. Click **Save**.

## Associate identity stores with a portal

You must associate one or more identity stores with a portal. When a user signs in to the portal, the user selects an identity store to connect to. The user then performs group and identity management operations for that identity store. Similarly, when a user signs in to the Self-Service Password Reset (SSPR) portal, the user selects an identity store to connect to and performs password management functions.

**To associate an identity store:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, each portal card shows the portal's information, including the identity stores associated with it. Each portal type has its own logo, so you can tell a standard Directory Manager portal from an SSPR portal.
2. Click the ellipsis button for a portal and select **Settings**.
3. In the **Identity Stores** area on the **General Settings** page, review the identity stores in Directory Manager. The area shows the provider type for each identity store and whether it is enabled.

   - Select the checkbox for an identity store to associate it with the portal.
   - Clear the checkbox for an identity store to dissociate it.

   All instances of this portal serve the identity stores you select here.

4. Click **Save**.

:::note
You might see the following message on the **Server Settings – General** page:
:::

![Message on the Server Settings General page about linked identity stores](/images/directorymanager/11.1/admincenter/portal/linked_message.webp)

This message appears when identity stores in Directory Manager are linked. For details, see the [Linked Identity Stores and the Directory Manager Portal](/docs/directorymanager/11.1/admincenter/identitystore/link/overview.md#linked-identity-stores-and-the-directory-manager-portal) topic. Suppose two identity stores are linked: IdentityStoreA and IdentityStoreB. You associate IdentityStoreA with the portal. The message then tells you to associate IdentityStoreB with the portal too, to benefit from the linking.

## View the deployments for a portal

A portal can have multiple deployments on the same or different web servers. You can update certain settings for each deployment instance of a portal.

**To view a portal’s deployment instances:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, each portal card shows the portal's information, including all its deployment instances. Each portal type has its own logo, so you can tell a standard Directory Manager portal from an SSPR portal.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**.
4. On the **Deployment Settings** page, review the tabs. The tabs depend on the deployment instances of the portal.

   - The **IIS** tab appears when one or more portal instances are deployed in native IIS. Select an instance to view:
     - The name of the instance directory in IIS
     - The IIS site that hosts the instance
     - The URL for the instance
     - The Data service and Security service associated with the instance
     - The logging levels

     For details, see the [Manage Native IIS Deployment Settings in Directory Manager](/docs/directorymanager/11.1/admincenter/applications/portal/server/nativeiis.md) topic.
   - The **Remote IIS** tab appears when one or more portal instances are deployed in remote IIS. Select an instance to view:
     - The Microsoft IIS Administration API URL and access token that Directory Manager uses to communicate with the remote IIS server
     - The credentials used to communicate with the API
     - The site that hosts the instance
     - The Data service and Security service associated with the instance
     - The logging levels

     For details, see the [Manage Remote IIS Deployment Settings in Directory Manager](/docs/directorymanager/11.1/admincenter/applications/portal/server/remoteiis.md) topic.
