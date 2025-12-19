---
title: "ExchangePS: Category"
description: "ExchangePS: Category"
sidebar_position: 20
---

# ExchangePS: Category

The Category page contains a connection section where connection options are defined. It is also
where the query category is selected. The available query categories are sub-divided by auditing
focus.

![ExchangePS Data Collector Wizard Category page](/images/accessanalyzer/12.0/admin/datacollector/exchangeps/category.webp)

## Connection

In the Connection section, select the method for connecting to the target Exchange environment:

- Use Global setting – Reads from the global configuration from the **Settings** > **Exchange**
  node, specifically the **Client Access Server** (CAS) field

    - See the [Exchange](/docs/accessanalyzer/12.0/admin/settings/exchange.md) topic for additional information on these
      settings

- Use specific server – Use a different server from what is set in core

    - Exchange 2010 Servers – Can use the CAS server set in the global configuration (**Settings** >
      **Exchange** node)
    - Exchange 2013 & 2016 – Require an actual CAS server name:

        - If the **Settings** > **Exchange** node was configured for MAPI over HTTP, then an actual
          CAS server name was supplied and will be used by the ExchangePS Data Collector
        - If the **Settings** > **Exchange** node was configured for MAPI over HTTPS, then the
          global configuration will have a web address instead of an actual server. Therefore, each
          query requires the CAS server to be set as the specific server on the Category page.

- Use Office 365 – Connect to Office 365
- Use pipelined PowerShell – Processes each mailbox object in turn. When selected, the data
  collector streams data to the database instead of transferring batches of data.

    - This option uses less memory but is more sensitive to network conditions
    - Only available for Exchange 2013+ target environments

## Query Categories

The ExchangePS Data Collector contains the following query categories, sub-divided by auditing
focus:

- Mailbox Information

    - Mailboxes – Collects mailbox information
    - Mailbox Permissions – Collects permissions on mailbox folders (Exchange 2010 or later)
    - Mailbox Databases – Collects information on mailbox databases

        :::note
        This option is not available for Office 365 target environments
        :::


    - Mailbox Rights – Collects information on mailbox rights
    - Mailbox AD Rights – Collects information on mailbox Active Directory rights
    - Mailbox Search – Search mailboxes (Exchange 2010 or later)
    - Mailbox Access Logons – Collects information on mailbox access logons

- Exchange Organization

    - Exchange Users – Collects Exchange user properties

- Exchange ActiveSync

    - Exchange ActiveSync Mobile Devices – Collects Exchange ActiveSync for mobile devices

- Public Folder Information

    - Public Folder Content – Collects general statistics and sizing for the public folder
      environment
    - Public Folder Permissions – Collects permission information for the public folder environment

- Office 365 – Only available for Office 365 target environments

    - Mail Flow Metrics – Collects information about mail flow in the Exchange Online environment

- Domain Information

    - Domains – Collects information about Domains in the Exchange environment

Each category has specific requirements and capabilities per auditing focus:

- [Mailbox Information](#mailbox-information)
- [Exchange Organization](#exchange-organization)
- [Exchange ActiveSync](#exchange-activesync)
- [Public Folder Information](#public-folder-information)
- [Office 365](#office-365)
- [Domain Information](#domain-information)

### Mailbox Information

Mailbox Information audit focus contains the following categories:

**Mailboxes**

This category gathers high-level statistics about the Mailboxes in the environment. It can be run
with quick properties or all properties. The quick properties are the first 14 properties and
significantly reduce the time it takes to return the information. The PowerShell queries this
category runs are as follows:

```
Get-Mailbox
Get-MailboxStatistics
Get-MailboxDatabase
```

When this category is selected, the following ExchangePS Data Collector Wizard pages are available
for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)

**Mailbox Permissions**

This category returns Mailbox Folder permissions and folder level statistics about the mailboxes.
The PowerShell queries this category runs are as follows:

```
Get-Mailbox
Get-MailboxFolderPermission
Get-MailboxStatistics
Get-MailboxDatabase
```

When this category is selected, the following ExchangePS Data Collector Wizard pages are available
for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)

**Mailbox Databases**

This category returns information about the Mailbox Databases which reside in the organization. The
PowerShell query this category runs is as follows:

```
Get-MailboxDatabase
```

When this category is selected, the following ExchangePS Data Collector Wizard pages are available
for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)

**Mailbox Rights**

This category returns Mailbox Rights assigned to each Mailbox, such as Full Mailbox Access. The
PowerShell query this category runs is as follows:

```
Get-MailboxDatabase
```

When this category is selected, the following ExchangePS Data Collector Wizard pages are available
for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)

**Mailbox AD Rights**

This category returns information about the Mailbox Databases which reside in the organization. The
PowerShell query this category runs is as follows:

```
Get-MailboxDatabase
```

When this category is selected, the following ExchangePS Data Collector Wizard pages are available
for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)

**Mailbox Search**

This category provides the capability to search the Mailbox for any criteria configured inside the
data collector. The PowerShell queries this category runs are as follows:

```
Search-Mailbox
Get-Mailbox
Get-MailboxDatabase
```

When this category is selected, the following ExchangePS Data Collector Wizard pages are available
for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Filter by Message](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/filtermessage.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)

**Mailbox Access Logons**

This category returns the Mailbox Access Auditing log details. Mailbox Access Auditing does need to
be enabled on the Mailboxes in order for this job to return any information. The PowerShell queries
this category runs are as follows:

```
Search-MailboxAuditLog
Get-Mailbox
```

When this category is selected, the following ExchangePS Data Collector Wizard pages are available
for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Mailbox Logons](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/mailboxlogons.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)

### Exchange Organization

Exchange Organization audit focus contains the following category:

**Exchange Users**

This category returns information about the Mail-Enabled Users in the Exchange environment. The
PowerShell queries this category runs are as follows:

```
Get-User
Get-CASMailbox
Get-Mailbox
Get-ThrottlingPolicyAssociation
```

When this category is selected, the following ExchangePS Data Collector Wizard pages are available
for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)

### Exchange ActiveSync

Exchange ActiveSync audit focus contains the following category:

**Exchange ActiveSync Mobile Devices**

This category returns ActiveSync device properties and the Exchange Mailboxes they are associated
to. The PowerShell queries this category runs are as follows:

```
Get-ActiveSyncDeviceStatistics
Get-Mailbox
```

When this category is selected, the following ExchangePS Data Collector Wizard pages are available
for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)

### Public Folder Information

Public Folder Information audit focus contains the following categories:

**Public Folder Content**

This category returns general statistics and sizing for the public folder environment. When it is
selected, the following ExchangePS Data Collector Wizard pages are available for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)

**Public Folder Permissions**

This category returns permissions information for the public folder environment. When it is
selected, the following ExchangePS Data Collector Wizard pages are available for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)

### Office 365

Office 365 audit focus contains the following category:

**Mail Flow Metrics**

This category returns information about mail flow in the target Exchange Online environment. When it
is selected, the following ExchangePS Data Collector Wizard pages are available for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Mail Flow](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/mailflow.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)

### Domain Information

Domain Information audit focus contains the following category:

**Domains**

This category returns information about domains in the Exchange environment. When it is selected,
the following ExchangePS Data Collector Wizard pages are available for configuration:

- [ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md)
- [ExchangePS: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/results.md)
- [ExchangePS: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/options.md)
- [ExchangePS: Error Logging](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.md)
- [ExchangePS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/summary.md)
