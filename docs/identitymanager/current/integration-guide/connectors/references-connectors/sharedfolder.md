---
title: "SharedFolders"
description: "SharedFolders"
sidebar_position: 290
---

# SharedFolders

This connector exports users and permissions from Windows shared folders.

This page is about [Shared Folders](../../../integration-guide/connectors/references-packages/shared-folders).

![Package: Storage/Shared Folders](/images/identitymanager/integration-guide/connectors/references-connectors/sharedfolder/packages_sharedfolders_v603.webp)

## Overview

Also known as UFA (Identity Manager Folder Access), this connector can be used to scan the access rights assigned to folders and files in computers and networks which comply with the [Windows File Security and Access Rights systems](https://docs.microsoft.com/en-us/windows/win32/fileio/file-security-and-access-rights).

## Prerequisites

Implementing this connector requires an account with the permissions:

- to access all relevant folders and files and read their entitlements;
- **Log on as a batch job** in the local group policy, when the connector's authentication mode is
batch.

    ![SharedFolder - Permission for Batch Authentication](/images/identitymanager/integration-guide/connectors/references-connectors/sharedfolder/sharedfolder_permission.webp)

## Export

This connector scans shared folders in order to export their content to CSV files.

### Configuration

This process is configured through a [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) in the UI and/or the XML configuration, and in the `*appsettings.agent.json* > Connections` section:

```json
*appsettings.agent.json*
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

> The following example reads `12` levels of folders in the folders `R&D_Projects` and `Management`
> in the network `OfficeNetwork` and in `C:/`. We only read entitlements about folders and we don't
> have access rights to the entitlements associated with the SIDs `S-1-3-2-4` and `S-5-7-6-8`. We
> use the service account [account@example.com](mailto:account@example.com) with its related
> password and domain, and interactive connection:
>
> ```
> *appsettings.agent.json*
> {
>   ...
>   "Connections": {
>     ...
>     "SharedFolderExport": {
>         "InputDirectories": ["OfficeNetwork/R&D_Projects", "OfficeNetwork/Management", "C:/"],
>         "OnlyDirectoryScan": "true",
>         "LevelOfScan": "12",
>         "ListOfSIDToAvoid": ["S-1-3-2-4", "S-5-7-6-8"],
>         "Login": "account@example.com",
>         "Password": "accountexamplepassword",
>         "Domain": "Example",
>         "Interactive": true
>     }
>   }
> }
> ```

#### Setting attributes

 | Name | Details | 
 | --- | --- | 
 | InputDirectories required | **Type** String List **Description** Paths of the folders to be scanned. | 
 | Domain optional | **Type** String **Description** Domain of the account used to access files and read their access rights. | 
 | Interactive default value: False | **Type** Boolean **Description** `True` to set authentication as interactive, `False` to set it as batch. | 
 | LevelOfScan optional | **Type** Int32 **Description** Number of file and folder levels to be scanned. By default, it scans the whole folder tree for each input directory. | 
 | ListOfSIDToAvoid optional | **Type** String List **Description** SIDs (users or groups) to exclude from the scan. | 
 | OnlyDirectoryScan default value: False | **Type** Boolean **Description** `True` to scan only folders' entitlements and not files', `False` to scan all. | 
 | --- | --- | 
 | --- | --- | 
 | Login optional | **Type** String **Description** Login of the account used to access the files and folders. **Note:** when not specified and `Password` neither, then the account running Identity Manager will be used. **Note:** if `Domain` is null, then `Login` must be set in the User Principal Name (UPN) format. | 
 | Password optional | **Type** String **Description** Password of the account used to access the files and folders. **Note:** when not specified and `Login` neither, then the account running Identity Manager will be used. | 

### Output details

This connector is meant to generate to the [Application Settings](../../../integration-guide/network-configuration/agent-configuration/appsettings)Export Output folder the following CSV files:

- `<connectionIdentifier>_ACE.csv`, with the following columns:
    - **key**: concatenation of `Right`, `Path` and `OwnerSID`;
    - **Path**: path of the folder or file;
    - **Right**: entitlement among the following, listed from weakest to strongest:
ListDirectory / ReadData / CreateFiles / WriteData / AppendData / CreateDirectories / ReadExtendedAttributes / WriteExtendedAttributes / ExecuteFile / Traverse / DeleteSubdirectoriesAndFiles / ReadAttributes / WriteAttributes / Write / Delete / ReadPermissions / Read / ReadAndExecute / Modify / ChangePermissions / TakeOwnership / Synchronize / FullControl
    - **AllowOrDeny**: `0` (or `false`) if the entitlement is allowed, `1` (or `true`) if it is
denied;
    - **OwnerSID**: SID of the entitlement's owner.
- `<connectionIdentifier>_PathInformations.csv`, with the following columns:
    - **Path**;
    - **ParentPath**: path of the file's or folder's parent folder;
    - **BlockInheritance**: `true` if the file or folder blocks entitlement inheritance in the tree;
    - **Hierarchy**: hierarchy in the scanned tree.
- `<connectionIdentifier>_SID.csv`, with only one column **SID**.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection), configured in
the `appsettings.encrypted.agent.json` file;
- An [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) safe;

 | Attribute | Naming Convention for the Key in Azure Key Vault | 
 | --- | --- | 
 | Domain | `Connections--<identifier>--Domain` | 
 | Interactive | `Connections--<identifier>--Interactive` | 
 | LevelOfScan | `Connections--<identifier>--MembersFile` | 
 | ListOfSIDToAvoid | `Connections--<identifier>--ListOfSIDToAvoid` | 
 | Login | `Connections--<identifier>--Login` | 
 | OnlyDirectoryScan | `Connections--<identifier>--OnlyDirectoryScan` | 
 | Password | `Connections--<identifier>--Password` | 
 | InputDirectories | `Connections--<identifier>--InputDirectories` | 

- A [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) able to store
Active Directory's `Login` and `Password`.

Protected attributes are stored inside a safe in <b>cyberark</b>, into an account whose identifier can be retrieved by Identity Manager from `*appsettings.<b>cyberark</b>.agent.json*`.

> For example:
>
> ```
> *appsettings.<b>cyberark</b>.agent.json*
> {
>   ...
>   "Connections": {
>     ...
>     "SharedFolderExport": {
>         "Login": "SharedFolderSettings",
>         "Password": "SharedFolderSettings"
>     }
>   }
> }
> ```

