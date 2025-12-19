---
title: "Install IIS via Server Manager"
description: "Install IIS via Server Manager"
sidebar_position: 20
---

# Install IIS via Server Manager

This guide shows how to configure the local server to install IIS via Server Manager.

## Overview

When running on Windows Server, Server Manager makes available parameters to configure the local
server at will.
[See more details](https://learn.microsoft.com/en-us/windows-server/administration/server-manager/manage-the-local-server-and-the-server-manager-console).

This page describes the optimal configuration of the local server to install IIS in order to prepare
the production agent's installation.

## Install IIS via Server Manager

Install IIS via Server Manager by proceeding as follows:

1. Open the Server Manager program and click on **Add roles and features**.

    ![Server Manager: Step 1](/images/identitymanager/6.1/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager1.webp)

2. Click on **Next**, then in **Installation Type** make sure that **Role-based or feature-based
   installation** is selected and click on **Next**.

    ![Server Manager: Step 2](/images/identitymanager/6.1/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager2.webp)

3. In **Server Selection** tick **Select a server from the server pool** and click on **Next**.

    ![Server Manager: Step 3](/images/identitymanager/6.1/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager3.webp)

4. In **Server Roles** tick **Web Server (IIS)**.

    ![Server Manager: Step 4](/images/identitymanager/6.1/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager4.webp)

5. In **Features** select **Remote Server Administration Tools** > **Role Administration Tools** >
   **AD DA and AD LDS Tools** > **AD DS Tools** > **AD DS Snap-Ins and Command-Line Tools**.

    ![Server Manager: Step 5](/images/identitymanager/6.1/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager5.webp)

6. In **Confirmation** click on **Install**.

    ![Server Manager: Step 6](/images/identitymanager/6.1/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager6.webp)

## Next Steps

To continue,
[configure the application pool and website via IIS](/docs/identitymanager/6.1/user-guide/deploy/production-agent-installation/iis-configuration/index.md).
