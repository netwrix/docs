---
title: "Form field permissions"
description: "Form field permissions"
sidebar_position: 40
---

# Form field permissions

## What are form field permissions?

The authorization concept allows separate permissions to be set for each object. These objects could
be records, forms or users. Netwrix Password Secure goes one step further in this context. Every
single form field for a record can also be granted with separate permissions. It is thus possible to
grant different permissions for the password field of a record than are set for the other fields.

## Relevant rights

The following options are required to view "inherit" and "overwrite" icons.

### User right

- Can overwrite permissions
- Can inherit permissions

## Configuration

The associated form field permissions for the marked record can be opened via the ribbon using the
drop-down menu under "Permissions".

![form field permissions](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/passwords/form_field_permissions_1-en.webp)

The window that opens allows you to select the relevant form field for which you want to grant
permissions. The following example focuses on the password field.

![permissions of password field](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/passwords/form_field_permissions_2-en.webp)

The permissions configured here now exclusively apply to the password field. The other form fields
remain unaffected.
