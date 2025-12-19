---
title: "User Activity"
description: "User Activity"
sidebar_position: 120
---

# User Activity

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

You can use group Managed Service Accounts (gMSA) as data collecting accounts.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, your current audit settings will be
  checked on each data collection and adjusted if necessary.
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

    - On the audited system(s):

        - The **Windows Management Instrumentation** and the **Remote Registry** services must be
          running and their **Startup Type** must be set to "Automatic".
        - The **File and Printer Sharing** and the **Windows Management Instrumentation** features
          must be allowed to communicate through the Windows Firewall.
        - Local TCP Port 9003 must be opened for inbound connections.
        - Remote TCP Port 9004 must be opened for outbound connections.
        - The User Activity Core Service is installed on the monitored computers. See the Install
          Netwrix Auditor Agent to Audit User Activity topic for additional information.
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

## User Sessions

Review a full list of all session actions when auditing user sessions with Netwrix Auditor.

| Object type                 | Action                           | What                                                                                | Description                                                                        |
| --------------------------- | -------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| User session                | Session start                    | Monitoring start                                                                    | - Logon (session creation) - Start of monitoring (after service install or deploy) |
| Session start               | Local session start              | —                                                                                   |                                                                                    |
| Session end                 | Sign-out                         | - User initiated sign-out / logoff                                                  |                                                                                    |
| Session end                 | Shutdown                         | - Computer shutdown - Service stop / crash (appears after one starts service again) |                                                                                    |
| Session start / Session end | Screensaver off / Screensaver on | —                                                                                   |                                                                                    |
| Session start / Session end | Unlock / Lock                    | —                                                                                   |                                                                                    |
| Session start               | Console connection               | - Connect locally to existing session                                               |                                                                                    |
| Session end                 | Console disconnection            | - Switch user - Remote connect to existing session                                  |                                                                                    |
| Session start               | Remote connection                | - Connect through RDP                                                               |                                                                                    |
| Session end                 | Remote disconnection             | - Disconnect in RDP or just close RDP session                                       |                                                                                    |

### Run As Monitoring

Netwrix Auditor for User Activity can monitor programs executed under different user accounts.
Review the table below to discover how different "run as" scenarios are reflected in the product.

| Object type     | Details                              | Description                                                                                                                         |
| --------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Window          | None                                 | User runs the application.                                                                                                          |
| Window          | Application Run As: `<account_name>` | Standard user runs an application under credentials of another standard user.                                                       |
| Elevated Window | Application Run As: `<account_name>` | User runs program through Run As Administrator or Accepts UAC (User Account Control) elevation prompts.                             |
| Elevated Window | None                                 | Administrator needs to run the program with Run as Administrator enabled. Server Manager is one of the main examples for this case. |

## Install Netwrix Auditor Agent to Audit User Activity

By default, the agent is installed automatically on the audited computers upon the **New Managed
Object** wizard completion. If, for some reason, installation has failed, you must install the agent
manually on each of the audited computers.

Before installing Netwrix Auditor agent to audit user activity, make sure that:

- The audit settings are configured properly.
- The Data Processing Account has access to the administrative shares.

Follow the steps to install Netwrix Auditor agent to audit user activity.

**Step 1 –** Navigate to _%Netwrix Auditor Installation Folder%\User Activity Video Recording_ and
copy the UACoreSvcSetup.msi file to the audited computer.

**NOTE:** This is the default location. However, it may be changed because users can move this
folder.

**Step 2 –** Run the installation package.

**Step 3 –** Follow the instructions of the setup wizard. When prompted, accept the license
agreement and specify the installation folder.

**Step 4 –** On the Agent Settings page, specify the host server (i.e., the name of the computer
where Netwrix Auditor is installed) and the server TCP port.

Netwrix Auditor agent is installed and ready to audit user activity.
