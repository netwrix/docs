# SAML application for Postman

## SAML configuration example for Postman

This chapter explains how to configure the SAML application for **Postman**. It is assumed that
[Configuration of SAML](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/configuration_of_saml/configuration_of_saml.md)
has already been activated in the Server Manager.

- First, you register with Postman.
- After logging in, click on the avatar and select "**Settings**".

![settings postman](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_1-en.png)

- Then click on **Authentication**. Select a new method in the upper right corner.

![option authentication postman](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_2-en.png)

- Here the Authentication Type must be defined with **SAML 2.0** and any useful Authentication Name.

![add authentication method](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_3-en.png)

Then you come to the actual configuration.

- Store Provider Details
- **Identity Provider Details** The data from the Server Manager is uploaded as XML or stored
  manually.

![postman identity provider details](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_4-en.png)

- **Service Provider Details** The service provider details are now copied to the application in the
  Netwrix Password Secure Client.

![postman service provider details](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_5-en.png)

NOTE: Please note that a **Relay State** is required. This value can be created in the **Configure
Identity Provider Details View**.
