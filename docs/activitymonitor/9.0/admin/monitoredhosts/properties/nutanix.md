---
title: "Nutanix Tab"
description: "Nutanix Tab"
sidebar_position: 110
---

# Nutanix Tab

Use the Nutanix tab to modify settings after a Nutanix host you've configured. Once a
Nutanix host you add to the monitored hosts/services table, you can edit the configuration in the host
Properties.

![Nutanix Host Properties](/images/activitymonitor/9.0/admin/monitoredhosts/properties/nutanixhostprop01.webp)

The configurable options are:

- Nutanix Filer – Enter the name of the filer
- Username – Enter the user name for the Nutanix account with REST API access
- Password – Enter the password for the user name
- Protocol – Select a protocol for the REST API access from the dropdown menu:

    - Auto Detect
    - HTTPS
    - HTTPS, ignore certificate errors

- Connect – Click to connect using the selected protocol and validate the connection with Nutanix

![Trusted Server Certificate popup window](/images/activitymonitor/9.0/admin/monitoredhosts/add/trustedservercertificate.webp)

- HTTPS Options – Opens the Trusted server certificate window to customize the certificate
verification during a TLS session

- Import – Click to browse for a trusted server certificate
- Remove – Click to remove the selected trusted server certificate
- Enable hostname verification – Select this checkbox to ensure that the host name the product
  connects and matches the name in the certificate (CN name)
- Click **OK** to close the window and save the modifications.

:::note
Nutanix Files doesn't report events for activity originating from a server where the
Activity Monitor Agent is installed.

:::
