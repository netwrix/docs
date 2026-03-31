---
title: "Change form"
description: "Change form"
sidebar_position: 10
---

# Change form

## Changing forms

It is necessary in some cases to change the form for a record. In these cases, this is mostly to
consolidate existing data or to adapt the form to match changes in the data structure. These
functionalities are available under "Extras/Settings" in the ribbon.

![change form](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/forms/change_form_1-en.webp)

In the following screenshot, you can see the dialogue for "mapping" the form fields from the
previously used form to the new form. In this example, a record that previously belonged to the
"Website" form is being "mapped" to the "Password" form (right).

![change form](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/forms/change_form_2-en.webp)

The drop-down menu allows you to select the target form. The comparison of current and new form
fields is shown in the lower section.

- Fields **marked in green** have already been assigned to the new form
- Fields **marked in red** indicate fields that have not been assigned

### Relevant rights

The following options are required to change forms.

### User right

- Can change form for a password

**CAUTION:** Please note that information could be lost during this process! In the example, this
applies to the fields "Website" and "Information".

## The effects of changes to forms on existing records

In general, changes to forms do not effect existing records. This means that a record that was
created with a certain form will not itself be changed after this form has been adapted/changed. It
remains in its original state. However, there are methods by which changes to forms could be adopted
by existing records. There are two possibilities in this context:

### How to change forms

If you press the "Change form" button (as mentioned in the previous section), the already existing
form will be used by default. If this form has been changed in the meantime, the new form field will
be directly shown and adopted after it is saved.

![New Form](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/forms/change_form_3-en.webp)

### Apply form changes to passwords

The setting "Apply form changes to passwords" makes it possible to force the change to the form to
be adopted. This becomes effective when editing the record! It is immaterial here whether changes
are being made to the record. Simply re-editing and saving the record will cause the adjustment to
the form.

### The following permissions/configuration must exist

- The user that wants to make the change requires the read right to the form
- The "read", "write" and authorize" rights for the record (and the form to be edited) are required.
- Sealed and masked records remain unaffected

## Conclusion

A common feature of both variants is that adjustments to forms cannot be automatically triggered.
Already existing records are thus not automatically adjusted. The adjustment thus needs to be
carried out manually. In the first case, the manual step is to use the function "Change form". In
the second case, it is sufficient to simply edit and save the record.
