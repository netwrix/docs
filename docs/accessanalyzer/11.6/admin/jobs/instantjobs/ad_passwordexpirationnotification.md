---
title: "AD_PasswordExpirationNotification Job"
description: "AD_PasswordExpirationNotification Job"
sidebar_position: 10
---

# AD_PasswordExpirationNotification Job

The AD_PasswordExpirationNotification Job determines when Active Directory user passwords are about
to expire and can be configured to send notifications to users prior to password expiration. It is
available through the Instant Job Library under the Active Directory library. See the
[Instant Job Wizard](/docs/accessanalyzer/11.6/admin/jobs/instantjobs/overview.md)
section for instructions to add this instant job into the Jobs tree. Since this job does not require
a host to target, select Local host on the Hosts page of the Instant Job Wizard.

![AD_PasswordExpirationNotification job in the Jobs tree](/images/accessanalyzer/11.6/admin/jobs/instantjobs/jobstree_3.webp)

Runtime Details:

- Dependencies – The .Active Directory Inventory Job Group must be successfully run before running
  this job
- Target Hosts – None
- Scheduling – This job should be scheduled to run as desired
- History Retention – Not supported and should be turned off
- Multi-console Support – Not supported

The AD_PasswordExpirationNotification Job runs analysis tasks that generate tables and configure
password expiration notifications. It also generates a report on passwords expiring within a
specified parameter, by default within 15 days. If desired, notifications of password expiration can
be configured to send to a help desk email (through an analysis task) and to the user (through an
action task).

## Analysis Tasks for the AD_PasswordExpirationNotification Job

Navigate to the **Jobs** > **AD_PasswordExpirationNotification** > **Configure** node and select
**Analysis** to view the analysis tasks.

![Default Analysis Tasks for the Job](/images/accessanalyzer/11.6/admin/jobs/instantjobs/analysistasks_2.webp)

The default analysis tasks are:

-   **1. User Password Information** – Creates the PasswordExpirationNotification_Details table
       accessible under the job’s Results node
    - Contains a configurable parameter for the number of days until a password expires to be
      identified
    - See the
      [Customizable Analysis Tasks for the AD_PasswordExpirationNotification Job](#customizable-analysis-tasks-for-the-ad_passwordexpirationnotification-job)
      topic for additional information.
-   **2. Domain Summary** – Creates an interim processing table in the database for use by downstream
       analysis and report generation
-   **3. Passwords Set to Expire Within 15 Days** – Creates the
       PasswordExpirationNotification_ExpiresWithin15Days table accessible under the job’s Results
       node
-   **4. Notification Data Table** – Creates the
       PasswordExpirationNotification_ExpiresWithin15Days_UserNotifications table accessible under
       the job’s Results node
-   **5. Help Desk Notification** – Sends notification of users with passwords set to expire in X days
    - See the
      [Notification Analysis Task in the AD_PasswordExpirationNotification Job](#notification-analysis-task-in-the-ad_passwordexpirationnotification-job)
      topic for additional information.

## Action for the AD_PasswordExpirationNotification Job

Navigate to the **Jobs** > **AD_PasswordExpirationNotification** > **Configure** node and select
**Actions** to view the action modules.

:::warning
This action is enabled by default.
:::


![Default Action Tasks for the Job](/images/accessanalyzer/11.6/admin/jobs/instantjobs/actiontasks_1.webp)

The default actions are:

-   **1. User Notification** – Uses the SendMail Action Module to send notifications to users on
       password expiration
    - Requires the Notification Actions license feature
    - See the
      [Action Task in the AD_PasswordExpirationNotification Job](#action-task-in-the-ad_passwordexpirationnotification-job)
      topic for additional information.

In addition to the tables created by the analysis and action tasks, the
AD_PasswordExpirationNotification Job produces the following pre-configured report.

| Report                            | Description                                                                      | Default Tags | Report Elements                                                                                                          |
| --------------------------------- | -------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Passwords Expiring Within 15 Days | This report displays users accounts with passwords set to expire within 15 days. | None         | This report is comprised of one element: <ul><li>Table – Displays details on passwords expiring within 15 days</li></ul> |


## Customizable Analysis Tasks for the AD_PasswordExpirationNotification Job

Customizable parameters enable Enterprise Auditor users to set the values used to classify user and
group objects during this job’s analysis. The parameters can be customized and are listed in a
section at the bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s
parameters.

:::warning
Do not change the table names or report name to align with a different value supplied
for this parameter. Modifying the table names will result in analysis and report errors downstream.
Only the report title and descriptions can be modified within the report configuration.
:::


| Analysis Task                | Customizable Parameter Name | Default Value | Value Indicates                                                                                   |
| ---------------------------- | --------------------------- | ------------- | ------------------------------------------------------------------------------------------------- |
| 1. User Password Information | @pswLen                     | 15            | Number of days left until a password expires, should be set according to an organizations policy. |

The parameters that can be customized are listed in a section at the bottom of the SQL Script
Editor. Follow the steps to customize an analysis task’s parameters.

**Step 1 –** Navigate to the **AD_PasswordExpirationNotification** > **Configure** node and select
**Analysis** to view the analysis tasks.

**Step 2 –** In the Analysis Selection view, select the **1. User Password Information** Analysis
Task and click on **Analysis Configuration**. The SQL Script Editor opens.

![1. User Password Information Analysis Task in SQL Script Editor](/images/accessanalyzer/11.6/admin/jobs/instantjobs/customizeanalysistask.webp)

**Step 3 –** In the parameters section at the bottom of the editor, find the Value column.
Double-click on the current value and change as desired.

:::warning
Do not change any parameters where the Value states **Created during execution**.
:::


**Step 4 –** Click **Save and Close** to finalize the customization and close the SQL Script Editor.

The new value will be applied to the next job execution.

## Notification Analysis Task in the AD_PasswordExpirationNotification Job

The Notification Analysis Task can be used to send a single email to specified recipients containing
a list of all users whose passwords will expire in the specified number of days, that is the users
listed in the PasswordExpirationNotification_ExpiresWithin15Days table. The analysis is enabled by
default. Therefore, when the job is executed the following message is sent to the specified
recipient, such as the organization’s help desk, with information from the associated table:

> _Subject:_ Users with Passwords About To Expire
>
> Support Team,
>
> Heads-up.  The following users are facing password expiration in seven days or less:
>
> [ -- Password for [User] ([NTAccount]) expires in [DaysUntilExpiration] days]
>
> Thank you,
>
> Netwrix

:::warning
Do not modify the tags, highlighted in bold text above.
:::


The Subject or message body can be modified, for example to replace `Netwrix` with the
organization’s name. Follow the steps to configure the 5. Help Desk Notification Analysis Task.

**Step 1 –** Navigate to the **AD_PasswordExpirationNotification** > **Configure** node and select
**Analysis** to view the Analysis tasks.

**Step 2 –** In the Analysis Selection view, select the **5. Help Desk Notification Analysis Task**
and click on **Analysis Configuration**. The Notification Data Analysis Module opens.

![SMTP properties page](/images/accessanalyzer/11.6/admin/jobs/instantjobs/smtpproperties.webp)

**Step 3 –** Use the **Next** button to navigate to the SMTP properties page. Do not make changes to
the preceding pages. The email configuration takes place on the SMTP page. Provide the recipients’
email addresses, Message Subject, and add the notification email content.

![SMTP properties add email recipients](/images/accessanalyzer/11.6/admin/jobs/instantjobs/smtppropertiesrecipients.webp)

In the Recipients section, provide the email addresses in the text box or distribution lists in the
E-mail field (fully qualified address) for those who are to receive this notification, for example
the organization’s Help Desk. Multiple addresses can be input by adding a semicolon (;) and space
between entries.

Use the **Add** and **Remove** buttons to add or remove the address in the E-mail field from the
Recipients list. There is an option to **Combine multiple messages into single message**, which is
checked by default so that it sends one email for all users in the record set instead of one email
per user.

![Message section of SMTP properties page](/images/accessanalyzer/11.6/admin/jobs/instantjobs/smtppropertiesmessage.webp)

In the Message section, the **Subject** should be configured. Then set the email content in the text
box as desired.

**Step 4 –** To save these configuration changes, use the **Next** button to navigate to the Summary
page. Do not make changes to any other pages. Click **Finish**. The Notification Data Analysis
Module window closes.

![Analyis Tasks view](/images/accessanalyzer/11.6/admin/jobs/instantjobs/analysistaskshelpdesknotification.webp)

**Step 5 –** This notification analysis task is now configured to send emails. In the Analysis
Selection view, ensure the 5. Help Desk Notification Analysis Task is checked so that notifications
can be sent automatically during the execution of the AD_PasswordExpirationNotification Job.

The recipients added in Step 3 receive a notification when the AD_PasswordExpirationNotification Job
is executed.

## Action Task in the AD_PasswordExpirationNotification Job

The 1. User Notification Action Task uses the SendMail Action Module to send users notification of
password expiration. It targets the SMTP Address Column of the users whose passwords are going to
expire within the desired number of days, that is the users listed in the
PasswordExpirationNotification_ExpiresWithin15Days_UserNotifications table. The action is enabled by
default. Therefore, when the job is executed the following message is sent to all users in the
associated table:

> _Subject:_ Attention **[User]** - Your Password Expires in **[DaysUntilExpiration]** Days
>
> Hello **[User]**,
>
> The password for the account **[NTAccount]** expires on **[ExpirationDate]**. Please change the
>password prior to the expiration date.  If account profiles are used on mobile devices, please
>remember to update the password on each device used.
>
> Thank you,
>
> Netwrix

:::warning
Do not change the recipient for the action task. While the tags can be moved, do not
remove or modify the tags, which are highlighted in bold text above.
:::


The subject or message body can be modified, for example to replace `Netwrix` with the
organization’s name. Follow the steps to modify the Subject or message body within the 1. User
Notification Action Task.

:::note
It is necessary for the
PasswordExpirationNotification_ExpiresWithin15Days_UserNotifications table to exist in the database
before this action task can be modified.
:::


**Step 1 –** Navigate to the **AD_PasswordExpirationNotification** > **Configure** node and select
**Actions**.

**Step 2 –** In the Action Selection view, select the **1. User Notification** Action Task and click
on **Action Properties** to view the actions.

:::warning
Do not modify the action task properties.
:::


**Step 3 –** In the Action Properties view, the action properties and a preview of the users from
the associated table are displayed. Click **Configure Action**. The Send Mail Action Module Wizard
opens.

![Send Mail Action Module Wizard Message page](/images/accessanalyzer/11.6/admin/jobs/instantjobs/actionwizardmessage.webp)

**Step 4 –** Click **Next** to navigate to the Message page. Modify the message **Subject** and
email content as desired.

**Step 5 –** Click **Next** and then **Finish** to save the changes. The Send Mail Action Module
Wizard closes.

**Step 6 –** Click **Save** on the Action Properties view.

When the action task is enabled, it executes as part of the job. Optionally, the action task can be
manually executed.
