---
description: >-
  Shows how to use Microsoft PortQry and Windows tools to verify TCP, UDP, and
  dynamic ports required by Netwrix Auditor and troubleshoot port-related
  connection issues.
keywords:
  - ports
  - TCP
  - UDP
  - PortQry
  - wbemtest
  - dynamic ports
  - Netwrix Auditor
  - firewall
  - troubleshooting
products:
  - auditor
sidebar_label: Check TCP and UDP Ports Required
tags: []
title: "Check TCP and UDP Ports Required"
knowledge_article_id: kA04u000000TsquCAC
---

# Check TCP and UDP Ports Required

## Overview

> **NOTE:** Refer to the following article for the list of ports and protocols required: Protocols and Ports Required.

Depending on the data source, Netwrix Auditor requires particular TCP and UDP ports to be open. Follow the steps listed to troubleshoot port-related connection issues.

## Instructions

### Install Microsoft PortQry

> **NOTE:** The PortQry version used in this article is the non-GUI version. You can download the GUI version at [PortQryUI ⸱ Microsoft](https://www.microsoft.com/en-us/download/details.aspx?id=24009). To run the PortQry GUI, run the extracted **PortQueryUI** executable.

1. Download and extract PortQry Command Line Port Scanner. Download PortQry at [PortQry Command Line Port Scanner Version 2.0 ⸱ Microsoft](https://www.microsoft.com/en-us/download/details.aspx?id=17148). Learn more about PortQry at [Using the PortQry Command Line Tool ⸱ Microsoft](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/portqry-command-line-port-scanner-v2).
2. Once extracted, run an elevated Command Prompt and navigate to the folder containing the extracted executable:

```text
cd C:\PortQryV2
```

3. Replace the path with the actual path containing the extracted executable.

### Check Open Ports

The steps provided below work for both checking open ports to a target server and the Netwrix server.

- For TCP ports:

```text
PortQry.exe -n TEST-SQL -p tcp -e 135
```

> **NOTE:** When checking the 135 TCP port, the first output line must state `Listening`.

```text
PortQry.exe -n TEST-SQL -p tcp -e 139
PortQry.exe -n TEST-SQL -p tcp -e 445
```

- For UDP ports:

```text
PortQry.exe -n TEST-SQL -p udp -e 137
PortQry.exe -n TEST-SQL -p udp -e 138
```

> **NOTE:** When checking UDP ports, the `Listening or Filtered` output line is expected.

Replace the `TEST-SQL` placeholder with the target server IP or FQDN.

### Check Dynamic Ports

1. In Command Prompt, run the following command:

```text
wbemtest
```

In the Windows Management Instrumentation Tester window, click **Connect** in the **Namespace** section.

2. Specify the namespace for the target server following the format provided:

```text
\<target_host>\root\cimv2
```

Click **Connect** to test the connection.

3. If you receive the `The RPC server is unavailable` error, the dynamic ports are closed. Otherwise, they are open.

Alternatively, you can run the following line in Command Prompt:

```text
netsh int ipv4 show dynamicport tcp
```

Learn more in [Default Dynamic Port Range for TCP/IP Changed in Windows Vista and in Server 2008 ⸱ Microsoft](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/default-dynamic-port-range-tcpip-chang).

## Related Links

- Protocols and Ports Required
- [PortQryUI ⸱ Microsoft](https://www.microsoft.com/en-us/download/details.aspx?id=24009)
- [PortQry Command Line Port Scanner Version 2.0 ⸱ Microsoft](https://www.microsoft.com/en-us/download/details.aspx?id=17148)
- [Using the PortQry Command Line Tool ⸱ Microsoft](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/portqry-command-line-port-scanner-v2)
- [Default Dynamic Port Range for TCP/IP Changed in Windows Vista and in Server 2008 ⸱ Microsoft](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/default-dynamic-port-range-tcpip-chang)
