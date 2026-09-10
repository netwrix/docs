---
title: Built-in Patterns
description: The 139 sensitive data patterns that ship with Access Analyzer, listed by pattern group with their confidence levels.
sidebar_position: 1
---

Access Analyzer ships 139 built-in sensitive data patterns organized into 11 built-in groups. Both the patterns and the groups carry a **Built-in** badge on the **Sensitive Data Patterns** page. Of the 139 patterns, 79 are High confidence, 48 are Medium, and 12 are Low.

Built-in patterns are read-only. You can't edit or delete them, and you can't add a built-in pattern to a group or remove it from one. On the **Sensitive Data Patterns** page, the **Regex / Description** column shows what each built-in pattern detects rather than its regular expression. You can add your own [custom patterns](custom-patterns.md) to any built-in group.

## Built-in Groups

| Group | Patterns | Description |
|---|---|---|
| **CCPA** | 4 | California Consumer Privacy Act personal information. |
| **CMMC** | 27 | Cybersecurity Maturity Model Certification controlled data and credentials. |
| **GDPR** | 44 | EU General Data Protection Regulation personal data. |
| **GDPR Restricted** | 29 | GDPR special-category (Article 9) data requiring heightened protection. |
| **GLBA** | 12 | Gramm-Leach-Bliley Act non-public personal financial information. |
| **HIPAA** | 5 | Health Insurance Portability and Accountability Act protected health information. |
| **PCI DSS** | 3 | Payment Card Industry Data Security Standard cardholder data. |
| **Credentials** | 25 | Cloud keys, API tokens, private keys, passwords, and other secrets. |
| **Financial Records** | 38 | Bank account, routing, and tax identifiers. |
| **PHI** | 5 | Protected health information: medical codes, terms, and treatment records. |
| **PII** | 34 | Personally identifiable information: names, IDs, contact details, and dates. |

Many patterns belong to more than one group: 85 of the 139 do. **US SSN** (US Social Security number), for example, is in **GLBA**, **HIPAA**, and **PII**. Every pattern in **Credentials** is also in **CMMC**. A scan selects groups rather than individual patterns, so Access Analyzer reports a pattern's matches whenever you pick any group it belongs to. [Pattern groups](pattern-groups.md) explains how that selection works.

## Patterns by Group

Expand a group to see its patterns in alphabetical order, each with its confidence level and the text from the **Regex / Description** column.

### CCPA

**CCPA** holds four consumer-identity patterns: a driver's license number, an email address, a phone number, and a US street address. All four also belong to **PII**.

<details>
<summary>CCPA patterns (4)</summary>

| Pattern | Confidence | Description |
|---|---|---|
| Driver's license | Medium | Driver's license numbers, identified by a nearby driver's-license or DL-number label. |
| Email address | Medium | Email addresses in standard local-part@domain format. |
| Phone number | Low | Telephone numbers in US, UK, and general international dialing formats. |
| US address | High | US street addresses, matched by house number, street name, and a standard street-type suffix (St, Ave, Blvd, Rd, and similar). |

</details>

### CMMC

**CMMC** contains every **Credentials** pattern plus two for International Traffic in Arms Regulations (ITAR) export-control terms and restricted-party names.

<details>
<summary>CMMC patterns (27)</summary>

| Pattern | Confidence | Description |
|---|---|---|
| Amazon MWS Auth Token | High | Amazon Marketplace Web Service (MWS) authorization tokens, identified by their fixed amzn.mws. prefix. |
| AWS Access Key ID | High | AWS access key IDs embedded in code, configuration files, or connection strings, identified by AWS's fixed access-key-ID prefix. |
| AWS Account ID | Low | AWS account ID numbers, identified by a nearby aws_account_id-style label. |
| AWS Secret Access Key | Medium | AWS secret access keys — a bare 40-character base64-style secret — identified by a nearby aws_secret_access_key label. |
| AWS Session Token | Medium | AWS temporary session tokens, identified by a nearby aws_session_token-style label. |
| Azure Cosmos DB (DocumentDB) Auth Key | High | Azure Cosmos DB (DocumentDB) authorization keys, identified by a nearby DocumentDb label and their fixed base64 length. |
| Azure SAS Token | High | Azure Shared Access Signature (SAS) tokens, identified by their versioned sv=20YY-MM-DD query-string prefix. |
| Azure Storage Account Key | High | Azure Storage account keys embedded in code or connection strings, identified by their fixed base64 length. |
| Credentials | High | A broad set of application secrets and credentials — labeled API keys and tokens, JWTs, and vendor-specific tokens for GitHub, npm, SendGrid, Stripe, and Twilio — identified by their distinctive fixed-format prefixes or by a nearby secret/token label. |
| Credentials Embedded in URI | Medium | Usernames and passwords embedded directly in a URI, such as an FTP or database connection URL, identified by the scheme://user:pass@host structure. |
| Database Connection String | High | Database connection strings with an embedded password, identified by their Server=...;Password=... key-value format. |
| Generic Private Key | High | Private key material in PEM format, identified by the standard '-----BEGIN ... PRIVATE KEY-----' header. |
| Google Cloud API Key | High | Google Cloud API keys, identified by their fixed 'AIza' prefix. |
| Google Cloud OAuth Access Token | Medium | Google Cloud OAuth access tokens, identified by their fixed 'ya29.' prefix. |
| Google Cloud Service Account Key | High | Google Cloud service-account key files, identified by the JSON private_key_id field they contain. |
| ITAR Controlled Munitions List Terms | Low | Terms from the ITAR Controlled Munitions List nomenclature, identified alongside nearby export-control context. |
| ITAR Restricted Party / Denied Persons Match | Low | Names appearing on ITAR restricted-party/denied-persons lists, identified alongside nearby export-control context. |
| Kerberos Ticket File (krbtgt .kirbi) | High | Exported Kerberos golden/silver ticket files, identified by the krbtgt filename fragment and .kirbi extension. |
| Password | Medium | Passwords appearing in configuration files, connection strings, and markup, identified by a nearby password label. |
| PEM certificate block | High | X.509 certificates in PEM format, identified by the standard '-----BEGIN CERTIFICATE-----' header. |
| PEM public key block | High | Public key material in PEM format, identified by the standard '-----BEGIN ... PUBLIC KEY-----' header. |
| PGP Key Block | High | PGP public and private key blocks, identified by their standard '-----BEGIN PGP ... KEY BLOCK-----' delimiters. |
| PKCS#7/P7B Certificate Block | High | PKCS#7/P7B certificate blocks, identified by the standard '-----BEGIN PKCS7-----' header. |
| Slack Token | High | Slack API tokens, identified by Slack's fixed token prefix. |
| Slack Webhook URL | High | Slack incoming-webhook URLs, identified by their fixed hooks.slack.com format. |
| SSH Authorized Keys | High | SSH public keys as they appear in authorized_keys files and key listings, identified by their key-type prefix and encoded key body. |
| UNIX /etc/passwd file exposure | Medium | Exposed UNIX /etc/passwd-style colon-delimited user records. |

</details>

### GDPR

**GDPR** is the largest group, with 44 patterns. Most are national identifiers, social security and tax numbers, and passports for EU and other European countries. The rest are European street addresses, UK postcodes, email addresses, IP addresses, and dates of birth.

<details>
<summary>GDPR patterns (44)</summary>

| Pattern | Confidence | Description |
|---|---|---|
| Austrian National ID | Medium | Austrian national population-register identifiers (sourcePIN/ZMR), identified by a nearby sourcePIN, ZMR, or ccr-ID label. |
| Austrian Social Security Number (SSN) | Medium | Austrian social security numbers, identified by a nearby ASVG or Sozialversicherungsgesetz label. |
| Belgian National ID (BSN) | High | Belgian national register numbers in dash-grouped form, identified by a nearby BEID/EID label and validated against the Belgian national register mod-97 checksum. |
| Belgian National Register Number (Rijksregisternummer) | Medium | Belgian national register numbers (Rijksregisternummer) in dot-grouped, birth-date-anchored form, identified by a nearby SIS or Rijksregisternummer label. |
| Bulgarian EGN | Medium | Bulgarian EGN (uniform civil number) identifiers, identified by a nearby EGN label. |
| Czech Birth Number (Rodné číslo) | Medium | Czech birth numbers (Rodné číslo), identified by a nearby Rodné číslo or RČ label. |
| Czech National ID (Občanský průkaz) | Medium | Czech national identity card numbers (Občanský průkaz), identified by a nearby ČOP or identification-card label. |
| Czech Passport Number | Low | Czech passport numbers, identified by a nearby passport or Cestovní pas label. |
| Danish National ID (CPR number) | Medium | Danish CPR (personal identification) numbers, identified by a nearby CPR or personnummer label. |
| Date of birth | Medium | Dates of birth, identified by a nearby date-of-birth, DOB, or 'born on' label. |
| Dutch BSN (Burgerservicenummer) | Low | Dutch citizen service numbers (BSN), identified by a nearby BSN/Burgerservicenummer/sofinummer label; the format carries no checksum here, so this stays a lower-confidence signal. |
| Email address | Medium | Email addresses in standard local-part@domain format. |
| Estonian National ID | Medium | Estonian personal identification codes (isikukood), identified by a nearby IK or Isikukood label. |
| EU address | High | European street addresses in German- and French-style formats (e.g. a Straße/allee/platz name or a rue/avenue/boulevard name), matched by street name and house number. |
| Finnish Personal Identity Code (HETU) | Medium | Finnish personal identity codes (HETU), identified by a nearby HETU or henkilötunnus label. |
| French National ID Card (CNI) | Low | French national identity card (CNI) numbers, identified by a nearby carte d'identité or identification-nationale label. |
| French NIR | High | French social security (INSEE/NIR) numbers, identified by a nearby 'numéro de sécurité sociale' or INSEE label and validated against the NIR check-digit algorithm. |
| French tax identification number (SPI/SID) | Medium | French tax identification numbers (SPI/SID), identified by a nearby SID or numéro d'identification fiscale label. |
| German national ID card number (Personalausweis) | Medium | German national identity card numbers (Personalausweis), identified by a nearby Personalausweis or Ausweis label. |
| German passport number | Medium | German passport numbers, identified by a nearby Reisepass or Ausweisnummer label. |
| German SSN | Medium | German social security numbers, identified by a nearby Sozialversicherungsnummer, VSNR, or RVNR label. |
| German tax ID | High | German tax identification numbers (Steuer-ID), identified by a nearby Steueridentifikationsnummer or tax-ID label and validated against the German tax-ID check-digit algorithm. |
| Greek National ID | Medium | Greek national identity card numbers, identified by a nearby tautotita label. |
| Hungarian National ID | Medium | Hungarian national identity card numbers, identified by a nearby személyigazolvány szám label. |
| Hungarian Personal ID | Medium | Hungarian personal identification numbers, identified by a nearby Szám/Személyi szám label, distinct from the Hungarian national ID card and TAJ social-insurance number. |
| Hungarian TAJ (Social Insurance) Number | Medium | Hungarian TAJ social insurance numbers, identified by a nearby TAJ or társadalombiztosítási szám label. |
| IPv4 Address | Low | IPv4 addresses in standard dotted-decimal notation. |
| IPv6 Address | Medium | IPv6 addresses in full 8-group hexadecimal-colon notation. |
| Irish PPS Number | Medium | Irish Personal Public Service (PPS) numbers, identified by a nearby PPS label. |
| Italian Codice Fiscale | High | Italian Codice Fiscale (tax code) numbers, identified by a nearby codice fiscale or Italian fiscal-code label and validated against the Codice Fiscale check-character algorithm. |
| Latvian Personal Code (Personas kods) | Medium | Latvian personal codes (Personas kods), identified by a nearby PK/Personas kods label. |
| Lithuanian Personal Code (Asmens kodas) | Medium | Lithuanian personal codes (Asmens kodas), identified by a nearby AK/Asmens kodas label. |
| Norwegian National ID (Fødselsnummer) | Medium | Norwegian national identity numbers (Fødselsnummer), identified by a nearby fødselsnummer/fn label. |
| Polish NIP (Tax ID) | High | Polish NIP tax identification numbers, identified by a nearby NIP label and validated against the NIP weighted mod-11 checksum. |
| Polish PESEL (National ID) | High | Polish PESEL national identification numbers, identified by a nearby PESEL label and validated against the PESEL weighted mod-10 checksum. |
| Romanian CNP (Personal Numeric Code) | High | Romanian personal numeric codes (CNP), identified by a nearby CNP/Cod Numeric Personal label and validated against the CNP weighted mod-11 checksum. |
| Slovak Passport Number | Medium | Slovak passport numbers, identified by a nearby passport or Cestovný pas label. |
| Spain Passport | Medium | Spanish passport numbers, identified by a nearby Pasaporte label. |
| Spain Social Security Number (NUSS) | Medium | Spanish social security numbers (NUSS), identified by a nearby número de seguridad social label. |
| Spanish DNI/NIE | High | Spanish national identity numbers (DNI/NIE), identified by a nearby DNI/NIE label and validated against the Spanish ID check-letter algorithm. |
| Swedish Personal ID Number (Personnummer) | Medium | Swedish personal identity numbers (Personnummer), identified by a nearby Personnr/personnummer label. |
| UK NHS Number | High | UK NHS numbers, identified by a nearby NHS label and validated against the NHS number's modulus-11 check digit. |
| UK NINO | High | UK National Insurance numbers, validated against National Insurance number prefix and format rules. |
| UK postcode | High | UK postal codes, identified either by a nearby postcode or address label, or on their own when they match standard UK postcode formatting rules. |

</details>

### GDPR Restricted

**GDPR Restricted** is the subset of **GDPR** that covers national identity, social security, and tax identifiers.

<details>
<summary>GDPR Restricted patterns (29)</summary>

| Pattern | Confidence | Description |
|---|---|---|
| Austrian National ID | Medium | Austrian national population-register identifiers (sourcePIN/ZMR), identified by a nearby sourcePIN, ZMR, or ccr-ID label. |
| Austrian Social Security Number (SSN) | Medium | Austrian social security numbers, identified by a nearby ASVG or Sozialversicherungsgesetz label. |
| Belgian National ID (BSN) | High | Belgian national register numbers in dash-grouped form, identified by a nearby BEID/EID label and validated against the Belgian national register mod-97 checksum. |
| Belgian National Register Number (Rijksregisternummer) | Medium | Belgian national register numbers (Rijksregisternummer) in dot-grouped, birth-date-anchored form, identified by a nearby SIS or Rijksregisternummer label. |
| Bulgarian EGN | Medium | Bulgarian EGN (uniform civil number) identifiers, identified by a nearby EGN label. |
| Czech Birth Number (Rodné číslo) | Medium | Czech birth numbers (Rodné číslo), identified by a nearby Rodné číslo or RČ label. |
| Danish National ID (CPR number) | Medium | Danish CPR (personal identification) numbers, identified by a nearby CPR or personnummer label. |
| Dutch BSN (Burgerservicenummer) | Low | Dutch citizen service numbers (BSN), identified by a nearby BSN/Burgerservicenummer/sofinummer label; the format carries no checksum here, so this stays a lower-confidence signal. |
| Estonian National ID | Medium | Estonian personal identification codes (isikukood), identified by a nearby IK or Isikukood label. |
| Finnish Personal Identity Code (HETU) | Medium | Finnish personal identity codes (HETU), identified by a nearby HETU or henkilötunnus label. |
| French National ID Card (CNI) | Low | French national identity card (CNI) numbers, identified by a nearby carte d'identité or identification-nationale label. |
| French NIR | High | French social security (INSEE/NIR) numbers, identified by a nearby 'numéro de sécurité sociale' or INSEE label and validated against the NIR check-digit algorithm. |
| French tax identification number (SPI/SID) | Medium | French tax identification numbers (SPI/SID), identified by a nearby SID or numéro d'identification fiscale label. |
| German SSN | Medium | German social security numbers, identified by a nearby Sozialversicherungsnummer, VSNR, or RVNR label. |
| German tax ID | High | German tax identification numbers (Steuer-ID), identified by a nearby Steueridentifikationsnummer or tax-ID label and validated against the German tax-ID check-digit algorithm. |
| Greek National ID | Medium | Greek national identity card numbers, identified by a nearby tautotita label. |
| Hungarian Personal ID | Medium | Hungarian personal identification numbers, identified by a nearby Szám/Személyi szám label, distinct from the Hungarian national ID card and TAJ social-insurance number. |
| Hungarian TAJ (Social Insurance) Number | Medium | Hungarian TAJ social insurance numbers, identified by a nearby TAJ or társadalombiztosítási szám label. |
| Irish PPS Number | Medium | Irish Personal Public Service (PPS) numbers, identified by a nearby PPS label. |
| Italian Codice Fiscale | High | Italian Codice Fiscale (tax code) numbers, identified by a nearby codice fiscale or Italian fiscal-code label and validated against the Codice Fiscale check-character algorithm. |
| Latvian Personal Code (Personas kods) | Medium | Latvian personal codes (Personas kods), identified by a nearby PK/Personas kods label. |
| Lithuanian Personal Code (Asmens kodas) | Medium | Lithuanian personal codes (Asmens kodas), identified by a nearby AK/Asmens kodas label. |
| Norwegian National ID (Fødselsnummer) | Medium | Norwegian national identity numbers (Fødselsnummer), identified by a nearby fødselsnummer/fn label. |
| Polish NIP (Tax ID) | High | Polish NIP tax identification numbers, identified by a nearby NIP label and validated against the NIP weighted mod-11 checksum. |
| Polish PESEL (National ID) | High | Polish PESEL national identification numbers, identified by a nearby PESEL label and validated against the PESEL weighted mod-10 checksum. |
| Romanian CNP (Personal Numeric Code) | High | Romanian personal numeric codes (CNP), identified by a nearby CNP/Cod Numeric Personal label and validated against the CNP weighted mod-11 checksum. |
| Spain Social Security Number (NUSS) | Medium | Spanish social security numbers (NUSS), identified by a nearby número de seguridad social label. |
| Spanish DNI/NIE | High | Spanish national identity numbers (DNI/NIE), identified by a nearby DNI/NIE label and validated against the Spanish ID check-letter algorithm. |
| Swedish Personal ID Number (Personnummer) | Medium | Swedish personal identity numbers (Personnummer), identified by a nearby Personnr/personnummer label. |

</details>

### GLBA

**GLBA** groups payment card, bank, securities, and tax identifiers with financial-statement terms and the US Social Security number. It includes all three **PCI DSS** patterns.

<details>
<summary>GLBA patterns (12)</summary>

| Pattern | Confidence | Description |
|---|---|---|
| ABA routing number | High | US bank routing numbers, validated against the ABA routing-number checksum. |
| Credit Card Magnetic Stripe Track 1 | High | Raw ISO/IEC 7813 Track 1 magnetic-stripe dumps, matched by the %B sentinel and cardholder/expiry field structure. |
| Credit Card Magnetic Stripe Track 2 | Medium | Raw ISO/IEC 7813 Track 2 magnetic-stripe dumps, matched by the leading ';' sentinel and expiry-date field structure. |
| Credit Card Number | High | Payment card numbers for major brands, validated with the Luhn checksum. |
| CUSIP Number | High | US/Canada CUSIP securities identifiers, validated against the ANSI X9.6 modulus-10 check-digit algorithm. |
| Employer Identification Number (EIN) | Medium | US Employer Identification Numbers (EIN), identified by a nearby EIN or employer-identification label. |
| Financial Document Indicators | Low | Financial-statement terms (EBITDA, operating margin, net income, and similar) appearing together with a currency amount. |
| French VAT number | Medium | French VAT identification numbers, identified by a nearby TVA/VAT label. |
| German VAT | Medium | German VAT identification numbers, identified by a nearby Mehrwertsteuer/USt-Id/VAT label. |
| Spain VAT/CIF Number | Medium | Spanish VAT/CIF numbers, identified by a nearby IVA/VAT label and the mandatory ES country-code prefix. |
| US bank account number | Low | Bank account numbers, matched as a 7- to 14-digit sequence with no additional validation. |
| US SSN | High | US Social Security numbers in formatted or unformatted form, validated against Social Security Administration allocation rules. |

</details>

### HIPAA

**HIPAA** pairs medical billing codes and provider identifiers with the Medicare Beneficiary Identifier and the US Social Security number.

<details>
<summary>HIPAA patterns (5)</summary>

| Pattern | Confidence | Description |
|---|---|---|
| HCPCS Codes | Medium | Healthcare Common Procedure Coding System (HCPCS) billing codes, matched against the closed list of known codes. |
| Medical code | High | Medical billing and diagnostic codes — ICD-10 diagnosis codes, CPT procedure codes, and NDC drug codes — identified by a nearby diagnosis, procedure, or drug-code label. |
| Medicare Beneficiary Identifier (MBI) | Low | US Medicare Beneficiary Identifiers (MBI), identified by a nearby Medicare-beneficiary or MBI label; the format carries no public checksum, so this stays a lower-confidence signal. |
| Personal Identifier | High | National Provider Identifier (NPI) and DEA registration numbers for healthcare providers, identified by a nearby NPI or DEA label. |
| US SSN | High | US Social Security numbers in formatted or unformatted form, validated against Social Security Administration allocation rules. |

</details>

### PCI DSS

**PCI DSS** covers payment card numbers and raw magnetic-stripe data. All three patterns also belong to **GLBA**.

<details>
<summary>PCI DSS patterns (3)</summary>

| Pattern | Confidence | Description |
|---|---|---|
| Credit Card Magnetic Stripe Track 1 | High | Raw ISO/IEC 7813 Track 1 magnetic-stripe dumps, matched by the %B sentinel and cardholder/expiry field structure. |
| Credit Card Magnetic Stripe Track 2 | Medium | Raw ISO/IEC 7813 Track 2 magnetic-stripe dumps, matched by the leading ';' sentinel and expiry-date field structure. |
| Credit Card Number | High | Payment card numbers for major brands, validated with the Luhn checksum. |

</details>

### Credentials

The **Credentials** group targets cloud provider keys and tokens, private keys and certificates, passwords, connection strings, and chat-platform tokens. Every pattern here is also in **CMMC**.

<details>
<summary>Credentials patterns (25)</summary>

| Pattern | Confidence | Description |
|---|---|---|
| Amazon MWS Auth Token | High | Amazon Marketplace Web Service (MWS) authorization tokens, identified by their fixed amzn.mws. prefix. |
| AWS Access Key ID | High | AWS access key IDs embedded in code, configuration files, or connection strings, identified by AWS's fixed access-key-ID prefix. |
| AWS Account ID | Low | AWS account ID numbers, identified by a nearby aws_account_id-style label. |
| AWS Secret Access Key | Medium | AWS secret access keys — a bare 40-character base64-style secret — identified by a nearby aws_secret_access_key label. |
| AWS Session Token | Medium | AWS temporary session tokens, identified by a nearby aws_session_token-style label. |
| Azure Cosmos DB (DocumentDB) Auth Key | High | Azure Cosmos DB (DocumentDB) authorization keys, identified by a nearby DocumentDb label and their fixed base64 length. |
| Azure SAS Token | High | Azure Shared Access Signature (SAS) tokens, identified by their versioned sv=20YY-MM-DD query-string prefix. |
| Azure Storage Account Key | High | Azure Storage account keys embedded in code or connection strings, identified by their fixed base64 length. |
| Credentials | High | A broad set of application secrets and credentials — labeled API keys and tokens, JWTs, and vendor-specific tokens for GitHub, npm, SendGrid, Stripe, and Twilio — identified by their distinctive fixed-format prefixes or by a nearby secret/token label. |
| Credentials Embedded in URI | Medium | Usernames and passwords embedded directly in a URI, such as an FTP or database connection URL, identified by the scheme://user:pass@host structure. |
| Database Connection String | High | Database connection strings with an embedded password, identified by their Server=...;Password=... key-value format. |
| Generic Private Key | High | Private key material in PEM format, identified by the standard '-----BEGIN ... PRIVATE KEY-----' header. |
| Google Cloud API Key | High | Google Cloud API keys, identified by their fixed 'AIza' prefix. |
| Google Cloud OAuth Access Token | Medium | Google Cloud OAuth access tokens, identified by their fixed 'ya29.' prefix. |
| Google Cloud Service Account Key | High | Google Cloud service-account key files, identified by the JSON private_key_id field they contain. |
| Kerberos Ticket File (krbtgt .kirbi) | High | Exported Kerberos golden/silver ticket files, identified by the krbtgt filename fragment and .kirbi extension. |
| Password | Medium | Passwords appearing in configuration files, connection strings, and markup, identified by a nearby password label. |
| PEM certificate block | High | X.509 certificates in PEM format, identified by the standard '-----BEGIN CERTIFICATE-----' header. |
| PEM public key block | High | Public key material in PEM format, identified by the standard '-----BEGIN ... PUBLIC KEY-----' header. |
| PGP Key Block | High | PGP public and private key blocks, identified by their standard '-----BEGIN PGP ... KEY BLOCK-----' delimiters. |
| PKCS#7/P7B Certificate Block | High | PKCS#7/P7B certificate blocks, identified by the standard '-----BEGIN PKCS7-----' header. |
| Slack Token | High | Slack API tokens, identified by Slack's fixed token prefix. |
| Slack Webhook URL | High | Slack incoming-webhook URLs, identified by their fixed hooks.slack.com format. |
| SSH Authorized Keys | High | SSH public keys as they appear in authorized_keys files and key listings, identified by their key-type prefix and encoded key body. |
| UNIX /etc/passwd file exposure | Medium | Exposed UNIX /etc/passwd-style colon-delimited user records. |

</details>

### Financial Records

**Financial Records** centers on International Bank Account Numbers (IBANs): one generic IBAN pattern and one for each of 28 European countries. The other nine patterns are routing and bank account numbers, SWIFT/BIC bank identifier codes, securities identifiers, value-added tax (VAT) and employer identification numbers, and financial-statement terms.

<details>
<summary>Financial Records patterns (38)</summary>

| Pattern | Confidence | Description |
|---|---|---|
| ABA routing number | High | US bank routing numbers, validated against the ABA routing-number checksum. |
| Austrian IBAN | High | Austrian IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Belgian IBAN | High | Belgian IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Bulgarian IBAN | High | Bulgarian IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Croatian IBAN | High | Croatian IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| CUSIP Number | High | US/Canada CUSIP securities identifiers, validated against the ANSI X9.6 modulus-10 check-digit algorithm. |
| Cypriot IBAN | High | Cypriot IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Czech IBAN | High | Czech IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Danish IBAN | High | Danish IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Employer Identification Number (EIN) | Medium | US Employer Identification Numbers (EIN), identified by a nearby EIN or employer-identification label. |
| Estonian IBAN | High | Estonian IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Financial Document Indicators | Low | Financial-statement terms (EBITDA, operating margin, net income, and similar) appearing together with a currency amount. |
| Finnish IBAN | High | Finnish IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| French IBAN | High | French IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| French VAT number | Medium | French VAT identification numbers, identified by a nearby TVA/VAT label. |
| German IBAN | High | German IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| German VAT | Medium | German VAT identification numbers, identified by a nearby Mehrwertsteuer/USt-Id/VAT label. |
| Greek IBAN | High | Greek IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Hungarian IBAN | High | Hungarian IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| IBAN | High | International Bank Account Numbers, validated against the IBAN ISO 7064 check-digit algorithm. |
| Irish IBAN | High | Irish IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Italian IBAN | High | Italian IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Latvian IBAN | High | Latvian IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Lithuanian IBAN | High | Lithuanian IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Luxembourgian IBAN | High | Luxembourgish IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Maltan IBAN | High | Maltese IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Netherland IBAN | High | Dutch IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Polish IBAN | High | Polish IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Portuguese IBAN | High | Portuguese IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Romanian IBAN | High | Romanian IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Slovak IBAN | High | Slovak IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Slovenian IBAN | High | Slovenian IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Spain IBAN | High | Spanish IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| Spain VAT/CIF Number | Medium | Spanish VAT/CIF numbers, identified by a nearby IVA/VAT label and the mandatory ES country-code prefix. |
| Swedish IBAN | High | Swedish IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| SWIFT/BIC Code | High | SWIFT/BIC bank identifier codes, identified by a nearby SWIFT or BIC label and validated against BIC format rules. |
| UK IBAN | High | UK IBANs, validated against the IBAN ISO 7064 check-digit algorithm. |
| US bank account number | Low | Bank account numbers, matched as a 7- to 14-digit sequence with no additional validation. |

</details>

### PHI

**PHI** combines medical codes and provider identifiers with two patterns that detect clinical vocabulary and chart-style documentation phrasing.

<details>
<summary>PHI patterns (5)</summary>

| Pattern | Confidence | Description |
|---|---|---|
| HCPCS Codes | Medium | Healthcare Common Procedure Coding System (HCPCS) billing codes, matched against the closed list of known codes. |
| Medical code | High | Medical billing and diagnostic codes — ICD-10 diagnosis codes, CPT procedure codes, and NDC drug codes — identified by a nearby diagnosis, procedure, or drug-code label. |
| Medical license | High | National Provider Identifier (NPI) and DEA registration numbers for healthcare providers, identified by a nearby NPI or DEA label. |
| Medical Terms | Medium | Clinical vocabulary drawn from a curated medical dictionary — disease and condition names, prescription drug names, diagnostic procedures, and lab tests — counted toward a health-information determination when it appears alongside clinical-context phrasing and a patient or provider identifier. |
| Medical treatment | Medium | Clinical documentation phrasing — chart-section markers such as chief complaint, discharge summary, history of present illness, and assessment and plan — counted toward a health-information determination when combined with medical-term density, or on their own when several such markers appear together in a chart-style document. |

</details>

### PII

**PII** spans personal identifiers from countries around the world, contact details, addresses, network identifiers, dates of birth, salary data, and privileged legal documents.

<details>
<summary>PII patterns (34)</summary>

| Pattern | Confidence | Description |
|---|---|---|
| Australian Medicare Number (AMN) | Medium | Australian Medicare card numbers, identified by a nearby AMN or Medicare label. |
| Australian TFN | High | Australian Tax File Numbers, validated against the Australian Taxation Office's TFN check-digit algorithm. |
| Brazilian CPF | High | Brazilian CPF (individual taxpayer registry) numbers, identified by a nearby CPF or Brazilian tax-ID label and validated against the CPF check-digit algorithm. |
| Canadian address | High | Canadian street addresses, matched by house number, street name, and a standard street-type suffix (St, Ave, Blvd, Rd, and similar). |
| Canadian SIN | High | Canadian Social Insurance Numbers, validated against the SIN Luhn-style checksum. |
| Chinese Resident ID | High | Chinese Resident Identity Card numbers, identified by a nearby resident-ID or Chinese national-ID label and validated against the Resident ID check-digit algorithm. |
| Czech National ID (Občanský průkaz) | Medium | Czech national identity card numbers (Občanský průkaz), identified by a nearby ČOP or identification-card label. |
| Czech Passport Number | Low | Czech passport numbers, identified by a nearby passport or Cestovní pas label. |
| Date of birth | Medium | Dates of birth, identified by a nearby date-of-birth, DOB, or 'born on' label. |
| Driver's license | Medium | Driver's license numbers, identified by a nearby driver's-license or DL-number label. |
| Email address | Medium | Email addresses in standard local-part@domain format. |
| German national ID card number (Personalausweis) | Medium | German national identity card numbers (Personalausweis), identified by a nearby Personalausweis or Ausweis label. |
| German passport number | Medium | German passport numbers, identified by a nearby Reisepass or Ausweisnummer label. |
| Hungarian National ID | Medium | Hungarian national identity card numbers, identified by a nearby személyigazolvány szám label. |
| Indian Aadhaar | High | Indian Aadhaar (unique identification) numbers, identified by a nearby Aadhaar or Indian national-ID label and validated against the Aadhaar check-digit algorithm. |
| Indian PAN | High | Indian Permanent Account Numbers (PAN), identified by a nearby PAN or income-tax-PAN label and validated against the PAN format rules. |
| IPv4 Address | Low | IPv4 addresses in standard dotted-decimal notation. |
| IPv6 Address | Medium | IPv6 addresses in full 8-group hexadecimal-colon notation. |
| Japanese My Number | High | Japanese My Number (individual number) identifiers, identified by a nearby My Number or Japanese national-ID label and validated against the My Number check-digit algorithm. |
| MAC address | Medium | Network hardware (MAC) addresses in colon- or hyphen-separated hexadecimal form. |
| Medicare Beneficiary Identifier (MBI) | Low | US Medicare Beneficiary Identifiers (MBI), identified by a nearby Medicare-beneficiary or MBI label; the format carries no public checksum, so this stays a lower-confidence signal. |
| Mexican CURP | High | Mexican CURP (unique population registry code) numbers, identified by a nearby CURP or Mexican national-ID label and validated against the CURP format rules. |
| Passport Number | Medium | Passport numbers, identified by a nearby passport-number label. |
| Phone number | Low | Telephone numbers in US, UK, and general international dialing formats. |
| Privileged Legal Document | Low | Privileged legal filings, identified by their docket-style 'Case ... Document ... Filed' structure. |
| Salary data | High | Salary, wage, and compensation figures, identified by a nearby salary, pay, or compensation label and checked for a plausible currency amount. |
| Slovak Passport Number | Medium | Slovak passport numbers, identified by a nearby passport or Cestovný pas label. |
| Spain Passport | Medium | Spanish passport numbers, identified by a nearby Pasaporte label. |
| Swiss Social Security Number (AHV/AVS) | Medium | Swiss AHV/AVS social security numbers, identified either by their fixed 756. country-code prefix or by a nearby AHV-Nr/No AVS label. |
| UK NHS Number | High | UK NHS numbers, identified by a nearby NHS label and validated against the NHS number's modulus-11 check digit. |
| UK NINO | High | UK National Insurance numbers, validated against National Insurance number prefix and format rules. |
| US address | High | US street addresses, matched by house number, street name, and a standard street-type suffix (St, Ave, Blvd, Rd, and similar). |
| US ITIN | Medium | US Individual Taxpayer Identification Numbers (ITIN), identified by a nearby ITIN or taxpayer-ID label and validated against IRS ITIN numbering rules (a leading '9' with a qualifying group range). |
| US SSN | High | US Social Security numbers in formatted or unformatted form, validated against Social Security Administration allocation rules. |

</details>
