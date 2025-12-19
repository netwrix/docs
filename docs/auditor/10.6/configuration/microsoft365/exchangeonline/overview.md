---
title: "Exchange Online"
description: "Exchange Online"
sidebar_position: 20
---

# Exchange Online

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, your current audit settings will be
  checked on each data collection and adjusted if necessary.
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

    - Unified audit log must be enabled for a Tenant. See the Microsoft
      [Turn auditing on or off](https://docs.microsoft.com/en-us/microsoft-365/compliance/turn-audit-log-search-on-or-off?view=o365-worldwide)
      article for additional information.
    - If you plan to audit non-owner mailbox access within your Exchange Online organization, native
      audit logging must be enabled for user, shared, equipment, linked, and room mailboxes:

        - Access types: administrator , delegate user
        - Actions: Update, Move, MoveToDeletedItems, SoftDelete, HardDelete, FolderBind, SendAs,
          SendOnBehalf, Create

    - Depending on authentication type (basic or modern) and deployment scenario, you will need to
      perform related configuration procedures:

        - Prepare a Data Collecting Account as described in the
          [Permissions for Exchange Online Auditing](/docs/auditor/10.6/configuration/microsoft365/exchangeonline/permissions.md)
          topic
        - Configure required protocols and ports, as described in the
          [Exchange Online Ports](/docs/auditor/10.6/configuration/microsoft365/exchangeonline/ports.md)
          topic

## Monitored Object Types and Attributes

See the full list of object types and attributes monitored by Exchange Online.

Mailboxes:

- UserMailbox
- SharedMailbox
- EquipmentMailbox
- LinkedMailbox
- RoomMailbox

Users:

- MailUser
- GuestMailUser
- User (Entity under UserMailbox or MailUser)

Groups:

- Role Group \ RoleGroup
- Mail-enabled security\MailUniversalSecurityGroup
- Dynamic distribution list\DynamicDistributionGroup
- Distribution list\MailUniversalDistributionGroup
- Microsoft 365 \ GroupMailbox
- ExchangeSecurityGroup

Folders:

- MailFolder
- Permissions:
- SendAs
- FullAccess
- ChangeOwner
- DeleteItem
- ExternalAccount
- ChangePermission
- ReadPermission

Azure:

- Group

Properties

Refer to the table to see Properties used in the Snapshot collection.

| Type                                                                                                                                                        | Properties                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Mailbox Shared Mailbox Equipment Mailbox Room‎ Mailbox‎ Linked Mailbox Mail-enabled security Dynamic distribution list Distribution list Microsoft 365 | Identity Name DisplayName DistinguishedName PrimarySmtpAddress Guid ArchiveGuid ExternalDirectoryObjectId ExchangeObjectId AuditEnabled AuditAdmin AuditDelegate AuditLogAgeLimit Type OwnerUPN ExchangeSecurityDescriptorSddl SendOnBehalfPrincipals Sid IsDirSynced SerializationData ForwardingAddress ForwardingSMTPAddress DeliverToMailboxAndForward |
| ExchangeSecurityGroup                                                                                                                                       | RecipientTypeDetails ExchangeObjectId ExternalDirectoryObjectId ExternalDirectoryObjectId Name                                                                                                                                                                                                                                                             |
| RoleGroup                                                                                                                                                   | ExchangeObjectId Name Sid UserFriendlyName UserPrincipalName                                                                                                                                                                                                                                                                                               |
| MailUser GuestMailUser User                                                                                                                                 | Identity Name DisplayName DistinguishedName SamAccountName UserPrincipalName ObjectCategory Id ExchangeObjectId ExternalDirectoryObjectId OrganizationId OriginatingServer RecipientType RecipientTypeDetails IsDirSynced Sid                                                                                                                              |
| MailFolder                                                                                                                                                  | ObjectType ObjectId DisplayName MailboxGuid SecurityDescriptorSddl ParentFolderId ChildFolderCount UnreadItemCount TotalItemCount WellKnownName Childs                                                                                                                                                                                                     |
| SendAs permissions                                                                                                                                          | Trustee AccessControlType AccessRights IsInherited InheritanceType IsValid ObjectState                                                                                                                                                                                                                                                                     |
| Permissions: FullAccess ChangeOwner DeleteItem ExternalAccount ChangePermission ReadPermission                                                              | MailboxIdentity User UserSid IsOwner AccessRights IsInherited Deny InheritanceType                                                                                                                                                                                                                                                                         |

Refer to the table to see Properties used in membership collection.

| Type        | Properties                                                                                                                                                                                                                                                             |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Azure group | Id Classification CreatedDateTime Description DisplayName GroupTypes Mail MailEnabled MailNickname OnPremisesLastSyncDateTime OnPremisesSecurityIdentifier OnPremisesSyncEnabled ProxyAddresses RenewedDateTime SecurityEnabled Visibility ResourceProvisioningOptions |

## Monitored Actions

See the full list of actions monitored by Exchange Online.

Monitored Sign-In types:

- Delegate
- Admin

Delegate:

- A user who's been assigned the SendAs, SendOnBehalf, or FullAccess permission to another mailbox.
- An admin who's been assigned the FullAccess permission to a user's mailbox.

Admin:

- The mailbox is searched with one of the following Microsoft eDiscovery tools:

    - Content Search in the compliance portal.
    - eDiscovery or eDiscovery (Premium) in the compliance portal.
    - In-Place eDiscovery in Exchange Online.

• The mailbox is accessed by using the Microsoft Exchange Server MAPI Editor.

• The mailbox is accessed by an account impersonating another user. This occurs when the
ApplicationImpersonation role is assigned to an account, such as an application, which is now
actively accessing the data.

| Sign-In types  | Action Types       | Description                                                                                                                                                                                                                                                                          |
| -------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Delegate Admin | Update             | A message or any of its properties was changed.                                                                                                                                                                                                                                      |
| Admin          | Copy               | A message or any of its properties was changed.                                                                                                                                                                                                                                      |
| Delegate Admin | Move               | A message was moved to another folder.                                                                                                                                                                                                                                               |
| Delegate Admin | MoveToDeletedItems | A message was deleted and moved to the Deleted Items folder.                                                                                                                                                                                                                         |
| Delegate Admin | SoftDelete         | A message was permanently deleted or deleted from the Deleted Items folder. Soft-deleted items are moved to the Recoverable Items folder.                                                                                                                                            |
| Delegate Admin | FolderBind         | A mailbox folder was accessed. This action is also logged when the admin or delegate opens the mailbox. **NOTE:** Audit records for folder bind actions performed by delegates are consolidated. One audit record is generated for individual folder access within a 24-hour period. |
| Delegate Admin | SendAs             | A message was sent using the SendAs permission. This permission allows another user to send the message as though it came from the mailbox owner.                                                                                                                                    |
| Delegate Admin | SendOnBehalf       | A message was sent using the SendOnBehalf permission. This permission allows another user to send the message on behalf of the mailbox owner. The message indicates to the recipient who the message was sent on behalf of and who actually sent the message.                        |
| Delegate Admin | Create             | An item was created in the Calendar, Contacts, Draft, Notes, or Tasks folder in the mailbox (for example, a new meeting request is created). Creating, sending, or receiving a message isn't audited. Also, creating a mailbox folder isn't audited.                                 |
