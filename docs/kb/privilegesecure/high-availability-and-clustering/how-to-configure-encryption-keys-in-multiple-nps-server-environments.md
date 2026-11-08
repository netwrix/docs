---
description: >-
  Export and import Netwrix Privilege Secure encryption keys across multiple
  servers to enable high availability (HA) configurations.
keywords:
  - Netwrix Privilege Secure
  - NPS
  - encryption keys
  - high availability
  - HA
  - SbPAM
  - RotateKey
  - KeyTools
  - license
  - PostgreSQL
products:
  - privilegesecure
sidebar_label: Configuring Encryption Keys in Multiple NPS Server Environments
tags:
  - kb
  - high-availability-and-clustering
title: "Configuring Encryption Keys in Multiple NPS Server Environments"
knowledge_article_id: kA0Qk0000000rYzKAI
---

# Configuring Encryption Keys in Multiple NPS Server Environments

## Overview

This article describes how to configure encryption keys in environments with multiple Netwrix Privilege Secure for Access Management servers. Apply these steps when setting up high availability (HA) in your environment. For additional information on establishing active/passive HA with PostgreSQL backend, see [How to Use NPS.HaMgr.exe](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HfOCAU.html).

## Instructions

> **NOTE:** The following steps apply to SbPAM v3.6, v3.7, and higher and to Privilege Secure v.4.0 and higher.

Complete the following steps to verify that Privilege Secure encryption keys are configured on all Privilege Secure servers:

> **IMPORTANT:** For the following steps, if the application was installed to a dedicated drive, change the drive letter from **X** to the appropriate letter.

1. Install Privilege Secure on the primary and secondary servers. Apply your license file to both Privilege Secure instances. For additional information on applying a license, see [Applying a New License](/docs/kb/privilegesecure/installation-configuration-and-licensing/apply-a-new-license.md).

2. On your primary server, run the following lines in elevated Command Prompt:

   ```bat
   cd "X:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe export -n keys.exp
   ```

3. Command Prompt prompts a password used to protect the encryption keys. Take note of the password to use it later.

4. Copy the exported file to the following path on the secondary server:

   `X:\Program Files\Stealthbits\PAM\KeyTools`

5. On your secondary server, run the following lines in elevated Command Prompt:

   ```bat
   cd "X:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe import -n keys.exp
   ```

6. Enter the password when prompted.

7. Delete the exported keys file and any saved passwords from both servers.

## Related Links

- [How to Use NPS.HaMgr.exe](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HfOCAU.html)
- [Applying a New License](/docs/kb/privilegesecure/installation-configuration-and-licensing/apply-a-new-license.md)
