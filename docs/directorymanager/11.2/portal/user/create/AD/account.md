---
title: "Account page in the Create User and Create Mailbox wizards"
description: "Enter the container, name, logon name, and UPN suffix for a new user or mailbox on the Account page of the Directory Manager portal wizards."
keywords:
  - Directory Manager
  - Account page
  - Create User wizard
  - UPN suffix
  - user logon name
sidebar_position: 40
---

# Account page in the Create User and Create Mailbox wizards

Use this page to specify basic account information, such as the user's first name, last name, login ID, and the UPN suffix.

To complete the Account page:

1. Click **Browse** next to the Container box to select a container to create the user in.

   This field is read-only if the administrator has predefined a container for creating new users.

2. Enter the user's First Name, Initials, and Last Name in the respective boxes.

3. Review the Full Name, Display Name, User logon name, and User logon name (pre-Windows 2000) boxes. The wizard uses the information you provided to populate them. You can modify this information, if required.

   - The pre-Windows 2000 user logon name can't exceed 24 characters. This name is used for logging on to computers running Windows 95, Windows 98, or Windows NT.
   - The logon name is the user ID the user uses to sign in to the identity store.

4. Check the UPN Suffix box. It displays the UPN suffix for the user account. This is the name of the domain the connected identity store is running on. An example of a UPN suffix is 'mydomain.com'.

   When a domain user account is created, the complete domain account comprises a user logon name followed by '@' and then the domain name.

5. Click **Next**.
