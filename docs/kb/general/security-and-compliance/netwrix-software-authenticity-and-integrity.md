---
description: >-
  Learn how to verify the authenticity and integrity of Netwrix software
  downloads, including trusted sources, code signing certificates, cryptographic
  hashes, and how to report suspected issues.
keywords:
  - netwrix
  - software authenticity
  - integrity
  - code signing
  - PGP
  - fingerprints
  - Customer Portal
  - downloads
  - thumbprint
  - code signing certificate
products:
  - general
sidebar_label: Netwrix Software Authenticity and Integrity
tags:
  - kb
  - security-and-compliance
title: "Netwrix Software Authenticity and Integrity"
knowledge_article_id: kA04u0000000IFbCAM
---

# Netwrix Software Authenticity and Integrity

As a software publisher, Netwrix takes its responsibility to provide you secure software products seriously. Before you install software that you obtained from the internet, verify its authenticity (that you obtained it from an authorized source) and its integrity (that it has not been modified). Netwrix employs multiple techniques to enable you to verify the authenticity and integrity of the software we publish.

## Authorized Sources of Netwrix Software

Only software obtained from the sources detailed here is authentic.

- Software downloads are published to the [Customer Portal](https://www.netwrix.com/my_products.html). Files downloaded from the Customer Portal will originate from the domain `releases.netwrix.com`.
- Tools, examples, and other materials are available on [github.com/netwrix](https://github.com/netwrix).

## Verifying Software Authenticity

Netwrix uses industry-standard code signing technologies to provide evidence of the authenticity and integrity of the software we publish. The following certificates are used:

- Windows binaries are signed with a code signing certificate issued to "Netwrix Corporation" with extended validation by Digicert. The current certificate fingerprint is `2B50F15103B002DFA3809C84A8394B3E023D7269`. Netwrix renews the certificate annually. For Netwrix Windows binaries signed with an earlier certificate, see [Previous Windows Code Signing Certificates](#previous-windows-code-signing-certificates).
- Linux and UNIX packages (RPM, deb, etc.) are signed with the "Netwrix Corporation (PGP Signing Key) productsecurity@netwrix.com" PGP key. The public key fingerprint is `3F5EB22771A2BD66D1AA011A43E7B9B0AE7B49D8` and can be obtained at https://releases.netwrix.com/netwrixcorporation-pgp-signing.asc.

### Previous Windows Code Signing Certificates

Each renewal of the Windows code signing certificate produces a new fingerprint. Software signed before a renewal continues to show the fingerprint of the certificate that was valid when it was signed. Use the following table to match the fingerprint of the signature on your file to the certificate that was valid at signing time.

| Valid From | Valid Until | Certificate Fingerprint |
|---|---|---|
| October 24, 2025 | October 27, 2026 | `1209C367CE3469CBF559C20AA2B930BA9FB79235` |
| October 18, 2024 | October 25, 2025 | `80E18E3389CE740D3F124CC45D5CF83A55FD472A` |
| October 16, 2023 | October 22, 2024 | `BD6F08224A0E66CED5DEA63AB7CC1C89CB7355D7` |

> **NOTE:** A signature made while its certificate was valid remains trustworthy after the certificate expires. Every Netwrix-signed binary carries a trusted timestamp that records when it was signed.

## Verifying Software Integrity

In addition to signing our releases, Netwrix publishes cryptographic hashes for each download. A file containing the hash can be downloaded from the Customer Portal by clicking the image next to each download:

![Hash file download icon next to a product download in the Customer Portal](./../0-images/ka0Qk000000Ctn7_0EM4u000008LiI7.png)

To protect from unauthorized modification, these files are signed with the "Netwrix Corporation (PGP Signing Key) productsecurity@netwrix.com" PGP key. The public key fingerprint is `3F5EB22771A2BD66D1AA011A43E7B9B0AE7B49D8` and can be obtained at https://releases.netwrix.com/netwrixcorporation-pgp-signing.asc.

## Reporting Suspected Integrity or Authenticity Issues

If you suspect that the software you downloaded may have been modified or obtained from an unauthorized source, please contact us.

1. If you have a relationship with Netwrix, [open a ticket](https://www.netwrix.com/tickets.html#/open-a-ticket) with our support team.
2. Otherwise, contact our product security team at psirt@netwrix.com.
