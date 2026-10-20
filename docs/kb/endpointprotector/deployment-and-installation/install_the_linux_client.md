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
  - kb
title: "How to Install the Endpoint Protector Linux Client"
knowledge_article_id: kA0Qk0000002B6vKAE
products:
  - endpointprotector
---

# How to Install the Endpoint Protector Linux Client

## Overview

This article provides step-by-step instructions for installing the Endpoint Protector Linux client.

For the full reference, see [Linux](/docs/endpointprotector/admin/agent#linux) under Agent Install Parameters in the Agent documentation.

## Instructions

To install the Endpoint Protector Linux Client, follow the steps below:

1. Download the client:
   - **Ubuntu and RedHat** (the main supported distributions) are available directly from the Endpoint Protector console under **System Configuration** > **Client Software**.
   - For other distributions (Debian, Fedora, Pardus OS, AWS Linux, OpenSUSE, SUSE, SLED Linux Enterprise Server), raise a ticket in the [Support Portal](https://www.netwrix.com/support.html) — these are provided on request after validation by the Netwrix Product Team.
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

:::note
For RedHat-based distributions (CentOS, RedHat, Fedora, AWS Linux 2, OpenSuse, SUSE, SLED Linux Enterprise Server), an additional step is required after running **install.sh** to set the Endpoint Protector Server IP. The exact method depends on your distribution. See [RedHat based distributions](/docs/endpointprotector/admin/agent#redhat-based-distributions) for details.
:::