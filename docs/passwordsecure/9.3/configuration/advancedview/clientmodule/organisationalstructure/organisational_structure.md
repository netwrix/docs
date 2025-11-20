---
title: "Organisational structure"
description: "Organisational structure"
sidebar_position: 40
---

# Organisational structure

## What are organisational structures?

The storage of passwords or documents always takes place according to the defined organisational
structures. The module enables complex structures to be defined, which later form the basis for the
systematic storage of data. It is often possible to define them on the basis of already existing
organization diagrams for the company or department. It is also possible to use other criteria, such
as the function / activity performed, as the basis for creating hierarchies. It is always up to the
customer themselves to decide which structure is most useful for the purpose of the application.

![Organizational structure modul](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/organizational_structures_1-en.webp)

## Relevant rights

The following options are required for adding new organisational structures.

### User rights

- Can add new organisational units
- Display organisational structure module

## Module-specific ribbon functions

The operation of the ribbon differs fundamentally in a couple of aspects to how it works in other
modules. The following section will focus on only those elements of the ribbon that differ. The
remaining actions have already be explained for the password module.

![create new user/organisational unit](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/organizational_structures_2-en.webp)

- **New organisational unit/user**: New organisational units or new users can be added via the
  ribbon, the keyboard shortcut "CTRL + N" or also the context menu that is accessed using the right
  mouse button. Due to its complexity, there is a separate section for this function:
  [User management](/docs/passwordsecure/9.3/configuration/webapplication/functionalscope/organisationalstructure/user_management.md)
- **Drag & Drop**: If this option has been activated, it is possible to move users or organisational
  units in list view via drag & drop
- **Permissions**: The configuration of permissions within the organisational structure is important
  both for the administration of the structure and also as the basis for the permissions in
  accordance with
  [Inheritance from organisational structures](/docs/passwordsecure/9.3/configuration/advancedview/permissionconceptandprotective/automatedsettingofpermissions/inheritance_from_organizational.md).
  The benefits of
  [Predefining rights](/docs/passwordsecure/9.3/configuration/advancedview/permissionconceptandprotective/predefiningrights/predefining_rights.md) are
  explained in a separate section.
- **Settings**: The settings can be configured for both users and also organisational units. More
  information on [User settings](/docs/passwordsecure/9.3/configuration/advancedview/mainmenufc/usersettings/user_settings.md)…
- **Active Directory**: The connection to Active Directory is explained in a dedicated section
  [Active Directory link](/docs/passwordsecure/9.3/configuration/advancedview/clientmodule/organisationalstructure/directoryservices/activedirectorylink/active_directory_link.md)
- **Microsoft Entra ID**: The connection to Microsoft Entra ID is explained in a dedicated section
- **Multi Factor authentication**: Additional security during login is provided through positive
  authentication based on another factor. More on this subject…
- **Reset password**: Administrators can reset the passwords with which users log in to Netwrix
  Password Secure to a defined value. Naturally, this is only possible if the connection to Active
  Directory is configured
  via[End-to-end encryption](/docs/passwordsecure/9.3/configuration/advancedview/clientmodule/organisationalstructure/directoryservices/activedirectorylink/end-to-end_encryption.md). In the
  alternative [Masterkey mode](/docs/passwordsecure/9.3/configuration/advancedview/clientmodule/organisationalstructure/directoryservices/activedirectorylink/masterkey_mode.md), the
  authentication is linked to the correct entry of the AD password.

NOTE: To reset a user password, membership for the user is a prerequisite.

The example below shows the configuration of a user where only the user themselves is a member.

![permission for user](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/organizational_structures_3-en.webp)

This configuration means that the user password cannot be reset by administrators. The disadvantage
is that if the password is lost there is no technical solution for "resetting" the password in the
system.

**CAUTION:** It is not recommended to configure the permissions so that only the user themselves has
membership. No other interventions can be made if the password is then lost.

## Adding local organisational units

Both users and also organisational units themselves can be added as usual via the ribbon
(alternatively via Ctrl + N or via the context menu). These processes are supported by various
wizards. The example below shows the creation of a new organisational unit:

### Create organisational unit

![Add new organisational unit](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/organizational_structures_4-en.webp)

- **Allocated organisational unit**: If the new object is defined as a **main organisational unit**,
  it is not allocated to an existing organisational unit
- **Rights template group**: If an already existing organisational unit was selected under
  "allocated organisational unit", you can select one of the existing rights template groups.

NOTE: The organisational unit marked in list view will be used as a default. This applies to the
fields "allocated organisational unit" and also "rights template".

### Create role

![Create role](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/organizational_structures_5-en.webp)

When creating a new organisational unit, the second tab in the wizard enables you to directly create
a new role. This role will not only be created but also given "read permission" to the newly created
organisational unit.

### Configuring rights

![Configuring rights](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/organizational_structures_6-en.webp)

The third tab of the wizard allows you to define the permissions for the newly created
organisational unit. If an allocated organisational unit or a rights template group was defined in
the first tab, the new organisational unit will inherit its permissions. These permissions can be
adapted if desired.

NOTE: The **organisational structure** module is based on the Web Application module of the same
name. Both modules have a different scope and design but are almost identical to use.
