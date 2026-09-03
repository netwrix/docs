---
title: "Notification: Time Window"
description: "Notification: Time Window"
sidebar_position: 110
---

# Notification: Time Window

Use this page to specify whether to include only rows collected in the last execution.

![Notification Data Analysis Module wizard Time window page](/images/accessanalyzer/11.6/admin/analysis/notification/timewindow.webp)

The following option is available:

- Only include rows from most recent run for `[<table name>]` – Select the checkbox to scope the
  task to the most recent data

    :::note
    Enterprise Auditor enables the checkbox only if the table selected on the Select Table page has
    a **JobRunTimeKey** property. Otherwise, it clears the checkbox by default.

    :::
