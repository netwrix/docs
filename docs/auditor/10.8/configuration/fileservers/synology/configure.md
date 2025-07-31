---
title: "Configure Synology File Servers for Audit"
description: "Configure Synology File Servers for Audit"
sidebar_position: 10
---

# Configure Synology File Servers for Audit

Follow the steps to configure your Synology NAS devices to transmit the local system logs for
monitoring.

**Step 1 –** Navigate to **Control Panel > File Services > SMB > Log Settings**. Please note that
all audit types should be enabled.

**Step 2 –** Log in to the Synology Web Administration Console.

**Step 3 –** Navigate to **Log Center > Log Sending** and configure the following:

- Server – Provide the IP address or the computer listened by Syslog. It should be a running Netwrix
  Syslog service or a third-party Syslog forward service.
- Port – Use the default value (514).
- Transfer protocol – select TCP or **UDP**.
- Log format – Set to "IETF (RFC 5424)".
- Enable secure connection – Use the default value.
- Import certificate – Use the default value.

**Step 4 –** Click Apply.

**NOTE:** Currently, Netwrix Auditor cannot collect activities using a local Synology user. Data
collection only supported via a domain user with the necessary access privileges to the Synology
file server.
