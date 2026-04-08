---
title: "Microsoft Exchange"
description: "Microsoft Exchange"
sidebar_position: 150
---

# Microsoft Exchange

This connector exports mailboxes from a
[Microsoft Exchange](https://support.microsoft.com/en-us/office/what-is-a-microsoft-exchange-account-47f000aa-c2bf-48ac-9bc2-83e5c6036793)
instance.

This page is about [Microsoft Exchange](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/microsoft-exchange/index.md).

![Package: Server/Microsoft Exchange](/images/identitymanager/integration-guide/connectors/references-connectors/microsoftexchange/packages_exchange_v603.webp)

## Overview

Microsoft Exchange Server is Microsoft's email, calendar, contact, scheduling and collaboration
platform. It is deployed on the Windows Server operating system (OS) for business use. This
connector uses
[Exchange Server PowerShell (Exchange Management Shell)](https://docs.microsoft.com/en-us/powershell/exchange/exchange-management-shell?view=exchange-ps)
to export databases and mailboxes.

## Prerequisites

Implementing this connector requires:

- a Microsoft Exchange Server 2010, or later.
  [See here Exchange Server 2016's requirements](https://docs.microsoft.com/en-us/exchange/plan-and-deploy/system-requirements?view=exchserver-2016);
- installing Windows PowerShell.
  [See how to connect to Exchange servers using remote PowerShell](https://docs.microsoft.com/en-us/powershell/exchange/connect-to-exchange-servers-using-remote-powershell?view=exchange-ps).

## Export

This connector exports
[mailboxes](https://docs.microsoft.com/en-us/powershell/module/exchange/get-mailbox?view=exchange-ps)
and
[mailbox databases](https://docs.microsoft.com/en-us/powershell/module/exchange/get-mailboxdatabase?view=exchange-ps).
Two CSV files are generated, one with the
[mailbox properties](https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/ff328629(v=exchg.140))
(like `Database`, `EmailAddresses`, `ServerName` , etc.) and the other with
[mailbox database properties](https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/ff328150(v=exchg.140))
(like `Name`, `Server`, `Mounted`, etc.). These properties are explicitly part of the PowerShell
script used by Identity Manager.

### Configuration

This process is configured through a
[Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "MicrosoftExchangeExport": {
>       "AuthType": "Kerberos",
>       "Server": "http://mailbox01.contoso.com/PowerShell/"
>     }
>   }
> }
> ```

#### Setting attributes

| Name                                                                                   | Details                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server required                                                                        | **Type** String **Description** Address of the Exchange Server used by the remote PowerShell: `http://<ServerFQDN>/PowerShell/` where `<ServerFQDN>` is the fully qualified domain name of the Exchange server, like `mailbox01.contoso.com`. |
| PowerShellScriptPath default value: `{your usercube path}/Runtime/Export-Exchange.ps1` | **Type** String **Description** Path of the export script file.                                                                                                                                                                               |

### Output details

This connector is meant to generate the following files:

- `<connectionIdentifier>_mailboxes.csv` with the following columns:

    ```
    <connectionIdentifier>_databases.csv
    Command,Database,EmailAddresses,UseDatabaseRetentionDefaults,RetainDeletedItemsUntilBackup,DeliverToMailboxAndForward,ExchangeGuid,ExchangeUserAccountControl,ForwardingAddress,ForwardingSmtpAddress,IsMailboxEnabled,ProhibitSendQuota,ProhibitSendReceiveQuota,RecoverableItemsQuota,RecoverableItemsWarningQuota,CalendarLoggingQuota,IsResource,IsLinked,IsShared,SamAccountName,AntispamBypassEnabled,ServerName,UseDatabaseQuotaDefaults,UserPrincipalName,WhenMailboxCreated,IsInactiveMailbox,AccountDisabledIsDirSynced,Alias,OrganizationalUnit,DisplayName,MaxSendSize,MaxReceiveSize,PrimarySmtpAddress,RecipientType,RecipientTypeDetails,Identity,IsValid,Name,DistinguishedName,Guid,ObjectCategory,WhenChangedUTC,WhenCreatedUTC,ObjectState
    Insert,value1,value2,...,valueN
    ```

    > For example, we could have
    > `C:/identitymanagerContoso/Temp/ExportOutput/MicrosoftExchangeExport_mailboxes.csv`.

    [See more details on mailbox properties in Microsoft's documentation](https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/ff328629(v=exchg.140)).

- `<connectionIdentifier>_databases.csv` with the following columns:

    ```
    <connectionIdentifier>_databases.csv
    Command,Name,Server,Mounted,ObjectCategory,Guid,WhenChangedUTC,WhenCreatedUTC,ObjectState
    Insert,value1,value2,...,valueN
    ```

    [See more details on mailbox database properties in Microsoft's documentation](https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/ff328150(v=exchg.140)).

- `<connectionIdentifier>_cookie.bin` which stores the time of the last successful export, thus
  allowing incremental processes.

The CSV files are stored in the
[Application Settings](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings/index.md)Export
Output, and the cookie file in the Export Cookies folder.

## Fulfill

This connector can create, update or
delete[ mailboxes](https://docs.microsoft.com/en-us/powershell/module/exchange/get-mailbox?view=exchange-ps)'
addresses (PrimarySmtpAddress, ProxyAddress) and mailbox databases.

As it works via a PowerShell script. See the [PowerShellProv](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/powershellprov/index.md) topic
for additional information.

Identity Manager's PowerShell script can be found in the SDK in
`Usercube.Demo/Scripts/Fulfill-Exchange.ps1`.

See the [PowerShellProv](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/powershellprov/index.md) topic for additional information.

## Authentication

### Authentication Type

This connector uses Kerberos authentication when trying to connect with the Exchange Server.

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md), configured in
  the `appsettings.encrypted.agent.json` file;
- An [Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) safe;

- A [Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md)able to store
  Microsoft Exchange's `Server`.

This kind of credential protection can be used only for the export process.

The fulfill process' credentials can be protected by following the instructions for the
PowerShellProv connector. See the [PowerShellProv](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/powershellprov/index.md) topic for
additional information
