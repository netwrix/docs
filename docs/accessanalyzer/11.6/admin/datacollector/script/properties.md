---
title: "Script Properties"
description: "Script Properties"
sidebar_position: 60
---

# Script Properties

Use the Data Source tab to select the data collector. The configurable options are:

- Source – Select the data collector
- Path – Displays the returned path from the data collector

    :::warning
    Editing the path is considered an advanced operation. Entering an incorrect value
    may render the query inoperable.
    :::


    - The path identifies the selection within the data collector. The path essentially tells the
      data collector where the data is and, depending on the data collector, may define selected
      options. It's sometimes convenient to edit the path manually.
    - For example, if you define a file system query using the File System Data Collector,
      Enterprise Auditor automatically fills in the path with the selected details. You can manually
      edit the path to make a minor change, like changing the file location.

- Properties – While the path defines where the target data is, the properties define what data you
  want. Each property has a series of attributes including:

    - Name – Identifies the target data. Modifying this affects what data the data collector
      returns.
    - Column – Specifies the column name within the result data. Use this to specify the column name
      for the report output. By default, this matches the **Name** attribute.
    - DataType – Determines the format of the data for reporting purposes. It affects sorting
      order and the ability to graph content. In some cases, the data collector can't determine the
      correct data type for the returned data.

    :::warning
    Setting this value manually to an incorrect data type may render your results
    invalid and inaccessible by Enterprise Auditor.
    :::


    - For example, querying the registry for a value stored as **REG_SZ** returns a string, as
      **REG_SZ** is a string type in the registry. However, REG_SZ entries sometimes contain
      numbers. If you determine that the returned content is always numeric, you can override the
      default `STRING` value and set it to `NUMERIC`. This provides proper sorting and charting
      ability.

- Size – Determines the width of the field used to hold String data. Setting the size smaller
  than the actual returned data will cause Enterprise Auditor to truncate the data in the view.
  However, the actual stored data in the result table will contain the full result.
- Value – Reserved for internal use
- Key – Identifies a key property. A key property identifies the property that contains a unique
  value for enumerated tasks. Enumerated tasks require a Key value for Change Detection and
  Conformance Management. To identify a property that uniquely identifies each row, set the Key
  attribute to `YES`.

## Adding and Removing Properties Manually

Although the data collectors automatically populate the property list, you can add additional
properties manually. Doing so allocates storage within Enterprise Auditor during data collection
and creates corresponding columns in the output table. Use a script to reference and populate these
properties.

![Properties on the Query Properties window](/images/accessanalyzer/11.6/admin/datacollector/script/properties.webp)

To add properties manually, click the plus (**+**) button at the bottom of the property window. To
remove properties, click the minus (-) button.
