---
description: >-
  This article provides step-by-step instructions on how to block applications using Content Aware Protection in Endpoint Protector.
keywords:
  - Content Aware Protection
  - block applications
  - deny lists
sidebar_label: Block Applications
tags: []
title: "Block Applications Using Content Aware Protection"
knowledge_article_id: kA0Qk0000002B2xKAE
products:
  - endpointprotector
---

# Block Applications Using Content Aware Protection

## Overview

In Endpoint Protector, you are able to block or deny applications from running on endpoints by configuring Content Aware Protection policies. Use deny lists to specify which applications you want to prevent from executing and assign these lists to the appropriate policies for your environment.

## Instructions

Follow these steps to configure the settings:

1. Identify the process name of the application you want to block:
   - On Windows, find the process name under the **Details** tab in Task Manager.
   - On macOS, find the process name under the **Process Name** column in Activity Monitor.
2. Navigate to **Denylists and Allowlists > Denylists > Applications** and click **Add**.
3. Enter the name and description for the deny list.
4. In the **Application & CLI Command** box, enter the process name exactly as it appears on the endpoint operating system. Click **Add to Content**.
5. In the **List of Application & CLI Command** box, check the newly added process name and click **Generate**.
6. The application list is now available to select within a Content Aware Policy.
7. Create a new Content Aware Policy or use an existing one. Navigate to **Policy Denylists > Applications** and select the newly created application list.
8. Select the endpoints to which the policy should apply under **Policy Entities**. Save the Content Aware Policy and wait for the policies to update on the endpoints.
9. Content Aware Protection now prevents the application from running when a user attempts to start it.