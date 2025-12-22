---
description: >-
  Explains considerations and required steps when installing a new Netwrix
  Directory Manager server or adding an additional server to an existing
  infrastructure, including prerequisites and configuration notes.
keywords:
  - Netwrix Directory Manager
  - installation
  - prerequisites
  - .NET Framework
  - Java 8
  - ODBC
  - Elastic
  - IIS
  - certificate
  - NDM
products:
  - directory-manager
sidebar_label: How to Prepare for Installation
tags:
  - system-administration-and-maintenance
title: "How to Prepare for Installation"
knowledge_article_id: kA0Qk00000024dpKAA
---

# How to Prepare for Installation

## Applies To

Netwrix Directory Manager 10

## Overview

This article explains the considerations and required steps when installing a new Netwrix Directory Manager (formerly GroupID) server in a new environment or adding an additional server to an existing infrastructure.

## Instructions

### Install Netwrix Directory Manager on a New Server

1. Add the service account to the local administrator's group on the server then grant it full control over the Netwrix Directory Manager installation directory.

> **NOTE:** The installation directory is `X:\Program Files\Imanami\GroupID 10.0`. By default, `X` is `C`, but it may be another drive if you selected a different location during installation.

2. Install Netwrix Directory Manager 10, which includes .NET Framework 4.7.2 as a prerequisite. Do not upgrade the .NET Framework version to 4.8.
3. Ensure Java 8 Update 171 is installed. Do not upgrade Java from version 8 to any other version.
4. Ensure that the drive you are installing Netwrix Directory Manager on always has more than 20 percent free disk space.
5. After installing Netwrix Directory Manager and completing the configuration tool, remove or rename the Netwrix Directory Manager zip files.
6. After all steps above are complete, replace the generic security service certificate with a new, unique certificate by following the process described in the advisory below.

[Security Advisory ADV-2025-004 ⸱ Netwrix &#129125;](https://security.netwrix.com/Advisories/ADV-2025-004)

7. After following Step 5, please follow the steps given below in the Advisory 2025-013 to apply IP restrictions on the NDM site in IIS:-

[Security Advisory ADV-2025-013](https://community.netwrix.com/t/adv-2025-013-hard-coded-password-in-netwrix-directory-manager-formerly-imanami-groupid-v10-and-earlier/13945)

### Adding a Netwrix Directory Manager Server to an Existing Infrastructure

In addition to the steps above, consider the following points when adding another Netwrix Directory Manager server to an existing infrastructure:

- If you are using Automate or Synchronize modules, create the same ODBC connections on the new server as on your existing server(s), if needed.
- If you already have or will have more than two Netwrix Directory Manager servers as part of the same cluster, adjust the number of replicas for Elastic with assistance from the support team.
- Apply all Netwrix Directory Manager patches that are already applied on the existing server(s) to the new server.
- If preferred domain controllers are being used, add them to the new server as well.
- Ensure the HTTPS port and alias for the Netwrix Directory Manager site are the same as those on the existing server.

## Related Articles

- [Security Advisory ADV-2025-004 ⸱ Netwrix &#129125;](https://security.netwrix.com/Advisories/ADV-2025-004)
- [Security Advisory ADV-2025-013](https://community.netwrix.com/t/adv-2025-013-hard-coded-password-in-netwrix-directory-manager-formerly-imanami-groupid-v10-and-earlier/13945)
