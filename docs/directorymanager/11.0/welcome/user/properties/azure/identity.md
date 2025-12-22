---
title: "User properties - Identity tab"
description: "User properties - Identity tab"
sidebar_position: 30
---

# User properties - Identity tab

Use this tab to view or update the general information for a user and mailbox in a Microsoft Entra
ID based identity store.

**Display name**

The name of the user as it is displayed in the GroupID portal.

**Username**

The login ID of the user.

**First name**

The first name of the user.

**Last name**

The last name of the user.

**User type**

The user type assigned to the user in Microsoft Entra ID, such as _Member_ or _Guest_.

- **Member**: This value indicates an employee of the host organization and a user in the
  organization's payroll. For example, this user expects to have access to internal-only sites. This
  user would not be considered an external collaborator.
- **Guest**: This value indicates a user who isn't considered internal to the company, such as an
  external collaborator, partner, customer, or similar user. Such a user wouldn't be expected to
  receive a CEO's internal memo, or receive company benefits, for example.

NOTE: The User Type has no link to the user login function, the directory role of the user, and so
on. It simply indicates the user's relationship to the host organization and allows the organization
to enforce policies that depend on this property.

**Object ID**

The unique ID assigned to the object in Microsoft Entra ID.

**Alias**

The email alias of the user.

**Email**

The email address of the user.

**Account is enabled**

This check box is selected by default, indicating that the user account is enabled.

Clear it to disable the user account, so that the user cannot log-on with it.

**Usage Location**

The country where the user is located.

The usage location is mandatory for a mailbox and displays the object's geographical location. It
determines what Office 365 licenses and associated features can be assigned to a mailbox based on
geographic availability and laws.

**Photo**

The user's photo.

Click the **Edit** icon to launch the Manage Photo dialog box for uploading a photo. The dialog box
also provides many image editing options, including rotate, crop, flip, and re-size.

**See Also**

- [User Properties](/docs/directorymanager/11.0/welcome/user/properties/overview.md)
