# Service Accounts > SG_ServiceAccounts Job

The SG_ServiceAccounts job determines which domain accounts are being used to run services on member
servers, identifying password age and settings.

![Service Accounts > SG_ServiceAccounts Job in the Jobs Tree](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/windows/privilegedaccounts/serviceaccountsjobstree.webp)

The SG_ServiceAccounts job is located in the Service Account job group.

## Queries for the SG_ServiceAccounts Job

The SG_ServiceAccounts job uses the Services Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the SG_ServiceAccounts Job](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/windows/privilegedaccounts/serviceaccountsquery.webp)

The query for the SG_ServiceAccounts job is:

- Service Accounts – Collects information on service accounts

See the
[Services Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/services.md)
topic for additional information.

## Analysis Tasks for the SG_ServiceAccounts Job

Navigate to the **Jobs** > **Windows** > **Privileged Accounts** > **Service Accounts** >
**SG_ServiceAccounts** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the SG_ServiceAccounts Job](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/activedirectory/users/serviceaccountsanalysis.webp)

The default analysis tasks are:

- Domain Service Accounts – Creates the SA_SG_ServiceAccounts_Details table accessible under the
  job’s Results node
- Domain Summary – Creates the SA_SG_ServiceAccounts_DomainSummary table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks, the SG_ServiceAccounts job produces the
following pre-configured report.

| Report           | Description                                                     | Default Tags | Report Elements                                                                                                                                                                              |
| ---------------- | --------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Service Accounts | This report identifies domain accounts being used for services. | None         | This report is comprised of three elements: - Bar Chart – Displays domains by service accounts found - Table – Provides domains by service accounts found - Table – Provides service details |
