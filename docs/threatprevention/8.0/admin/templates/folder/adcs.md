---
title: "ADCS Templates"
description: "ADCS Folder Templates"
sidebar_position: 15
---

# ADCS Folder Templates

The ADCS folder contains the following templates:

**Blocking Folder**

| Template                | Description     | TAGS |
| ----------------------- | ------------------ | ---- |
| ADCS: Block ESC1-3 Template Enrollments          | Blocking certificate requests for UPN-in-SAN issuance. Blocks a certificate request when the User Principal Name (UPN) value is stamped in the Subject Alternative Name (SAN) or when an enrollment agent is used to obtain a cert for a different user. This covers common ESC1, ESC2, and on-behalf-of patterns from ESC3. The recommendation is to monitor at least 30 days first before enabling blocking mode. | NEW 8.0 TEMPLATES |
| ADCS: Block extracting CA Private Key |  | NEW 8.0 TEMPLATES |
| ADCS: Block Template Modifications (ESC4) | Blocking unauthorized changes to AD CS certificate templates that turn a safe template into an impersonation vector. The rule blocks on risky flips like enabling Enrollee supplies subject, modifying EKUs, and so on. | NEW 8.0 TEMPLATES |

**Detection Folder**

| Template               | Description       | TAGS |
| ---------------------- | ------------------------------- | ---- |
| ADCS: Detect ESC1-3 Template Enrollments | Monitors certificate requests for UPN-in-SAN issuance. An alert fires when the User Principal Name (UPN) value is stamped in the Subject Alternative Name (SAN) or when an enrollment agent is used to obtain a cert for a different user. This covers common ESC1, ESC2, and on-behalf-of patterns from ESC3.  | NEW 8.0 TEMPLATES |
| ADCS: Detect Modification of NTAuthCertificates Object | Detects changes to the CN=NTAuthCertificates object that add or replace CA certificates, which can make a rogue, self-signed CA trusted for authentication. With a DC-trusted root, a refreshed NTAuth cache, and a reachable CRL, an attacker can mint a cert for a privileged user and succeed with PKINIT, effectively logging on as that user. https://decoder.cloud/2023/09/05/from-ntauthcertificates-to-silver-certificate/ | NEW 8.0 TEMPLATES |
| ADCS: Detect Template Modifications (ESC4) | Detects unauthorized changes to AD CS certificate templates that turn a safe template into an impersonation vector. The rule alerts on risky flips like enabling Enrollee supplies subject, modifying EKUs, and so on. | NEW 8.0 TEMPLATES |
| ADCS: Security Descriptor change on Certificate Authority Object (ESC7) | Monitors the CA object for security descriptor updates. An alert fires when the security desciptor has changed, especially when new rights like ManageCA or ManageCertificates are introduced or scope is widened to groups that should not manage the CA. | NEW 8.0 TEMPLATES |

