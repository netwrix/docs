---
title: "E-mail Page"
description: "E-mail Page"
sidebar_position: 20
---

# E-mail Page

The E-mail page of the Report Configuration wizard gives you the option to break inheritance and
select report specific settings for emailing the report.

![Report Configuration wizard E-mail page](/images/accessanalyzer/12.0/admin/report/wizard/email.webp)

The default setting for new and included reports is **Use default setting**, which keeps the
inheritance from the global, job group, or job settings (see the
[Email Report Options](/docs/accessanalyzer/12.0/admin/settings/reporting.md#email-report-options),
[Reporting Node](/docs/accessanalyzer/12.0/admin/jobs/group/settings/reporting.md), and
[Report Settings Tab](/docs/accessanalyzer/12.0/admin/jobs/job/properties/reportsettings.md) topics for additional
information). If you want to keep the default, then you can skip this page of the wizard by clicking
**Next**.

:::note
In order for reports to be emailed, the SMTP server information must be configured in the
**Settings** > **Notification** node. See the [Notification](/docs/accessanalyzer/12.0/admin/settings/notification.md) topic
for additional information.
:::


To configure the setting for the report, use the Settings drop-down menu to select one of the
following options:

- Use default setting – The default option. Applies the Global notification settings, or whatever
  settings have been configured at the job group or job levels if inheritance has been broken. If
  **Email this report** is enabled by default, then using this option sends the report to the
  recipients configured at the parent level where the inheritance begins.
- Email this report – Select this option if you want to email the report and the inherited setting
  is **Do not email this report**, or if you want to configure specific email settings for the
  report. If it is selected, you must then configure the additional fields below.
- Do not email this report – Select this option to not email the report

![Settings configured to email the report](/images/accessanalyzer/12.0/admin/report/wizard/emailconfigured.webp)

If the **Email this report** setting is selected, then the following fields are enabled for you to
configure:

- Format – Select the format of the report to be contained in the email.
    - Web Link – Sends an email notice that the report has been published and provides the recipient
      with a link to it in the Web console
    - Embedded HTML – Sends the report embedded inside the email using HTML format
    - Data Tables as CSV (No Charts) – Attaches the complete data set (as configured within the
      report, without row limit) to an email as a CSV file, excluding any charts
    - PDF – Attaches the report to an email as a PDF file
- Subject – The subject line of the e-mail. By default it is
  `Netwrix Access Analyzer (formerly Enterprise Auditor) Report: [ReportName]`, with the
  `[ReportName]`variable being automatically populated.
- Send-To / Send-Cc / Send-Bcc – Enter the email addresses of the required recipients for the email
  notification. Use a semicolon (;) to separate multiple recipients.
- Do not e-mail this report if blank – Select this checkbox to not email the report if all elements
  of it are blank when it is generated
    - A blank report can occur if there is an error in data collection or if the report is
      configured for data which might not always be present (for example, new computer objects
      created since last scan)
