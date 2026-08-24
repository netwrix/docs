---
title: "Reporting"
description: "Reporting"
sidebar_position: 90
---

# Reporting

The Reporting node is for configuring the global settings for publishing Access Analyzer reports.
The Web Console is where users can view published reports outside the Access
Analyzer Console. The Web Console provides a consolidated logon housing both the published reports
and the Access Information Center (AIC) (when applicable).

![Global Settings Reporting page](/images/accessanalyzer/12.0/admin/settings/reporting.webp)

The publishing of reports can be disabled at the global level by selecting **Don't publish
reports** from the Publish Option dropdown menu. It can also be disabled at the job group, job, or
report configuration level. See the [Jobs Tree](/docs/accessanalyzer/12.0/admin/jobs/overview.md) topic for additional
information.

The **Cancel** and **Save** buttons are in the lower-right corner of the Reporting view. These
buttons become enabled when you modify the Reporting global settings. Whenever you make changes at the global level, click **Save** and then **OK** to confirm the changes.
Otherwise, click **Cancel** if you didn't intend to make changes.

## Website URL

The Website URL field contains address for the hosted website, the Web Console, where the published
reports reside.

![Website URL on Global Settings Reporting page](/images/accessanalyzer/12.0/admin/settings/websiteurl.webp)

The default address is:

http://[Fully Qualified Domain Name of the Access Analyzer Console server]:8082

This link accesses the Web Console, and it also serves as the web link in an emailed report.
You might need to modify the protocol and port number to align with the organization’s environment,
but it must match the information in the website’s configuration file. If the Web Console is
secured, you must manually update this address:

https://[Fully Qualified Domain Name of the StealthAUDIT Console server]:[Port Number]

:::note
Any browser used to access the Web Console must have JavaScript allowed for the site. See
the
[Configure JavaScript Settings for the Web Console](#configure-javascript-settings-for-the-web-console)
topic for additional information.
:::


## Publish Option

Use the Publish Option to enable or disable the publishing of reports at the global level.

![Publish Option on Global Settings Reporting page](/images/accessanalyzer/12.0/admin/settings/publish.webp)

Select the **Publish reports** option to publish all Access Analyzer reports or select **Don't
publish reports** to disable the publishing. The inheritance of this setting can be broken at the
job group, job, or report levels.

### Email Report Options

Configure email reports sent out by Access Analyzer using the Email Report options.

![Email options on Global Settings Reporting page](/images/accessanalyzer/12.0/admin/settings/email.webp)

The **E-mail reports** checkbox enables recipients to receive all published reports, unless direct
assignment at the job group, job, or report level breaks the inheritance. Separate multiple
recipients with a semicolon. If you use commas to delimit email addresses, Access Analyzer converts
them into semicolons when you save the settings.

:::info
Configure email reporting at a specific level to ensure recipients only receive
reports which apply to them.
:::


:::note
Email reports doesn't work unless you configure Access Analyzer to send email
notifications through the **Notification** node. See the [Notification](/docs/accessanalyzer/12.0/admin/settings/notification.md) topic for
additional information.
:::


The **Don't Email Report If Blank** checkbox stops Access Analyzer from sending reports by email if
all elements are blank when generated. A blank report can occur if there is an error in data
collection or if you configured the report for data that might not always be present (for example,
new computer objects created since last scan).

:::info
Enable the **Don't Email Report If Blank** option.
:::


You can send the report using the **Email Content** option you want:

- Web Link – Sends an email notice that the report has been published and provides the recipient
  with a link to it in the Web console
- Embedded HTML – Sends the report embedded inside the email using HTML format
- Data Tables as CSV (No Charts) – Attaches the complete data set (as configured within the report,
  without row limit) to an email as a CSV file, excluding any charts
- PDF – Attaches the report to an email as a PDF file

The **Subject(Prefix)** field identifies the prefix of the email subject line, unless direct
assignment at the job group, job, or report level breaks the inheritance. The prefix appears in the email header preceding the
report name. If left blank, Access Analyzer applies a prefix of `Access Analyzer Report` to the
email subject line.

## Configure JavaScript Settings for the Web Console

Any browser used to access the Web Console must have JavaScript allowed for all features of the Web
Console to function correctly. If the JavaScript permission isn't set as allowed for the entire
browser, you must add the Web Console as an allowed site.

Follow the steps to allow JavaScript on the Web Console in Microsoft Edge.

**Step 1 –** Open Microsoft Edge Settings.

![javascriptsitepermissions](/images/accessanalyzer/12.0/admin/settings/javascriptsitepermissions.webp)

**Step 2 –** Go to the **Cookies and site permissions** settings page, and click **JavaScript**
under All permissions.

![javascriptsettings](/images/accessanalyzer/12.0/admin/settings/javascriptsettings.webp)

**Step 3 –** Click **Add** in the Allow section. On the Add a site window, enter the URL for the Web
Console and click **Add**.

:::note
If you select the global Allowed option, you don't need to specifically add the Web
Console as an allowed site.
:::


Microsoft Edge adds the Web Console's URL to the Allow list and enables JavaScript for the Web Console.
