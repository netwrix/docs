---
title: "Sensitive Content Reports"
description: "Sensitive Content Reports"
sidebar_position: 160
---

# Sensitive Content Reports

Sensitive Content reports are accessed through the Content Audit interface. You can access Sensitive
Content reports by searching for sensitive data criterion or values on the Home page. These searches
must be preceded by `SDD` and a space, for example `SDD credit cards`. Searches are not case
sensitive. See the [Search Features](/docs/accessinformationcenter/12.0/resourceaudit/navigate/search.md) topic for additional information. The
sensitive data being reviewed is identified in the upper-left corner. The data within these reports
is collected by the Access Analyzer solutions which provide data to the Resource reports. See the
desired solution topic in the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
additional information.

In order to view populated Content reports, it is necessary to enable the **Store discovered
sensitive data** option within Access Analyzer. This is a setting configured within the solutions’
collection query:

- File System – Configure this option for the 1-SEEK System Scan job on the SDD Audit Criteria
  Settings page of the query configuration wizard
- SharePoint – Solution automatically stores discovered sensitive data
- SQL – Configure this option for the 3-SQL_SensitiveDataScan job on the Options page of the query
  configuration wizard

:::note
Only Access Information Center users with either the Security Team role or the Console
Administrator role will be able to perform Sensitive Data Discovery criteria searches. Reports are
blank for Access Information Center users with the Reader role.
:::


The Sensitive Content report identifies where potentially sensitive data has been found across the
scanned targeted environments.
