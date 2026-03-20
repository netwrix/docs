---
title: "Built-in Patterns"
description: "Pre-configured patterns for PII, PCI, SSN, and more"
sidebar_position: 10
---

# Built-in Patterns

Netwrix Access Analyzer ships with a library of pre-configured detection patterns that identify common categories of sensitive data. These built-in patterns use the Netwrix Data Classification SDK and are ready to use without additional configuration.

## Pattern Categories

| Category | Description | Examples |
| --- | --- | --- |
| PII | Personally identifiable information | Social Security numbers, full names, mailing addresses, email addresses, phone numbers |
| Credentials | Authentication and access secrets | Passwords, API keys, tokens, private keys, connection strings |
| PHI | Protected health information | Medical record numbers, health plan IDs, diagnosis codes, lab results |
| Financial Records | Payment and banking data | Credit card numbers (PAN), bank account and routing numbers, tax IDs |

## How Built-in Patterns Work

Built-in patterns leverage two detection methods:

- **Netwrix Data Classification SDK** — A C#/.NET-based engine that applies advanced heuristics and contextual analysis beyond simple pattern matching.
- **Regex pattern matching** — Standard regular expressions tuned for high-accuracy detection of structured data formats such as SSNs, credit card numbers, and IBANs.

:::note
Built-in patterns cannot be edited directly. To modify detection behavior, create a [custom pattern](/docs/accessanalyzer/1_0/sensitivedatadiscovery/patterns/custompatterns) and organize it into a [pattern group](/docs/accessanalyzer/1_0/sensitivedatadiscovery/patterns/patterngroups).
:::

## Next Steps

- [Create custom regex patterns](/docs/accessanalyzer/1_0/sensitivedatadiscovery/patterns/custompatterns) for organization-specific data formats
- [Organize patterns into groups](/docs/accessanalyzer/1_0/sensitivedatadiscovery/patterns/patterngroups) for streamlined scan configuration
