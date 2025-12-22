---
description: >-
  This article explains the issue where the NTDS.dit threat event does not trigger in Netwrix Threat Manager and provides steps to resolve it.
keywords:
  - NTDS.dit
  - Netwrix Threat Manager
  - Threat Prevention
sidebar_label: NTDS.dit Threat Event Issue
tags: []
title: "The NTDS.dit Threat Event Does Not Trigger"
knowledge_article_id: kA0Qk0000001z9VKAQ
products:
  - threat-manager
---

# The NTDS.dit Threat Event Does Not Trigger

## Symptom

When attempting to access the `NTDS.dit` file on a domain controller, the expected threat event does not trigger in **Netwrix Threat Manager**.

## Cause

By default, the `NTDS.dit` event in **Netwrix Threat Prevention** only tracks one domain controller. If the file is accessed from a system other than the one being tracked by default, the event is not captured or forwarded to **Threat Manager**.

## Resolution

To resolve the issue, add all domains and systems to be tracked:

1. Navigate to the policy settings in **Threat Prevention**.
2. Select **Event Type** > **Additional Agents** > **Add All Agents and Domains**.

![Screenshot showing the policy settings in Netwrix Threat Prevention with the Add All Agents and Domains option highlighted](./images/servlet_image_6a2f3ac990a0.png)