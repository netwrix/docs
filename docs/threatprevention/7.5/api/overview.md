---
title: "PowerShell API Integration"
description: "PowerShell API Integration"
sidebar_position: 50
---

# PowerShell API Integration

Using PowerShell, you can obtain information on or manipulate specific policy, collection, and
Netwrix Threat Manager integration configurations in the Threat Prevention Administration Console
without having it open. This can be done on the same machine or from a remote server where the
Enterprise Manager is not located. The following PowerShell APIs can be used:

- Initial Configuration:
  - Connect-SIEnterpriseManager
- Informative APIs

  :::note
  These APIs do not require any additional configuration. They display Agent status from
  the [Agents Interface](/docs/threatprevention/7.5/admin/agents/overview.md) and a list of available PowerShell APIs the
  user can utilize.
  :::


  - Get-SIAgentStatus – Displays Agent status from the Agent grid columns on the
    [Agents Interface](/docs/threatprevention/7.5/admin/agents/overview.md)
  - Get-SI Help – Lists available PowerShell APIs for Threat Prevention
  - Get-SIHelp [API Name] – Displays detailed information about the PowerShell API

- Policies and Collections:
  - Get-SIPolicy
  - Enable-SIPolicy
  - Remove-SIPolicy
  - Export-SIPolicy
  - Import-SIPolicy
  - Get-SICollection
  - Remove-SICollection
  - Export-SICollection
  - Import-SICollection
- Enterprise Password Enforcement (EPE):
  - Test-ValidatePassword
  - Export-SICharacterSubstitution
  - Import-SICharacterSubstitution
  - Export-SICharacterSubstitutionWords
  - Import-SICharacterSubstitutionWords
  - Export-SIPasswordsDictionary
  - Import-SIPasswordsDictionary
  - Set-SIPwnedDB
- Threat Manager Event Sink Tab
  - Get-SIDefendConfig
  - Set-SIDefendConfig
- LDAP Deception for Threat Manager:
  - Get-SILdapDeception
  - Set-SILdapDeception

## Prerequisites

The following prerequisites must be met before using the APIs:

- The PowerShell service account must be an Active Directory account with the Threat Prevention
  administrator role assigned to it. The role is assigned through the
  [Users and Roles Window](/docs/threatprevention/7.5/admin/configuration/userroles/overview.md).
- The Threat Prevention PowerShell module (SI.SIMonitor.PowerShell.dll) must be loaded into
  PowerShell. This module is stored in the installation directory within the Enterprise Manager
  folder:

**…\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager\**

  To disallow the use of the PowerShell module, remove the module from the Enterprise Manager
  folder.

- PowerShell commands are executed through a PowerShell console on either the Enterprise Manager
  server or on a remote server. When PowerShell is used on a remote server without the Enterprise
  Manager installed, see the Remote PowerShell Connection section for requirements.

## Not a Policy XML Expert

Follow the steps to compare two XML files as exported from Threat Prevention.

**Step 1 –** Craft the desired policy in the Administration Console and export as a XML file.

**Step 2 –** In the Administration Console, edit the same policy settings and filters through the
Event Type tab. Export as a second XML file with a different name.

**Step 3 –** Open both XML files and compare the XML to see how policies are altered.

Once you identify how Threat Prevention modifies XML files, you can apply that to the
[Add or Modify Policies](/docs/threatprevention/7.5/api/policy.md#add-or-modify-policies) instructions.
