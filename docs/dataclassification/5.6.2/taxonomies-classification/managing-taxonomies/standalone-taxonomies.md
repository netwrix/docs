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
[User Management](/docs/dataclassification/5.6.2/security-administration/user-management/users-roles.md) section
for more information on users' permissions.

## Core Taxonomies

[<!-- Image removed: transparent.gif not found -->Financial Records](<javascript:void(0)>)

- ABA routing numbers
- IBAN/SWIFT codes
- Bank account numbers

[<!-- Image removed: transparent.gif not found -->Personally Identifiable Information (PII)](<javascript:void(0)>)

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

[<!-- Image removed: transparent.gif not found -->Payment Card Industry Data Security Standard (PCI DSS)](<javascript:void(0)>)

Cardholder data (holder name, card number, expiration and security code) for the major payment
systems:

- American Express
- Diners Club
- Discover
- JCB
- Mastercard
- UnionPay
- Visa

[<!-- Image removed: transparent.gif not found -->Patient Health Information (PHI)](<javascript:void(0)>)

Medical forms, treatment records, prescription drugs, decease names/codes, allergies, social and
insurance numbers.

## Derived Taxonomies

[<!-- Image removed: transparent.gif not found -->General Data Protection Regulation (GDPR)](<javascript:void(0)>)

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

[<!-- Image removed: transparent.gif not found -->GDPR Restricted](<javascript:void(0)>)

Personal data (same as in PII) accompanied by the following special categories of personal
information (GDPR Article 9):

- Ethnicity
- Political views
- Religious beliefs

[<!-- Image removed: transparent.gif not found -->Gramm-Leach-Bliley Act (GLBA)](<javascript:void(0)>)

Combines the Financial Records, PCI DSS and PII (US social security numbers) taxonomies.

[<!-- Image removed: transparent.gif not found -->Health Insurance Portability and Accountability Act (HIPAA)](<javascript:void(0)>)

Combines the PHI and PII (US social security numbers) taxonomies.

## Sensitive and Non-Sensitive Taxonomies

While creating your own reports, you can specify whether a taxonomy is sensitive (finance,
сredentials) or non-sensitive (file size, language).

**NOTE:** This applies only to customized taxonomies, which you add by yourself. You cannot change
the sensitivity settings for the pre-defined taxonomies.

To specify sensitive taxonomy:

1. Add a new taxonomy. See the
   [Add a Taxonomy](/docs/dataclassification/5.6.2/taxonomies-classification/managing-taxonomies/create-taxonomies.md) article
   for details.
2. Navigate to Taxonomies →Global Settings → Edit. The **Edit** panel displays.
3. Select Sensitive Taxonomy.

   ![standalonetaxonomies_sensitive](/img/versioned_docs/dataclassification_5.6.2/ndc/taxonomies/standalonetaxonomies_sensitive.webp)

4. Select **Save**.

To view the results of the classification and generate sensitivity reports, go to Analysis→ Reports
→ Classification Reports→ Sensitive Documents. See the
[Classification Reports](/docs/dataclassification/5.6.2/reporting-analytics/reports/classification-reports.md)article
for details.
