---
title: "SAML application for Postman"
description: "SAML application for Postman"
sidebar_position: 30
---

# SAML application for Postman

## SAML configuration example for Postman

This chapter explains how to configure the SAML application for **Postman**. It is assumed that
[Configuration of SAML](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/applications/configuration_of_saml.md)
has already been activated in the Server Manager.

- First, you register with Postman.
- After logging in, click on the avatar and select "**Settings**".

![settings postman](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_1-en.webp)

- Then click on **Authentication**. Select a new method in the upper right corner.

![option authentication postman](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_2-en.webp)

- Here the Authentication Type must be defined with **SAML 2.0** and any useful Authentication Name.

![add authentication method](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_3-en.webp)

Then you come to the actual configuration.

- Store Provider Details
- **Identity Provider Details** The data from the Server Manager is uploaded as XML or stored
  manually.

![postman identity provider details](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_4-en.webp)

- **Service Provider Details** The service provider details are now copied to the application in the
  Netwrix Password Secure Client.

![postman service provider details](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_5-en.webp)

NOTE: Please note that a **Relay State** is required. This value can be created in the **Configure
Identity Provider Details View**.
