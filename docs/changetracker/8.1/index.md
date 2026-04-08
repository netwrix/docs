---
title: "Netwrix Change Tracker v8.1 Documentation"
description: "Netwrix Change Tracker v8.1 Documentation"
sidebar_position: 1
---

# Netwrix Change Tracker v8.1 Documentation

Netwrix Change Tracker is a system integrity monitoring product, used for compliance programs, host
intrusion detection and change control for enterprise IT systems. Enterprise IT organizations worldwide use Change Tracker, including the military, federal agencies, banks, financial services companies, airlines, retailers, utilities, and not-for-profit organizations.

The product automates the collection of configuration data from any IT devices, including Servers
and Desktops, database systems, firewalls, network routers and switches and stores a baseline for
each device. Platforms supported include Windows, Linux, Unix, Oracle, SQL Server.

Change Tracker then analyzes the collected configuration data for compliance with an organization's hardened build
standard. This is typically based on a CIS Benchmark hardening checklist or one provided by a
manufacturer such as Microsoft, Red Hat, Oracle, or Cisco, for example. Compliance standards
supported by Change Tracker include PCI DSS, DISA STIG, NERC CIP, ISO 27001, GLBA), FISMA), HIPAA
HITECH, S-OX, NIST 800-53/171 and GPG 13.

![TechnicalOverview](/images/changetracker/8.1/technicaloverview.webp)

Change Tracker then monitors devices continuously using either a Change Tracker Agent installed directly onto
the device, or a periodically scheduled agentless interaction with the device. Any changes
recorded deviating from the initial baseline are assessed for a match with Planned Changes
configured in the Change Tracker system. Planned Change rules can be recorded directly from a device
exhibiting changes, for example, when pre-staging patches, or from observed changes reported by
Change Tracker. Planned Changes comprise the devices to assess, change window and details of the
changes to match, such as a file change or registry value, for example.

This _Closed-Loop\*\*_,\*\* Intelligent Change Controlclosely aligns to COBIT or ITIL Change Control
processes whereby changes are pre-approved via a ‘Request For Change’ process, then reviewed for
accuracy and quality via a QA Testing or Post-implementation review. Netwrix offer a ServiceNow
Certified ITSM Integration Module to automatically import Change Requests from most leading ITSM
products. In this way, Change Tracker automates the entire process by reviewing changes observed
against pre-defined Planned Change rules, or by retrospectively building new Planned Change Rules
based on observed changes, hence the Closed-Loop terminology.

Change Tracker reports any changes that don't match a Planned Change rule as potential breach activity. In this way, Change Tracker provides a Host Intrusion Detection System capability.

Netwrix Change Tracker has received Security Software Certification for CIS Benchmarks.

Other Netwrix products have also received several rewards including a series of Five Star reviews
from SC Magazine and a Winners Award from Computer Defense Magazine. Netwrix is also an official
OVAL Adopter using OVAL vulnerability and inventory and compliance content in either SCAP or
xccdf content.

## Solution Architecture

Netwrix delivers Change Tracker as a 100% software solution. The central server component can be
installed on either a Windows or Linux platform. Change Tracker supports virtual hosts, but resources, and in
particular disk I/O performance, are critical. See the agent installation guides for your platform:

- [Installing Gen 7 Agent for Windows](/docs/changetracker/8.1/install/agent/windows.md)
- [Installing Gen 7 Agent for Linux](/docs/changetracker/8.1/install/agent/linuxos.md)

![Architecture](/images/changetracker/8.1/architecture.webp)

For a full list of supported platforms see
[Support Matrix](/docs/changetracker/8.1/requirements/supportmatrix.md).

The secure web interface handles administration and day-to-day tasks, including reporting on device change history and managing planned changes. Integration options include alert
propagation via syslog and email, and for more advanced, two-way integration, Netwrix Change Tracker
provides a REST API.

- Windows Servers and Workstations are tracked using a locally installed active Agent;
- Solaris, Ubuntu, SUSE Linux, RedHat, and CentOS hosts can also be tracked using an Agent;
- Legacy Unix systems are monitored for File Integrity changes using the Express Agent;
- Network devices, Unix, and Linux Servers are also tracked using an agentless, scripted interaction
  executed automatically from the Change Tracker server or using a Proxy Agent function;
- Detailed Configuration Policy management for Servers and Workstations and Policy Compliance
  Reporting is performed via Change Tracker Hub.
