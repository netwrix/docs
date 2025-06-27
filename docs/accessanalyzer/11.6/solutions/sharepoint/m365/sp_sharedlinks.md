# SP_SharedLinks Job

The SP_SharedLinks Job provides an overview of the shared links configured with SharePoint Online,
with visibility into Anonymous Sharing, External User Sharing, and activity pertaining to Shared
Links.

## Analysis Tasks for the SharedLinks Job

Navigate to the **Jobs** > **SharePoint** > **8.M365** > **SP_SharedLinks** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the SharedLinks Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/sharepoint/m365/sharedlinksanalysis.webp)

The default analysis tasks are:

- Calculate anonymous sharing – Creates the SA_SP_AnonynomousSharing_Details table accessible under
  the job's Results node
- Summarize anonymous sharing – Creates the SA_SP_AnonynomousSharing_Summary table accessible under
  the job's Results node
- Calculate shared links – Creates the SA_SP_SharingLinks_Details table accessible under the job's
  Results node
- Summarize shared links – Creates the SA_SP_SharingLinks_SiteCollection and
  SA_SP_SharingLinks_Tenant_Summary tables accessible under the job's Results node
- Calculate Shared Links Activity – Creates the SA_SP_SharingLinks_Activity_Details,
  SA_SP_SharingLinks_Creation_Detail_Last_7_Days, and
  SA_SP_SharingLinks_Creation_Summary_Last_7_Days tables accessible under the job's Results node

In addition to the tables created by the analysis tasks, the SP_Shared Links Job produces the
following preconfigured reports:

| Report               | Description                                                                                                        | Default Tags | Report Elements                                                                                                                                                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Anonymous Sharing    | This report highlights instances where resources are anonymously shared via a shareable link in SharePoint Online. | None         | This report is comprised of three elements: - Bar Chart – Provides information on the top site collections and anonymously shared files - Table – Provides details anonymous sharing summary by site collection - Table – Provides details on anonymously sharing details             |
| Shared Link Activity | This report highlights instances of activity via shared links in SharePoint Online.                                | None         | This report is comprised of three elements: - Bar Chart – Provides information on the shared link creation for the last 7 days OneDrive summary - Table – Provides details on shared link creation summary for the last 7 days - Table – Provides details on shared link activity     |
| Shared Links         | This report highlights instances of shared links in SharePoint Online.                                             | None         | This report is comprised of three elements: - Bar Chart Table– Provides information on the shared link summary - Bar Chart– Provides details on top site collections by shared files - Table – Provides details on site collection summary - Table – Provides details on shared links |
