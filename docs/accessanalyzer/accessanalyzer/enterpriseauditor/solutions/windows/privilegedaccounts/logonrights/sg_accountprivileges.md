# SG\_AccountPrivileges Job

The SG\_AccountPrivileges job identifies accounts privileges on hosts in the targeted environment.

Targeted Hosts

All Windows Hosts

## Queries for the SG\_AccountPrivileges Job

The SG\_AccountPrivileges job uses the PowerShell Data Collector for the following query:

__CAUTION:__ The query is preconfigured for this job. Never modify the query.

![Queries for the SG_AccountPrivileges Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/privilegedaccounts/logonrights/accountprivilegesquery.png)

The query for the SG\_AccountPrivileges job is:

- Account Privilege Check – Determines account privileges on local hosts

## Analysis Tasks for the SG\_AccountPrivileges Job

Navigate to the __Windows__ > __Privileged Accounts__ > __Logon Rights__ > __SG\_AccountPrivileges__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SG_AccountPrivileges Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/privilegedaccounts/logonrights/accountprivilegesanalysis.png)

The default analysis task is:

- List all assigned privileges – Creates the SA\_SG\_AccountPrivileges\_Details table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the SG\_AccountPrivileges job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Account Privilege Details | This report highlights account privileges on hosts in the targeted environment. Default privileges present on all Windows hosts have been filtered. | None | This report is comprised of one element:   - Table – Provides account privilege details |
