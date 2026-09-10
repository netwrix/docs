---
title: "Agent Information"
description: "Agent Information"
sidebar_position: 30
---

# Agent Information

The Threat Prevention Agent performs real-time monitoring of the events occurring across supported
systems and applications. The modules you install during Agent deployment are associated with
the Threat Prevention solutions:

- Threat Prevention for Active Directory – Monitoring and blocking Active Directory and Group Policy
  Objects (GPO)

  - Deploy Agents on all domain controllers with the Windows AD Events module
  - For GPO monitoring and blocking, the Threat Prevention Agent on all domain controllers must
    also have the Windows File System module

- Threat Prevention for Enterprise Password Enforcer – Blocking creation of passwords that don't
  meet requirements

  - Deploy Agents on all domain controllers with the Windows AD Events module

- Threat Prevention for Exchange – Monitoring and blocking Exchange environments

  - Deploy Agents on all HUB, CAS, and Mailbox Exchange Servers with the Exchange Server
    Monitoring module
  - Must also deploy Agents on one Active Directory domain controller with the Windows AD Events
    module

- Threat Prevention for File System – Monitoring Windows and NAS file systems, blocking Windows file
  systems

  - For Windows file systems – Deploy Agents on Windows file servers with the Windows File System
    module
  - For NAS file systems – Deploy Agents on the Windows server acting as a proxy server for NAS
    activity (where the Activity Monitor activity agent is deployed) with the Windows File System
    module

- Threat Prevention for LDAP – Monitoring LDAP bind and LDAP queries, blocking LDAP queries

  - Deploy Agents on all domain controllers with the Windows AD Events module

**WMI Requirement**

The Agent server has the following requirement:

- WMI enabled on the machine, which is optional but required for centralized Agent maintenance

When you execute any of the right-click commands on the
[Agents Interface](/docs/threatprevention/8.1/admin/agents/overview.md) (with the exception of Harden Agent, Soften
Agent, and Remove Server from list), the Administration Console uses WMI to remotely query the
registry on the target Agent machines to understand where the Agent configuration files are
located (install path). Next, it uses WMI to stop the Agent service, modify the configuration files,
and restart the Agent.

Remember to check [Agent Server Requirements](/docs/threatprevention/8.1/requirements/agent/agent.md) before deploying an
Agent, including the
[Agent Compatibility with Non-Netwrix Security Products](/docs/threatprevention/8.1/requirements/agent/agent.md#agent-compatibility-with-non-netwrix-security-products)
list.

## Domain Controllers

The Agent tracks all events occurring in Active Directory in real-time. You must install the Agent
on all domain controllers within the domains you want to monitor.

**Supported Platforms for Microsoft Active Directory**

- Windows Server 2025
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

**Netwrix Activity Monitor Integration**

Both Activity Monitor and Threat Prevention can monitor the same domain controller. Deploy agents
from both products to the server. Activity Monitor identifies the Windows host as being “Managed by
Threat Prevention” on the Monitored Hosts tab when it detects an Agent on the server. You can't
modify this host's configuration within the Activity Monitor console. Threat Prevention policies
control the configuration for that monitored host. However, you can configure Activity Monitor to
provide multiple outputs for a host, e.g. for Netwrix Access Analyzer (formerly Enterprise Auditor),
Netwrix Threat Manager, or SIEM products. Add a new output for the same host to the Monitored Host
tab in the Activity Monitor console for the other product to use. See the
[Send Active Directory Event Data from Netwrix Threat Prevention to Netwrix Access Analyzer](/docs/threatprevention/8.1/admin/configuration/accessanalyzerconfiguration.md)
topic for additional information.

## Exchange Servers

The Agent tracks all Owner and Non-Owner information on Exchange Servers in real-time. You must
install the Agent on all Exchange Servers running the Information Store service within the domains
you want to monitor.

To gather Exchange event data stored in Active Directory, you must also install the Agent
on all domain controllers within the domains you want to monitor.

If you gather Exchange event data only for mailbox permission changes and mailbox logins, you must
also install the Agent on one domain controller, which can be read only.

**Supported Platforms for Microsoft Exchange**

- Exchange Server SE
- Exchange Server 2019
- Exchange Server 2016
- Exchange Server 2013
- Exchange Server 2010

:::note
The Exchange Server Monitoring module doesn't start on an Agent if the Agent detects newer Exchange
Server updates at run time, and a corresponding message displays in the Agent log file and the
Agents interface.
:::


## Windows File Servers

The Agent monitors all events occurring in the file system in real-time. You must install the Agent
on all Windows file servers within the domains you want to monitor.

**Netwrix Activity Monitor Integration**

Both Activity Monitor and Threat Prevention can monitor the same Windows server. Deploy agents from
both products to the server. Activity Monitor identifies the Windows host as being “Managed by
Threat Prevention” on the Monitored Hosts tab when it detects an Agent on the server. You can't
modify this host's configuration within the Activity Monitor console. Threat Prevention policies
control the configuration for that monitored host. However, you can configure Activity Monitor to
provide multiple outputs for a host, e.g. for Netwrix Access Analyzer (formerly Enterprise Auditor),
Netwrix Threat Manager, or SIEM products. Add a new output for the same host to the Monitored Host
tab in the Activity Monitor console for the other product to use. See the
[Send Active Directory Event Data from Netwrix Threat Prevention to Netwrix Access Analyzer](/docs/threatprevention/8.1/admin/configuration/accessanalyzerconfiguration.md)
topic for additional information.
