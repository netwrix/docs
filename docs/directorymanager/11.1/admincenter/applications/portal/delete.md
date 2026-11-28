---
title: "Delete a Directory Manager Portal"
description: "Delete a portal or one of its deployment instances in Admin Center, and see what Directory Manager removes from IIS or Docker."
keywords:
  - delete portal
  - portal deployment instance
  - native IIS
  - remote IIS
  - Docker container
sidebar_position: 20
---

# Delete a Directory Manager Portal

You can delete a portal or one of its deployment instances. When you delete a portal, Directory Manager deletes all its instances with it.

## Delete a deployment instance for a portal

A portal can have multiple deployment instances. When you delete an instance, Directory Manager removes the following.

**For an instance in native IIS:**

- The portal directory under `X:\Program Files\Imanami\GroupID 11.0\GroupIDPortal\Inetpub\` on the Directory Manager server. `X` represents the Directory Manager installation drive.
- The portal's directory in the IIS site.

**For an instance in remote IIS:**

- The portal's directory in the remote IIS site.
- The portal's physical directory under the folder mapped to the remote IIS site.

**For an instance in Docker:**

- The container created in Docker Engine for the portal.

**To delete an instance:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **GroupID Portal** tab, click the ellipsis button for a portal and select **Settings**.
3. Select **Deployments** under **Server Settings** in the left pane.

   The **Deployment Settings** page has varying tabs, depending on the deployment instances of the portal:

   - The **IIS** tab is available when one or more portal instances are deployed in native IIS.
   - The **Remote IIS** tab is available when one or more portal instances are deployed in remote IIS.
   - The **Docker** tab is available when one or more portal instances are deployed in Docker.

4. Select the tab for the web server that hosts the instance you want to delete.
5. In the **Select Application Deployment** dropdown list, which displays the portal instances deployed on the selected web server, select an instance and click **Delete**.

## Delete a portal

Deleting a portal removes all its deployments and configurations from Directory Manager.

**To delete a portal:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **GroupID Portal** tab, click the ellipsis button for a portal and select **Delete**.
