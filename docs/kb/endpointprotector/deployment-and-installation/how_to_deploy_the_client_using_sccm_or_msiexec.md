---
description: >-
  This article explains how to deploy the Endpoint Protector client to Windows endpoints using Microsoft System Center Configuration Manager (SCCM) or the msiexec command-line tool.
keywords:
  - Endpoint Protector
  - SCCM
  - msiexec
sidebar_label: Deploy Client Using SCCM
tags:
  - deployment-and-installation
title: "How to Deploy the Client Using SCCM or msiexec"
knowledge_article_id: kA0Qk0000002B7IKAU
products:
  - endpoint-protector
---

# How to Deploy the Client Using SCCM or msiexec

## Overview

This article explains how to deploy the Endpoint Protector client to Windows endpoints using Microsoft System Center Configuration Manager (SCCM) or the `msiexec` command-line tool. It provides the required command syntax, examples for both IP address and Fully Qualified Domain Name (FQDN) configurations, and important notes for a successful deployment.

## Instructions

1. Use the following command structure:

   ```plaintext
   msiexec.exe /i "msiPath" WSIP="EPP_server_IP" WSPORT="443" /qn /norestart
   ```

   - Replace `“msiPath”` with the full path to the Endpoint Protector client MSI installer.
   - Replace `“EPP_server_IP”` with the IP address or FQDN of the Endpoint Protector server the client will connect to.

   > **NOTE:** `/norestart` is optional.

2. If you are using a Fully Qualified Domain Name (FQDN), adapt the template as follows:

   ```plaintext
   msiexec.exe /i "EPPClientSetup.5.6.1.1_x86_64.msi" /qn /l*v "c:\temp\EPP_inst.log" WSIP="mycompany.endpointprotector.server.com" WSPORT="443"
   ```

   - Replace `“EPPClientSetup.5.6.1.1_x86_64.msi”` with the name of your installer. If the installer name contains an IP, remove the IP from the name.
   - Replace `“mycompany.endpointprotector.server.com”` with the IP address or FQDN of your Endpoint Protector server.