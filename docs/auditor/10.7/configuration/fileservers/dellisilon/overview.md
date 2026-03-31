---
title: "Dell Isilon/PowerScale"
description: "Dell Isilon/PowerScale"
sidebar_position: 20
---

# Dell Isilon/PowerScale

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

    - SMB Network Protocol support is required.
    - Create a shared directory _/ifs/.ifsvar/audit/_ on your cluster.

        Use SMB (CIFS) protocol for sharing.

    - The following filters for auditing protocol operations that succeeded/failed must be enabled
      for audited access zones on your cluster:

    For EMC Isilon/PowerScale 7x:

    - Audit Success: read, write, delete, set_security, rename
    - Audit Failure: read, create, write, delete, set_security, rename

    For EMC Isilon/PowerScale 8.2 and above:

    - Audit Success: read, create, write, delete, set_security, rename
    - Audit Failure: read, create, write, open, delete, set_security, rename

To configure your Dell Isilon/PowerScale appliance for monitoring perform the following procedures:

- [Normal and Enterprise Modes for Clusters](/docs/auditor/10.7/configuration/fileservers/dellisilon/normal.md)
- [Compliance Mode](/docs/auditor/10.7/configuration/fileservers/dellisilon/compliance.md)

If your file shares contain symbolic links and you want to collect state-in-time data for these
shares, the local-to-local, local-to-remote, remote-to-local, and remote-to-remote symbolic link
evaluations must be enabled on the computer that hosts AuditorServer.

The following table lists actions that can be performed on Dell Isilon/PowerScale:

|                          | File | Folder | Share |
| ------------------------ | ---- | ------ | ----- |
| Added                    | +    | +      | +     |
| Add (failed attempt)     | +\*  | +\*    | –     |
| Modified                 | +    | +      | +     |
| Modify (failed attempt)  | +    | +      | –     |
| Moved                    | +\*  | +\*    | –     |
| Move (failed attempt)    | +\*  | +\*    | –     |
| Read                     | +    | –      | –     |
| Read (failed attempt)    | +    | +\*    | –     |
| Renamed                  | +\*  | +\*    | –     |
| Renamed (failed attempt) | +\*  | +\*    | –     |
| Removed                  | +    | +      | +     |
| Remove (failed attempt)  | +\*  | +\*    | –     |
| Copied                   | –    | –      | –     |

**NOTE:** For Dell Isilon/PowerScale storage, auditing of _System_ zone is not supported. As stated
by Dell, this zone should be reserved for configuration access only. Current data should be stored
in other access zones. See the
[Dell Upsilon CLI Administration Guide](https://www.dellemc.com/en-us/collaterals/unauth/technical-guides-support-information/2019/09/docu95372.pdf)
for additional information.

Actions marked with an asterisk (\*) are reported for Dell Isilon/PowerScale only. Consider that
monitoring and reporting of other Dell Data Storage systems may not provide the results you expect
due to native Dell audit peculiarities.
