---
description: >-
  This article explains how to export and import Netwrix Privilege Secure (NPS)
  encryption keys across multiple NPS servers to enable high availability (HA)
  configurations.
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
  - privilege-secure-access-management
sidebar_label: How to Configure Encryption Keys in Multiple NPS S
tags: []
title: "How to Configure Encryption Keys in Multiple NPS Server Environments"
knowledge_article_id: kA0Qk0000000rYzKAI
---

# How to Configure Encryption Keys in Multiple NPS Server Environments

## Overview

This article covers the steps to configure encryption keys in environments with multiple Netwrix Privilege Secure (NPS) servers. Apply these steps when setting up high availability (HA) in your environment. Refer to the following article for additional information on establishing active/passive HA with PostgreSQL backend: [How to Use NPS.HaMgr.exe](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HfOCAU.html).

## Instructions

> **NOTE:** The following steps apply to SbPAM v3.6, v3.7, and higher and to NPS v.4.0 and higher.

Refer to the following steps to verify that NPS encryption keys are configured on all NPS servers:

> **IMPORTANT:** For the following steps, if the application was installed to a dedicated drive, change the drive letter from **X** to the appropriate letter.

1. Install NPS on the primary and secondary servers. Apply your license file to both NPS instances. Refer to the following article for additional information on applying a license: [Apply a New License](/docs/kb/privilegesecure/installation-configuration-and-licensing/apply-a-new-license.md).

2. On your primary server, run the following lines in elevated Command Prompt:

```bat
cd "X:\Program Files\Stealthbits\PAM\KeyTools"
.\SbPAM.RotateKey.exe export -n keys.exp
```

3. Command Prompt prompts a password used to protect the NPS encryption keys. Take note of the password to use it later.

4. Copy the exported file to the following path on the secondary server:

`X:\Program Files\Stealthbits\PAM\KeyTools`

5. On your secondary server, run the following lines in elevated Command Prompt:

```bat
cd "X:\Program Files\Stealthbits\PAM\KeyTools"
.\SbPAM.RotateKey.exe import -n keys.exp
```

6. Enter the password when prompted.

7. Delete the exported keys file and any saved passwords from both servers.

## Related articles

- [How to Use NPS.HaMgr.exe](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HfOCAU.html)
- [Apply a New License](/docs/kb/privilegesecure/installation-configuration-and-licensing/apply-a-new-license.md)
