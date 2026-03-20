---
title: "Sensitive Data Configuration"
description: "Configuring patterns and classification rules"
sidebar_position: 10
---

# Sensitive Data Configuration

The Sensitive Data section allows administrators to configure how Access Analyzer identifies and classifies sensitive information during scans. Classification is driven by regex-based patterns organized into pattern groups and taxonomy groups.

## How Classification Works

During a sensitive data scan, Access Analyzer inspects file content against all enabled patterns. When a match is found, the file is tagged with the corresponding classification labels and compliance framework mappings.

## Configuration Components

| Component | Description |
|---|---|
| [Pattern Groups](/docs/accessanalyzer/1_0/admin/sensitivedata/patterngroups) | Collections of regex patterns that define what constitutes sensitive data (e.g., PII, Credentials) |
| [Taxonomy Groups](/docs/accessanalyzer/1_0/admin/sensitivedata/taxonomygroups) | Compliance-oriented groupings that map patterns to regulatory frameworks (e.g., GDPR, HIPAA) |
| [Custom Classification](/docs/accessanalyzer/1_0/admin/sensitivedata/customclassification) | User-defined patterns and rules for organization-specific data types |

## Built-in Categories

Access Analyzer ships with built-in patterns for common sensitive data categories:

- **PII** -- Social Security numbers, email addresses, phone numbers, names
- **Credentials** -- API keys, passwords, connection strings, tokens
- **PHI** -- Medical record numbers, diagnosis codes, patient identifiers
- **Financial** -- Credit card numbers, bank account numbers, routing numbers

:::note
Built-in patterns cannot be deleted but can be disabled if they are not relevant to your environment.
:::
