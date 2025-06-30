# UX_SambaConfiguration Job

The **0.Collection** > **UX_SambaConfiguration** job collects Samba configuration information which
will be further analyzed to identify and categorize risk within audited Unix and Linux environments.

## Queries for the UX_SambaConfiguration Job

The UX_SambaConfiguration job uses the Unix Data Collector for the following queries:

**CAUTION:** The queries are preconfigured for this job. Never modify the queries.

![Queries for the UX_SambaConfiguration Job](/img/product_docs/accessanalyzer/solutions/unix/sharing/collection/sambaconfigurationqueries.webp)

The queries for the UX_SambaConfiguration Job are:

- Samba Configuration – Uses the Unix Data Collector to parse the smb.conf file
- Host OS – Gets the operating system of the target hosts

## Analysis Tasks for the UX_SambaConfiguration Job

Navigate to the **Unix** > **3.Sharing** > **0.Collection** > **UX_SambaConfiguration** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the UX_SambaConfiguration Job](/img/product_docs/accessanalyzer/solutions/unix/sharing/collection/sambaconfigurationanalysis.webp)

The default analysis task is:

- Creates Samba Parameters table from scan results – Creates the SA_UX_Sharing_SambaParameters table
  accessible under the job’s Results node
