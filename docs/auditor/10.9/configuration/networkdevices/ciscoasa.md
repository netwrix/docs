---
title: "Configure Cisco ASA Devices"
description: "Configure Cisco ASA Devices"
sidebar_position: 20
---

# Configure Cisco ASA Devices

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, your current audit settings will be
  checked on each data collection and adjusted if necessary.
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

    - On the Cisco ASA Device:

        - The global configuration mode is selected.
        - The `logging enable `option is selected on the Cisco ASA device.
        - The `logging host` parameter is set to the host address of the audited CiscoASA device.
          And UDP port (for, example 514) is used for sending messages.

            **NOTE:** Do not select the EMBLEM format logging for the syslog server option.

        - The `logging timestamp` option enabled.
        - The `logging trap` option is selected from 1 to 6 inclusive.

To configure your Cisco ASA devices, do the following:

1. Navigate to your Cisco ASA device terminal through the SSH/Telnet connection (for example, use
   PuTTY Telnet client).
2. Access the global configuration mode. For example:

    hostname# configure terminal

    hostname(config)#

3. Enable logging. For example:

    hostname(config)# logging enable

4. Set the IP address of the computer that hosts Netwrix Auditor Server as the `logging host`
   parameter. And make sure that the UDP port is used for sending syslog messages (e.g., 514 UDP
   port). For example:

    hostname(config)# logging host `<Netwrix Auditor server IP address>`

    Do not select the EMBLEM format logging for the syslog server option.

5. Enable the `logging timestamp` option. For example:

    hostname(config)# logging timestamp

6. Set the `logging trap` option from 1 to 6 inclusive. For example:

    hostname(config)# logging trap 5

7. Configure the devices to show username for failed logons:

    hostname(config)# no logging hide username

## Cisco ASA Devices

Review a full list of object types Netwrix Auditor can collect on Cisco ASA network devices.

| Object type                          | Actions                                                                                                                                | Event ID                                                                                                                                        |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Cisco ASA devices                    |                                                                                                                                        |                                                                                                                                                 |
| Authentication                       | - Successful logon                                                                                                                     | - 716038 - 611101 - 113012                                                                                                                      |
| - Failed logon                       | - 716039 - 611102 - 113021 - 113020 - 113015 - 109031 - 109025 - 109024 - 109022 - 109017 - 109010 - 109008 - 109006 - 107001 - 107002 |                                                                                                                                                 |
| Configuration                        | - Modified / Modify (Failed attempt)                                                                                                   | - 111004 - 111010 - 612001 - 612002 - 612003                                                                                                    |
| - Read / Read (Failed attempt)       | - 111007                                                                                                                               |                                                                                                                                                 |
| - Removed / Remove (Failed attempt)  | - 111003 - 112001 - 208005                                                                                                             |                                                                                                                                                 |
| CPU                                  | - Modified / Modify (Failed attempt)                                                                                                   | - 211003                                                                                                                                        |
| Device state                         | - Modified / Modify (Failed attempt)                                                                                                   | - 199009                                                                                                                                        |
| Environment (IPMI)                   | - Modified / Modify (Failed attempt)                                                                                                   | - 735002 - 735004 - 735006 - 735007 - 735008 - 735012 - 735014 - 735016 - 735018 - 735019 - 735022 - 735023 - 735025 - 735027 - 735028 - 735029 |
| GroupPolicy                          | - Add / Added (Failed attempt)                                                                                                         | - 502111                                                                                                                                        |
| - Removed / Remove (Failed attempt)  | - 502112                                                                                                                               |                                                                                                                                                 |
| Logon                                | - Successful logon                                                                                                                     | - 605005                                                                                                                                        |
| - Failed logon                       | - 308001 - 605004                                                                                                                      |                                                                                                                                                 |
| RAM                                  | - Modified / Modify (Failed attempt)                                                                                                   | - 211004                                                                                                                                        |
| Session                              | - Successful Logon                                                                                                                     | - 716001 - 713228 - 722033 - 722022 - 725001 - 725002 - 725003 - 606001                                                                         |
| - Logoff                             | - 725007 - 722023 - 722030 - 722031 - 716002 - 713259 - 606002 - 302014 - 302304 - 302016                                              |                                                                                                                                                 |
| - Failed Logon                       | - 722056 - 725006 - 725014                                                                                                             |                                                                                                                                                 |
| ---                                  | ---                                                                                                                                    | ---                                                                                                                                             |
| Rule                                 | - Activated                                                                                                                            | - 733101                                                                                                                                        |
| URL                                  | - Read / Read (Failed attempt)                                                                                                         | - 716003 - 716004                                                                                                                               |
| User                                 | - Add / Added (Failed attempt)                                                                                                         | - 502101                                                                                                                                        |
| - Modified / Modify (Failed attempt) | - 502103 - 113006 - 113007                                                                                                             |                                                                                                                                                 |
| - Removed / Remove (Failed attempt)  | - 502102                                                                                                                               |                                                                                                                                                 |
