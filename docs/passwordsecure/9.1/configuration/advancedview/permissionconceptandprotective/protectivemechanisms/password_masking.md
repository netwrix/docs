---
title: "Password masking"
description: "Password masking"
sidebar_position: 30
---

# Password masking

## What is password masking?

The safest passwords are those that you do not know. Password masking follows this approach. It
prevents the password from being shown, while allowing the use of the automatic sign-on. You can
apply it via the button of the same name in the ribbon.

![button password masking](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/password_masking/password_masking_1-en.webp)

## Relevant rights

The following option is required to apply password masking.

### User right

- Can apply password masking

### Required permissions

In the same way as for the
[Seals](/docs/passwordsecure/9.1/configuration/advancedview/permissionconceptandprotective/protectivemechanisms/seals/seals.md)
configuration, the **authorize permission** for the record is required to apply or remove the
masking. Users who have the **authorize permission** for a record can continue to use the record
without limitations after applying password masking. Password masking only applies to users without
the "can apply password masking" right.

NOTE: Password masking can only be applied to records with an existing password!

## Applying password masking

The icon in the ribbon allows users with the required permissions to apply password masking
following a confirmation prompt. By default, the privacy is for all those who have at least reading
permission, but not the permission **authorize**.

### Password masking via form field permissions

As an alternative, you can also apply password masking via the
[Form field permissions](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/passwords/form_field_permissions.md).
In the
[List view](/docs/passwordsecure/9.1/configuration/advancedview/operationandsetup/list_view.md)
of a record, there is a separate button in the ribbon for that purpose. Ensure that the password
field is highlighted.

![form field permissions](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/password_masking/password_masking_2-en.webp)

The special feature when setting or editing masking via the form field permissions is that you can
individually select users to whom masking will be applied. In the following example, masking has
been specified only for the role of “trainees”, although the “IT” role does not have the **authorize
permission** either. In addition to the name of the role or the user, the icon symbolizes the fact
that visa protection applies to trainees.

![example password masking](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/password_masking/password_masking_3-en.webp)

NOTE: Use the icon in the ribbon to apply password masking to all users who have read permission on
the record, but not the **authorize permission**. If you wish to specify more precisely for which
users the password masking should be applied, this is also possible via the form field permissions.

NOTE: It is important to note that the login mask for records with password masking will be "sent
automatically", even if the setting **Browser Extensions: Automatically send login masks** has been
deactivated.

:::warning
The password masking only applies to those users who are authorized at the time of
attachment to the record. If a record has the password masking and a user get´s authorized the
record is **not protected** for this user. The password masking should then be removed and reset.

:::
