---
description: >-
  This article explains how to set up a Report Only Content Aware Protection (CAP) policy in Endpoint Protector, allowing you to monitor file movement across endpoints without enforcing restrictions.
keywords:
  - Content Aware Protection
  - Endpoint Protector
  - Report Only Policy
products:
  - endpointprotector
sidebar_label: Set Up Report Only CAP Policy
tags:
  - content-aware-protection-and-dpi
  - kb
title: Set Up a "Report Only" Content Aware Protection Policy
knowledge_article_id: kA0Qk0000002B9FKAU
---

# Set Up a "Report Only" Content Aware Protection Policy

## Overview

This article explains how to set up a **Report Only** Content Aware Protection (CAP) policy in **Endpoint Protector**. Creating a Report Only policy is recommended after configuring an Allow All Device Control Policy. This approach helps you understand file movement across endpoints without enforcing restrictions.

For the full reference, see [Policy Configuration and Application](/docs/endpointprotector/admin/cap_module/cappolicies).

:::important
Report Only policies generate a large volume of logs and should be used on a limited number of computers.
:::

## Instructions

### Configure Report Only Policy

1. In the **Endpoint Protector Management Console**, navigate to **Content Aware Protection** > **Content Aware Policies**.
2. Click **Create Custom Policy**.
3. Define the policy settings:
   - Select the **OS Type**.
   - Enter a **Policy Name** (it is recommended to include "Reporting" or "Report Only" in the name or description).
   - For the **Policy Action** field, select **Report Only**.
4. Click **Save** to create the policy. You will be returned to the Policies window.
5. If you manage multiple operating system types, repeat the above steps to create a policy framework for each platform.

### Configure Exit Points and Denylist Items

1. Select your policy and click the **Edit** icon on the right side of the policy window.
2. On the **Edit Policy** page, select the **Exit Points** of focus and the items you may later restrict:
   - Use the **Applications** tab under Exit Points for common email clients and web browsers.
   - Use the **Storage Devices** tab if you plan to restrict file transfers to storage media.
   - Use the **Clipboard** tab to monitor content captured through copy, cut, and paste operations.
   - Use **Network Shares**, **Print Screen**, or **Printers** to monitor those additional exit points.
3. In the **Denylists** section, choose the objects to focus classification and determination on:
   - Use the **File Type** tab to audit activity around specific file types.
   - Use the **Predefined Content** tab for regulatory-bound content.
   - Use the **Custom Content** tab for custom file entries, or the **Regular Expression** tab for logical operators.
4. Click **Save** for each Report Only policy you create.
5. After deploying agents, return to the policies and assign them to the target client systems.

:::tip
If you plan to later add a **Block & Report** policy alongside this Report Only policy for the same entity, place the Block & Report policy at a higher priority. See [Policy Processing Order](/docs/endpointprotector/admin/cap_module/cappolicies#policy-processing-order) — Endpoint Protector evaluates policies by entity level first, then by priority within that level, regardless of the configured policy action.
:::

## Details

- Report Only policies do not enforce restrictions, even if denylist items are configured. They are intended for auditing and monitoring purposes only.
- The CAP feature module focuses on in-motion objects and consumes minimal endpoint resources. Configure only the variables relevant to your environment to avoid unnecessary processing.
- Endpoint Protector 5.9.4 and later supports up to 300 Content Aware Protection policies (increased from 48), so you can maintain both Report Only and enforcement policies without hitting the limit.