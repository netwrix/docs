# SG_LocalMembership Job

The SG_LocalMembership job collects local group membership from all targeted servers.

## Queries for the SG_LocalMembership Job

The SG_LocalMembership job uses the UsersGroups Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the SG_LocalMembership Job](/img/product_docs/accessanalyzer/solutions/windows/privilegedaccounts/logonrights/collection/localmembershipquery.webp)

The query for the SG_LocalMembership job is:

- LocalMembers – Collects local membership information

## Analysis Tasks for the SG_LocalMembership Job

Navigate to the **Windows** > **Privileged Accounts** > **Logon Rights** > **Collection** >
**SG_LocalMembership** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the SG_LocalMembership Job](/img/product_docs/accessanalyzer/solutions/windows/privilegedaccounts/logonrights/collection/localmembershipanalysis.webp)

The default analysis task is:

- Update LocalMembers – Creates an interim processing table in the database for use by downstream
  analysis and report generation
