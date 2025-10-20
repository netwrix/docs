---
title: "Credentials"
description: "Credentials"
sidebar_position: 40
---

# Credentials

The credentials page is accessible from the Settings menu. This is where credentials used to connect
to remote devices and services are created and managed.

The page is a list of grids containing credentials for different types of device, protocol or
service. While some grids may only be visible if certain licensees or options are in place, this is
the full list:

- ITSM System Credentials
- Cloud System Credentials
- SSH / Telnet Credentials
- Splunk Credentials
- ESXi / vCenter Credentials
- Database Credentials

Each grid has a button to create a new credential. The far right column contains buttons to edit and
delete specific credentials.

## ITSM System Credentials

These credentials are used to connect to an ITSM and discover devices to scan from the ITSM's
configuration item catalog.

![ITSM System Credentials](/images/changetracker/8.1/admin/settings/itsm_system_credentials.webp)

## Cloud System Credentials

These credentials are used by the Cloud Tracker feature to track changes to cloud platform
configuration.

![Cloud System Credentials](/images/changetracker/8.1/admin/settings/cloud_system_credentials_1120x365.webp)

## SSH / Telnet Credentials

These credentials are used for agentless connections to devices (Linux, switches, routers, etc.) via
SSH or Telnet. Credentials for Windows agentless connections are also stored here.

![SSH Telnet Credentials](/images/changetracker/8.1/admin/settings/ssh_telnet_credentials_1118x372.webp)

## Splunk Credentials

These credentials are used to connect to the API of a Splunk instance and pull specific logs into
Change Tracker as change events.

![Splunk Credentials](/images/changetracker/8.1/admin/settings/splunk_credentials_1122x369.webp)

## ESXi / vCenter Credentials

These credentials are used to connect to ESXi devices or to connect to a vSphere and discover all of
it's ESXi nodes.

![EXsi Credentials](/images/changetracker/8.1/admin/settings/esxi_credentials.webp)

## Database Credentials

These credentials are used by database compliance reports to connect directly to a database
instance.

**Note:** v1 database credentials are now deprecated and only maintained for backward compatibility. v2 database credentials should be used for any new connections.

![Database Credentials](/images/changetracker/8.1/admin/settings/database_credentials_1113x358.webp)
