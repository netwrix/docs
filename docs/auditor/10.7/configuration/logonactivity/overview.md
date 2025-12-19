---
title: "Logon Activity"
description: "Logon Activity"
sidebar_position: 60
---

# Logon Activity

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

    - For both new and existing monitoring plans, you can click **Launch Audit Configuration
      Assistant** (in the wizard step or in the plan settings, respectively) to launch a special
      tool that can detect current infrastructure settings and adjust them as needed for monitoring.
      See the [Audit Configuration Assistant](/docs/auditor/10.7/tools/auditconfigurationassistant.md) topic for
      additional information.

- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

    - The following policies must be set to _"Success"_ and _"Failure"_ for the effective domain
      controllers policy:

        - Audit Logon Events
        - Audit Account Logon Events

    - The Audit system events policy must be set to _"Success"_ for the effective domain controllers
      policy.
    - The Advanced audit policy settings can be configured instead of basic.
    - The Maximum Security event log size must be set to 4GB. The retention method of the Security
      event log must be set to _“Overwrite events as needed”_ or _"Archive the log when full"_.
    - The following Windows Firewall inbound rules must be enabled:

        - Remote Event Log Management (NP-In)
        - Remote Event Log Management (RPC)
        - Remote Event Log Management (RPC-EPMAP)

See the following topics for additional information:

- [Configure Basic Domain Audit Policies](/docs/auditor/10.7/configuration/logonactivity/basicpolicy.md)
- [Configure Advanced Audit Policies](/docs/auditor/10.7/configuration/logonactivity/advancedpolicy.md)
- [Configure Security Event Log Size and Retention Settings](/docs/auditor/10.7/configuration/logonactivity/securityeventlog.md)
- [ Logon Activity Ports](/docs/auditor/10.7/configuration/logonactivity/ports.md)

## Logon Activity Actions

Review a full list of actions captured when monitoring Logon Activity with Netwrix Auditor.

**NOTE:** Please consider the following:

- Logon activity by local accounts is not reported
- Logoff activity from workstations is not reported
- Logoff activity from Domain Controllers is reported

For the attributes marked with asterisk (\*) _what_ changed is not reported.

| Action            | Object Type                | Attributes                                                                                                                |
| ----------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Successful Logon  | Logon                      | —                                                                                                                         |
| Interactive Logon | A session was reconnected. |                                                                                                                           |
| Failed Logon      | Logon\*                    | Cause description. The number of matching events if the logon attempt failed several times during a short period of time. |
| Interactive Logon |                            |                                                                                                                           |
| Logoff            | Interactive Logon          | A session was disconnected. Session duration (if the corresponding logon was found).                                      |
