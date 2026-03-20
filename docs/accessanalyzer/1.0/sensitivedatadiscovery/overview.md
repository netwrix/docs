---
title: "Sensitive Data Discovery"
description: "Discover and classify sensitive data across your environment"
sidebar_position: 1
---

# Sensitive Data Discovery

Sensitive Data Discovery (SDD) in Netwrix Access Analyzer identifies and classifies sensitive information across your connected data sources. The platform uses two complementary detection methods: the Netwrix Data Classification SDK and custom regex pattern matching.

## Workflow

Follow these steps to discover sensitive data in your environment:

1. **Configure detection patterns** — Select from [built-in patterns](/docs/accessanalyzer/1_0/sensitivedatadiscovery/patterns/builtinpatterns) or [create custom regex patterns](/docs/accessanalyzer/1_0/sensitivedatadiscovery/patterns/custompatterns) to define what constitutes sensitive data.
2. **Organize patterns into groups** — Use [pattern groups](/docs/accessanalyzer/1_0/sensitivedatadiscovery/patterns/patterngroups) to logically categorize your detection patterns.
3. **Map to compliance frameworks** — Configure [taxonomy groups](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/taxonomygroups) and [classification rules](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/classificationrules) to align findings with regulatory requirements.
4. **Run a scan** — [Execute a sensitive data scan](/docs/accessanalyzer/1_0/sensitivedatadiscovery/runningscan) against your target data sources.
5. **Review results** — Analyze [match counts](/docs/accessanalyzer/1_0/sensitivedatadiscovery/reviewingresults/matchcounts) and [classification breakdowns](/docs/accessanalyzer/1_0/sensitivedatadiscovery/reviewingresults/classificationbreakdown) to understand your data risk posture.

## Supported Data Types

| Category | Examples |
| --- | --- |
| PII | Social Security numbers, names, addresses, email addresses |
| Credentials | Passwords, API keys, authentication tokens |
| PHI | Medical records, health data, insurance identifiers |
| Financial Records | Credit card numbers, bank account details |

:::note
Sensitive data scans are configured during the scan creation wizard. Ensure your detection patterns and taxonomy mappings are in place before running your first scan.
:::
