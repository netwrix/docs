---
description: >-
  This article explains how to update the session timeout settings for Netwrix Directory Manager Portal and Directory Manager Security Service by modifying the timeout parameter in the relevant appsettings.json files.
keywords:
  - timeout settings
  - Netwrix Directory Manager
  - appsettings.json
sidebar_label: Increase Idle Timeout Duration
tags:
  - system-administration-and-maintenance
title: "Increase the Idle Timeout Duration in V11"
knowledge_article_id: kA0Qk0000002JjJKAU
products:
  - directory-manager
---

# Increase the Idle Timeout Duration in V11

## Related Queries

- "In order to update the portal timeout settings, change/update the timeout values in the following files:"
- "How to change Directory Manager portal timeout"

## Overview

This article explains how to update the session timeout settings for **Netwrix Directory Manager** (formerly **GroupID**) Portal and **Directory Manager Security Service** by modifying the `timeout` parameter in the relevant `appsettings.json` files. An IIS reset is required for the changes to take effect.

## Instructions

1. Open the following file in a text editor:  
   `X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\GroupIDSecurityService\Web\appsettings.json`
   
2. Locate the **timeout** parameter.

3. The value is in **seconds**. The default is **1200** (20 minutes).

4. Update the value as needed.

5. Open the following file in a text editor:  
   `X:\Program Files\Imanami\GroupID 11.0\GroupIDPortal\Inetpub\GroupIDPortal\Web\appsettings.json`
   
6. Locate the **timeout** parameter.

7. The value is in **minutes**. The default is **20**.

8. Update the value as needed.

9. After saving your changes, perform an IIS reset to apply the new timeout settings.

> **IMPORTANT:** Always back up the `appsettings.json` files before making any changes.  
> Here the X denotes the installation drive of **Directory Manager**. The timeout values in the two files use different units (seconds and minutes). Ensure you set the correct value in each file.