---
description: >-
  This article explains how to configure priorities for content aware policies in Endpoint Protector, ensuring the correct enforcement of rules for sensitive content detection.
keywords:
  - content aware policies
  - Endpoint Protector
  - file transfer management
sidebar_label: Configure Content Aware Policy Priorities
tags:
  - content-aware-protection-and-dpi
  - kb
title: "Configure Content Aware Policy Priorities"
knowledge_article_id: kA0Qk0000002B4DKAU
products:
  - endpointprotector
---

# Configure Content Aware Policy Priorities

## Overview

This article explains how to configure priorities for **content aware policies** (CAP) in Endpoint Protector. Content Aware Policies are sets of rules for sensitive content detection that enforce file transfer management on selected entities such as users, computers, groups, or departments. Prioritizing these policies helps determine which policy is enforced when multiple policies apply to the same file transfer event.

## Instructions

1. In the Endpoint Protector console, navigate to **Content Aware Protection** > **Content Aware Policies**. You can switch between **Grid** and **Widget** view using the controls in the top-right corner. See [Policy Configuration and Application](/docs/endpointprotector/admin/cap_module/cappolicies) for a screenshot of this page.

2. To change the priority of a policy, use the left and right arrows to move the policy in the list:
   - The leftmost policy has the highest priority (Priority 1).
   - The rightmost policy has the lowest priority.
   - Click the left arrow to increase a policy's priority.
   - Click the right arrow to decrease a policy's priority.

3. You can also edit policy priority by double-clicking on a policy listed in the Priority column.

:::note
One or more Content Aware Policies can be enforced on the same computer, user, group, or department. When multiple policies apply to the same transfer event, Endpoint Protector evaluates them using a two-level hierarchy: entity level first — Computer/User has the highest precedence, then Group, then Department — and then the **Priority** number within that entity level. The policy action (**Block & Report**, **Report Only**, **Block Only**, or **Block and Remediate**) doesn't affect the processing order. See [Policy Processing Order](/docs/endpointprotector/admin/cap_module/cappolicies#policy-processing-order) for the full breakdown, including how to configure entity-level evaluation behavior in **System Configuration** > **System Settings**.
:::