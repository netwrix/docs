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

:::note
Netwrix Data Classification users can see only the taxonomies they have permissions to
use. See the [User Management](/docs/dataclassification/5.7/systemconfigurationoverview/users/usermanagement.md) section for more information on
users' permissions.
:::


## Core Taxonomies

##### Financial Records

- ABA routing numbers
- IBAN/SWIFT codes
- Bank account numbers

##### Personally Identifiable Information (PII)

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
- National IDs, passport numbers, driver licenses, taxpayer IDs, etc. for the following countries:
    - Australia
    - Austria
    - Belgium
    - Brazil
    - Bulgaria
    - Canada
    - Croatia
    - Cyprus
    - Czech Republic and Slovakia
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
    - Slovenia
    - South Africa
    - Spain
    - Sweden
    - United Kingdom
    - USA

##### Payment Card Industry Data Security Standard (PCI DSS)

Cardholder data (holder name, card number, expiration and security code) for the major payment
systems:

- American Express
- Diners Club
- Discover
- JCB
- Mastercard
- UnionPay
- Visa

##### Patient Health Information (PHI)

Medical forms, treatment records, prescription drugs, decease names/codes, allergies, social and
insurance numbers.

## Derived Taxonomies

##### General Data Protection Regulation (GDPR)

A subset of the PII taxonomy relating to the personal information of EU residents:

- Austria
- Belgium
- Bulgaria
- Croatia
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
- The Netherlands
- Poland
- Portugal
- Romania
- Slovakia
- Slovenia
- Spain
- Sweden
- United Kingdom

##### GDPR Restricted

Personal data (same as in PII) accompanied by the following special categories of personal
information (GDPR Article 9):

- Ethnicity
- Political views
- Religious beliefs

##### Gramm-Leach-Bliley Act (GLBA)

Combines the Financial Records, PCI DSS and PII (US social security numbers) taxonomies.

##### Health Insurance Portability and Accountability Act (HIPAA)

Combines the PHI and PII (US social security numbers) taxonomies.

##### Credentials

Includes sensitive credentials data, such as tokens, private or public keys, passwords, generic
certificates, and others.

##### Cybersecurity Maturity Model Certification (CMMC)

Includes data provided within the cybersecurity framework, such as password requirements,
encryption, applying labels, and other security policies.

##### California Consumer Protection Act (CCPA)

Includes personal and security information (identity, geolocation, biometric data), necessary for
consumers and businesses.

## Sensitive and Non-Sensitive Taxonomies

While creating your own reports, you can specify whether a taxonomy is sensitive (finance,
сredentials) or non-sensitive (file size, language).

:::note
This applies only to customized taxonomies, which you add by yourself. You cannot change
the sensitivity settings for the pre-defined taxonomies.
:::


Follow the steps to specify sensitive taxonomy.

**Step 1 –** Add a new taxonomy. See the [Add a Taxonomy](/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/add.md) topic for additional information.

**Step 2 –** Navigate to Taxonomies > Global Settings > Edit. The **Edit** panel displays.

**Step 3 –** Select Sensitive Taxonomy.

![standalonetaxonomies_sensitive](/images/dataclassification/5.7/admin/taxonomies/standalonetaxonomies_sensitive.webp)

**Step 4 –** Click **Save**.

To view the results of the classification and generate sensitivity reports, go to Analysis >
Reports > Classification Reports > Sensitive Documents. See the
[Classification Reports](/docs/dataclassification/5.7/dataanalysisoverview/reportingintroduction/builtinreportsreview/classificationreports.md) topic for additional information.
