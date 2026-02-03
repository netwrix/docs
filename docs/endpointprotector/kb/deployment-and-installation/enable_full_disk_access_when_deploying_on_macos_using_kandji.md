---
description: >-
  This article explains how to resolve the issue where Full Disk Access is not enabled for Endpoint Protector after deploying the client on macOS using Kandji.
keywords:
  - Full Disk Access
  - Endpoint Protector
  - Kandji
sidebar_label: Enable Full Disk Access on macOS
tags:
  - deployment-and-installation
title: "Enable Full Disk Access When Deploying on macOS Using Kandji"
knowledge_article_id: kA0Qk0000002B16KAE
products:
  - endpoint-protector
---

# Enable Full Disk Access When Deploying on macOS Using Kandji

## Overview

This article explains how to resolve the issue where Full Disk Access is not enabled for Endpoint Protector after deploying the client on macOS using Kandji. Incorrect configuration in the privacy settings, specifically in the Identifier and code requirements, can cause this issue.

## Instructions

1. After deploying Endpoint Protector through Kandji, check if Full Disk Access has been granted to Endpoint Protector on the target device.
2. If Full Disk Access is not granted, open Kandji and navigate to the **Privacy Settings** section for your Endpoint Protector deployment.
3. Review the configuration for the **Identifier** and **Code Requirements** fields.
4. Remove the identifier from the **Code Requirements** field.
5. Ensure that the code requirements match the deployment guide provided by Endpoint Protector.
6. Save your changes in Kandji.
7. Verify on the target device that Full Disk Access is now granted to Endpoint Protector.

> **NOTE:** Deployment guides for other mobile device management (MDM) solutions are applicable to this deployment. For detailed instructions, refer to the [JAMF Deployment Guide](https://docs.netwrix.com/docs/endpointprotector/5_9_4_2/install/jamf/overview).