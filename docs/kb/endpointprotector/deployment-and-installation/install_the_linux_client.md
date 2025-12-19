---
description: >-
  This article provides step-by-step instructions for installing the Endpoint Protector Linux client.
keywords:
  - Endpoint Protector
  - Linux client
  - installation
sidebar_label: Install Linux Client
tags:
  - deployment-and-installation
title: "How to Install the Endpoint Protector Linux Client"
knowledge_article_id: kA0Qk0000002B6vKAE
products:
  - endpoint-protector
---

# How to Install the Endpoint Protector Linux Client

## Overview

This article provides step-by-step instructions for installing the Endpoint Protector Linux client.

## Instructions

To install the Endpoint Protector Linux Client, follow the steps below:

1. Request the Linux client by raising a ticket in the [Support Portal](https://www.netwrix.com/support.html). Specify the required Linux distribution.
2. After downloading and extracting the client, edit the **options.sh** file.
3. Remove the `#` character from the following six lines:

   ```plaintext
   #EPPCLIENT_WS_SERVER=set.this.to.the.endpointprotector.server.com
   #export EPPCLIENT_WS_SERVER
   #EPPCLIENT_WS_PORT=443
   #export EPPCLIENT_WS_PORT
   #EPPCLIENT_DEPARTMENT_CODE=defdep
   #export EPPCLIENT_DEPARTMENT_CODE
   ```

4. Additionally, replace `set.this.to.the.endpointprotector.server.com` with the Endpoint Protector Server IP address or FQDN/DNS.
5. Save the modified **options.sh** file.
6. Install the client by running the **install.sh** file.