---
title: "Dell PowerStore Activity Auditing Configuration"
description: "Dell PowerStore Activity Auditing Configuration"
sidebar_position: 40
---

# Dell PowerStore Activity Auditing Configuration

A Dell PowerStore device can be configured to audit Server Message Block (SMB) protocol access
events. All audit data can be forwarded to the Dell Common Event Enabler (CEE). The Netwrix Activity
Monitor listens for all events coming through the Dell CEE and translates all relevant information
into entries in the TSV files or syslog messages.

If the service is turned off, a notification will be sent to the Dell CEE framework to turn off the
associated Activity Monitor filter, but the policy will not be removed.

The Dell CEE Framework uses a “push” mechanism so a notification is sent only to the activity agent
when a transaction occurs. Daily activity log files are created only if activity is performed. No
activity log file is created if there is no activity for the day.

**Configuration Checklist**

Complete the following checklist prior to configuring activity monitoring of Dell PowerStore
devices. Instructions for each item of the checklist are detailed within the following topics.

**Checklist Item 1: Plan Deployment**

- Prior to beginning the deployment

    - See the
      [Dell PowerStore: File Capabilities](https://www.delltechnologies.com/asset/en-us/products/storage/industry-market/h18155-dell-powerstore-file-capabilities.pdf)
      white paper for additional information.
    - Download the Dell CEE from:

        - [https://support.emc.com](https://support.emc.com/)

**Checklist Item 2: [Install Dell CEE](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/powerstore-aac/installcee.md)**

- Dell CEE should be installed on the Windows proxy server(s) where the Activity Monitor activity
  agent will be deployed

    :::info
    The latest version of Dell CEE is the recommended version to use with the
    asynchronous bulk delivery (VCAPS) feature.
    :::


- Important:

    Open MS-RPC ports between the Dell device and the Windows proxy server(s) where the Dell CEE is
    installed

**Checklist Item 3: Dell PowerStore Device Configuration**

- Enable auditing on the PowerStore device

    - See the [Enable Auditing for Dell PowerStore](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/powerstore-aac/auditing.md) topic for additional information.

**Checklist Item 4: Activity Monitor Configuration**

- Deploy the Activity Monitor activity agent to a Windows proxy server where Dell CEE was installed

    - After activity agent deployment, configure the Dell CEE Options tab of the agent’s Properties
      window within the Activity Monitor Console

        - Automatically sets the Dell registry key settings

Checklist Item 5: Configure Dell CEE to Forward Events to the Activity Agent

:::note
When Dell CEE is installed on Windows proxy server(s) where the Activity Monitor activity
agent will be deployed, the following steps are not needed.
:::


- Ensure the Dell CEE registry key has enabled set to 1 and has an EndPoint set to StealthAUDIT.
- Ensure the Dell CAVA service and the Dell CEE Monitor service are running.
