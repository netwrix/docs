---
title: "Export Report"
description: "Export Report"
sidebar_position: 40
---

# Export Report

An export puts the report results for an investigation into a desired format. The Export option
provides choices for how you can export the report results for an investigation. The report can be
exported in a specified format and can be downloaded, emailed, or scheduled as desired.

![Export option in the Investigation interface](/images/threatmanager/3.0/administration/investigations/options/export.webp)

After running an investigation query, click **Export**. Then select one of the following from the
dropdown menu:

- Export as CSV – Generates and downloads the report as a CSV file to your Downloads folder
- Export as PDF – Generates and downloads the report as a PDF file to your Downloads folder
- Export as JSON – Generates and downloads the report as a JSON file to your Downloads folder
- Send as Email – Opens the Send as Email window to send the report to recipients

    :::note
    This option requires an email server to be configured.
    :::


- Schedule Export – Opens the Schedule export window to save a copy of the report to a shared folder

    :::note
    This option requires a shared folder to be configured.
    :::


Reports download to the Downloads folder on your local machine, according to your browser settings. You can configure a folder on the application server to place copies of all exported
reports.

See the [Folder Settings Page](/docs/threatmanager/3.0/administration/configuration/integrations/foldersettings.md) topic for
additional information.

## Send as Email

:::note
This option requires an email server to be configured. If this requirement isn't met, a
message appears in the window. See the[Email Page](/docs/threatmanager/3.0/administration/configuration/integrations/email.md)
section for additional information.
:::


You can send the report data of an investigation as an attachment to an email. The attachment can be
any of the file formats available for download. To send a report as an email
attachment.

**Step 1 –** Click **Investigate** in the application header bar to open the Investigations
interface. Then click a folder in the navigation pane to access a saved investigation. An
investigation is located in the folder where it was saved.

**Step 2 –** After running a query and confirming the report data is displayed in the report
sections, click the **Export** menu and select **Send as Email**. The Send as Email window opens.

![Send as Email window](/images/threatprevention/7.5/reportingmodule/investigations/options/sendasemail.webp)

**Step 3 –** Begin typing in the **Recipients** textbox. You can enter a user name or email address.
Available email addresses from Active Directory that match the text string populate in the dropdown menu. Select a recipient.

**Step 4 –** Repeat Step 3 to add additional recipients.

**Step 5 –** Modify the subject line as desired in the Email Subject box. The default subject
is: Export of Report '[NAME OF INVESTIGATION]'.

**Step 6 –** Select the radio button for the file you want format: CSV, PDF, or JSON.

**Step 7 –** Click **Send**. The Send as Email window closes.

The recipients receive the report as an email attachment.

## Scheduled Export

:::note
This option requires a shared folder to be configured.If this requirement isn't met, a
message appears in the window. See the
[Folder Settings Page](/docs/threatmanager/3.0/administration/configuration/integrations/foldersettings.md) section for additional
information.
:::


You can schedule to save the report data of an investigation to a shared folder. The file format can
be any of the formats available for download. To schedule a report export:

**Step 1 –** Click **Investigate** in the application header bar to open the Investigations
interface. Then click a folder in the navigation pane to access a saved investigation. An
investigation is located in the folder where it was saved.

**Step 2 –** After running a query and confirming the report data is displayed in the report
sections, click the **Export** menu and select Scheduled export. The Schedule export window opens.

The name of the respective investigation appears as a link. Click it to view the filter defined
for the investigation.

![Schedule export window](/images/threatprevention/7.5/reportingmodule/investigations/options/scheduleexport.webp)

**Step 3 –** By default the schedule is enabled. You can disable it with the toggle button by the
window name.

**Step 4 –** Modify the text in the Export name field as desired. The default name is: Export for
`{{Investigation_Name}}`. This variable is replaced with the name of the investigation. The + button opens a variable menu for the field.

**Step 5 –** Select a shared folder from the **Publish folder** dropdown menu. Only folders
configured on the Folder Settings page of the Integrations interface are listed here.

**Step 6 –** Set a frequency. Options in the Frequency dropdown menu are: Once, Daily, Weekly, and
Monthly. Ensure the frequency doesn't exceed the "Time to Retain" settings for the System Jobs
configured in the System Settings interface.

**Step 7 –** Set the start date, time, and timezone for the selected frequency:

- Start date – This field opens a calender. You can also enter a date in the field.
- Time – This field opens a clock. You can also enter a date in the field.
- Timezone – This field opens a dropdown menu. Select the timezone you want.

**Step 8 –** Set the file name in the File name field. The default name
is: `{{Investigation_Name}}_{{Date}}`. This variable is replaced with the name of the investigation. The + button opens a variable menu for the field.

**Step 9 –** Select the file format for the export from the dropdown menu: CSV, PDF, JSON, Excel
Viewing.

**Step 10 –** Click **Save**. The Schedule export window closes.

The scheduled export is listed on the Subscriptions and Exports page of the Investigations
interface.

See the [Subscriptions and Exports Page](/docs/threatmanager/3.0/administration/investigations/subscriptionsexports.md) topic for additional
information.
