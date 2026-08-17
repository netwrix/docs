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

1. In the Change Tracker console, navigate to **Settings** > **System Settings**.
2. Configure the **Syslog Server** settings according to your SIEM server's requirements:
   - Set the syslog version to one that your SIEM supports, or to Common Event Format (CEF).
   - Specify a UDP port for common default settings.
3. Click **Test** to verify that the Change Tracker test message is received by your SIEM.

### Configuring Event Notifications

Once the syslog server is configured, set up alerts to forward specific events to your SIEM:

**Note:** User notifications are configured on a **per user** basis. For **Syslog** notifications specifically, you only need to create the notification **once**. There is no need to duplicate notifications on all users.

1. In the Change Tracker console, navigate to **Settings** > **User Notifications**.
2. From the **User Name** dropdown, select the user you would like to use to configure your syslog notifications.
3. Click **Add a Notification for a group**.
4. In the new window, first select the **Group Name**. This determines what device(s) in Change Tracker will trigger the user notification based on the group membership. If the device resides within the specified group, the notification will trigger.
5. Select the **Notification Types** in which you would like to be forwarded  to your SIEM solution e.g. Device Offline events, Unplanned Changes events etc. You can select **more than 1 notification type**.
6. Select **Syslog** from the **Notification Method** dropdown menu.
7. Click **Save** to apply the notification settings.
