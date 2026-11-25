---
title: "Entra ID User Identity Tab"
description: "View or update the name, user type, email, usage location, and photo of a Microsoft Entra ID user or mailbox in Directory Manager."
keywords:
  - Entra ID user identity
  - member and guest user types
  - usage location
  - user photo
  - account is enabled
sidebar_position: 30
---

# Entra ID User Identity Tab

Use this tab to view or update the general information for a user and mailbox in a Microsoft Entra ID-based identity store.

**Display name**

The name of the user as shown in the Directory Manager portal.

**Username**

The sign-in ID of the user.

**First name**

The first name of the user.

**Last name**

The last name of the user.

**User type**

The user type assigned to the user in Microsoft Entra ID, such as Member or Guest.

- **Member**: This value indicates an employee of the host organization and a user in the organization's payroll. For example, this user expects to have access to internal-only sites. This user isn't considered an external collaborator.
- **Guest**: This value indicates a user who isn't considered internal to the company, such as an external collaborator, partner, customer, or similar user. Such a user isn't expected to receive a CEO's internal memo, or receive company benefits, for example.

:::note
The User Type has no link to the user sign-in function, the directory role of the user, and so on. It indicates only the user's relationship to the host organization and allows the organization to enforce policies that depend on this property.
:::

**Object ID**

The unique ID assigned to the object in Microsoft Entra ID.

**Alias**

The email alias of the user.

**Email**

The email address of the user.

**Account is enabled**

This checkbox is selected by default, which means the user account is enabled.

Clear it to disable the user account. The user can't sign in with a disabled account.

**Usage Location**

The country where the user is located.

The usage location is mandatory for a mailbox and shows the object's geographical location. It determines which Office 365 licenses and associated features you can assign to a mailbox, based on geographic availability and laws.

**Photo**

The user's photo.

Click the **Edit** icon to open the Manage Photo dialog box and upload a photo. The dialog box also provides many image editing options, including rotate, crop, flip, and resize.
