---
title: "Web Request: Settings"
description: "Web Request: Settings"
sidebar_position: 40
---

# Web Request: Settings

Use the settings page to specify the settings for the web request.

![Web Request Action Module Wizard Settings page](/images/accessanalyzer/11.6/admin/action/webrequest/settings.webp)

Establish the settings using the following options:

- Insert field – not applicable on this page
- Input Table Rowkey – Select the column to use as the Enterprise Auditor key for reporting and
  built-in Enterprise Auditor functions
- Include response in output table – When enabled, it records the body of the server’s response
  message in the actions output table
- Execute multiple requests asynchronously – use a thread pool to manage requests

    - Request count – Select the number of asynchronous requests to run simultaneously
