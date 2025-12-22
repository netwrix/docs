---
title: "SAML Application for Dropbox"
description: "SAML Application for Dropbox"
sidebar_position: 20
---

# SAML Application for Dropbox

## SAML Configuration Example for Dropbox

This chapter explains how to configure the SAML application for **Dropbox**. It is assumed that
[Configuration of SAML](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/applications/configuration_of_saml.md)
has already been activated in the Server Manager.

- Log in as administrator at the **Dropbox**
- Open the Admin Console

![Admin Console](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_1-en.webp)s

- Open Settings

![settings dropbox](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_2-en.webp)

- Single Sign On

![SSO dropbox](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_3-en.webp)

- This is where the data SSO URL and the certificate from the Server Manager must be deposited.

![database settings](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_4-en.webp)

- In the Advanced view, a new SAML application must be created in the Applications module.
- Then the target page (login URL) and the XML file must be stored in the application.

![login with SAML](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_5-en.webp)

The XML file must look like [this](https://cdn.manula.com/user/3511/docs/dropbox.xml).

- The application can now be executed via the Basic view.
