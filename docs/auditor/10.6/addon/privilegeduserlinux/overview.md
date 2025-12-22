---
title: "Privileged User Monitoring on Linux and Unix Systems"
description: "Privileged User Monitoring on Linux and Unix Systems"
sidebar_position: 160
---

# Privileged User Monitoring on Linux and Unix Systems

The add-on works in collaboration with Auditor, supplying data about privileged user activity on
Linux and Unix. Aggregating data into a single audit trail simplifies analysis, makes activity
monitoring more cost effective, and helps you keep tabs on privilege elevation on your Linux and
Unix-based devices. For example, it helps monitor the usage of SUDO as well as remote access with
openSSH.

On a high level, the add-on works as follows:

1. The add-on listens to the specified UDP ports and captures designated Syslog messages.

    Out of the box, messages from Red Hat Enterprise Linux 7 and 6, SUSE Linux Enterprise Server 12,
    openSUSE 42, and Ubuntu 16 are supported. For other distributions, deployment of the rsyslog
    package may be required. You can edit the add-on configuration to extend the captured message
    list.

2. The add-on processes these events into Auditor-compatible format (Activity Records). Each
   Activity Record contains the user account, action, time, and other details.
3. Using the Integration API, the add-on sends the activity records Auditor Server, which writes
   them to the Long-Term Archive and the Audit Database.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| On...                                            | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor Server side                          | - The Audit Database settings are configured in Auditor Server. See the [Prerequisites](/docs/auditor/10.6/api/prerequisites.md) and [Audit Database](/docs/auditor/10.6/admin/settings/auditdatabase.md) topics for additional information. - The TCP **9699** port (default Integration API port) is open for inbound connections. - The user writing data to the Audit Database is granted the **Contributor** role in Auditor. See the [Role-Based Access and Delegation](/docs/auditor/10.6/admin/monitoringplans/delegation.md) topic for additional information. Alternatively, you can grant the **Global administrator** role or add the user to the **Netwrix Auditor Administrators** group. In this case, this user will have the most extended permissions in the product.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| The computer where the service will be installed | - The UDP 514 port is open for inbound connections. - .Net Framework 4.7.2 and above is installed. Review the following Microsoft technical article for additional information on how to install .Net Framework 4.7.2: [Microsoft .NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| The target syslog-based platform                 | The **Syslog daemon** is configured to redirect events. The procedure below explains how to configure redirection: **NOTE:** Red Hat Enterprise Linux 7 and 6, SUSE Linux Enterprise Server 12, openSUSE 42, and Ubuntu 16 are supported out of the box. For other distributions, deployment of rsyslog package may be required. - On Red Hat Enterprise Linux 7: 1. Open the **/etc/rsyslog.conf** file. 2. Add the following line: `auth.*;authpriv.* @name:514;RSYSLOG_SyslogProtocol23Format` where `name `is a FQDN, NetBIOS name or IP address of the computer where Netwrix Auditor Server is installed. For example: `auth.*;authpriv.* @172.28.18.25:514;RSYSLOG_ SyslogProtocol23Format` 3. Launch the **RHEL console** and execute the following command: `service rsyslog restart`. - On Ubuntu 16: 1. Navigate to the **/etc/rsyslog.d/50-default.conf** file. 2. Add the following line: `auth.*;authpriv.* @name:514;RSYSLOG_SyslogProtocol23Format` where `name `is a FQDN, NetBIOS name or IP address of the computer where Netwrix Auditor Server is installed. For example: `auth.*;authpriv.* @172.28.18.25:514;RSYSLOG_ SyslogProtocol23Format` 3. Launch the **UBUNTU console** and execute the following command: `service rsyslog restart`. |

See the the [Integration API](/docs/auditor/10.6/api/overview.md) topic for
additional information on the structure of the Activity Record and the capabilities of the
Integration API
