---
title: "Configure Cisco IOS Devices"
description: "Configure Cisco IOS Devices"
sidebar_position: 30
---

# Configure Cisco IOS Devices

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration ensures audit data integrity;
otherwise, your change reports may contain warnings, errors, or incomplete audit data.

**CAUTION:** Exclude the folder associated with Netwrix Auditor from antivirus scanning. See the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

Configure native audit settings manually on the Cisco IOS device to ensure Netwrix Auditor
collects comprehensive and reliable audit data:

- Select the global configuration mode.
- Enable the `logging timestamp` option.
- Select the `logging trap` option from 1 to 6 inclusive.
- Set the `logging host` parameter to the host address where you plan to install the service, and
  use a UDP port (for example, 514) to send messages.

To configure your Cisco IOS devices, do the following:

1. Navigate to your Cisco IOS device terminal through the SSH/Telnet connection (for example, use
   PuTTY Telnet client).
2. Access the global configuration mode. For example:

    Router# configure terminal

3. Enable time stamps in syslog messages:

    Router# service timestamps log datetime localtime show-timezone

4. Set the `logging trap` option from 1 to 6 inclusive. For example:

    Router# logging trap 5

5. Set the IP address of the Netwrix Auditor Server as the logging host parameter, and ensure that
   the device uses a UDP port to send syslog messages (e.g., 514 UDP port). For example:

    Router# logging 192.168.1.5

## Cisco IOS Devices

Review a full list of object types Netwrix Auditor can collect on Cisco IOS network devices.

| Object type    | Actions                    | Event ID                    |
| -------------- | -------------------------- | --------------------------- |
| ---            | ---                        | ---                         |
| ---            | ---                        | ---                         |
| Cisco IOS      |                            |                             |
| Attribute      | - Read                     | - `INFO: AAA/ATTR`          |
| Authentication | - Successful logon         | - `IKEv2:`                  |
| - Failed logon | - `IKEv2-ERROR:`           |                             |
| Configuration  | - Modified                 | - `CONFIG_I`                |
| Device state   | - Modified                 | - `UPDOWN` - `CHANGED`      |
| Environment    | - Modified                 | - `FAN_FAULT` - `OVER_TEMP` |
| Logon          | - Successful logon         | - `LOGIN_SUCCESS`           |
| - Failed logon | - `LOGIN_FAILED`           |                             |
| Session        | - Successful Logon         | - `IKEv2:`                  |
| - Logoff       | - `%FW-6-SESS_AUDIT_TRAIL` |                             |
| - Failed Logon | - `IKEv2-ERROR:`           |                             |
