---
title: "Dell Isilon/PowerScale Activity Auditing Configuration"
description: "Dell Isilon/PowerScale Activity Auditing Configuration"
sidebar_position: 30
---

# Dell Isilon/PowerScale Activity Auditing Configuration

Dell Isilon/PowerScale can be configured to audit Server Message Block (SMB) and NFS protocol access
events on the Dell Isilon/PowerScale cluster. All audit data can be forwarded to the Dell Common
Event Enabler (CEE). The Activity Monitor listens for all events coming through the Dell CEE and
translates all relevant information into entries in the log files or syslog messages.

Protocol auditing must be enabled and then configured on a per-access zone basis. For example, all
SMB protocol events on a particular access zone can be audited, while only attempts to delete files
on a different access zone can be audited.

The audit events are logged and stored on the individual OneFS nodes where the SMB/NFS client
initiated the activity. The stored events are then forwarded by the node to the Dell CEE instance or
concurrently to several instances. At this point, Dell CEE forwards the audit event to a defined
endpoint, such as Activity Monitor agent.

Complete the following checklist prior to configuring Activity Monitor to monitor the host.
Instructions for each item of the checklist are detailed within the following sections.

**Checklist Item 1: Plan Deployment**

- Prior to beginning the deployment, gather the following:

    - DNS name of Isilon/PowerScale CIFS share(s) to be monitored
    - Access Zone(s) containing the CIFS shares to be monitored
    - Account with access to the OneFS UI or CLI
    - Download the Dell CEE from:

        - [https://www.dell.com/support/home/en-us/](https://www.dell.com/support/home/en-us/)

:::info
You can achieve higher throughput and fault tolerance by monitoring the
Isilon/PowerScale cluster with more than one pair of Dell CEE and Activity Monitor Agent. The
activity will be evenly distributed between the pairs.
:::


**Checklist Item 2: [Install Dell CEE](/docs/activitymonitor/8.0/requirements/activityagent/nas-device-configuration/isilon-powerscale-aac/installcee.md)**

- Dell CEE should be installed on a Windows or a Linux server.

    :::info
    Dell CEE can be installed on the same server as the Activity Agent, or on a
    different Windows or Linux server. If CEE is installed on the same server, the Activity Agent
    can configure it automatically.
    :::


- Important:

    - Dell CEE 8.8 is the minimum supported version. It is recommended to use the latest available
      version.
    - Dell CEE requires .NET Framework 3.5 to be installed on the Windows server

Checklist Item 3: Configure Auditing on the Dell Isilon/PowerScale Cluster

- Select method:

    - **_RECOMMENDED:_** Allow the Activity Monitor to configure auditing automatically.

        - Automation completed while the Activity Monitor is configured to monitor the
          Isilon/PowerScale device
        - Automatically sets CEE Server with the IP Address of the server where CEE is installed
        - Automatically sets Storage Cluster Name to exactly match the name known to the Activity
          Monitor
        - Choose between monitoring all Access Zones or scoping to specific Access Zones

    - [Manually Configure Auditing in OneFS](/docs/activitymonitor/8.0/requirements/activityagent/nas-device-configuration/isilon-powerscale-aac/manualconfiguration.md)

        - After configuration, add the Isilon/PowerScale device to be monitored by the Activity
          Monitor

- Important:

    - Value of the **Storage Cluster Name** field must exactly match the name entered for the
      monitored host in the Activity Monitor Console. If the Storage Cluster Name cannot be modified
      (for example, another 3rd party depends on it), you need to set the Host Aliases parameter in
      the Activity Monitor Console. Otherwise, if for some reason the Storage Cluster Name must be
      left empty, one can list OneFS cluster node names in the Host Aliases.

        - If the Storage Cluster Name is not empty, set the Host Aliases parameter to its value
        - If the Storage Cluster Name is empty, set the Host Aliases to a semicolon-separated list
          of OneFS node names

    - Include all Access Zones to be monitored in the auditing configuration
    - As soon as the first CEE is installed, Isilon/PowerScale will start to send all activity,
      including all previous audit events, to the agent. The start time can be modified to exclude
      previously recorded audit events to prevent the agent from becoming overloaded with data. It
      can be done using OneFS CLI only with isi audit modify command to edit the start time.

        - Start time command:

            ```
            isi audit settings global modify --cee-log-time [Protocol@2021-04-23 14:00:00]
            ```

        - View progress:

            ```
            isi_for_array isi audit progress view
            ```

        - See the Audit log time adjustment section of the Dell
          [File System Auditing with Dell PowerScale and Dell Common Event Enabler](https://www.dellemc.com/resources/en-us/asset/white-papers/products/storage/h12428-wp-best-practice-guide-isilon-file-system-auditing.pdf)
          documentation for additional information.

Checklist Item 4: Configure Dell CEE to Forward Events to the Activity Agent. See the
[Validate Setup](/docs/activitymonitor/8.0/requirements/activityagent/nas-device-configuration/isilon-powerscale-aac/validate.md) topic for additional information.
