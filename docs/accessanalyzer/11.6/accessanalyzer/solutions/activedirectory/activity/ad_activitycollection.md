# 0.Collection > AD_ActivityCollection Job

The AD_ActivityCollection Job located in the 0.Collection Job Group, imports data from the Netwrix
Activity Monitor logs into the Enterprise Auditor Database. Retention can be modified in the query
(120 days default).

![AD_ActivityCollection Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

There are two ways AD Activity data can be retrieved by Enterprise Auditor:

- Network share containing the archive logs
- API Server connected to the archive logs

This is configured in the query. See the
[Queries for the AD_ActivityCollection Job](#queries-for-the-ad_activitycollection-job) topic for
additional information.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/accessanalyzer/admin/jobs/job/overview.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

![Configuration section on the AD_ActivityCollection job Overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/overviewconfiguration.webp)

The AD_ActivityCollection page has the following configurable parameters:

- Enable to import AD events into the AIC
- Enable to import authentication events into the AIC

    **NOTE:** The import of AD events and authentication events is disabled by default. You must
    enable these parameters for the activity data to be imported into the Netwrix Access Information
    Center. See the
    [(Optional) Configure Import of AD Activity into Netwrix Access Information Center](/docs/accessanalyzer/11.6/config/activedirectory/activity.md#optional-configure-import-of-ad-activity-into-netwrix-access-information-center)
    topic for instructions.

- List of attributes to track for Object Modified changes
- Number of days to retain activity data in the AIC

See the
[Customize Analysis Parameters for the AD_ActivityCollection Job](#customize-analysis-parameters-for-the-ad_activitycollection-job)
topic for additional information.

## Queries for the AD_ActivityCollection Job

The AD Activity Collection query uses the ADActivity Data Collector to target the Activity Monitor
archive logs for AD Activity.

**NOTE:** The query can be configured to connect directly to the network share where the archive
logs are stored or the API Server.

![Queries for the AD_ActivityCollection Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostdiscovery/queries.webp)

The AD_ActivityCollection Job uses the ADActivity Data Collector for the following query:

- AD Activity Collection – Targets Netwrix Activity Monitor archives to collect AD Activity

### Configure the Query to Import from the Activity Monitor

The AD_ActivityCollection Job requires configuration to collect data. Follow the steps to modify the
query configuration when Netwrix Activity Monitor is configured to host domain activity logs on an
API server.

**NOTE:** Ensure the Activity Monitor API Server and the required Connection Profile are
successfully set up. See the
[Active Directory Activity Auditing Configuration](/docs/accessanalyzer/11.6/config/activedirectory/activity.md)
topic for additional information.

**Step 1 –** Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** >
**AD_ActivityCollection** Job. Select the **Configure** > **Queries** node.

**Step 2 –** Click **Query Properties**. The Query Properties window displays.

**Step 3 –** On the Data Source tab, select **Configure**. The Active Directory Activity DC wizard
opens.

![Active Directory Activity DC wizard Category page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/categoryimportfromnam.webp)

**Step 4 –** On the Category page, choose **Import from SAM** option and click **Next**.

![Active Directory Activity DC wizard SAM connection settings page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/namconnection.webp)

**Step 5 –** On the SAM connection page, the **Port** is set to the default 4494. This needs to
match the port configured for the Activity Monitor API Server agent.

**Step 6 –** In the **Test SAM host** textbox, enter the Activity Monitor API Server name using
fully qualified domain format. For example, `NEWYORKSRV30.NWXTech.com`. Click **Connect**.

**Step 7 –** If connection is successful, the archive location displays along with a Refresh token.
Copy the **Refresh token**. This will replace the Client Secret in the Connection Profile in the
last step.

**Step 8 –** Click **Next**.

![Active Directory Activity DC wizard Scoping and Retention page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/scope.webp)

**Step 9 –** On the Scope page, set the Timespan as desired. There are two options:

- Relative Timespan – Set the number of days of activity logs to collect when the scan is run
- Absolute Timespan – Set the date range for activity logs to collect when the scan is run

**_RECOMMENDED:_** The threshold should be set to ensure the logs are collected before the Activity
Monitor domain output log retention expires. For example, if Enterprise Auditor runs the
**AD_ActivityCollection** Job once a week (every 7 days), then the Activity Monitor output should be
configured to retain at least 10 days of log files.

**Step 10 –** Set the Retention period as desired. This is the number of days Enterprise Auditor
keeps the collected data in the SQL Server database.

**Step 11 –** Click **Next** and then **Finish** to save the changes and close the wizard.

**Step 12 –** Click **OK** to save the changes and close the Query Properties page.

**Step 13 –** Navigate to the global **Settings** > **Connection** node to update the User
Credential with the Refresh token:

- Select the Connection Profile assigned to the **6.Activity** > **0.Collection** Job Group.
- Select the Web Services (JWT) User Credential and click **Edit**.
- Replace the Access Token with the Refresh token generated by the data collector in Step 7.
- Click **OK** to save and close the User Credentials window.
- Click **Save** and then **OK** to confirm the changes to the Connection Profile.

The query is now configured to target the Activity Monitor API Server to collect domain activity
logs.

### Configure the Query to Import from a Share

The AD_ActivityCollection Job requires configuration to collect data. Follow the steps to modify the
query configuration when Netwrix Activity Monitor is configured to store activity logs on a network
share.

**NOTE:** Ensure the Activity Monitor domain output and the required Connection Profile are
successfully set up. See the
[File Archive Repository Option](/docs/accessanalyzer/11.6/config/activedirectory/filearchive.md)
topic for additional information.

**Step 1 –** Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** >
**AD_ActivityCollection** Job. Select the **Configure** > **Queries** node.

**Step 2 –** Click **Query Properties**. The Query Properties window displays.

**Step 3 –** On the Data Source tab, select **Configure**. The Active Directory Activity DC wizard
opens.

![Active Directory Activity DC wizard Category page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/categoryimportfromshare.webp)

**Step 4 –** On the Category page, choose **Import from Share** option and click **Next**.

![Active Directory Activity DC wizard Share settings page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/share.webp)

**Step 5 –** On the Share page, provide the UNC path to the AD Activity share archive location. If
there are multiple archives in the same network share, check the **Include Sub-Directories** box.
Click **Next**.

![Active Directory Activity DC wizard Scoping and Retention page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/scope.webp)

**Step 6 –** On the Scope page, set the Timespan as desired. There are two options:

- Relative Timespan – Set the number of days of activity logs to collect when the scan is run
- Absolute Timespan – Set the date range for activity logs to collect when the scan is run

**_RECOMMENDED:_** The threshold should be set to ensure the logs are collected before the Activity
Monitor domain output log retention expires. For example, if Enterprise Auditor runs the
**AD_ActivityCollection** Job once a week (every 7 days), then the Activity Monitor output should be
configured to retain at least 10 days of log files.

**Step 7 –** Set the Retention period as desired. This is the number of days Enterprise Auditor
keeps the collected data in the SQL Server database.

**Step 8 –** Click **Next** and then **Finish** to save the changes and close the wizard.

**Step 9 –** Click **OK** to save the changes and close the Query Properties page.

The query is now configured to target the network share where the Activity Monitor domain activity
logs are archived.

## Analysis Tasks for the AD_ActivityCollection Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** >
**AD_ActivityCollection** Job. Select the **Configure** > **Analysis** node.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_ActivityCollection Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/analysis.webp)

The following analysis tasks are selected by default:

- UAC Formatting Function – Splits column on commas and assigns opposing values to attributes
- AIC Import - AD Activity Events – Imports AD events to the Access Information Center for domain
  objects

    - The `@ADEvents` and `@AuthEvents` parameters must be enabled for AD events and authentication
      events to be imported into the Access Information Center
    - The list of attributes to track for Object Modified changes can be customized by the
      `#modifiedAttributeList` parameter

- AIC Import - Activity Retention – Deletes older activity data from the Access Information Center

    - By default, data is retained for 120 days. This is customizable by the `@Days` parameter.

### Customize Analysis Parameters for the AD_ActivityCollection Job

The customizable parameters for this job allow you to configure importing of AD activity data into
the Netwrix Access Information Center.

| Analysis Task                   | Customizable Parameter Name | Default Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Value Indicates                                         |
| ------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| AIC Import - AD Activity Events | #modifiedAttributeList      | Default attributes: - givenName - sn - displayName - description - userPrincipalName - sAMAccountName - initials - title - department - company - manager - location - streetAddress - currentLocation - st - postalCode - c - otherTelephone - homePhone - ipPhone - mobile - facsimileTelephoneNumber - otherFacsimileTelephoneNumber - mail - wWWHomePage - employeeID - employeeType - employeeNumber - extensionAttribute1 - extensionAttribute2 - extensionAttribute3 - extensionAttribute4 - extensionAttribute5 - extensionAttribute6 - extensionAttribute7 - extensionAttribute8 - extensionAttribute9 - extensionAttribute10 - extensionAttribute11 - extensionAttribute12 - extensionAttribute13 - extensionAttribute14 - extensionAttribute15 | List of attributes to track for Object Modified changes |
| AIC Import - AD Activity Events | @ADEvents                   | False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Enable to import AD events into the AIC                 |
| AIC Import - AD Activity Events | @AuthEvents                 | False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Enable to import authentication events into the AIC     |
| AIC Import - Activity Retention | @Days                       | 120                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Number of days to retain activity data in the AIC       |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/accessanalyzer/admin/jobs/job/configure/analysiscustomizableparameters.md)
topic for additional information.
