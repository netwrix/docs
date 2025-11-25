---
description: >-
  Describes the six client modes in Netwrix Endpoint Protector, their behavior,
  and recommendations for when to use each mode. Explains differences between
  Normal, Transparent, Stealth, Panic, Hidden Icon, and Silent modes and links
  to additional documentation.
keywords:
  - endpoint protector
  - client modes
  - Transparent mode
  - Stealth mode
  - Panic mode
  - Hidden Icon
  - Silent mode
  - Device Control
  - Content Aware Protection
products:
  - endpoint-protector
sidebar_label: Client Modes Overview
tags:
  - features-and-operations
title: "Client Modes Overview"
knowledge_article_id: kA0Qk0000002BCRKA2
---

# Client Modes Overview

## Overview

The Netwrix Endpoint Protector Client offers several modes that define its behavior on an end user's system. There are six modes available, and you can change them at any time by a Netwrix Endpoint Protector administrator. The summary below describes each mode and its key characteristics.

## Client Modes

1. **Normal:** The default and recommended setting. Normal mode does not apply to Content Aware Protection; all other client modes, except Silent mode, are specific to Device Control.

   > **NOTE:** If Normal mode does not suit your needs, consider using Hidden Icon or Silent modes as alternatives.

2. **Transparent:** Blocks all devices while keeping users unaware of restrictions or the presence of the Netwrix Endpoint Protector Client. Does not apply to Content Aware Protection.
   - **System tray icon** is not displayed.
   - **System tray notifications** are not displayed.
   - All devices are blocked, except:
     - Keyboards (blocked when a third is connected or after 48 hours).
     - Wi-Fi connections (not blocked).
     - Bluetooth devices (remain operational).
     - USB modems (not blocked).
   - Administrator receives alerts for all activities.

3. **Stealth:** Discreetly monitors users and computers with a focus on Device Control and file tracing. Does not apply to Content Aware Protection.

   > **NOTE:** All activity is allowed, so there are no disruptions to daily user activities.

   - **System tray icon** is not displayed.
   - **System tray notifications** are not displayed.
   - All activity is allowed, regardless of authorization.
   - File shadowing and file tracing are enabled to monitor all user activity.
   - Administrator receives alerts for all activities.

4. **Panic:** Should be used in extreme situations when malicious intent or activity is detected. Does not apply to Content Aware Protection.

   > **RECOMMENDED:** Use this mode for selected users, groups, or computers only, as it will block all devices and generate a high volume of logs.

   - **System tray icon** is displayed.
   - **System tray notifications** are displayed.
   - All devices are blocked, except:
     - Keyboards (blocked when a third is connected or after 48 hours).
     - Wi-Fi connections (not blocked).
     - Bluetooth devices (remain operational).
     - USB modems (not blocked).
   - File shadowing and file tracing are enabled to monitor all user activity.
   - Administrator receives alerts when computers enter or exit Panic mode.

5. **Hidden Icon:** Similar to Normal mode, but the Netwrix Endpoint Protector Client is not visible to the user. Does not apply to Content Aware Protection.
   - **System tray icon** is not displayed.
   - **System tray notifications** are not displayed.
   - All rights and settings are applied as configured.

6. **Silent:** Similar to Normal mode, but pop-up notifications are not visible to the user.
   - **System tray icon** is displayed.
   - **System tray notifications** are not displayed.
   - All rights and settings are applied as configured.

For more information about Modes, please refer to this documentation: Netwrix Endpoint Protector Client Modes Documentation

## Recommendations

- Modes 1-3 cover most typical use cases.
- Contact the support department before setting agents to Transparent, Stealth, or Panic modes, as these are intended for very specific situations.

## Related Links

- Netwrix Endpoint Protector Client Modes Documentation
