---
description: >-
  Explains the "Failed to create FSAdapter (80070002)" error in Netwrix Access
  Analyzer caused by an incompatibility with the Sensitive Data Discovery Add-On
  and how to resolve it by updating both components.
keywords:
  - Netwrix Access Analyzer
  - Sensitive Data Discovery Add-On
  - FSAdapter
  - 80070002
  - compatibility
  - upgrade
  - v11.6
  - error
products:
  - access-analyzer
sidebar_label: Failed to Create FSAdapter Error in Netwrix Access
tags:
  - troubleshooting-and-errors
title: "Failed to Create FSAdapter Error in Netwrix Access Analyzer"
knowledge_article_id: kA0Qk0000000XTpKAM
---

# Failed to Create FSAdapter Error in Netwrix Access Analyzer

## Symptom

Netwrix Access Analyzer prompts the following errors:

```text
Failed to create FSAdapter (80070002): The system cannot find the file specified
```

```text
Error during processing: Failed to create FSAdapter
```

## Cause

Your installed versions of Netwrix Access Analyzer and the Sensitive Data Discovery Add-On are incompatible.

- Netwrix Access Analyzer v11.6.0.59 and higher require Sensitive Data Discovery Add-On v11.6.0.10 and higher.
- The Sensitive Data Discovery Add-On v11.6.0.10 and higher require Netwrix Access Analyzer v11.6.0.59 and higher.

The incompatibility is caused by an outdated component.

## Resolution

Update both Netwrix Access Analyzer and the Sensitive Data Discovery Add-On to their latest versions. Refer to the following articles for additional information:

- Sensitive Data Discovery Add-On Installation — Upgrade Sensitive Data Discovery Add-on · v11.6
- Installation & Configuration Overview − Netwrix Access Analyzer Console Upgrade · v11.6

## Related articles

1. Sensitive Data Discovery Add-On Installation — Upgrade Sensitive Data Discovery Add-on · v11.6
2. Installation & Configuration Overview − Netwrix Access Analyzer Console Upgrade · v11.6
