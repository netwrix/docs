---
description: >-
  Explains how to resolve RPC and Service Control Manager errors when auditing
  servers on different subnets by opening required firewall ports or configuring
  RPC dynamic port ranges.
keywords:
  - Netwrix Auditor
  - RPC
  - dynamic RPC ports
  - firewall
  - TCP 135
  - TCP 445
  - 49152-65535
  - 50000-50200
products:
  - auditor
sidebar_label: How to audit servers located in another subnet beh
tags: []
title: "How to audit servers located in another subnet behind firewall"
knowledge_article_id: kA00g000000H9erCAC
---

# How to audit servers located in another subnet behind firewall

Netwrix Auditor for Windows Servers (NetWrix Server Configuration Change Reporter in 6.5 or older) does not work with systems on different subnets. The following errors appear:

```
<server> : Error during agent operation on server <server>. Cannot open Service Control Manager on computer '<server>'. This operation might require other privileges. Additional information: The RPC server is unavailable .
<server> : Error during agent operation on server <server>. The RPC server is unavailable. (Exception from HRESULT: 0x800706BA). Additional information: none.
<server> : Error during agent operation on server <server>. Check if .Net Framework is installed error. Additional information:  none.
```

---

One of the required ports is blocked by Firewall.

---

## Resolution

To resolve the issue, make sure the following ports are opened:

1. `TCP 135` and `TCP 445` are opened both ways.
2. Dynamic RPC ports range are opened from the server where Netwrix Auditor is installed to the monitored server. The product uses these ports to connect to the monitored servers and launch the agent services. You can open the ports in two ways:

- Open the following TCP ports range on your Firewall:

> for Windows Vista/7/2008: `49152-65535`  
> for Windows XP/2003: `1024-5000`

- Alternatively, you can configure a custom Dynamic RPC ports range on the managed server, for example you can configure ports `50000-50200` and open these ports in your Firewall. For detailed instructions, please refer to the following Microsoft KB article: http://support.microsoft.com/kb/154596
