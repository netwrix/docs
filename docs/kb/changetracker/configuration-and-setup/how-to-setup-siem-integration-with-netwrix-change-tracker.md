---
description: >-
  Configuring syslog integration to forward Netwrix Change Tracker events to a
  Security Information and Event Management (SIEM) solution.
keywords:
  - SIEM integration
  - syslog
  - syslog server
  - CEF
  - UDP
  - user notifications
  - Security Information and Event Management
  - syslog version
  - User Notifications settings
  - SIEM syslog
products:
  - change-tracker
sidebar_label: Setting Up SIEM Integration
tags:
  - kb
  - configuration-and-setup
title: Setting Up SIEM Integration with Netwrix Change Tracker
knowledge_article_id: ""
---

# Setting Up SIEM Integration with Netwrix Change Tracker

## Overview

You can forward Netwrix Change Tracker events to a Security Information and Event Management (SIEM) solution by configuring a syslog server connection and setting up event notifications.

## Instructions

### Configuring the Syslog Server

1. In the Netwrix Change Tracker console, navigate to **Settings** > **System Settings**.
2. Configure the **Syslog Server** settings according to your SIEM server's requirements:
   - Set the syslog version to one that your SIEM supports, or to Common Event Format (CEF).
   - Specify a UDP port for common default settings.
3. Click **Test** to verify that the Change Tracker test message is received by your SIEM.

### Configuring Event Notifications

Once the syslog server is configured, set up alerts to forward specific events to your SIEM:

1. In the Netwrix Change Tracker console, navigate to **Settings** > **User Notifications**.
2. Configure the specific event types to send to your SIEM, such as Device Offline, Unplanned Changes, and others.
