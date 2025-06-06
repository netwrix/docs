# AWS\_StaleUsers Job

The AWS\_StaleUsers job provides details on the last time each user logged in or their access key was used, highlighting those over specified number of days (default 60) or that have never logged in.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/overview.md#Parameter-Configuration) topic for instructions on how to edit parameters on a job overview page.

The AWS\_StaleUsers job has the following configurable parameter:

- Number of days before considering a user stale

See the [Customizable Analysis Tasks for the AWS\_StaleUsers Job](#Customizable-Analysis-Tasks-for-the-AWS_StaleUsers-Job) topic for additional information.

## Analysis Tasks for the AWS\_StaleUsers Job

Navigate to the __AWS__ > __2.Users__ > __AWS\_StaleUsers__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not deselect the selected analysis tasks. The analysis tasks are preconfigured for this job. Only modify the analysis tasks listed in the customizable analysis tasks section.

![Analysis Tasks for the AWS_StaleUsers Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/users/staleusersanalysis.png)

The following analysis tasks are selected by default:

- Stale Users – Identifies user accounts that have not been logged in to in the last 60 days. Creates the AWS\_StaleUser\_Details table accessible under the job’s Results node.

  - The number of days can be customized from the default value of 60. See the [Customizable Analysis Tasks for the AWS\_StaleUsers Job](#Customizable-Analysis-Tasks-for-the-AWS_StaleUsers-Job) topic for additional information.
- Stale User Summary – Summarizes stale users in AWS. Creates the AWS\_StaleUser\_Summary table accessible under the job’s Results node.

### Customizable Analysis Tasks for the AWS\_StaleUsers Job

The default values for parameters that can be customized are:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| Stale Users | @StaleThreshold | 60 | Number of days before considering a user stale |

See the [Configure the Customizable Parameters in an Analysis Task](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for instructions on how to modify parameters.

## Report for the AWS\_StaleUsers Job

In addition to the tables and views created by the analysis task, the AWS\_StaleUsers job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Stale Users | This report identifies user accounts which have not logged into AWS for an extended amount of time or have never logged in. A user account is considered stale if the last logon is over 60 days ago or the password has never been used. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays stale users by account - Table – Provides details on stale users |
