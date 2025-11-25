---
description: >-
  Describes how to fix the "Secure Connection Failed (Invalid Certificate)"
  error in Mozilla Firefox when accessing Endpoint Protector by removing
  certificate entries related to the appliance. Explains certificate-related
  changes and provides steps to resolve the issue.
keywords:
  - Endpoint Protector
  - Mozilla Firefox
  - certificate error
  - Secure Connection Failed
  - invalid certificate
  - browser certificates
  - fix
products:
  - endpoint-protector
visibility: public
sidebar_label: "Error: Secure Connection Failed (Invalid Certificate) Error in Mozilla Firefox"
tags:
  - troubleshooting-and-errors
title: 'Error: Secure Connection Failed (Invalid Certificate) Error in Mozilla Firefox'
knowledge_article_id: kA0Qk0000002BCUKA2
---

# Error: Secure Connection Failed (Invalid Certificate) Error in Mozilla Firefox

## Question

Why do I get a "Secure Connection Failed (Invalid Certificate)" error in Mozilla Firefox when accessing Endpoint Protector?

## Answer

In an earlier Endpoint Protector version, additional security measures have been implemented. These changes may cause certificate-related issues with the security features in the Mozilla Firefox browser, resulting in a "Secure Connection Failed (Invalid Certificate)" error. Endpoint Protector remains accessible and fully functional in other browsers, such as Chrome or Safari.

To resolve this issue and continue using Mozilla Firefox to access the Endpoint Protector appliance, follow the steps below:

1. Open the Mozilla Firefox browser.  
2. Navigate to **Options** > **Advanced** > **Certificates** > **View Certificates**.  
3. Delete all entries related to the Endpoint Protector Server IP address located in the **Servers**, **Authorities**, and **Others** tabs.  
4. Close and reopen Mozilla Firefox.
