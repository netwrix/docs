---
title: "Use Cases"
description: "Use Cases"
sidebar_position: 3
---

# Use Cases

With Identity Recovery, you can rollback and recover both accidental and malicious
changes to Active Directory. This topic outlines common use cases as examples.

## Recover a Deleted Object

Deleted objects can be difficult to recover natively without the Active Directory Recycle Bin
enabled, which isn't enabled by default. While enabling the Recycle Bin enhances the restore
process, it isn't a requirement for Identity Recovery. An example of when a deleted
object may need to be restored is:

- Someone accidentally deleted a user account and it needs to be reinstated

You can restore a deleted object through the following interface in the Identity Recovery Console:

- [Active Directory Page](/docs/identityrecovery/3.1/admin/activedirectory/overview.md)
    - Locate the object you want in the Recycle Bin.
    - Recover the object by following the steps in the
      [Recover an Object](/docs/identityrecovery/3.1/admin/activedirectory/recover.md#recover-an-object) topic.

## Rollback Changes to an Object

Active Directory doesn't offer native ways to undo changes made to objects. Identity Recovery can rollback object changes to any state captured within a backup. An example of when a
change to an object may need to be rolled back is:

- Someone made a group membership change that impacted a user’s access

You can roll back object changes through the following interface in the Identity Recovery Console:

- [Active Directory Page](/docs/identityrecovery/3.1/admin/activedirectory/overview.md)
    - Locate the object you want
    - Rollback changes to the object by following the steps in the
      [Rollback Objects](/docs/identityrecovery/3.1/admin/activedirectory/rollback.md) topic

## Rollback Attribute Changes

A massive number of attributes changes in Active Directory can cause significant security and
operational issues. Identity Recovery can rollback attribute changes to any state
captured within a backup. Some examples of when a change to an attribute may need to be rolled back
are:

- Someone changed Joe’s department attribute and it needs to be rolled back to what it was originally
- Someone changed a user’s display name and it needs to be rolled back

You can roll back attribute changes through the following interface within the
Identity Recovery Console:

- [Active Directory Page](/docs/identityrecovery/3.1/admin/activedirectory/overview.md)
    - Locate the object you want
    - Rollback changes to the object by following the steps in the
      [Rollback Objects](/docs/identityrecovery/3.1/admin/activedirectory/rollback.md) topic

> Remember to select the attribute you want for rollback

## Rollback Group Policy Object Changes

Group Policy Objects (GPOs) control many aspects of operations, security, and software deployment.
Identity Recovery can rollback GPOs to any state captured within a backup. For this,
you must install Group Policy Management Console on the Identity Recovery server. See
Steps 9 and 10 in the [Add a Domain](/docs/identityrecovery/3.1/admin/configuration/domain.md#add-a-domain) topic for
additional information. An example of when a GPO change may need to be rolled back is:

- A GPO change caused users to lose access to a server or application

You can roll back GPO changes through the following interface in the Identity Recovery Console:

- [Active Directory Page](/docs/identityrecovery/3.1/admin/activedirectory/overview.md)
    - Locate the object you want
    - Rollback changes to the object by following the steps in the
      [Rollback Objects](/docs/identityrecovery/3.1/admin/activedirectory/rollback.md) topic

## Domain Controller Backup and Forest Restore from Backup

Identity Recovery can backup domain controllers to prevent data loss. The
[Forest Page](/docs/identityrecovery/3.1/admin/forest/forest.md) allows administrators to configure and manage backups for a domain controller. You can then restore a domain controller backup using the backup file created by Identity Recovery. To restore a forest, you can create a playbook to restore the domain
controllers in the sequence you want. Some examples of when a server may need to be backed up or
restored are:

- Create a duplicate of a domain controller, for example, create a duplicate in a lab
  environment for testing purposes
- Restore a domain controller to a specific state-in-time image
- Restore lost or deleted data

You can backup and restore servers through the following interfaces:

- [Forest Page](/docs/identityrecovery/3.1/admin/forest/forest.md)
    - Configure backup settings for domain controllers
    - Restore one or more domain controllers in a forest by following the steps in the
      [Create a Recovery Playbook](/docs/identityrecovery/3.1/admin/forest/recover.md#create-a-recovery-playbook) topic
