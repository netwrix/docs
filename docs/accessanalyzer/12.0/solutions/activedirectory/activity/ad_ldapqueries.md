---
title: "LDAP > AD_LDAPQueries Job"
description: "LDAP > AD_LDAPQueries Job"
sidebar_position: 50
---

# LDAP > AD_LDAPQueries Job

The **LDAP** > **AD_LDAPQueries** Job analyzes LDAP traffic to determine trends such as most
expensive queries, most active servers and users, successful/failed and signing status. This data
can be used to troubleshoot performance issues, load balancing, and poorly configured services.

![AD_LDAPQueries Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/activedirectory/activity/ldapjobstree.webp)

:::info
Schedule this job to run with the 0.Collection job group.
:::


## Analysis Tasks for the AD_LDAPQueries Job

Navigate to the **Active Directory** > **6.Activity** > **LDAP** > **AD_LDAPQueries** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Except for the **Largest Queries** task, do not modify or deselect the remaining
selected analysis tasks. The remaining analysis tasks are preconfigured for this job.
:::


![Analysis Tasks for the AD_LDAPQueries Job](/images/accessanalyzer/12.0/solutions/activedirectory/activity/ldapqueriesanalysis.webp)

The following non-configurable analysis tasks are selected by default:

- SSL – Creates the SA_AD_LDAPQueries_SSLStatus table accessible under the job’s Results node
- Host Summary – Creates the SA_AD_LDAPQueries_HostSummary table accessible under the job’s Results
  node
- User Summary – Creates the SA_AD_LDAPQueries_UserSummary table accessible under the job’s Results
  node

The following configurable analysis task can be optionally enabled:

- Largest Queries – Creates the SA_AD_LDAPQueries_ExpensiveQueries table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks, the AD_LDAPQueries Job produces the follow
pre-configured reports:

| Report               | Description                                                         | Default Tags                                               | Report Elements                                                                                                                                                                                                                                         |
| -------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Largest LDAP Queries | Shows LDAP queries returning the most objects, and their source.    | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: <ul><li>Bar – Displays top users by LDAP traffic</li><li>Table – Displays top users by LDAP traffic</li><li>Table – Displays Expensive LDAP Queries</li></ul>                                               |
| LDAP Overview        | Overview of hosts and users performing queries, and query security. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of four elements: <ul><li>Pie – Displays SSL query events view results</li><li>Pie – Displays query security flags</li><li>Table – Displays users performing LDAP queries</li><li>Table – Displays originating hosts</li></ul> |


### Configure the Largest Queries Analysis Task

Customizable parameters enable you to set the values used to control the minimum objects returned
and the days of traffic to analyze during this job’s analysis. The parameters can be customized and
are listed in a section at the bottom of the SQL Script Editor. Follow the steps to customize an
analysis task’s parameters.

**Step 1 –** Navigate to the **Active Directory** > **6.Activity** > **LDAP** > **AD_LDAPQueries** >
**Configure** node and select **Analysis**.

![Largest Queries analysis task configuration](/images/accessanalyzer/12.0/solutions/activedirectory/activity/ldapqueriesanalysisconfiguration.webp)

**Step 2 –** In the Analysis Selection view, select the **Largest Queries** analysis task and click
**Analysis Configuration**. The SQL Script Editor opens.

:::warning
Do not change any parameters where the Value states `Created during execution`.
:::


![Largest Queries analysis task in the SQL Script Editor](/images/accessanalyzer/12.0/solutions/activedirectory/activity/ldapsqlscripteditor.webp)

**Step 3 –** In the parameters section at the bottom of the editor, find the Value column. There are
two integer variables that can be modified. Double-click on the current **value** and change as
desired:

- @objects_returned – Controls the minimum number of objects returned for the queries to be
  considered large. This value is set to 100 by default.
- @timeframe – Controls the number of days to analyze traffic for. This value is set to 30 days by
  default.

**Step 4 –** Click **Save and Close** to finalize the customization and close the SQL Script Editor
window.

The analysis task now includes custom parameters for the updated values.
