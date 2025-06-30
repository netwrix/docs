# AD_SiteRights Job

The AD_SiteRights Job provides data collection to identify permissions applied to sites in Active
Directory.

## Query for the AD_SiteRights Job

The AD_SiteRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_SiteRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/siterightsquery.webp)

- Site Access Permissions – Returns site permissions

    - See the
      [ADPermissions Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/adpermissions/overview.md)
      topic for additional information

## Analysis Tasks for the AD_SiteRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD_SiteRights** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_SiteRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/userrightsanalysis.webp)

The default analysis tasks are:

- Site Rights View – Creates the SA_AD_SiteRights_Details_PermissionsView visible under the job’s
  Results node
- AIC Site Permissions Import – Creates an interim processing table in the database for use by
  downstream analysis and report generation
