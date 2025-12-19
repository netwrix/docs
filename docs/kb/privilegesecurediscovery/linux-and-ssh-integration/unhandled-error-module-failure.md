---
description: 'Explains causes and resolutions for the "Unhandled error: MODULE FAILURE" (Code 1779) encountered when scanning or manually registering Linux systems with Netwrix Privilege Secure Discovery.'
keywords:
- linux
- module failure
- 1779
- updateCreds
- sudoers
- sudo visudo
- package update
- Netwrix Privilege Secure Discovery
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka0Qk0000004LDxIAM
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2024-06-25'
  knowledge_article_id: kA04u00000110pLCAQ
  last_modified_date: '2024-06-25'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: "Unhandled Error: Module Failure"
tags: []
title: 'Unhandled Error: Module Failure'
knowledge_article_id: kA04u00000110pLCAQ
---

# Unhandled Error: Module Failure

## Symptom

When you scan a Linux system, or manually register a non-domain Linux system, you see the following error:

```
Unhandled error: MODULE FAILURE See stdout/stderr for the exact error
Type: updateCreds
Code: 1779
```

> **NOTE:** Domain-joined Linux systems are discovered in Active Directory (AD), and no registration is required.

## Causes

1. SUSE Linux has a sudoers configuration where SUSE will prompt for the root password, not the password for the account registered with Netwrix Privilege Secure Discovery.
2. A Python script is failing due to an incomplete package update.

## Resolutions

1. Cause 1: Comment out the two lines that do not start with `##` symbols in the example below.

   Use the following command to edit the file:

   ```bash
   sudo visudo
   ```

   ```text
   ## In the default (unconfigured) configuration, sudo asks for the root password.
   ## This allows use of an ordinary user account for administration of a freshly
   ## installed system. When configuring sudo, delete the two
   ## following lines:
   Defaults targetpw   # ask for the password of the target user i.e. root
   ALL   ALL=(ALL) ALL   # WARNING! Only use this together with 'Defaults targetpw'!
   ```

   Attempt the registration again.

2. Cause 2: Update Linux packages and reboot if required. See the examples below for reference:

   ```bash
   Redhat: sudo yum update
   Debian: sudo apt update && sudo apt -y dist-upgrade
   SUSE: sudo zypper refresh && sudo zypper update
   ```