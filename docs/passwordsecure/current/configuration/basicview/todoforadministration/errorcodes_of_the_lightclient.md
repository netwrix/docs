---
title: "Errorcodes of the Basic view"
description: "Errorcodes of the Basic view"
sidebar_position: 10
---

# Errorcodes of the Basic view

## Error codes for administration

If problems with the Basic view should appear, they are classified by error codes. These codes help
the administration to stop problems even more quickly and solve them. There are 7 different types of
error codes:

SavePasswordUnknown

An unexpected error has occurred. Further information can be found in the event display of the
application server.

SavePasswordPlausibilityField

The plausibility has not been fulfilled when saving a password. The mandatory fields of the
deposited form should be checked.

![installation_with_parameters_156_795x595](/images/passwordsecure/9.2/configuration/basic_view/administration/errorcodes/installation_with_parameters_156_795x595.webp)

NoDefaultForm

No standard form was selected. The form can be stored in the settings under **Standard form (for the
Basic view).**

![installation_with_parameters_157](/images/passwordsecure/9.2/configuration/basic_view/administration/errorcodes/installation_with_parameters_157.webp)

DefaultFormNotFound

The rights of the form must be checked. The user must have at least the permission to read the form.

DefaultFormMissingFields

The form has been set correctly. However, the field types in the form must be checked. At least
required: Text, user name, password, URL.

DefaultFormImpossiblePlausibility

When creating a password for an application, there is a field which is not displayed. Therefore, the
plausibility in fields should be checked.

NoValidOrganisation

Is only relevant for the web view of the Basic view. It is activated if you want to create a
password using the add-on and the user does not have an OU in which to create it.
