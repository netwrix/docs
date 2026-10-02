---
title: "Configure WatchGuard Firebox Devices"
description: "Configure WatchGuard Firebox Devices"
sidebar_position: 115
---

# Configure WatchGuard Firebox Devices

Netwrix Auditor relies on native syslog events for collecting audit data. Therefore, successful
change and access auditing requires a certain configuration of native audit settings in the audited
environment. Proper audit configuration ensures audit data integrity; otherwise, your change reports
may contain warnings, errors, or incomplete audit data.

**CAUTION:** Exclude the folder associated with Netwrix Auditor from antivirus scanning. See the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

Netwrix Auditor can't push configuration changes to network devices, so configure native audit
settings manually on the WatchGuard Firebox device.

To configure your WatchGuard Firebox devices, do the following:

1. Connect to your WatchGuard Firebox device: launch an Internet browser and enter the IP address
   or device DNS name in the URL field (_https://`<IP address / Device DNS name>`:8080_).
2. Log in to Fireware Web UI.
3. Navigate to **System** → **Logging**.
4. Select **Send log messages to the syslog server at this IP address** and set the IP address of
   the computer that hosts Netwrix Auditor Server.
5. Set the syslog server port to a UDP port (for example, 514).
6. Select the syslog facility to use for log messages.
7. Under **Select the types of log messages to send to this syslog server**, select the following
   (minimal requirement, select other categories if needed):

    - Traffic log messages
    - Alarm log messages
    - Event log messages

8. Click **Save**.

## WatchGuard Firebox Devices

Review a full list of object types Netwrix Auditor can collect on WatchGuard Firebox network
devices.

| Object type   | Actions             | Event ID                                                                                                                                                                                                 |
| ------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration | - Added             | - `msg_id="0102-0001"`                                                                                                                                                                                 |
| - Modified      | - `msg_id="0101-0001"`                                                                                                                                                                                 |                                                                                                                                                                                                         |
| - Moved         | - `msg_id="0105-0001"`                                                                                                                                                                                 |                                                                                                                                                                                                         |
| - Removed       | - `msg_id="0102-0002"`                                                                                                                                                                                 |                                                                                                                                                                                                         |
| Logon         | - Successful logon  | - `msg_id="3E00-0002"` - `msg_id="1100-0004"`                                                                                                                                                           |
| - Failed logon  | - `msg_id="1100-0005"` - `msg_id="5000-0001"` - `msg_id="1100-000C"` - `msg_id="1100-000D"` - `msg_id="1100-000E"`                                                                                     |                                                                                                                                                                                                         |
| - Logoff        | - `msg_id="3E00-0004"`                                                                                                                                                                                 |                                                                                                                                                                                                         |
| Rule          | - Activated         | - `msg_id="3000-0148"` - `msg_id="3000-0152"` - `msg_id="3000-0153"` - `msg_id="3000-0154"` - `msg_id="3000-0155"` - `msg_id="3000-0156"` - `msg_id="3000-0157"` - `msg_id="3000-0158"` - `msg_id="3000-0159"` - `msg_id="3000-0160"` - `msg_id="3000-0161"` - `msg_id="3000-0162"` - `msg_id="3000-0163"` - `msg_id="3000-0164"` - `msg_id="3000-0165"` - `msg_id="3000-0166"` - `msg_id="3000-0169"` - `msg_id="3000-0173"` |
| Session       | - Successful logon  | - `msg_id="2500-0000"` - `msg_id="3E00-0002"` - `msg_id="1100-0004"`                                                                                                                                    |
| - Failed logon  | - `msg_id="1100-0005"` - `msg_id="021A-0016"` - `msg_id="1100-0008"`                                                                                                                                   |                                                                                                                                                                                                         |
| - Logoff        | - `msg_id="2500-0001"` - `msg_id="3E00-0004"`                                                                                                                                                           |                                                                                                                                                                                                         |
| - Modified      | - `msg_id="0207-0001"`                                                                                                                                                                                 |                                                                                                                                                                                                         |
| User          | - Modified          | - `msg_id="0101-0002"` - `msg_id="1100-0006"` - `msg_id="1100-0007"`                                                                                                                                    |
