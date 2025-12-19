---
title: "Network Devices"
description: "Network Devices"
sidebar_position: 130
---

# Network Devices

**NOTE:** Prior to configuring your monitoring plan, please read and complete the instructions in
the following topics:

- [Protocols and Ports Required](/docs/auditor/10.7/requirements/ports.md) – To ensure successful data collection
  and activity monitoring configure necessary protocols and ports for inbound and outbound
  connections
- [Data Collecting Account](/docs/auditor/10.7/admin/monitoringplans/dataaccounts.md) – Configure data collecting accounts as required to
  audit your IT systems

- [Network Devices](/docs/auditor/10.7/configuration/networkdevices/overview.md) – Configure data source as
  required to be monitored

Complete the following fields:

| Option                                             | Description                                                                                          |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Monitor this data source and collect activity data | Enable monitoring of the selected data source and configure Auditor to collect and store audit data. |

## Cisco Meraki Dashboard

Complete the following fields:

| Option                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Specify credentials to connect to Cisco Meraki Dashboard | Provide a name of your organization or an account used to connect to Cisco Meraki dashboard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Select authentication type                               | There are two authentication options available to collect data from Cisco Meraki devices: - Access through API. You can access Cisco Meraki dashboard using API secret key if one-time password (OTP) MFA is required in your organization. In this case, you need to provide your API secret key. See Cisco Meraki documentation for additional information about Cisco Meraki API: [Meraki Dashboard API](https://developer.cisco.com/meraki/api-v1/#meraki-dashboard-api). - Basic authentication: access on behalf of a user. Provide the name and password of the service account configured to access Cisco Meraki Dashboard. See the Configure Cisco Meraki Dashboard Account topic for additional information on how to configure the account used to collect data. |

This monitoring plan also requires a management IP address. A management IP is an IP address that is
used for management purposes. For example, the IP that is configured on a switch so that you can
remotely access it through its IP address would be considered a management IP address.

## Syslog Device

Complete the following fields:

| Option                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| General                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Specify syslog host or network source                                                                                                                                                                                        | Select one of the following: - Host or network source name — Provide a server name by entering its FQDN, NETBIOS or IPv4 address. You can click Browse to select a computer from the list of computers in your network. - IP Range — Specify an IP range for the audited computers. To exclude computers from within the specified range, click **Exclude**. Enter the IP subrange you want to exclude, and click **Add**. |
| Specify port and protocol for incoming connections                                                                                                                                                                           | Use **Port** and **Protocol** to provide the port required for incoming connections (default is **UDP port 514**).                                                                                                                                                                                                                                                                                                         |
| Devices                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Configure monitoring rules for required network devices: - Cisco (ASA, IOS, FTD, Meraki) - Fortinet (FortiGate FortiOS) - Juniper (Junos OS) - Palo Alto (PAN-OS) - Sonic Wall (NS, SMA, WAF) - HPE (ArubaOS) - Pulse Secure |                                                                                                                                                                                                                                                                                                                                                                                                                            |
