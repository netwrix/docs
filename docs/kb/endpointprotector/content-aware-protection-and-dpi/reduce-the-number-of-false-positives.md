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
  - endpoint-protector
sidebar_label: Reduce the Number of False Positives
tags:
  - content-aware-protection-and-dpi
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

> **NOTE:** For more information, refer to the Contextual Detection section of the manual.

## Related Links

- https://docs.netwrix.com/docs/endpointprotector/5_9_4_2/admin/systempar — System Parameters Overview Documentation
- https://docs.netwrix.com/docs/endpointprotector/5_9_4_2/admin/overview — Content Detection Summary Documentation
