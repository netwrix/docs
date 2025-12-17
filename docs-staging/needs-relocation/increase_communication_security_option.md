---
description: >-
  This article explains how to use the Increase Communication Security option in Endpoint Protector, enabling certificate-based authentication for enhanced security.
keywords:
  - Endpoint Protector
  - communication security
  - certificate authentication
sidebar_label: Increase Communication Security
tags: []
title: "Increase Communication Security Option"
knowledge_article_id: kA0Qk0000002B4KKAU
products:
  - endpointprotector
---

# Increase Communication Security Option

## Overview

This article explains how to use the **Increase Communication Security** option in **Endpoint Protector**. This feature allows you to register and verify the **Endpoint Protector Client** certificate signature, enabling certificate-based authentication for enhanced security.

> **IMPORTANT:** The Client Registration Certificate feature is not available for Linux.

## Details

- When the custom certificate is **enabled**, **Endpoint Protector Server** validates the client certificate at registration. The client does not validate the server certificate.
- When the custom certificate is **disabled**, neither the server nor the client performs certificate validation at registration.
- For this feature to work, cryptographic identities signed by the root CA must be deployed on the endpoints.
- On **macOS**, add these identities to the **System Keychain** in the **My Certificates** section.
- On **Windows**, place them in the **Certificate Manager** under **Local Computer\Certificates\Personal**.

## Instructions

1. In the **Endpoint Protector** console, navigate to **Appliance > Server Maintenance**.
2. Turn on the **Enable custom certificate** setting then click **Browse...** to upload the certificate chain, Root CA, and Intermediate CA certificates.  
   ![Increase Communication Security option in Endpoint Protector](../0-images/servlet_image_51407d87971c.png)
3. Once uploaded, enable the **Test Certificate** setting and upload a certificate signed by the root CA for testing the signature.
4. Click **Save**. Allow two minutes for the certificate to be validated. A success message will appear when the custom certificate has been added and the test certificate is valid.

> **IMPORTANT:** The client registration authentication certificate and the **Endpoint Protector** server certificate must be issued by the same Certificate Authority (CA).