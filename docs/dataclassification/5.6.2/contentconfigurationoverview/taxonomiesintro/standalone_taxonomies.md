---
title: "Built-in Taxonomies Overview"
description: "Built-in Taxonomies Overview"
sidebar_position: 10
---

# Built-in Taxonomies Overview

Netwrix Data Classification comes with eight taxonomies with hundreds of classification rules
out-of-the-box.

The four core taxonomies cover a broad range of sensitive personal, financial, and health-related
information. The remaining four taxonomies derive from the core set. They are tailored to meet the
requirements of specific data protection regulations:

- Personally identifiable information covering GDPR scope.
- Medical records covering HIPAA scope.
- Financial records and payment cards information covering GLBA and PCI DSS scope.

This section contains the full list of built-in taxonomies supported by Netwrix Data Classification.

**NOTE:** Netwrix Data Classification users can see only the taxonomies they have permissions to
use. See the
[User Management](/docs/dataclassification/5.6.2/systemconfigurationoverview/users/user_management.md) section
for more information on users' permissions.

## Core Taxonomies

### Financial Records

- ABA routing numbers
- IBAN/SWIFT codes
- Bank account numbers

### Personally Identifiable Information (PII)

- Personal information (full name, home address, date of birth) in the following languages:
    - Danish
    - Dutch
    - English
    - French
    - German
    - Greek
    - Icelandic
    - Italian
    - Slovenian
    - Spanish
    - Swedish
- National IDs, passport numbers, driver licenses, taxpayer IDs, etc. for the following countries
  (coverage varies):
    - Australia
    - Belgium
    - Brazil
    - Bulgaria
    - Canada
    - Croatia
    - Cyprus
    - Czech Republic
    - Denmark
    - Estonia
    - Finland
    - France
    - Germany
    - Greece
    - Hong Kong
    - Hungary
    - Iceland
    - India
    - Ireland
    - Italy
    - Latvia
    - Lithuania
    - Luxemburg
    - Malta
    - Netherlands
    - Norway
    - Poland
    - Portugal
    - Romania
    - Russia
    - Singapore
    - Slovakia
    - Slovenia
    - South Africa
    - Spain
    - Sweden
    - United Kingdom
    - USA

### Payment Card Industry Data Security Standard (PCI DSS)

Cardholder data (holder name, card number, expiration and security code) for the major payment
systems:

- American Express
- Diners Club
- Discover
- JCB
- Mastercard
- UnionPay
- Visa

### Patient Health Information (PHI)
Medical forms, treatment records, prescription drugs, decease names/codes, allergies, social and
insurance numbers.

## Derived Taxonomies

### General Data Protection Regulation (GDPR)

A subset of the PII taxonomy relating to the personal information of EU residents:

- Austria
- Belgium
- Bulgaria
- Croatis
- Czech Republic
- Denmark
- Estonia
- Finland
- France
- Germany
- Greece
- Hungary
- Ireland
- Italy
- Latvia
- Lithuania
- Luxemburg
- Malta
- Netherlands
- Poland
- Portugal
- Romania
- Russia
- Slovakia
- Slovenia
- Spain
- Sweden
- United Kingdom

- Austria
- Belgium
- Bulgaria
- Croatis
- Czech Republic
- Denmark
- Estonia
- Finland
- France
- Germany
- Greece
- Hungary
- Ireland
- Italy
- Latvia
- Lithuania
- Luxemburg
- Malta
- Netherlands
- Poland
- Portugal
- Romania
- Russia
- Slovakia
- Slovenia
- Spain
- Sweden
- United Kingdom

### GDPR Restricted

Personal data (same as in PII) accompanied by the following special categories of personal
information (GDPR Article 9):

- Ethnicity
- Political views
- Religious beliefs

### Gramm-Leach-Bliley Act (GLBA)

Combines the Financial Records, PCI DSS and PII (US social security numbers) taxonomies.

### Health Insurance Portability and Accountability Act (HIPAA)

Combines the PHI and PII (US social security numbers) taxonomies.

## Sensitive and Non-Sensitive Taxonomies

While creating your own reports, you can specify whether a taxonomy is sensitive (finance,
сredentials) or non-sensitive (file size, language).

**NOTE:** This applies only to customized taxonomies, which you add by yourself. You cannot change
the sensitivity settings for the pre-defined taxonomies.

To specify sensitive taxonomy:

1. Add a new taxonomy. See the
   [Add a Taxonomy](/docs/dataclassification/5.6.2/contentconfigurationoverview/taxonomiesintro/taxonomy_add.md) article
   for details.
2. Navigate to Taxonomies →Global Settings → Edit. The **Edit** panel displays.
3. Select Sensitive Taxonomy.

    ![standalonetaxonomies_sensitive](/images/dataclassification/5.6.2/taxonomies/standalonetaxonomies_sensitive.webp)

4. Select **Save**.

To view the results of the classification and generate sensitivity reports, go to Analysis→ Reports
→ Classification Reports→ Sensitive Documents. See the
[Classification Reports](/docs/dataclassification/5.6.2/dataanalysisoverview/reportingintro/reportingbuiltin/classification_reports.md)article
for details.
