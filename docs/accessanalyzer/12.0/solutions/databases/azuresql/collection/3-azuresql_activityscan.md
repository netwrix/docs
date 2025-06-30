# 3-AzureSQL_ActivityScan Job

The 3–AzureSQL_ActivityScan job captures user activity from all targeted Azure SQL instances and
databases.

## Queries for the 3–AzureSQL_ActivityScan Job

The 3–AzureSQL_ActivityScan Job uses the SQL Data Collector for the following query:

![Query Selection](/img/product_docs/accessanalyzer/solutions/databases/azuresql/collection/activityscanjob.webp)

- Activity — Collects activity events for Azure SQL

## Analysis Task for the 3–AzureSQL_ActivityScan Job

Navigate to the **Databases** > **0.Collection** > **Azure SQL** >
**3–AzureSQL_ActivityScan** > **Configure** node and select **Analysis** to view the analysis task.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![3-AzureSQL_ActivityScan Job - Analysis Selection](/img/product_docs/accessanalyzer/solutions/databases/azuresql/collection/activityscanjobanalysis.webp)

The default analysis task is:

- AIC Import – Activity — Imports Azure SQL Activity to the AIC
