---
title: "FSAA: FSAA Update Service Setting"
description: "FSAA: FSAA Update Service Setting"
sidebar_position: 140
---

# FSAA: FSAA Update Service Setting

Use the FSAA Update Service Setting page to automatically update the File System Proxy Service on
hosts where the service is already installed. This page requires the File System Proxy Service to be
v8.0 or later. This wizard page applies to the Update Proxy Service category.

![FSAA Data Collector Wizard FSAA Update Service Setting page](/images/accessanalyzer/11.6/admin/datacollector/fsaa/updateservice.webp)

Configure the settings for the targeted File System Proxy Service:

- Port number – The default port number is 8766
- Applet communication timeout: [number] minutes – This option determines the length of time (in
  minutes) the Enterprise Auditor Console attempts to reach the proxy before giving up. Depending on
  the job configuration, the data collector behaves in one of three ways after the timeout value has
  been exceeded.
- Scan cancellation timeout: [number] minutes – When selected, this option will timeout the applet
  if there is an attempt to pause the scan and the applet doesn't respond

See the
[FSAA: Applet Settings](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/appletsettings/appletsettings.md)
topic for additional information.
