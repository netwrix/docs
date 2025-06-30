# AD_GroupPolicy Job

The AD_GroupPolicy Job audits all Group Policies that are present on the Domain Controller, and
provides details on the containers they are linked to, and the settings that are configured.

## Queries for the AD_GroupPolicy Job

The AD_GroupPolicy Job uses the GroupPolicy Data Collector for the following query:

**CAUTION:** Do not modify the queries. The queries are preconfigured for this job.

![Queries for the AD_GroupPolicy Job](/img/product_docs/accessanalyzer/11.6/solutions/activedirectory/grouppolicy/grouppolicyquery.webp)

The queries for this job are:

- Link Status – Targets the default domain controller known to Enterprise Auditor to retrieve a
  GPO's list for the domain
- Settings – Targets the default domain controller known to Enterprise Auditor to return the state
  for domain policies for all GPOs. See the
  [GroupPolicy Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/grouppolicy/overview.md)
  topic for additional information.

## Analysis Tasks for the AD_GroupPolicy Job

Navigate to the **Active Directory** > **4.GroupPolicy** > **AD_GroupPolicy** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_GroupPolicy Job](/img/product_docs/accessanalyzer/11.6/solutions/activedirectory/grouppolicy/grouppolicyanalysis.webp)

The default analysis tasks are:

-   1. Group Policy Analysis – Creates an interim processing table in the database for use by
       downstream analysis and report generation
-   2. Combined User and Computer Settings – Creates the SA_AD_GroupPolicy_SettingList table
       accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_GroupPolicy Job produces
the following pre-configured reports:

| Report       | Description                                              | Default Tags | Report Elements                                                                                                                                                                                                                 |
| ------------ | -------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GPO Details  | This report lists all Group Policies and their settings. | None         | This report is comprised of four elements: - Bar Chart – Displays GPO count by domain - Table – Provides details on policies by domain - Table – Provides details on GPO count by domain - Table – Provides details on settings |
| GPO Overview | This report lists all Group Policies and their settings. | None         | This report is comprised of three elements: - Bar Chart – Displays GPO configuration by domain - Table – Provides details on GPOs - Table – Provides details on GPO configuration by domain                                     |
