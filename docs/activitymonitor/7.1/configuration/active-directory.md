# Active Directory Activity Auditing Configuration

There are two methods to configure Activity Monitor to provide Active Directory domain activity to
Enterprise Auditor:

- API Server
- File Archive Repository

See the
[File Archive Repository Option](/docs/activitymonitor/7.1/configuration/active-directory.md)
topic for additional information on that option.

## API Server Option

In this method, you will be deploying two agents:

- First, deploy an Activity Agent to a Windows server that will act as the API server. This is a
  non-domain controller server.

  **_RECOMMENDED:_** Deploy the API Server to the same server where the Activity Monitor Console
  resides.

- Next, deploy the AD Agent to all domain controllers in the target domain.

Follow the steps to setup integration between Activity Monitor and Enterprise Auditor through an API
server.

**Step 1 –** Deploy the Activity Agent to the API server.

**Step 2 –** Deploy the AD Agent to each domain controller in the target domain.

The next step is to configure the agent deployed to the API server.

## Configure API Server Agent

Follow the steps to configure the agent deployed to the API server.

**Step 1 –** On the Agents tab of the Activity Monitor Console, select the agent deployed to the
API server.

**Step 2 –** Click **Edit**. The Agent properties window opens.

**Step 3 –** Select the **API Server** tab and configure the following:

- Select the **Enable API access on this agent** checkbox.
- The default **API server port (TCP)** is 4494, but it can be modified if desired. Ensure the
  modified port is also used by Enterprise Auditor.
- Click **Add Application**. The Add or edit API client window opens.
- Configure the following:

  - Provide a descriptive and unique **Application name**, for example `Enterprise Auditor`.
  - Select the **Read** checkbox to grant this permission to this application.
  - Click **Generate** to generate the Client ID and Client Secret.
  - Copy the Client ID value to a text file.
  - Click **Copy** and save the Client Secret value to a text file.

    **CAUTION:** It is not possible to retrieve the value after closing the Add or edit
    API client window. It must be copied first.

  - By default, the **Secret Expires** in 3 days. That means it must be used in the Enterprise
    Auditor Connection Profile within 72 hours or a new secret will need to be generated. Modify
    if desired.
  - Click **OK** to save the configuration and close the Add or edit API client window.

- If the Activity Monitor Console server is not the API Server, then click **Use this console** to
  grant the Activity Monitor the ability to manage the API server.
- The IPv4 or IPv6 allowlist allows you to limit access to the API server data to specific hosts.

**Step 4 –** Click **OK** to save the configuration and close the Agent properties window.

The next step is to configure the agents deployed to the domain controllers.

## Configure Domain Controller Agent

Follow the steps to configure the agent deployed to the domain controller.

**Step 1 –** On the Agents tab of the Activity Monitor Console, select an agent deployed to domain
controller.

**Step 2 –** Click **Edit**. The Agent properties window opens.

**Step 3 –** Select the **Archiving** tab and configure the following:

- Select the **Enable Archiving for this agent** checkbox.
- Select the **Archive log files on a UNC path** option. Click the **...** button and navigate to
  the desired network share on the API server.
- The **User name** and **User password** fields only need to be filled in if the account used to
  install the agent does not have access to this share.

  _Remember,_ The account used to install the agent on a domain controller is a Domain
  Administrator account.

- Click **Test** to ensure a successful connection to the network share.

**Step 4 –** Click **OK** to save the configuration and close the Agent properties window.

**Step 5 –** Repeat Steps 1-4 for each agent deployed to domain controller.

These agent are configured to save the Archive logs to the selected share.

## Configure Monitored Domain Output

Follow the steps configure the monitored domain output for Netwrix Enterprise Auditor.

**Step 1 –** Select the **Monitored Domains** tab.

**Step 2 –** Select the desired domain and click **Add Output**. The Add New Ouptut window opens.

**Step 3 –** Configure the following:

- Configure the desired number of days for the **Period to keep Log files**. This is the number of
  days the log files are kept on the API server configured in the sections above. This needs to be
  set to a greater value than the days between Enterprise Auditor scans.

  - For example, if Enterprise Auditor runs the **AD_ActivityCollection** Job once a week (every 7
    days), then the Activity Monitor output should be configured to retain at least 10 days of log
    files.

- Check the **This log file is for StealthAUDIT** box.
- Optionally select the **Enable periodic AD Status Check event reporting** checkbox. When enabled,
  the agent will send out status messages every five minutes to verify whether the connection is
  still active.

**Step 4 –** Click **Add Output** to save and close the Add New Output window.

Enterprise Auditor now has access to the agent log files for this domain.

## Configure Enterprise Auditor Connection Profile

Follow the steps to configure the Connection Profile in Enterprise Auditor.

_Remember,_ the Client ID and Client Secret were generated by the API server and copied to a text
file. If the secret expired before the Connection Profile is configured, it will need to be
re-generated.

**Step 1 –** On the **Settings** > **Connection** node of the Enterprise Auditor Console, select the
Connection Profile for the Active Directory solution. If you haven't yet created a Connection
Profile or desire a specific one for AD Activity, create a new one and provide a unique descriptive
name.

**Step 2 –** Click **Add User credential**. The User Credentials window opens.

**Step 3 –** Configure the following:

- Select Account Type – Select **Web Services (JWT)**
- User name – Enter the Client ID generated by the Activity Monitor API Server
- Access Token – Enter the Client Secret generated by the Activity Monitor API Server

**Step 4 –** Click **OK** to save and close the User Credentials window.

**Step 5 –** Click **Save** and then **OK** to confirm the changes to the Connection Profile.

**Step 6 –** Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** Job
Group. Select the **Settings > Connection** node.

**Step 7 –** Select the **Select one of the following user defined profiles** option. Expand the
drop-down menu and select the Connection Profile with this credential.

**Step 8 –** Click **Save** and then **OK** to confirm the changes to the job group settings.

The Connection Profile will now be used for AD Activity collection.

## Configure the AD_ActivityCollection Job

The Enterprise Auditor requires additional configurations in order to collect domain activity data.
Follow the steps to configure the **AD_ActivityCollection** Job.

**NOTE:** Ensure that the **.Active Directory Inventory** Job Group has been successfully run
against the target domain.

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

### (Optional) Configure Import of AD Activity into Netwrix Access Information Center

AD Activity data can be imported into Netwrix Access Information Center by the
**AD_ActivityCollection** Job. However, this is disabled by default. Follow the steps to enable the
importing of AD activity data into the Access Information Center.

**Step 1 –** Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** >
**AD_ActivityCollection** Job.

**Step 2 –** On the job's Overview page, enable the import of AD Events.

- Click on the **Enable to import AD events into the AIC** parameter.
- On the Parameter Configuration window, select the **Enabled** checkbox and click **Save**.

**Step 3 –** On the job's Overview page, enable the import of authentication Events.

- Click on the **Enable to import authentication events into the AIC** parameter.
- On the Parameter Configuration window, select the **Enabled** checkbox and click **Save**.

**Step 4 –** Optionally, modify the **List of attributes to track for Object Modified changes** and
**Number of days to retain activity data in the AIC** parameters.

The **AD_ActivityCollection** Job is now configured to import both AD events and authentication
events into the Netwrix Access Information Center.

# File Archive Repository Option

As an alternative to using an API Server, Netwrix Activity Monitor can be configured to store all
archived logs to a network share. This option requires all of the domain logs to be stored in the
same share location in order for Enterprise Auditor to collect the AD Activity data.

Prerequisite

Deploy the AD Agent to each domain controller in the target domain.

## Configure Domain Controller Agent

Follow the steps to configure the agent deployed to the domain controller.

**NOTE:** These steps assume the network share where the activity log files will be archived already
exists.

**Step 1 –** On the Agents tab of the Activity Monitor Console, select an agent deployed to domain
controller.

**Step 2 –** Click Edit. The Agent properties window opens.

**Step 3 –** Select the Archiving tab and configure the following:

- Check the Enable Archiving for this agent box.
- Select the **Archive log files on a UNC path** option. Click the ... button and navigate to the
  desired network share.
- The **User name** and **User password** fields only need to be filled in if the account used to
  install the agent does not have access to this share.

  _Remember,_ The account used to install the agent on a domain controller is a Domain
  Administrator account. This is typically the credential that will be used in the Netwrix
  Enterprise Auditor Connection Profile. However, a least privilege option is a domain user
  account with Read access to this share.

- Click **Test** to ensure a successful connection to the network share.

**Step 4 –** Click OK to save the configuration and close the Agent properties window.

**Step 5 –** Repeat Steps 1-4 for each agent deployed to domain controller pointing to the same
network share in Step 3 for each agent.

These agent are configured to save the Archive logs to the selected share.

## Configure Monitored Domain Output

Follow the steps configure the monitored domain output for Netwrix Enterprise Auditor.

**Step 1 –** Select the **Monitored Domains** tab.

**Step 2 –** Select the desired domain and click **Add Output**. The Add New Ouptut window opens.

**Step 3 –** Configure the following:

- Configure the desired number of days for the **Period to keep Log files**. This is the number of
  days the log files are kept on the API server configured in the sections above. This needs to be
  set to a greater value than the days between Enterprise Auditor scans.

  - For example, if Enterprise Auditor runs the **AD_ActivityCollection** Job once a week (every 7
    days), then the Activity Monitor output should be configured to retain at least 10 days of log
    files.

- Check the **This log file is for StealthAUDIT** box.
- Optionally select the **Enable periodic AD Status Check event reporting** checkbox. When enabled,
  the agent will send out status messages every five minutes to verify whether the connection is
  still active.

**Step 4 –** Click **Add Output** to save and close the Add New Output window.

Enterprise Auditor now has access to the agent log files for this domain.

## Configure Enterprise Auditor Connection Profile

Follow the steps to configure the Connection Profile in Enterprise Auditor.

**Step 1 –** On the Settings > Connection node of the Enterprise Auditor Console, select the
Connection Profile for the Active Directory solution. If you haven't yet created a Connection
Profile or desire a specific one for AD Activity, create a new one and provide a unique descriptive
name.

**Step 2 –** Click Add User credential. The User Credentials window opens.

**Step 3 –** Configure the following:

- Select Account Type – Select **Active Directory Account**
- Domain – Select the domain where the network share resides
- User name – Enter the account with Read access to the network share
- Provide the account password:

  - Password Storage – Select the password storage location, if it is being stored in a vault,
    like CyberArk
  - Password / Confirm – Enter the account password in both fields

**Step 4 –** Click OK to save and close the User Credentials window.

**Step 5 –** Click **Save** and then **OK** to confirm the changes to the Connection Profile.

**Step 6 –** Navigate to the Jobs > Active Directory > 6.Activity > 0.Collection Job Group. Select
the **Settings > Connection** node.

**Step 7 –** Select the **Select one of the following user defined profiles** option. Expand the
drop-down menu and select the Connection Profile with this credential.

**Step 8 –** Click **Save** and then **OK** to confirm the changes to the job group settings.

The Connection Profile will now be used for AD Activity collection.

## Configure the AD_ActivityCollection Job

The Enterprise Auditor requires additional configurations in order to collect domain activity data.
Follow the steps to configure the **AD_ActivityCollection** Job.

**NOTE:** Ensure that the .Active Directory Inventory Job Group has been successfully run against
the target domain.

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

# Getting Data from NTP for AD Activity Reporting

When Netwrix Threat Prevention is configured to monitor a domain, the event data collected by the
policies can be provided to Netwrix Enterprise Auditor for Active Directory Activity reporting. This
is accomplished by configuring Threat Prevention to send data to Netwrix Activity Monitor, which in
turn creates the activity log files that Enterprise Auditor collects.

**NOTE:** Threat Prevention can only be configured to send event data to one Netwrix application,
either Netwrix Activity Monitor or Netwrix Threat Manager but not both. However, the Activity
Monitor can be configured with outputs for Enterprise Auditor and Threat Manager

Follow these steps to configure this integration.

**_RECOMMENDED:_** It is a best practice to use the API Server option of the Activity Monitor for
this integration between Threat Prevention and Enterprise Auditor.

**Step 1 –** In the Threat Prevention Administration Console, click **Configuration** > **Netwrix
Threat Manager Configuration** on the menu. The Netwrix Threat Manager Configuration window opens.

**Step 2 –** On the Event Sink tab, configure the following:

- Netwrix Threat Manager URI – Enter the name of the Activity Monitor agent host and port, which is
  4499 by default, in the following format:

  `amqp://localhost:4499`

  You must use localhost, even if Activity Monitor and Threat Prevention are installed on
  different servers.

- App Token – Leave this field blank for integration with Activity Monitor
- Policies – The table displays all policies created in Threat Prevention along with a State icon
  indicating if the policy is active. Check the **Send** box for the desired policies monitoring the
  target domain activity.

**Step 3 –** Click **Save**.

All real-time event data from the selected policies are now being sent to Activity Monitor.
Additional policies can be added to this data stream through the Netwrix Threat Manager
Configuration window or by selecting the **Send to Netwrix Threat Manager** option on the Actions
tab of the policy.
