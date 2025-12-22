---
title: "Netwrix Threat Manager APIs"
description: "Netwrix Threat Manager APIs"
sidebar_position: 50
---

# Netwrix Threat Manager APIs

The following APIs are related to where Threat Prevention sends the event data to, and how to
retrieve current information on the previously configured settings:

- Set-SIDefendConfig
- Get-SIDefendConfig

The following APIs are related to the LDAP Deception trap options on the
[Honey Token Tab](/docs/threatprevention/7.4/admin/configuration/threatmanagerconfiguration.md#honey-token-tab)
of the
[Netwrix Threat Manager Configuration Window](/docs/threatprevention/7.4/admin/configuration/threatmanagerconfiguration.md):

- Get-SILdapDeception
- Set-SILdapDeception

## Set Threat Manager Configuration

The `Set-SIDefendConfig` command tells Threat Prevention where to send the event data from all tab
settings on the
[Netwrix Threat Manager Configuration Window](/docs/threatprevention/7.4/admin/configuration/threatmanagerconfiguration.md).
There are three methods available for data output:

- Threat Manager AMQP (URI/Port) – Sends event data directly to Threat Manager
- File on an Agent – Sends event data to a specified file. The server must have a deployed Agent.
- Activity Monitor – Sends event data either directly to an Activity Monitor port or a file, that
  Activity Monitor will access on a domain controller where both the Threat Prevention Agent and
  Activity Monitor agent are located. Then Activity Monitor must be configured to send the data to
  Threat Manager. See the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for additional information.

  :::tip
    Remember, the port number for Activity Monitor is 4498.
  :::


The following parameter(s) are required:

- AppToken – String generated on the App Tokens page of Threat Manager Configuration Menu
- URI – Threat Manager hostname or IP address
- Protocol – Specifies the behavior of the string as AMQP or File path
- Path – File path to the Agent location where Threat Prevention event data is sent. This parameter
  is required when the protocol is set to File.
- ComputerName – Location the Threat Prevention Agents send event data for Threat Manager. This
  parameter is required when the protocol is set to AMQP.
- Port – Threat Managerport. The default is 10001.

Example using URI and AppToken to connect to Threat Manager:

`Set-SIDefendConfig -URI "amqp://192.168.9.52:10001" -AppToken "egJhbGciOiJIi8of71eg0Ulwk5o2nm5p..."`

Example using an output file on an Agent:

`Set-SIDefendConfig -Path "C:\TestOutput" -Protocol "File"`

Example using Activity Monitor to send to Threat Manager:

`Set-SIDefendConfig -Protocol "amqp" -ComputerName "LocalHost" -Port "4498"`

## Get Threat Manager Configuration

The `Get-SIDefendConfig` command is used to return all settings on the
[Event Sink Tab](/docs/threatprevention/7.4/admin/configuration/threatmanagerconfiguration.md#event-sink-tab)
of the Netwrix Threat Manager Configuration window.

## Get LDAP Deception

The `Get-SILdapDeception` command provides the current information configured in the
[Honey Token Tab](/docs/threatprevention/7.4/admin/configuration/threatmanagerconfiguration.md#honey-token-tab)
of the Netwrix Threat Manager Configuration window.

## Set LDAP Deception

The `Set-SILdapDeception` command changes the settings on the
[Honey Token Tab](/docs/threatprevention/7.4/admin/configuration/threatmanagerconfiguration.md#honey-token-tab)
of the Netwrix Threat Manager Configuration window.

:::tip
Remember, these settings must be an exact match to the configuration set up in the Threat Manager
Honey Token threat.
:::


The following parameter(s) are required:

- Enable [Bool]
  - 1 to enable
  - 0 to disable
- ReplacementSamAccountName
- SourceSamAccountName
- SubstitutionType
  - 1 for exact match
  - 2 for a substring

Example of LDAP Deception parameters:

Set-SILdapDeception -E "1" -S "SamAccountName" -R "NameToReplace" -T "1"
