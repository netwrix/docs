---
title: "Inheritance from organisational structures"
description: "Inheritance from organisational structures"
sidebar_position: 10
---

# Inheritance from organisational structures

## Organisational structures as a basis

The aim of organisational structures is to reflect the hierarchies and dependencies amongst
employees that exist in a company. Permissions are granted to these structures as usual via the
ribbon. Further information on this subject can be found in the section
[Permissions for organisational structures](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/organisationalstructure/permissionsfororganisational/permissions_for_organisational.md).
As a specific authorization concept is generally already used within organisational structures, this
is also used as the basis for further permissions. This form of inheritance is technically
equivalent to granting permissions based on **affiliations to a folder**. When creating a new
record, the record receives the permissions in accordance with the defined permissions for the
organisational unit.

![explanation of authorization](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-1-en.webp)

## Relevant user settings

Whether this form of inheritance should be applied is defined via the settings in the ribbon. It can
be configured in more detail using two settings.

:::warning
If a predefined rights exists, this will always overwrite inherited permissions from
organisational structures
:::


Inherit permissions for new objects (without rights template) This setting is relevant for newly
created records.

![setting inherit permission](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-2-en.webp)

The following values can be configured:

Off: Permissions from OUs are not inherited organisational unit: When creating new objects,
permissions are set in accordance with the defined rights for the target organisational unit. This
setting is active by default. organisational unit and user: As well as inheriting permissions for
organization units, the configured permissions for the user are now also inherited when creating
private records. \*If inheritance for the users is also activated, the creation of private records
is in itself no longer possible. When creating new records to be saved in the organisational unit
for the logged-in user, the permissions for the record are now granted in accordance with the
permissions for the user.

Existing passwords inherit changes to the permissions for organisational units

![setting inherit from OU to password](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-3-en.webp)

This option means that changes to permissions for an organisational unit will be inherited by all
passwords for this organisational unit. This setting is active by default. When inheriting
permissions, a dialogue will be displayed that offers you the following options:

Increase or reduce permissions: The permissions for the passwords are retained and are only
increased or reduced by the change. Overwrite permissions: The permissions for the passwords are
completely overwritten. This means that all permissions for a password are firstly removed and then
the new permissions for the organisational unit are inherited. Cancel inheritance: The permissions
are not inherited but are only changed in the organisational unit. \*The permissions are only
inherited by existing passwords within the organisational unit. Therefore, the permissions are not
inherited downwards throughout the entire structure.

Example case This example shows the creation of a new record in the organisational structure
“marketing”. It is defined in the settings for the stated organisational structure that permissions
should be inherited by new objects in accordance with the organisational structure.

The permissions for the organisational unit “marketing” are shown below:

![example of permissions](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-4-en.webp)

A new password is now created in the organisational unit “marketing”.

![new password](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-5-en.webp)

It is important that no preset is defined for this organisational unit. The permissions for the
record just created are now shown.

![permissions example](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-6-en.webp)

## Conclusion

The permissions for the “storage location” are simply used when creating new objects. Two conditions
apply here:

The value “organisational unit” must be selected in the settings for the inheritance of permissions
There must be no
[Predefining rights](/docs/passwordsecure/9.1/configuration/advancedview/permissionconceptandprotective/predefiningrights/predefining_rights.md)
for the affected organisational structure This process is illustrated in the following diagram:

![process for inheritance of permissions](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-7-en.webp)
