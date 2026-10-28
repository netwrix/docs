---
title: "Entra ID Page"
description: "Entra ID Page"
sidebar_position: 30
---

# Entra ID Page

On the Entra ID page, you can access all the Entra tenants that you configured on the Entra ID tab of
the Configuration interface. See the [Connect Entra ID](/docs/identityrecovery/3.1/configuration/entraid.md)
topic for additional information.

Click **Entra ID** in the left pane to open the Entra ID page.

![Entra ID page](/images/identityrecovery/3.1/product/entra_id/entra_id.png)

Select a tenant from the dropdown menu and expand it to view the supported object types.

The page displays the following information:

- Name – The display name of the object
- Description – A description of the object
- Backup Time – The date and time of the last backup

You can roll back and recover objects.

Search for an Object

You can find an object in two ways:

- Column Filters – Click a column header to organize the table alphabetically by the column header.
  An arrow appears by the column name. Use it to arrange the entries by ascending or descending
  order.
- Search box – Enter a text string in the search box to filter the table for results that contain
  the text.

Rollback an Object

Select and expand a tenant in the left pane and locate the object you want to rollback. Right-click
this object and select **Rollback** on the menu. See the [Rollback Objects](/docs/identityrecovery/3.1/admin/entraid/rollback.md) topic for additional information.

Recover Deleted Objects

When you expand a tenant in the left pane, you'll see a Recycle Bin. This is a virtual container specific to Identity Recovery. Use the Recycle Bin to recover deleted objects in Entra. See the [Recover Objects](/docs/identityrecovery/3.1/admin/entraid/recover.md) topic for
additional information.
