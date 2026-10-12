---
description: >-
  This article explains how to deploy the Endpoint Protector client to Windows endpoints using Microsoft System Center Configuration Manager (SCCM) or the msiexec command-line tool.
keywords:
  - Endpoint Protector
  - SCCM
  - msiexec
  - WSIP
  - silent install
  - MSI
  - FQDN
  - System Center Configuration Manager
  - /qn
sidebar_label: Deploying the Client Using SCCM or msiexec
tags:
  - deployment-and-installation
  - kb
title: "Deploying the Client Using SCCM or msiexec"
knowledge_article_id: kA0Qk0000002B7IKAU
products:
  - endpointprotector
---

# Deploying the Client Using SCCM or msiexec

## Overview

This article explains how to deploy the Endpoint Protector client to Windows endpoints using Microsoft System Center Configuration Manager (SCCM) or the `msiexec` command-line tool. It provides the command syntax, an example that uses the server's Fully Qualified Domain Name (FQDN), and important notes for a successful deployment.

> **NOTE:** This article is an optional reference for SCCM deployment and may not reflect the current product or interface. For the most current information, see the [Endpoint Protector documentation](/docs/endpointprotector).

> **IMPORTANT:** Netwrix recommends using the FQDN of the Endpoint Protector server in `WSIP` instead of an IP address. Clients configured with an FQDN keep working when the server moves to a new IP address, for example after a migration.

## Instructions

Use the following command structure:

```plaintext
msiexec.exe /i "msiPath" WSIP="EPP_server_FQDN" WSPORT="443" /qn /norestart
```

- Replace `msiPath` with the full path to the Endpoint Protector client MSI installer.
- Replace `EPP_server_FQDN` with the FQDN (recommended) or IP address of the Endpoint Protector server the client will connect to.

> **NOTE:** `/norestart` is optional.

For example, the following command uses an FQDN and writes a verbose installation log:

```plaintext
msiexec.exe /i "EPPClientSetup.2607.1.1.0_x86_64.msi" /qn /l*v "c:\temp\EPP_inst.log" WSIP="mycompany.endpointprotector.server.com" WSPORT="443"
```

Replace `EPPClientSetup.2607.1.1.0_x86_64.msi` with the name of your installer. If the installer name contains an IP address, remove the IP address from the name.
