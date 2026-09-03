---
title: "Agent Silent Install Option"
description: "Agent Silent Install Option"
sidebar_position: 20
---

# Agent Silent Install Option

You can use command line options to install the Agent silently. Use these options to
deploy the Agent via custom batch files, login scripts, or for integrating with third-party software
distribution solutions that an organization may already have in their environment.

**MSI Compliant Command-Line Options**

The WiX installer application for Agent runs under control of Windows installer component (MSI).
Therefore, you can use standard MSI command-line options with the
“threatprevention-agent-8.1.x.xxx.exe” install.

The
[Microsoft Standard Installer Command-Line Options](<https://msdn.microsoft.com/en-us/library/windows/desktop/aa372024(v=vs.85).aspx>)
article lists the available command-line options.

Two of the more useful options are:

- Silent installation option – `/q`
- Logging option – `/log "file_for_logging.log"`

**All Properties for the Agent Installer**

The following table details all properties you can specify to the Agent installer via the
command line.

| Property Name       | Description            | Default Value           |
| ------------ | ---------------- | --------------------- |
| CUSTOM_CA               | If you set this property to True, the installer enables the custom-managed certificate mode. This mode uses certificates that the customer's external certificate authority signs. In this mode, the installer will not generate certificates and will not start the Agent Service at the end of the installation. | FALSE             |
| EMCERTIFICATE         | Enterprise Manager Certificate Thumbprint      | You can find this value in the [Agents Interface](/docs/threatprevention/8.1/admin/agents/overview.md) by clicking the Agent Enrollment Secret icon to open the [Enrollment Secret Configuration Window](/docs/threatprevention/8.1/admin/agents/agents-windows/enrollmentsecretconfiguration.md). This value doesn't apply to high security mode.        |
| ENROLLMENTSECRET (Required for enrolling new Agent) | Agent Enrollment Secret          | You can find this value in the [Agents Interface](/docs/threatprevention/8.1/admin/agents/overview.md) by clicking the Agent Enrollment Secret icon to open the [Enrollment Secret Configuration Window](/docs/threatprevention/8.1/admin/agents/agents-windows/enrollmentsecretconfiguration.md). This is a required field if using auto security mode. It doesn't apply to high security mode. |
| SAFEMODE       | Start Agent Service in safe mode         | FALSE          |
| STARTAGENTSERVICE       | Start Agent Service on successful installation        | FALSE        |
| ADDFWRULES          | Create firewall rules for the Agent Service          | TRUE       |
| INSTALLFOLDER        | Agent installation path       | …\Program Files \Netwrix\Netwrix Threat Prevention\SIWindowsAgent      |
| PORTNUMBER        | Enterprise Manager port value        | 3741       |
| ENTMGR_IPADDRESS Required         | Enterprise Manager IP address           | 127.0.0.1       |
| FILE_MONITOR_INSTALL        | Windows File System feature          | FALSE         |
| AD_MONITOR_INSTALL         | Windows Active Directory Events feature         | FALSE          |
| EXCHANGE_MONITOR_INSTALL          | Exchange Server Monitoring feature          | FALSE          |
| DNSLOOKUPS       | ‘dnsLookups’ in the SIWindowsAgent.exe file        | TRUE          |
| CONFIGPARAMS           | Key value pairs used in SIWindowsAgent.exe.config <br />Example Value: <br/> Key=value&SDEventFormat=PROTOBUF    |        |
| LOCALPWNEDDB       | HaveIBeenPwned (HIBP) hash Database mode for Agent or Enterprise Manager        | FALSE         |

**Command Line Configuration Examples**

The following examples show some standard scenarios for Agent installations.

:::note
Parameters with TRUE or FALSE are case sensitive. EMCERTIFICATE and
ENROLLMENTSECRET in the examples are generated values, unique to each install. You must retrieve
these from the Administration Console.
:::


Installing a new Agent to monitor Active Directory and File Events Example

```
“SI Agent.exe” /q ENTMGR_IPADDRESS=10.0.21.1 FILE_MONITOR_INSTALL=TRUE AD_MONITOR_INSTALL=TRUE EMCERTIFICATE=261730F6D0E6400ECB3E4A09DD38B10C8BCA494F ENROLLMENTSECRET=E2401994866965EB
```

**Upgrading an Agent Installation Example**

```
“SI Agent.exe” /q ENTMGR_IPADDRESS=10.0.21.1 FILE_MONITOR_INSTALL=TRUE AD_MONITOR_INSTALL=TRUE
```
