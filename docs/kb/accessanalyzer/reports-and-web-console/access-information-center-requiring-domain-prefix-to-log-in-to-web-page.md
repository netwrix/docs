---
description: >-
  Users who belong to subdomains must include their domain prefix before their
  username when logging in to the Access Information Center (AIC) due to a
  change in the web server. This article explains the symptom, cause, and how to
  configure the Default Domain to restore the expected behavior.
keywords:
  - Access Information Center
  - domain prefix
  - AIC
  - login
  - Default Domain
  - Active Directory
  - Netwrix Access Analyzer
  - multiple domains
products:
  - access-analyzer
sidebar_label: 'Access Information Center Requiring Domain Prefix '
tags:
  - reports-and-web-console
title: "Access Information Center Requiring Domain Prefix to Log In to Web Page"
knowledge_article_id: kA0Qk0000001jO5KAI
---

# Access Information Center Requiring Domain Prefix to Log In to Web Page

## Symptom
You receive the following error when Domain Prefix is required for log-in:

![image (14).png](./../0-images/ka0Qk000000DXNx_00N0g000004CA0p_0EMQk00000AGwf1.png)

## Cause
Due to the change from IIS to a new web server, subdomain users will now need to include their domain prefix before their username when logging in.

![Login prompt showing username field with domain prefix required.](./../0-images/ka0Qk000000DXNx_00N0g000004CA0p_0EMQk000009d2RO.png)

> **NOTE:** You can create a more uniform and consistent log-in experience across all domains connected to the AIC by leaving it as is and requiring the domain prefix.

## Resolution
Ensure that the **Default Domain** is based on the AIC **Use the following Active Directory account** setting, which must be the desired domain.

> **NOTE:** All domains enabled to access the AIC must also have data collected by the Netwrix Access Analyzer Active Directory Inventory solution as per the following article: Active Directory—Multiple Domains.
