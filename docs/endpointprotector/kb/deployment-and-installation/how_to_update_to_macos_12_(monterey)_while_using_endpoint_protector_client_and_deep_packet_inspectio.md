---
description: >-
  This article explains how to update to macOS 12 (Monterey) while using the Endpoint Protector client and Deep Packet Inspection, ensuring compatibility and proper certificate configuration.
keywords:
  - macOS 12
  - Endpoint Protector
  - Deep Packet Inspection
sidebar_label: Update to macOS 12
tags:
  - deployment-and-installation
title: "How to Update to macOS 12 (Monterey) While Using Endpoint Protector Client and Deep Packet Inspection"
knowledge_article_id: kA0Qk0000002B9UKAU
products:
  - endpoint-protector
---

# How to Update to macOS 12 (Monterey) While Using Endpoint Protector Client and Deep Packet Inspection

## Overview

This article explains how to update to macOS 12 (Monterey) when using the Endpoint Protector client and Deep Packet Inspection. Follow these steps to ensure compatibility and proper certificate configuration.

## Instructions

1. Update the Endpoint Protector server to the latest version.
2. On the Endpoint Protector Server, navigate to **System Settings** > **Server Certificate Stack** > **Regenerate Server Certificate Stack** and click **Regenerate** to regenerate the server and client CA certificate.
3. To download the new CA certificate, navigate to **System Configuration** > **System Settings** > **Deep Packet Inspection Certificate**.
4. Toggle the option and confirm by selecting **Yes** in the pop-up window.
5. Click **Download Client CA Certificate**. The **ClientCerts** file will download to your local directory.
6. On your macOS device, open the **Keychain Access** application and go to **System**.
7. Unzip the downloaded **ClientCerts** file.
8. Select the **cacert.pem** file and move it into **System** in **Keychain Access**.

   ![Dragging cacert.pem into System in Keychain Access on macOS](./../0-images/servlet_image_7fc401abe1e3.png)

9. Double-click the newly added certificate. In the **Trust** section, select **Always Trust**.

   ![Setting certificate to Always Trust in Keychain Access](./../0-images/servlet_image_910151bbafe1.png)

10. Save the changes.
11. Update the macOS Endpoint Protector client to the latest version.
12. Restart the computer.
13. Update to macOS 12 (Monterey).