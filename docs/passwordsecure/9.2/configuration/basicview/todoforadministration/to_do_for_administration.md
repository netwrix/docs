---
title: "To do for Administration"
description: "To do for Administration"
sidebar_position: 10
---

# To do for Administration

## Conditions for using the Basic view

The Basic view allows end users to easily manage their passwords in Netwrix Password Secure without
any training or prior knowledge. In order to ensure proper operation, the administration has to make
a few preparations first. This will be further discussed in the following.

NOTE: To make the Basic view transition as easy and smooth as possible for the user, the
administration can orient towards this checklist.

#### Relevant rights and settings

This section lists the rights and settings the user needs to work with the Basic view. The
administration can adjust these rights and settings at its own discretion.

#### Rights

| User right                                                 | Chapter |
| ---------------------------------------------------------- | ------- |
| Can add individual passwords in the basic view             |         |
| Can close tab of own organisational unit in the basic view |         |

#### Settings

| Settings                                                    | Chapter |
| ----------------------------------------------------------- | ------- |
| Include subordinated organisational units in the basic view |         |
| Start web application in basic view on next login           |         |
| Display kind of passwords in the basic view                 |         |
| Switch logo view on mouse over in the basic view            |         |

## Password Management in the Basic view

There are several ways to provide/create passwords in the Basic view.

#### Predefined passwords

Predefined passwords have already been created on the FullClient. Basic view users must at least
obtain the right to read a record in order to use the password.

![installation_with_parameters_154](/images/passwordsecure/9.2/configuration/basic_view/administration/installation_with_parameters_154.webp)

#### Creating passwords via applications

In order to use applications on the Basic view, the administration must first create them on the
FullClient. By clicking on the application, the end user can easily generate secure passwords. To be
able to use the application, the user needs at least the authorization to **read**.

Further information on this topic can be found in the chapter
[Applications](/docs/passwordsecure/9.2/configuration/advancedview/clientmodule/applications/applications.md).

![installation_with_parameters_155](/images/passwordsecure/9.2/configuration/basic_view/administration/installation_with_parameters_155.webp)

#### Creating passwords via applications without applications

Please consider the following rights and settings so that Basic view users can create new passwords.

User rights:

- Can create individual passwords in the Basic view

Setting:

**Default form** Otherwise, no form can be assigned to the new password.

- Add right to the organisational unit of the user
