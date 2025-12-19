---
title: "Permissions for Network Devices Auditing"
description: "Permissions for Network Devices Auditing"
sidebar_position: 120
---

# Permissions for Network Devices Auditing

Before you start creating a monitoring plan to audit your network devices, plan for the account that
will be used for data collection – it should meet the requirements listed below. Then you will
provide this account in the monitoring plan wizard.

| For...                                                                                                            | Requirement                                                                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Cisco ASA - Cisco IOS - Cisco FTD - Fortinet - HPE Aruba - Juniper - Palo Alto - Pulse Secure - SonicWall - HPE | You can use any account (not necessarily the credentials used to connect to the device itself), as long as these credentials do not affect Netwrix Auditor or monitored IT infrastructure. Provide this account in the monitoring plan wizard. |
| - Cisco Meraki                                                                                                    | See the [Configure Cisco Meraki Dashboard Account](/docs/auditor/10.6/configuration/networkdevices/ciscomerakidashboard.md#configure-cisco-meraki-dashboard-account) section for additional information.                     |
