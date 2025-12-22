---
description: >-
  This article provides guidance on resolving website loading issues that may occur when Deep Packet Inspection (DPI) is enabled, including steps to allowlist blocked content delivery networks (CDNs).
keywords:
  - Deep Packet Inspection
  - Content Delivery Network
  - website loading issues
sidebar_label: Resolve Website Loading Issues
tags: [troubleshooting-and-errors]
title: "Resolve Website Loading Issues When DPI Is Enabled"
knowledge_article_id: kA0Qk0000002B33KAE
products:
  - general
---

# Resolve Website Loading Issues When DPI Is Enabled

## Overview

When Deep Packet Inspection (DPI) is enabled, the client may block some images, charts, or other elements from loading on websites that are not explicitly blocked. If websites do not load correctly, check whether content delivery networks (CDNs) are being blocked and add them to an allowlist assigned to the relevant Content Aware policy.

- **CDN (Content Delivery Network):** A group of geographically distributed servers that speed up the delivery of web content by bringing it closer to users.
- **DPI (Deep Packet Inspection):** An option used by the client to monitor web traffic.

## Instructions

1. In your browser, right-click and select **Inspect**.
2. Go to the **Console** tab and identify which CDN links are being blocked.
3. Add the blocked CDN links to an **Allowlist**.
4. Assign the **Allowlist** to the **Content Aware policy** that you use to block certain websites.