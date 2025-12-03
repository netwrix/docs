---
title: "Configure Juniper Devices"
description: "Configure Juniper Devices"
sidebar_position: 80
---

# Configure Juniper Devices

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

    - The target Juniper device must be configured via JunOS Command Line Interface (CLI) as
      described below.

To configure you Juniper devices, do the following:

1. Launch the JunOS Command Line Interface (CLI).
2. Execute the following commands:

    # configure

    # set system syslog host `<host address>` any info

    where `<host address>` is the IP address of the computer where Netwrix Auditor Server is
    installed.

    # set system syslog host `<host address>` port `<port name>`

    where

    `<host address>` is the IP address of the computer where Netwrix Auditor Server is installed

    AND

    `<port number>` is the name of the UDP port used to listen to network devices (514 port used by
    default). [Network Devices](/docs/auditor/10.8/admin/monitoringplans/networkdevices.md)

    # set system syslog time-format `<current year>`

    # commit

## Juniper Devices

Review a full list of object types Netwrix Auditor can collect on Juniper network devices.

| Object type    | Actions                                                                                                                               | Event ID                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logon          | - Successful logon                                                                                                                    | - `LOGIN_INFORMATION` - `Accepted keyboard-interactive/pam` - `WEB_AUTH_SUCCESS` - `JADE_AUTH_SUCCESS`                                                                                                                                                                                                                                                                                                                        |
| - Failed logon | - `LOGIN_FAILED` - `SSHD_LOGIN_FAILED` `LIBJNX_LOGIN_ACCOUNT_LOCKED` - `WEB_AUTH_FAIL` `JADE_AUTH_FAILURE`                            |                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Authentication | - Successful Logon                                                                                                                    | - FWAUTH_HTTP_USER_AUTH_ACCEPTED - `FWAUTH_WEBAUTH_SUCCESS` - FWAUTH_FTP_USER_AUTH_ACCEPTED - FWAUTH_TELNET_USER_AUTH_ACCEPTED - DYNAMIC_VPN_AUTH_OK                                                                                                                                                                                                                                                                          |
| - Failed logon | - FWAUTH_HTTP_USER_AUTH_FAIL - FWAUTH_WEBAUTH_FAIL - FWAUTH_FTP_USER_AUTH_FAIL - FWAUTH_TELNET_USER_AUTH_FAIL - DYNAMIC_VPN_AUTH_FAIL |                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Configuration  | - Modified / Modify (Failed attempt)                                                                                                  | - `UI_FACTORY_OPERATION` - UI_INITIALSETUP_OPERATION - UI_RESCUE_OPERATION - UI_LOAD_EVENT - UI_CFG_AUDIT_OTHER - UI_CFG_AUDIT_SET: - UI_CFG_AUDIT_NEW - UI_CFG_AUDIT_SET_SECRET - UI_COMMIT: - UI_COMMIT_PROGRESS - UI_COMMIT_COMPLETED - UI_COMMIT_AT_COMPLETED - UI_COMMIT_NOT_CONFIRMED - UI_COMMIT_CONFIRMED_REMINDER - UI_COMMIT_AT_ABORT - UI_COMMIT_AT_FAILED - UI_COMMIT_COMPRESS_FAILED - UI_COMMIT_ROLLBACK_FAILED |
| Rule           | - Activated                                                                                                                           | - RT_SCREEN_ICMP - RT_SCREEN_IP - RT_SCREEN_TCP - RT_SCREEN_TCP_DST_IP - RT_SCREEN_TCP_SRC_IP - RT_SCREEN_UDP - AV_VIRUS_DETECTED_MT - ANTISPAM_SPAM_DETECTED_MT - IDP_APPDDOS_APP_ATTACK_EVENT - IDP_APPDDOS_APP_STATE_EVENT - IDP_ATTACK_LOG_EVENT                                                                                                                                                                          |
