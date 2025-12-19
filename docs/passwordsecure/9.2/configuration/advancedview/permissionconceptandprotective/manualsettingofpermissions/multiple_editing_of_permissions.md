---
title: "Multiple editing of permissions"
description: "Multiple editing of permissions"
sidebar_position: 20
---

# Multiple editing of permissions

## How to edit multiple permissions?

As part of the manual modification of permissions, it is also possible to edit multiple records at
the same time. Various mechanisms can be used to select the records to be edited. You are able to
select the records in [List view](/docs/passwordsecure/9.2/configuration/advancedview/operationandsetup/list_view.md) or you can use
the filter as part of the multiple editing function. Both scenarios are described below.

### User permissions for batch processing

This mode is inactive by default and needs to be activated in the user rights.

- Can carry out batch processing for permissions based on a filter

## Multiple editing via list view

Individual permissions can be added or remove via **Multiple editing within list view**. The
existing permissions will **not be overwritten**.

## Selecting the records

In list view, Shift or Ctrl + mouse click can be used to select multiple records. Permissions can
also be granted for these records via the selection. The marked records are displayed in a different
color. 6 records are marked in the following image.

![password list](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-1-en.webp)

## Dialogue for configuring the permissions

A new tab will be opened in the ribbon above the "Permissions" button in which the permissions can
be configured. The tab will display the number of records that will be affected by the defined
changes.

![rights for selected passwords](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-2-en.webp)

NOTE: As the already granted permissions for the selected records may differ, it is not possible to
display the permissions here.

## Adding permissions

To add a permission, a user or role is selected first in the ribbon under **Search and add** or
**Search**. The permissions are then selected as usual in the ribbon. The
:material-plus-circle-outline: symbol indicates that permissions will be added. In the following
example, Mr. Steiner receives read permission to all selected records. In contrast, Mr. Brewery
receives all permissions.

## Reducing permissions / removing users and roles from the permissions

If you want to remove permissions, it is also necessary to add the user or the desired role to be
edited. Clicking on **Reduce permissions** now means that permissions will be removed. This is
indicated by the :material-minus-circle-outline: symbol. The selected permissions will be removed.

NOTE: If the **read** permission is to be removed for a user or role, the user will be completely
removed from the permissions.

## Examples

In the following example, Mr. Steiner receives read permissions to all selected records. In
contrast, Mr. Brewery receives all permissions:

![rights for selected passwords](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-3-en.webp)

The read permission will be removed for Mr. Steiner. As removing the read permissions means that no
other permissions exist for the record, Mr. Steiner is completely removed from the permissions. The
authorize, move, export and print permissions are being removed from Mr. Brewery. Assuming that he
previously had all permissions, he will then have read, write and delete permissions remaining:

![edit rights for selected passwords](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-4-en.webp)

## Batch processing using a filter

In some cases it is necessary to edit the permissions for a very large number of records. On the one
hand, a maximum limit of 1000 records exists and on the other hand, handling a very large number of
records via list view is not always the best solution. The **Batch processing using a filter** mode
has been developed for this purpose. This is directly initiated via the ribbon.

![Batch processing using a filter](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-5-en.webp)

In the subsequent dialogue, you define whether you want to expand, reduce or completely overwrite
existing permissions. If you select **expand or reduce** at this stage, the same logic as for
**editing via list view** is used. No permissions will thus be overwritten.

In the option **overwrite permissions**, the existing permissions are removed and then replaced by
the newly defined permissions.

**CAUTION:** It is important to proceed with great caution when overwriting permissions because this
function can quickly lead to a large number of records becoming unusable.

![permissions adapted on a filter](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-6-en.webp)

The filter itself defines the selection criteria for the records to be edited. The currently
configured filter will be used as default. The records that will be affected by the changes are also
not displayed in this view. Only the number of records is displayed. In the following example, 9
passwords are being edited to add the read permission the role "Sales".

![permissions change for selected records](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-7-en.webp)

## Seals and password masking

Sealed or masked records cannot be edited using batch processing. If these types of passwords are
selected, a dialogue will be displayed when carrying out batch processing to inquire how these
records should be handled.

![security warning because of sealed or masked passwords](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-8-en.webp)

It is possible to select whether the affected records are skipped or whether the seal or password
masking should be removed. If the **remove** option is selected, the process needs to be confirmed
again by entering a PIN.

![security warning](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-9-en.webp)

**CAUTION:** The removal of seals and password masking cannot be reversed!

NOTE: Depending on the number of records, editing records may take a long time. This process is
carried out in the background for this reason. A hint will indicate that the permissions process has
been completed.
