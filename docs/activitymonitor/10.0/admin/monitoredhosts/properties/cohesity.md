---
title: "Cohesity Tab"
description: "Cohesity Tab"
sidebar_position: 25
---

# Cohesity Tab

Use the Cohesity tab to modify settings after a Cohesity SmartFiles host has been configured.
After a Cohesity SmartFiles host is added to the monitored hosts/services table, the configuration
can be edited in the host Properties.

The configurable options are:

- Cluster name – Enter the name of the Cohesity SmartFiles cluster
- API Key – Enter the API key for Cohesity API access. Use the built-in instruction to create the
  API key directly from this field.
- Protocol – Select a protocol for the API access from the dropdown menu:

    - Auto Detect
    - HTTPS
    - HTTPS, ignore certificate errors

- Username – Enter the username of the account with SMB access to the `COHESITY_AUDIT_VIEW` audit
  logs share
- Password – Enter the password for the account
- Connect – Click to validate the connection to the Cohesity cluster using the provided credentials
- Enable Audit Log option for specified views – Select this checkbox to have the product
  automatically enable auditing for all views in the monitoring scope


:::note
See the [Cohesity SmartFiles Activity Auditing Configuration](/docs/activitymonitor/10.0/requirements/activityagent/nas-device-configuration/cohesity-activity.md) topic for
additional information on Cohesity SmartFiles host.
:::

