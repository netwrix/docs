---
title: "Reporting"
description: "Reporting"
sidebar_position: 90
---

# Reporting

The Reporting node is for configuring the global settings for publishing Enterprise Auditor reports.
The Web Console is where any reports which have been published can be viewed outside of the
Enterprise Auditor Console. The Web Console provides a consolidated logon housing both the published
reports and the AIC (when applicable).

![Global Settings Reporting page](/images/accessanalyzer/11.6/admin/settings/reporting.webp)

The publishing of reports can be disabled at the global level by selecting **Do not publish
reports** from the Publish Option drop-down menu. It can also be disabled at the job group, job, or
report configuration level. See the
[Jobs Tree](/docs/accessanalyzer/11.6/admin/jobs/overview.md) topic
for additional information.

The **Cancel** and **Save** buttons are in the lower-right corner of the Reporting view. These
buttons become enabled when modifications are made to the Reporting global settings. Whenever
changes are made at the global level, click **Save** and then **OK** to confirm the changes.
Otherwise, click **Cancel** if no changes were intended.

## Website URL

The Website URL field contains address for the hosted website, the Web Console, where the published
reports reside.

![Website URL on Global Settings Reporting page](/images/accessanalyzer/11.6/admin/settings/websiteurl.webp)

The default address is:

http://[Fully Qualified Domain Name of the Enterprise Auditor Console server]:8082

This link is used to access the Web Console, and it is used for the web link in an emailed report.
The protocol and port number may need to be modified to align with the organization’s environment,
but it must match the information in the website’s configuration file. If the Web Console has been
secured, this address must be manually updated:

https://[Fully Qualified Domain Name of the StealthAUDIT Console server]:[Port Number]

:::note
Any browser used to access the Web Console must have JavaScript allowed for the site. See
the
[Configure JavaScript Settings for the Web Console](#configure-javascript-settings-for-the-web-console)
topic for additional information.
:::


## Publish Option

The Publish Option allows you to enable or disable the publishing of reports at the global level.

![Publish Option on Global Settings Reporting page](/images/accessanalyzer/11.6/admin/settings/publish.webp)

Select the **Publish reports** option to publish all Enterprise Auditor reports or select **Do not
publish reports** to disable the publishing. The inheritance of this setting can be broken at the
job group, job, or report levels.

### Email Report Options

Configure email reports sent out by Enterprise Auditor using the Email Report options.

![Email options on Global Settings Reporting page](/images/accessanalyzer/11.6/admin/settings/email.webp)

The **E-mail reports** checkbox enables recipients to receive all published reports, unless
inheritance is broken at the job group, job, or report level. Separate multiple recipients with a
semicolon. If commas are used as delimiters for email addresses, they will be converted into
semicolons when the settings are saved.

:::info
Configure email reporting at a specific level to ensure recipients only receive
reports which apply to them.
:::


:::note
Email reports does not work unless Enterprise Auditor has been configured to send email
notifications through the **Notification** node. See the
[Notification](/docs/accessanalyzer/11.6/admin/settings/notification.md)
topic for additional information.
:::


The **Do Not Email Report If Blank** checkbox prevents reports from being sent via email if all
elements are blank when generated. A blank report can occur if there is an error in data collection
or if the report is configured for data which might not always be present (for example, new computer
objects created since last scan).

:::info
Enable the **Do Not Email Report If Blank** option.
:::


The report can be sent using the desired **Email Content** option:

- Web Link – Sends an email notice that the report has been published and provides the recipient
  with a link to it in the Web console
- Embedded HTML – Sends the report embedded inside the email using HTML format
- Data Tables as CSV (No Charts) – Attaches the complete data set (as configured within the report,
  without row limit) to an email as a CSV file, excluding any charts
- PDF – Attaches the report to an email as a PDF file

The **Subject(Prefix)** field identifies the prefix of the email subject line, unless inheritance is
broken at the job group, job, or report level. The prefix appears in the email header preceding the
report name. If left blank, Enterprise Auditor applies a prefix of `Enterprise Auditor Report` to
the email subject line.

## Configure JavaScript Settings for the Web Console

Any browser used to access the Web Console must have JavaScript allowed for all features of the Web
Console to function correctly. If the JavaScript permission is not set as allowed for the entire
browser, you must add the Web Console as an allowed site.

Follow the steps to allow JavaScript on the Web Console in Microsoft Edge.

**Step 1 –** Open Microsoft Edge Settings.

![javascriptsitepermissions](/images/accessanalyzer/11.6/admin/settings/javascriptsitepermissions.webp)

**Step 2 –** Go to the **Cookies and site permissions** settings page, and click **JavaScript**
under All permissions.

![javascriptsettings](/images/accessanalyzer/11.6/admin/settings/javascriptsettings.webp)

**Step 3 –** Click **Add** in the Allow section. On the Add a site window, enter the URL for the Web
Console and click **Add**.

:::note
If the global Allowed option is selected, you do not need to specifically add the Web
Console as an allowed site.
:::


The Web Console's URL is added to the Allow list and JavaScript is enabled for the Web Console.
