---
title: "Exchange Remote Connections Permissions"
description: "Exchange Remote Connections Permissions"
sidebar_position: 20
---

# Exchange Remote Connections Permissions

The SMARTLog Data Collector processes the IIS Logs on the server running the Client Access Service
(CAS) to return information about the remote connections being made to Exchange. This data collector
uses an applet to process and collect the IIS Logs.

2. CAS Metrics Job Group Requirement

In addition to the permissions required by the SMARTLog Data Collector, the Connection Profile
assigned to the 2. CAS Metrics Job Group requires the following permissions and User Rights (based
on default settings):

- Member of the local Administrator group on the targeted Exchange server(s) where the Client Access
  Service is running
- Log on as a Service Group Policy:

    - Go to `GPedit.msc`
    - Go to Computer Configuration > Windows Settings > Security Settings > Local Policies > User
      Rights

- Permissions required by the ExchangePS Data Collector. See the
  [Exchange PowerShell Permissions](/docs/accessanalyzer/12.0/requirements/exchange/support/powershell.md) topic for additional information.

**Applet Permissions**

This is required because the SMARTLog Data Collector is an applet-based data collector. It requires
the following permission on the target host which contain the IIS Logs:

- Member of the local Administrators group

This grants the ability to process logs folder which will contain the applet files and logs. For
example:

**\\ExchangeServerName\c$\Program Files (x86)\STEALTHbits\StealthAUDIT\LogProcessor**

If there have been additional security or permission modifications on the server(s), the following
rights and policies may need to be enabled on the targeted host:

- Ensure the Administrator group has been granted Full Control over IIS Log Directories
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
