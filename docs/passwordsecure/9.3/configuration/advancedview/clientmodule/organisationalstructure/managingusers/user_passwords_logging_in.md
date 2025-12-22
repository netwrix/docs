---
title: "User passwords / logging in to client"
description: "User passwords / logging in to client"
sidebar_position: 10
---

# User passwords / logging in to client

## User passwords

Depending on the type of user, they will either be allocated their password in Netwrix Password
Secure or the login will be carried out using access data for the domain. How the user logs in also
differs according to the type of user.

### Differences between users and passwords

- **Local users** Local users are those users that were directly created in Netwrix Password Secure.
  These users must be directly assigned a password when they are created. If local users are
  migrated from older versions, they receive a randomly generated password that is sent to them via
  email.
- **AD users in end-to-end mode** These users must also be assigned a password in Netwrix Password
  Secure. A new password will also be issued via email for these users in the case of a possible
  migration.
- **AD users in Master Key mode** These users log in directly with access data for the domain. It is
  thus not necessary to assign them a password. As these users directly authenticate themselves via
  Active Directory, the currently saved password in Active Directory is thus always valid. These
  users can still directly log in using the existing password even after a migration

### Required rights

Various rights are required in order to issue or change user passwords. One prerequisite is the user
right **Can display organisational structure module**. **Read** and **write** rights for the user
are also required. Finally, membership of the user is required. Normally, the user themselves and
the user who created or imported the user have the right to change their password.

![Permission for user](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/user_passwords_1-en.webp)

### Assigning and changing passwords

As already explained, local users are directly assigned their initial password when the user is
created. The situation is different for users that are imported in end-to-end mode. They do not
possess a password directly after the import and can thus not log in. It is thus necessary to assign
passwords after the import.

The passwords can be directly assigned or changed via the ribbon. Naturally, it is also possible to
select multiple users if e.g. several imported users should be assigned the same password.

![change password](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/user_passwords_2-en.webp)

### Change password on next login

Even if several users receive the same initial password, it is sensible to force them to change it
to an individual password. There is a corresponding option for this purpose. In the case of **local
users**, this can be activated during the creation of the user. In the case of **users in end-to-end
mode**, this option is directly activated during import for security reasons. This option is
automatically deactivated after the user has successfully logged in and changed the password.

![change password next login](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/user_passwords_3-en.webp)

### Security of passwords

To guarantee that passwords are sufficiently strong, it is recommended that corresponding
[Password rules](/docs/passwordsecure/9.3/configuration/advancedview/mainmenufc/extras/password_rules.md) are created. It is
especially important to ensure here that user names are excluded. The password rule then still needs
to be defined as a user password rule.

## Logging in to the database

The process for logging into the database differs depending on the type of user.

### Local user

Local users simply log in using their user name and the assigned password.

![login username](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/user_passwords_4-en_415x238.webp)

![login password](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/user_passwords_5-en.webp)

## AD user

If only one domain has been configured, the users from AD can also log in with their user name and
password the same as local users. If multiple domains have been configured or there is a local user
with the same name, the name of the domain must be entered in front of the user name

The name of the domain must be entered as it is configured in the AD profile under **Domains**. The
option **Other domain names** can be used to save other forms of the domain name.

![AD User](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/user_passwords_6-en.webp)

NOTE: The logon to the client is automatically forwarded to the Autofill Add-on and other clients on
the same computer. The same applies to logging on to the Autofill Add-on.
