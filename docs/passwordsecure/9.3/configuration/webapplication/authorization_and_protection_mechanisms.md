---
title: "Authorization and protection mechanisms"
description: "Authorization and protection mechanisms"
sidebar_position: 30
---

# Authorization and protection mechanisms

## Security and protection on the Web Application

As with the client, the records can be protected on the Web Application with different mechanisms.
The authorizations on records can also be managed in the Web Application. During the development of
the Web Application, there was always taken care that the operation is identical to the operation of
the client. Since the Web Application is based on HTML, it is unfortunately not possible to render
the client 100% identical. Therefore, the operation may differ in details. These deviations should
be clarified in this chapter.

#### Permissions and rights concept

###### Protections

Password masking

The password masking follows the familiar logic of the client. Due to this function, reference
should be made to the chapter of
[Password masking](/docs/passwordsecure/9.3/configuration/advancedview/permissionconceptandprotective/protectivemechanisms/password_masking.md).

There are marginal differences in the operation. The privacy protection is fixed or edited via a
button in the extended menu..

![installation_with_parameters_183](/images/passwordsecure/9.2/configuration/web_applicaiton/authorization_and_protection/installation_with_parameters_183.webp)

The corresponding button is only displayed if the logged in user has the sufficient rights.

If a record is provided with a privacy protection, this is shown in the header of the password.

![installation_with_parameters_184](/images/passwordsecure/9.2/configuration/web_applicaiton/authorization_and_protection/installation_with_parameters_184.webp)

Seal

The seals also correspond in function to the known logic of the client. In the chapter seal further
explanations can be found. The
[Seals](/docs/passwordsecure/9.3/configuration/advancedview/permissionconceptandprotective/protectivemechanisms/seals/seals.md)
are configured in the extended menu via a button.

![installation_with_parameters_185](/images/passwordsecure/9.2/configuration/web_applicaiton/authorization_and_protection/installation_with_parameters_185.webp)

The button is only displayed for the users who have the rights to edit seals. If a record is sealed,
this will be shown in the password field.

![seal_wc](/images/passwordsecure/9.2/configuration/web_applicaiton/authorization_and_protection/seal_wc.webp)
