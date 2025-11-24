---
description: >-
  Use these steps to whitelist authentication servers in Netwrix Endpoint
  Protector so authentication succeeds when Deep Packet Inspection (DPI) is
  enabled.
keywords:
  - deep packet inspection
  - DPI
  - whitelist
  - authentication servers
  - ADFS
  - Netwrix Endpoint Protector
  - allowlists
  - content aware policies
products:
  - endpoint-protector
sidebar_label: Whitelisting Authentication Servers for Deep Packe
tags:
  - content-aware-protection-and-dpi
title: "Whitelisting Authentication Servers for Deep Packet Inspection"
knowledge_article_id: kA0Qk0000002BDuKAM
---

# Whitelisting Authentication Servers for Deep Packet Inspection

## Overview

When Deep Packet Inspection (DPI) is enabled in environments using an authentication server, you must whitelist authentication resources to prevent authentication timeouts or failures. Without these allowances, the authentication service may detect DPI as a "man in the middle" and block or delay authentication attempts.

This article describes how to whitelist authentication servers in Netwrix Endpoint Protector to ensure successful authentication when DPI is enabled.

## Instructions

1. Log in to the Netwrix Endpoint Protector Console.
2. Go to **Denylists and Allowlists** and select **Allowlists**.  
   ![Allowlists section in Netwrix Endpoint Protector](./../0-images/ka0Qk000000Eb4X_0EMQk00000CAOF3.png)
3. Select the **Deep Packet Inspection** tab and click **Add**.  
   ![Deep Packet Inspection tab in Allowlists](./../0-images/ka0Qk000000Eb4X_0EMQk00000CAOGf.png)
4. Fill in all required fields to define your authentication resource(s) (e.g., ADFS), then click **Save**.  
   ![Defining authentication resource in DPI allowlist](./../0-images/ka0Qk000000Eb4X_0EMQk00000CAOIH.png)
5. Go to **Content Aware Protection** > **Content Aware Policies** and select your policy then click **Edit**.
6. Navigate to the **Policy Allowlists** section and click the **Deep Packet Inspection** tab.
7. Select the entry defined in step 4 and verify the accuracy of your selected policy entities.  
   ![Selecting DPI allowlist entry in policy](./../0-images/ka0Qk000000Eb4X_0EMQk00000CAOJt.png)
8. Click **Save**.
9. On the managed endpoint, right-click the System Tray or Menu Bar item for Netwrix Endpoint Protector and select **Update policies now**.  
   ![Update policies now in Netwrix Endpoint Protector client](./../0-images/ka0Qk000000Eb4X_0EMQk00000CAON7.png)
10. Verify that authentication succeeds when DPI is enabled.

