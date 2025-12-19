---
title: "2-AD_Changes Job"
description: "2-AD_Changes Job"
sidebar_position: 30
---

# 2-AD_Changes Job

The 2-AD_Changes Job tracks changes within all scanned domains. Reports in the job highlight Active
Directory changes which have occurred since the last time the .Active Directory Inventory Job Group
was run. It is dependent on the running of the 1-AD_Scan Job, also located in the .Active Directory
Inventory Job Group.

The 1-AD_Scan Job must have the Query Option to **Track changes into Change tracking tables**
selected in order for the Analysis Tasks in the 2-AD_Changes Job to work. See Step 4 of the
[Customize the 1-AD_Scan Query](/docs/accessanalyzer/11.6/solutions/activedirectoryinventory/1-ad_scan.md#customize-the-1-ad_scan-query)
topic for additional information.

## Analysis Tasks for the 2-AD_Changes Job

View the analysis tasks by navigating to the **.Active Directory Inventory** > **2-AD_Changes** >
**Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the 2-AD_Changes Job](/images/accessanalyzer/11.6/solutions/activedirectoryinventory/changesanalysis.webp)

The following analysis tasks are selected by default:

- Org Changes

    - Creates the SA_AD_Changes_OrganizationalChanges table accessible under the job’s Results node
    - Creates interim processing tables in the database for use by downstream analysis and report
      generation

- Analyze Group Changes – Creates the SA_AD_Changes_GroupAnalysis table accessible under the job’s
  Results node
- Attribute Changes

    - Creates the SA_AD_Changes_AttributeChangeDetails table accessible under the job’s Results node
    - Creates interim processing tables in the database for use by downstream analysis and report
      generation

- User Account Status

    - Creates the SA_AD_Changes_UserAccountStatus table accessible under the job’s Results node
    - Creates interim processing tables in the database for use by downstream analysis and report
      generation

- Group Membership Changes

    - Creates the SA_AD_Changes_GroupMembershipChanges table accessible under the job’s Results node
    - Creates interim processing tables in the database for use by downstream analysis and report
      generation

- Object Moves

    - Creates the SA_AD_Changes_ObjectMoves table accessible under the job’s Results node
    - Creates interim processing tables in the database for use by downstream analysis and report
      generation

- New Principals – Creates interim processing tables in the database for use by downstream analysis
  and report generation
- Deleted Principals

    - Creates the SA_AD_Changes_DeletedPrincipals table accessible under the job’s Results node
    - Creates interim processing tables in the database for use by downstream analysis and report
      generation

The Notification analysis tasks are optional and require configuration before enabling them. The
following analysis tasks are deselected by default:

- Domain Admin Changes – Alerts when Domain Admins Group membership changes occur

    - Importance – Security, as this is a Sensitive Security Group

- Empty Groups – Alerts when group membership changes result in an empty group

    - Importance – AD Clean-up

- Circular Nesting – Alerts when group membership changes result in a group effectively containing
  itself

    - Importance – Security and AD Clean-up

- Stale Membership – Alerts when group members become stale

    - Importance – Security and AD Clean-up

- Large Change – Alerts when group membership changes result in a group becoming large

    - Importance – Security

- Disabled Users – Alerts when user accounts become disabled

    - Importance – Security

- Locked out Users – Alerts when user accounts become locked-out

    - Importance – Security  and Employee Productivity

- Alert on New Principals – Alerts when new user, group, or computer objects are created

    - Importance – Security and AD Clean-up

- Alert on Deleted Users – Alerts when user accounts are deleted

    - Importance – Security  and Employee Productivity

Notification must have recipients configured for the analysis task. Optionally, the email subject
and body can be modified. See the
[Notification Analysis Tasks for the 2-AD_Changes Job](#notification-analysis-tasks-for-the-2-ad_changes-job)
topic for additional information.

In addition to the tables and views created by the analysis tasks, the 2-AD_Changes Job produces the
following pre-configured reports:

| Report                                               | Description                                                                           | Default Tags | Report Elements                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attribute Changes                                    | This report tracks attribute changes within Active Directory.                         | None         | This report is comprised of three elements: <ul><li>Bar graph – Displays Attribute Changes (Past 24 Hours)</li><li>Table – Provides details on attribute changes (Past 24 Hours)</li><li>Table – Provides details on changes</li></ul>                                                |
| Group Membership Changes (A.K.A. Most Active Groups) | This report tracks group membership changes in Active Directory.                      | None         | This report is comprised of three elements: <ul><li>Bar graph – Displays Most Active Groups (Past 24 Hours)</li><li>Table – Provides details on the most active groups (Past 24 Hours)</li><li>Table – Provides details on the most active groups</li></ul>                           |
| New Principals                                       | This report identifies when principals have been created on the targeted domains.     | None         | This report is comprised of two elements: <ul><li>Bar graph – Displays New Principals by Domain (Past 24 Hours)</li><li>Table – Provides details on the new principals by domain</li></ul>                                                                                            |
| Object Moves                                         | This report tracks object moves in Active Directory.                                  | None         | This report is comprised of two elements: <ul><li>Table – Displays Most Active OUs (Past 24 Hours)</li><li>Table – Provides details on the most active OUs</li></ul>                                                                                                                  |
| Org Changes (A.K.A. Organizational Changes)          | This report tracks organizational moves such as manager, title or department changes. | None         | This report is comprised of three elements: <ul><li>Bar graph – Displays Organizational Changes (Past 24 Hours)</li><li>Table – Provides details on organizational changes (Past 24 Hours)</li><li>Table – Provides details on the organizational changes</li></ul>                   |
| Principal Deletions (A.K.A. Past 24 Hours)           | This report identifies when principals have been deleted from the targeted domains.   | None         | This report is comprised of three elements: <ul><li>Bar graph – Displays Deleted Principals by Domain (Past 24 Hours)</li><li>Table – Provides details on deleted principals by domain (Past 24 Hours)</li><li>Table – Provides details on the principals by domain</li></ul>         |
| User Account Status Changes                          | This report tracks user account status changes.                                       | None         | This report is comprised of three elements: <ul><li>Bar graph – Displays User Account Control Changes (Past 24 Hours)</li><li>Table – Provides details on user account control changes (Past 24 Hours)</li><li>Table – Provides details on the user account control changes</li></ul> |


### Notification Analysis Tasks for the 2-AD_Changes Job

In order for Enterprise Auditor to send email notifications, it is necessary for the **Settings** >
**Notification** node to be properly configured. See the
[Notification](/docs/accessanalyzer/11.6/admin/settings/notification.md)
topic for instructions on enabling the Enterprise Auditor Console to send email notifications. Once
email notifications have been enabled, the individual notification analysis tasks can be configured
and enabled. Follow the steps to configure a notification analysis task.

**Step 1 –** Navigate to the **.Active Directory Inventory** > **2-AD_Changes** > **Configure** node
and select **Analysis**.

![Notification Analysis Tasks for the 2-AD_Changes Job](/images/accessanalyzer/11.6/solutions/activedirectoryinventory/changesanalysisnotification.webp)

**Step 2 –** In the Analysis Selection view, select the desired notification analysis task and click
**Analysis Configuration**. The Notification Data Analysis Module opens.

![Notification Data Analysis Module SMTP properties page](/images/accessanalyzer/11.6/solutions/activedirectoryinventory/notificationanalysissmtp.webp)

:::warning
Do not make changes to the pages preceding the SMTP page.
:::


**Step 3 –** Use the **Next** button to navigate to the email configuration SMTP page.

![Recipients section of SMTP properties page](/images/accessanalyzer/11.6/solutions/activedirectoryinventory/notificationanalysissmtprecipients.webp)

**Step 4 –** In the Recipients section, provide the email addresses or distribution lists (fully
qualified address) for those who are to receive this notification. Multiple addresses can be
provided. You can use the following options:

- Add – Add an email address to the E-mail field
- Remove – Remove an email address from the Recipients list
- Combine multiple messages into single message – Sends one email for all objects in the record set
  instead of one email per object to all recipients

![Message section of SMTP properties page](/images/accessanalyzer/11.6/solutions/activedirectoryinventory/notificationanalysissmtpmessage.webp)

**Step 5 –** In the Message section, edit the **Subject**. It is not recommended to remove any
parameters. Then, customize the email content in the textbox to provide an explanation of the
notification to the recipients.

**Step 6 –** Click **Next** to save these configuration changes and navigate to the Summary page. Do
not make changes to any other pages. Click **Finish**. The Notification Data Analysis Module window
closes.

**Step 7 –** This notification analysis task is now configured to send emails. In the Analysis
Selection view, select the task checkbox.

**Step 8 –** Repeat this process for each desired notification analysis task.

Configured and enabled notifications now send alerts automatically during the execution of the
2-AD_Changes Job.
