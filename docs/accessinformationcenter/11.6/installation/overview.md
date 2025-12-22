---
title: "Installation Overview"
description: "Installation Overview"
sidebar_position: 20
---

# Installation Overview

The Netwrix Access Information Center relies on collected and analyzed data that is stored in a
Microsoft® SQL® Server database. Enterprise Auditor must be installed, and there are specific
solutions that are prerequisites for installing and using the Access Information Center.

## Prerequisites

The Access Information Center is typically installed on the same server as Enterprise Auditor.
However, it can be installed on a remote server. See the
[Remote AIC Console Sever Requirements](#remote-aic-console-sever-requirements) topic for additional
information.

### Enterprise Auditor Solutions

The .Active Directory Inventory Solution must be successfully executed prior to installing the
Access Information Center.

:::info
Successfully execute other solutions, like File System or SharePoint, which
supply the data for Resource Audits.
:::


### Permissions

Permissions are needed to the Enterprise Auditor database and to Active Directory. This can be one
account with sufficient rights to each or two separate accounts. For the purpose of this document,
these will be referred to as the Database service account and the Active Directory service account.

- Database service account – Typically, this is the same account used by Enterprise Auditor for a
  database service account. This credential is required for installation.

    - If you choose to use a different account, it must have the following permissions:

        - Database Owner
        - Provisioned to use Default Schema of ‘dbo’

    - Database connection via TLS 1.2 (SQL Native Client) is supported.

- Active Directory service account – At a minimum, Access Information Center login authentication
  and Resource Audits require the Active Directory service account to have rights to read Active
  Directory. This credential is configured during installation based on the account used for
  connecting to the database. See the
  [Active Directory Page](/docs/accessinformationcenter/11.6/admin/configuration/activedirectory.md)
  topic for additional information.

**Commit Active Directory Changes**

If configured and enabled, the Access Information Center can commit group membership changes within
Active Directory. This is an optional component of change modeling, resource owner ad hoc changes,
and the Entitlement Reviews workflow. It is a requirement for the Self-Service Access Requests
workflow.

In order for the Access Information Center to commit changes to Active Directory, Active Directory
service account must have additional rights on the OUs that house the security and distribution
groups to be managed:

- Allow Read Members
- Allow Write Members

See the
[Commit Active Directory Changes](/docs/accessinformationcenter/11.6/admin/additionalconfig/commitchanges.md)
topic for additional information and best practices.

### Remote AIC Console Sever Requirements

If it is necessary to install the Access Information Center on a server separate from the Enterprise
Auditor Console, the following minimal server requirements are needed for Access Reporting:

- Windows Server 2016 through Windows Server 2022

    - US English language installation
    - Domain member

- 2+ CPU Cores
- 4+ GB RAM
- 20+ GB Disk Space
- .NET Framework 4.7.2+

:::note
If utilizing any of the Access Information Center workflows (Resource Reviews or
Self-Service Access Requests), additional CPU cores, memory, and disk space may be needed.
:::


## Software Compatibility & Versions

For proper functionality, it is necessary for the version of the Access Information Center to be
compatible with the existing Enterprise Auditor installation. If necessary,
[Netwrix Support](https://www.netwrix.com/support.html) can confirm whether the two product versions
are compatible.

**Latest Version Compatibility**

| Component                         | Current Version |
| --------------------------------- | --------------- |
| Netwrix Enterprise Auditor        | Ver. 11.6\*     |
| Netwrix Access Information Center | Ver. v11.6\*    |

See the
[Upgrade Procedure](/docs/accessinformationcenter/11.6/installation/upgrade.md)
topic for additional information.

## Supported Browsers

Supported browsers for the Netwrix Access Information Center include:

- Google® Chrome®
- Microsoft® Edge®
- Mozilla® Firefox®

## Screen Resolution Requirement

Supported screen resolution of 1368 x 768 or greater.
