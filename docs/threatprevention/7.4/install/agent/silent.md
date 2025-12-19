---
title: "Agent Silent Install Option"
description: "Agent Silent Install Option"
sidebar_position: 20
---

# Agent Silent Install Option

You can use command line options to install the Agent silently. These options can be leveraged to
deploy the Agent via custom batch files, login scripts, or for integrating with third-party software
distribution solutions that an organization may already have in their environment.

**MSI Compliant Command-Line Options**

The WiX installer application for Agent runs under control of Windows installer component (MSI).
Therefore, standard MSI command-line options can be used with the
“threatprevention-agent-7.4.0.xxx.exe” install.

Available command-line options can be found in the
[Microsoft Standard Installer Command-Line Options](<https://msdn.microsoft.com/en-us/library/windows/desktop/aa372024(v=vs.85).aspx>)
article.

Two of the more useful options are:

- Silent installation option – `/q`
- Logging option – `/log "file_for_logging.log"`

**All Properties for the Agent Installer**

The following table details all properties that can be specified to the Agent installer via the
command line.

| Property Name      | Description          | Default Value        |
| ------------- | ------------------- | ------------- |
| CUSTOM_CA          | If this property is set to True, then the custom-managed certificate mode is enabled. This mode uses certificates that are signed by the customer's external certificate authority. In this mode, the installer will not generate certificates and will not start the Agent Service at the end of the installation. | FALSE    |
| EMCERTIFICATE        | Enterprise Manager Certificate Thumbprint       | This value can be found in the [Agents Interface](/docs/threatprevention/7.4/admin/agents/overview.md) by clicking the Agent Enrollment Secret icon to open the [Enrollment Secret Configuration Window](/docs/threatprevention/7.4/admin/agents/agentswindows/enrollmentsecretconfiguration.md). This value is not used for high security mode.      |
| ENROLLMENTSECRET <br />**Required for enrolling new Agent** | Agent Enrollment Secret      | This value can be found in the [Agents Interface](/docs/threatprevention/7.4/admin/agents/overview.md) by clicking the Agent Enrollment Secret icon to open the [Enrollment Secret Configuration Window](/docs/threatprevention/7.4/admin/agents/agentswindows/enrollmentsecretconfiguration.md). This is a required field if using auto security mode. It is not used for high security mode. |
| SAFEMODE    | Start Agent Service in safe mode       | FALSE        |
| STARTAGENTSERVICE           | Start Agent Service on successful installation       | FALSE        |
| ADDFWRULES         | Create firewall rules for the Agent Service        | TRUE      |
| INSTALLFOLDER            | Agent installation path         | …\Program Files \Netwrix\Netwrix Threat Prevention\SIWindowsAgent        |
| PORTNUMBER        | Enterprise Manager port value       | 3741      |
| ENTMGR_IPADDRESS Required       | Enterprise Manager IP address        | 127.0.0.1        |
| FILE_MONITOR_INSTALL        | Windows File System feature        | FALSE        |
| AD_MONITOR_INSTALL            | Windows Active Directory Events feature       | FALSE       |
| EXCHANGE_MONITOR_INSTALL         | Exchange Server Monitoring feature         | FALSE          |
| DNSLOOKUPS           | ‘dnsLookups’ in the SIWindowsAgent.exe file       | TRUE      |
| CONFIGPARAMS              | Key value pairs used in SIWindowsAgent.exe.config <br />Example Value: <br />Key=value&SDEventFormat=PROTOBUF       |                          |
| LOCALPWNEDDB          | HaveIBeenPwned (HIBP) hash Database mode for Agent or Enterprise Manager          | FALSE         |

**Command Line Configuration Examples**

The following examples show some standard scenarios for Agent installations.

:::note
Parameters with TRUE or FALSE are case sensitive. In the examples, EMCERTIFICATE and
ENROLLMENTSECRET have been generated and are unique to each install. These need to be retrieved from
the Administration Console.
:::


Installing a new Agent to monitor Active Directory and File Events Example

```
“SI Agent.exe” /q ENTMGR_IPADDRESS=10.0.21.1 FILE_MONITOR_INSTALL=TRUE AD_MONITOR_INSTALL=TRUE EMCERTIFICATE=261730F6D0E6400ECB3E4A09DD38B10C8BCA494F ENROLLMENTSECRET=E2401994866965EB
```

**Upgrading an Agent Installation Example**

```
“SI Agent.exe” /q ENTMGR_IPADDRESS=10.0.21.1 FILE_MONITOR_INSTALL=TRUE AD_MONITOR_INSTALL=TRUE
```
