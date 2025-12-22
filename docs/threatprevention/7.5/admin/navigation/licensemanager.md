---
title: "License Manager Window"
description: "License Manager Window"
sidebar_position: 30
---

# License Manager Window

The License Manager window displays the Threat Prevention modules that you are licensed for. If
under an Enterprise license, it also displays an expiration date. On license expiry, the Enterprise
Manager will refuse events from all Agents.

:::tip
Remember, if events are not received and displayed in the Administration Console, check if your
license has expired.
:::


**Generate Alerts when the License Nears Expiration**

You can configure alerts to be sent when the.Threat Prevention license nears expiration. These
alerts serve as a reminder for license renewal.

To generate license expiration alerts 14 days prior to license expiry, enable the **License** option
on the [System Alerting Window](/docs/threatprevention/7.5/admin/configuration/systemalerting/overview.md). Go to the Email, Event
Log or SIEM tab depending on how you want to receive alerts (i.e., by email, in the Windows event
log, or in a SIEM product) and click Configuration in the left pane to locate the License option for
enabling it.

The first alert is generated 14 days prior to license expiry and then every following day at 9:00
AM. You can customize the time by modifying the following entry in the
SIEnterpriseManager.exe.config file:

**<add key="timeOfLicenseChecking" value="9:00"/>**

File path: `...\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager`

## View Licensing Information

Follow the steps to view your Threat Prevention license details.

Click **Help > License Manager** on the menu. The Netwrix Threat Prevention License Manager window
is displayed.

![License Manager window](/images/threatprevention/7.5/admin/navigation/licensemanager.webp)

This window lists the modules that you are licensed for. Each module is linked to a Threat
Prevention solution.

Following is a list of the solutions with their respective modules. You can also view the event
types available with each module.

:::note
The Password Enforcement module is available under all licenses for monitoring weak
passwords. However, you need the Enterprise Password Enforcer solution license to block weak
passwords.
:::


#### Active Directory Solution

The Active Directory solution comes with the following licensed modules:

| Licensed Module   | Available Event Type  |
| -------------------------- | ------------------------------ |
| Active Directory Changes                                                                       | Active Directory Changes <br />Active Directory Read Monitoring <br />AD Replication Monitoring <br />Authentication Monitoring <br />Effective Group Membership <br />FSMO Role Monitoring <br />LSASS Guardian – Monitor |
| Active Directory Lockdown <br />\*Requires Active Directory Changes Module                           | Active Directory Lockdown <br />AD Replication Lockdown <br />Authentication Lockdown <br />LSASS Guardian – Protect          |
| GPO Lockdown <br />\*Requires Active Directory Changes Module <br />\*\*Requires File System Module        | GPO Setting Lockdown        |
| GPO Setting Changes <br />\*Requires Active Directory Changes Module <br />\*\*Requires File System Module | GPO Setting Changes                                                                                                                                                                    |

See the following topics for additional information:

- [Active Directory Changes Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/activedirectorychanges.md)
- [Active Directory Lockdown Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/activedirectorylockdown.md)
- [Active Directory Read Monitoring Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/activedirectoryreadmonitoring.md)
- [AD Replication Monitoring Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/adreplicationmonitoring.md)
- [AD Replication Lockdown Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/adreplicationlockdown.md)
- [Authentication Monitoring Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/authenticationmonitoring.md)
- [Authentication Lockdown Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/authenticationlockdown.md)
- [Effective Group Membership Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/effectivegroupmembership.md)
- [FSMO Role Monitoring Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/fsmorolemonitoring.md)
- [GPO Setting Changes Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/gposettingchanges.md)
- [GPO Setting Lockdown Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/gposettinglockdown.md)
- [LSASS Guardian – Monitor Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/lsassguardianmonitor.md)
- [LSASS Guardian – Protect Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/lsassguardianprotect.md)

#### Enterprise Password Enforcer Solution

The Enterprise Password Enforcer solution comes with the following licensed modules:

| Licensed Module             | Available Event Type |
| --------------------------- | -------------------- |
| Password Enforcement Module | Password Enforcement |

See the [Password Enforcement Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/passwordenforcement/passwordenforcement.md) topics for
additional information.

#### Exchange Solution

The Exchange solution comes with the following licensed modules:

| Licensed Module                                            | Available Event Type |
| ---------------------------------------------------------- | -------------------- |
| Exchange Events Module                                     | Exchange Changes     |
| Exchange Lockdown Module <br />\*Requires Exchange Events Module | Exchange Lockdown    |

See the following topics for additional information:

- [Exchange Changes Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/exchangechanges.md)
- [Exchange Lockdown Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/exchangelockdown.md)

#### File System Solution

The File System solution comes with the following licensed modules:

| Licensed Module    | Available Event Type        |
| ------------------ | --------------------------- |
| File System Module | File System Changes <br />File System Lockdown <br />File System Enterprise Auditor |

The File System Changes event type and File System Lockdown event type only generate event
monitoring and blocking data for Threat Prevention. The File System Enterprise Auditor event type
only generates event monitoring data for Netwrix Access Analyzer (formerly Enterprise Auditor). To
generate the same data to be accessible for both products, you must create a single policy with both
event types assigned.

See the following topics for additional information:

- [File System Changes Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/filesystemchanges/filesystemchanges.md) – For Windows file
  servers and/or NAS devices
- [File System Lockdown Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/filesystemlockdown.md) – For Windows file
  servers
- [File System Enterprise Auditor Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/filesystemaccessanalyzer.md)
  – For Windows file servers

#### LDAP Solution

The LDAP solution comes with the following licensed modules:

| Licensed Module        | Available Event Type          |
| -------- | ------------ |
| LDAP Monitoring Module <br />\*Requires Active Directory Changes Module | LDAP Lockdown <br />LDAP Monitoring <br />LDAP Bind Monitoring |

See the following topics for additional information:

- [LDAP Monitoring Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/ldapmonitoring/ldapmonitoring.md)
- [LDAP Lockdown Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/ldaplockdown.md)
- [LDAP Bind Monitoring Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/ldapbindmonitoring.md)
