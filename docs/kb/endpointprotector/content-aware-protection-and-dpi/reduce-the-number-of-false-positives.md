---
description: >-
  Explains how to reduce the number of false positives by enabling and
  configuring global Contextual Detection in Netwrix Endpoint Protector.
keywords:
  - contextual detection
  - false positives
  - Netwrix Endpoint Protector
  - system parameters
  - content aware detection
  - PII
  - DLP
  - related dictionary
products:
  - endpointprotector
sidebar_label: Reduce the Number of False Positives
tags:
  - content-aware-protection-and-dpi
  - kb
title: "Reduce the Number of False Positives"
knowledge_article_id: kA0Qk0000002B6nKAE
---

# Reduce the Number of False Positives

## Overview

This article explains how to reduce the number of false positives by enabling and configuring global Contextual Detection.

## Instructions

1. In the Netwrix Endpoint Protector Console, navigate to **System Parameters** > **Contextual Detection** then enable Contextual Detection for each category of predefined.
2. Click **Add** and configure the following options as needed:
   - **Category and Type** – The content aware detection function.
   - **Surrounding text** – The number of characters in the search interval to determine the context.
   - **Related Dictionary** – A set of keywords related to the PII.
   - **Related Regular Expression** – An additional way of adding a related rule that is not among the content aware detection functions.
   - **Related File Type** – The related file type.
   - **Related File Size (MB)** – The related file size, in megabytes.
   - **Minimum Matches** – The minimum number of items to match to validate the detection rule.
   - **Unrelated Dictionary** – A set of keywords not related to the PII.
   - **Unrelated Regular Expression** – An additional way of adding a non-related rule that is not among the content aware detection functions.
   - **Unrelated File Type** – The unrelated file type.
   - **Unrelated File Size (MB)** – The unrelated file size, in megabytes.
   - **Maximum Matches** – The value above which the rule will not be validated (recommended value is 0).

:::warning
Global Contextual Rules are superseded by per-policy Contextual Rules. If at least one Content Aware Protection or eDiscovery policy has its own individual Contextual Rule set, Endpoint Protector Clients no longer receive the Global Contextual Rules configured here for that policy. Verify whether the affected policy already has a per-policy Contextual Rule before relying on the global configuration to reduce its false positives.
:::

:::note
For more information, see [Contextual Detection](/docs/endpointprotector/admin/systempar#contextual-detection) in the System Parameters documentation.
:::

## Related Links

- [System Parameters](/docs/endpointprotector/admin/systempar) — System Parameters documentation, including Contextual Detection
- [Content Detection Summary](/docs/endpointprotector/admin/cap_module/contentdetection#content-detection-summary) — Content Detection Summary documentation
- [Client Settings](/docs/endpointprotector/admin/dc_module/globalsettings#client-settings) — Global Settings documentation, including Extend Source Code Detection and other client-side settings that affect false positive rates
