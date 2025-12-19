---
description: >-
  This article explains why the Enable Encryption option may be missing from the SIEM Integration configuration and how to resolve the issue.
keywords:
  - SIEM Integration
  - Enable Encryption
  - Ubuntu
sidebar_label: Enable Encryption Option Missing
tags:
  - audit-and-logging
title: "Enable Encryption Option Missing from the SIEM Integration Configuration"
knowledge_article_id: kA0Qk0000002B10KAE
products:
  - general
---

# Enable Encryption Option Missing from the SIEM Integration Configuration

## Overview

This article explains why the **Enable Encryption** option may be missing from the SIEM Integration configuration. This option allows you to encrypt communication with SIEM servers using the TCP protocol. To enable encryption, you must upload the root CA (in `.pem` format) that was used to sign the SIEM server certificate.

## Instructions

If the **Enable Encryption** option is missing, determine your appliance's operating system version:

- **Ubuntu 14.04 or older:** The appliance does not support SIEM encryption. You must install an appliance with a newer OS version.
- **Ubuntu 18.04 or 22.04:** The **syslog-ng** service may not be installed. Contact [Netwrix Technical Support](https://www.netwrix.com/support.html) to verify and install the required service on the server.