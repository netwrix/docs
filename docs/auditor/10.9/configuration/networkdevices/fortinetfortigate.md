---
title: "Configure Fortinet FortiGate Devices"
description: "Configure Fortinet FortiGate Devices"
sidebar_position: 60
---

# Configure Fortinet FortiGate Devices

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

    - The target Fortinet Fortigate device must be configured via Command Line Interface (CLI) as
      described below.

To configure your Fortinet FortiGate devices, enable logging to multiple Syslog servers and
configure FortiOS to send log messages to remote syslog servers in CEF format. Do one of the
following:

- To configure Fortinet FortiGate devices via Command Line Interface
- To configure Fortinet FortiGate devices through the Fortigate Management Console

To configure Fortinet FortiGate devices via Command Line Interface

1. Log in to the Command Line Interface (CLI).
2. Enter the following commands:

    config log syslogd setting

    set format cef

    To enable CEF format in some previous FortiOS versions, enter the `set csv disable` command.

    set csv disable

    set facility `<facility_name>`

    set port 514

    set reliable disable

    set server `<ip_address_of_Receiver>`

    set status enable

    end

To configure Fortinet FortiGate devices through the Fortigate Management Console

1. Open Fortigate Management Console and navigate to Log&Report ® Log Config ® Log Setting.
2. Select the Syslog checkbox.
3. Expand the Options section and complete the following fields:

    | Option      | Description                                                                                           |
    | ----------- | ----------------------------------------------------------------------------------------------------- |
    | Name/IP     | Enter the address of your Netwrix Auditor Server.                                                     |
    | Port        | Set to _"514"_.                                                                                       |
    | Level       | Select desired logging level.                                                                         |
    | Facility    | Netwrix recommends using default values.                                                              |
    | Data format | Select CEF. To enable CEF format in some previous FortiOS versions, unselect the Enable CSV checkbox. |

4. Click Apply.

## Fortinet FortiGate Devices

Review a full list of object types Netwrix Auditor can collect on Fortinet FortiGate devices.

| Object type                          | Actions                                                                                                                                                                                                                                   | LogID                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authentication                       | - Successful logon                                                                                                                                                                                                                        | - 0100029002 - 0102043039 - 0102043008 - 0102043029 - 0101037138 / `act=tunnel-up`                                                                                                                                                                                                                                                                                                                    |
| - Failed logon                       | - 0100029003 - 0101039426 - 0102043009 - 0102043010 - 0101037121 / `XAUTH authentication failed`                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                       |
| Configuration                        | - Copied                                                                                                                                                                                                                                  | - 0100032211 - 0100032300                                                                                                                                                                                                                                                                                                                                                                             |
| - Modified / Modify (Failed attempt) | - 0100032102 - 0100032104 - 0100032400 - 0100044544 - 0100044545 - 0100044546 - 0100044547 - 0100032565 - 0100032566 - 0100032567 - 0100032571 - 0100032199 - 0100032202 - 0100032203 - 0100032234 - 0100032235 - 0108035012 - 0100044548 |                                                                                                                                                                                                                                                                                                                                                                                                       |
| - Read / Read (Failed attempt)       | - 0100032226 - 0100032228 - 0100032229 - 0100032230                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                       |
| Logon                                | - Successful logon                                                                                                                                                                                                                        | - 0100032001                                                                                                                                                                                                                                                                                                                                                                                          |
| - Failed logon                       | - 0100032002 - 0100032021                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                       |
| Rule                                 | - Activated                                                                                                                                                                                                                               | - 0419016384 - 0419016385 - 0419016386 - 0421016399 - 0211008192 - 0211008194 - 0203008200 - 0212008448 - 0261008450 - 0212008452 - 0212008457 - 0213008704 - 0213008706 - 0263008720 - 0262008960 - 0262008962 - 0262008964 - 0262008966 - 0262008968 - 0262008970 - 0262008972 - 0262008974 - 0211009234 - 0211009236 - 0202009248 - 0954024576 - 0954024579 - 0720018432 - 0720018433 - 0720018434 |
| Session                              | - Logoff                                                                                                                                                                                                                                  | - 0100032003 - 0102043040                                                                                                                                                                                                                                                                                                                                                                             |
| User                                 | - Add / Remove                                                                                                                                                                                                                            | - 0100032129 - 0100032131 - 0100032132                                                                                                                                                                                                                                                                                                                                                                |
| - Modified / Modify (Failed attempt) | - 0100032130                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                       |
