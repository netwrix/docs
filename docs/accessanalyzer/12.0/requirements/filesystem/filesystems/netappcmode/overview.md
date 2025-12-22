---
title: "NetApp Data ONTAP Cluster-Mode Target Requirements"
description: "NetApp Data ONTAP Cluster-Mode Target Requirements"
sidebar_position: 90
---

# NetApp Data ONTAP Cluster-Mode Target Requirements

Netwrix Access Analyzer (formerly Enterprise Auditor) can execute Access Auditing (FSAA) and/or
Sensitive Data Discovery Auditing scans on NetApp Data ONTAP Cluster-Mode devices. The Netwrix
Activity Monitor can be configured to monitor activity on NetApp Data ONTAP Cluster-Mode devices and
make the event data available for Access Analyzer Activity Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

The credentials used by the Access Analyzer scans must have the following permissions on the target
host:

- For CIFS access:

    - Method 1 – Use FPolicy & ONTAP API

        - Enumerate shares by executing specific NetApp API calls
        - Bypass NTFS security to read the entire folder structure to be scanned and collect
          file/folder permissions

    - Method 2 – Use the c$ Share

        - Enumerate shares with standard Windows file sharing APIs.
        - Bypass NTFS security to read the entire folder structure to be scanned and collect
          file/folder permissions

- For NFSv3 access:

    - IP Address of scanning server in the export policy for each volume

These permissions grant the credential the ability to enumerate shares, access the remote registry,
and bypass NTFS security on folders. The credential used within the assigned Connection Profile for
these target hosts requires these permissions. See the
[NetApp Data ONTAP Cluster-Mode Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/netappcmode/access/access.md) topic for
instructions.

:::note
These permissions are in addition to those needed to either deploy applet scans for
running scans in proxy mode with applet or installing the File System Proxy Service Permissions for
running scans in proxy mode as a service. See the
[File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md)
topic for additional information.
:::


## Access & Sensitive Data Auditing Port Requirements

The firewall ports required by Access Analyzer for Access Auditing (FSAA) and/or Sensitive Data
Discovery Auditing scans are based on the File System scan mode to be used. See the
[File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md)
topic for additional information.

## Activity Auditing Permissions

Windows Proxy Server for Activity Agent Monitoring of NetApp Data ONTAP Cluser-Mode Device

The Netwrix Activity Monitor must have an Activity Agent deployed on a Windows proxy server. While
actively monitoring, the Activity Agent generates activity log files stored on the proxy server. The
credential used to deploy the Activity Agent must have the following permissions on the proxy
server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Access Analyzer, the credential used by Access
Analyzer to read the activity log files must have also have this permission.

**NetApp Data ONTAP Cluster-Mode Device Requirements**

An FPolicy must be configured on the target device for Activity Auditing (FSAC) scans. A tailored
FPolicy is recommended as it decreases the impact on the NetApp device. The credential associated
with the FPolicy used to monitor activity must be provisioned with access to (at minimum) the
following CLI commands, according to the level of collection desired:

- Collect Activity Events (Least Privilege)

    - `version` – Readonly access
    - `volume` – Readonly access
    - `vserver` – Readonly access

- Employ the “Enable and connect FPolicy” Option (Less Privilege)

    - `version` – Readonly access
    - `volume` – Readonly access
    - `vserver` – Readonly access
    - `vserver fpolicy disable` – All access
    - `vserver fpolicy enable` – All access
    - `vserver fpolicy engine-connect` – All access
    - `network interface` – Readonly access

- Employ the “Configure FPolicy Option (Automatic Configuration of FPolicy)

    - `version` – Readonly access
    - `volume` – Readonly access
    - `vserver` – Readonly access
    - `vserver fpolicy` – All access
    - `network interface` – Readonly access

- If FPolicy uses a TLS connection, the following CLI command is also needed:

    - `security certificate install` – All access

- StealthAUDIT Integration requires the addition of the following CLI command:

    - `security login role show-ontapi` – Readonly access

See the [NetApp Data ONTAP Cluster-Mode Activity Auditing Configuration](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/netappcmode/activity/activity.md) topic for
instructions.

**Activity Monitor Archive Location**

If the activity log files are being archived, configurable within the Netwrix Activity Monitor
Console, then the credential used by Access Analyzer to read the activity log files must also have
READ and WRITE permissions on the archive location.

## Activity Auditing Port Requirements

Firewall settings depend on the type of environment being targeted. The following firewall settings
are required for communication between the Agent server and the Netwrix Activity Monitor Console:

| Communication Direction          | Protocol | Ports | Description         |
| -------------------------------- | -------- | ----- | ------------------- |
| Activity Monitor to Agent Server | TCP      | 4498  | Agent Communication |

The Windows firewall rules need to be configured on the Windows server, which require certain
inbound rules be created if the scans are running in applet mode. These scans operate over a default
port range, which cannot be specified via an inbound rule. For more information, see the Microsoft
[Connecting to WMI on a Remote Computer](https://msdn.microsoft.com/en-us/library/windows/desktop/aa389290(v=vs.85).aspx)
article.

Additional Firewall Rules for NetApp Data ONTAP Cluster-Mode Device

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target NetApp Data ONTAP Cluster-Mode device:

| Communication Direction           | Protocol         | Ports | Description    |
| --------------------------------- | ---------------- | ----- | -------------- |
| Activity Agent Server to NetApp\* | HTTP (optional)  | 80    | ONTAPI         |
| Activity Agent Server to NetApp\* | HTTPS (optional) | 443   | ONTAPI         |
| NetApp to Activity Agent Server   | TCP              | 9999  | FPolicy events |

\*Only required if using the FPolicy Configuration and FPolicy Enable and Connect options in
Activity Monitor.

:::note
If either HTTP or HTTPS are not enabled, the FPolicy on the NetApp Data ONTAP 7-Mode
device must be configured manually. Also, the External Engine will not reconnect automatically in
the case of a server reboot or service restart.
:::


Additional Firewall Rules for Integration between Access Analyzer and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Access Analyzer Console:

| Communication Direction         | Protocol | Ports      | Description                    |
| ------------------------------- | -------- | ---------- | ------------------------------ |
| Access Analyzer to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Access Analyzer to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
