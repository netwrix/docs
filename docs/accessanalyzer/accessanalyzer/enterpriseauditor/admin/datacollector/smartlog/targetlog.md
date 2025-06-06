# SMARTLog: Target Log

The Target Log page is where logs are selected to be collected. There are three versions of this wizard page that change based on log type. This version is a wizard page for the log types of:

- Windows Event Log (Archived)
- Internet Information Server Log

See the [SMARTLog: Target Log for Windows Event Log Type](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/targetlogtype/windowseventlog.md) and [SMARTLog: Target Log for File Detection Log Type](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/targetlogtype/filedetectionlog.md) topics for information on the other versions of this wizard page.

![SMART Log DC Wizard Target Log page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/targetlog.png)

The configurable options are:

- Path – Enter or browse to the path to the log
- File mask – Enter file names to limit the file names to return from the path entered. Asterisks can be used for wildcards. For example, ```u_ex*.log``` would match __u\_ex170530.log__. When no mask is set, all files from the listed path are returned.
- Log files to be processed – Select from the following options:

  - All
  - Today
  - For the last – Select the number of days or hours
