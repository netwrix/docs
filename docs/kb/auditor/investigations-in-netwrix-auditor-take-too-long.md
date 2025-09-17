---
description: >-
  Explains how to use CSVExportTool to export large datasets from the Long-Term
  Archive in Netwrix Auditor, enabling you to retrieve historical data more
  efficiently than the Investigations export.
keywords:
  - Long-Term Archive
  - CSVExportTool
  - Investigations
  - export
  - CSV
  - Netwrix Auditor
  - search report
  - performance
products:
  - auditor
sidebar_label: Investigations in Netwrix Auditor Take Too Long
tags: []
title: "Investigations in Netwrix Auditor Take Too Long"
knowledge_article_id: kA04u00000111CjCAI
---

# Investigations in Netwrix Auditor Take Too Long

## Question

When you attempt to export data from Long-Term Archive in **Investigations**, the export process takes too long. This applies to any investigation covering a longer period (two months to two years). Is there another way to access your historical data?

## Answer

> **NOTE:** In **Investigations**, it is recommended to limit the investigated period to one month.

To export a larger data collection from your Long-Term Archive, you can use CSVExportTool. It allows you to run a pre-configured search query against your Long-Term Archive and export the results to a `.csv` file. This lets you investigate a larger period of time at once, and access your historical data more efficiently.

> **NOTE:** The account used to export data from Long-Term Archive should have **Full Control** permissions to access the Long-Term Archive folder.

Follow these steps:

1. In your Netwrix Auditor host, set up a search report for CSVExportTool to use.

   1. In the main Netwrix Auditor menu, click **Search Activity Records**.
   2. Select **Advanced Mode** for the **Filter**, **Operator**, and **Value** rows to appear.
   3. Select the fields needed, and specify the date range. Refer to the following articles for additional information on filters: Administration — Simple Mode ⸱ v10.6 and Administration — Advanced Mode ⸱ v10.6. Once the filters are selected, run the search by clicking **Search**.

      > **NOTE:** The **Search** results displayed may be incomplete or missing entirely as you've just configured a search query.

   4. In the top right corner, click the **Tools** menu and select **Save as report**.
   5. Name the custom report, copy the name of the report, and click **Save**.

2. In your Netwrix Auditor host, open elevated Command Prompt, and run the following command to move to the CSVExportTool directory:

```powershell
cd C:\Program Files (x86)\Netwrix Auditor\Audit Core
```

3. To save the results of the report you previously created, run the following command:

```powershell
CsvExportTool.exe -filters "%custom_report_name%" -csv "%destination\name.csv%"
```

Replace `%custom_report_name%` with the report name defined in the prior steps. For example, to have the results of the **testreportcsv** report saved to `testreport123.csv` file in `C:\testfolder`:

```powershell
CsvExportTool.exe -filters "testreportcsv" -csv "c:\testfolder\testreport123.csv"
```

## Additional options

Refer to the following export customization options:

- The **-existing** attribute allows you to overwrite or append data to the existing `.csv` file. Possible attributes are **append** and **overwrite**. The following line will overwrite the contents of the existing `testreport123.csv` file.

```powershell
CsvExportTool.exe -existing overwrite -filters "testreportcsv" -csv "c:\testfolder\testreport123.csv"
```

- The **-split** attribute allows you to write each piece of data either to a separate or single row. Possible attributes are **split** and **combine**. The following line will allow you to write Activity Records to a single line.

```powershell
CsvExportTool.exe -details combine -filters "testreportcsv" -csv "c:\testfolder\testreport123.csv"
```

## Related articles

- Administration — Simple Mode ⸱ v10.6  
  https://docs.netwrix.com/docs/auditor/10_8

- Administration — Advanced Mode ⸱ v10.6  
  https://docs.netwrix.com/docs/auditor/10_8
