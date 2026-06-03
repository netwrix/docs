---
title: "Compliance Reports"
description: "Compliance Reports"
sidebar_position: 10
---

# Compliance Reports

Change Tracker includes compliance report templates for eight industry frameworks. Each template
maps directly to the prescriptive requirements of its respective standard and produces pass/fail
results with remediation guidance.

| Framework | Focus |
| --------- | ----- |
| [Center for Internet Security (CIS) Benchmarks](#cis-benchmarks) | System hardening based on CIS configuration recommendations |
| [HIPAA](#hipaa) | Health data privacy and security controls |
| [ISO 27K](#iso-27k) | Information security management controls |
| [NERC CIP](#nerc-cip) | Critical infrastructure protection for the energy sector |
| [NIST 800-53](#nist-800-53) | Security and privacy controls for federal information systems |
| [NIST 800-171](#nist-800-171) | Protection of Controlled Unclassified Information (CUI) |
| [PCI DSS](#pci-dss) | Payment card data security |
| [SOX](#sox) | Financial reporting IT controls |

## CIS Benchmarks

Change Tracker's CIS compliance templates map directly to the
[CIS Benchmarks List](https://www.cisecurity.org/cis-benchmarks). Change Tracker is a
[CIS-certified vendor](https://www.cisecurity.org/partner/netwrix).

CIS reports are available at Level 1 (essential security settings) and Level 2 (defense-in-depth
settings that may reduce functionality). Some Windows templates also include BitLocker, NxGen
Security, and STIG profile variants.

### Cloud

| Platform | Benchmark Version |
| -------- | ----------------- |
| Amazon Web Services Foundations | 2.0.0 |
| Google Cloud Platform Foundation | 1.2.0 |
| Microsoft 365 Foundations | 1.4.0 |
| Microsoft Azure Foundations | 1.3.0 |

### Windows

| Operating System | Versions |
| ---------------- | -------- |
| Windows Desktop | XP, 7, 8.1, 10, 11 |
| Windows Server | 2003, 2008, 2008 R2, 2012, 2012 R2, 2016, 2019, 2022, 2025 |

Windows Server templates include Domain Controller and Member Server profiles. Azure Compute
variants are also available for Windows Server 2022.

### Linux

| Operating System | Versions |
| ---------------- | -------- |
| Amazon Linux | 2 |
| Amazon Linux Server | 2023 |
| CentOS (Server and Workstation) | 8, 7, 6 |
| Debian (Server and Workstation) | 10, 9, 8 |
| Oracle Linux (Server and Workstation) | 8, 7, 6 |
| Red Hat Enterprise Linux | 5 |
| Red Hat Enterprise Linux (Server and Workstation) | 10, 9, 8, 7, 6 |
| Rocky Linux (Server and Workstation) | 8 |
| SUSE Linux Enterprise Server | 11 |
| SUSE Linux Enterprise (Server and Workstation) | 15, 12 |
| Ubuntu | 12.04 |
| Ubuntu (Server and Workstation) | 24.04, 22.04, 20.04, 18.04, 16.04, 14.04 |

### Other Operating Systems

| Operating System | Versions |
| ---------------- | -------- |
| Apple macOS | 10.11 |
| IBM AIX | 7.2, 6.1, 5.3 |
| Oracle Solaris | 11, 10 |

### Databases

Database compliance templates come in three major types:

- **RDBMS** — Checks performed through a database connection
- **Windows** — Extends RDBMS with OS-level checks using PowerShell
- **Linux** — Extends RDBMS with OS-level checks using shell scripts

Cloud-specific types like AWS RDS are also available. The RDBMS-only template can support database
products on operating systems beyond those in the following table since it has no OS-level checks,
though you must mitigate the missing OS-level checks.

| Database | Version | Template Types |
| -------- | ------- | -------------- |
| Microsoft SQL Server | 2022 | RDBMS, Windows, RDS |
| Microsoft SQL Server | 2019 | RDBMS, Windows, RDS |
| Microsoft SQL Server | 2017 | RDBMS, Windows, RDS |
| Microsoft SQL Server | 2016 | RDBMS, Windows, RDS |
| Microsoft SQL Server | 2014 | RDBMS |
| Microsoft SQL Server | 2012 | RDBMS |
| Microsoft SQL Server | 2008R2 | RDBMS |
| Oracle | 19c | RDBMS (Traditional and Unified Auditing), Linux (Traditional and Unified Auditing), Windows (Traditional and Unified Auditing) |
| Oracle | 12c | RDBMS (Traditional and Unified Auditing), Linux (Traditional and Unified Auditing), Windows (Traditional and Unified Auditing) |

### Network Devices

| Device | Versions |
| ------ | -------- |
| Cisco Firewall | — |
| Cisco IOS | 17, 16, 15, 12 |
| F5 Networks | All |
| FortiGate | 7.4.x, 7.0.x |
| Juniper JUNOS | — |
| Palo Alto Firewall | 11 |

### Virtualization

| Platform | Versions |
| -------- | -------- |
| VMware ESXi | 8.0, 7.0, 6.7, 6.5, 5.5 |

### Web Servers

| Platform | Versions |
| -------- | -------- |
| Apache Tomcat | 10.1, 5.5–6.0 |
| Microsoft IIS | 10, 8 |

### Desktop Applications

| Application | Versions |
| ----------- | -------- |
| Google Chrome | v120 |
| Microsoft Edge | v114 |
| Microsoft Internet Explorer | 11 |
| Microsoft Office (suite) | 2013 |
| Microsoft Office (Word, Excel, PowerPoint, Outlook) | 2016, 2013 |
| Mozilla Firefox | 38 ESR |

## HIPAA

Templates for assessing compliance with HIPAA security and privacy requirements.

| Platform | Versions |
| -------- | -------- |
| Oracle Linux | 7 |
| Red Hat Enterprise Linux | 8, 7 |
| Windows Desktop | 10 |
| Windows Server | 2016, 2012 R2, 2012, 2008R2 |

## ISO 27K

Templates for assessing compliance with ISO/IEC 27001 information security controls.

| Platform | Versions |
| -------- | -------- |
| Microsoft SQL Server | 2012, 2008R2 |
| Oracle Linux | 7, 6 |
| Oracle Solaris | 10 |
| Red Hat Enterprise Linux | 7, 6 |
| Windows Desktop | 11, 10 |
| Windows Server | 2019, 2016, 2012 R2, 2008R2, 2003 |

## NERC CIP

Templates for assessing compliance with NERC CIP-007-6 critical infrastructure protection controls.
Templates are available for the following CIP-007-6 requirement areas:

| Requirement | Description |
| ----------- | ----------- |
| Table R1 | Hardened Ports Assessment |
| Table R1 | Hardened Services Assessment |
| Table R3 | Malicious Code Prevention |
| Table R4 | Security Event Monitoring |
| Table R5 | System Access Control |

NERC CIP templates are available for Windows systems.

## NIST 800-53

Templates for assessing compliance with NIST Special Publication 800-53 security and privacy
controls for federal information systems.

| Platform | Versions |
| -------- | -------- |
| Oracle Linux | 7, 6 |
| Red Hat Enterprise Linux | 8, 7 |
| Ubuntu | 24.04, 22.04, 20.04 |
| VMware ESXi | 8.0, 5.5 |
| Windows Desktop | 10 |
| Windows Server | 2025, 2022, 2019, 2016, 2012 R2, 2012, 2008 R2, 2008 |

## NIST 800-171

Templates for assessing compliance with NIST Special Publication 800-171 requirements for
protecting CUI.

| Platform | Versions |
| -------- | -------- |
| Oracle Linux | 7, 6 |
| Red Hat Enterprise Linux | 8, 7 |
| Ubuntu | 24.04, 22.04, 20.04 |
| VMware ESXi | 8.0, 5.5 |
| Windows Desktop | 11, 10 |
| Windows Server | 2025, 2022, 2019, 2016, 2012 R2, 2012, 2008 R2, 2008 |

## PCI DSS

Templates for assessing compliance with Payment Card Industry Data Security Standard requirements.

| Platform | Versions |
| -------- | -------- |
| Apache Tomcat | 5.5–6.0 |
| Cisco IOS | 15, 12 |
| IBM AIX | 7.1 |
| Microsoft IIS | 10, 8, 7.5, 7.0 |
| Microsoft SQL Server | 2008R2 |
| Oracle Database | 12c |
| Red Hat Enterprise Linux | 8, 7, 6, 5 |
| VMware ESXi | 5.5 |
| Windows Desktop | 10, 7 |
| Windows Server | 2022, 2019, 2016, 2012, 2008R2, 2008, 2003 |

## SOX

Templates for assessing IT controls relevant to Sarbanes-Oxley compliance.

| Platform | Versions |
| -------- | -------- |
| Windows Desktop | 10, 7 |
| Windows Server | 2016, 2012 R2, 2012, 2008R2 |

## Other

Additional compliance templates based on vendor or government security guidelines.

| Application | Source | Versions |
| ----------- | ------ | -------- |
| Adobe Acrobat Reader | NSA | X |
| F5 Networks | F5 Networks | All |
