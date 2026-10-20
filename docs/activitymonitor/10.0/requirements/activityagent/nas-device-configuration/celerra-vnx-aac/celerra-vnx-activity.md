---
title: "Dell Celerra & Dell VNX Activity Auditing Configuration"
description: "Dell Celerra & Dell VNX Activity Auditing Configuration"
sidebar_position: 20
---

# Dell Celerra & Dell VNX Activity Auditing Configuration

Configure a Dell Celerra or VNX device to audit Server Message Block (SMB) protocol access
events. Forward all audit data to the Dell Common Event Enabler (CEE). The Activity Monitor
listens for all events coming through the Dell CEE and translates all relevant information into
entries in the Log files or syslog messages.

Complete the following checklist before configuring the Activity Monitor to monitor the host.
Instructions for each item of the checklist are detailed within the following sections.

**Checklist Item 1: Plan Deployment**

- Before beginning the deployment, gather the following:

    - DNS name of Celerra or VNX CIFS shares to be monitored
    - Data Mover or Virtual Data Mover hosting the shares to be monitored
    - Account with access to the CLI
    - Download the Dell CEE from:

        - [https://www.dell.com/support](https://www.dell.com/support)

**Checklist Item 2: Install Dell CEE**

- Dell CEE can be installed on the same Windows server as the Activity Agent, or on a different
  server. If it is installed on the same host, the activity agent can configure it automatically.

    :::info
    The latest version of Dell CEE is the recommended version to use with the
    asynchronous bulk delivery (VCAPS) feature.
    :::


- Important:

    - Open MS-RPC ports between the Dell device and the Windows proxy servers where the Dell CEE
      is installed
    - Dell CEE 8.4.2 through Dell CEE 8.6.1 aren't supported for use with the VCAPS feature
    - Install .NET Framework 3.5 on the Windows proxy server before installing Dell CEE

- See the [Install & Configure Dell CEE](/docs/activitymonitor/10.0/requirements/activityagent/nas-device-configuration/celerra-vnx-aac/installcee.md) topic for instructions.

**Checklist Item 3: Dell Device Configuration**

- Configure the `cepp.conf` file on the Celerra VNX Cluster
- See the
  [Connect Data Movers to the Dell CEE Server](/docs/activitymonitor/10.0/requirements/activityagent/nas-device-configuration/celerra-vnx-aac/installcee.md#connect-data-movers-to-the-dell-cee-server)
  topic for instructions.

**Checklist Item 4: Activity Monitor Configuration**

- Deploy the Activity Monitor Activity Agent, preferably on the same server where Dell CEE is
  installed

    - After activity agent deployment, configure the Dell CEE Options tab of the agent's Properties
      window within the Activity Monitor Console

Checklist Item 5: Configure Dell CEE to Forward Events to the Activity Agent
