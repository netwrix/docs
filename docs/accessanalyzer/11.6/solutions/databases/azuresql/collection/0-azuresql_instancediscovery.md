# 0-AzureSQL_InstanceDiscovery Job

The Azure SQL Instance Discovery job is responsible for enumerating a list of Azure SQL Server
Instances from target endpoints and populating the necessary instance connection information which
will be used throughout the solution set.

## Queries for the 0-AzureSQL_InstanceDiscovery Job

The 0-AzureSQL_InstanceDiscovery job uses the SQL Data Collector for the following query:

![Query Selection - Instance Discovery](/img/product_docs/accessanalyzer/11.6/solutions/databases/azuresql/collection/instancediscquery.webp)

- Azure SQL Instance Discovery — Collects the list of Azure SQL Server Instances from target
  endpoints and populates the necessary instance connection information

## Analysis Tasks for the 0-AzureSQL_InstanceDiscovery Job

Navigate to the **Databases** > **0.Collection** > **AzureSQL** > **0-AzureSQL_InstanceDiscovery** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/11.6/solutions/databases/azuresql/collection/instancediscanalysis.webp)

The default analysis tasks is:

- SQL Instances — Brings SA_SQL_Instances table to view
