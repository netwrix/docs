---
title: "Patterns and Pattern Groups"
description: "Managing regex patterns and pattern groups"
sidebar_position: 20
---

# Patterns and Pattern Groups

Patterns are regular expressions that Access Analyzer uses to identify sensitive data within file content. Patterns are organized into groups for easier management and selective enablement.

## Pattern Groups

A pattern group is a named collection of related patterns. Built-in groups include:

| Group | Examples |
|---|---|
| **PII** | Social Security numbers, driver's license numbers, passport numbers |
| **Credentials** | API keys, passwords in config files, SSH private keys |
| **PHI** | Medical record numbers, health plan IDs, diagnosis codes |
| **Financial** | Credit card numbers (Visa, MasterCard, Amex), IBAN, routing numbers |

## Managing Patterns

To view and manage patterns within a group:

1. Navigate to **Sensitive Data** > **Pattern Groups**.
2. Select a group to view its patterns.
3. Each pattern displays its name, regex expression, and enabled/disabled status.

Administrators can enable or disable individual patterns within a group. Disabled patterns are excluded from scan matching.

## Pattern Fields

| Field | Description |
|---|---|
| **Name** | Descriptive label for the pattern |
| **Regex** | The regular expression used for matching |
| **Confidence** | Expected match accuracy (High, Medium, Low) |
| **Enabled** | Whether the pattern is active during scans |

:::note
Changes to pattern enablement take effect on the next scan execution. Running scans use the configuration that was active at scan start time.
:::
