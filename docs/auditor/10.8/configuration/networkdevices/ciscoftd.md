---
title: "Configure Cisco FTD Devices"
description: "Configure Cisco FTD Devices"
sidebar_position: 25
---

# Configure Cisco FTD Devices

Netwrix Auditor relies on native syslog events for collecting audit data. Therefore, successful
change and access auditing requires a certain configuration of native audit settings in the audited
environment. Proper audit configuration ensures audit data integrity; otherwise, your change reports
may contain warnings, errors, or incomplete audit data.

**CAUTION:** Exclude the folder associated with Netwrix Auditor from antivirus scanning. See the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

Netwrix Auditor can't push configuration changes to network devices, so configure native audit
settings manually for the Cisco FTD (Firepower Threat Defense) device. Unlike Cisco ASA and Cisco
IOS devices, Cisco FTD devices are managed through Cisco Firepower Management Center (FMC), so
configure syslog settings using a platform settings policy instead of the device CLI. When you
finish, the device has the following settings:

- Syslog logging is enabled.
- The logging host is set to the host address of the computer that hosts Netwrix Auditor Server,
  and the device uses a UDP port (for example, 514) to send messages.
- Timestamps are included in syslog messages.
- The logging level (trap) is set from 1 to 6 inclusive.

To configure your Cisco FTD devices, do the following:

1. Log in to Cisco Firepower Management Center.
2. Navigate to **Devices > Platform Settings**.
3. Create a platform settings policy, or edit an existing one, and assign it to your Cisco FTD
   device.
4. On the **Syslog** tab, open **Logging Setup** and enable logging.
5. Enable the option to include a timestamp in syslog messages.
6. Open **Syslog Servers** and add the computer that hosts Netwrix Auditor Server as a syslog
   server. Set the protocol to UDP and specify the port the device uses to send messages (for
   example, 514).
7. Open **Logging Level** and set the logging level (trap) for the applicable event classes from 1
   to 6 inclusive.
8. Save the platform settings policy and deploy it to the Cisco FTD device.

:::note
Menu names can vary slightly between Firepower Management Center versions. Confirm the exact steps
against the FMC version in your environment before relying on this procedure.
:::

## Cisco FTD Devices

Review a full list of object types Netwrix Auditor can collect on Cisco FTD network devices.

| Object type    | Actions                              | Event ID                                                                                                                                                                                                       |
| -------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration  | - Modified                            | - 111001 - 111003 - 111004 - 111005 - 111008 - 111010                                                                                                                                                          |
| GroupPolicy    | - Added                               | - 502111                                                                                                                                                                                                        |
| - Removed      | - 502112                              |                                                                                                                                                                                                                  |
| Logon          | - Successful logon                    | - 109011 - 113004 - 113012 - 113039 - 605005 - 611101 - 716001 - 716038 - 716055 - 721016                                                                                                                       |
| - Failed logon | - 109016 - 109033 - 109034 - 113005 - 113013 - 113014 - 113015 - 113016 - 113017 - 113021 - 113030 - 113031 - 113032 - 113033 - 113034 - 113035 - 113036 - 113038 - 308001 - 605004 - 611102 - 716005 - 716007 - 716009 - 716023 - 716039 - 716056 - 716057 - 716060 - 721017 - 721018 |                                                                                                                                                                                                                  |
| - Logoff       | - 109012 - 611103 - 716002 - 716006   |                                                                                                                                                                                                                  |
| Rule           | - Activated                           | - 430001 - 430002 - 430003 - 430004 - 430005 - 733100 - 733101 - 733102 - 733103 - 733104 - 733105 - 733201                                                                                                     |
