# 2-SQL\_SensitiveDataScan Job

The 2-SQL\_SensitiveDataScan Job discovers sensitive data in the database SQL server instances and databases based on a pre-defined or user defined search criteria.

Special Dependency

- Sensitive Data Discovery Add-On installed on the Access Analyzer Console server
  - See the [Installation & Configuration Overview](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/overview.md) topic for installation information.
  - See the [Sensitive Data Discovery](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/overview.md) topic for additional information.

Though the job is visible within the console, it requires an additional installer package before data collection occurs.

## Queries for the 2-SQL\_SensitiveDataScan Job

The SensitiveDataScan Job uses the SQL Data Collector for the following query:

![Query Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/collection/sqljobgroup9.png)

- SensitiveDataScan – Collects Sensitive Data from targeting instances
  - (Optional) This query can be modified to target specific databases/instances. See the [Configure the SensitiveDataScan Query](#Configure-the-SensitiveDataScan-Query) topic for additional information.

### Configure the SensitiveDataScan Query

The 2-SQL\_SensitiveDataScan Job is preconfigured to run using the default settings for the Sensitive Data Collection category. Follow the steps to customize configurations.

__Step 1 –__ Navigate to the __Databases__ > 0.Collection > SQL > 2-SQL\_SensitiveDataScan > Configure node and select Queries.

__Step 2 –__ In the Query Selection view, select the SensitiveDataScan query click on Query Properties. The Query Properties window appears.

__Step 3 –__ Select the Data Source tab, and click Configure. The SQL Data Collector Wizard opens.

__CAUTION:__ Do not make changes to other wizard pages as they have been pre-configured for this job.

![2sqlsensitivedatascanoptionspage](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/collection/2sqlsensitivedatascanoptionspage.png)

__Step 4 –__ Select the desired scan options. Navigate to the [SQL: Options](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/sql/options.md) page for additional information.

__NOTE:__ The Sensitive Data Scan Settings are pre-configured for optimal performance for a high-level table scan. Configuring these settings to increase the scope of the sensitive data scan may significantly increase scan time.

![Criteria Page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/collection/2sqlsensitivedatascanquerycriteriapage.png)

__Step 5 –__ To modify criteria, navigate to the [SQL: Criteria](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/sql/criteria.md) page. By default, the following System Criteria have been selected:

- Credit Cards
- Tax Forms
- US SSN
- User ID
- Password

  Add or remove criteria if needed. See the [Sensitive Data Criteria Editor](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/overview.md) topic for additional information.

![Filter Page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/collection/2sqlsensitivedatascanfilterpage.png)

__Step 6 –__ To query for specific database/instance, navigate to the [SQL: Filter](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/sql/filter.md) page. The query is configured by default to target Only select database objects. Click Retrieve. The Available database objects box will populate. Databases and instances can be added in the following ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Optionally use the Add Custom Filter button to create and apply a custom filter.

__Step 7 –__ Navigate to the Summary page, click Finish to save any setting modifications or click Cancel if no changes were made. Then click OK to close the Query Properties window.

The 2-SQL\_SensitsveDataScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 2-SQL\_SensitiveDataScan Job

Navigate to the __Databases__ > 0.Collection > SQL > 2-SQL\_SensitiveDataScan > Configure node and select Analysis to view the analysis task.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/collection/sqljobgroup13.png)

The default analysis task is:

- SQL Server SDD Matches View — Brings the SQL Server SDD Matches View to the SA console
- SQL Server SDD Match Hits View — Brings the SQL Server SDD Match Hits View to the SA console
- AIC Import — Creates the SA\_AIC\_SddMatchesImport
