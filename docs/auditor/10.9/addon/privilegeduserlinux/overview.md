---
title: "Privileged User Monitoring on Linux and Unix Systems"
description: "Privileged User Monitoring on Linux and Unix Systems"
sidebar_position: 170
---

# Privileged User Monitoring on Linux and Unix Systems

The add-on works in collaboration with Auditor, supplying data about privileged user activity on Linux and Unix. Aggregating data into a single audit trail simplifies analysis, makes activity monitoring more cost effective, and helps you keep tabs on privilege elevation on your Linux and Unix-based devices. For example, it helps monitor the usage of SUDO as well as remote access with openSSH.

On a high level, the add-on works as follows:

**Step 1** – The add-on listens to the specified UDP ports and captures designated Syslog messages.

**Step 2** – Out of the box, messages from Red Hat Enterprise Linux 6, 7, 8, 9, SUSE Linux Enterprise Server 12, openSUSE 42, and Ubuntu 16 are supported. For other distributions, deployment of the rsyslog package may be required. You can edit the add-on configuration to extend the captured message list.

**Step 3** – The add-on processes these events into Netwrix Auditor-compatible format (Activity Records). Each Activity Record contains the user account, action, time, and other details.

**Step 4** – Using the Integration API, the add-on sends the activity records to the Netwrix Auditor Server, which writes them to the Long-Term Archive and the Audit Database.

See the [Integration API](/docs/auditor/10.9/api/overview.md) topic for additional information on the structure of the Activity Record and the capabilities of the Integration API.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as follows:

### The Netwrix Auditor Server side

- The Audit Database settings are configured in Auditor Server.
- The TCP **9699** port (default Auditor Integration API port) is open for inbound connections.
- The user retrieving data from the Audit Database is granted the Contributor role in Auditor. Alternatively, you can grant the Global administrator role or add the user to the Netwrix Auditor Administrators group. In this case, this user will have the most extended permissions in the product.
- The UDP **514** port is open for inbound connections.

**CAUTION:** UDP 514 port can only be used by one service, otherwise the following error will occur:

```
[ERROR] Error occurred when starting the syslog udp listener. Only one usage of each socket address (protocol/network address/port) is normally permitted
```

- .NET Framework [4.7.2](https://www.microsoft.com/en-us/download/details.aspx?id=48130) is installed.

### On the target syslog-based platform

- Outbound UDP **514** port must be enabled.
- The **Syslog daemon** must be configured to redirect events. The procedure below explains how to configure redirection.

**NOTE:** The deployment of the rsyslog package may be required.

#### Configuration for RHEL 6-8 Linux Server

**Step 1** – Open the `/etc/rsyslog.conf` file.

**Step 2** – Add the following line:

```
auth.*;authpriv.* @name:514;RSYSLOG_SyslogProtocol23Format
```

where **name** is a FQDN, NetBIOS name or IP address of the computer where Netwrix Auditor Server is installed.

For example:

```
auth.*;authpriv.* @172.28.18.25:514;RSYSLOG_SyslogProtocol23Format
```

**Step 3** – Launch the **console** and execute the following command:

```bash
service rsyslog restart
```

#### Configuration for Ubuntu and RHEL 9+

**Step 1** – Ensure that rsyslog is installed. If not, install it using the appropriate command:

For Ubuntu/Debian:

```bash
sudo apt-get update
sudo apt-get install rsyslog
```

For RHEL 9+:

```bash
sudo dnf install rsyslog
```

**Step 2** – Navigate to the `/etc/rsyslog.d/50-default.conf` file.

**Step 3** – Add the following line:

```
auth.*;authpriv.* @name:514;RSYSLOG_SyslogProtocol23Format
```

where **name** is a FQDN, NetBIOS name or IP address of the computer where Netwrix Auditor Server is installed.

For example:

```
auth.*;authpriv.* @172.28.18.25:514;RSYSLOG_SyslogProtocol23Format
```

**Step 4** – Save the file and restart the rsyslog service:

```bash
sudo systemctl restart rsyslog
```
