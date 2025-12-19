---
title: "ServiceNow Action: Authentication"
description: "ServiceNow Action: Authentication"
sidebar_position: 10
---

# ServiceNow Action: Authentication

The Authentication page implements signing into a ServiceNow account.

A ServiceNow account must be set up and configured to determine which incidents will be visible on
the Incident Creation page.

![ServiceNow Action Module wizard Authentication page](/images/accessanalyzer/11.6/admin/action/servicenow/authentication.webp)

Use the following options to log into a ServiceNow account:

- Select the **Use global ServiceNow credentials** to access the ServiceNow credentials entered into
  the Enterprise Auditor console’s global setting
- To break inheritance, deselect the checkbox and enter information into the following fields:

    - Instance – Domain name for the ServiceNow account
    - User Name/Password – Specify the credentials to access the ServiceNow account

:::note
ServiceNow accounts must have an administrator role to modify incidents on the
configuration page.

:::
