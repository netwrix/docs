---
title: "NAS Device Support"
description: "NAS Device Support"
sidebar_position: 10
---

# NAS Device Support

For Network-Attached Storage (NAS) device support, the Threat Prevention Agent is not deployed on
the NAS device. Instead, Threat Prevention employs Activity Monitor, which deploys its own activity
agents to Windows servers acting as proxy servers for NAS activity monitoring. The Threat Prevention
Agent must be installed on the Windows server where the Activity Monitor’s Activity Agent resides.

The Activity Monitor Activity Agent configuration dictates what file system activity is being
monitored. The Activity Agent writes activity log files on the proxy server. The Agent monitors the
activity log files as the data is written and sends events to the Threat Prevention event database
according to the enabled policy configuration.

Supported Platforms for Netwrix Activity Monitor Agent & Agent Deployment

- Windows Server 2025
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for additional information.

**Dell Celerra® & VNX**

- Celerra 6.0+
- VNX 7.1
- VNX 8.1

**Dell Isilon/PowerScale**

- 7.0+

**Dell Unity**

Hitachi

- 11.2+

**Nasuni Nasuni Edge Appliances**

- 8.0+

**NetApp Data ONTAP**

- 7-Mode 7.3+
- Cluster-Mode 8.2+

**Panzura**
