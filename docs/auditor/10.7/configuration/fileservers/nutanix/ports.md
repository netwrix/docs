---
title: "Nutanix Ports"
description: "Nutanix Ports"
sidebar_position: 10
---

# Nutanix Ports

Follow the steps to open Nutanix port for inbound connections.

**Step 1 –** On a target computer navigate to **Start** > **Control Panel** and select **Windows
Firewall.**

**Step 2 –** In the Help Protect your computer with Windows Firewall page, click **Advanced
settings** on the left.

**Step 3 –** In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the
left.

**Step 4 –** Click New Rule. In the New Inbound Rule wizard, complete the steps as described below.

| Option              | Setting                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------- |
| Rule Type           | Port                                                                                                     |
| Protocols and Ports | - Does this rule applies to TCP or UDP—Select TCP - Specific local ports—Type required port, e.g., 9898. |
| Action              | Select Allow the connection                                                                              |
| Profile             | Applies to Domain                                                                                        |
| Rule name           | Rule name, for example Nutanix Files inbound rule.                                                       |

When you add the first item (_Nutanix SMB shares_) to the Nutanix monitoring plan, you will be
suggested to use port **9898**. For the next _Nutanix SMB shares_ added as an item, you should
specify a different TCP port and configure it for inbound connections, as described above.

### Protocols and Ports Required for Monitoring Nutanix Files

Review a full list of protocols and ports required for Netwrix Auditor for Nutanix Files.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to the remote ports on the computer where Netwrix Auditor Server
  resides.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 9898 TCP port.

| Port | Protocol | Source                          | Target                 | Purpose                               |
| ---- | -------- | ------------------------------- | ---------------------- | ------------------------------------- |
| 9898 | TCP      | Monitored Nutanix Files devices | Netwrix Auditor Server | Getting events from monitored devices |

**NOTE:** You need to open the 9898 TCP port for inbound connections manually.

Later, you can specify any custom TCP port when editing your Nutanix Files monitoring plan. See the
[File Servers](/docs/auditor/10.7/admin/monitoringplans/fileservers/overview.md) (Nutanix section) for more
information.
