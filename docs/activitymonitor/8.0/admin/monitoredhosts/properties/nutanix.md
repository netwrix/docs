---
title: "Nutanix Tab"
description: "Nutanix Tab"
sidebar_position: 110
---

# Nutanix Tab

The Nutanix tab allows users to modify settings after a Nutanix host has been configured. Once a
Nutanix host is added to the monitored hosts table, the configuration can be edited in the host
Properties.

![Nutanix Host Properties](/images/activitymonitor/8.0/admin/monitoredhosts/properties/nutanixhostprop01.webp)

The configurable options are:

- Nutanix Filer – Enter the name of the filer
- Username – Enter the user name for the Nutanix account with REST API access
- Password – Enter the password for the user name
- Protocol – Select a protocol for the REST API access from the drop-down menu:

    - Auto Detect
    - HTTPS
    - HTTPS, ignore certificate errors

- Connect – Click to connect using the selected protocol and validate the connection with Nutanix

![Trusted Server Certificate popup window](/images/activitymonitor/8.0/admin/monitoredhosts/add/trustedservercertificate.webp)-
HTTPS Options – Opens the Trusted server certificate window to customize the certificate
verification during a TLS session

- Import – Click to browse for a trusted server certificate
- Remove – Click to remove the selected trusted server certificate
- Enable hostname verification – Select this checkbox to ensure that the host name the product
  connects and matches the name in the certificate (CN name)
- Click **OK** to close the window and save the modifications.

:::note
Nutanix Files does not report events for activity originating from a server where the
Activity Monitor Agent is installed.

:::
