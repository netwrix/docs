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
products:
  - general
sidebar_label: Netwrix Software Authenticity and Integrity
tags:
  - security-and-compliance
title: "Netwrix Software Authenticity and Integrity"
knowledge_article_id: kA04u0000000IFbCAM
---

# Netwrix Software Authenticity and Integrity

As a software publisher, Netwrix takes its responsibility to provide you secure software products seriously. Before you install software that you obtained from the internet, verify its authenticity (that you obtained it from an authorized source) and its integrity (that it hasn't been modified). Netwrix employs multiple techniques to enable you to verify the authenticity and integrity of the software we publish.

## Authorized Sources of Netwrix Software

Only software obtained from the sources detailed here is authentic.

- Software downloads are published to the [Customer Portal](https://www.netwrix.com/my_products.html). Files downloaded from the Customer Portal will originate from the domain `releases.netwrix.com`.
- Tools, examples, and other materials are available on [github.com/netwrix](https://github.com/netwrix).

## Verifying Software Authenticity

Netwrix uses industry-standard code signing technologies to provide evidence of the authenticity and integrity of the software we publish. The following certificates are used:

- Windows binaries are signed with a code signing certificate issued to "Netwrix Corporation" with extended validation by Digicert. The certificate fingerprint is `80E18E3389CE740D3F124CC45D5CF83A55FD472A`.
- Linux and UNIX packages (RPM, deb, etc.) are signed with the "Netwrix Corporation (PGP Signing Key) productsecurity@netwrix.com" PGP key. The public key fingerprint is `3F5EB22771A2BD66D1AA011A43E7B9B0AE7B49D8` and can be obtained at https://releases.netwrix.com/netwrixcorporation-pgp-signing.asc.

## Verifying Software Integrity

In addition to signing our releases, Netwrix publishes cryptographic hashes for each download. A file containing the hash can be downloaded from the Customer Portal by clicking the image next to each download:

![User-added image](./../0-images/ka0Qk000000Ctn7_0EM4u000008LiI7.png)

To protect from unauthorized modification, these files are signed with the "Netwrix Corporation (PGP Signing Key) productsecurity@netwrix.com" PGP key. The public key fingerprint is `3F5EB22771A2BD66D1AA011A43E7B9B0AE7B49D8` and can be obtained at https://releases.netwrix.com/netwrixcorporation-pgp-signing.asc.

## Reporting Suspected Integrity or Authenticity Issues

If you suspect that the software you downloaded may have been modified or obtained from an unauthorized source, please contact us.

1. If you have a relationship with Netwrix, [open a ticket](https://www.netwrix.com/tickets.html#/open-a-ticket) with our support team.
2. Otherwise, contact our product security team at psirt@netwrix.com.
