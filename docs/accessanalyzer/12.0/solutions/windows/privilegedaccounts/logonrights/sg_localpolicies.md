# SG_LocalPolicies Job

The SG_LocalPolicies job identifies privileged accounts with high levels of server access.

## Analysis Tasks for the SG_LocalPolicies Job

Navigate to the **Windows** > **Privileged Accounts** > **Logon Rights** > **SG_LocalPolicies** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the SG_LocalPolicies Job](/img/product_docs/accessanalyzer/12.0/solutions/windows/privilegedaccounts/logonrights/localpoliciesanalysis.webp)

The default analysis tasks are:

- Local Policies Summary – Creates the SA_SG_LocalPolicies_Details table accessible under the job’s
  Results node
- Policy User Rank – Creates the SA_SG_LocalPolicies_PolicyUserRank table accessible under the job’s
  Results node. Also creates an interim processing table in the database for use by downstream
  analysis and report generation.
- Trustee Rank – Creates the SA_SG_LocalPolicies_TrusteeRank table accessible under the job’s
  Results node. Also creates an interim processing table in the database for use by downstream
  analysis and report generation.
- Calculate local amount policy details – Creates an interim processing table in the database for
  use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the SG_LocalPolicies job produces the
following pre-configured reports.

| Report                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                      | Default Tags                                                  | Report Elements                                                                                                                                                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Local Account Network Access | This report highlights whether or not the **Local accounts** and **Local account and member of Administrators group** principals can be used to access a given host across the network.                                                                                                                                                                                                                                                          | None                                                          | This report is comprised of two elements: - Stacked Bar Chart – Displays a local accounts access enterprise summary - Table – Provides local account network access details                                                                    |
| Local Security Policies      | This report identifies effective local security policy assignments. In particular, **Allow log on locally**, **Log on as a batch job**, **Allow log on through Remote Desktop Services**, and **Log on as a service** are considered. Special attention is paid to policies with a large number of trustee assignments. It displays Largest Policies by Number of Domain User Accounts in a graph format, and Trustee Details in a table format. | GDPR, SOX, HIPAA, PCI-DSS, GLBA, ITAR, FERPA, FISMA, ISO27001 | This report is comprised of three elements: - Stacked Bar Chart – Displays largest policies by number of domain user accounts - Table – Provides details largest policies by number of domain user accounts - Table – Provides trustee details |
| Privileged Accounts          | This report highlights user accounts with a large number of rights.                                                                                                                                                                                                                                                                                                                                                                              | None                                                          | This report is comprised of two elements: - Stacked Bar Chart – Displays top trustees by logon rights - Table – Provides details on all trustees                                                                                               |
