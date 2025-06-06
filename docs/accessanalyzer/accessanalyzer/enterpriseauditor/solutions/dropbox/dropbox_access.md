# 1.Access > Dropbox\_Access Job

The Dropbox\_Access job provides insight into effective access to resources within the targeted Dropbox environment, specifically highlighting inactive access rights that can be revoked. It is dependent on data collected by the 0.Collection job group. This job processes analysis tasks and generates reports.

![1.Access > Dropbox_Access Job in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/dropbox/accessjobstree.png)

The Dropbox\_Access job is located in the 1.Access job group.

## Analysis Tasks for the Dropbox\_Access Job

View the analysis tasks by navigating to the __Jobs__ > __Dropbox__ > __1.Access__ > __Dro pbox\_Access__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Dropbox_Access Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/box/accessanalysis.png)

- Get access details – Creates the SA\_Dropbox\_Access\_Details table accessible under the job’s Results node
- Summarize access details – Creates the SA\_Dropbox\_Access\_Summary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display effective access to resources, the Dropbox\_Access job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Effective Access | This report shows effective access for all files in Dropbox. | GDPR  SOX  HIPAA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of three elements:   - Stacked Bar Chart – Displays access by team - Table – Provides summary of database access - Table – Provides details on database access |
| Inactive Access | This report identifies instances of inactive access in Dropbox. Inactive access to a shared folder occurs when a user has left the shared folder, but can still rejoin it. | None | This report is comprised of two elements:   - Bar Chart – Displays inactive access by team - Table – Provides details on inactive access |
