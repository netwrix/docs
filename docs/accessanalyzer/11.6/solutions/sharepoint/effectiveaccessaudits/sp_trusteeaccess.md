---
title: "Scoping > SP_TrusteeAccess Job"
description: "Scoping > SP_TrusteeAccess Job"
sidebar_position: 10
---

# Scoping > SP_TrusteeAccess Job

The SP_TrusteeAccess job allows you to scope a list of users to audit their access across the
SharePoint environment. You can also accomplish this by looking users up in the Access Information
Center, however you want to utilize this job in scenarios where you want to generate a report on
multiple users’ effective access at once.

:::note
Trustees can be specified in the `UserScoping.csv` file for the SP_TrusteeAccess Job. See
the
[Configure CSV File for the Query for the SP_TrusteeAccess Job](#configure-csv-file-for-the-query-for-the-sp_trusteeaccess-job)
topic for additional information.
:::


![Scoping > SP_TrusteeAccess Job in the Jobs Tree](/images/accessanalyzer/11.6/solutions/sharepoint/effectiveaccessaudits/scopingjobstree.webp)

The SP_TrusteeAccess job is located in the Scoping Job Group.

## Queries for the SP_TrusteeAccess Job

The SP_TrusteeAccess Job uses the TextSearch Data Collector for the following query:

![Queries for the SP_TrusteeAccess Job](/images/accessanalyzer/11.6/solutions/sharepoint/effectiveaccessaudits/trusteeaccessquery.webp)

The default query is:

- Scoping – Modifies the CSV in the Job Directory. See the
  [Configure CSV File for the Query for the SP_TrusteeAccess Job](#configure-csv-file-for-the-query-for-the-sp_trusteeaccess-job)
  topic for additional information.

### Configure CSV File for the Query for the SP_TrusteeAccess Job

Follow the steps to specify trustees in the `UserScoping.csv` file.

**Step 1 –** Navigate to the **Jobs** > **SharePoint** > **Effective Access Audits** > **Scoping** >
**SP_TrusteeAccess** Job and right-click on the job. Select **Explore Folder** and the job’s
directory opens.

![UserScoping.csv in the SP_TrusteeAccess Job folder in File Explorer](/images/accessanalyzer/11.6/solutions/sharepoint/effectiveaccessaudits/userscopingfileexplorer.webp)

**Step 2 –** Open the `UserScoping.csv` file with a text editor, for example Notepad.

![UserScoping.csv file in Notepad](/images/accessanalyzer/11.6/solutions/sharepoint/effectiveaccessaudits/userscopingnotepad.webp)

**Step 3 –** Enter the trustees using a `Domain\UserName` format. Enter one trustee per row.

**Step 4 –** Save and close the file.

The SP_TrusteeAccess Job is now ready to import this list of trustees to scope the Effective Access
Audits Job Group. After job execution, the list of specified trustees will populate the Scope table
accessible under the job’s Results node.
