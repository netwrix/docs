---
title: "ExchangePublicFolder: Options"
description: "ExchangePublicFolder: Options"
sidebar_position: 40
---

# ExchangePublicFolder: Options

The Options page provides additional configuration options for the query. It is a wizard page for
all of the categories. Available options vary based on the category selected.

![Exchange Public Folder Data Collector Wizard Options page](/images/accessanalyzer/12.0/admin/datacollector/exchangepublicfolder/options.webp)

The Options page contains the following options:

- Process folders that physically reside on the target server only – This option will limit
  extraction to only the subset of public folders which reside on this server when selected. Clear
  this option if targeting the Exchange 2010 Public Folder Server. The ability to scope to the
  targeted server is not available for Exchange 2010. The entire public folder hierarchy is
  returned.
- Message size units:

    - KB
    - MB

- Include subfolders in message counters – This option is only available for the Contents category.
  When this option is selected, it will include subfolders in message counters, according to the
  Scope page settings. See the [ExchangeMetrics: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangemetrics/scope.md) topic for
  additional information.
- Large attachment threshold (Kb) – Configure the desired size limit for attachments. The default
  value is 500.

In the Attachment types section, configure attachment count types.

- Count attachment types – Selecting this option enables the Content Types settings
- Add New – Add classifications and provide the file extensions for those classifications
- Load Defaults – Resets the **Attachment types** configuration to its original settings
- Remove – Deletes a selected classification from the filter list
