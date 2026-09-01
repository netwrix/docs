---
title: "Netwrix Change Tracker Documentation"
description: "Netwrix Change Tracker Documentation"
sidebar_position: 1
---

# Netwrix Change Tracker Documentation

Netwrix Change Tracker is a system integrity monitoring product for compliance programs, host
intrusion detection, and change control across enterprise IT systems. Enterprise IT organizations
worldwide use it, including the military, federal agencies, banks, financial services, airlines,
retailers, utilities, and not-for-profit organizations.

The product automatically collects configuration data from any IT device — including servers,
desktops, database systems, firewalls, and network routers and switches — and stores a baseline for
each device. Supported platforms include Windows, Linux, Unix, Oracle, and SQL Server.

Change Tracker then analyzes the collected configuration data for compliance with an organization's hardened build
standard. This standard typically comes from a CIS Benchmark hardening checklist or one that a
manufacturer such as Microsoft, Red Hat, Oracle, or Cisco provides. Compliance standards that
Change Tracker supports include PCI DSS, DISA STIG, NERC CIP, ISO 27001, GLBA, FISMA, HIPAA/HITECH,
SOX, NIST 800-53/171, and GPG 13.

![TechnicalOverview](/images/changetracker/technicaloverview.webp)

Change Tracker then monitors devices continuously using either a Change Tracker Agent installed directly onto
the device, or a periodically scheduled agentless interaction with the device. Change Tracker
assesses any recorded changes that deviate from the initial baseline for a match with the Planned
Changes configured in the system. You can record Planned Change rules directly from a device that's
exhibiting changes — for example, when pre-staging patches — or from changes that Change Tracker
observes and reports. Planned Changes comprise the devices to assess, the change window, and
details of the changes to match, such as a file change or registry value.

This **Closed-Loop, Intelligent Change Control** closely aligns with COBIT or ITIL Change Control
processes, whereby a "Request for Change" process pre-approves changes, which then go through
review for accuracy and quality via QA testing or a post-implementation review. Netwrix offers a
ServiceNow Certified ITSM Integration Module that automatically imports Change Requests from most
leading ITSM products. In this way, Change Tracker automates the entire process by reviewing
observed changes against predefined Planned Change rules, or by retrospectively building new
Planned Change rules based on observed changes, hence the Closed-Loop terminology.

Change Tracker reports any changes that don't match a Planned Change rule as potential breach
activity. In this way, Change Tracker provides a host intrusion detection system capability.

Netwrix Change Tracker has received Security Software Certification for CIS Benchmarks.

Other Netwrix products have also received several awards, including a series of Five-Star reviews
from SC Magazine and a Winners Award from Computer Defense Magazine. Netwrix is also an official
OVAL Adopter, using OVAL vulnerability, inventory, and compliance content in either Security
Content Automation Protocol (SCAP) or Extensible Configuration Checklist Description Format
(XCCDF) format.

## Solution Architecture

Netwrix delivers Change Tracker as a 100% software solution. You can install the central server
component on either a Windows or Linux platform. Change Tracker supports virtual hosts, but
resources — particularly disk I/O performance — are critical. See the agent installation guides
for your platform:

- [Installing Gen 7 Agent for Windows](/docs/changetracker/install/agent/windows.md)
- [Installing Gen 7 Agent for Linux](/docs/changetracker/install/agent/linuxos.md)

![Architecture](/images/changetracker/architecture.webp)

For a full list of supported platforms, see
[Support Matrix](/docs/changetracker/requirements/supportmatrix.md).

The secure web interface handles day-to-day administration, including reporting on a device's
change history and managing planned changes. Integration options include alert propagation via
syslog and email. For more advanced, two-way integration, Netwrix Change Tracker provides a REST
API.

- Change Tracker tracks Windows servers and workstations using a locally installed, active Change
  Tracker Agent.
- Change Tracker can also track Solaris, Ubuntu, SUSE Linux, Red Hat, and CentOS hosts using an
  agent.
- Change Tracker monitors legacy Unix systems for file integrity changes using the Express Agent.
- Change Tracker also tracks network devices, Unix, and Linux servers using an agentless, scripted
  interaction that runs automatically from the Change Tracker server, or using a Proxy Agent.
- Change Tracker Hub performs detailed configuration policy management for servers and
  workstations, and policy compliance reporting.
