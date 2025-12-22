---
title: "Active Directory link"
description: "Active Directory link"
sidebar_position: 10
---

# Active Directory link

## What are active directory profiles?

The connection to Active Directory (AD) is established via so-called AD profiles. These profiles
contain all of the information relevant for establishing a connection to AD and enable
imports/synchronization of users, organisational units or roles. To connect to various different
ADs, it is naturally also possible to create multiple AD profiles.

## Two import modes in comparison

When importing from Active Directory, Netwrix Password Secure distinguishes between two modes, which
differ significantly and are explained in separate sections.

- End-to-end encryption
- Master Key mode

In principle, the two variants differ by the presence of the encryption mentioned above. In the
solution with active end-to-end encryption (**E2EE**), the process may be less convenient (see
table) but there is a huge benefit in terms of security. In Master Key mode, a master key is created
on the server that has full permissions for all users, organisational units and roles. This
represents an additional attack vector, which does not exist in end-to-end mode. In return, however,
in Master Key mode, users can be updated via synchronization with the Active Directory. Memberships
of organisational units and roles are also imported. In the more secure end-to-end mode, this
synchronization of the changes must be carried out manually.

NOTE: It is technically possible to create several profiles with different modes. However, this is
not recommended for the sake of clarity.

| Comparison of the modes                                    | End-to-end mode | Master key mode |
| ---------------------------------------------------------- | --------------- | --------------- |
| End-to-end encryption\*                                    | +               | -               |
| Importing user information                                 | +               | +               |
| Importing assigned roles                                   | -               | +               |
| Importing roles to organisational units                    | -               | +               |
| Synchronizing user information                             | -               | +               |
| Synchronizing assigned roles                               | -               | +               |
| Synchronizing roles with organisational units              | -               | +               |
| User can be edited in Netwrix Password Secure              | +               | -               |
| Organization unit can be edited in Netwrix Password Secure | +               | -               |
| Roles can be edited in Netwrix Password Secure             | +               | -               |
| Password can be edited in Netwrix Password Secure          | +               | -               |
| Login with domain password                                 | -               | +               |
| Netwrix Password Secure is the leading system              | +               | -               |
| Active Directory is the leading system                     | -               | +               |
| Autologin                                                  | +               | +               |

As can be seen **E2EE offers the highest level of security**. The aim is merely to import users,
organisational units and roles. Those must be administered and configured in Netwrix Password
Secure. In contrast, a connection in **Master Key mode offers the highest level of convenience**. It
imports not only users, organisational units and roles but also their links and assignments.
Synchronization with Active Directory is possible – **The AD is used as the leading system**.

## Users, groups and roles

When importing or synchronizing from Active Directory, users are also added as users in Netwrix
Password Secure. Netwrix Password Secure also uses the organisational units as such.

In order for Netwrix Password Secure to be quickly integrated into the given infrastructure, roles
can also be directly imported from the Active Directory. Namely Active Directory Groups are used to
password-safe roles.

NOTE: Groups in groups Memberships, which may be present in the Active Directory, will not be
displayed within Netwrix Password Secure. Both groups are imported as roles, but independent and not
linked in any way.

**CAUTION:** If Master Key mode has been selected for the Active Directory profile, the AD is the
leading system. In this mode, roles that have been imported cannot be changed locally in Netwrix
Password Secure.
