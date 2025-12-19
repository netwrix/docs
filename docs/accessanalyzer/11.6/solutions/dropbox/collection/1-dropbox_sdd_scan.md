---
title: "1-Dropbox_SDD Scan Job"
description: "1-Dropbox_SDD Scan Job"
sidebar_position: 20
---

# 1-Dropbox_SDD Scan Job

The 1-Dropbox_SDD Scan job collects data from the Dropbox environment on access rights, sharing
policies, configurations, content and sensitive data.

## Queries for the 1-Dropbox_SDD Scan Job

The 1-Dropbox_SDD Scan job has been preconfigured to run under the default settings within the
category of Scan for Sensitive Content.

![Queries for the 1-Dropbox_SDD Scan Job](/images/accessanalyzer/11.6/solutions/dropbox/collection/sddscanquery.webp)

The query for the 1-Dropbox_SDD Scan job is:

- Sensitive Data Scan – Scans Dropbox for sensitive data

### Configure the Sensitive Data Scan Query

Follow the steps to either generate the access token needed for the Connection Profile (only done
prior to first execution) or to set any desired customizations.

**Step 1 –** Navigate to the **Jobs** > **Dropbox** > **0.Collection** > **1-Dropbox_SDD Scan** >
**Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties** to open the Query Properties
window.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Dropbox Access Auditor
Data Collector Wizard opens.

![Dropbox Access Auditor Data Collector Wizard Scoping page](/images/accessanalyzer/11.6/solutions/dropbox/collection/sddscopingpage.webp)

**Step 4 –** On the Scoping page, select whether to scan **All Users** or **Limited Users**. If
**Limited Users** is selected, browse to a CSV file with one email address per row for the desired
users. In the File Permissions section, select the **Collect File Level Permissions** checkbox to
collect permissions at the file level. See the
[DropboxAccess: Scoping](/docs/accessanalyzer/11.6/admin/datacollector/dropboxaccess/scoping.md) topic
for additional information.

![Dropbox Access Auditor Data Collector Wizard DLP Audit Settings page](/images/accessanalyzer/11.6/solutions/dropbox/collection/sdddlpsettings.webp)

**Step 5 –** On theDLP Audit Settings page:

- Modify the maximum file size to be scanned
- Modify file types to be scanned
- Enable storing of discovered match hits
- Enable differential scanning

See the
[DropboxAccess: DLP Audit Settings](/docs/accessanalyzer/11.6/admin/datacollector/dropboxaccess/dlpauditsettings.md)
topic for additional information.

![Dropbox Access Auditor Data Collector Wizard Select DLP criteria page](/images/accessanalyzer/11.6/solutions/dropbox/collection/sddselectdlpcriteria.webp)

**Step 6 –** On the Select DLP Criteria for This Scan page , add or remove criteria as desired.

- (Optional) Create custom criteria with the **Edit** option. See the
  [Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/overview.md)
  topic for additional information.

See the
[DropboxAccess: Select DLP Criteria](/docs/accessanalyzer/11.6/admin/datacollector/dropboxaccess/selectdlpcriteria.md)
topic for additional information.

**Step 7 –** On the Completion Page, click **Finish** to save any setting modifications or click
**Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

If changes were made, the 1-Dropbox_SDD Scan job has now been customized.
