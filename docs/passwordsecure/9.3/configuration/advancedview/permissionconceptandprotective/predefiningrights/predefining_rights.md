---
title: "Predefining rights"
description: "Predefining rights"
sidebar_position: 30
---

# Predefining rights

## What are predefined rights?

[Permissions for organisational structures](/docs/passwordsecure/9.3/configuration/advancedview/clientmodule/organisationalstructure/permissionsfororganisational/permissions_for_organisational.md)
can be carried out separately for every record. Although this method enables you to very closely
control every intended permission structure, it is not really efficient. On the one hand, there is
too much configuration work involved, while on the other hand, there is a danger that people who
should also receive permissions to access data are forgotten. In addition, many users should not
even have the right to set permissions. “Predefining rights” is a suitable method to simplify the
permissions and reduce error rates by using automated processes. This page covers the configuration
of predefined rights, please also refer to the sections
[Working with predefined rights](/docs/passwordsecure/9.3/configuration/advancedview/permissionconceptandprotective/predefiningrights/working_with_predefined_rights.md)
and their
[Scope of validity for predefined rights](/docs/passwordsecure/9.3/configuration/advancedview/permissionconceptandprotective/predefiningrights/scope_of_validity_for_predefined.md).

## Organisational structures as a basis

[Organisational structure](/docs/passwordsecure/9.3/configuration/advancedview/clientmodule/organisationalstructure/organisational_structure.md)
can be very useful in many areas in Netwrix Password Secure. In this example, they provide the basic
framework for the automated granting of rights. In the broadest sense, these organisational
structures should always be entered in accordance with existing departments in a company. The
following example specifically focuses on an IT department. The following 3 hierarchies
([Roles](/docs/passwordsecure/9.3/configuration/advancedview/clientmodule/roles.md)) have been defined within this IT department:

- **IT employee**
- **IT manager**
- **Administrator**

## Predefine rights

In general, a senior employee is granted more extensive rights than those granted to a trainee. This
hierarchy and the associated permission structure can be predefined. In the
O[Organisational structure](/docs/passwordsecure/9.3/configuration/advancedview/clientmodule/organisationalstructure/organisational_structure.md)
module, we now select those OUs (departments) for which rights should be predefined and select
\*predefine rights” in the ribbon.

![button of predefined rights](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/predefined-rights-1-en.webp)

- **Creating the first template group:** A new window will appear after clicking on the icon for
  adding a new template group (green arrow) in which a meaningful name for the template group should
  be entered.

![add template](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/predefined-rights-2-en.webp)

Roles and users can now be added to this template via the ribbon or through the context menu (right
mouse click). This was already completed in the example. The role **IT employee** only has the "read
permission", the **IT manager** also has the "write permission" and the capability of managing
permissions. **Administrators** possess all available permissions. Configuration of the permission
structures is explained in
[Manual setting of permissions](/docs/passwordsecure/9.3/configuration/advancedview/permissionconceptandprotective/manualsettingofpermissions/manual_setting_of_permissions.md).

![example permissions](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/predefined-rights-3-en.webp)

## Adding other template groups

It is also possible to configure several different right templates within one department. This may
be necessary e.g. if there are several areas of competency within one department which should each
receive different permissions. Alongside the **IT general** area, the template groups **Exchange**
and **Firewall** have also been defined below.

![Standard template](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/predefined-rights-4-en.webp)

A **default template group** can be defined directly next to the drop-down menu for selecting the
template group (green arrow). This is always pre-configured when you select “IT” as the OU to save
records.

## Issuing tags for predefining rights

In the same way that permissions are defined within right templates, it is also possible to
automatically set **tags**. Their configuration is carried out in the same way as issuing
[Tags](/docs/passwordsecure/9.3/configuration/advancedview/operationandsetup/tags.md) for records.

![tags for predefining rights](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/predefined-rights-5-en.webp)

This process ensures that a special tag is automatically issued when using a certain template group.
Example cases can be found in the
[Working with predefined rights](/docs/passwordsecure/9.3/configuration/advancedview/permissionconceptandprotective/predefiningrights/working_with_predefined_rights.md).
