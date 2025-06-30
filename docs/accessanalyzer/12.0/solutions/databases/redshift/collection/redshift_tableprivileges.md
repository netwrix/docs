# Redshift_TablePrivileges Job

The Redshift_TablePrivileges job is designed to collect Redshift table privileges from all the
targeted servers.

## Queries for the Redshift_TablePrivileges Job

The Redshift_TablePrivileges Job uses the SQL Data Collector for queries.

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query Selection](/img/product_docs/accessanalyzer/12.0/solutions/databases/redshift/collection/tableprivilegesquery.webp)

The query is:

- Table Privileges - Returns table privileges from all the targeted servers.

## Analysis Task for the Redshift_TablePrivileges Job

Navigate to the **Databases** > **0.Collection** > **Redshift** > **Redshift_TablePrivileges** >
**Configure** node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/12.0/solutions/databases/redshift/collection/tableprivilegesanalysis.webp)

The default analysis task is:

- AIC Import - Redshift Permissions – Imports Redshift table privileges to the AIC.
- AIC Import - Databases – Imports Redshift database and schema nodes to the AIC.
