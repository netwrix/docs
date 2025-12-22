---
description: >-
  How to modify SSRS report timeouts for Netwrix Auditor, including per-report
  and global execution timeouts, httpRuntime executionTimeout, and
  RSReportServer.config DatabaseQueryTimeout.
keywords:
  - SSRS
  - report timeout
  - executionTimeout
  - web.config
  - RSReportServer.config
  - DatabaseQueryTimeout
  - Netwrix Auditor
  - Report Manager
  - Reporting Services
products:
  - auditor
sidebar_label: How to modify SSRS report timeouts
tags: []
title: "How to modify SSRS report timeouts"
knowledge_article_id: kA04u0000000GyPCAU
---

# How to modify SSRS report timeouts

There's a chance one or more Netwrix Auditor reports take a while to load. It's also possible some reports timeout during generation. To prevent timeout for larger reports, follow one of the options below:

## Report Execution Timeout

You can set reports to never timeout by selecting the **Do not timeout report execution** option. At default configuration, reports will timeout at `1800` seconds. To remove the timeout, navigate to your **Report Manager URL**, which can be found under **Netwrix Auditor settings > Audit Database** tab.

Once the Report Manager page opens you can choose to remove the timeout per report or globally.

### Per Report

1. Navigate through the Netwrix Auditor report folder until you find the desired report
2. Click the three dot menu and choose the **manage** option
3. Click the **processing options** tab and choose the **report timeout** option.
4. Select the option to remove report timeout
   - **Note: If your Netwrix Auditor report folder is deleted or re-deployed, ensure you perform these steps again on the specific reports**

### Global Timeout

1. Click on the **Site Settings** in the top right of the Report Manager page
2. Choose the **General** tab and select the report timeout option **Do not timeout report**

## HTTP Timeout

You may also choose to set the httpruntime to run larger reports. To do this, you must alter the value of the attribute `executionTimeout` of the tag `httpRuntime`. The default value is `9000` seconds.

Here is a clip from configuration:

```xml
<system.web>
 <httpRuntime executionTimeout = "9000" />
</system.web>
```

To find this file, navigate to the SSRS `web.config` file. By default, this is located at `C:\Program Files\Microsoft SQL Server\MSRS10_50.MSSQLSERVER\Reporting Services\ReportServer`

Find the **HttpRuntime** parameter (as seen in the example above) and change the value. Removing the parameter entirely is unfortunately not possible, however you can set an insanely high value to this parameter, for example `2147483647` (2^31-1), which is equal to around 25000 days.

**NOTE**: It's possible that this parameter doesn't exist in your `web.config` file, in this case it would use the default value of `9000`. Simply create the entry using the example above.

## DatabaseQueryTimeout

The **DatabaseQueryTimeout** value can be altered by editing the **RSReportServer.config**. This file is located at

`C:\Program Files\Microsoft SQL Server\MSRS10_50.MSSQLSERVER\Reporting Services\ReportServer`

The default value is `120` seconds.

For additional SSRS timeout configurations, please refer to this Microsoft article:
https://social.technet.microsoft.com/wiki/contents/articles/23508.sql-server-reporting-services-troubleshooting-timeout-settings.aspx
