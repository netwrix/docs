# SQL\_UnusualActivity Job

The SQL\_UnusualActivity Job identifies anomalies related to outlier user activity by database for all targeted SQL and Azure SQL server instances.

## Analysis Tasks for the SQL\_UnusualActivity Job

Navigate to the __Databases__ > SQL > 2.Activity > SQL\_UnusualActivity > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/activity/sqljobgroup35.png)

The default analysis tasks are:

- Hourly User Activity Outlier Analysis – Creates the SA\_SQLServer\_UnusualHourlyUserActivity table accessible under the job’s Results node
- Hourly Unusual Activity Summary – Creates the SA\_SQLServer\_UnusualActivitySummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL\_SensitiveDataActivity Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Unusual Hourly Activity Report | This report lists abnormal user activity | None | This report is comprised of three elements:   - Bar Chart – Displays abnormal user activity - Table – Provides details on number of outliers per instance - Table – Provides details on unusual hourly user activity |
