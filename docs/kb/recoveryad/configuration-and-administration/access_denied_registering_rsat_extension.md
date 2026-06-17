---
description: >-
  Resolve the Access Denied (0x80070005) error that occurs when registering the
  RSAT Extension in the Netwrix Identity Recovery Configuration Utility by
  delegating the required Active Directory write permissions.
keywords:
  - Access Denied
  - 0x80070005
  - RSAT Extension
  - Register RSAT Extension
  - Configuration Utility
  - DisplaySpecifiers
  - adminContextMenu
  - Active Directory permissions
  - delegate AD permissions
  - Identity Recovery
  - NRAD
  - Configuration partition
products:
  - identityrecovery
sidebar_label: "Error: Access Denied (0x80070005) Registering the RSAT Extension"
tags: [kb]
title: "Error: Access Denied (0x80070005) Registering the RSAT Extension"
---

# Error: Access Denied (0x80070005) Registering the RSAT Extension

## Symptom

Clicking **Register** in the Netwrix Identity Recovery Configuration Utility under **Active Directory > RSAT Extension** fails with an Access Denied error (`0x80070005`).

## Cause

The error occurs when the account running the Configuration Utility does not have write permission on the associated `displaySpecifier` objects.

Clicking **Register** does not write to the local registry. It writes to **Active Directory**. Specifically, it connects to the `CN=DisplaySpecifiers` container in the AD Configuration partition and appends the RSAT Extension GUID (`{50FB3A3C-5700-4232-AE3B-C6D49A6A97AB}`) to the `adminContextMenu` attribute on every `displaySpecifier` object it finds.

## Resolution

The account running the Configuration Utility requires the following minimum Active Directory permission:

| Scope | Object Class | Attribute | Permission |
|---|---|---|---|
| `CN=DisplaySpecifiers,CN=Configuration,DC=...` (all descendants) | `displaySpecifier` | `adminContextMenu` | Write |

An account with control over the Configuration partition — such as a Domain Admin — must complete the following steps:

1. Run the following PowerShell script once to delegate the required permission:

   ```powershell
   Import-Module ActiveDirectory

   $domain = Get-ADRootDSE
   $configNC = $domain.configurationNamingContext

   # Replace with the account that will run the Configuration Utility
   $account = "DOMAIN\AccountName"

   $acl = Get-Acl "AD:\CN=DisplaySpecifiers,$configNC"

   $identity      = [System.Security.Principal.NTAccount]$account
   $adRight       = [System.DirectoryServices.ActiveDirectoryRights]::WriteProperty
   $type          = [System.Security.AccessControl.AccessControlType]::Allow
   $inheritance   = [System.DirectoryServices.ActiveDirectorySecurityInheritance]::Descendents

   # GUID for the adminContextMenu attribute
   $attributeGuid  = [Guid]"bf9679c8-0de6-11d0-a285-00aa003049e2"

   # GUID for the displaySpecifier object class
   $objectTypeGuid = [Guid]"e0fa1e62-9b45-11d1-aebc-0000f80367c1"

   $ace = New-Object System.DirectoryServices.ActiveDirectoryAccessRule(
       $identity, $adRight, $type, $attributeGuid, $inheritance, $objectTypeGuid
   )

   $acl.AddAccessRule($ace)
   Set-Acl "AD:\CN=DisplaySpecifiers,$configNC" $acl
   ```

   > **NOTE:** The `CN=DisplaySpecifiers` container is in the Configuration naming context, which is forest-wide. This delegation applies across all domains in the forest. This is expected behavior, as Display Specifiers are forest-scoped by design.

2. Verify the delegation applied correctly by running the following command:

   ```powershell
   $domain = Get-ADRootDSE
   Get-Acl "AD:\CN=DisplaySpecifiers,$($domain.configurationNamingContext)" |
       Select-Object -ExpandProperty Access |
       Where-Object { $_.IdentityReference -like "*AccountName*" }
   ```

After completing these steps, the delegated account can register the RSAT Extension without error.
