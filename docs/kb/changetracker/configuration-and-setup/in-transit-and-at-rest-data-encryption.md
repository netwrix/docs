---
description: >-
  Supported TLS versions for in-transit encryption and MongoDB at-rest
  encryption options for Netwrix Change Tracker.
keywords:
  - in-transit encryption
  - at-rest encryption
  - TLS
  - MongoDB
  - ASP.NET Core
  - data protection
  - TLS 1.3
  - MongoDB Enterprise
  - MongoDB Community
  - encryption at rest
  - data encryption
products:
  - change-tracker
sidebar_label: In-Transit and At-Rest Data Encryption
tags:
  - kb
  - configuration-and-setup
title: In-Transit and At-Rest Data Encryption
knowledge_article_id: ""
---

# In-Transit and At-Rest Data Encryption

## Overview

This article covers the supported encryption options for Netwrix Change Tracker data both in transit and at rest.

## Instructions

### In-Transit Encryption

Netwrix Change Tracker supports Transport Layer Security (TLS) protocol version 1.3 and earlier for in-transit data encryption. Disable nontarget protocol versions in your environment to ensure you use the intended TLS version.

### At-Rest Encryption

MongoDB Community Edition, which is included in the Netwrix Change Tracker installation wizard, does not support at-rest data encryption. This feature is available in MongoDB Enterprise only. For details, see [MongoDB Encryption At-Rest](https://www.mongodb.com/docs/manual/core/security-encryption-at-rest/).

> **IMPORTANT:** The ASP.NET Core data protection API encrypts data such as user accounts, passwords, and network device credentials by default. Both MongoDB Community and Enterprise editions encrypt this type of data.
