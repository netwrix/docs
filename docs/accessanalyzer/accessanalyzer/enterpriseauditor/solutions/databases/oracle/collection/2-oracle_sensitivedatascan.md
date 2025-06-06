# 2-Oracle\_SensitiveDataScan Job

The 2-Oracle\_SensitiveDataScan job discovers sensitive data in Oracle databases across all targeted Oracle database servers based on pre-defined or user-defined search criteria. See the [Sensitive Data Discovery](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/overview.md) topic for additional information.

## Query for the 2-Oracle\_SensitiveDataScan Job

The SensitiveDataScan Query uses the SQL Data Collector for the following query:

![Query Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/collection/jobgroup9.png)

- SensitiveDataScan – Collects Sensitive Data from targeted instances

### Configure the 2-Oracle\_SensitiveDataScan Query

The 2-Oracle\_SensitiveDataScan job is preconfigured to run using the default settings for the Sensitive Data Collection category in the SQL Data Collector. Follow the steps to customize configurations:

__Step 1 –__ Navigate to the __Databases__ > __0.Collection__ > __Oracle__ > __2-Oracle\_SensitiveDataScan__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, select the SensitiveDataScan query and click __Query Properties__. The Query Properties window opens.

__Step 3 –__ Select the __Data Source__ tab and click __Configure__. The SQL Data Collector wizard opens.

__CAUTION:__ Do not make changes to wizard pages not listed in these steps. They have been pre-configured for this job.

![Sensitive Data Scan Settings](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/collection/optionspage.png)

__Step 4 –__ Navigate to the Options page. Enable or disable configuration options as needed. Click __Next__ to continue.

![Criteria Page of the SQL Data Collector Wizard](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/collection/criteriapage.png)

__Step 5 –__ Navigate to the Criteria page. Select or deselect criteria used to define sensitive data. Click __Next__ to continue.

![Filter Page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/collection/2oraclesensitivedatascanfilterpgae.png)

__Step 6 –__ To query for specific databases/instances, navigate to the Filter page. The default query target is __All Databases__. The default query scope is __Only select database objects__. Click __Retrieve__. The Available database objects section will be populated. Databases and instances can be added in the following ways:

- Select the desired database objects and click __Add__
- Use the __Import CSV__ button to import a list from a CSV file, if desired
- Optionally, use the __Add Custom Filter__ button to create and apply a custom filter

__Step 7 –__ Navigate to the Summary page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

The 2-Oracle\_SensitiveDataScan job is now ready to run with the customized settings.

## Analysis Tasks for the 2-Oracle\_SensitiveDataScan Job

Navigate to the __Databases__ > __0.Collection__ > __Oracle__ > __2-Oracle\_SensitiveDataScan__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/collection/jobgroup13.png)

The default analysis tasks are:

- Oracle SDD Permission View – Creates a view of all permissions on sensitive data
- Oracle Effective SDD Perms – Creates a view of effective permissions on Oracle SDD data
- Oracle SDD Import – Creates the SA\_AIC\_SddMatchesImport table accessible under the job’s Results node
