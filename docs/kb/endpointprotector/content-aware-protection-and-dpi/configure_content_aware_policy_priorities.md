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
title: "Configure Content Aware Policy Priorities"
knowledge_article_id: kA0Qk0000002B4DKAU
products:
  - endpointprotector
---

# Configure Content Aware Policy Priorities

## Overview

This article explains how to configure priorities for **content aware policies** (CAP) in Endpoint Protector. Content Aware Policies are sets of rules for sensitive content detection that enforce file transfer management on selected entities such as users, computers, groups, or departments. Prioritizing these policies helps determine which policy is enforced when multiple policies apply to the same file transfer event.

## Instructions

1. In the Endpoint Protector console, navigate to **Content Aware Protection** > **Content Aware Policies**.

2. To change the priority of a policy, use the left and right arrows to move the policy in the list:
   - The leftmost policy has the highest priority (Priority 1).
   - The rightmost policy has the lowest priority.
   - Click the left arrow to increase a policy's priority.
   - Click the right arrow to decrease a policy's priority.

3. You can also edit policy priority by double-clicking on a policy listed in the Priority column.

> **NOTE:** One or more Content Aware Policies can be enforced on the same computer, user, group, or department. To avoid conflicts between applied rules, use prioritization to determine which policy is enforced when there is a conflict. In the current Endpoint Protector implementation, there is no guarantee in which order **Block** CAP policies will trigger. Policies are evaluated simultaneously (not sequentially) against a file. When a conflict is encountered (for example, one policy only reports a PII and another blocks the PII), Endpoint Protector will apply the policy with the higher priority.

You can find more information in the [Policy Configuration and Application](https://docs.netwrix.com/docs/endpointprotector/5_9_4_2/admin/cap_module/cappolicies) documentation.