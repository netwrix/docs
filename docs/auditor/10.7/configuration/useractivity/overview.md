---
title: "User Activity"
description: "User Activity"
sidebar_position: 120
---

# User Activity

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration ensures audit data integrity.
Without it, your change reports may contain warnings, errors, or incomplete audit data.

**CAUTION:** Exclude the folder associated with Netwrix Auditor from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

You can use group Managed Service Accounts (gMSA) as data collecting accounts.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – Netwrix recommends this method. If you select to
  automatically configure audit in the target environment, Auditor checks your current audit
  settings on each data collection and adjusts them if necessary.
- Manually – You must adjust native audit settings manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

    - On the audited systems:

        - The **Windows Management Instrumentation** and the **Remote Registry** services must be
          running and their **Startup Type** must be set to "Automatic".
        - The **File and Printer Sharing** and the **Windows Management Instrumentation** features
          must be allowed to communicate through the Windows Firewall.
        - Local TCP Port 9003 must be opened for inbound connections.
        - Remote TCP Port 9004 must be opened for outbound connections.
        - The User Activity Core Service must be installed on the monitored computers. See the
          [Install for User Activity Core Service](/docs/auditor/10.7/install/useractivitycoreservice.md)
          topic for additional information.
        - .NET 4.8 must be installed.

    - On the Netwrix Auditor host system/server:

        - The **Windows Management Instrumentation** and the **Remote Registry** services must be
          running and their **Startup Type** must be set to "Automatic".
        - The **File and Printer Sharing** and the **Windows Management Instrumentation** features
          must be allowed to communicate through Windows Firewall.
        - Local TCP Port 9004 must be opened for inbound connections.
        - .NET 4.8 must be installed.

See the following topics for additional information:

- [Configure Data Collection Settings](/docs/auditor/10.7/configuration/useractivity/datacollection.md)
- [Configure Video Recordings Playback Settings](/docs/auditor/10.7/configuration/useractivity/videorecordings.md)
- [Install for User Activity Core Service](/docs/auditor/10.7/install/useractivitycoreservice.md)

## User Sessions

Review a full list of all session actions when auditing user sessions with Netwrix Auditor.

Netwrix Auditor reports all of these actions under the **User session** object type.

| Action                       | What                              | Description                                                                                            |
| ---------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Session start                 | Monitoring start                  | <ul><li>Logon (session creation)</li><li>Start of monitoring (after service install or deploy)</li></ul> |
| Session start                 | Local session start               | —                                                                                                         |
| Session end                   | Sign-out                          | User initiated sign-out / logoff                                                                          |
| Session end                   | Shutdown                          | <ul><li>Computer shutdown</li><li>Service stop / crash (appears after one starts service again)</li></ul> |
| Session start / Session end   | Screensaver off / Screensaver on  | —                                                                                                         |
| Session start / Session end   | Unlock / Lock                     | —                                                                                                         |
| Session start                 | Console connection                | Connect locally to existing session                                                                       |
| Session end                   | Console disconnection             | <ul><li>Switch user</li><li>Remote connect to existing session</li></ul>                                  |
| Session start                 | Remote connection                 | Connect through RDP                                                                                        |
| Session end                   | Remote disconnection              | Disconnect in RDP or just close RDP session                                                               |

### Run As Monitoring

Netwrix Auditor for User Activity can monitor programs executed under different user accounts.
Review the following table to discover how the product reflects different "run as" scenarios.

| Object type     | Details                              | Description                                                                                                                         |
| --------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Window          | None                                 | User runs the application.                                                                                                          |
| Window          | Application Run As: `<account_name>` | Standard user runs an application under credentials of another standard user.                                                       |
| Elevated Window | Application Run As: `<account_name>` | User runs program through Run As Administrator or Accepts UAC (User Account Control) elevation prompts.                             |
| Elevated Window | None                                 | Administrator needs to run the program with Run as Administrator enabled. Server Manager is one of the main examples for this case. |
