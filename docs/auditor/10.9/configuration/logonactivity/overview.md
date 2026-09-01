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
integrity, otherwise your change reports may contain warnings, errors, or incomplete audit data.

**CAUTION:** Exclude the folder associated with Netwrix Auditor from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, Netwrix Auditor checks your current
  audit settings on each data collection and adjusts them if necessary.

    - For both new and existing monitoring plans, you can click **Launch Audit Configuration
      Assistant** (in the wizard step or in the plan settings, respectively) to launch a special
      tool that can detect current infrastructure settings and adjust them as needed for monitoring.
      See the [Audit Configuration Assistant](/docs/auditor/10.9/tools/auditconfigurationassistant.md) topic for
      additional information.

- Manually – You must manually adjust native audit settings to ensure comprehensive and reliable
  audit data collection. You can enable Auditor to continually enforce the relevant audit policies
  or configure them manually:

    - Set the following policies to _"Success"_ and _"Failure"_ for the effective domain
      controllers policy:

        - Audit Logon Events
        - Audit Account Logon Events

    - Set the Audit system events policy to _"Success"_ for the effective domain controllers
      policy.
    - You can configure the Advanced audit policy settings instead of basic.
    - Set the Maximum Security event log size to 4GB. Set the retention method of the Security
      event log to _“Overwrite events as needed”_ or _"Archive the log when full"_.
    - Enable the following Windows Firewall inbound rules:

        - Remote Event Log Management (NP-In)
        - Remote Event Log Management (RPC)
        - Remote Event Log Management (RPC-EPMAP)

See the following topics for additional information:

- [Configure Basic Domain Audit Policies](/docs/auditor/10.9/configuration/logonactivity/basicpolicy.md)
- [Configure Advanced Audit Policies](/docs/auditor/10.9/configuration/logonactivity/advancedpolicy.md)
- [Configure Security Event Log Size and Retention Settings](/docs/auditor/10.9/configuration/logonactivity/securityeventlog.md)
- [ Logon Activity Ports](/docs/auditor/10.9/configuration/logonactivity/ports.md)

## Logon Activity Actions

Review a full list of actions captured when monitoring Logon Activity with Netwrix Auditor.

**NOTE:** Consider the following:

- Netwrix Auditor doesn't report logon activity by local accounts
- Netwrix Auditor doesn't report logoff activity from workstations
- Netwrix Auditor reports logoff activity from Domain Controllers

For the attributes marked with asterisk (\*), Netwrix Auditor doesn't report _what_ changed.

| Action            | Object Type                | Attributes                                                                                                                |
| ----------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Successful Logon  | Logon                      | —                                                                                                                         |
| Interactive Logon | A session was reconnected. |                                                                                                                           |
| Failed Logon      | Logon\*                    | Cause description. The number of matching events if the logon attempt failed several times during a short period of time. |
| Interactive Logon |                            |                                                                                                                           |
| Logoff            | Interactive Logon          | A session was disconnected. Session duration (if the corresponding logon was found).                                      |
