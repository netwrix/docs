---
title: "Qumulo"
description: "Qumulo"
sidebar_position: 50
---

# Qumulo

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

    - The Remote Syslog Address and port number must be configured as described in the
      [Configure Core Audit for Qumulo File Servers](/docs/auditor/10.7/configuration/fileservers/qumulo/configure.md) topic.

Review a full list of object types Netwrix Auditor can collect on Qumulo network devices.

| Action                  | File | Folder | Share |
| ----------------------- | ---- | ------ | ----- |
| Added                   | +    | +      | -     |
| Add (failed attempt)    | +    | +      | -     |
| Modified                | +    | +      | -     |
| Modify (failed attempt) | -    | -      | -     |
| Moved                   | +    | +      | -     |
| Move (failed attempt)   | -    | -      | -     |
| Read                    | +    | +      | -     |
| Read (failed attempt)   | -    | -      | -     |
| Renamed                 | +    | +      | -     |
| Rename (failed attempt) | -    | -      | -     |
| Removed                 | +    | +      | -     |
| Remove (failed attempt) | -    | -      | -     |
| Copied                  | -    | -      | -     |

**NOTE:** For Qumulo system Auditor displays the actual time when the event occurred. The 'When'
column shows the time when the syslog message arrived.

If an object has been moved between file shares, the product reports the following actions:

- Read + Removed for the initial object;

- Added + Modified for the object to a new location.
