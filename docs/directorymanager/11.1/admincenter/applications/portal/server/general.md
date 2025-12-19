---
title: "Manage General Server Settings"
description: "Manage General Server Settings"
sidebar_position: 10
---

# Manage General Server Settings

You can manage general server settings for a portal, such as change its display name, associate
identity stores with it, and view its various deployments.

## Change a Portal's Display Name

A portal is assigned an _application name_ during creation, which is used as it's display name in
Directory Manager. On changing it, the portal is displayed with the new name.

**To change a portal's display name:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal card displays its info, including its name. You can
   differentiate between a standard Directory Manager portal and a SSPR portal from the portal logo,
   as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. On the **General Settings** page, enter a new name for the portal in the **Application Name**
   box.
4. Click **Save**.

## Associate Identity Stores with a Portal

You must associate one or more identity stores with a portal. When signing into the portal, a user
must select an identity store to connect to, for performing group and identity management operations
for that identity store. Similarly, when signing into the Self-Service Password Reset portal (SSPR),
a user must select an identity store to connect to, for performing password management functions.

**To associate an identity store:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal card displays its info, including the identity stores
   associated with it. You can differentiate between a standard Directory Manager portal and a SSPR
   portal from the portal logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. The **Identity Stores** area on the **General Settings** page lists the identity stores in
   Directory Manager. It displays the provider type the identity store is created for, and whether
   the identity store is enabled.

    - Select the check box for an identity store to associate it with the portal.
    - Clear the check box for an identity store to dissociate it.

    All instances of this portal serve the identity store(s) you select here.

4. Click **Save.**

:::note
You may observe the following message on the **Server Settings – General** page:
:::


![linked_message](/images/directorymanager/11.1/admincenter/portal/linked_message.webp)

It relates to the scenario when identity stores in Directory Manager have been linked, as discussed
in the
[Linked Identity Stores and the Directory Manager Portal](/docs/directorymanager/11.1/admincenter/identitystore/link/overview.md#linked-identity-stores-and-the-directory-manager-portal)
topic. Hence, when two identity stores, IdentityStoreA and IdentityStoreB, are linked and you
associate IdentityStoreA with the portal, this message is displayed. It alerts you to associate the
second identity store in the linked pair (dentityStoreB) with the portal too, in order to benefit
from the linking.

## View the Deployment(s) for a Portal

A portal can have multiple deployments in the same or different web servers. You can update certain
settings for each deployment instance of a portal.

**To view a portal’s deployment instances:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal card displays its info, including all its deployment
   instances. You can differentiate between a standard Directory Manager portal and a SSPR portal
   from the portal logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**.
4. The **Deployment Settings** page has varying tabs, depending on the deployment instances of the
   portal.

    - The **IIS** tab is available when one or more portal instances are deployed in native IIS.
      Select an instance to view the name of the instance directory in IIS, the IIS site that hosts
      the instance, the URL for the instance, the Data service and Security service associated with
      the instance, and logging levels. See the
      [Manage Settings for a Native IIS Deployment](/docs/directorymanager/11.1/admincenter/applications/portal/server/nativeiis.md) topic for details.
    - The **Remote IIS** tab is available when one or more portal instances are deployed in remote
      IIS. Select an instance to view the Microsoft IIS Administration API URL and access token that
      Directory Manager uses to communicate with the remote IIS server, the credentials used to
      communicate with the API, the site that hosts the instance, the Data service and Security
      service associated with the instance, and logging levels. See the
      [Manage Settings for a Remote IIS Deployment](/docs/directorymanager/11.1/admincenter/applications/portal/server/remoteiis.md) topic for details.
