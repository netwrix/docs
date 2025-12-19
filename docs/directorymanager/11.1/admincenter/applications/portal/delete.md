---
title: "Delete a Portal"
description: "Delete a Portal"
sidebar_position: 20
---

# Delete a Portal

You can delete a portal or a deployment instance of a portal. On deleting a portal, all its
instances are deleted with it.

## Delete a Deployment Instance for a Portal

A portal can have multiple deployment instances. When you delete an instance, the following is
removed:

- **For an instance in native IIS:**

    - The portal directory under the following location on the Directory Manager server:  
      X:\Program Files\Imanami\GroupID 11.0\GroupIDPortal\Inetpub\  
      (X represents the Directory Manager installation drive)
    - The portal’s directory in the IIS site

- **For an instance in remote IIS:**

    - The portal’s directory in the remote IIS site
    - The portal's physical directory under the folder mapped to the remote IIS site

- **For an instance in Docker:**

    The container created in Docker Engine for the portal

**To delete an instance:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **GroupID Portal** tab, click the ellipsis button for a portal and select **Settings**.
3. Select **Deployments** under **Server Settings** in the left pane.  
   The **Deployment Settings** page has varying tabs, depending on the deployment instances of the
   portal.

    - The **IIS** tab is available when one or more portal instances are deployed in native IIS.
    - The **Remote IIS** tab is available when one or more portal instances are deployed in remote
      IIS.
    - The **Docker** tab is available when one or more portal instances are deployed in Docker.

    Select a tab to delete a portal instance deployed in the respective web server.

4. The **Select Application Deployment** drop-down list displays the portal instances deployed on
   the selected web server. Select an instance and click **Delete**.

## Delete a Portal

Deleting a portal removes all its deployments and configurations from Directory Manager.

**To delete a portal:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **GroupID Portal** tab, click the ellipsis button for a portal and select **Delete**.