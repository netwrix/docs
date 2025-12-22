---
title: "Manual setting of permissions"
description: "Manual setting of permissions"
sidebar_position: 10
---

# Manual setting of permissions

## What is the manual setting of permissions for records?

In contrast to the
[Automated setting of permissions](/docs/passwordsecure/9.1/configuration/advancedview/permissionconceptandprotective/automatedsettingofpermissions/automated_setting_of_permissions.md),
the manual approach does not utilize any automatic processes. This method of setting permissions is
thus carried out separately for every record – this process is not as recommended for newly created
data. If you want to work effectively in the long term, the automatic setting of permissions should
be used. However, the manual setting of permissions is generally used when editing already existing
records.

## Adding additional users with permissions

In the previous section, it was clarified that permissions are granted either directly to the user
or to several users grouped in a role. With this knowledge, the permissions can be set manually. In
the
[Passwords](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/passwords/passwords.md),
there are three different ways to access the permissions in the list view:

1. Icon in the ribbon
2. Context menu of a data record (right-click)
3. Icon at the right edge of the reading pane

![different ways to access the permissions](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/manual_settings/manual-setting-of-permissions-1-en.webp)

NOTE: The icon on the right of the reading pane shows the information whether the record is personal
or public. In case of personal data records, the user that is logged on is the only one who has
permissions!

The author is created with all permissions for the record. As described in the
[Permission concept and protective mechanisms](/docs/passwordsecure/9.1/configuration/advancedview/permissionconceptandprotective/permission_concept_and_protective.md),
you can now add roles and users. 'Right click - Add' inside the userlist or use the ribbon "User and
roles" to add a user. The filter helps you to quickly find those users who should be granted
permissions for the record in just a few steps.

![add user and role](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/manual_settings/manual-setting-of-permissions-2-en.webp)

The search
[Filter](/docs/passwordsecure/9.1/configuration/advancedview/operationandsetup/filter/filter.md)opens
in a separate tab and can be configured as usual.

![seach filter](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/manual_settings/manual-setting-of-permissions-3-en.webp)

**Multiple selection** is also enabled. It allows to add several users via the Windows standard
Ctrl/Shift + left mouse button.

## Set and remove permissions

By default, all added users or roles receive only the “Read” permission on the record. The “Read”
permission at the beginning is sufficient to view the fields of the data record and to use the
password. "Write" permission allows you to edit a data record. **The permission “Authorize” is
necessary to authorize other users to the record**. This is also a requirement for the
[Seals](/docs/passwordsecure/9.1/configuration/advancedview/permissionconceptandprotective/protectivemechanisms/seals/seals.md).

![setting all permissions example](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/manual_settings/manual-setting-of-permissions-4-en.webp)

## Transferring permissions

A simple right-click on a user can be used to copy and transfer permission configurations of users
or roles to others in the context menu. In this context, the use of permission templates is also
very practical. In the “Template” area of ​​the ribbon, you can save configured permissions,
including all users, and reuse them for other records.

![preset menu](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/manual_settings/manual-setting-of-permissions-5-en.webp)

The transfer of permissions and their reuse can be an important building block to create and
maintain entitlement integrity. This method cannot rule out misconfigurations, but it will minimize
the risk significantly. Of course, the correct configuration of these templates is a prerequisite.

## The add permission

The “add" permission holds a special position in the authorization concept. This permission controls
whether a user/role is permitted e.g. to create a new record within an organisational structure.
Consequently, this permission can only be set in the
[Organisational structure](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/organisationalstructure/organisational_structure.md).

## The owner permission

The "owner" permission can be set for a user. This permission is more of **a guarantee**. Once
assigned, there is no way to remove the user or role. This is only possible by the user or the role
itself, as well as by users with the permission “Is database administrator”.

![owner permission](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/manual_settings/manual-setting-of-permissions-6-en.webp)

The owner permission prevents other users who have the “Authorize” permission from removing someone
with the owner permission from the record.

:::warning
The owner permission does not protect a record from being deleted. Any user who has
deletion permission can delete the record!

:::
