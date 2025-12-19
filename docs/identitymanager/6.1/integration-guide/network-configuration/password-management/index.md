---
title: "Password Management"
description: "Password Management"
sidebar_position: 50
---

# Password Management

The _Password Management_ module offers a set of password-related operations on resources of certain
types (Active Directory, Microsoft Entra ID (formerly Microsoft Azure AD), Service Now, etc�).

## Possible Password Operations

Depending on the target system of the manipulated resource, the following operations are possible:

### Password initialization

This operation **can be started manually by the user through the UI** (with the "Manage Accounts"
option on user pages) **or automatically during the fulfillment process** of the corresponding
resource.

It consists of initializing the password and sending a notification containing instructions to a
configurable email address.

The password initialization can be done in two different ways:

- One-Way: Usercube sets the initial password, and sends it as part of the instructions
  notification.
- Two-Way: The instructions notification contains a link to a page where the email recipient
  initializes the password.

### Password change

**UI-only** operation that allows the user to change the password.

### Password reset

**UI-only** operation that allows the user to reset the password.

### Account unlocking

**UI-only** operation that allows the user to unlock an account that has been blocked due to too
many incorrect password attempts.

## Possible operations per managed system

Usercube provides a predefined set of possible operations per managed system (which cannot be
changed by the configuration).

|                    | Initialize | Change | Reset | Unlock | _Notes_                                                       |
| ------------------ | ---------- | ------ | ----- | ------ | ------------------------------------------------------------- |
| Active Directory   | YES        | YES    | YES   | YES    | **Required authentication mode:** Basic with SSL or Negotiate |
| LDAP               | YES        | YES    | YES   | YES    | **Required authentication mode:** Basic with SSL or Negotiate |
| Microsoft Entra ID | YES        | NO     | YES   | NO     | -                                                             |
| Service Now        | YES        | NO     | NO    | NO     | -                                                             |
