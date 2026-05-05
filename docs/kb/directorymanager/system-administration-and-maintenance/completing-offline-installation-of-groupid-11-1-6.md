---
description: >-
  Explains how to complete an offline installation of GroupID 11.1.6 by
  temporarily allowing Windows to verify the installer's code-signing
  certificate before reverting to a fully offline environment.
keywords:
  - GroupID
  - offline installation
  - Directory Manager
  - code-signing certificate
  - DigiCert
  - certificate validation
  - whitelist
  - air-gapped
  - firewall
  - 11.1.6
products:
  - directory-manager
sidebar_label: Completing Offline Installation of GroupID 11.1.6
tags:
  - kb
  - system-administration-and-maintenance
title: "Completing Offline Installation of GroupID 11.1.6"
knowledge_article_id: TBD
---

# Completing Offline Installation of GroupID 11.1.6

## Applies To

Netwrix Directory Manager (GroupID) 11.1.6

## Overview

This article explains how to complete an offline installation of GroupID 11.1.6. During installation, Windows must verify the code-signing certificate for the installer. You must temporarily allow access to a certificate validation URL before starting the installation.

## Instructions

1. Temporarily allow access to the following URL in your firewall or proxy settings:

   ```
   http://cacerts.digicert.com/DigiCertTrustedG4CodeSigningRSA4096SHA3842021CA1.crt
   ```

   This URL allows Windows to verify the installer's code-signing certificate.

2. Run the GroupID 11.1.6 installer.

3. After the installation completes, remove this URL from your whitelist. You can then continue operating in a fully offline environment.
