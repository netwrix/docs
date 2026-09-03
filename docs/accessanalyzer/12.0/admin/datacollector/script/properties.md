---
title: "Script Properties"
description: "Script Properties"
sidebar_position: 60
---

# Script Properties

Use the Data Source tab to select the data collector. The configurable options are:

- Source – Used to select data collector
- Path – Displays the returned path from the data collector

    :::warning
    Editing the path is an advanced operation. Entering an incorrect value
    may render the query inoperable.
    :::


    - The path identifies the selection from within the data collector. The path
      essentially tells the data collector where the data is and depending on the data collector,
      may define selected options. It is sometimes convenient to edit the path manually.
    - For example, if you define a file system query using the File System Data Collector, the
      data collector automatically fills in the path with the selected details. You can manually
      make minor changes, like changing the file location, by editing the path.

- Properties – As the Path defines where the target data is, the properties define what data you
  want. Each property has a series of attributes including:

    - Name – Identifies the target data. Modifying this affects what data the data collector
      returns.
    - Column – Specifies the column name within the result data. Use this to specify the column name
      for the report output. Access Analyzer sets this by default to match the **Name**
      attribute.
    - DataType – Used to determine the format of the data for reporting purposes. It affects sorting
      order and the ability to graph content. In some cases, the data collector is unable to
      determine the correct data type for the returned data.

    :::warning
    Setting this value manually to an incorrect data type may render your results
    invalid and inaccessible by Access Analyzer.
    :::


    - For example: Querying the registry for a value stored as **REG_SZ** returns a string, as
      **REG_SZ** is a string type in the registry. However, sometimes **REG_SZ** entries contain
      numbers. If you determine that the returned content is always numeric, you can override the
      default `STRING` value and set it to `NUMERIC`. This provides
      proper sorting and charting ability.

- Size – Used to determine the width of the field used to hold String data. Setting the size smaller
  than the actual returned data will cause Access Analyzer to truncate the data in the view.
  However, the actual stored data in the result table will contain the full result.
- Value – Reserved for internal use
- Key – Used to identify a key property. A key property identifies the property that
  contains a unique value for enumerated tasks. Change Detection and Conformance Management on
  enumerated tasks require a Key value. To identify a property that uniquely identifies each
  row, set the Key attribute to `YES`.

## Adding and Removing Properties Manually

Although the data collectors automatically populate the property list, you can add additional
properties manually. Doing so allocates storage within Access Analyzer during data collection and
creates corresponding columns in the output table. Use a script to reference and populate these
properties.

![Properties on the Query Properties window](/images/accessanalyzer/12.0/admin/datacollector/script/properties.webp)

To add properties manually, click the plus (**+**) button at the bottom of the property window. To
remove properties, click the minus (-) button.
