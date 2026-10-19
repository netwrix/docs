---
title: "Exchange"
description: "Exchange"
sidebar_position: 30
---

# Exchange

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Configure auditing properly to ensure audit data
integrity; otherwise, your change reports may contain warnings, errors, or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is the recommended method. If you select to
  configure audit automatically in the target environment, Auditor checks your current audit
  settings on each data collection and adjusts them if necessary.
- Manually – Adjust native audit settings manually to collect comprehensive, reliable audit data.
  You can enable Auditor to continually enforce the relevant audit policies, or configure them
  manually:

    - In the Exchange environment:

        - Install the ADSI Edit utility on the server that you use for configuration, if that
          server isn't a domain controller
        - The following policies must be set to _"Success"_ for the effective domain controllers
          policy:

            - Audit account management
            - Audit directory service access

        - The Audit logon events policy must be set to _"Success"_ (or _"Success"_ and "_Failure"_)
          for the effective domain controllers policy.
        - You can configure the Advanced audit policy settings instead of the basic audit policy
          settings.
        - The Maximum Security event log size must be set to 4GB. The retention method of the
          Security event log must be set to _“Overwrite events as needed.”_
        - Auto archiving must be enabled to prevent audit data loss if log overwrites occur.
        - The Object-level audit settings must be configured for the Domain, Configuration, and
          Schema partitions.
        - The AD tombstoneLifetime attribute must be set to _"730"_.
        - If you have an on-premises Exchange server 2019, 2016, 2013, or 2010 in your Active
          Directory domain, consider that some changes can be made via that Exchange server. To be
          able to audit and report who made those changes, you should configure the Exchange
          Administrator Audit Logging (AAL) settings, as described in the
          [Exchange Administrator Audit Logging Settings](/docs/auditor/10.9/configuration/exchange/auditlog.md) topic.
        - The Administrator Audit Logging settings must be configured (only required for Exchange
          2019, 2016, 2013, or 2010). See the
          [Exchange Administrator Audit Logging Settings](/docs/auditor/10.9/configuration/exchange/auditlog.md) topic for additional
          information.
        - To audit mailbox access, native audit logging must be enabled for user, shared,
          equipment, linked, and room mailboxes:

            - Access types: administrator , delegate user
            - Actions: Update, Move, MoveToDeletedItems, SoftDelete, HardDelete, FolderBind, SendAs,
              SendOnBehalf, Create

        - If you want to track non-owner access, configure mailbox monitoring. See the
          [Configure Exchange for Monitoring Mailbox Access](/docs/auditor/10.9/configuration/exchange/mailboxacccess.md) topic for additional
          information.

    - On the Auditor console computer:

        - If you have enabled automatic log backup for the Security log of your domain controller,
          you can instruct Auditor to clear the old backups automatically. For that, use the
          **CleanAutoBackupLogs** registry key, as described in the
          [Active Directory Registry Key Configuration](/docs/auditor/10.9/configuration/activedirectory/registrykey.md) topic.

            **_RECOMMENDED:_** Adjust retention period for the backup files accordingly (default is
            **50** hours). See the
            [Adjust Security Event Log Size and Retention](/docs/auditor/10.9/configuration/activedirectory/securitylog.md) topic.

        - To collect event data, the Secondary Logon service must be running. Open
          **Administrative Tools** > **Services**, right-click the **Secondary Logon** service, and
          on the **General** tab, ensure that the startup type for this service isn't _Disabled_.

_Remember,_ for Exchange auditing, do the following:

1. Configure Data Collecting Account, as described in the
   [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) topic.
2. Configure required protocols and ports, as described in the [Exchange Ports](/docs/auditor/10.9/configuration/exchange/ports.md) topic.

## Monitored Object Types, Actions, and Attributes

Netwrix Auditor tracks changes that have been made to all Exchange server object classes and
attributes. The list of Exchange object classes is version-dependent.

- The list of schema changes for Exchange 2013 can be found in the following Microsoft article:
  [https://learn.microsoft.com/en-us/exchange/exchange-2013-active-directory-schema-changes-exchange-2013-help](https://learn.microsoft.com/en-us/exchange/exchange-2013-active-directory-schema-changes-exchange-2013-help)
- The list of schema changes for Exchange 2016 can be found in the following Microsoft article:
  [https://learn.microsoft.com/en-us/exchange/plan-and-deploy/active-directory/ad-schema-changes?view=exchserver-2016](https://learn.microsoft.com/en-us/exchange/plan-and-deploy/active-directory/ad-schema-changes?view=exchserver-2016)
- The list of schema changes for Exchange 2019 can be found in the following Microsoft article:
  [https://learn.microsoft.com/en-us/exchange/plan-and-deploy/active-directory/ad-schema-changes?view=exchserver-2019](https://learn.microsoft.com/en-us/exchange/plan-and-deploy/active-directory/ad-schema-changes?view=exchserver-2019)

## Non-Owner Mailbox Access

Netwrix Auditor can monitor non-owner access to mailboxes in an on-premises Exchange organization.
By default, Auditor monitors the following mailbox types:

- UserMailbox
- EquipmentMailbox
- LinkedMailbox
- RoomMailbox

Here is the list of actions captured:

| Item                                                                     | Action      | Audited                                                                                | How this change is reported by the product                                      |
| ------------------------------------------------------------------------ | ----------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Emails and Folders                                                       | New email   | Yes                                                                                    | The message was created in \Drafts folder with subject `<...>`                  |
| A user with Send as or Send on behalf permissions tried to send an email | Yes         | Message located in Root with subject `<...>` was queued for delivery to IPM.Message.   |
| Delete email                                                             | Yes         | Message with subject `<...>` was moved from folder \Drafts to folder \Deleted Items.   |
| Move email to another folder                                             | Yes         | Message with subject `<...>` was moved from folder `<...>` to folder `<...>`.          |
| Create rules for emails                                                  | No          | —                                                                                      |
| Email read attempt                                                       | No          | —                                                                                      |
| New folder                                                               | No          | —                                                                                      |
| Open folder                                                              | Yes         | The folder `<...>` was opened.                                                         |
| Delete folder                                                            | Yes         | Folder `<...>` was moved from folder `<...>` to folder \Deleted Items.                 |
| Empty folder                                                             | Yes         | The folder `<...>` was opened.                                                         |
| Edit folder permissions                                                  | No          | —                                                                                      |
| Calendar                                                                 | New event   | Yes                                                                                    | Message was created in \Calendar with subject `<...>`.                          |
| Event read attempt                                                       | No          | —                                                                                      |
| Edit event                                                               | Yes         | Message located in \Calendar with subject `<...>` was modified.                        |
| Delete event                                                             | Yes         | Message with subject `<...>` was moved from folder \Calendar to folder \Deleted Items. |
| People                                                                   | New contact | Yes                                                                                    | Message was created in \Contacts\Recipient Cache with subject `<contact name>`. |
| Contact read attempt                                                     | Yes         | Folder \Contacts\Recipient Cache was opened.                                           |
| Edit contact                                                             | No          | —                                                                                      |
| Delete contact                                                           | Yes         | Message with subject `<...>` was moved from folder \Contacts to folder \Deleted Items. |
| Tasks                                                                    | New task    | Yes                                                                                    | Message was created in \Tasks with subject `<...>`.                             |
| Task read attempt                                                        | No          | —                                                                                      |
| Edit task                                                                | Yes         | Message located in \Tasks with subject `<...>` was modified.                           |
| Delete task                                                              | Yes         | Message with subject `<...>` was moved from folder \Tasks to folder \Deleted Items.    |
