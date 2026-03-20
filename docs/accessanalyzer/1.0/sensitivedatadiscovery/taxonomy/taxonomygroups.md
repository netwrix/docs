---
title: "Taxonomy Groups"
description: "Creating and managing data classification categories"
sidebar_position: 10
---

# Taxonomy Groups

Taxonomy groups map classification rules to compliance frameworks, enabling you to align sensitive data findings with regulatory and organizational requirements. Each taxonomy group represents a compliance standard or internal policy against which scan results are evaluated.

## Supported Compliance Frameworks

Access Analyzer includes built-in taxonomy groups for the following frameworks:

| Framework | Description |
| --- | --- |
| GDPR | General Data Protection Regulation — EU personal data protection |
| CCPA | California Consumer Privacy Act — California resident data rights |
| HIPAA | Health Insurance Portability and Accountability Act — protected health information |
| PCI DSS | Payment Card Industry Data Security Standard — cardholder data protection |
| GLBA | Gramm-Leach-Bliley Act — financial institution consumer data |
| CMMC | Cybersecurity Maturity Model Certification — defense contractor requirements |

## Managing Taxonomy Groups

To create or modify a taxonomy group:

1. Navigate to **Sensitive Data Discovery** > **Taxonomy**.
2. Select the **Taxonomy Groups** tab.
3. Click **Add Group** to create a new group, or select an existing group to edit.
4. Provide a **Name** and select the target **Compliance Framework**.
5. Associate [classification rules](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/classificationrules) that define which data types fall under this group.
6. Click **Save**.

:::note
Built-in taxonomy groups are pre-mapped to their respective frameworks. You can create additional groups for internal policies or regional regulations not covered by the defaults.
:::

## Next Steps

- [Define classification rules](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/classificationrules) to control how data is categorized within each taxonomy group
- [Compare built-in and custom classification](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/autovscustom) approaches
