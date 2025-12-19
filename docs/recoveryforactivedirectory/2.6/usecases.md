---
title: "Use Cases"
description: "Use Cases"
sidebar_position: 3
---

# Use Cases

Recovery for Active Directory enables you to rollback and recover both accidental and malicious
changes to Active Directory. This topic outlines common use cases as examples.

## Recover a Deleted Object

Deleted objects can be difficult to recover natively without the Active Directory Recycle Bin
enabled, which is not enabled by default. While enabling the Recycle Bin enhances the restore
process, it is not a requirement for Recovery for Active Directory. An example of when a deleted
object may need to be restored is:

- A user account has been accidentally deleted and it needs to be reinstated

Restoring a deleted object can be accomplished through the following interface in the Recovery for
Active Directory Console:

- [Active Directory Page](/docs/recoveryforactivedirectory/2.6/admin/activedirectory/overview.md)
    - Locate the desired object in the Recycle Bin.
    - Recover the object by following the steps in the
      [Recover an Object](/docs/recoveryforactivedirectory/2.6/admin/activedirectory/recover.md#recover-an-object) topic.

## Rollback Changes to an Object

Active Directory does not offer native ways to undo changes made to objects. Recovery for Active
Directory can rollback object changes to any state captured within a backup. An example of when a
change to an object may need to be rolled back is:

- Someone made a group membership change that impacted a user’s access

Rolling back object changes can be accomplished through the following interface in the Recovery for
Active Directory Console:

- [Active Directory Page](/docs/recoveryforactivedirectory/2.6/admin/activedirectory/overview.md)
    - Locate the desired object
    - Rollback changes to the object by following the steps in the
      [Rollback Objects](/docs/recoveryforactivedirectory/2.6/admin/activedirectory/rollback.md) topic

## Rollback Attribute Changes

A massive number of attributes changes in Active Directory can cause significant security and
operational issues. Recovery for Active Directory can rollback attribute changes to any state
captured within a backup. Some examples of when a change to an attribute may need to be rolled back
are:

- Joe’s department attribute was changed and needs to be rolled back to what it was originally
- A user’s display name was changed and needs to be rolled back

Rolling back attribute changes can be accomplished through the following interface within the
Recovery for Active Directory Console:

- [Active Directory Page](/docs/recoveryforactivedirectory/2.6/admin/activedirectory/overview.md)
    - Locate the desired object
    - Rollback changes to the object by following the steps in the
      [Rollback Objects](/docs/recoveryforactivedirectory/2.6/admin/activedirectory/rollback.md) topic

> Remember to select the desired attribute for rollback

## Rollback Group Policy Object Changes

Group Policy Objects (GPOs) control many aspects of operations, security, and software deployment.
Recovery for Active Directory can rollback GPOs to any state captured within a backup. For this,
Group Policy Management Console must be installed on the Recovery for Active Directory server. See
Steps 9 and 10 in the [Add a Domain](/docs/recoveryforactivedirectory/2.6/admin/configuration/domain.md#add-a-domain) topic for
additional information. An example of when a GPO change may need to be rolled back is:

- A GPO change caused users to lose access to a server or application

Rolling back GPO changes can be accomplished through the following interface in the Recovery for
Active Directory Console:

- [Active Directory Page](/docs/recoveryforactivedirectory/2.6/admin/activedirectory/overview.md)
    - Locate the desired object
    - Rollback changes to the object by following the steps in the
      [Rollback Objects](/docs/recoveryforactivedirectory/2.6/admin/activedirectory/rollback.md) topic

## Domain Controller Backup and Forest Restore from Backup

Recovery for Active Directory can backup domain controllers to prevent data loss. The
[Forest Page](/docs/recoveryforactivedirectory/2.6/admin/forest/forest.md) allows administrators to configure and manage backups for a
domain controller. You can then restore a domain controller backup using the backup file created by
Recovery for Active Directory. To restore a forest, you can create a playbook to restore the domain
controllers in a desired sequence. Some examples of when a server may need to be backed up or
restored are:

- Stand up a duplicate of a domain controller, for example, stand up a duplicate in a lab
  environment for testing purposes
- Restore a domain controller to a specific state-in-time image
- Restore lost or deleted data

Server backup and restore can be accomplished through the following interfaces:

- [Forest Page](/docs/recoveryforactivedirectory/2.6/admin/forest/forest.md)
    - Configure backup settings for domain controllers
    - Restore one or more domain controllers in a forest by following the steps in the
      [Create a Recovery Playbook](/docs/recoveryforactivedirectory/2.6/admin/forest/recover.md#create-a-recovery-playbook) topic
