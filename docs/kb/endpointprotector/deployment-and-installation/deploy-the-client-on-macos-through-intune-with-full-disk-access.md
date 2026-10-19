---
description: >-
  This article explains how to deploy the Netwrix Endpoint Protector client on
  macOS using Intune and how to configure full disk access for the client.
keywords:
  - macOS
  - Intune
  - full disk access
  - Netwrix Endpoint Protector
  - system extension
  - device restrictions
  - privacy preferences
  - MDM
products:
  - endpointprotector
sidebar_label: Deploy the Client on macOS Through Intune With Ful
tags:
  - deployment-and-installation
  - kb
title: "Deploy the Client on macOS Through Intune With Full Disk Access"
knowledge_article_id: kA0Qk0000002B2oKAE
---

# Deploy the Client on macOS Through Intune With Full Disk Access

## Overview

This article explains how to deploy the Netwrix Endpoint Protector client on macOS using Intune and configure full disk access for the client.

For the full reference, see [Microsoft Intune](/docs/endpointprotector/install/intune/overview) and [macOS Deployment](/docs/endpointprotector/install/intune/macosdeployment).

:::note
This document serves as an optional reference for Microsoft Intune (currently known as Microsoft Endpoint Manager). It is not regularly updated and may not align with the current version of the product. Please refer to the official resources for the most up-to-date information.
:::

## Instructions

1. Refer to the official Intune documentation to ensure you are familiar with the deployment procedures and requirements.
2. Follow the steps in [macOS Deployment](/docs/endpointprotector/install/intune/macosdeployment) to deploy the client on macOS through Intune and enable full disk access.
3. To add the system extension in Intune, perform the following steps:

   I. Select **Devices** > **macOS** > **Configuration profiles** > **Create profile**.  
   II. Select the profile type as **Templates** and choose **Device restrictions** as the template name.  
   III. Complete the basics and go to configuration settings.  
   IV. Select **Privacy preferences** to configure full disk access.
