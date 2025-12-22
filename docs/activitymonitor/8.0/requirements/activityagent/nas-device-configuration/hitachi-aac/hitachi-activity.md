---
title: "Hitachi Activity Auditing Configuration"
description: "Hitachi Activity Auditing Configuration"
sidebar_position: 60
---

# Hitachi Activity Auditing Configuration

The Hitachi NAS (HNAS) server can host multiple Enterprise Virtual Servers (EVS). Each EVS has
multiple file systems. Auditing is enabled and configured per file system. This guide explains how
to enable auditing on an HNAS and to configure the Activity Monitor to monitor activity coming from
the Hitachi device auditing.

The Activity Monitor does not use the EVS or file system name to connect to HNAS. Therefore, all
that is required of the user for HNAS activity collection is the following:

- Logs path (UNC)

    - Active Log file name – Active Log File name needs with an `.evt` extension, and it should be
      the same as in the HNAS configuration. This is usually `audit.evt`.

- Credentials to access the HNAS log files

    - The only requirement for the credentials is the ability to read files from the `logs`
      directory.

- A polling interval between log collections (15 seconds by default)

    - The Activity Monitor minimizes IO by remembering a file offset where it stopped reading and
      continuing from that offset next time.

:::warning
The following disclaimer is provided by Hitachi:
:::


“Because CIFS defines open and close operations, auditing file system object access performed by
clients using other protocols would be costly in terms of system performance, because each I/O
operation would have to be audited as an open operation. **Therefore, when file system auditing is
enabled, by default, only clients connecting through the CIFS protocol are allowed access to the
file system.** Access by clients using other protocols, like NFS, can, however, be allowed. When
such access is allowed, access to file system objects through these protocols is not audited.”

:::note
File system auditing can be configured to deny access to clients connecting with protocols
that cannot be audited (NFS). Please see the Hitachi
[Server and Cluster Administration Guide](https://support.hds.com/download/epcra/hnas0106.pdf) for
additional information.
:::


**Configuration Checklist**

Complete the following checklist prior to configuring activity monitoring of Hitachi devices.
Instructions for each item of the checklist are detailed within the following topics.

**Checklist Item 1: [Configure Audit Logs on HNAS](/docs/activitymonitor/8.0/requirements/activityagent/nas-device-configuration/hitachi-aac/configurelogs.md)**

Checklist Item 2:
[Configure Access to HNAS Audit Logs on Activity Agent Server](/docs/activitymonitor/8.0/requirements/activityagent/nas-device-configuration/hitachi-aac/configureaccesstologs.md)

**Checklist Item 3: Activity Monitor Configuration**

- Deploy the Activity Monitor Activity Agent to a Windows proxy server
