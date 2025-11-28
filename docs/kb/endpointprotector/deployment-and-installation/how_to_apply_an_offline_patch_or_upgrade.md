---
description: >-
  This article explains how to apply an offline patch or upgrade to Endpoint Protector (EPP) when the appliance does not have direct internet access or when you need to control the timing and process of software updates.
keywords:
  - offline patch
  - Endpoint Protector
  - software upgrade
sidebar_label: Apply Offline Patch
tags:
  - deployment-and-installation
title: "How to Apply an Offline Patch or Upgrade"
knowledge_article_id: kA0Qk0000002B7MKAU
products:
  - endpoint-protector
---

# How to Apply an Offline Patch or Upgrade

## Overview

This article explains how to apply an offline patch or upgrade to **Endpoint Protector** (EPP) when the appliance does not have direct internet access or when you need to control the timing and process of software updates. The instructions include preparing your environment, safely applying the patch, and verifying the update.

To stay informed about future version releases, visit the [Netwrix Community Endpoint Protector](https://community.netwrix.com/c/products/endpoint-protector/22) page and click the **Subscribe** button.

## Instructions

### Prepare for the Upgrade

- Before applying any update, create a snapshot of your **Endpoint Protector Appliance** virtual machine (VM, AWS, Azure, or GCP) as a best practice.
- Confirm your current EPP server version. You can find the version in the lower right corner of the console interface.

### Obtain the Offline Patch

- **Download from the Console**
  1. In the **Endpoint Protector** console, navigate to the **Announcements** section and select the latest **Endpoint Protector** version release.
  2. On the release page, locate the banner labeled **Download Netwrix Endpoint Protector x.x.x.x here!** and double-click to download the offline upgrade installation package to your local directory.

- **Request from Netwrix Technical Support**
  1. Open a support ticket and provide your current server version and the version you want to upgrade to.
  2. Netwrix Technical Support will provide you with the necessary offline patch files for the upgrade.

### Apply the Offline Patch

1. Open a web browser and access the **Endpoint Protector** console's web interface.
2. Log in with an account that has administrator privileges.
3. Navigate to **Dashboard** > **Live Update** > **Offline Patch Uploader**.  
   ![Offline Patch Uploader option in EPP Software Update section](./../0-images/servlet_image_06bccc2709d5.png)
4. Select **Choose File**. Browse for the downloaded or provided offline patch file and click **Upload Patch**.  
   ![Upload Patch button in Offline Patch Uploader](./../0-images/servlet_image_c1cc54905886.png)
5. Wait for a green confirmation message stating **Patch applied successfully!** to appear above the Offline Patch Uploader section.  
   ![Patch applied successfully banner in Offline Patch Uploader](./../0-images/servlet_image_6bd0b54ef795.png)
6. Remain on the page and monitor the upgrade progress at **Dashboard** > **Live Update**. The progress bar should reach 100%, usually within 5–10 minutes, depending on your database size.  
   ![Upgrade progress bar in Live Update section](./../0-images/servlet_image_65b2f6cd5406.png)
7. After the upgrade completes, refresh your browser and verify the updated server version in the bottom right corner of the console interface.  
   ![Endpoint Protector version number in the console interface](./../0-images/servlet_image_138e8d943c1b.png)
8. If you need to apply additional offline patches, repeat steps 4–7. Offline patches are incremental, like the Live Update functionality. You must apply them one at a time to correctly upgrade the server and avoid issues.

> **NOTE:** There may be a delay between a new general availability (GA) release and the availability of an offline patch for the new server version.