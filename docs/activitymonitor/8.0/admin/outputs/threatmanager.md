---
title: "Threat Manager Tab"
description: "Threat Manager Tab"
sidebar_position: 110
---

# Threat Manager Tab

The Threat Manager tab on an output Properties window is where the connection between Activity
Monitor and Netwrix Threat Manager can be modified. These settings are initially configured when the
output is added.

An App Token created by Netwrix Threat Manager is used to authenticate connection between the
applications. See the App Tokens Page topic of the
[Netwrix Threat Manager Documentation](https://helpcenter.netwrix.com/category/stealthdefend) for
additional information.

Select a Threat Manager output from the Monitored Domains tab and click **Edit** to open the output
Properties window.

![threatmanager](/images/activitymonitor/8.0/admin/outputs/threatmanager.webp)

The tab contains the following settings:

- Server in SERVER:PORT format – Server name of the Netwrix Threat Manager application server and
  the communication port being used between the applications. The format must be SERVER:PORT, e.g.
  newyorksrv10:10001.

    - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the
      organization’s environment can resolve the name format used.
    - The default port for Netwrix Threat Manager is 10001.

- App Token – App Token generated on the App Tokens page of the Netwrix Threat Manager console.
- Enable periodic AD Status Check event reporting – Indicates periodic AD Status Check event
  reporting is enabled, which means the agent will send out status messages every five minutes to
  verify whether the connection is still active.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.
