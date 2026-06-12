---
title: "Configure Exchange for Monitoring Mailbox Access"
description: "Configure Exchange for Monitoring Mailbox Access"
sidebar_position: 30
---

# Configure Exchange for Monitoring Mailbox Access

Netwrix Auditor allows tracking non-owner mailbox access in your Exchange organization.

It is recommended to select **Adjust audit settings automatically** option when setting up Exchange
monitoring in Netwrix Auditor. See the
[Create a New Monitoring Plan](/docs/auditor/10.9/admin/monitoringplans/create.md) topic for additional
information.

However, in some scenarios users may need to apply required audit settings manually. For that,
review the following procedures:

- Configuring mailbox access tracking for Exchange 2019, 2016 and 2013 manually
- Configuring mailbox access tracking for Exchange 2010 manually

## Configuring mailbox access tracking for Exchange 2019, 2016 and 2013 manually

Perform the procedures below only if you do not want to enable the automatic audit configuration
option when setting up monitoring in Netwrix Auditor.

You can configure auditing for:

- All mailboxes (User, Linked, Equipment, and Room mailbox)
- Selected mailboxes

| Track...         | Steps...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| All mailboxes    | 1. On the computer where the monitored Exchange server is installed, navigate to **Start → Programs → Exchange Management Shell**. 2. Execute the following command: Get-MailboxDatabase -Server `{0}` \| foreach \{ Get-Mailbox -RecipientTypeDetails UserMailbox,SharedMailbox,EquipmentMailbox,LinkedMailbox,RoomMailbox \| Set-Mailbox -AuditEnabled $true -AuditAdmin Update,Copy,Move,MoveToDeletedItems,SoftDelete,HardDelete,FolderBind,SendAs, SendOnBehalf,MessageBind,Create -AuditDelegate Update,Move,MoveToDeletedItems,SoftDelete,HardDelete,FolderBind,SendAs,SendOnBehalf,Create \} Where the _`{0}`_ character must be replaced with your audited server FQDN name (e.g., _stationexchange.enterprise.local_). If you are going to audit multiple Exchange servers, repeat these steps for each audited Exchange server.                                                                                                                     |
| Selected mailbox | 1. On the computer where the monitored Exchange server is installed, navigate to **Start → Programs → Exchange Management Shell**. 2. Execute the following command: Set-Mailbox -Identity `{0}` -AuditEnabled $true -AuditAdmin Update,Copy,Move,MoveToDeletedItems,SoftDelete,HardDelete,FolderBind,SendAs,SendOnBehalf,MessageBind,Create -AuditDelegate Update,Move,MoveToDeletedItems,SoftDelete,HardDelete,FolderBind,SendAs,SendOnBehalf,Create Where the _`{0}`_ character must be replaced with one of the following: - Display Name. Example: "Michael Jones" - Domain\User. Example: enterprise.local\MJones - GUID. Example: `{c43a7694-ba06-46d2-ac9b-205f25dfb32d}` - (DN) Distinguished name. Example: CN=MJones,CN=Users,DC=enterprisedc1,DC=enterprise,DC=local - User Principal Name. Example: MJones@enterprise.local If you are going to audit multiple individual mailboxes, repeat these steps for each mailbox on each Exchange server. |

## Configuring mailbox access tracking for Exchange 2010 manually

Perform the procedure below only if you do not want to enable network traffic compression option
when setting up Exchange monitoring in Netwrix Auditor.

**Step 1 –** On the computer where the monitored Exchange server is installed, navigate to **Start →
Programs → Exchange Management Shell**.

**Step 2 –** Execute the following command:

`Set-EventLogLevel "MSExchangeIS\9000 Private\Logons" –Level Low`

**Step 3 –** Navigate to **Start → Run** and type _"services.msc"_. In the Services snap-in, locate
the Microsoft Exchange Information Store service and restart it.
