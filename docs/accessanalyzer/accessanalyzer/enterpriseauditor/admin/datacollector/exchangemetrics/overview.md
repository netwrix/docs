# ExchangeMetrics Data Collector

The ExchangeMetrics Data Collector collects Mail-Flow metrics from the Exchange Message Tracking Logs on the Exchange servers. Some examples of this include server volume and message size statistics. This data collector runs as an applet over RPC connection to process and collect summarized metrics from the Message Tracking Log. See the [Exchange Support and Permissions Explained](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/exchange/support.md) topic for a complete list of supported platforms.

The ExchangeMetrics Data Collector has been preconfigured within the Exchange Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Exchange Solution](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/overview.md) topic for additional information.

Protocols

- RPC
- WMI

Ports

- TCP 135
- Randomly allocated high TCP ports

Permissions

- Member of the local Administrator group on the targeted Exchange server(s)

See the [Exchange Mail-Flow Permissions](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/exchange/mailflow.md) topic for additional information.

## ExchangeMetrics Query Configuration

The ExchangeMetrics Data Collector is configured through the Exchange Metrics Data Collector Wizard, which contains the following wizard pages:

- Welcome
- [ExchangeMetrics: Category](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangemetrics/category.md)
- [ExchangeMetrics: Scope](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangemetrics/scope.md)
- [ExchangeMetrics: Results](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangemetrics/results.md)
- [ExchangeMetrics: Collect Mode](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangemetrics/collectmode.md)
- [ExchangeMetrics: Time Frames](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangemetrics/timeframes.md)
- [ExchangeMetrics: Message Sizes](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangemetrics/messagesizes.md)
- [ExchangeMetrics: Options](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangemetrics/options.md)
- [ExchangeMetrics: Message Activity Filter](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangemetrics/messageactivityfilter.md)
- [ExchangeMetrics: Summary](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangemetrics/summary.md)

  __NOTE:__ Pages available vary depending on the Category selected.

![Exchange Metrics Data Collector Wizard Welcome page](/static/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

The Welcome page can be hidden by checking the __Do not display this page the next time__ box when the wizard is open and configuration settings are saved.
