# 1-Oracle\_PermissionsScan Job

The 1-Oracle\_PermissionsScan Job is designed to collect Oracle database level permissions from all targeted Oracle database servers.

## Query for the 1-Oracle\_PermissionsScan Job

The PermissionsScan query uses the SQL Data Collector for the following query:

![Query Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/collection/jobgroup6.png)

- PermissionsScan – Collects permissions from targeted instances

### Configure the 1-Oracle\_PermissionsScan Query

The 1-Oracle\_PermissionsScan Job is preconfigured to run using the default settings for the Permissions Collection category in the SQL Data Collector. Follow the steps to customize configurations:

__Step 1 –__ Navigate to the __Databases__ > __0.Collection__ > __Oracle__ > __1-Oracle\_PermissionsScan__ > __Configure__ node and select Queries.

__Step 2 –__ In the Query Selection view, select the PermissionScan query and click on Query Properties. The Query Properties window opens.

__Step 3 –__ Select the Data Source tab and click Configure. The SQL Data Collector wizard opens.

__CAUTION:__ Do not make changes to wizard pages not listed in these steps. They have been pre-configured for this job.

![Filter Page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/collection/1oraclepermissionscanjobqueryfilter.png)

__Step 4 –__ To query for specific databases/instances, navigate to the Filter page. The default query target is All Databases. The default query scope is Only select database objects. Click Retrieve. The Available database objects section will be populated. Databases and instances can be added in the following ways:

- Select the desired database objects and click Add
- Use the Import CSV button to import a list from a CSV file, if desired
- Optionally, use the Add Custom Filter button to create and apply a custom filter

__Step 5 –__ Navigate to the Summary page, click Finish to save any setting modifications or click Cancel if no changes were made. Then click OK to close the Query Properties window.

The 1-Oracle\_PermissionsScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 1-Oracle\_PermissionsScan Job

Navigate to the __Databases__ > __0.Collection__ > __Oracle__ > __1-Oracle\_PermissionsScan__ > __Configure__ node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/collection/jobgroup8.png)

The default analysis tasks are:

- Oracle Setup – Sets up functions and tables for the Oracle Solution Set
- Oracle Permissions Import – Imports Oracle permissions into the AIC
- Oracle Local Groups Import – Creates the SA\_AIC\_LocalGroupsImport table accessible under the job’s Results node
