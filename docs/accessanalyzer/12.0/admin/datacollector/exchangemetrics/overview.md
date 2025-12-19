---
title: "ExchangeMetrics Data Collector"
description: "ExchangeMetrics Data Collector"
sidebar_position: 190
---

# ExchangeMetrics Data Collector

The ExchangeMetrics Data Collector collects Mail-Flow metrics from the Exchange Message Tracking
Logs on the Exchange servers. Some examples of this include server volume and message size
statistics. This data collector runs as an applet over RPC connection to process and collect
summarized metrics from the Message Tracking Log. See the
[Exchange Support and Permissions Explained](/docs/accessanalyzer/12.0/requirements/exchange/support/support.md)
topic for a complete list of supported platforms.

The ExchangeMetrics Data Collector has been preconfigured within the Exchange Solution. Both this
data collector and the solution are available with a special Access Analyzer license. See the
[Exchange Solution](/docs/accessanalyzer/12.0/solutions/exchange/overview.md) topic for additional information.

**Protocols**

- RPC
- WMI

**Ports**

- TCP 135
- Randomly allocated high TCP ports

**Permissions**

- Member of the local Administrator group on the targeted Exchange server(s)

See the [Exchange Mail-Flow Permissions](/docs/accessanalyzer/12.0/requirements/exchange/support/mailflow.md) topic
for additional information.

## ExchangeMetrics Query Configuration

The ExchangeMetrics Data Collector is configured through the Exchange Metrics Data Collector Wizard,
which contains the following wizard pages:

- Welcome
- [ExchangeMetrics: Category](/docs/accessanalyzer/12.0/admin/datacollector/exchangemetrics/category.md)
- [ExchangeMetrics: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangemetrics/scope.md)
- [ExchangeMetrics: Results](/docs/accessanalyzer/12.0/admin/datacollector/exchangemetrics/results.md)
- [ExchangeMetrics: Collect Mode](/docs/accessanalyzer/12.0/admin/datacollector/exchangemetrics/collectmode.md)
- [ExchangeMetrics: Time Frames](/docs/accessanalyzer/12.0/admin/datacollector/exchangemetrics/timeframes.md)
- [ExchangeMetrics: Message Sizes](/docs/accessanalyzer/12.0/admin/datacollector/exchangemetrics/messagesizes.md)
- [ExchangeMetrics: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangemetrics/options.md)
- [ExchangeMetrics: Message Activity Filter](/docs/accessanalyzer/12.0/admin/datacollector/exchangemetrics/messageactivityfilter.md)
- [ExchangeMetrics: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangemetrics/summary.md)

    :::note
    Pages available vary depending on the Category selected.
    :::


![Exchange Metrics Data Collector Wizard Welcome page](/images/accessanalyzer/12.0/admin/datacollector/exchangemetrics/welcome.webp)

The Welcome page can be hidden by checking the **Do not display this page the next time** box when
the wizard is open and configuration settings are saved.
