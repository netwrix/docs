---
title: "AD_ShadowAccess Job"
description: "AD_ShadowAccess Job"
sidebar_position: 120
---

# AD_ShadowAccess Job

This job finds shadow access that leads to compromise of a domain or sensitive data. Attackers can
chain vulnerabilities to escalate privileges from a non-privileged user to administrator with only a
few steps. This job will generate the shortest path between every non-privileged user to a domain
administrative group, total domain compromise, or access to sensitive data.

This job will analyze the following links between resources and privileges in your environment:

- Effective Group Membership
- Modify Group Membership
- Reset User Password
- Access through adminSDHolder
- DCSync/Domain Replication privileges
- Shared passwords between domain accounts
- Groups that provide access to sensitive data
- Local administrators that can dump hashes from user sessions
- Administrative rights on SQL Servers that hold sensitive data

The AD_ShadowAccess Job has special dependencies. See the
[Recommended Configurations for AD Permissions Analyzer Solution](/docs/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/recommended.md) topic for
additional information.

## Analysis Tasks for the AD_ShadowAccess Job

Navigate to the **Active Directory Permissions Analyzer** > **AD_ShadowAccess** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks, with the exception of the
**Calculate Shadow Access** analysis tasks. The analysis tasks are preconfigured for this job. The
**Calculate Shadow Access** analysis task is the only analysis task that has customizable
parameters.
:::


![Analysis Tasks for the AD_ShadowAccess Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/shadowaccessanalysis.webp)

The default analysis tasks are:

- Shadow Access Schema – Sets up the Shadow Access Tables and Views
- Dijkstra – Creates an interim processing table in the database for use by downstream analysis and
  report generation
- Path Formatting – Creates an interim processing table in the database for use by downstream
  analysis and report generation
- String Split – Creates an interim processing table in the database for use by downstream analysis
  and report generation
- Calculate Shadow Access – Creates the SA_ShadowAccess_Details table accessible under the job’s
  Results node

    - This Analysis Task has configurable parameters. See the
      [Configure the Analysis Tasks for the AD_ShadowAccess Job](#configure-the-analysis-tasks-for-the-ad_shadowaccess-job)
      topic for additional information.

- Shadow Access Paths Cleanup – Removes calculated rows that are no longer used

In addition to the tables and views created by the analysis tasks, the AD_ShadowAccess Job produces
the following pre-configured reports.

| Report                       | Description                                                                                                | Default Tags | Report Elements                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Shadow Access         | This report will calculate the shortest path between highly sensitive privileges and non-privileged users. | None         | This report is comprised of five elements: <ul><li>Bar Chart – Displays summary information on targeted domain</li><li>Table – Provides details on targeted domain in table form</li><li>Table – Provides details on exploited permissions</li><li>Table – Provides details on vulnerabilities</li><li>Table – Provides details on domain users and attack paths that can be used against those domain users</li></ul> |
| Sensitive Data Shadow Access | This report will calculate the shortest path between highly sensitive data and non-privileged users.       | None         | This report is comprised of five elements: <ul><li>Bar Chart – Displays summary information on sensitive data</li><li>Table – Provides details on sensitive data in table form</li><li>Table – Provides details on exploited permissions</li><li>Table – Provides details on vulnerabilities</li><li>Table – Provides details on domain users and attack paths that can be used against those domain users</li></ul>   |


See the
[Report Functions for the AD_ShadowAccess Job](#report-functions-for-the-ad_shadowaccess-job) topic
for additional information.

### Customizable Analysis Tasks for the AD_ShadowAccess Job

The default values for customizable parameters are:

| Analysis Task            | Customizable Parameter Name | Default Value                                         | Instruction                           |
| ------------------------ | --------------------------- | ----------------------------------------------------- | ------------------------------------- |
| Calculate Shadow Access  | @session                    | 1                                                     | Set to 0 to turn off Session Analysis |
| @shared_password         | 0                           | Set to 0 to turn of Shared Password Analysis          |                                       |
| @modify_group_membership | 1                           | Set to 0 to turn off Modify Group Membership analysis |                                       |
| @sensitive_data          | 1                           | Set to 0 to ignore sensitive data attacks             |                                       |
| @dcsync                  | 1                           | Set to 0 to ignore dcsync rights                      |                                       |
| @sdholder                | 1                           | Set to 0 to ignore sdadminholder                      |                                       |
| @disabled                | 0                           | Set to 0 to ignore disabled users                     |                                       |

See the
[Configure the Analysis Tasks for the AD_ShadowAccess Job](#configure-the-analysis-tasks-for-the-ad_shadowaccess-job)
topic for additional information.

### Configure the Analysis Tasks for the AD_ShadowAccess Job

Customizable parameters enable Access Analyzer users to set the values used to classify user and
group objects during this job’s analysis. The parameters can be customized and are listed in a
section at the bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s
parameters.

**Step 1 –** Navigate to the **Active Directory Permissions Analyzer** > **AD_ShadowAccess** >
**Configure** node and select **Analysis** to view analysis tasks.

![Configure Calculate Shadow Access task from Analysis Selection view](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/shadowaccessanalysisconfigure.webp)

**Step 2 –** In the Analysis Selection view, select the **Calculate Shadow Access** analysis task,
then click **Analysis Configuration**. The SQL Script Editor opens.

![SQL Script Editor](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/shadowaccesssqlscripteditor.webp)

**Step 3 –** In the parameters section at the bottom of the editor, find the Value column.
Double-click on the current value and change as desired.

- If the variable type is a table, select the cell and click **Edit Table** to modify the value.

:::warning
Do not change any parameters where the Value states `Created during execution`.
:::


**Step 4 –** Click **Save and Close** to finalize the customization and close the SQL Script Editor
window.

The customizable analysis task parameters are now configured and ready to run.

### Report Functions for the AD_ShadowAccess Job

The reports generated by the AD_ShadowAccess Job presents users with an overview of vulnerabilities
and attack paths within the targeted environments.

![Shadow Access reports in the job's Results node](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/shadowaccessreports.webp)

Navigate to the **Active Directory Permissions Analyzer** > **AD_ShadowAccess** > **Results** node
to view the AD_ShadowAccess job reports.

:::note
These reports can also be accessed through the Web Console. See the
[Viewing Generated Reports](/docs/accessanalyzer/12.0/admin/report/view.md) topic for additional information.
:::


![Exploited Permissions and Vulnerabilities on Shadow Access reports](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/shadowaccessreport1.webp)

The Domain Shadow Access and Sensitive Data Shadow Access reports provide information on the
exploited permissions and vulnerabilities that can be used as attack paths for shadow access to
domain and sensitive data.

- Exploited Permissions – Displays summary information of the types of permissions that can be
  exploited by shadow attacks and the number of occurrences of those permissions
- Vulnerabilities – Displays summary information of the vulnerabilities that were detected and the
  number of occurrences of those vulnerabilities

![Report element displaying information on potential attack paths for users found in the targeted domain](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/shadowaccessreport2.webp)

The last report element displays information on potential attack paths for users found in the
targeted domain. Clicking on the green plus sign next to an attack path will open an Attack Path
window that displays a step-by-step process of how a user object, if compromised, can be used to
conduct a shadow attack.

![Attack Path window example](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/shadowaccessreport3.webp)

The Attack Path window displays how a user object can be used in a shadow attack.

- Example:

    - The `Everyone` principle has the rights to reset the password of `LSA`
    - `LSA` can modify group membership of `Domain Admins`
    - The Attack Path window reveals that every user in the domain is effectively a Domain Admin

![Attack Path window example](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/shadowaccessreport4.webp)

The number of objects and the direction of the arrows can change depending on the attack path and
related elements.

- Example:

    - The `testgroupuser10` user object is a Local Admin on the `TESTS` server
    - A user object that has a session on the `TESTS` server is a member of the `Domain Admins`
      group
    - If the `testgroupuser10` user object becomes compromised, an attacker can scrape the password
      hash on a user object’s local session on `TESTS` that also is a member of `Domain Admins` and
      become a Domain Admin itself
