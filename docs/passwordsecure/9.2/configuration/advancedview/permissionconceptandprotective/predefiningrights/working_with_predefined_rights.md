---
title: "Working with predefined rights"
description: "Working with predefined rights"
sidebar_position: 10
---

# Working with predefined rights

## Using predefined rights when creating passwords

After you have configured [Predefining rights](/docs/passwordsecure/9.2/configuration/advancedview/permissionconceptandprotective/predefiningrights/predefining_rights.md), you can then use them to
create new records. Proceed here as follows:

- Select the password module
- “New password” via the ribbon
- Select a form

In the next window to appear, the organisational unit “IT” and the template group “Exchange” are
selected.

![predefined rights](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/working_with_predefining_rights/working_with_predefined_rights_1-en.webp)

Here is the underlying rights template as a comparison:

![example for predefined rights](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/working_with_predefining_rights/working_with_predefined_rights_2-en.webp)

The relationship between them is obvious. It can be immediately seen that by selecting the
organisational unit “IT” based on the rights configured in the rights template, permissions are
granted for the roles “IT management” and also “Administrators”. **The underlying tags “IT” and
“Exchange” are also set.**

## Preview of the permissions to be set

When using rights templates, the permissions to be granted can be very quickly classified via a
**color table**. The actual permissions can also be viewed as usual via the
[Ribbon](/docs/passwordsecure/9.2/configuration/advancedview/operationandsetup/ribbon.md). The following color key is used with the
associated permissions:

| **Color** | **Permission** |
| --------- | -------------- |
| Green     | Read           |
| Yellow    | Write          |
| Orange    | Delete         |
| Red       | Authorize      |

Other rights also exist that are, however, not separately indicated by a color. The overview in the
ribbon can be used to see whether the “move”, “export” and “print” rights are set or not. The
permissions for the selected role/user are always displayed – in this case for the role “IT
management”.

![predefined rights permiissions](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/working_with_predefining_rights/working_with_predefined_rights_3-en.webp)

## Conclusion

The [Manual setting of permissions](/docs/passwordsecure/9.2/configuration/advancedview/permissionconceptandprotective/manualsettingofpermissions/manual_setting_of_permissions.md) enables
the configuration of rights for both existing and also new records. The option of
[Predefining rights](/docs/passwordsecure/9.2/configuration/advancedview/permissionconceptandprotective/predefiningrights/predefining_rights.md) represents a very efficient alternative. Instead of
having to separately grant permissions for every record, a “preset” is defined once for each
organisational structure. Once this has been done, it is sufficient in future to merely select the
organisational structure when creating a record. The permissions are then set automatically. This
process is particularly advantageous for those users who should not set their permissions
themselves.

![predefined rights diagram](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/working_with_predefining_rights/working_with_predefined_rights_4-en.webp)

**CAUTION:** The configuration of permissions can be carried out manually or automatically as
described. If you want to change previously set permissions later, this has to be done manually.
Retrospectively defining rights is not possible.
