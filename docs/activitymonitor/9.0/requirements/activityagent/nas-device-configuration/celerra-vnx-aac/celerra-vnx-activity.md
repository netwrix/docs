---
title: "Dell Celerra & Dell VNX Activity Auditing Configuration"
description: "Dell Celerra & Dell VNX Activity Auditing Configuration"
sidebar_position: 20
---

# Dell Celerra & Dell VNX Activity Auditing Configuration

An Dell Celerra or VNX device can be configured to audit Server Message Block (SMB) protocol access
events. All audit data can be forwarded to the Dell Common Event Enabler (CEE). The Activity Monitor
listens for all events coming through the Dell CEE and translates all relevant information into
entries in the Log files or syslog messages.

Complete the following checklist prior to configuring the Activity Monitor to monitor the host.
Instructions for each item of the checklist are detailed within the following sections.

**Checklist Item 1: Plan Deployment**

- Prior to beginning the deployment, gather the following:

    - DNS name of Celerra or VNX CIFS share(s) to be monitored
    - Data Mover or Virtual Data Mover hosting the share(s) to be monitored
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

    - Open MS-RPC ports between the Dell device and the Windows proxy server(s) where the Dell CEE
      is installed
    - Dell CEE 8.4.2 through Dell CEE 8.6.1 are not supported for use with the VCAPS feature
    - Dell CEE requires .NET Framework 3.5 to be installed on the Windows proxy server

- See the [Install & Configure Dell CEE](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/celerra-vnx-aac/installcee.md) topic for instructions.

**Checklist Item 3: Dell Device Configuration**

- Configure the `cepp.conf` file on the Celerra VNX Cluster
- See the
  [Connect Data Movers to the Dell CEE Server](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/celerra-vnx-aac/installcee.md#connect-data-movers-to-the-dell-cee-server)
  topic for instructions.

**Checklist Item 4: Activity Monitor Configuration**

- Deploy the Activity Monitor Activity Agent, preferably on the same server where Dell CEE is
  installed

    - After activity agent deployment, configure the Dell CEE Options tab of the agent's Properties
      window within the Activity Monitor Console

Checklist Item 5: Configure Dell CEE to Forward Events to the Activity Agent
