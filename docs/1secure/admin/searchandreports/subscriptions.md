---
title: "Subscriptions"
description: "Subscriptions"
sidebar_position: 80
---

# Subscriptions

The Subscriptions feature allows Managed Service Providers (MSPs) to schedule certain reports
(including Risk Assessment Dashboard reports), send them to specific email addresses automatically,
or upload reports to a designated folder in SharePoint Online. This enables MSPs to:

- Carry out reporting obligations with the clients
- Store an audit trail for compliance purposes

## Add a Subscription

Follow the steps to add a subscription.

**Step 1 –** Click **Reports** in the top bar to navigate to the Reports page. By default, the page
opens to the Activity tab with New Investigation selected in the left pane.

**Step 2 –** Select an organization from the drop-down menu at the top of the left pane to access
its reports. An organization is selected by default, but you can choose a different one if needed.

**Step 3 –** In the left pane, click a category to view its reports.

**Step 4 –** Click a report to open it. Reports without a filter are automatically generated when
you open them. Click **Search** to generate reports with a predefined filter set.

:::note
You cannot subscribe to a report if no data is available for it. In this case, the
Subscribe button remains disabled.
:::


**Step 5 –** Click **Subscribe** on the top right of the page. The Subscription to
`<name of the report>` pane is displayed.

![Subscription to Report pane](/images/1secure/admin/searchandreports/subscriptions.webp)

**Step 6 –** Set a start date, time, and time zone for sending the report to the intended
recipients.

- Start Date – Click the icon in this field to open a calender to select a date. You can also type a
  date in the field.
- Time – Click the icon in this field to open a clock to select a time. You can also type a time in
  the field.
- Time Zone – Select a timezone.

**Step 7 –** Select a frequency for sending the reports from the Frequency drop-down menu. The
available options are: Daily, Weekly, and Monthly.

You can view the subscription timing details in the footer of the pane.

**Step 8 –** In the Attached File field, specify the name of the file the intended recipients will
receive. The default name is: Report on `{{Report_Name}}` `{{Export_Date}}`. These variables will be
replaced with the report's name and date. For example, Report on Accounts Deleted 01/10/2025
09:00:00.

You can use other variables to specify the file name, as discussed in the following step.

**Step 9 –** From the Variables drop-down menu, select a variable to be used in the name of the
file. To use multiple variables, select them one by one from the drop-down menu. The available
options are: Report Name, Export Date, Frequency, Num Records, Managing Organization, and Managed
Organization.

**Step 10 –** Select a file format (XLSX, CSV) from the drop-down menu.

**Step 11 –** Click the **Send reports by email** check box to specify email delivery settings. The
Email Settings section expands to display the following:

![Email Delivery Settings](/images/1secure/admin/searchandreports/subscriptionsemailsettings.webp)

- Recipients – Specify the email addresses of the recipients of the report subscription. You can
  enter multiple addresses separated by a comma.
- Email Subject – Specify the email subject. The default subject is: `{{Frequency}}` Report on
  `{{Report_Name}}` from `{{Managed_Organization}}`. These variables will be replaced with the
  report frequency, report name, and managed organization name. For example, Monthly Report on
  Accounts Deleted from Netwrix.

    You can use other variables to specify the subject line of the email, as discussed below.

- Variables – Select variable(s) to customize the subject line of the email. To use multiple
  variables, select them one by one from the drop-down menu. The available options are: Report Name,
  Export Date, Frequency, Num Records, Managing Organization, and Managed Organization.

    ![Email Subject](/images/1secure/admin/searchandreports/subscriptions_2.webp)

    :::note
    The End Customer Organization has the Organization Name variable instead of the
    Managed Organization and Managing Organization variables.
    :::


- Message – Enter the information to be included in the body of the email.

**Step 12 –** Click the **Upload reports to a designated folder in SharePoint Online** check box to
specify the settings for SharePoint Online delivery.

:::note
If you encounter the message, Integration required, you must first configure your
integration for SharePoint Online. See the
[SharePoint Online](/docs/1secure/integration/sharepointonline.md) topic for additional information.
:::


Expand the SharePoint Online Settings section and specify the following settings for saving the
report:

- SharePoint Online Site URL – The URL of the SharePoint site (e.g.
  https://site.Sharepoint.com/sites/sitename)
- SharePoint Online Folder Path – The folder path in SharePoint, relative to the site URL (e.g.
  /Shared Documents/FolderName)

    :::note
    For MSP organizations, reports will always be saved to the location in a sub-folder
    named after the child organization.
    :::


**Step 13 –** Click **Save Subscription**.

The subscription is created.

## Edit a Subscription

Follow the steps to edit a subscription.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** Click the name of an organization from the list. The properties page for the
organization is displayed.

**Step 3 –** Click the **Subscriptions** tab. The subscriptions for the organization are listed
here. On this page, you can review statuses for your subscriptions in the Last run result column. It
indicates the status for sending the reports or creating a subscription (New, Success, Error
Processing, Error Sending).

**Step 4 –** (Optional) To disable a subscription, toggle OFF the switch for it.

![Organization Subscriptions Page](/images/1secure/admin/searchandreports/subscriptions_3.webp)

**Step 5 –** Click the Edit icon for a subscription to modify it. The Subscription to
`<name of the report>` pane is displayed.

**Step 6 –** Modify the required information. For details, refer to Steps 6 through 12 in the
[Add a Subscription](#add-a-subscription) topic.

**Step 7 –** Click **Save**.

## Delete a Subscription

Follow the steps to delete a subscription.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** Click the name of an organization from the list. The properties page for the
organization is displayed.

**Step 3 –** Click the **Subscriptions** tab. The subscriptions for the organization are listed
here.

**Step 4 –** Click the Delete icon for a subscription to delete it.

A dialog box is displayed, prompting you to confirm the deletion of the subscription.

**Step 5 –** Click **Yes**.

The subscription is deleted.
