---
title: "Specify Attributes for Import/Export of Group Owners and Members"
description: "Specify Attributes for Import/Export of Group Owners and Members"
sidebar_position: 80
---

# Specify Attributes for Import/Export of Group Owners and Members

In the Directory Manager portal, users can:

- Export members and additional owners of a group to a file, such as a csv or an xls file
- Import members and additional owners for a group from a file. Members can also be imported from an
  external data source.

You can specify schema attributes to be used for export/import, along with a user-friendly name for
each attribute.

- The import function reads the objects’ information from an external file or data source and
  searches for matching objects in the directory based on field mapping (where a column name in the
  file or data source is mapped to any of the attributes specified here).  
  Objects having the same values for the mapped fields are added to the membership or additional
  ownership of the target group.
- The export function reads the membership/additional ownership of the group and exports the values
  of the specified attributes for members/additional owners to an external file.

The schema attributes you specify are displayed with their user-friendly names on the following
wizards in the portal:

| Wizard Name              | Description                                                                                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Import Members           | This wizard is used to import members to a group using a file or an external data source. Users can launch it from the Members page on the Create Group wizard and from the Members tab in group properties. |
| Export Members           | This wizard is used to export the members of a group to an external file. Users can launch it from the Members tab in group properties.                                                                      |
| Import Additional Owners | This wizard is used to import additional owners to a group using an external file. Users can launch it from the Owners page on the Create Group wizard and from the Owner tab in group properties.           |
| Export Additional Owners | This wizard is used to export the additional owners of a group to an external file. Users can launch it from the Owner tab in group properties.                                                              |

:::note
The attributes you specify apply to all four wizards. You cannot specify a different set of
attributes for a wizard.
:::


## Specify Attributes for Import and Export

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Import/Export** in the left pane.  
   On the **Import/Export** page, schema attributes for _display name_, _first name_, _last name_,
   and _email_ are specified by default. These attributes are available in the portal for the export
   and import of group members and additional owners.
5. To add an attribute, click **Add**. The **Import/Export Attribute** dialog box is displayed.
6. In the **Schema Attribute** drop-down list, select a schema attribute to use for import/export.
7. In the **User-Friendly Name** box, enter an easy and meaningful name for the attribute. The
   attribute will be displayed with this name on the Import Members, Export Members, Import
   Additional Owners, and Export Additional Owners wizards in the portal.
8. Click **OK**. The attribute is displayed with its user-friendly name on the **Import/Export**
   page.
9. Click **Save**.

## Update an Attribute

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Import/Export** in the left pane.
5. On the **Import/Export** page, click **Edit** for an attribute.
6. On the **Import/Export Attribute** dialog box, change the user-friendly name for the attribute.
   You can also select a different attribute to replace the current one. Then click **OK**.
7. Click **Save** on the **Import/Export** page.

## Remove an Attribute from Import and Export

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Import/Export** in the left pane.
5. On the **Import/Export** page, click **Remove** for an attribute to remove it.  
   The attribute will not be available on the _Import Members_, _Export Members_, _Import Additional
   Owners_, and _Export Additional Owners_ wizards in the portal.
6. Click **Save**.