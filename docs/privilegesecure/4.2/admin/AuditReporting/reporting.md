---
title: "Reporting"
description: "Reporting"
sidebar_position: 60
---

# Reporting

Reports can be viewed and configured on the Reporting page. Predefined reports are available, as
well as platform-based reports based on the same data sources as the predefined reports.
Additionally, custom reports can be generated based on the predefined reports. All reports can be
downloaded as a PDF or CSV file or subscribed to via email.

## Reports Tree

The reports on the Reporting page are organized into folders in a tree menu. Reports can be added to
the Favorites folder or removed from the Favorites folder by clicking the star icon next to the
report name. Each report has a Filters tab (which allows the report to be run, downloaded, or
configured) and a Subscriptions tab (which allows the Privilege Secure user to Subscribe to the
report via email).

![Reports Tree](/images/privilegesecure/4.2/accessmanagement/admin/auditreporting/page/reportstree.webp)

The Search Reports box will search all report names, both predefined and custom, for the specified
report name. The report tree will then be filtered down to the matching reports.

## Report Folders

The Reports tree contains the following folders.

**Favorites Folder**

This folder in the report tree contains reports that have been marked with a star for easy access.
Clicking the star on a favorite report will remove it from the Favorites folder.

**Predefined Reports**

This folder contains predefined reports covering common reporting uses cases. Included are:

- Account Password Age
- All Activity Sessions
- Password Rotations

**Predefined Platform-Based Reports**

This folder contains predefined reports that are filtered to specific platforms. Included are:

- All Active Directory Sessions
- All Entra ID Sessions
- All Cisco Sessions
- All Linux Sessions
- All Microsoft SQL Server Sessions
- All Oracle Sessions
- All Website Sessions
- All Windows Sessions

**My Reports**

This folder contains all reports created using the “+” icon next to the Search Reports field or
created by modifying and saving an existing predefined or platform based report.

## Add a New Report

Click the + icon next to the Search Reports field to open a new custom report. Enter a name for the
new report in the Enter Report Name box.

### Filters Tab

The Filters tab provides customization options for the new report.

![Reporting Filters Tab](/images/privilegesecure/4.2/accessmanagement/admin/auditreporting/page/filterstab.webp)

The Filters tab has the following configuration options:

- Save – Saves the report and add it to the My Reports folder in the report tree
- Cancel – Cancels the creation of the report and clear all edits that have been made to the new
  report
- Source Drop-down List – Contains data sources that allow the report to look at different data sets
  related to Privilege Secure administration. See the Data Sources topic for additional information.
- Timeframe Drop-down List – Contains a number of predefined timeframes, ranging from “Last Hour” to
  “Last 30 Days”. Additionally, “Custom” can be selected, which makes visible a “Start date” date
  picker and an “End date” date picker.
- Attribute Drop-down List – Contains attributes from the given Source that can be paired with an
  operator and a value
- Operator – Contains operators that can be used to filter an attribute
- Value – This field allows manual entry of a value against which the operator will be applied. The
  field also offers a drop-down menu which is populated with values from the backend database.

### Data Sources

The Source drop-down list contains the following data sources for reports.

**Activity Sessions**

This data source contains activity session information, and allows the report to be filtered on the
following attributes for a given activity session:

- Domain
- Platform
- Activity
- Target User
- Target Host
- User

**Resource Sync**

This data source contains resource sync information, and allows the report to be filtered on the
following attributes for a given synced resource:

- Version
- Name
- IP Address
- Operating System

**Password Rotation**

This data source contains password rotation information, and allows the report to be filtered on the
following attributes for a given password rotation event:

- Target Rotation
- Results
- Change Reason
- User

**Password Age**

This data source contains password age information, and allows the report to be filtered on the
following attributes for a given user account:

- Account Name
- Computer
- Password Age
- Name
- Privilege

:::note
The Subscriptions tab will not be enabled until saving the report. See the Subscriptions
Tab topic for additional information.
:::


## Customize an Existing Report

Any predefined report, platform-based report, or custom report under My Reports functions
identically.

### Filters Tab

Customize the desired configuration settings in the Filters tab.

![Reporting Filters Tab](/images/privilegesecure/4.2/accessmanagement/admin/auditreporting/page/filterstab.webp)

The Filters tab has the following configuration options:

- Run Query – Runs the query for the given report, and returns any data matching the configured
  query
- Download Report – Generates and downloads the report, either as PDF or as CSV. The file name of
  the downloaded report will indicate the name of the report and the time of download. For example,
  "All Linux Sessions-24-05-07-164307".
- Save – Saves any modifications to the report. If this is a predefined or platform based report, it
  will save as a new report under My Reports
- Delete (available for custom reports only) – Deletes the custom report
- Source Drop-down List – Contains data sources that allow the report to look at different data sets
  related to Privilege Secure administration. See the Data Sources topic for additional information.
- Timeframe Drop-down List – Contains several predefined timeframes, ranging from “Last Hour” to
  “Last 30 Days”. Additionally, “Custom” can be selected, which makes visible a “Start date” date
  picker and an “End date” date picker.
- Attribute Drop-down List – Contains attributes from the given Source that can be paired with an
  operator and a value.
- Operator – Contains operators that can be used to filter an attribute.
- Value – Allows manual entry of a value against which the operator will be applied. The field also
  offers a drop-down menu which is populated with values from the backend database.

### Subscriptions Tab

The Subscriptions tab allows the Privilege Secure user to Subscribe to the report via email.

![Reporting Subscriptions Tab](/images/privilegesecure/4.2/accessmanagement/admin/auditreporting/page/subscriptionstab.webp)

The report will be emailed to the Email value for the user, which is populated based on Active
Directory attributes and can be confirmed for a given user by checking the Users and Groups page. If
a new custom schedule is needed for a Subscription, one can be created under the **Policy** >
**Platforms** > **Schedule Policies** menu. All Schedule Policies will show up in the list when you
Subscribe to a report. See the [Schedule Policies Page](/docs/privilegesecure/4.2/admin/interface/platforms/schedulepolicies/schedulepolicies.md) topic
for additional information.

The Subscriptions tab has the following configuration options:

- Search – Allows the subscriptions for this report to be searched based on the username of the
  subscribed Privilege Secure user
- Subscribe/Unsubscribe button – Subscribe or unsubscribe the logged in user to the report according
  to a specified schedule from the drop-down menu
- CSV checkbox – If checked, a CSV of the report will be emailed to the subscribed user
- PDF checkbox – If checked, a PDF of the report will be emailed to the subscribed user
- Subscriptions table – Shows the subscribed users for the report, and their subscription schedule
