---
description: >-
  Step-by-step instructions to configure Entra Tenant Application Proxy for use
  with Netwrix Directory Manager, including installing the outbound connector,
  configuring the application proxy, updating URLs, and managing SSL
  certificates.
keywords:
  - EntraID
  - Application Proxy
  - Netwrix Directory Manager
  - outbound connector
  - SSL certificate
  - svc.client
  - web.config
  - internal URL
  - external URL
  - App Registration
products:
  - directory-manager
visibility: public
sidebar_label: EntraID Application Proxy Configuration
tags:
  - configuration-and-integration
title: "EntraID Application Proxy Configuration"
knowledge_article_id: kA0Qk00000015gnKAA
---

# EntraID Application Proxy Configuration

## Overview

This article provides step-by-step instructions for configuring Entra Tenant Application Proxy for use with Netwrix Directory Manager. The process includes installing the outbound connector, configuring the application proxy, updating URLs, and managing SSL certificates.

## Instructions

### Configure Entra Tenant Application Proxy

![Entra Tenant Application Proxy configuration screen with key fields visible](./../0-images/ka0Qk000000DUWX_0EMQk000004n3iR.png)

### Install Outbound Connector on Directory Manager Machine

![Outbound connector installation window on Directory Manager machine](./../0-images/ka0Qk000000DUWX_0EMQk000004n3iS.png)

### Configure Outbound Proxy

![Outbound proxy configuration screen](./../0-images/ka0Qk000000DUWX_0EMQk000004n3iT.png)

![Additional outbound proxy configuration options](./../0-images/ka0Qk000000DUWX_0EMQk000004n3iU.png)

### Configure the Application

1. Click **Configure an App**.
2. Provide a suitable name for the application.
3. Copy the external application URL:

   - Visible URL (as shown in the portal): `https://GroupID10SSP-5l607h.msappproxy.net/GroupID/`
   - HREF (link target provided by the portal): `https://GroupID10SSP-5l607h.msappproxy.net/Directory Manager/`

4. Add the internal URL in the Application Proxy configuration:

   - Internal URL: `https://onenexx2:4443/`  
   - Link: https://onenexx2:4443/

   ![Application proxy configuration with internal and external URLs](./../0-images/ka0Qk000000DUWX_0EMQk000004n3iV.png)

### Register the Application and Assign Users

1. Go to **App Registration** and open **All Applications**.

   ![App Registration screen showing all applications](./../0-images/ka0Qk000000DUWX_0EMQk000004n3iW.png)

2. Assign users to this application.

   ![Assigning users to the application in App Registration](./../0-images/ka0Qk000000DUWX_0EMQk000004n3iX.png)

### Create and Upload an SSL Certificate

1. Create an SSL certificate.

   ![SSL certificate creation window](./../0-images/ka0Qk000000DUWX_0EMQk000004n3iY.png)

   ![SSL certificate details screen](./../0-images/ka0Qk000000DUWX_0EMQk000004n3iZ.png)

   ![SSL certificate management interface](./../0-images/ka0Qk000000DUWX_0EMQk000004n3ia.png)

2. Upload the certificate.

   ![Upload certificate screen](./../0-images/ka0Qk000000DUWX_0EMQk000004n3ib.png)

> **NOTE:** Self-signed certificates will not work. Add a public certificate instead. You can turn off SSL in the application proxy to test the configuration.

### Update Portal URLs with External URLs (Application Proxy)

1. Change the portal URLs to use the external URLs provided by the application proxy.

   ![Portal URL configuration screen](./../0-images/ka0Qk000000DUWX_0EMQk000004n3ic.png)

2. Verify that the changes are reflected in the `svc.client` table and `web.config` file.

   The following `web.config` changes are required:

   - External URL (visible): `https://GroupID10SSP-5l607h.msappproxy.net/GroupID/`
   - External URL (HREF/target provided by portal): `https://GroupID10SSP-5l607h.msappproxy.net/Directory Manager/`

   ![web.config file showing updated external URL](./../0-images/ka0Qk000000DUWX_0EMQk000004n3id.png)

3. Edit the **Issuer** and **Realm** URLs as needed:

   ![Issuer and Realm URL configuration screen](./../0-images/ka0Qk000000DUWX_0EMQk000004n3ie.png)

4. Update the `svc.client` table in the database with the return, error, and realm URLs.

> **NOTE:** Paste all URLs with a forward slash at the end. For example: `https://groupid10ssp-5l607h.msappproxy.net/Directory Manager/`

![svc.client table showing updated URLs](./../0-images/ka0Qk000000DUWX_0EMQk000004n3if.png)

## Related Links

- [External Application URL for Directory Manager](https://GroupID10SSP-5l607h.msappproxy.net/GroupID/)
- [Internal URL for Application Proxy](https://onenexx2:4443/)
- [Issuer and Realm URL Example](https://groupid10ssp-5l607h.msappproxy.net/GroupID/)
