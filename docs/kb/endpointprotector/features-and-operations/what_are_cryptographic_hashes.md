---
description: >-
  This article explains the purpose of cryptographic hashes and how to verify the integrity and authenticity of files downloaded from Endpoint Protector.
keywords:
  - cryptographic hashes
  - file integrity
  - checksum verification
sidebar_label: Cryptographic Hashes Overview
tags:
  - features-and-operations
title: "What Are Cryptographic Hashes?"
knowledge_article_id: kA0Qk0000002BM5KAM
products:
  - endpointprotector
---

# What Are Cryptographic Hashes?

## Overview

This article explains the purpose of cryptographic hashes. Verifying cryptographic hashes ensures the integrity and authenticity of files downloaded from Endpoint Protector.

## Instructions

### Using Cryptographic Hashes

As a data security vendor, Endpoint Protector provides cryptographic hashes on product download pages to help you verify that you have received unaltered files. Checksum algorithms, such as MD5 and SHA256, generate a unique fingerprint for each file, allowing you to detect errors or tampering that may have occurred during transmission or storage.

To confirm file integrity, use the Terminal or a checksum utility to calculate the hash for files downloaded from the Endpoint Protector website. If the hash you calculate matches the one provided, you can be certain the file is intact. SHA and MD5 utilities are available for Windows, macOS, and Linux.

### Calculating MD5 and SHA256 on Linux

Most Linux distributions provide built-in commands for calculating MD5 and SHA256 message digests:

![Terminal showing MD5 checksum calculation on Linux](https://www.endpointprotector.com/images/img/support/calculate-md5-linux.png) ![Terminal showing SHA256 checksum calculation on Linux](https://www.endpointprotector.com/images/img/support/calculate-sha256-linux.png)

### Calculating MD5 and SHA256 on Windows

Several tools are available for Windows. The **File Checksum Integrity Verifier (FCIV)** utility can be used to calculate MD5 and SHA256 checksums. For more information, see [File Checksum Integrity Verifier ⸱ Microsoft 🡥](https://support.microsoft.com/en-us/kb/841290).

### Calculating MD5 and SHA256 on macOS

macOS provides command-line utilities for calculating message digests. Depending on the OS version, some commands may vary. The following example shows the recommended method:

![Terminal showing MD5 checksum calculation on macOS](https://www.endpointprotector.com/images/img/support/calculate-md5-mac.png) ![Terminal showing SHA256 checksum calculation on macOS](https://www.endpointprotector.com/images/img/support/calculate-sha256-mac.png)