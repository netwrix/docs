---
description: >-
  Shows how to install a custom SSL certificate for Netwrix Change Tracker on
  Linux, configure Nginx to use it, and add the server certificate thumbprint to
  HubDetails.xml so agents can register successfully.
keywords:
  - SSL
  - certificate
  - nginx
  - Linux
  - Netwrix Change Tracker
  - HubDetails.xml
  - thumbprint
  - agents
  - nnthubservice
products:
  - changetracker
knowledge_article_id: ka04u000000Hd90AAC
sidebar_label: Adding an SSL Certificate to Netwrix Change Tracker on Linux
tags: [kb, configuration-and-setup]
title: Adding an SSL Certificate to Netwrix Change Tracker on Linux
---

# Adding an SSL Certificate to Netwrix Change Tracker on Linux

## Overview

Use this procedure to install a custom SSL certificate for Netwrix Change Tracker on a Linux server, configure Nginx to use it, and update `HubDetails.xml` so agents accept the new server certificate and continue to register successfully.

## Instructions

### Stop Services

1. Stop the hub and Nginx services:

   - `service nnthubservice stop`
   - `service nginx stop`

### Copy the Custom .crt and .key to the Server Hosting Netwrix Change Tracker

Store the files in `/etc/nginx/nnt_ssl`.

Example filenames:

- `changetracker.demo.crt`
- `changetracker.demo.key`

Place your certificate and private key (with the same or appropriate filenames) in `/etc/nginx/nnt_ssl`.

### Change the Nginx Config to Use the Custom Certificate

1. Edit the Nginx configuration file:

   - `vi /etc/nginx/conf.d/nnt.conf`

2. Update the server block to reference your certificate and key. Example contents:

   ```
   server {
   #       listen 80;
           listen 443 ssl;
           root /usr/share/nginx/V7_UI;
           index index.html;
           ssl_certificate /etc/nginx/nnt_ssl/changetracker.demo.crt;
           ssl_certificate_key /etc/nginx/nnt_ssl/changetracker.demo.key;
           location /api/ {
                   fastcgi_pass 127.0.0.1:9000;
                   include /etc/nginx/nnt_fastcgi_params;
                   fastcgi_read_timeout 120s;
           }
   }
   ```

3. Save and exit `vi` (for example, `:wq`).

### Start Services

1. Start Nginx and the hub service:

   - `service nginx start`
   - `service nnthubservice start`

### Resolve Agent Certificate Thumbprint Mismatches

When agents attempt to register, they may fail with an error indicating that the server certificate thumbprint does not match the trusted thumbprint. Example error:

```
ERROR DesktopServerCertificateValidation - Certificate thumbprint does not match trusted (BAD1067FBAB59CCED21786657C672F6AB5BE824C/6F7F11707C0C93CD0F7E92D5BC0F1C9345D68A64). Consider setting Thumbprint in HubDetails.xml. Server certificate details:
[Version]
```

### Add the Custom Thumbprint to HubDetails.xml

1. Obtain the certificate thumbprint from the server certificate (for example, via `openssl` or your certificate management tool).
2. Edit the `HubDetails.xml` file (preserve the filename exactly) and add or update the `Thumbprint` value with the server certificate thumbprint.
3. Restart the agent service on the agent machine.
4. The agent registers successfully after the thumbprint in `HubDetails.xml` matches the server certificate.

<!-- Image removed: [screenshot of HubDetails.xml showing the Thumbprint entry filled in with the server certificate value] -->
