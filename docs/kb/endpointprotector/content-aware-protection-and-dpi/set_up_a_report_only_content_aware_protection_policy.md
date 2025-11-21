---
description: >-
  This article explains how to set up a Report Only Content Aware Protection (CAP) policy in Endpoint Protector, allowing you to monitor file movement across endpoints without enforcing restrictions.
keywords:
  - Content Aware Protection
  - Endpoint Protector
  - Report Only Policy
products:
  - endpoint-protector
sidebar_label: Set Up Report Only CAP Policy
tags:
  - content-aware-protection-and-dpi
title: Set Up a "Report Only" Content Aware Protection Policy
knowledge_article_id: kA0Qk0000002B9FKAU
---

# Set Up a "Report Only" Content Aware Protection Policy

## Overview

This article explains how to set up a **Report Only** Content Aware Protection (CAP) policy in **Endpoint Protector**. Creating a Report Only policy is recommended after configuring an Allow All Device Control Policy. This approach helps you understand file movement across endpoints without enforcing restrictions.

> **IMPORTANT:** Report Only policies generate a large volume of logs and should be used on a limited number of computers.

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
3. In the **Denylists** section, choose the objects to focus classification and determination on:
   - Use the **File Type** tab to audit activity around specific file types.
   - Use the **Predefined Content** tab for regulatory-bound content.
   - Use the **Custom Content** tab for custom file entries, or the **Regular Expression** tab for logical operators.
4. Click **Save** for each Report Only policy you create.
5. After deploying agents, return to the policies and assign them to the target client systems.

## Details

- Report Only policies do not enforce restrictions, even if denylist items are configured. They are intended for auditing and monitoring purposes only.
- The CAP feature module focuses on in-motion objects and consumes minimal endpoint resources. Configure only the variables relevant to your environment to avoid unnecessary processing.