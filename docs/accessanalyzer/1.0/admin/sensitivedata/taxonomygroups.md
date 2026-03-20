---
title: "Taxonomy Groups and Rules"
description: "Configuring taxonomy-based data classification"
sidebar_position: 30
---

# Taxonomy Groups and Rules

Taxonomy groups map pattern detections to compliance frameworks and regulatory standards. They provide a compliance-oriented view of sensitive data findings.

## Built-in Compliance Mappings

Access Analyzer includes pre-configured taxonomy groups aligned to major regulatory frameworks:

| Taxonomy Group | Framework | Relevant Data Types |
|---|---|---|
| **GDPR** | General Data Protection Regulation | PII, personal data, EU resident identifiers |
| **CCPA** | California Consumer Privacy Act | PII, consumer records, financial identifiers |
| **HIPAA** | Health Insurance Portability and Accountability Act | PHI, medical records, health plan data |
| **PCI DSS** | Payment Card Industry Data Security Standard | Credit card numbers, cardholder data |
| **GLBA** | Gramm-Leach-Bliley Act | Financial records, account numbers |
| **CMMC** | Cybersecurity Maturity Model Certification | Controlled unclassified information, credentials |

## How Taxonomy Mapping Works

Each taxonomy group references one or more pattern groups. When a sensitive data scan produces a match against a pattern, the finding is automatically tagged with all associated taxonomy labels. This enables compliance-focused reporting without additional configuration.

## Managing Taxonomy Groups

To view taxonomy group configuration:

1. Navigate to **Sensitive Data** > **Taxonomy Groups**.
2. Select a group to view its associated patterns and compliance mappings.

Administrators can enable or disable taxonomy groups to control which compliance labels appear in scan results.

:::note
Built-in taxonomy groups are updated with product releases to reflect changes in regulatory standards.
:::
