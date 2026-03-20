---
title: "Auto vs Custom Classification"
description: "Automatic and custom classification methods"
sidebar_position: 30
---

# Auto vs Custom Classification

Netwrix Access Analyzer supports two classification approaches for sensitive data: automatic (built-in) classification and custom classification. You can use either method independently or combine them for comprehensive coverage.

## Automatic Classification

Automatic classification uses the built-in patterns and taxonomy groups that ship with Access Analyzer. This approach requires no upfront configuration and covers common sensitive data categories out of the box.

**Advantages:**

- Ready to use immediately after installation
- Covers standard compliance frameworks (GDPR, CCPA, HIPAA, PCI DSS, GLBA, CMMC)
- Maintained and updated by Netwrix through the Data Classification SDK

**Best for:** Organizations that need quick time-to-value and standard regulatory coverage.

## Custom Classification

Custom classification uses organization-defined regex patterns, pattern groups, and taxonomy mappings. This approach provides full control over what data is detected and how it is categorized.

**Advantages:**

- Detects proprietary or non-standard data formats
- Maps findings to internal policies beyond standard frameworks
- Supports region-specific or industry-specific identifiers

**Best for:** Organizations with unique data formats or compliance requirements not covered by built-in rules.

## Combining Both Approaches

For most deployments, a hybrid approach provides the best coverage. Use automatic classification as a baseline, then layer custom patterns for organization-specific needs.

:::note
Custom rules take precedence over automatic rules when both match the same data and the custom rule has a higher priority. See [Classification Rules](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/classificationrules) for details on priority settings.
:::
