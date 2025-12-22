---
title: "Configure Windows Firewall Inbound Connection Rules"
description: "Configure Windows Firewall Inbound Connection Rules"
sidebar_position: 70
---

# Configure Windows Firewall Inbound Connection Rules

You need to configure the inbound connection rules in Windows Firewall on each target computer,
where 'target computer' refers to a computer audited by 1Secure. These Windows Firewall settings can
be managed through Group Policy settings. To do this, edit the GPO affecting your firewall settings.
Navigate to:

`Computer Configuration > Administrative Templates > Network > Network Connections > Windows Firewall`

Select Domain Profile or Standard Profile (depending on the profile that is active on the host).
Then enable the Allow inbound remote administration exception.

**Step 1 –** On each computer audited by 1Secure, navigate to Start > Control Panel and select
Windows Firewall.

**Step 2 –** In the Help Protect your computer with Windows Firewall page, click **Advanced
settings** on the left.

**Step 3 –** In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the
left.

![Windows Firewall Advanced Security window](/images/1secure/configuration/logonactivity/manualconfig_nla_inbound_connections2016.webp)

**Step 4 –** Enable the following inbound connection rules:

- Remote Event Log Management (NP-In)
- Remote Event Log Management (RPC)
- Remote Event Log Management (RPC-EPMAP)
- Windows Management Instrumentation (ASync-In)
- Windows Management Instrumentation (DCOM-In)
- Windows Management Instrumentation (WMI-In)
- Network Discovery (NB-Name-In)
- File and Printer Sharing (NB-Name-In)
- File and Printer Sharing (Echo Request - ICMPv4-In)
- File and Printer Sharing (Echo Request - ICMPv6-In)
