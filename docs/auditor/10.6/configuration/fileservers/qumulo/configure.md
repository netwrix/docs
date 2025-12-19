---
title: "Configure Core Audit for Qumulo File Servers"
description: "Configure Core Audit for Qumulo File Servers"
sidebar_position: 20
---

# Configure Core Audit for Qumulo File Servers

To configure your Qumulo file servers for auditing, you need to connect your device to Active
Directory or LDAP (local names are supported) and then configure Remote Syslog Address and port
number via Web UI.

To configure Core Audit for Qumulo file servers

1. Log in to the Web UI.
2. Navigate to Cluster and click Audit.
3. Under the Configuration, provide the following:

    - Remote Syslog Address – Provide the IP address or the computer listened by Syslog. It should
      be a third-party Syslog forward service or the machine where Netwrix Auditor is installed.
    - Port Number – use the default value (_514_).

    ![qumulo_web_ui](/images/auditor/10.6/configuration/fileservers/qumulo/qumulo_web_ui.webp)

When you see the green line “_Connected_”, the environment is ready.

For detailed information about Qumulo Web UI. refer to the following Qumulo how-to article:
[Qumulo Core Audit Logging](https://care.qumulo.com/hc/en-us/articles/360021454193-Qumulo-Core-Audit-Logging).
