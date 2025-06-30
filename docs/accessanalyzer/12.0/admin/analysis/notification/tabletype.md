# Notification: Table Type

Use the Source Table Selection page to choose the type of table to use as the data source for
notifications.

![Notification Data Analysis Module wizard Source Table Selection page](/img/product_docs/accessanalyzer/admin/analysis/notification/tabletype.webp)

The following options are available:

- Change Detection Table – Sends notifications when changes are detected in the data. When selected,
  the option of **Show only tables for this job** becomes the default selection on the Select Table
  page. This option targets only change detection tables within the current job. Possible tables (if
  any) display on the Select Table page. See the [Notification: Select Table](/docs/accessanalyzer/12.0/admin/analysis/notification/selecttable.md) topic
  for additional information.

    **NOTE:** Change Detection Table also locks selections to tables on the Select Table page that
    are selected through Other. To select tables outside of **Show only tables for this job**,
    select Other on the Table Type page, then select either **Show All Tables** or **Show All SA
    Tables**, then click back to return to the Table Type page. Now selecting Change Detection Table
    and proceeding defaults the selection on the Select Table page to whichever was previously
    selected through Other.

- Other – Sends a notification based on a value within a selected table. Selecting this option
  enables the following options on the Select Table page, each of which lists a specific set of
  tables available for selection:

    - Show All Tables
    - Show All SA Tables
    - Show only tables for this job
