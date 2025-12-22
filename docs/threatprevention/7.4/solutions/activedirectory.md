---
title: "Active Directory"
description: "Active Directory"
sidebar_position: 10
---

# Active Directory

Threat Prevention for Active Directory is a real-time change monitoring and security threat
detection solution, designed to detect, protect, mitigate, and generate security intelligence
without any reliance on native logging.

- From individual objects and attributes to Group Policies, Threat Prevention for Active Directory
  produces a complete audit trail of all change and access activities.
- It adds an additional security layer on top of native controls to proactively block undesired
  changes and guard against malicious attempts to comprise directory services.
- Through real-time analysis of all Active Directory authentication traffic, Threat Prevention also
  detects patterns of activity indicative of account compromise or impending breach.
- It provides the option to monitor for weak passwords created within the environment using the
  Monitoring function of the Password Enforcement module.

Some important events Threat Prevention captures are:

- Changes
- Account Lockouts
- Password Resets
- Comprised and Weak Password Use
- Group Policy Object (GPO) Modifications
- Object Moves/Adds/Deletes
- Permission Modifications
- Groups Membership
- DNS Changes
- LSASS Modifications
- AD Replication
- Replication Impersonations
- Active Directory Read Monitoring
- Authentication (Kerberos & NTLM)

  - Authentication-based Attacks (e.g. Horizontal/Lateral Movement, Brute Force Attacks, User
    Account Hacking, Breached Passwords, Golden Tickets, and more)
  - Privileged Account Authentications

## Active Directory Event Types

The following event types are available for Active Directory:

- [Active Directory Changes Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/activedirectorychanges.md)
- [Active Directory Lockdown Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/activedirectorylockdown.md)
- [Active Directory Read Monitoring Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/activedirectoryreadmonitoring.md)
- [AD Replication Lockdown Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/adreplicationlockdown.md)
- [AD Replication Monitoring Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/adreplicationmonitoring.md)
- [Authentication Lockdown Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/authenticationlockdown.md)
- [Authentication Monitoring Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/authenticationmonitoring.md)
- [Effective Group Membership Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/effectivegroupmembership.md)
- [FSMO Role Monitoring Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/fsmorolemonitoring.md)
- [GPO Setting Changes Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/gposettingchanges.md)
- [GPO Setting Lockdown Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/gposettinglockdown.md)
- [LSASS Guardian – Monitor Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/lsassguardianmonitor.md)
- [LSASS Guardian – Protect Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/lsassguardianprotect.md)
- [Password Enforcement Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/passwordenforcement/passwordenforcement.md)
