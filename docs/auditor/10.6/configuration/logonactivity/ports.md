---
title: "Logon Activity Ports"
description: "Logon Activity Ports"
sidebar_position: 10
---

# Logon Activity Ports

Review a full list of protocols and ports required for monitoring Logon Activity.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to local 389 TCP port.

| Port                       | Protocol | Source                 | Target             | Purpose                                                                 |
| -------------------------- | -------- | ---------------------- | ------------------ | ----------------------------------------------------------------------- |
| 389                        | TCP      | Netwrix Auditor Server | Domain controllers | LDAP DC query Account resolve                                           |
| 53                         | TCP      | Netwrix Auditor Server | DNS Server         | DNS Client                                                              |
| 135 + Dynamic: 1024 -65535 | TCP      | Netwrix Auditor Server | Domain controllers | Windows Management Instrumentation Firewall configuration               |
| 135                        | TCP      | Netwrix Auditor Server | Domain controllers | Service Control Manager Remote Protocol (RPC) Core Service installation |
| 137 through 139            | UDP      | Netwrix Auditor Server | Domain controllers | Service Control Manager Remote Protocol (RPC) Core Service installation |
| 445                        | TCP      | Netwrix Auditor Server | Domain controllers | SMB 2.0/3.0                                                             |

## Configure Windows Firewall Inbound Connection Rules

For successful data collection, Netwrix Auditor may have to create inbound Firewall rules. If you do
not enable the Network traffic compression option, the product will try creating these rules
automatically and will notify you it fails to do so. In this case, you have to configure Windows
Firewall inbound rules manually.

**Step 1 –** On every domain controller, navigate to **Start → Control Panel** and select **Windows
Firewall**.

**Step 2 –** In the **Help Protect your computer with Windows Firewall** page, click **Advanced
settings** on the left.

**Step 3 –** In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the
left.

![manualconfig_nla_inbound_connections2016](/images/auditor/10.6/configuration/fileservers/windows/manualconfig_nla_inbound_connections2016.webp)

**Step 4 –** Enable the following inbound connection rules:

- Remote Event Log Management (NP-In)
- Remote Event Log Management (RPC)
- Remote Event Log Management (RPC-EPMAP)
