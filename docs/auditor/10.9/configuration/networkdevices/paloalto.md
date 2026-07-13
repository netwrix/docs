---
title: "Configure PaloAlto Devices"
description: "Configure PaloAlto Devices"
sidebar_position: 90
---

# Configure PaloAlto Devices

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

    - Create a Syslog Server profile and syslog forwarding for the target PaloAlto device via Web
      Interface as described below.

To configure your PaloAlto devices, create a Syslog server profile and assign it to the log settings
for each log type.

Follow the steps to configure a Syslog server profile.

**Step 1 –** Connect to your PaloAlto device: launch an Internet browser and enter the IP address of
the firewall in the URL field (https://`<IP address>`).

**Step 2 –** In the Web Interface, navigate to **Device** > **Server Profiles** > **Syslog**.

**Step 3 –** Click **Add** and specify profile name, for example, _"SyslogProf1"_.

**Step 4 –** Specify syslog server parameters:

| Parameter     | Description                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------- |
| Name          | Specify unique name for a syslog server.                                                       |
| Syslog Server | Provide a server name by entering its FQDN or IPv4 address.                                    |
| Transport     | Select UDP.                                                                                    |
| Port          | Provide the name of the UDP port used to listen to network devices (514 port used by default). |
| Format        | Select IETF.                                                                                   |
| Facility      | Netwrix recommends using default values.                                                       |

Follow the steps to configure syslog forwarding.

**Step 1 –** In the Web Interface, navigate to **Device** > **Log Settings**.

**Step 2 –** For System, Config, and User ID logs, click Add and enter unique name of your syslog
server.

**Step 3 –** On the syslog panel, click Add and select the syslog profile you created above.

**Step 4 –** Click **Commit** and review the logs on the syslog server.

**NOTE:** After configuring the monitoring plan, Netwrix Auditor will listen to the logs forwarded
by the Palo Alto device.

## PaloAlto Devices

Review a full list of object types Netwrix Auditor can collect on PaloAlto network devices.

| Object type                          | Actions                                                            | Event ID                                                                            |
| ------------------------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| Logon                                | - Successful logon                                                 | - logged in                                                                         |
| - Failed logon                       | - failed authentication for user - authentication failed for user  |                                                                                     |
| Authentication                       | - Successful Logon                                                 | - authentication succeeded for user - USERID,login, - globalprotectportal-auth-succ |
| - Failed Logon                       | - authentication failed for user - globalprotectportal-auth-fail   |                                                                                     |
| Configuration                        | - Modified / Modify (Failed attempt)                               | - commit                                                                            |
| Environment                          | - Read / Read (Failed attempt)                                     | - connect-server-monitor-failure                                                    |
| Session                              | - Logoff                                                           | - logged out                                                                        |
| User                                 | - Add / Added (Failed attempt)                                     | - config mgt-config users - config shared local-user-database user                  |
| - Modified / Modify (Failed attempt) | - config mgt-config users - config shared local-user-database user |                                                                                     |
| - Removed / Remove (Failed attempt)  | - config mgt-config users - config shared local-user-database user |                                                                                     |
