---
title: "User rights"
description: "User rights"
sidebar_position: 50
---

# User rights

## What are user rights?

In the user rights, access to functionalities is configured. Amongst tother things, this category
includes both the visibility of individual
[Client Module](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/client_module.md),
as well as the use of the import, export or management of rights templates functions. A complete
listing is directly visible in the user rights.

## Administration of user rights

Managing all user rights exclusively at the level of the user would be a time intensive process and
thus require a disproportionate amount of care and maintenance. In the same way as with the
[Authorization and protection mechanisms](/docs/passwordsecure/9.1/configuration/webapplication/authorization_and_protection_mechanisms.md),
an approach can be used in which several users are grouped together. Nevertheless, it must still be
possible to additionally address the specific requirements of individual users. Some
functionalities, on the other hand, should be available to all users. In order to do this, Netwrix
Password Secure offers a three-step concept.

![installation_with_parameters_111](/images/passwordsecure/9.1/configuration/advanced_view/mainmenu/user_rights/installation_with_parameters_111.webp)

When it comes to user rights, the focus is always on the user. The user can receive user rights in
one of the following three ways:

1. The **personal user right** only applies to a specific user. This is always configured via
   the[Organisational structure](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/organisationalstructure/organisational_structure.md).

**User rights to role**s apply to all members of a role and are specified in the
[Roles](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/roles.md)

1. The **global user right** applies to all users of a database without exception. You can configure
   it in the client settings.

How a user receives a user right is irrelevant. The only important thing is that the user actually
receives a required right in one of the three ways mentioned above. It is recommended that you link
user rights to roles and, if necessary, supplement them with global user rights.

:::warning
In addition to personal and global user rights (as opposed to settings), user rights
are assigned via roles and not via organisational units!
:::


NOTE: Only those user rights that the current user possesses themselves can be issued. However, all
rights can be removed.

![installation_with_parameters_112](/images/passwordsecure/9.1/configuration/advanced_view/mainmenu/user_rights/installation_with_parameters_112.webp)

## Configuring the security level

The **security level** is an essential element that is also specified in the user rights. This is
the basis for the configuration of the
[User settings](/docs/passwordsecure/9.1/configuration/advancedview/mainmenufc/usersettings/user_settings.md).

![installation_with_parameters_113](/images/passwordsecure/9.1/configuration/advanced_view/mainmenu/user_rights/installation_with_parameters_113.webp)

## Searching within user rights

Due to the large number of possible configurations, the search function helps you to quickly find
the desired configuration. This process is based as usual on the List
[Search](/docs/passwordsecure/9.1/configuration/advancedview/operationandsetup/search.md).

![installation_with_parameters_114](/images/passwordsecure/9.1/configuration/advanced_view/mainmenu/user_rights/installation_with_parameters_114.webp)

#### Database administrator

Special attention should be given to the right Is database administrator. This right has the
following effects:

- The user can also issue rights that he does not possess himself.
- The user can only have their rights removed by other database administrators.
- The user can unlock other users on the Server Manager.
- The user can also remove other users from the rights if they have the owner right.
