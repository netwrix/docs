---
description: >-
  This article provides step-by-step instructions for installing the Endpoint Protector Linux client.
keywords:
  - Endpoint Protector
  - Linux client
  - installation
  - options.sh
  - install.sh
  - EPPCLIENT_WS_SERVER
  - FQDN
  - Ubuntu
  - RedHat
sidebar_label: Installing the Endpoint Protector Linux Client
tags:
  - deployment-and-installation
  - kb
title: "Installing the Endpoint Protector Linux Client"
knowledge_article_id: kA0Qk0000002B6vKAE
products:
  - endpointprotector
---

# Installing the Endpoint Protector Linux Client

## Overview

This article describes how to install the Endpoint Protector Linux client and set the server address, port, and department code.

For the full reference, see [Linux](/docs/endpointprotector/admin/agent#linux) under Agent Install Parameters in the Agent documentation.

## Instructions

To install the Endpoint Protector Linux Client:

1. Download the client:
   - Ubuntu and RedHat (the main supported distributions) are available directly from the Endpoint Protector console under **System Configuration > Client Software**.
   - For other distributions (Debian, Fedora, Pardus OS, AWS Linux, OpenSUSE, SUSE, SLED Linux Enterprise Server), raise a ticket in the [Support Portal](https://www.netwrix.com/support.html). Netwrix provides these on request after the Netwrix Product Team validates them.
2. After downloading and extracting the client, edit the `options.sh` file.
3. Remove the `#` character from the following six lines:

   ```plaintext
   #EPPCLIENT_WS_SERVER=set.this.to.the.endpointprotector.server.com
   #export EPPCLIENT_WS_SERVER
   #EPPCLIENT_WS_PORT=443
   #export EPPCLIENT_WS_PORT
   #EPPCLIENT_DEPARTMENT_CODE=defdep
   #export EPPCLIENT_DEPARTMENT_CODE
   ```

4. Replace `set.this.to.the.endpointprotector.server.com` with the Endpoint Protector Server fully qualified domain name (FQDN). Netwrix recommends an FQDN over an IP address, so clients keep working when the server address changes.
5. Save the modified `options.sh` file.
6. Install the client by running the `install.sh` file.

> **NOTE:** For RedHat-based distributions (CentOS, RedHat, Fedora, AWS Linux 2, OpenSuse, SUSE, SLED Linux Enterprise Server), an additional step is required after running `install.sh` to set the Endpoint Protector Server address. The exact method depends on your distribution. See [RedHat based distributions](/docs/endpointprotector/admin/agent#redhat-based-distributions) for details.