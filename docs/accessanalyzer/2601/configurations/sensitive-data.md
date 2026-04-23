---
title: "Sensitive Data"
description: "Configure sensitive data scanning settings in Access Analyzer"
sidebar_position: 30
---

# Sensitive Data

The Sensitive Data configuration page defines which types of sensitive content Access Analyzer identifies during scans, whether to run optical character recognition (OCR) on images, and how Microsoft Information Protection (MIP) sensitivity labels are applied to matching files. These settings apply globally and serve as the default for all sensitive data scans.

Navigate to **Configuration** > **Sensitive Data** to view and update the configuration.

The page has two sections:

- **Microsoft Information Protection (MIP) Configuration** — connects an Entra ID tenant so Access Analyzer can retrieve your organization's MIP sensitivity labels.
- **Sensitive Data Types** — controls which data types are active for scanning and optionally maps each type to a MIP label.

## MIP configuration

The MIP configuration section connects Access Analyzer to a Microsoft Entra ID tenant. When a tenant is connected, Access Analyzer retrieves the sensitivity labels defined in your organization's MIP policy and makes them available for mapping in the Sensitive Data Types table.

### Select a tenant

1. In the **Tenant ID** dropdown, select the Entra ID source that represents the tenant whose MIP labels you want to use.
2. Click **Save Configuration**.

The dropdown lists Entra ID source groups that have completed at least one **Users, Groups and Roles** scan. If the dropdown is empty, either no Entra ID source group exists or the scan has not run yet. Run the scan first, then return to this page to select the tenant.

After you select a tenant, Access Analyzer retrieves the associated MIP labels. The status bar below the dropdown shows:

| Indicator | Meaning |
| --- | --- |
| Labels loaded count | The number of MIP labels retrieved from the selected tenant. |
| Invalid mappings count | The number of data types whose previously saved label no longer exists in MIP. |
| Last synced time | How long ago the labels were last synchronized from Entra ID. |

MIP labels sync automatically from Entra ID at regular intervals. If a label is removed from MIP after you save a mapping, the **MIP Label** column shows the old label name with a warning indicator, and the **Status** column shows **Label Missing**. Update or clear those mappings before saving.

:::note
The label selector and status badges in the Sensitive Data Types table are disabled until you select a tenant and labels finish loading.
:::

## Sensitive data types

The Sensitive Data Types table lists all data types that Access Analyzer can detect. Enable a data type to include it in sensitive data scans. If MIP labels are available, you can also map each data type to a specific label so Access Analyzer applies that label to files that match the data type.

### Data types

| Data Type | Description | Includes |
| --- | --- | --- |
| **CCPA** | California Consumer Privacy Act | Social Security numbers, driver's licenses, payment card data, email addresses, IP addresses, personal identifiers for California and Canadian residents |
| **CMMC** | Cybersecurity Maturity Model Certification | Controlled Unclassified Information (CUI) markings, DoD distribution statements (B–F), export control warning labels |
| **Credentials** | Passwords, API keys, and authentication secrets | Private keys (RSA, DSA, EC), passwords, AWS, Azure, and Google Cloud connection strings, PGP key blocks, Kerberos tickets, Slack tokens, SSH authorized keys |
| **Financial Records** | Banking and financial account data | ABA routing numbers, IBAN, SWIFT codes, US bank account numbers |
| **GDPR** | General Data Protection Regulation | National IDs, passports, driver's licenses, and personal identifiers for EU and EEA member states (30 countries including Austria, France, Germany, Italy, Spain, and others) |
| **GDPR Restricted** | Special categories of personal data under GDPR | Health data, political opinions, racial or ethnic origin, religious beliefs, sexual orientation, trade union membership |
| **GLBA** | Gramm-Leach-Bliley Act | Payment card numbers, cardholder names, expiration dates, security codes (Visa, Mastercard, AMEX, Discover, and others), ABA routing numbers, Social Security numbers |
| **HIPAA** | Health Insurance Portability and Accountability Act | ICD-10 diagnosis codes, prescription drug names, medical record numbers, national drug codes, Medicare numbers, Social Security numbers, patient identifiers |
| **PCI DSS** | Payment Card Industry Data Security Standard | Payment card numbers, cardholder names, expiration dates, security codes (Visa, Mastercard, AMEX, Diners Club, Discover, JCB, UnionPay) |
| **PHI** | Protected Health Information | ICD-10 codes, prescription drug names, medical record numbers, country-specific healthcare IDs for 20+ countries including UK NHS numbers, Australian Medicare numbers, and EU health insurance identifiers |
| **PII** | Personally Identifiable Information | Social Security numbers, passports, driver's licenses, full names, dates of birth, home addresses, and national identity documents for 60+ countries |

### Table columns

| Column | Description |
| --- | --- |
| Checkbox | Enables or disables the data type for scanning. Select the header checkbox to enable or disable all types at once. |
| **Data Type** | The name of the sensitive data type. |
| **Description** | A short description of what the data type covers. |
| **MIP Label** | The MIP sensitivity label to apply when the data type is detected. Select a label from the dropdown, or select **— No Label —** to detect the data type without applying a label. Available only when a tenant is connected and labels are loaded. |
| **Status** | Reflects the current mapping state for the row. |

### Status values

| Status | Color | Meaning |
| --- | --- | --- |
| **No MIP Label** | Gray | No tenant is connected, or labels haven't loaded. No label can be assigned. |
| **Unmapped** | Yellow | A tenant is connected and labels are loaded, but no label is assigned to this data type. |
| **Mapped** | Green | A label is assigned and present in the connected tenant. |
| **Label Missing** | Red | A label was previously assigned but no longer exists in MIP. Update or clear the mapping. |

### Enable data types

1. In the Sensitive Data Types table, select the checkbox next to each data type you want to activate.
   - To activate all data types at once, select the checkbox in the table header.
   - To deactivate all data types at once, clear the header checkbox when all types are selected.
2. Click **Save Configuration**.

### Assign MIP labels

You can assign a MIP label to each enabled data type. When Access Analyzer finds a file that matches a data type, it applies the mapped label to that file according to the label handling behavior settings.

1. Connect a tenant in the MIP Configuration section and wait for labels to load.
2. In the **MIP Label** column for a data type, select a label from the dropdown.
   - Labels are grouped into **Default Labels** (Personal, Public, General, Confidential) and **Custom Labels** (labels specific to your organization).
   - Select **— No Label —** to detect the data type without applying a label.
3. Repeat for each data type you want to map.
4. Click **Save Configuration**.

:::note
Enabling a data type and assigning a label are independent. A data type with no label assigned is still detected during scans — Access Analyzer identifies matching files but doesn't apply a MIP label to them.
:::

## OCR

The **Run OCR to improve classification of images** option enables optical character recognition during scans. When enabled, Access Analyzer extracts text from images, screenshots, and scanned documents and applies the same classification rules to that text.

Enabling OCR increases scan processing time.

1. Select or clear the **Run OCR to improve classification of images** checkbox.
2. Click **Save Configuration**.

## Label handling behavior

The **Label Settings** drawer controls whether Access Analyzer writes MIP sensitivity labels back to files during sensitive data scans, and how it handles files that already carry a label. To open it, click **Label Settings** in the upper-right corner of the Sensitive Data Types card.

These settings apply globally and can be overridden per-scan in the scan configuration.

:::note
Label write-back applies to **File Server and SharePoint Online sensitive data scans only**. Entra ID and Active Directory scans do not support label application.
:::

:::note
Label write-back only occurs when **both** conditions are met: a MIP label is mapped to the detected data type in the Sensitive Data Types table, **and** the relevant option below is enabled. All options are off by default — by default, Access Analyzer detects and classifies files but does not write any labels to files.
:::

### Options

**Clear label if no longer sensitive**
When enabled, Access Analyzer removes the MIP label from a file if a subsequent scan finds the file no longer matches any enabled sensitive data type. Off by default.

**Allow overwriting existing labels**
When enabled, Access Analyzer applies the mapped label to files that already have a MIP label assigned. When disabled, files that already carry any MIP label are skipped — only unlabeled files receive a label. Off by default.

- **Allow downgrading labels** *(requires Allow overwriting existing labels to be on)*
  When enabled, Access Analyzer can replace a higher-priority label with a lower-priority one (for example, replacing "Confidential" with "General"). When disabled, only upgrades or equal-priority replacements are applied. This option is unavailable when **Allow overwriting existing labels** is off. Off by default.

To configure label handling:

1. Click **Label Settings**.
2. Select or clear the options as needed.
3. Click **Done** to close the drawer.
4. Click **Save Configuration** to apply all pending changes.

## Save and cancel

The **Save Configuration** and **Cancel** buttons are inactive until you make a change.

- **Save Configuration** — saves all pending changes, including data type selections, MIP label mappings, the OCR setting, and label handling behavior.
- **Cancel** — discards all pending changes and restores the form to the last saved state.

:::note
If you navigate away from the page with unsaved changes, Access Analyzer displays a confirmation dialog before leaving.
:::
