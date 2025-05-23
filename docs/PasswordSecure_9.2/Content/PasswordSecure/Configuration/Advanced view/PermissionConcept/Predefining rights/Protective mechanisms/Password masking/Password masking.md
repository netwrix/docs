---
sidebar_position: 6472
title: Password masking
---

# Password masking

## What is password masking?

The safest passwords are those that you do not know. Password masking follows this approach. It prevents the password from being shown, while allowing the use of the automatic sign-on. You can apply it via the button of the same name in the ribbon.

![button password masking](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/password_masking_1-en.png "button password masking")

## Relevant rights

The following option is required to apply password masking.

### User right

* Can apply password masking

### Required permissions

In the same way as for the [Seals](../Seals/Seals "Seals") configuration, the **authorize permission** for the record is required to apply or remove the masking. Users who have the **authorize permission** for a record can continue to use the record without limitations after applying password masking. Password masking only applies to users without the "can apply password masking" right.

NOTE: Password masking can only be applied to records with an existing password!

## Applying password masking

The icon in the ribbon allows users with the required permissions to apply password masking following a confirmation prompt. By default, the privacy is for all those who have at least reading permission, but not the permission **authorize**.

### Password masking via form field permissions

As an alternative, you can also apply password masking via the [Form field permissions](../../../../ClientModule/Passwords/Form field permissions "Form field permissions"). In the [List view](../../../../Operation and Setup/ListView/List view "List view") of a record, there is a separate button in the ribbon for that purpose. Ensure that the password field is highlighted.

![form field permissions](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/password_masking_2-en.png "form field permissions")

The special feature when setting or editing masking via the form field permissions is that you can individually select users to whom masking will be applied. In the following example, masking has been specified only for the role of “trainees”, although the “IT” role does not have the **authorize permission** either. In addition to the name of the role or the user, the icon symbolizes the fact that visa protection applies to trainees.

![example password masking](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/password_masking_3-en.png "example password masking")

NOTE: Use the icon in the ribbon to apply password masking to all users who have read permission on the record, but not the **authorize permission**. If you wish to specify more precisely for which users the password masking should be applied, this is also possible via the form field permissions.

NOTE: It is important to note that the login mask for records with password masking will be "sent automatically", even if the setting **Browser Extensions: Automatically send login masks** has been deactivated.

**CAUTION:** The password masking only applies to those users who are authorized at the time of attachment to the record. If a record has the password masking and a user get´s authorized the record is **not protected** for this user. The password masking should then be removed and reset.