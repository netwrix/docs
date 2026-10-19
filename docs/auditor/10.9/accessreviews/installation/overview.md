---
title: "Installation Overview"
description: "Installation Overview"
sidebar_position: 10
---

# Installation Overview

The Netwrix Auditor Access Reviews application relies on collected and analyzed data that is stored
in a Microsoft® SQL® Server database. Netwrix Auditor must be installed and collecting data before
installing and using the Access Reviews application. The Access Reviews Configuration tool must be
used after installation to complete the integration of these products.

**NOTE:** Access Reviews is a separately licensed product and isn't included with Netwrix Auditor.
Ensure that you have the Access Reviews license enabled in Auditor.

## Prerequisites

The Access Reviews application must be installed on the same server as Netwrix Auditor.

### Permissions

You need permissions to the Netwrix Auditor database and to Active Directory. This can be one
account with sufficient rights to each, or two separate accounts. This document refers to these as
the Database service account and the Active Directory service account.

- Database service account – This is the same account used by Netwrix Auditor for a database service
  account. This credential is required for installation.

    **NOTE:** Database connection via TLS 1.2 (SQL Native Client) is supported.

- Active Directory service account – The Access Reviews Console login authentication requires the
  Active Directory service account to have rights to "read" Active Directory. This credential is
  configured during installation based on the account used for connecting to the database. See the
  [Active Directory Page](/docs/auditor/10.9/accessreviews/admin/configuration/activedirectory.md) topic for additional
  information.

## Software Compatibility & Versions

For proper functionality, the version of Access Reviews must be compatible with the existing
Netwrix Auditor installation. If necessary,
[Netwrix Support](https://www.netwrix.com/support.html) can confirm whether the two product versions
are compatible.

Latest Version Compatibility

| Component                      | Current Version |
| ------------------------------ | --------------- |
| Netwrix Auditor Console        | 10.7\*          |
| Netwrix Auditor Access Reviews | v12.0\*         |

Last Updated 6/6/2022

See the [Upgrade Procedure](/docs/auditor/10.9/accessreviews/installation/upgrade.md) topic for additional information.

## Supported Browsers

Supported browsers for the Access Reviews Console include:

- Google® Chrome®
- Microsoft® Edge®
- Mozilla® Firefox®

## Screen Resolution Requirement

Supported screen resolution of 1368 x 768 or greater.
