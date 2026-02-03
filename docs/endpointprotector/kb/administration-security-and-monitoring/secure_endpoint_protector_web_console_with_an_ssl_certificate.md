---
description: >-
  This article explains how to add an SSL certificate to Endpoint Protector using the web interface to secure communications between clients and the server.
keywords:
  - SSL certificate
  - Endpoint Protector
  - secure communications
sidebar_label: Secure Endpoint Protector with SSL
tags:
  - administration-security-and-monitoring
title: "Secure Endpoint Protector Web Console with an SSL Certificate"
knowledge_article_id: kA0Qk0000002B6XKAU
products:
  - endpoint-protector
---

# Secure Endpoint Protector Web Console with an SSL Certificate

## Overview

This article explains how to add an SSL certificate to **Endpoint Protector** using the web interface. Adding a valid SSL certificate helps secure communications between clients and the server.

## Instructions

1. Navigate to the **Endpoint Protector Console** > **Appliance** > **Server Maintenance**.
2. Copy and paste the content from your `.pem` certificate into the **Body** and **Key** text boxes.
3. Ensure you include the **BEGIN** and **END** directives for both the certificate body and private key.  
   ![SSL certificate entry fields in Endpoint Protector Server Maintenance](./../0-images/servlet_image_2ab25cdeee54.png)
4. Save the changes.