---
description: >-
  This article explains how to configure Netwrix Activity Monitor (SAM) to send
  events to Netwrix Threat Manager using an App Token integration.
keywords:
  - Netwrix Activity Monitor
  - Netwrix Threat Manager
  - App Token
  - Integrations
  - SAM
  - Threat Prevention
  - send events
products:
  - activitymonitor
  - threat-manager
sidebar_label: Configuring Netwrix Activity Monitor to Send to Th
tags: []
title: "Configuring Netwrix Activity Monitor to Send to Threat Manager"
knowledge_article_id: kA04u0000000I5DCAU
---

# Configuring Netwrix Activity Monitor to Send to Threat Manager

The Netwrix Activity Monitor (SAM) can be configured to send events to Netwrix Threat Manager (SD). If Netwrix Threat Prevention (SI) is configured to send events to Netwrix Activity Monitor (SAM), those events will be passed on to whatever applications SAM is configured to send events to.

## To send events to Netwrix Threat Manager

1. In Netwrix Threat Manager:
   - Navigate to the **Integrations** page.
   - Click the **Add New Integration** button.
   - Set the **Type** field to **App Token**, enter a **Name**, and (optionally) a **Description**.
   - Click the **Add** button.
   - Expand the **App Tokens** node on the Integrations tree and select the App Token you just generated.
   - Click the **Copy Token** button.

2. In the Netwrix Activity Monitor:
   - Go to the **Monitored Domains** tab, click **Add Output** and select the **Threat Manager** option.
   - Set the value of the **Server** in `SERVER[:PORT]` format field to `[DEFENDHOST]:10001`, where `[DEFENDHOST]` is the hostname or IP address of the Netwrix Threat Manager host.
   - Paste the **App Token** generated in Netwrix Threat Manager into the **App Token** field.
   - Click the **OK** button.

## Article details

- **Channel:** Customer-Facing / Public
- **Submitted by:** Michael Olig
- **Product:** Netwrix Activity Monitor, Netwrix Threat Manager
- **KB Type:** How To
