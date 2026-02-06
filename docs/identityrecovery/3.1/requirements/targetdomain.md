---
title: "Target Domains"
description: "Target Domains"
sidebar_position: 40
---

# Target Domains

Target domains include the Active Directory domains that can be added through the
[Domains Page](/docs/identityrecovery/3.1/admin/configuration/domain.md). You can rollback and recover objects in these
domains through the [Active Directory Page](/docs/identityrecovery/3.1/admin/activedirectory/overview.md).

Identity Recovery can backup domains on servers with the Active Directory role on the
following operating system versions:

- Windows Server 2025
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2
- Windows Server 2012

## Service Account Permissions

The service account used to run backups, and perform rollback and recovery tasks for a domain is
specified on the Domain page of the Add Domain Configuration wizard. This account must be:

- A member of the Domain Administrators group in the target domain

There is a Least Privilege Access Model to provision an Active Directory security group with the
permissions that are necessary to perform backups, rollbacks and recovery.

### Least Privilege Access Model

It is strongly suggested that the Identity Recovery service account be provided Domain
Admin privileges; however, there are situations where security policies prevent an organization from
providing Domain Admin privileges. In those situations, please contact your Netwrix service
representative to work with you to develop a tailored Least Privilege Access model based on your
environment.

The privileges necessary to facilitate normal backup and recovery operations of an Active Directory
environment, which are normally available to the Domain Administrators security group, include the
following permissions:

- Membership in the Schema Admins group is necessary to facilitate backups of objects within the
  domain's Schema Container
- The following permissions on the domain's default naming context are necessary to facilitate
  backups and rollbacks of its Active Directory objects:

    - ALLOW – Write Property right (SelfAndChildren)
    - ALLOW – Create Child right (SelfAndChildren)
    - ALLOW – Replicating Directory Changes extended right (SelfAndChildren)
    - ALLOW – Reanimate Tombstones extended right (SelfAndChildren)

- The following permissions on the domain's DomainDnsZones and ForestDnsZones partitions are
  necessary to facilitate backups and rollbacks of Active Directory DNS objects:
    - ALLOW – Write Property right (SelfAndChildren)
    - ALLOW – Create Child right (SelfAndChildren)
    - ALLOW – Replicating Directory Changes extended right (SelfAndChildren)
    - ALLOW – Reanimate Tombstones extended right (SelfAndChildren)
- The following permissions on the domain's Sites container are necessary to facilitate backups and
  rollbacks of Active Directory Sites and Services objects:
    - ALLOW – Generic Read right (SelfAndChildren)
    - ALLOW – Generic Write right (SelfAndChildren)
    - ALLOW – Create Child right (SelfAndChildren)
    - ALLOW – Replicating Directory Changes extended right (SelfAndChildren)
    - ALLOW – Reanimate Tombstones extended right (SelfAndChildren)
- The following Group Policy access rights are necessary to facilitate backups and rollbacks of
  Group Policy Objects:
    - READ
    - WRITE
    - CREATE CHILD OBJECT
    - DELETE CHILD OBJECT
    - DELETE
    - MODIFY PERMISSIONS
    - MODIFY OWNER

:::warning
Additional permissions may be necessary to allow Identity Recovery to
function properly in an organization’s environment.

:::
