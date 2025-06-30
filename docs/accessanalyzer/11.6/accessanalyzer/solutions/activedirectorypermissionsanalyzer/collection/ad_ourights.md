# AD_OURights Job

The AD_OURights Job provides data collection to identify permissions applied to organizational units
in Active Directory.

## Query for the AD_OURights Job

The AD_OURights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_OURights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/ourightsquery.webp)

- OU Access Permissions – Returns organizational unit permissions

    - See the
      [ADPermissions Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/adpermissions/overview.md)
      topic for additional information

## Analysis Tasks for the AD_OURights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD_OURights** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_OURights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/ourightsanalysis.webp)

The default analysis tasks are:

- OU Rights View – Creates the SA_AD_OURights_Details_PermissionsView visible under the job’s
  Results node
- AIC OU permissions import – Creates an interim processing table in the database for use by
  downstream analysis and report generation
