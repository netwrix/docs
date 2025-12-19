---
title: "Configuration of SAML"
description: "Configuration of SAML"
sidebar_position: 30
---

# Configuration of SAML

## What is SAML?

The Security Assertion Markup Language (SAML) is an XML framework for exchanging authentication and
authorization information. It provides functions to describe and transmit security-related
information. This means that you can use one set of credentials to log in to many different
websites. It is much easier to manage one login per user than separate logins for email, Customer
Relationship Management (CRM) software, Active Directory, and more.

## Preconditions

In order for the users to be able to use SAML, "SMTP" must be set up and an e-mail address must be
stored with the corresponding users. In addition, the Web Application is mandatory. Therefore, the
Web Application must already be "set up or installed".

## Configuration

In order to create **SAML applications**, SAML must **first** be activated.

This is implemented in the settings of the database in the Server Manager:

![activate SAML](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/configuration_of_saml/configuration_of_saml_1-en.webp)

As soon as the check box is ticked, the next step is to enter the URL of the Web Application. The
SAML configuration screen should then look like this:

![SAML configuration ](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/configuration_of_saml/configuration_of_saml_2-ewn.webp)

The screen is left open and the configuration is continued at the Advanced view. To do this, log on
to the client as usual and switch to the **Applications** module. Select a **new SAML application**
and fill it with the relevant data from the service provider.

NOTE: The data of the service provider, which are entered in the Advanced view, can be found at the
respective provider. This differs from provider to provider.

![new SAML application](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/configuration_of_saml/configuration_of_saml_3-en.webp)

In addition, the data must be stored in the **Server Manager** at the service provider.

After the successful entry of all data, the last necessary step is the verification of the user.
This is done by clicking on the tile. This gives the user an e-mail with which he can verify
himself.

![SAML tile in LightClient](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/configuration_of_saml/configuration_of_saml_4-en.webp)

After verification, the **SAML application** can be started from the Basic view view.

**CAUTION:** As this is a passwordless authentication, it is not necessary to link the **SAML
application** with a password.

NOTE: Setup and configuration instructions for
[SAML Application for Dropbox](/docs/passwordsecure/9.2/configuration/advancedview/clientmodule/applications/exampleapplications/saml_application_for_dropbox.md) and
[SAML application for Postman](/docs/passwordsecure/9.2/configuration/advancedview/clientmodule/applications/exampleapplications/saml_application_for_postman.md)can be
found in the corresponding chapters.
