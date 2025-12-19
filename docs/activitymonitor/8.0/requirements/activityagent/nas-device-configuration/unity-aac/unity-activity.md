---
title: "Dell Unity Activity Auditing Configuration"
description: "Dell Unity Activity Auditing Configuration"
sidebar_position: 50
---

# Dell Unity Activity Auditing Configuration

A Dell Unity device can be configured to audit Server Message Block (SMB) protocol access events.
All audit data can be forwarded to the Dell Common Event Enabler (CEE). The Netwrix Activity Monitor
listens for all events coming through the Dell CEE and translates all relevant information into
entries in the TSV files or syslog messages.

If the service is turned off, a notification will be sent to the Dell CEE framework to turn off the
associated Activity Monitor filter, but the policy will not be removed.

The Dell CEE Framework uses a "push" mechanism so a notification is sent only to the activity agent
when a transaction occurs. Daily activity log files are created only if activity is performed. No
activity log file is created if there is no activity for the day.

**Configuration Checklist**

Complete the following checklist prior to configuring activity monitoring of Dell Unity devices.
Instructions for each item of the checklist are detailed within the following topics.

**Checklist Item 1: Plan Deployment**

- Prior to beginning the deployment, gather the following:

    - Data Mover or Virtual Data Mover hosting the share(s) to be monitored
    - Account with access to the CLI
    - Download the Dell CEE from:

        - [http://support.emc.com](http://support.emc.com/)

**Checklist Item 2: [Install Dell CEE](/docs/activitymonitor/8.0/requirements/activityagent/nas-device-configuration/unity-aac/installcee.md)**

- Dell CEE should be installed on the Windows proxy server(s) where the Activity Monitor activity
  agent will be deployed

    :::info
    The latest version of Dell CEE is the recommended version to use with the
    asynchronous bulk delivery (VCAPS) feature.
    :::


- Important:

    - Open MS-RPC ports between the Dell device and the Windows proxy server(s) where the Dell CEE
      is installed
    - Dell CEE 8.4.2 through Dell CEE 8.6.1 are not supported for use with the VCAPS feature
    - Dell CEE requires .NET Framework 3.5 to be installed on the Windows proxy server

**Checklist Item 3: Dell Unity Device Configuration**

- Configure initial setup for a Unity device

    - [Unity Initial Setup with Unisphere](/docs/activitymonitor/8.0/requirements/activityagent/nas-device-configuration/unity-aac/setupunisphere.md)

**Checklist Item 4: Activity Monitor Configuration**

- Deploy the Activity Monitor activity agent to a Windows proxy server where Dell CEE was installed

    - After activity agent deployment, configure the Dell CEE Options tab of the agent's Properties
      window within the Activity Monitor Console

        - Automatically sets the Dell registry key settings

Checklist Item 5: Configure Dell CEE to Forward Events to the Activity Agent

:::note
When Dell CEE is installed on Windows proxy server(s) where the Activity Monitor activity
agent will be deployed, the following steps are not needed.
:::


- Ensure the Dell CEE registry key has enabled set to 1 and has an EndPoint set to StealthAUDIT.
- Ensure the Dell CAVA service and the Dell CEE Monitor service are running.
- See the [Validate Setup](/docs/activitymonitor/8.0/requirements/activityagent/nas-device-configuration/unity-aac/validate.md) topic for instructions.
