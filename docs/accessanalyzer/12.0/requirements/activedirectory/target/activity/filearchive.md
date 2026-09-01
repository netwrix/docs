---
title: "File Archive Repository Option"
description: "File Archive Repository Option"
sidebar_position: 10
---

# File Archive Repository Option

As an alternative to using an API Server, you can configure Netwrix Activity Monitor to store all
archived logs to a network share. This option requires storing all of the domain logs in the
same share location for Access Analyzer to collect the AD Activity data.

**Prerequisite**

Deploy the AD Agent to each domain controller in the target domain.

## Configure Domain Controller Agent

Configure the agent deployed to the domain controller.

:::note
These steps assume the network share where the activity log files will be archived already
exists.
:::


**Step 1 –** On the Agents tab of the Activity Monitor Console, select an agent deployed to domain
controller.

**Step 2 –** Click Edit. The Agent properties window opens.

**Step 3 –** Select the Archiving tab and configure the following:

- Check the Enable Archiving for this agent box.
- Select the **Archive log files on a UNC path** option. Click the ... button and navigate to the
  desired network share.
- Fill in the **User name** and **User password** fields only if the account used to
  install the agent doesn't have access to this share.

    :::tip
        Remember, The account used to install the agent on a domain controller is a Domain
    Administrator account. This is typically the credential you will use in the Netwrix Access
    Analyzer (formerly Enterprise Auditor) Connection Profile. However, a least privilege option is
    a domain user account with Read access to this share.
    :::


- Click **Test** to ensure a successful connection to the network share.

**Step 4 –** Click OK to save the configuration and close the Agent properties window.

**Step 5 –** Repeat Steps 1-4 for each agent deployed to domain controller pointing to the same
network share in Step 3 for each agent.

These agents save the Archive logs to the selected share.

## Configure Monitored Domain Output

Follow the steps configure the monitored domain output for Netwrix Access Analyzer (formerly
Enterprise Auditor).

**Step 1 –** Select the **Monitored Domains** tab.

**Step 2 –** Select the domain you want and click **Add Output**. The Add New Ouptut window opens.

**Step 3 –** Configure the following:

- Configure the number of days you want for the **Period to keep Log files**. This is the number of
  days the log files are kept on the API server you configured earlier. You need to
  set this to a greater value than the days between Access Analyzer scans.

    - For example, if Access Analyzer runs the **AD_ActivityCollection** Job once a week (every 7
      days), you should configure the Activity Monitor output to retain at least 10 days of log
      files.

- Check the **This log file is for StealthAUDIT** box.
- Optionally select the **Enable periodic AD Status Check event reporting** checkbox. When enabled,
  the agent will send out status messages every five minutes to verify whether the connection is
  still active.

**Step 4 –** Click **Add Output** to save and close the Add New Output window.

Access Analyzer now has access to the agent log files for this domain.

## Configure Connection Profile

Configure the Connection Profile in Access Analyzer.

**Step 1 –** On the Settings > Connection node of the Access Analyzer Console, select the Connection
Profile for the Active Directory solution. If you haven't yet created a Connection Profile or desire
a specific one for AD Activity, create a new one and provide a unique descriptive name.

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
dropdown menu and select the Connection Profile with this credential.

**Step 8 –** Click **Save** and then **OK** to confirm the changes to the job group settings.

Access Analyzer will now use the Connection Profile for AD Activity collection.

## Configure the AD_ActivityCollection Job

Access Analyzer requires additional configurations to collect domain activity data. Follow
the steps to configure the **AD_ActivityCollection** Job.

:::note
Ensure that you have successfully run the .Active Directory Inventory Job Group against
the target domain.
:::


**Step 1 –** Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** >
**AD_ActivityCollection** Job. Select the **Configure** > **Queries** node.

**Step 2 –** Click **Query Properties**. The Query Properties window displays.

**Step 3 –** On the Data Source tab, select **Configure**. The Active Directory Activity DC wizard
opens.

![Active Directory Activity DC wizard Category page](/images/activitymonitor/8.0/config/activedirectory/categoryimportfromshare.webp)

**Step 4 –** On the Category page, choose **Import from Share** option and click **Next**.

![Active Directory Activity DC wizard Share settings page](/images/activitymonitor/8.0/config/activedirectory/share.webp)

**Step 5 –** On the Share page, provide the UNC path to the AD Activity share archive location. If
there are multiple archives in the same network share, check the **Include Sub-Directories** box.
Click **Next**.

![Active Directory Activity DC wizard Scoping and Retention page](/images/activitymonitor/8.0/config/activedirectory/scope.webp)

**Step 6 –** On the Scope page, set the Timespan as desired. There are two options:

- Relative Timespan – Set the number of days of activity logs to collect when the scan is run
- Absolute Timespan – Set the date range for activity logs to collect when the scan is run

:::info
You should set the threshold to ensure the logs are collected before the Activity
Monitor domain output log retention expires. For example, if Access Analyzer runs the
**AD_ActivityCollection** Job once a week (every 7 days), you should configure the Activity Monitor
output to retain at least 10 days of log files.
:::


**Step 7 –** Set the Retention period as desired. This is the number of days Access Analyzer keeps
the collected data in the SQL Server database.

**Step 8 –** Click **Next** and then **Finish** to save the changes and close the wizard.

**Step 9 –** Click **OK** to save the changes and close the Query Properties page.

This query now targets the network share where the Activity Monitor domain activity
logs are archived.
