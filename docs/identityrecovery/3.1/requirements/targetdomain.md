---
title: "Target Domains"
description: "Target Domains"
sidebar_position: 40
---

# Target Domains

Target domains are the Active Directory domains you add on the
[Domains Page](/docs/identityrecovery/3.1/configuration/domain.md). You can rollback and recover objects in these
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

You specify the service account that runs backups and performs rollback and recovery tasks for a
domain on the Domain page of the Add Domain Configuration wizard. This account must be:

- A member of the Domain Administrators group in the target domain

If your security policies don't allow Domain Admin privileges, contact your Netwrix representative to
develop a Least Privilege Access Model for your environment. See the
[Least Privilege Access Model](#least-privilege-access-model) section for the baseline permissions.

### Least Privilege Access Model

Netwrix strongly recommends giving the Identity Recovery service account Domain Admin privileges.
If your security policies don't allow this, contact your Netwrix service representative to develop a
Least Privilege Access model tailored to your environment.

Normal backup and recovery operations in Active Directory require the following permissions, which
the Domain Administrators security group usually has:

- Membership in the Schema Admins group is required for backups of objects within the
  domain's Schema Container
- The following permissions on the domain's default naming context are required for
  backups and rollbacks of its Active Directory objects:

    - ALLOW – Write Property right (SelfAndChildren)
    - ALLOW – Create Child right (SelfAndChildren)
    - ALLOW – Replicating Directory Changes extended right (SelfAndChildren)
    - ALLOW – Reanimate Tombstones extended right (SelfAndChildren)

- The following permissions on the domain's DomainDnsZones and ForestDnsZones partitions are
  required for backups and rollbacks of Active Directory DNS objects:
    - ALLOW – Write Property right (SelfAndChildren)
    - ALLOW – Create Child right (SelfAndChildren)
    - ALLOW – Replicating Directory Changes extended right (SelfAndChildren)
    - ALLOW – Reanimate Tombstones extended right (SelfAndChildren)
- The following permissions on the domain's Sites container are required for backups and
  rollbacks of Active Directory Sites and Services objects:
    - ALLOW – Generic Read right (SelfAndChildren)
    - ALLOW – Generic Write right (SelfAndChildren)
    - ALLOW – Create Child right (SelfAndChildren)
    - ALLOW – Replicating Directory Changes extended right (SelfAndChildren)
    - ALLOW – Reanimate Tombstones extended right (SelfAndChildren)
- The following Group Policy access rights are required for backups and rollbacks of
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
