---
description: >-
  This article provides step-by-step instructions on setting up the Automatic License Release feature in Endpoint Protector to manage inactive licenses effectively.
keywords:
  - Automatic License Release
  - Endpoint Protector
  - License Management
  - decommissioned workstation
  - inactive license
  - System Licensing
  - System Configuration
  - virtual desktop
  - VDI
  - license reassignment
sidebar_label: Setting Up Automatic License Release
tags:
  - kb
  - administration-security-and-monitoring
title: "Setting Up Automatic License Release"
knowledge_article_id: kA0Qk0000002B6yKAE
products:
  - endpointprotector
---

# Setting Up Automatic License Release

## Overview

If one or more licensed Workstations have been permanently decommissioned, you can release and reassign their licenses. Endpoint Protector automatically reassigns released licenses to other active Workstations.

The Automatic License Release feature releases licenses from decommissioned Workstations that have not been online for a defined number of days (15, 30, 90 days, etc.). This feature is not intended for frequent repeated reassignment of licenses among ephemeral or non-persistent virtual desktops, pooled sessions, or other temporary compute instances.

If you operate a non-persistent VDI (Virtual Desktop Infrastructure) environment, contact Netwrix to ensure your deployment and licensing model align with product use requirements.

## Instructions

To set up Automatic License Release, log in to the Endpoint Protector web console and follow these steps:

1. In the Endpoint Protector console, navigate to **System Configuration** > **System Licensing**.
2. In the Licensing window, click **View Licenses**.
3. Click the **Automatic Release License** button in the **View Licenses** window.
4. Toggle the **Automatic Release License** option. In the **Last Online** drop-down, select either a predefined value or enter a custom value (between 30 and 360 days).  
   ![Automatic License Release configuration in Endpoint Protector](./../0-images/servlet_image_d1e926f5d4e6.png)
5. Click the **Schedule** button. Endpoint Protector releases the licenses of all Workstations that were last seen longer than the defined value.
