---
title: "FSAA: FSAA Update Service Setting"
description: "FSAA: FSAA Update Service Setting"
sidebar_position: 140
---

# FSAA: FSAA Update Service Setting

The FSAA Update Service Setting page is where the File System Proxy Service can be automatically
updated on hosts where the service has already been installed. It requires the File System Proxy
Service to be v8.0 or later prior to using this feature. It is a wizard page for the category of
Update Proxy Service.

![FSAA Data Collector Wizard FSAA Update Service Setting page](/images/accessanalyzer/11.6/admin/datacollector/fsaa/updateservice.webp)

Configure the settings for the targeted File System Proxy Service:

- Port number – The default port number is 8766
- Applet communication timeout: [number] minute(s) – This option determines the length of time (in
  minutes) the Enterprise Auditor Console attempts to reach the proxy before giving up. Depending on
  the job configuration, the data collector behaves in one of three ways after the timeout value has
  been exceeded.
- Scan cancellation timeout: [number] minute(s) – When selected, this option will timeout the applet
  if there is an attempt to pause the scan and the applet does not respond

See the
[FSAA: Applet Settings](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/appletsettings.md)
topic for additional information.
