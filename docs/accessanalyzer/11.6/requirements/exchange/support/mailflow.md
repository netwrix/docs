---
title: "Exchange Mail-Flow Permissions"
description: "Exchange Mail-Flow Permissions"
sidebar_position: 10
---

# Exchange Mail-Flow Permissions

The ExchangeMetrics Data Collector collects Mail-Flow metrics from the Exchange Message Tracking
Logs on the Exchange servers. Some examples of this include server volume and message size
statistics. This data collector utilizes an applet to process and collect summarized metrics from
the Message Tracking Log.

1. HUB Metrics Job Group Requirement

In addition to the permissions required by the ExchangeMetrics Data Collector, the Connection
Profile assigned to the 1. HUB Metrics Job Group requires the following permission and User Rights
(based on default settings):

- Member of the local Administrator group on the targeted Exchange server(s) where the Hub Transport
  service is running
- Log on as a Service Group Policy:

    - Go to `GPedit.msc`
    - Go to Computer Configuration > Windows Settings > Security Settings > Local Policies > User
      Rights

**Applet Permissions**

This is required because the ExchangeMetrics Data Collector is an applet-based data collector. It
requires

- Member of the local Administrator group on the targeted Exchange server(s)

This grants access to the Message Tracking Logs and the ability to create the
`SA_ExchangeMetricsData` folder, which will contain the applet files and the processed message
tracking log files stored inside a SQLite database for each day. For example:

\\ExchangeServerName\c$\Program Files\Microsoft\Exchange
Server\V14\TransportRoles\Logs\MessageTracking

If there have been additional security or permission modifications on the server(s), the following
rights and policies may need to be enabled on the targeted host:

- Ensure the Administrator group has been granted Full Control over Message Tracking Log Directories
- WMI Control (`wmimgmt.msc`) > Right Click Properties > Security

    - Security Tab > Root > CIMV2 > Click Security

        - Ensure the Administrators group has been assigned:

            - Execute Methods
            - Remote Enable
            - Enable Account

- Local Security Policy (`secpol.msc`):

    - Local Policies > User Rights Assignment:

        - Ensure the ‘Replace a Process Level Token’ right grants access to Local Service, Network
          Service, and Administrators
        - Ensure the ‘Adjust Memory Quotas for a Process’ right grants access to Local Service,
          Network Service, and Administrators
        - Ensure the ‘Impersonate a client after authentication’ right grants access to Local
          Service and Administrators
        - Ensure the Administrators group has been granted the following rights:

            - Access this computer from a network
            - Allow Log on Locally
            - Log on as a batch job
