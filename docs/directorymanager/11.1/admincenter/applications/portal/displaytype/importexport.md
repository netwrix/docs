---
title: "Set Import and Export Attributes for Group Members and Owners"
description: "Choose the schema attributes and friendly names the portal uses to import and export group members and additional owners."
keywords:
  - import group members
  - export group members
  - additional owners
  - schema attributes
  - Import/Export page
sidebar_position: 80
---

# Set Import and Export Attributes for Group Members and Owners

In the Directory Manager portal, users can export the members and additional owners of a group to a file, such as a CSV or XLS file. They can also import members and additional owners for a group from a file. Members can also be imported from an external data source.

You specify the schema attributes used for import and export, and a user-friendly name for each attribute.

- The import function reads object information from an external file or data source. It searches the directory for matching objects based on field mapping, where a column name in the file or data source is mapped to one of the attributes you specify here. Objects that have the same values for the mapped fields are added to the membership or additional ownership of the target group.
- The export function reads the membership or additional ownership of the group. It exports the values of the specified attributes for the members or additional owners to an external file.

The portal shows the schema attributes you specify, with their user-friendly names, on these wizards:

| Wizard name | Description |
| --- | --- |
| Import Members | Imports members to a group from a file or an external data source. Users can launch it from the Members page on the Create Group wizard and from the Members tab in group properties. |
| Export Members | Exports the members of a group to an external file. Users can launch it from the Members tab in group properties. |
| Import Additional Owners | Imports additional owners to a group from an external file. Users can launch it from the Owners page on the Create Group wizard and from the Owner tab in group properties. |
| Export Additional Owners | Exports the additional owners of a group to an external file. Users can launch it from the Owner tab in group properties. |

:::note
The attributes you specify apply to all four wizards. You can't specify a different set of attributes for a wizard.
:::

## Specify attributes for import and export

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Import/Export** in the left pane. On the **Import/Export** page, schema attributes for display name, first name, last name, and email are specified by default. These attributes are available in the portal for the export and import of group members and additional owners.
5. To add an attribute, click **Add**. The **Import/Export Attribute** dialog box opens.
6. In the **Schema Attribute** dropdown list, select a schema attribute to use for import and export.
7. In the **User-Friendly Name** box, enter an easy and meaningful name for the attribute. The portal shows the attribute with this name on the Import Members, Export Members, Import Additional Owners, and Export Additional Owners wizards.
8. Click **OK**. The attribute appears with its user-friendly name on the **Import/Export** page.
9. Click **Save**.

## Update an attribute

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Import/Export** in the left pane.
5. On the **Import/Export** page, click **Edit** for an attribute.
6. On the **Import/Export Attribute** dialog box, change the user-friendly name for the attribute. You can also select a different attribute to replace the current one. Then click **OK**.
7. Click **Save** on the **Import/Export** page.

## Remove an attribute from import and export

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Import/Export** in the left pane.
5. On the **Import/Export** page, click **Remove** for an attribute to remove it. The attribute isn't available on the Import Members, Export Members, Import Additional Owners, and Export Additional Owners wizards in the portal.
6. Click **Save**.
